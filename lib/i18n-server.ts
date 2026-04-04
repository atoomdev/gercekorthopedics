import { cookies } from 'next/headers'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_COOKIE_NAME,
  type Language,
  type LocalizedValue,
  getLocalizedValue,
  isLanguage,
} from '@/lib/i18n'

export async function getRequestLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  const cookieLanguage = cookieStore.get(LANGUAGE_COOKIE_NAME)?.value

  return isLanguage(cookieLanguage) ? cookieLanguage : DEFAULT_LANGUAGE
}

export async function getRequestLocalizedValue<T>(
  value: LocalizedValue<T>,
): Promise<T> {
  return getLocalizedValue(value, await getRequestLanguage())
}
