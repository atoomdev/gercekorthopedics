import type { Metadata } from 'next'

import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { KnowledgeCenter } from '@/components/knowledge-center'
import { Navbar } from '@/components/navbar'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { Specialties } from '@/components/specialties'
import { StructuredData } from '@/components/structured-data'
import { WhyUs } from '@/components/why-us'
import { getRequestLocalizedValue } from '@/lib/i18n-server'
import { metadataCopy } from '@/lib/site-content'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await getRequestLocalizedValue(metadataCopy.homeTitle),
    description: await getRequestLocalizedValue(metadataCopy.homeDescription),
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <StructuredData />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Specialties />
      <About />
      <WhyUs />
      <KnowledgeCenter />
      <Contact />
      <Footer />
    </main>
  )
}
