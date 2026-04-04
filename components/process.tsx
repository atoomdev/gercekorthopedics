import { processSteps } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

export function Process() {
  return (
    <section id="surec" className="section-shell border-y border-border/70 bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Süreç"
          title="İlk görüşmeden teslim ve takibe kadar net bir uygulama akışı"
          description="Her adımın anlaşılır olması; hem güven duygusunu hem de tedaviye uyumu güçlendirir. Bu nedenle süreci sade, planlı ve görünür kılıyoruz."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-border/80 bg-[linear-gradient(180deg,#ffffff,#f5fafb)] p-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/60">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
