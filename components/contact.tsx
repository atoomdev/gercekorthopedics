'use client'

import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import { commonCopy, contactCopy, serviceDetails, siteConfig } from '@/lib/site-content'

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const icons = [Phone, MessageCircle, Mail, MapPin]

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const composedMessage = [
      formData.service ? `${t(contactCopy.messagePrefixes.service)}: ${formData.service}` : null,
      formData.email ? `${t(contactCopy.messagePrefixes.email)}: ${formData.email}` : null,
      formData.message.trim(),
    ]
      .filter(Boolean)
      .join('\n\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: composedMessage,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))

        if (data.errorCode === 'MISSING_REQUIRED_FIELDS') {
          throw new Error(t(contactCopy.errors.required))
        }

        throw new Error(t(contactCopy.errors.generic))
      }

      setStatus('success')
      setFormData(initialState)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : t(contactCopy.errors.failed),
      )
    }
  }

  return (
    <section id="iletisim" className="section-shell bg-slate-50/70">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow={t(contactCopy.eyebrow)}
              title={t(contactCopy.title)}
              description={t(contactCopy.description)}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCopy.cards.map((item, index) => {
                const Icon = icons[index]
                const href =
                  index === 0
                    ? `tel:${siteConfig.phone.raw}`
                    : index === 1
                      ? `https://wa.me/${siteConfig.phone.whatsappRaw}`
                      : index === 2
                        ? `mailto:${siteConfig.email}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t(siteConfig.address.line))}`

                return (
                  <a
                    key={t(item.title)}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-[28px] border border-border/80 bg-white p-6 shadow-[0_18px_60px_rgba(10,34,57,0.06)] transition hover:-translate-y-1 hover:border-primary/18"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{t(item.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(item.hint)}</p>
                    <p className="mt-4 text-base font-medium text-foreground">{t(item.value)}</p>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 rounded-[30px] border border-primary/10 bg-primary p-7 text-primary-foreground shadow-[0_24px_80px_rgba(10,34,57,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                {t(contactCopy.infoLabel)}
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight">
                {t(contactCopy.infoTitle)}
              </p>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
                {t(contactCopy.infoDescription)}
              </p>
            </div>
          </div>

          <div className="surface-panel p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{t(contactCopy.formEyebrow)}</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
                  {t(contactCopy.formTitle)}
                </h3>
              </div>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  {t(contactCopy.labels.name)}
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t(contactCopy.placeholders.name)}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>

                <label className="block text-sm font-medium text-foreground">
                  {t(contactCopy.labels.phone)}
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t(contactCopy.placeholders.phone)}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  {t(contactCopy.labels.email)}
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(contactCopy.placeholders.email)}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>

                <label className="block text-sm font-medium text-foreground">
                  {t(contactCopy.labels.service)}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition"
                  >
                    <option value="">{t(contactCopy.placeholders.service)}</option>
                    {serviceDetails.map((service) => (
                      <option key={service.slug} value={t(service.title)}>
                        {t(service.title)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-foreground">
                {t(contactCopy.labels.message)}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t(contactCopy.placeholders.message)}
                  className="mt-2 w-full rounded-[24px] border border-border bg-white px-4 py-3 text-sm leading-7 text-foreground transition placeholder:text-muted-foreground/70"
                />
              </label>

              <button
                type="submit"
                className="button-primary w-full justify-center"
                disabled={status === 'loading'}
              >
                <Send className="size-4" />
                {status === 'loading' ? t(commonCopy.sending) : t(commonCopy.sendMessage)}
              </button>

              <div aria-live="polite">
                {status === 'success' ? (
                  <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {t(contactCopy.success)}
                  </div>
                ) : null}

                {status === 'error' ? (
                  <div className="rounded-[22px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
