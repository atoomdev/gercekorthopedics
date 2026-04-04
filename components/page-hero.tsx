import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  primaryCta?: {
    href: string
    label: string
  }
  secondaryCta?: {
    href: string
    label: string
  }
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const secondaryIsExternal = secondaryCta?.href.startsWith('http')

  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-[linear-gradient(180deg,rgba(10,34,57,0.05),rgba(255,255,255,0.98))] pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,rgba(20,148,158,0.16),transparent_45%)]" />
      <div className="container-shell relative">
        <div className="max-w-4xl">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link className="button-primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                secondaryIsExternal ? (
                  <a
                    className="button-secondary"
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryCta.label}
                    <ChevronRight className="size-4" />
                  </a>
                ) : (
                  <Link className="button-secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ChevronRight className="size-4" />
                  </Link>
                )
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
