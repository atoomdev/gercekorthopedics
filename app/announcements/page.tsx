import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import { Bell, CalendarDays } from 'lucide-react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageHero } from '@/components/page-hero'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Duyurular',
  description:
    'Gerçek Ortopedi’den güncellemeler, bilgilendirmeler ve kullanıcı iletişimini kolaylaştıran duyurular.',
}

async function getAnnouncements() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const announcements = await sql`
      SELECT id, title_tr, title_en, description_tr, description_en, published, display_date, created_at
      FROM announcements
      WHERE published = true
      ORDER BY display_date DESC NULLS LAST, created_at DESC
    `
    return announcements
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return []
  }
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="Duyurular"
        title="Merkezden güncel bilgilendirmeler ve takip edilmesi gereken duyurular"
        description="Operasyonel güncellemeler, başvuru akışıyla ilgili bilgilendirmeler ve kullanıcı iletişimini kolaylaştıran gelişmeleri burada paylaşırız."
        primaryCta={{ href: '/#iletisim', label: 'İletişime Geç' }}
        secondaryCta={{ href: '/blog', label: 'Blog’u İncele' }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          {announcements.length === 0 ? (
            <div className="surface-panel mx-auto max-w-3xl p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Bell className="size-7" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                Güncel duyuru bulunmuyor
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Yeni bilgilendirmeler yayınlandığında bu sayfada görebilirsiniz.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement: any) => {
                const title = announcement.title_tr || announcement.title_en || 'Duyuru'
                const description = announcement.description_tr || announcement.description_en || ''
                const dateValue = announcement.display_date || announcement.created_at

                return (
                  <article
                    key={announcement.id}
                    className="rounded-[30px] border border-border/80 bg-slate-50/80 p-7 shadow-[0_20px_70px_rgba(10,34,57,0.05)]"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-3xl">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                          <Bell className="size-5" />
                        </div>
                        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                          {title}
                        </h2>
                        <p className="mt-4 whitespace-pre-wrap text-base leading-8 text-muted-foreground">
                          {description}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4" />
                        <time dateTime={dateValue}>
                          {new Date(dateValue).toLocaleDateString('tr-TR')}
                        </time>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
