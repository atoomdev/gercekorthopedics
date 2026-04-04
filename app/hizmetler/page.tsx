import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceGrid } from '@/components/service-grid'
import { serviceDetails, siteConfig } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Gerçek Ortopedi hizmet alanları: protez uygulamaları, ortez çözümleri, kişiye özel tabanlık, yürüme analizi ve rehabilitasyon destek ürünleri.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="Hizmet Alanları"
        title="Ortopedik ihtiyaçları daha anlaşılır, daha yönlendirici ve daha güvenli bir yapıda sunuyoruz"
        description="Her hizmet başlığı; kimler için uygun olduğu, süreçte nelerin bekleneceği ve hangi faydayı hedeflediği açık şekilde yapılandırılmıştır."
        primaryCta={{ href: '/#iletisim', label: 'İletişime Geç' }}
        secondaryCta={{ href: `https://wa.me/${siteConfig.phone.whatsappRaw}`, label: 'WhatsApp’tan Ulaş' }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Tüm başlıklar"
            title="Doğru çözümü seçebilmek için önce ihtiyaç alanını netleştirmek gerekir"
            description="Aşağıdaki hizmet kartları, hangi çözümün hangi kullanıcı ihtiyacına yanıt verdiğini daha kolay görmeniz için hazırlanmıştır."
          />
          <div className="mt-14">
            <ServiceGrid services={serviceDetails} detailed />
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-border/70 bg-slate-50/70">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Doğru yönlendirme</span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Hangi hizmete ihtiyacınız olduğundan emin değilseniz birlikte değerlendirebiliriz
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                İlk görüşmede mevcut durumunuzu, kullanım hedefinizi ve günlük yaşam ihtiyaçlarınızı
                dinleyerek uygun başlığa yönlendirme yapılabilir. Böylece yanlış ürün arayışı yerine
                doğru çözüm planıyla ilerlersiniz.
              </p>
            </div>

            <div className="surface-panel p-8">
              <div className="grid gap-4">
                <a className="button-primary justify-center" href={`tel:${siteConfig.phone.raw}`}>
                  <Phone className="size-4" />
                  Randevu ve Bilgi Al
                </a>
                <a
                  className="button-secondary justify-center"
                  href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp’tan Ulaş
                </a>
                <Link className="button-secondary justify-center" href="/#iletisim">
                  Formu Doldur
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
