'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { ServiceGrid } from '@/components/service-grid'
import { commonCopy, serviceDetails, servicesSectionCopy } from '@/lib/site-content'

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="hizmetler" className="section-shell bg-slate-50/70">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t(servicesSectionCopy.eyebrow)}
            title={t(servicesSectionCopy.title)}
            description={t(servicesSectionCopy.description)}
          />

          <Link className="button-secondary self-start lg:self-auto" href="/hizmetler">
            {t(commonCopy.allServices)}
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
