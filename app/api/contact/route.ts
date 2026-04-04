import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    const normalizedName = String(name || '').trim()
    const normalizedEmail = String(email || '').trim()
    const normalizedPhone = String(phone || '').trim()
    const normalizedMessage = String(message || '').trim()

    if (!normalizedName || !normalizedPhone || !normalizedMessage) {
      return NextResponse.json(
        { error: 'Ad Soyad, telefon ve mesaj alanları zorunludur.' },
        { status: 400 },
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    const messageToStore = normalizedEmail
      ? `E-posta: ${normalizedEmail}\n\n${normalizedMessage}`
      : normalizedMessage

    const result = await sql(
      `INSERT INTO contact_submissions (name, phone, message)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [normalizedName, normalizedPhone, messageToStore],
    )

    return NextResponse.json(
      { success: true, id: result[0].id },
      { status: 201 },
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    const message =
      error instanceof Error ? error.message : 'Mesaj kaydedilirken beklenmeyen bir hata oluştu.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
