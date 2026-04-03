import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    
    const result = await sql(
      `INSERT INTO contact_submissions (name, phone, message) 
       VALUES ($1, $2, $3) 
       RETURNING id`,
      [name, phone || null, message]
    )

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    const msg = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: 'DB Error: ' + msg },
      { status: 500 }
    )
  }
}
