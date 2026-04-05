'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/components/language-provider'
import {
  commonCopy,
  navigationLinks,
  navbarCopy,
  siteConfig,
} from '@/lib/site-content'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const homeHref = '/#site-top'
  const navbarWhatsappHref = 'https://wa.me/905306727646'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleHomeClick = () => {
    setIsOpen(false)

    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/40 bg-primary text-primary-foreground">
        <div className="container-shell flex min-h-11 items-center justify-between gap-4 py-2 text-xs sm:text-sm">
          <p className="hidden text-primary-foreground/80 lg:block">
            {t(navbarCopy.topBarMessage)}
          </p>
          <div className="flex flex-1 items-center justify-between gap-4 lg:justify-end">
            <a
              className="inline-flex items-center gap-2 text-primary-foreground/90 transition hover:text-white"
              href={`tel:${siteConfig.phone.raw}`}
            >
              <Phone className="size-3.5" />
              <span>{siteConfig.phone.display}</span>
            </a>
            <a
              className="hidden items-center gap-2 text-primary-foreground/75 transition hover:text-white sm:inline-flex"
              href={navbarWhatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-3.5" />
              <span>{t(navbarCopy.whatsappConsultation)}</span>
            </a>
            <span className="hidden items-center gap-2 text-primary-foreground/75 xl:inline-flex">
              <MapPin className="size-3.5" />
              <span>{t(siteConfig.address.line)}</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? 'border-border/80 bg-white/95 shadow-[0_20px_60px_rgba(10,34,57,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="container-shell flex min-h-[78px] items-center justify-between gap-4 lg:gap-6">
          <Link
            href={homeHref}
            className="flex shrink-0 items-center gap-3 lg:min-w-[280px] xl:min-w-[320px]"
            onClick={handleHomeClick}
          >
            <div className="flex items-center justify-center">
              <img
                src="/Untitled%20design.png"
                alt="GO Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="truncate text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </p>
              <p className="hidden truncate text-xs text-muted-foreground xl:block xl:text-sm">
                {t(navbarCopy.brandTagline)}
              </p>
            </div>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex xl:gap-7">
            {navigationLinks.map((link) => {
              const routeOnly = link.href.includes('#') ? null : link.href
              const isActive = routeOnly ? pathname === routeOnly : false

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === homeHref ? handleHomeClick : undefined}
                  className={`text-[13px] font-medium whitespace-nowrap transition xl:text-sm ${
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {t(link.label)}
                </Link>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <LanguageSwitcher />
            <a
              className="button-secondary shrink-0 px-4 py-2 text-[13px]"
              href="/#iletisim"
            >
              {t(navbarCopy.contactCta)}
            </a>
            <a
              className="button-primary shrink-0 px-4 py-2 text-[13px]"
              href={navbarWhatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {t(navbarCopy.whatsappCta)}
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={t(navbarCopy.mobileMenuLabel)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-border/80 bg-white xl:hidden">
            <div className="container-shell py-5">
              <nav className="grid gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={link.href === homeHref ? handleHomeClick : undefined}
                    className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-foreground/80 transition hover:border-primary/10 hover:bg-primary/5 hover:text-primary"
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 grid gap-3">
                <a className="button-primary justify-center" href={`tel:${siteConfig.phone.raw}`}>
                  {t(commonCopy.appointment)}
                </a>
                <a
                  className="button-secondary justify-center"
                  href={navbarWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(commonCopy.whatsappReach)}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
