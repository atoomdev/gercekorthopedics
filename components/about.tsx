import { Award, DraftingCompass, Ruler, Wrench } from 'lucide-react'

import { credibilityNotes, siteConfig } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

const storyPoints = [
  {
    title: 'Köklü deneyim',
    description:
      'Gerçek Ortopedi, 1984’ten bu yana ortopedik uygulama alanında biriken tecrübesini güncel ihtiyaçlarla birleştirir.',
    icon: Award,
  },
  {
    title: 'Kişiye özel ölçü yaklaşımı',
    description:
      'Her kullanıcı için ölçü, denge, yüklenme ve kullanım alışkanlıkları dikkate alınarak daha doğru uyum hedeflenir.',
    icon: Ruler,
  },
  {
    title: 'Teknik üretim ve ince ayar',
    description:
      'Atölye ve uygulama akışının birlikte yürütülmesi; prova, düzeltme ve kullanım konforunu daha kontrollü hale getirir.',
    icon: Wrench,
  },
  {
    title: 'Süreç görünürlüğü',
    description:
      'Başvuru, planlama, uygulama ve takip adımlarını netleştirerek karar verme sürecini hasta için daha anlaşılır kılıyoruz.',
    icon: DraftingCompass,
  },
]

export function About() {
  return (
    <section id="hakkimizda" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="surface-panel overflow-hidden bg-[linear-gradient(180deg,#0a2239,#103858)] p-8 text-white lg:p-10">
            <p className="eyebrow border-white/15 bg-white/10 text-white/70">
              Hakkımızda
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Klinik güveni, teknik yeterlilik ve kişiye özel planlama aynı masada buluşmalı
            </h2>
            <p className="mt-6 text-base leading-8 text-white/75">
              Bu anlayışla; protez, ortez, tabanlık ve ortopedik destek süreçlerini tek
              merkezde, daha anlaşılır ve daha sürdürülebilir bir deneyime dönüştürmeyi
              hedefliyoruz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Kuruluş
                </p>
                <p className="mt-2 text-3xl font-semibold">{siteConfig.foundedYear}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Merkez
                </p>
                <p className="mt-2 text-3xl font-semibold">{siteConfig.address.city}</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-sm leading-7 text-white/75">
              {credibilityNotes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Neden önemli?"
              title="Kullanıcı deneyimini sadece sonuçta değil, sürecin her adımında güçlendiriyoruz"
              description="Modern bir ortopedik marka; karmaşık terimlerle değil, hastanın ne yaşayacağını netleştirerek güven inşa eder. Tasarladığımız deneyim bu prensibe dayanıyor."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {storyPoints.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-border/80 bg-slate-50/80 p-6"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
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
