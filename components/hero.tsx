'use client'

import { useLanguage } from './providers'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-up text-balance">
              {t(
                'Daha İyi Bir Sağlığa Giden Yolunuz Burada Başlıyor',
                'Your Path to Better Health Starts Here'
              )}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200 max-w-xl mx-auto lg:mx-0">
              {t(
                'Uzman ekibimizle dünya standartlarında ortopedik bakım deneyimi yaşayın. En son teknolojiyi şefkatli hasta bakımıyla birleştirerek olağanüstü sonuçlar sunuyoruz.',
                'Experience world-class orthopedic care with our team of specialized experts. We combine cutting-edge technology with compassionate patient care to deliver exceptional results.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover-shadow-lift transition-all duration-300 animate-shadow-pulse text-sm sm:text-base">
                {t('Randevu Al', 'Book Appointment')}
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base">
                {t('Daha Fazla Bilgi', 'Learn More')}
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-up delay-400 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-primary to-primary/70 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center animate-shadow-glow hover-shadow-lift">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-primary-foreground rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-primary-foreground rounded-full blur-3xl animate-float delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 h-40 sm:h-64 bg-primary-foreground rounded-full blur-3xl animate-pulse-slow"></div>
              </div>
              
              {/* Center content */}
              <div className="relative z-10 text-center p-4 sm:p-6 md:p-8">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center animate-bounce-soft">
                  <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl font-medium">
                  {t('Premium Bakım Mükemmelliği', 'Premium Care Excellence')}
                </p>
                <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1 sm:mt-2">
                  {t('20+ Yıllık Deneyim', '20+ Years of Experience')}
                </p>
              </div>

              {/* Decorative corner elements - hidden on small screens */}
              <div className="hidden sm:block absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-r-2 border-primary-foreground/20 rounded-tr-2xl sm:rounded-tr-3xl"></div>
              <div className="hidden sm:block absolute bottom-4 left-4 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-l-2 border-primary-foreground/20 rounded-bl-2xl sm:rounded-bl-3xl"></div>
            </div>

            {/* Floating stats cards - repositioned for mobile */}
            <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float delay-200 hover-shadow-lift">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">5000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('Mutlu Hasta', 'Happy Patients')}</div>
            </div>
            <div className="absolute -top-4 right-2 sm:-top-6 sm:-right-6 bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float delay-400 hover-shadow-lift">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('Başarı Oranı', 'Success Rate')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
