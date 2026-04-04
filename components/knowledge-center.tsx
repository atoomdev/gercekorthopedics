import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { knowledgeCards } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

export function KnowledgeCenter() {
  return (
    <section className="section-shell bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Bilgi Merkezi"
          title="Sadece uygulama değil, karar vermeyi kolaylaştıran net bilgi de sunuyoruz"
          description="Hizmet akışını, kullanıcıya etkisini ve güncel bilgilendirmeleri erişilebilir içeriklerle görünür kılıyoruz."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <article className="rounded-[32px] border border-border/80 bg-[linear-gradient(135deg,#0a2239,#123d58)] p-8 text-white shadow-[0_28px_90px_rgba(10,34,57,0.18)]">
            <p className="eyebrow border-white/20 bg-white/10 text-white/80">
              Rehberlik
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">
              İlk kez başvuruyor olsanız da süreci daha net anlamanızı istiyoruz
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Başvuru öncesi hazırlık, ölçü süreci, teslim, kullanım eğitimi ve takip
              gibi kritik başlıkları sade bir dille görünür hale getiriyoruz.
            </p>
            <div className="mt-8">
              <Link className="button-secondary border-white/15 bg-white/10 text-white hover:bg-white/15" href="/#iletisim">
                Süreci birlikte değerlendirelim
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          {knowledgeCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[32px] border border-border/80 bg-slate-50/80 p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-8">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {card.cta}
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
