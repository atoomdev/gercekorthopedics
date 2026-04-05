type RawContactSubmission = {
  id: number
  name: string | null
  phone?: string | null
  email?: string | null
  request_area?: string | null
  message: string | null
  created_at: string
}

export type ParsedContactSubmission = {
  id: number
  name: string
  phone: string | null
  email: string | null
  requestArea: string | null
  message: string
  created_at: string
}

function normalizeOptionalText(value: unknown): string | null {
  const normalized = String(value ?? '').trim()
  return normalized ? normalized : null
}

export function extractLegacyContactFields(message: string | null | undefined) {
  const normalizedMessage = normalizeOptionalText(message) ?? ''

  if (!normalizedMessage) {
    return {
      email: null,
      requestArea: null,
      message: '',
    }
  }

  const blocks = normalizedMessage
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  let email: string | null = null
  let requestArea: string | null = null
  let reachedMessage = false
  const messageBlocks: string[] = []

  for (const block of blocks) {
    if (!reachedMessage) {
      const emailMatch = block.match(/^(?:E-posta|Email):\s*(.+)$/i)
      if (emailMatch) {
        email ??= normalizeOptionalText(emailMatch[1])
        continue
      }

      const requestAreaMatch = block.match(
        /^(?:Talep alanı|Requested area):\s*(.+)$/i,
      )
      if (requestAreaMatch) {
        requestArea ??= normalizeOptionalText(requestAreaMatch[1])
        continue
      }

      reachedMessage = true
    }

    messageBlocks.push(block)
  }

  return {
    email,
    requestArea,
    message: normalizeOptionalText(messageBlocks.join('\n\n')) ?? '',
  }
}

export function parseContactSubmission(
  contact: RawContactSubmission,
): ParsedContactSubmission {
  const legacyFields = extractLegacyContactFields(contact.message)

  return {
    id: Number(contact.id),
    name: normalizeOptionalText(contact.name) ?? '-',
    phone: normalizeOptionalText(contact.phone),
    email: normalizeOptionalText(contact.email) ?? legacyFields.email,
    requestArea:
      normalizeOptionalText(contact.request_area) ?? legacyFields.requestArea,
    message: legacyFields.message,
    created_at: String(contact.created_at),
  }
}
