import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { parseContactSubmission } from '@/lib/contact-submissions'

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('admin_session')?.value
  return !!sessionId
}

async function ensureContactSubmissionColumns(sql: ReturnType<typeof neon>) {
  await sql(
    `ALTER TABLE contact_submissions
     ADD COLUMN IF NOT EXISTS email VARCHAR(255)`,
  )
  await sql(
    `ALTER TABLE contact_submissions
     ADD COLUMN IF NOT EXISTS request_area VARCHAR(255)`,
  )
}

export async function GET(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    await ensureContactSubmissionColumns(sql)
    const contacts = await sql(
      `SELECT id, name, phone, email, request_area, message, created_at 
       FROM contact_submissions 
       ORDER BY created_at DESC`
    )
    return NextResponse.json(contacts.map(parseContactSubmission))
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}
