'use client'

import {
  CheckCircle2,
  ClipboardList,
  Headset,
  ShieldCheck,
} from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { trustPillars, whyUsCopy } from '@/lib/site-content'

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="section-shell border-y border-border/70 bg-[linear-gradient(180deg,#f5fafb,#ffffff)]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={t(whyUsCopy.eyebrow)}
              title={t(whyUsCopy.title)}
              description={t(whyUsCopy.description)}
            />

            <div className="mt-8 rounded-[30px] border border-primary/10 bg-primary p-7 text-primary-foreground shadow-[0_24px_80px_rgba(10,34,57,0.12)]">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">
                    {t(whyUsCopy.focusLabel)}
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    {t(whyUsCopy.focusTitle)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {trustPillars.map((item) => (
              <article
                key={t(item.title)}
                className="rounded-[28px] border border-border/80 bg-white p-6 shadow-[0_18px_60px_rgba(10,34,57,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {t(item.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[28px] border border-border/80 bg-slate-50/80 p-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <ClipboardList className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(whyUsCopy.supportTitle)}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {t(whyUsCopy.supportTopics).map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[28px] border border-border/80 bg-slate-50/80 p-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Headset className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(whyUsCopy.communicationTitle)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {t(whyUsCopy.communicationDescription)}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
