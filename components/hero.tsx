import Link from 'next/link'
import { ArrowRight, CalendarCheck2, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react'

import { heroHighlights, siteConfig, trustStats } from '@/lib/site-content'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-18 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_left_top,rgba(15,140,148,0.18),transparent_40%),radial-gradient(circle_at_right_top,rgba(15,45,76,0.16),transparent_38%)]" />

      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">Ankara merkezli ortopedik çözüm merkezi</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Protez, ortez ve kişiye özel ortopedik uygulamalarda güven veren bir
              sonraki adımı birlikte planlayalım.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.name}; protez uygulamaları, ortez çözümleri, yürüme analizi
              ve kişiye özel tabanlık süreçlerini, net iletişim ve kişiye özel planlama
              ile yürüten deneyimli bir uygulama merkezidir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
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
                Randevu Al
              </a>
              <a
                className="button-secondary"
                href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" />
                WhatsApp’tan Ulaş
              </a>
              <Link className="button-secondary" href="/hizmetler">
                Hizmetleri İncele
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-border/80 bg-white/90 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="surface-panel subtle-grid relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(15,140,148,0.16),transparent_60%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 rounded-[26px] border border-primary/10 bg-white/95 p-5 shadow-[0_16px_45px_rgba(10,34,57,0.06)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
                      Klinik akış
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      Değerlendirme, ölçü, uygulama ve takip
                    </p>
                  </div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <CalendarCheck2 className="size-6" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  {[
                    'Alt ve üst ekstremite protez planlaması',
                    'Servikal, spinal ve fonksiyonel ortez çözümleri',
                    'Ayak fonksiyon analizi ve kişiye özel tabanlık',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-border/70 bg-white/90 p-5 shadow-[0_16px_45px_rgba(10,34,57,0.05)]"
                    >
                      <p className="text-base font-medium leading-7 text-foreground/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[28px] bg-[linear-gradient(135deg,#0a2239,#103858)] p-6 text-white shadow-[0_24px_80px_rgba(10,34,57,0.16)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    Randevu ve bilgi
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight">
                    {siteConfig.phone.display}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    İlk görüşmeden itibaren ihtiyaç analizi, uygun çözüm planı ve sonraki
                    adımlar net şekilde aktarılır.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-soft absolute -left-4 top-12 hidden rounded-[24px] border border-border/80 bg-white px-5 py-4 shadow-[0_22px_60px_rgba(10,34,57,0.08)] xl:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
                Yaklaşım
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                Teknik doğruluk
                <br />
                Hasta odaklı süreç
              </p>
            </div>

            <div className="animate-float-soft absolute -right-4 bottom-10 hidden rounded-[24px] border border-primary/10 bg-primary px-5 py-4 text-white shadow-[0_22px_60px_rgba(10,34,57,0.12)] xl:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Uyum
              </p>
              <p className="mt-2 text-sm leading-6">
                Günlük yaşamla
                <br />
                bütünleşen çözümler
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
