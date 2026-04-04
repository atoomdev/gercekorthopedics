import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { LanguageProvider } from '@/components/language-provider'
import { metadataCopy } from '@/lib/site-content'
import { getRequestLanguage, getRequestLocalizedValue } from '@/lib/i18n-server'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
})

export async function generateMetadata(): Promise<Metadata> {
  const language = await getRequestLanguage()

  return {
    metadataBase: new URL('https://www.gercekortopedi.com.tr'),
    title: {
      default: await getRequestLocalizedValue(metadataCopy.defaultTitle),
      template: await getRequestLocalizedValue(metadataCopy.titleTemplate),
    },
    description: await getRequestLocalizedValue(metadataCopy.defaultDescription),
    applicationName: 'Gerçek Ortopedi',
    keywords: metadataCopy.keywords[language],
    openGraph: {
      title: await getRequestLocalizedValue(metadataCopy.openGraphTitle),
      description: await getRequestLocalizedValue(metadataCopy.openGraphDescription),
      url: 'https://www.gercekortopedi.com.tr',
      siteName: 'Gerçek Ortopedi',
      locale: language === 'en' ? 'en_US' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: await getRequestLocalizedValue(metadataCopy.openGraphTitle),
      description: await getRequestLocalizedValue(metadataCopy.twitterDescription),
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialLanguage = await getRequestLanguage()

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${fraunces.variable} font-sans antialiased`}>
        <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
