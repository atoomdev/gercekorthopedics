'use client'

import { Package } from 'lucide-react'
import { useLanguage } from './providers'

export function Products() {
  const { t } = useLanguage()

  const products = [
    {
      name: t('ProAlignment Destekler', 'ProAlignment Braces'),
      category: t('Destek & Stabilizasyon', 'Support & Stabilization'),
      description: t(
        'Optimal hizalama ve destek için tasarlanmış gelişmiş ortopedik destekler',
        'Advanced orthopedic braces designed for optimal alignment and support'
      ),
    },
    {
      name: t('RecoveryPlus Rehabilitasyon', 'RecoveryPlus Rehabilitation'),
      category: t('İyileşme Ekipmanları', 'Recovery Equipment'),
      description: t(
        'Daha hızlı iyileşme için profesyonel düzeyde rehabilitasyon araçları',
        'Professional-grade rehabilitation tools for faster recovery'
      ),
    },
    {
      name: t('FlexComfort Tabanlıklar', 'FlexComfort Insoles'),
      category: t('Ayak Bakımı', 'Foot Care'),
      description: t(
        'Konfor ve ayak sağlığı için tasarlanmış ergonomik tabanlıklar',
        'Ergonomic insoles engineered for comfort and foot health'
      ),
    },
    {
      name: t('Posture Pro Cihazı', 'Posture Pro Device'),
      category: t('Duruş Düzeltme', 'Posture Correction'),
      description: t(
        'Gün boyunca mükemmel duruşunuzu korumanıza yardımcı olan akıllı cihaz',
        'Smart device helping you maintain perfect posture throughout the day'
      ),
    },
  ]

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 animate-fade-up">
            {t('Ürünlerimiz', 'Our Products')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-fade-up delay-100 max-w-2xl mx-auto">
            {t('Kalıcı sağlık için premium ortopedik çözümler', 'Premium orthopedic solutions for lasting wellness')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 hover-shadow-lift transition-all duration-500 group animate-fade-up"
              style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-lg sm:rounded-xl mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-shadow-pulse">
                <Package className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 font-medium">
                {product.category}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                {product.description}
              </p>
              <button className="text-primary font-semibold text-sm hover:text-primary/70 transition-colors inline-flex items-center gap-2 group/btn">
                {t('Daha Fazla', 'Learn More')} 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
