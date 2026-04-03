import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

async function checkAuth(request: NextRequest) {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('admin_session')?.value
  
  if (!sessionId) {
    return false
  }
  return true
}

export async function GET(request: NextRequest) {
  if (!(await checkAuth(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const contacts = await sql(
      `SELECT id, name, email, phone, message, created_at 
       FROM contact_submissions 
       ORDER BY created_at DESC`
    )
    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}
