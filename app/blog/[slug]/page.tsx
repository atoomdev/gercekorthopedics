import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export const dynamic = 'force-dynamic'

async function getPost(slug: string) {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      SELECT * FROM blog_posts
      WHERE (slug_en = ${slug} OR slug_tr = ${slug} OR slug = ${slug}) AND published = true
    `

    return result[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    }
  }

  const title = post.title_tr || post.title_en || post.title || ''
  const description =
    post.excerpt_tr ||
    post.excerpt_en ||
    post.excerpt ||
    `${(post.content_tr || post.content_en || post.content || '').slice(0, 150)}...`

  return {
    title,
    description,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const content = post.content_tr || post.content_en || post.content || ''
  const title = post.title_tr || post.title_en || post.title || ''
  const readTime = Math.max(1, Math.ceil(content.split(/\s+/).filter(Boolean).length / 220))

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Blog’a dön
            </Link>

            <header className="mt-8 rounded-[36px] border border-border/80 bg-white p-8 shadow-[0_24px_80px_rgba(10,34,57,0.08)] sm:p-10">
              <p className="eyebrow">Bilgilendirici içerik</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  <time dateTime={post.created_at}>
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </time>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock3 className="size-4" />
                  <span>{readTime} dk okuma</span>
                </div>
              </div>
            </header>

            <div className="mt-10 rounded-[36px] border border-border/80 bg-white p-8 shadow-[0_24px_80px_rgba(10,34,57,0.08)] sm:p-10">
              <div className="whitespace-pre-wrap text-base leading-8 text-foreground/80">
                {content}
              </div>
            </div>

            <div className="mt-10 rounded-[36px] bg-[linear-gradient(135deg,#0a2239,#103858)] p-8 text-white shadow-[0_28px_90px_rgba(10,34,57,0.18)]">
              <p className="eyebrow border-white/15 bg-white/10 text-white/70">
                Sonraki adım
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                İçerikte bahsedilen konu sizin için de geçerliyse bize ulaşabilirsiniz
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Süreci birlikte değerlendirmek, doğru hizmet alanını belirlemek ve ilk
                randevu adımını planlamak için iletişim sayfasına geçebilirsiniz.
              </p>
              <div className="mt-8">
                <Link className="button-secondary border-white/12 bg-white/10 text-white hover:bg-white/15" href="/#iletisim">
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
