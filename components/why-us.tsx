import { CheckCircle2, ClipboardList, Headset, ShieldCheck } from 'lucide-react'

import { trustPillars } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

const supportTopics = [
  'İlk başvuruda hangi bilgilerin gerekli olduğu',
  'Ölçü, prova ve teslim adımlarının nasıl ilerlediği',
  'Kullanım sonrası kontrol ve revizyon planı',
  'Bakım, onarım ve destek süreçleri hakkında yönlendirme',
]

export function WhyUs() {
  return (
    <section className="section-shell border-y border-border/70 bg-[linear-gradient(180deg,#f5fafb,#ffffff)]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Güven Unsurları"
              title="Karar vermeyi zorlaştıran belirsizlikleri azaltmak için tasarlanmış bir deneyim"
              description="Doğru tıbbi yaklaşım kadar; neyin neden önerildiği, uygulamanın nasıl ilerlediği ve sonrasında hangi desteğin verileceği de önemlidir."
            />

            <div className="mt-8 rounded-[30px] border border-primary/10 bg-primary p-7 text-primary-foreground shadow-[0_24px_80px_rgba(10,34,57,0.12)]">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">
                    Hasta odaklı yaklaşım
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    Teknik kararlar, kullanıcının günlük yaşam hedefi ile birlikte değerlendirilir
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {trustPillars.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-border/80 bg-white p-6 shadow-[0_18px_60px_rgba(10,34,57,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
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
                  Süreci açıklayan destek başlıkları
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {supportTopics.map((topic) => (
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
                  İletişimde hız ve açıklık
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Telefon, WhatsApp ve form kanallarını aynı anda görünür kılarak,
                  danışma ve randevu başlatmayı kullanıcı için daha kolay hale getiriyoruz.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
