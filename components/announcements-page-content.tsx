'use client'

import { Bell, CalendarDays } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { PageHero } from '@/components/page-hero'
import { announcementsPageCopy, commonCopy } from '@/lib/site-content'

type AnnouncementRecord = {
  id: number
  title_tr?: string | null
  title_en?: string | null
  description_tr?: string | null
  description_en?: string | null
  display_date?: string | null
  created_at: string
}

type AnnouncementsPageContentProps = {
  announcements: AnnouncementRecord[]
}

export function AnnouncementsPageContent({
  announcements,
}: AnnouncementsPageContentProps) {
  const { t, field, formatDate } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t(announcementsPageCopy.heroEyebrow)}
        title={t(announcementsPageCopy.heroTitle)}
        description={t(announcementsPageCopy.heroDescription)}
        primaryCta={{ href: '/#iletisim', label: t(commonCopy.contact) }}
        secondaryCta={{ href: '/blog', label: t(commonCopy.viewBlog) }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          {announcements.length === 0 ? (
            <div className="surface-panel mx-auto max-w-3xl p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/8 text-primary">
                <Bell className="size-7" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                {t(announcementsPageCopy.emptyTitle)}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {t(announcementsPageCopy.emptyDescription)}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement) => {
                const title =
                  field(announcement.title_tr, announcement.title_en) ||
                  t(announcementsPageCopy.fallbackTitle)
                const description =
                  field(
                    announcement.description_tr,
                    announcement.description_en,
                  ) || ''
                const dateValue =
                  announcement.display_date || announcement.created_at

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
                        <time dateTime={dateValue}>{formatDate(dateValue)}</time>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
