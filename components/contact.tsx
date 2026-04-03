'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from './providers'

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        const errData = await response.json().catch(() => ({}))
        alert('Server Error: ' + errData.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('Telefon', 'Phone'),
      value: '+90 (XXX) XXX-XXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gercekortopedi.com',
    },
    {
      icon: MapPin,
      title: t('Konum', 'Location'),
      value: t('İstanbul, Türkiye', 'Istanbul, Turkey'),
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 animate-fade-up">
            {t('Bize Ulaşın', 'Get In Touch')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-fade-up delay-100 max-w-2xl mx-auto">
            {t(
              'Sorularınızı yanıtlamak ve sağlık yolculuğunuzda size yardımcı olmak için buradayız',
              "We're here to answer your questions and help you on your wellness journey"
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-secondary/50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center hover-shadow-lift transition-all duration-500 group animate-fade-up"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 animate-shadow-pulse">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground break-all sm:break-normal">{item.value}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-up delay-400">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5 sm:mb-2">
                  {t('Adınız', 'Your Name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder={t('Ahmet Yılmaz', 'John Doe')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1.5 sm:mb-2">
                  {t('E-posta Adresi', 'Email Address')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder={t('ahmet@ornek.com', 'john@example.com')}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5 sm:mb-2">
                {t('Telefon Numarası', 'Phone Number')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="+90 (XXX) XXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5 sm:mb-2">
                {t('Mesajınız', 'Message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                placeholder={t('Sorularınızı yazın...', 'Tell us about your inquiry...')}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 animate-shadow-pulse disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? (
                <span className="animate-pulse">{t('Gönderiliyor...', 'Sending...')}</span>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('Mesaj Gönder', 'Send Message')}
                </>
              )}
            </button>

            {submitted && (
              <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl text-green-700 text-center animate-fade-up text-sm sm:text-base">
                {t('Teşekkürler! En kısa sürede size dönüş yapacağız.', "Thank you! We'll get back to you soon.")}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
