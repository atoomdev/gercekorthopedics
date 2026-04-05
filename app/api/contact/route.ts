import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

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

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    const normalizedName = String(name || '').trim()
    const normalizedEmail = String(email || '').trim()
    const normalizedPhone = String(phone || '').trim()
    const normalizedService = String(service || '').trim()
    const normalizedMessage = String(message || '').trim()

    if (!normalizedName || !normalizedPhone || !normalizedMessage) {
      return NextResponse.json(
        { errorCode: 'MISSING_REQUIRED_FIELDS' },
        { status: 400 },
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    await ensureContactSubmissionColumns(sql)

    const result = await sql(
      `INSERT INTO contact_submissions (name, phone, email, request_area, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [
        normalizedName,
        normalizedPhone,
        normalizedEmail || null,
        normalizedService || null,
        normalizedMessage,
      ],
    )

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 },
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { errorCode: 'CONTACT_SUBMISSION_FAILED' },
      { status: 500 },
    )
  }
}
