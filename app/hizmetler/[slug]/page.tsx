import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ServiceDetailPageContent } from '@/components/service-detail-page-content'
import { getRequestLanguage } from '@/lib/i18n-server'
import { getLocalizedValue } from '@/lib/i18n'
import {
  getServiceBySlug,
  serviceDetailPageCopy,
  serviceDetails,
} from '@/lib/site-content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const language = await getRequestLanguage()

  if (!service) {
    return {
      title: getLocalizedValue(serviceDetailPageCopy.notFoundTitle, language),
    }
  }

  return {
    title: getLocalizedValue(service.title, language),
    description: getLocalizedValue(service.shortDescription, language),
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceDetailPageContent service={service} />
      <Footer />
    </main>
  )
}
