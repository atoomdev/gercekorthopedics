import { neon } from '@neondatabase/serverless'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

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

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const content = post.content_tr || post.content_en || post.content || ''
  const title = post.title_tr || post.title_en || post.title || ''
  const readTime = Math.ceil(content.split(' ').length / 200) || 1

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-10 animate-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.created_at}>
                  {new Date(post.created_at).toLocaleDateString()}
                </time>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none animate-fade-up delay-200">
            <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground text-lg">
              {content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border animate-fade-up delay-300">
            <div className="bg-secondary/50 p-8 rounded-2xl hover-shadow-lift transition-all duration-500">
              <h3 className="text-xl font-semibold text-primary mb-3">
                About This Post
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                For more information about orthopedic health and our services, please visit our main page or contact us.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 animate-shadow-pulse"
              >
                Get In Touch
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  )
}
