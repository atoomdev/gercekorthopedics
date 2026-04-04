'use client'

import Link from 'next/link'

import { useLanguage } from '@/components/language-provider'
import { commonCopy, notFoundCopy } from '@/lib/site-content'

export function NotFoundContent() {
  const { t } = useLanguage()

  return (
    <section className="section-shell pt-36 sm:pt-40">
      <div className="container-shell">
        <div className="surface-panel mx-auto max-w-3xl p-10 text-center sm:p-12">
          <p className="eyebrow">404</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t(notFoundCopy.title)}
          </h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {t(notFoundCopy.description)}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="button-primary" href="/">
              {t(notFoundCopy.homeCta)}
            </Link>
            <Link className="button-secondary" href="/hizmetler">
              {t(commonCopy.exploreServices)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
