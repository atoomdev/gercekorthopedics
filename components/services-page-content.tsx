'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceGrid } from '@/components/service-grid'
import {
  commonCopy,
  serviceDetails,
  servicesPageCopy,
  siteConfig,
} from '@/lib/site-content'

export function ServicesPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t(servicesPageCopy.heroEyebrow)}
        title={t(servicesPageCopy.heroTitle)}
        description={t(servicesPageCopy.heroDescription)}
        primaryCta={{ href: '/#iletisim', label: t(commonCopy.contact) }}
        secondaryCta={{
          href: `https://wa.me/${siteConfig.phone.whatsappRaw}`,
          label: t(commonCopy.whatsappReach),
        }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow={t(servicesPageCopy.allHeadingsEyebrow)}
            title={t(servicesPageCopy.allHeadingsTitle)}
            description={t(servicesPageCopy.allHeadingsDescription)}
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
              <span className="eyebrow">{t(servicesPageCopy.guidanceEyebrow)}</span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t(servicesPageCopy.guidanceTitle)}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                {t(servicesPageCopy.guidanceDescription)}
              </p>
            </div>

            <div className="surface-panel p-8">
              <div className="grid gap-4">
                <a className="button-primary justify-center" href={`tel:${siteConfig.phone.raw}`}>
                  <Phone className="size-4" />
                  {t(servicesPageCopy.informationLine)}
                </a>
                <a
                  className="button-secondary justify-center"
                  href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  {t(commonCopy.whatsappReach)}
                </a>
                <Link className="button-secondary justify-center" href="/#iletisim">
                  {t(commonCopy.fillForm)}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
