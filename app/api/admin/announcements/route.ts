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
    const announcements = await sql(
      `SELECT id,
              title_en AS title, title_tr,
              description_en AS content, description_tr,
              published, display_date, created_at
       FROM announcements
       ORDER BY created_at DESC`
    )
    return NextResponse.json(announcements)
  } catch (error) {
    console.error('Error fetching announcements:', error)
    const msg = error instanceof Error ? error.message : String(error)
    return NextResponse.json({ error: 'DB Error: ' + msg }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const {
      title_en, title_tr,
      description_en, description_tr,
      published
    } = await request.json()

    const sql = neon(process.env.DATABASE_URL!)
    const result = await sql(
      `INSERT INTO announcements
         (title_en, title_tr, description_en, description_tr, published)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING id`,
      [
        title_en || '', title_tr || '',
        description_en || '', description_tr || '',
        published ?? true,
      ]
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating announcement:', error)
    const msg = error instanceof Error ? error.message : String(error)
    return NextResponse.json({ error: 'DB Error: ' + msg }, { status: 500 })
  }
}
