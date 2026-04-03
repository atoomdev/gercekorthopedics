'use client'

import { Activity, Stethoscope, Zap, Heart } from 'lucide-react'
import { useLanguage } from './providers'

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Activity,
      title: t('Eklem Cerrahisi', 'Joint Surgery'),
      description: t(
        'Minimal iyileşme süresiyle eklem problemleri için ileri cerrahi müdahaleler',
        'Advanced surgical interventions for joint problems with minimal recovery time'
      ),
    },
    {
      icon: Stethoscope,
      title: t('Konservatif Tedavi', 'Conservative Treatment'),
      description: t(
        'Terapi ve rehabilitasyon programları dahil cerrahi olmayan yaklaşımlar',
        'Non-surgical approaches including therapy and rehabilitation programs'
      ),
    },
    {
      icon: Zap,
      title: t('Spor Hekimliği', 'Sports Medicine'),
      description: t(
        'Sporcular ve sporla ilgili yaralanmalar için uzmanlaşmış bakım',
        'Specialized care for athletes and sports-related injuries'
      ),
    },
    {
      icon: Heart,
      title: t('Ağrı Yönetimi', 'Pain Management'),
      description: t(
        'İhtiyaçlarınıza göre uyarlanmış kapsamlı ağrı giderme stratejileri',
        'Comprehensive pain relief strategies tailored to your needs'
      ),
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 animate-fade-up">
            {t('Hizmetlerimiz', 'Our Services')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-fade-up delay-100 max-w-2xl mx-auto">
            {t('Her ihtiyaç için kapsamlı ortopedik bakım', 'Comprehensive orthopedic care for every need')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 md:p-8 bg-card border border-border rounded-xl sm:rounded-2xl hover:border-primary/50 hover-shadow-lift transition-all duration-500 group animate-fade-up`}
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 animate-shadow-glow">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
