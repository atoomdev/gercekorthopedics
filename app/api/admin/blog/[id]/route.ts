import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

import {
  isUniqueConstraintError,
  parseAdminEntityId,
  requireAdminSession,
} from '@/lib/admin-api'

type RouteContext = {
  params: Promise<{ id: string }>
}

async function getPostId(params: RouteContext['params']) {
  const { id } = await params
  return parseAdminEntityId(id)
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const unauthorizedResponse = await requireAdminSession()
  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const postId = await getPostId(params)
  if (!postId) {
    return NextResponse.json({ error: 'Invalid post id.' }, { status: 400 })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      SELECT
        id,
        title_tr,
        title_en,
        slug_tr,
        slug_en,
        excerpt_tr,
        excerpt_en,
        content_tr,
        content_en,
        author,
        published,
        created_at,
        updated_at
      FROM blog_posts
      WHERE id = ${postId}
      LIMIT 1
    `

    if (result.length === 0) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post.' },
      { status: 500 },
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteContext,
) {
  const unauthorizedResponse = await requireAdminSession()
  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const postId = await getPostId(params)
  if (!postId) {
    return NextResponse.json({ error: 'Invalid post id.' }, { status: 400 })
  }

  try {
    const {
      title_tr,
      title_en,
      slug_tr,
      slug_en,
      excerpt_tr,
      excerpt_en,
      content_tr,
      content_en,
      author,
      published,
    } = await request.json()

    if (
      !title_tr?.trim() ||
      !title_en?.trim() ||
      !slug_tr?.trim() ||
      !slug_en?.trim() ||
      !content_tr?.trim() ||
      !content_en?.trim()
    ) {
      return NextResponse.json(
        { error: 'Required blog fields are missing.' },
        { status: 400 },
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      UPDATE blog_posts
      SET
        title_tr = ${title_tr.trim()},
        title_en = ${title_en.trim()},
        slug_tr = ${slug_tr.trim()},
        slug_en = ${slug_en.trim()},
        excerpt_tr = ${excerpt_tr?.trim() || null},
        excerpt_en = ${excerpt_en?.trim() || null},
        content_tr = ${content_tr.trim()},
        content_en = ${content_en.trim()},
        author = ${author?.trim() || null},
        published = ${Boolean(published)},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${postId}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error updating post:', error)

    if (isUniqueConstraintError(error)) {
      return NextResponse.json(
        { error: 'Slug already exists.' },
        { status: 409 },
      )
    }

    return NextResponse.json(
      { error: 'Failed to update post.' },
      { status: 500 },
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext,
) {
  const unauthorizedResponse = await requireAdminSession()
  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const postId = await getPostId(params)
  if (!postId) {
    return NextResponse.json({ error: 'Invalid post id.' }, { status: 400 })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      DELETE FROM blog_posts
      WHERE id = ${postId}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Failed to delete post.' },
      { status: 500 },
    )
  }
}
