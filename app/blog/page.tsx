import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import Link from 'next/link'
import { ArrowRight, CalendarDays, NotebookPen } from 'lucide-react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageHero } from '@/components/page-hero'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Protez, ortez, ayak sağlığı, yürüme analizi ve ortopedik bakım süreçlerine dair açıklayıcı içerikler.',
}

async function getPosts() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const posts = await sql`
      SELECT * FROM blog_posts
      WHERE published = true
      ORDER BY created_at DESC
    `
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="Blog"
        title="Ortopedik bakım ve uygulama süreçlerini daha anlaşılır hale getiren içerikler"
        description="Kullanıcıların karar verme sürecini kolaylaştırmak için protez, ortez, yürüme analizi ve ayak sağlığı alanlarında açıklayıcı içerikler paylaşıyoruz."
        primaryCta={{ href: '/#iletisim', label: 'Sorunuzu İletin' }}
        secondaryCta={{ href: '/hizmetler', label: 'Hizmetleri Görün' }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          {posts.length === 0 ? (
            <div className="surface-panel mx-auto max-w-3xl p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/8 text-primary">
                <NotebookPen className="size-7" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                İçerikler hazırlanıyor
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Çok yakında protez, ortez ve ortopedik bakım süreçlerine dair açıklayıcı
                blog yazılarını burada bulabilirsiniz.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {posts.map((post: any) => {
                const slug = post.slug_tr || post.slug_en || post.slug
                const title = post.title_tr || post.title_en || post.title
                const excerpt =
                  post.excerpt_tr ||
                  post.excerpt_en ||
                  post.excerpt ||
                  `${(post.content_tr || post.content_en || post.content || '').slice(0, 180)}...`

                return (
                  <article
                    key={post.id}
                    className="group flex h-full flex-col rounded-[30px] border border-border/80 bg-slate-50/80 p-7 transition hover:-translate-y-1 hover:border-primary/18 hover:bg-white hover:shadow-[0_24px_80px_rgba(10,34,57,0.08)]"
                  >
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CalendarDays className="size-4" />
                      <time dateTime={post.created_at}>
                        {new Date(post.created_at).toLocaleDateString('tr-TR')}
                      </time>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                      {title}
                    </h2>
                    <p className="mt-4 flex-1 text-base leading-7 text-muted-foreground">
                      {excerpt}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
                      >
                        Yazıyı okuyun
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
