import Link from 'next/link'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="section-shell pt-36 sm:pt-40">
        <div className="container-shell">
          <div className="surface-panel mx-auto max-w-3xl p-10 text-center sm:p-12">
            <p className="eyebrow">404</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Aradığınız sayfaya ulaşılamadı
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Sayfa taşınmış, kaldırılmış veya bağlantı hatalı olabilir. Ana sayfaya
              dönebilir ya da hizmet alanlarımızı inceleyebilirsiniz.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link className="button-primary" href="/">
                Ana Sayfaya Dön
              </Link>
              <Link className="button-secondary" href="/hizmetler">
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
