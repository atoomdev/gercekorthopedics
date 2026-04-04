import Link from 'next/link'
import type { ComponentType } from 'react'
import {
  Activity,
  ArrowRight,
  Footprints,
  Hand,
  ShieldCheck,
  SquareActivity,
  Workflow,
} from 'lucide-react'

import { type ServiceDetail } from '@/lib/site-content'

const iconMap = {
  'protez-uygulamalari': Activity,
  'ortez-cozumleri': ShieldCheck,
  'kisiye-ozel-tabanlik-ve-yurume-analizi': Footprints,
  'ust-ekstremite-cozumleri': Hand,
  'servikal-ve-spinal-destekler': SquareActivity,
  'rehabilitasyon-ve-destek-urunleri': Workflow,
} satisfies Record<string, ComponentType<{ className?: string }>>

type ServiceGridProps = {
  services: ServiceDetail[]
  detailed?: boolean
}

export function ServiceGrid({ services, detailed = false }: ServiceGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.slug as keyof typeof iconMap] ?? Activity

        return (
          <article
            key={service.slug}
            className="group flex h-full flex-col rounded-[28px] border border-border/80 bg-white p-6 shadow-[0_24px_80px_rgba(10,34,57,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_90px_rgba(10,34,57,0.1)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <Icon className="size-6" />
              </div>
              <span className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                Kişiye özel
              </span>
            </div>

            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {service.shortDescription}
              </p>

              {detailed ? (
                <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground/80">
                  {service.focusAreas.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8">
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
                >
                  Detayları inceleyin
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
