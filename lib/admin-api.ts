import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function requireAdminSession() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('admin_session')?.value

  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null
}

export function parseAdminEntityId(value: string) {
  const id = Number.parseInt(value, 10)

  if (!Number.isInteger(id) || id <= 0) {
    return null
  }

  return id
}

export function isUniqueConstraintError(error: unknown) {
  if (!(error instanceof Error)) {
    return false
  }

  return /duplicate key value|unique constraint/i.test(error.message)
}
