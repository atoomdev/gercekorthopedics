'use client'

import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

import { serviceDetails, siteConfig } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'

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

const contactCards = [
  {
    title: 'Telefon',
    value: siteConfig.phone.display,
    href: `tel:${siteConfig.phone.raw}`,
    icon: Phone,
    hint: 'Randevu ve bilgi hattı',
  },
  {
    title: 'WhatsApp',
    value: 'Danışma hattı',
    href: `https://wa.me/${siteConfig.phone.whatsappRaw}`,
    icon: MessageCircle,
    hint: 'Hızlı dönüş için mesaj gönderin',
  },
  {
    title: 'E-posta',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    hint: 'Detaylı talepler için yazabilirsiniz',
  },
  {
    title: 'Adres',
    value: siteConfig.address.line,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.line)}`,
    icon: MapPin,
    hint: 'Çankaya / Ankara',
  },
]

export function Contact() {
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
      formData.service ? `Talep alanı: ${formData.service}` : null,
      formData.email ? `E-posta: ${formData.email}` : null,
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
        throw new Error(data.error || 'Mesaj gönderimi sırasında bir sorun oluştu.')
      }

      setStatus('success')
      setFormData(initialState)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Mesaj gönderimi sırasında bir sorun oluştu.',
      )
    }
  }

  return (
    <section id="iletisim" className="section-shell bg-slate-50/70">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="İletişim"
              title="İhtiyacınızı anlatın, size uygun ilk adımı birlikte planlayalım"
              description="Telefon, WhatsApp, e-posta ve form üzerinden hızlıca ulaşabilir; ilk görüşme için uygun yönlendirmeyi ekibimizden alabilirsiniz."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-[28px] border border-border/80 bg-white p-6 shadow-[0_18px_60px_rgba(10,34,57,0.06)] transition hover:-translate-y-1 hover:border-primary/18"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.hint}</p>
                    <p className="mt-4 text-base font-medium text-foreground">{item.value}</p>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 rounded-[30px] border border-primary/10 bg-primary p-7 text-primary-foreground shadow-[0_24px_80px_rgba(10,34,57,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
                Bilgi notu
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight">
                İlk görüşmede ihtiyacınızı, günlük yaşam hedeflerinizi ve mevcut kullanım
                durumunuzu netleştirmek süreci hızlandırır.
              </p>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
                Daha önce kullandığınız ürün, mevcut şikayetiniz veya yeni başvuru nedeniniz
                varsa formda kısa şekilde belirtmeniz yeterlidir.
              </p>
            </div>
          </div>

          <div className="surface-panel p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Randevu Talebi</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
                  Kısa formu doldurun, size uygun yönlendirmeyi hazırlayalım
                </h3>
              </div>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Ad Soyad
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınızı ve soyadınızı yazın"
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>

                <label className="block text-sm font-medium text-foreground">
                  Telefon
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="05xx xxx xx xx"
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  E-posta
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@eposta.com"
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/70"
                  />
                </label>

                <label className="block text-sm font-medium text-foreground">
                  İlgilendiğiniz alan
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground transition"
                  >
                    <option value="">Seçiniz</option>
                    {serviceDetails.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-foreground">
                Mesajınız
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="İhtiyacınızı, varsa mevcut ürününüzü veya randevu talebinizi kısaca paylaşın."
                  className="mt-2 w-full rounded-[24px] border border-border bg-white px-4 py-3 text-sm leading-7 text-foreground transition placeholder:text-muted-foreground/70"
                />
              </label>

              <button type="submit" className="button-primary w-full justify-center" disabled={status === 'loading'}>
                <Send className="size-4" />
                {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>

              <div aria-live="polite">
                {status === 'success' ? (
                  <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Teşekkür ederiz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
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
