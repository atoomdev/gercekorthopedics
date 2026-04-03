import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    
    const result = await sql(
      `INSERT INTO contact_submissions (name, email, phone, message) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id`,
      [name, email, phone || null, message]
    )

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
