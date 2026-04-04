'use client'

import Link from 'next/link'
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { blogPostCopy, commonCopy } from '@/lib/site-content'

type BlogPostRecord = {
  created_at: string
  title?: string | null
  title_tr?: string | null
  title_en?: string | null
  content?: string | null
  content_tr?: string | null
  content_en?: string | null
}

type BlogPostPageContentProps = {
  post: BlogPostRecord
}

export function BlogPostPageContent({ post }: BlogPostPageContentProps) {
  const { t, field, formatDate } = useLanguage()
  const content = field(post.content_tr, post.content_en) || post.content || ''
  const title = field(post.title_tr, post.title_en) || post.title || ''
  const readTime = Math.max(1, Math.ceil(content.split(/\s+/).filter(Boolean).length / 220))

  return (
    <article className="pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            {t(commonCopy.backToBlog)}
          </Link>

          <header className="mt-8 rounded-[36px] border border-border/80 bg-white p-8 shadow-[0_24px_80px_rgba(10,34,57,0.08)] sm:p-10">
            <p className="eyebrow">{t(blogPostCopy.informationalContent)}</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 className="size-4" />
                <span>
                  {readTime} {t(blogPostCopy.readTimeSuffix)}
                </span>
              </div>
            </div>
          </header>

          <div className="mt-10 rounded-[36px] border border-border/80 bg-white p-8 shadow-[0_24px_80px_rgba(10,34,57,0.08)] sm:p-10">
            <div className="whitespace-pre-wrap text-base leading-8 text-foreground/80">
              {content}
            </div>
          </div>

          <div className="mt-10 rounded-[36px] bg-[linear-gradient(135deg,#0a2239,#103858)] p-8 text-white shadow-[0_28px_90px_rgba(10,34,57,0.18)]">
            <p className="eyebrow border-white/15 bg-white/10 text-white/70">
              {t(blogPostCopy.nextStepEyebrow)}
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight">
              {t(blogPostCopy.nextStepTitle)}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              {t(blogPostCopy.nextStepDescription)}
            </p>
            <div className="mt-8">
              <Link
                className="button-secondary border-white/12 bg-white/10 text-white hover:bg-white/15"
                href="/#iletisim"
              >
                {t(commonCopy.contact)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
