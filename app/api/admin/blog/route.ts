import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('admin_session')?.value
  return !!sessionId
}

export async function GET(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    // Schema uses title_en, title_tr, slug_en, slug_tr, excerpt_en, excerpt_tr
    const posts = await sql(
      `SELECT id,
              title_en AS title, title_tr,
              slug_en  AS slug,  slug_tr,
              excerpt_en AS excerpt, excerpt_tr,
              published, created_at
       FROM blog_posts
       ORDER BY created_at DESC`
    )
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const {
      title_en, title_tr,
      slug_en,  slug_tr,
      excerpt_en, excerpt_tr,
      content_en, content_tr,
      featured_image_url,
      author,
      published,
    } = await request.json()

    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql(
      `INSERT INTO blog_posts
         (title_en, title_tr, slug_en, slug_tr,
          excerpt_en, excerpt_tr, content_en, content_tr,
          featured_image_url, author, published)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING id`,
      [
        title_en, title_tr,
        slug_en,  slug_tr,
        excerpt_en  ?? null, excerpt_tr  ?? null,
        content_en, content_tr,
        featured_image_url ?? null,
        author ?? null,
        published ?? false,
      ]
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
