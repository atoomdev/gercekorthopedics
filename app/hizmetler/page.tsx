import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ServicesPageContent } from '@/components/services-page-content'
import { getRequestLocalizedValue } from '@/lib/i18n-server'
import { metadataCopy } from '@/lib/site-content'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await getRequestLocalizedValue(metadataCopy.servicesTitle),
    description: await getRequestLocalizedValue(metadataCopy.servicesDescription),
  }
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
