'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { PageHero } from '@/components/page-hero'
import {
  commonCopy,
  type ServiceDetail,
  serviceDetailPageCopy,
  siteConfig,
} from '@/lib/site-content'

type ServiceDetailPageContentProps = {
  service: ServiceDetail
}

export function ServiceDetailPageContent({
  service,
}: ServiceDetailPageContentProps) {
  const { t, template } = useLanguage()
  const serviceTitle = t(service.title)

  return (
    <>
      <PageHero
        eyebrow={t(serviceDetailPageCopy.heroEyebrow)}
        title={serviceTitle}
        description={t(service.intro)}
        primaryCta={{
          href: '/#iletisim',
          label: t(serviceDetailPageCopy.appointmentRequest),
        }}
        secondaryCta={{
          href: '/hizmetler',
          label: t(serviceDetailPageCopy.backToAllServices),
        }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="surface-panel p-7 sm:p-8">
              <p className="eyebrow">{t(serviceDetailPageCopy.whoItsFor)}</p>
              <ul className="mt-6 space-y-4">
                {t(service.whoItsFor).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-panel p-7 sm:p-8">
              <p className="eyebrow">{t(serviceDetailPageCopy.focusAreas)}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {t(service.focusAreas).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-slate-50 px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-border/70 bg-slate-50/70">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="surface-panel p-7 sm:p-8">
              <p className="eyebrow">{t(serviceDetailPageCopy.howProcessMoves)}</p>
              <div className="mt-7 space-y-5">
                {t(service.process).map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-panel p-7 sm:p-8">
              <p className="eyebrow">{t(serviceDetailPageCopy.expectedBenefits)}</p>
              <ul className="mt-7 space-y-4">
                {t(service.benefits).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#0a2239,#103858)] p-8 text-white shadow-[0_28px_90px_rgba(10,34,57,0.18)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="eyebrow border-white/15 bg-white/10 text-white/70">
                  {t(serviceDetailPageCopy.nextStepEyebrow)}
                </p>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {template(serviceDetailPageCopy.nextStepTitle, { service: serviceTitle })}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                  {t(serviceDetailPageCopy.nextStepDescription)}
                </p>
              </div>

              <div className="grid gap-3">
                <a className="button-primary justify-center" href={`tel:${siteConfig.phone.raw}`}>
                  <Phone className="size-4" />
                  {siteConfig.phone.display}
                </a>
                <a
                  className="button-secondary justify-center border-white/12 bg-white/10 text-white hover:bg-white/15"
                  href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  {t(serviceDetailPageCopy.whatsappAsk)}
                </a>
                <Link
                  className="button-secondary justify-center border-white/12 bg-white/10 text-white hover:bg-white/15"
                  href="/#iletisim"
                >
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
