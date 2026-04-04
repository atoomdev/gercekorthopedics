'use client'

import { useLanguage } from './providers'

export function About() {
  const { t } = useLanguage()

  const stats = [
    { number: '15+', label: t('Yıllık Deneyim', 'Years Experience') },
    { number: '5000+', label: t('Mutlu Hasta', 'Happy Patients') },
    { number: '98%', label: t('Memnuniyet Oranı', 'Satisfaction Rate') },
    { number: '24/7', label: t('Destek Mevcut', 'Support Available') },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              {t('Gerçek Ortopedi Hakkında', 'About Gerçek Ortopedi')}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              {t(
                '15 yılı aşkın özveriyle hizmet sunan ekibimiz, kendimizi lider bir ortopedi kliniği olarak konumlandırdık. Mükemmelliğe ve hasta memnuniyetine olan bağlılığımız, yaptığımız her şeyi yönlendiriyor.',
                "With over 15 years of dedicated service, we've established ourselves as a leading orthopedic practice. Our commitment to excellence and patient satisfaction drives everything we do."
              )}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t(
                'En son teknolojiyi şefkatli bakımla birleştirerek her hastanın kişiselleştirilmiş tedavi almasını ve optimal sonuçlara ulaşmasını sağlıyoruz.',
                'We combine state-of-the-art technology with compassionate care, ensuring every patient receives personalized treatment and achieves optimal outcomes.'
              )}
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] bg-gradient-to-br from-primary to-primary/70 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-50"> {/* Opaklık artırıldı */}
              <div className="absolute top-1/4 right-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-primary-foreground rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-28 sm:w-40 h-28 sm:h-40 bg-primary-foreground rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10 text-center p-4 sm:p-6 md:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center items-center animate-bounce-soft" style={{ marginTop: '-10px' }}> {/* Tiki biraz üste aldım */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.2-.24-.57-.27-.85-.07-.29.2-.33.57-.13.85l1.9 2.23c.12.15.29.24.48.24s.36-.09.48-.24l3.5-4.14c.21-.28.16-.65-.12-.85-.28-.21-.65-.16-.85.12z" />
                </svg>
              </div>
              <p className="text-primary-foreground text-base sm:text-lg font-medium">{t('Bakımda Mükemmellik', 'Excellence in Care')}</p>
              <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1 sm:mt-2">{t('2009\'dan beri', 'Since 2009')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
