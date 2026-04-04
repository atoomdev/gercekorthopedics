'use client'

import { Award, DraftingCompass, Ruler, Wrench } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { aboutCopy, credibilityNotes, siteConfig } from '@/lib/site-content'

const storyIcons = [Award, Ruler, Wrench, DraftingCompass]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="hakkimizda" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="surface-panel overflow-hidden bg-[linear-gradient(180deg,#0a2239,#103858)] p-8 text-white lg:p-10">
            <p className="eyebrow border-white/15 bg-white/10 text-white/70">
              {t(aboutCopy.eyebrow)}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t(aboutCopy.title)}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/75">
              {t(aboutCopy.description)}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  {t(aboutCopy.foundedLabel)}
                </p>
                <p className="mt-2 text-3xl font-semibold">{siteConfig.foundedYear}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  {t(aboutCopy.centerLabel)}
                </p>
                <p className="mt-2 text-3xl font-semibold">{t(siteConfig.address.city)}</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-sm leading-7 text-white/75">
              {credibilityNotes.map((item) => (
                <li key={t(item)} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow={t(aboutCopy.whyImportantEyebrow)}
              title={t(aboutCopy.whyImportantTitle)}
              description={t(aboutCopy.whyImportantDescription)}
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutCopy.storyPoints.map((item, index) => {
                const Icon = storyIcons[index]

                return (
                  <article
                    key={t(item.title)}
                    className="rounded-[28px] border border-border/80 bg-slate-50/80 p-6"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                      {t(item.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {t(item.description)}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
