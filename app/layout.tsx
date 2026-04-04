import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gercekortopedi.com.tr'),
  title: {
    default: 'Gerçek Ortopedi | Protez, Ortez ve Kişiye Özel Ortopedik Çözümler',
    template: '%s | Gerçek Ortopedi',
  },
  description:
    'Gerçek Ortopedi; protez, ortez, yürüme analizi ve kişiye özel tabanlık uygulamalarında güven veren, modern ve hasta odaklı ortopedik çözüm merkezidir.',
  applicationName: 'Gerçek Ortopedi',
  keywords: [
    'gerçek ortopedi',
    'protez',
    'ortez',
    'kişiye özel tabanlık',
    'yürüme analizi',
    'ankara ortopedi',
    'protez uygulama merkezi',
  ],
  openGraph: {
    title: 'Gerçek Ortopedi',
    description:
      'Protez, ortez, yürüme analizi ve kişiye özel ortopedik çözümler için modern ve güven veren uygulama merkezi.',
    url: 'https://www.gercekortopedi.com.tr',
    siteName: 'Gerçek Ortopedi',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerçek Ortopedi',
    description:
      'Kişiye özel protez, ortez ve ortopedik uygulamalar için premium dijital deneyim.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${plusJakartaSans.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
