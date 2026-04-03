import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_session', '', {
      path: '/',
      maxAge: 0,
      httpOnly: true,
      sameSite: 'lax',
    })
    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}
