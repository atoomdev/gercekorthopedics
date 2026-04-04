import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import { notFound } from 'next/navigation'

import { BlogPostPageContent } from '@/components/blog-post-page-content'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getRequestLanguage } from '@/lib/i18n-server'
import { getLocalizedField, getLocalizedValue } from '@/lib/i18n'
import { blogPostCopy } from '@/lib/site-content'

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
  const language = await getRequestLanguage()

  if (!post) {
    return {
      title: getLocalizedValue(blogPostCopy.notFoundTitle, language),
    }
  }

  const title =
    getLocalizedField(
      language,
      post.title_tr || post.title,
      post.title_en || post.title,
    ) || ''
  const description =
    getLocalizedField(
      language,
      post.excerpt_tr || post.excerpt,
      post.excerpt_en || post.excerpt,
    ) ||
    `${(
      getLocalizedField(
        language,
        post.content_tr || post.content,
        post.content_en || post.content,
      ) || ''
    ).slice(0, 150)}...`

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

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogPostPageContent post={post as any} />
      <Footer />
    </main>
  )
}
