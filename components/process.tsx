'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { processCopy, processSteps } from '@/lib/site-content'

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="surec" className="section-shell border-y border-border/70 bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t(processCopy.eyebrow)}
          title={t(processCopy.title)}
          description={t(processCopy.description)}
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={`${index}-${t(step.title)}`}
              className="rounded-[28px] border border-border/80 bg-[linear-gradient(180deg,#ffffff,#f5fafb)] p-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/60">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {t(step.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t(step.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
