import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

import { parseAdminEntityId, requireAdminSession } from '@/lib/admin-api'

type RouteContext = {
  params: Promise<{ id: string }>
}

async function getAnnouncementId(params: RouteContext['params']) {
  const { id } = await params
  return parseAdminEntityId(id)
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const unauthorizedResponse = await requireAdminSession()
  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const announcementId = await getAnnouncementId(params)
  if (!announcementId) {
    return NextResponse.json(
      { error: 'Invalid announcement id.' },
      { status: 400 },
    )
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      SELECT
        id,
        title_tr,
        title_en,
        description_tr,
        description_en,
        published,
        display_date,
        created_at,
        updated_at
      FROM announcements
      WHERE id = ${announcementId}
      LIMIT 1
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Announcement not found.' },
        { status: 404 },
      )
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error fetching announcement:', error)
    return NextResponse.json(
      { error: 'Failed to fetch announcement.' },
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

  const announcementId = await getAnnouncementId(params)
  if (!announcementId) {
    return NextResponse.json(
      { error: 'Invalid announcement id.' },
      { status: 400 },
    )
  }

  try {
    const {
      title_tr,
      title_en,
      description_tr,
      description_en,
      published,
    } = await request.json()

    if (
      !title_tr?.trim() ||
      !title_en?.trim() ||
      !description_tr?.trim() ||
      !description_en?.trim()
    ) {
      return NextResponse.json(
        { error: 'Required announcement fields are missing.' },
        { status: 400 },
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      UPDATE announcements
      SET
        title_tr = ${title_tr.trim()},
        title_en = ${title_en.trim()},
        description_tr = ${description_tr.trim()},
        description_en = ${description_en.trim()},
        published = ${Boolean(published)},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${announcementId}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Announcement not found.' },
        { status: 404 },
      )
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error updating announcement:', error)
    return NextResponse.json(
      { error: 'Failed to update announcement.' },
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

  const announcementId = await getAnnouncementId(params)
  if (!announcementId) {
    return NextResponse.json(
      { error: 'Invalid announcement id.' },
      { status: 400 },
    )
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql`
      DELETE FROM announcements
      WHERE id = ${announcementId}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Announcement not found.' },
        { status: 404 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting announcement:', error)
    return NextResponse.json(
      { error: 'Failed to delete announcement.' },
      { status: 500 },
    )
  }
}
