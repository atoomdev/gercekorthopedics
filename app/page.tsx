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

export const metadata: Metadata = {
  title: 'Gerçek Ortopedi | Protez, Ortez ve Kişiye Özel Çözümler',
  description:
    'Ankara’da protez, ortez, kişiye özel tabanlık ve yürüme analizi hizmetleri için güven veren, modern ve dönüşüm odaklı ortopedik çözüm deneyimi.',
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
