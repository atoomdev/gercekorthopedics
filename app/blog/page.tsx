import { neon } from '@neondatabase/serverless'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Calendar } from 'lucide-react'

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
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse-slow">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Blog
              </h1>
              <p className="text-muted-foreground mt-1">
                Latest insights on orthopedic health
              </p>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 bg-secondary/30 rounded-2xl">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post: any, idx: number) => (
                <article
                  key={post.id}
                  className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {post.title_en || post.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.created_at}>
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {post.excerpt_en || post.excerpt || (post.content_en || post.content || '').substring(0, 200) + '...'}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/70 transition-colors group/btn"
                  >
                    Read More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
