'use client'

import Link from 'next/link'
import { ArrowRight, CalendarDays, NotebookPen } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { PageHero } from '@/components/page-hero'
import { blogPageCopy, commonCopy } from '@/lib/site-content'

type BlogPostRecord = {
  id: number
  slug?: string | null
  slug_tr?: string | null
  slug_en?: string | null
  title?: string | null
  title_tr?: string | null
  title_en?: string | null
  excerpt?: string | null
  excerpt_tr?: string | null
  excerpt_en?: string | null
  content?: string | null
  content_tr?: string | null
  content_en?: string | null
  created_at: string
}

type BlogPageContentProps = {
  posts: BlogPostRecord[]
}

export function BlogPageContent({ posts }: BlogPageContentProps) {
  const { t, field, formatDate } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t(blogPageCopy.heroEyebrow)}
        title={t(blogPageCopy.heroTitle)}
        description={t(blogPageCopy.heroDescription)}
        primaryCta={{ href: '/#iletisim', label: t(commonCopy.contactQuestion) }}
        secondaryCta={{ href: '/hizmetler', label: t(commonCopy.allServices) }}
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          {posts.length === 0 ? (
            <div className="surface-panel mx-auto max-w-3xl p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/8 text-primary">
                <NotebookPen className="size-7" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                {t(blogPageCopy.emptyTitle)}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {t(blogPageCopy.emptyDescription)}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {posts.map((post) => {
                const slug = field(post.slug_tr, post.slug_en) || post.slug || ''
                const title = field(post.title_tr, post.title_en) || post.title || ''
                const excerpt =
                  field(post.excerpt_tr, post.excerpt_en) ||
                  post.excerpt ||
                  `${(
                    field(post.content_tr, post.content_en) ||
                    post.content ||
                    ''
                  ).slice(0, 140)}...`

                return (
                  <article
                    key={post.id}
                    className="group flex h-full flex-col rounded-[30px] border border-border/80 bg-slate-50/80 p-7 transition hover:-translate-y-1 hover:border-primary/18 hover:bg-white hover:shadow-[0_24px_80px_rgba(10,34,57,0.08)]"
                  >
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CalendarDays className="size-4" />
                      <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                      {title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {excerpt}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
                      >
                        {t(blogPageCopy.readPost)}
                        <ArrowRight className="size-4" />
                      </Link>
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
