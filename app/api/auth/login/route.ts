import { neon, NeonDbError } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcryptjs'

export const runtime = 'nodejs'

function isUndefinedColumnError(error: unknown): boolean {
  if (error instanceof NeonDbError && error.code === '42703') return true
  const msg = error instanceof Error ? error.message : String(error)
  return /column .* does not exist/i.test(msg)
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    if (!process.env.DATABASE_URL) {
      console.error('Login: DATABASE_URL is not set')
      return NextResponse.json(
        { error: 'Server misconfiguration' },
        { status: 500 }
      )
    }

    const sql = neon(process.env.DATABASE_URL)
    const loginValue = String(email).trim().toLowerCase()

    let result: Array<{ id: number; password_hash: string }>
    try {
      result = (await sql`
        SELECT id, password_hash
        FROM admin_users
        WHERE email = ${loginValue}
        LIMIT 1
      `) as Array<{ id: number; password_hash: string }>
    } catch (err) {
      if (!isUndefinedColumnError(err)) throw err
      result = (await sql`
        SELECT id, password_hash
        FROM admin_users
        WHERE username = ${loginValue}
        LIMIT 1
      `) as Array<{ id: number; password_hash: string }>
    }

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const user = result[0]
    let passwordMatch = false
    try {
      passwordMatch = await bcrypt.compare(password, user.password_hash)
    } catch {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_session', String(user.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
