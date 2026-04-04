'use client'

import { CheckCircle, Shield } from 'lucide-react'
import { useLanguage } from './providers'

export function WhyUs() {
  const { t } = useLanguage()

  const reasons = [
    t('Gelişmiş sertifikalara sahip uzman ekip', 'Expert team with advanced certifications'),
    t('En son tanı ve cerrahi teknoloji', 'Latest diagnostic and surgical technology'),
    t('Her hasta için kişiselleştirilmiş tedavi planları', 'Personalized treatment plans for every patient'),
    t('Kapsamlı ameliyat öncesi ve sonrası destek', 'Comprehensive pre and post-op support'),
    t('Son teknoloji rehabilitasyon tesisleri', 'State-of-the-art rehabilitation facilities'),
    t('Şefkatli ve hasta odaklı bakım', 'Compassionate and patient-focused care'),
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary animate-fade-up text-center lg:text-left">
              {t('Neden Gerçek Ortopedi', 'Why Choose Gerçek Ortopedi')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-100 text-center lg:text-left">
              {t(
                'Hayatları dönüştüren ve hareketliliği geri kazandıran olağanüstü ortopedik bakım sunmaya kararlıyız.',
                "We're committed to delivering exceptional orthopedic care that transforms lives and restores mobility."
              )}
            </p>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {reasons.map((reason, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:bg-card hover-shadow-lift transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-primary rounded-full"></div>
            </div>
            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
              </div>
              <p className="text-primary font-semibold text-lg sm:text-xl">{t('Taahhüdümüz', 'Our Commitment')}</p>
              <p className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">{t('Sağlığınız önceliğimiz', 'Your wellness is our priority')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
