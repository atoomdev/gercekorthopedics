import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'

import { BlogPageContent } from '@/components/blog-page-content'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getRequestLocalizedValue } from '@/lib/i18n-server'
import { metadataCopy } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await getRequestLocalizedValue(metadataCopy.blogTitle),
    description: await getRequestLocalizedValue(metadataCopy.blogDescription),
  }
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
      <BlogPageContent posts={posts as any[]} />
      <Footer />
    </main>
  )
}
