'use client'

import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import {
  commonCopy,
  footerCopy,
  footerServiceLinks,
  navigationLinks,
  siteConfig,
} from '@/lib/site-content'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/80 bg-[#081a2a] text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="eyebrow border-white/15 bg-white/5 text-white/70">
              {t(footerCopy.eyebrow)}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              {t(footerCopy.title)}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {t(footerCopy.description)}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/75">
              <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${siteConfig.phone.raw}`}>
                <Phone className="size-4" />
                <span>{siteConfig.phone.display}</span>
              </a>
              <a
                className="inline-flex items-center gap-3 hover:text-white"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail className="size-4" />
                <span>{siteConfig.email}</span>
              </a>
              <p className="inline-flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0" />
                <span>{t(siteConfig.address.line)}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              {t(footerCopy.menuTitle)}
            </h3>
            <nav className="mt-5 grid gap-3 text-sm text-white/80">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              {t(footerCopy.featuredServicesTitle)}
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-white/80">
              {footerServiceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              {t(footerCopy.quickContactTitle)}
            </h3>
            <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-base font-semibold">{t(footerCopy.quickContactLabel)}</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                {t(footerCopy.quickContactDescription)}
              </p>
              <div className="mt-6 grid gap-3">
                <a className="button-primary justify-center" href={`tel:${siteConfig.phone.raw}`}>
                  <Phone className="size-4" />
                  {t(commonCopy.appointment)}
                </a>
                <a
                  className="button-secondary justify-center border-white/12 bg-white/5 text-white hover:bg-white/10"
                  href={`https://wa.me/${siteConfig.phone.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  {t(commonCopy.whatsappReach)}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t(commonCopy.rightsReserved)}
          </p>
          <p>{t(siteConfig.appointmentNote)}</p>
        </div>
      </div>
    </footer>
  )
}
