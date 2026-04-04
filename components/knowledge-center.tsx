'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { knowledgeCards, knowledgeCenterCopy } from '@/lib/site-content'

export function KnowledgeCenter() {
  const { t } = useLanguage()

  return (
    <section className="section-shell bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow={t(knowledgeCenterCopy.eyebrow)}
          title={t(knowledgeCenterCopy.title)}
          description={t(knowledgeCenterCopy.description)}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <article className="rounded-[32px] border border-border/80 bg-[linear-gradient(135deg,#0a2239,#123d58)] p-8 text-white shadow-[0_28px_90px_rgba(10,34,57,0.18)]">
            <p className="eyebrow border-white/20 bg-white/10 text-white/80">
              {t(knowledgeCenterCopy.guidanceEyebrow)}
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">
              {t(knowledgeCenterCopy.guidanceTitle)}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              {t(knowledgeCenterCopy.guidanceDescription)}
            </p>
            <div className="mt-8">
              <Link className="button-secondary border-white/15 bg-white/10 text-white hover:bg-white/15" href="/#iletisim">
                {t(knowledgeCenterCopy.guidanceCta)}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {knowledgeCards.map((card) => (
            <article
              key={t(card.title)}
              className="flex flex-col rounded-[32px] border border-border/80 bg-slate-50/80 p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {t(card.title)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                {t(card.description)}
              </p>
              <div className="mt-8">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {t(card.cta)}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
