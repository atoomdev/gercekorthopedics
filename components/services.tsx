import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { ServiceGrid } from '@/components/service-grid'
import { serviceDetails } from '@/lib/site-content'

export function Services() {
  return (
    <section id="hizmetler" className="section-shell bg-slate-50/70">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Teknik altyapıyı hasta için anlaşılır, güvenli ve kişiye uygun bir sürece çeviriyoruz"
            description="Ortopedik çözüm ihtiyacını sadece ürün seçimi olarak değil; değerlendirme, doğru planlama, uygulama ve takip bütünlüğü içinde ele alıyoruz."
          />

          <Link className="button-secondary self-start lg:self-auto" href="/hizmetler">
            Tüm hizmet alanlarını görün
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14">
          <ServiceGrid services={serviceDetails} detailed />
        </div>
      </div>
    </section>
  )
}
