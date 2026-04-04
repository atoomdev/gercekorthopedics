import { featuredSpecialties } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

export function Specialties() {
  return (
    <section id="uzmanliklar" className="section-shell bg-slate-50/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Uzmanlık Alanları"
          title="Ortopedik ihtiyacınızı tek bir ürün değil, doğru çözüm planı olarak ele alıyoruz"
          description="Her kullanıcı için aynı yaklaşım uygun değildir. Bu nedenle çözümü; bölgeye, fonksiyona, günlük yaşama ve kullanım hedeflerine göre yapılandırıyoruz."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredSpecialties.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] border border-border/80 bg-white p-7 shadow-[0_20px_70px_rgba(10,34,57,0.06)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
