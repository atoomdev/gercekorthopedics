'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
} from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { commonCopy, heroCopy, siteConfig } from '@/lib/site-content'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-36 pb-18 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_left_top,rgba(15,140,148,0.18),transparent_40%),radial-gradient(circle_at_right_top,rgba(15,45,76,0.16),transparent_38%)]" />

      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">{t(heroCopy.eyebrow)}</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t(heroCopy.title)}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              {t(heroCopy.description)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t(heroCopy.highlights).map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-sm text-foreground/80 shadow-[0_16px_40px_rgba(10,34,57,0.06)]"
                >
                  <CheckCircle2 className="size-4 text-accent" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={`tel:${siteConfig.phone.raw}`}>
                <PhoneCall className="size-4" />
                {t(commonCopy.appointment)}
              </a>
              <a
                className="button-secondary"
                href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" />
                {t(commonCopy.whatsappReach)}
              </a>
              <Link className="button-secondary" href="/hizmetler">
                {t(commonCopy.exploreServices)}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="surface-panel subtle-grid relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(15,140,148,0.16),transparent_60%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 rounded-[26px] border border-primary/10 bg-white/95 p-5 shadow-[0_16px_45px_rgba(10,34,57,0.06)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
                      {t(heroCopy.workflowLabel)}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {t(heroCopy.workflowTitle)}
                    </p>
                  </div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <CalendarCheck2 className="size-6" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  {t(heroCopy.workflowList).map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-border/70 bg-white/90 p-5 shadow-[0_16px_45px_rgba(10,34,57,0.05)]"
                    >
                      <p className="text-sm font-medium leading-7 text-foreground/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[28px] bg-[linear-gradient(135deg,#0a2239,#103858)] p-6 text-white shadow-[0_24px_80px_rgba(10,34,57,0.16)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    {t(heroCopy.appointmentLabel)}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">
                    {siteConfig.phone.display}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {t(heroCopy.appointmentDescription)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
