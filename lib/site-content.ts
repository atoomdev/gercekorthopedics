import type { LocalizedValue } from '@/lib/i18n'

const text = (tr: string, en: string): LocalizedValue<string> => ({ tr, en })
const list = (tr: string[], en: string[]): LocalizedValue<string[]> => ({ tr, en })

export type ServiceDetail = {
  slug: string
  title: LocalizedValue<string>
  shortDescription: LocalizedValue<string>
  intro: LocalizedValue<string>
  whoItsFor: LocalizedValue<string[]>
  process: LocalizedValue<string[]>
  benefits: LocalizedValue<string[]>
  focusAreas: LocalizedValue<string[]>
}

export const siteConfig = {
  name: 'Gerçek Ortopedi',
  legalName: text('Gerçek Protez Ortez', 'Gercek Prosthetics & Orthotics'),
  url: 'https://www.gercekortopedi.com.tr',
  description: text(
    'Gerçek Ortopedi, 1984’ten bu yana Ankara’da kişiye özel protez, ortez, yürüme analizi ve özel tabanlık uygulamaları sunan ortopedik çözüm merkezidir.',
    'Gerçek Ortopedi is an orthopedic solutions center in Ankara, serving patients since 1984 with custom prosthetics, orthotics, gait analysis, and custom insole applications.',
  ),
  phone: {
    display: '+90 312 435 04 72',
    raw: '+903124350472',
    whatsappRaw: '903124350472',
    secondary: ['+90 312 432 07 08', '+90 312 433 02 03'],
  },
  email: 'gercekortopedi@post.com',
  address: {
    line: text(
      'Bülbülderesi Caddesi No: 8, Çankaya / Ankara',
      'Bülbülderesi Avenue No: 8, Çankaya / Ankara',
    ),
    city: text('Ankara', 'Ankara'),
    country: text('Türkiye', 'Turkey'),
  },
  foundedYear: 1984,
  appointmentNote: text(
    'Randevu ile değerlendirme, ölçü ve uygulama planlaması yapılır.',
    'Assessment, measurement, and application planning are carried out by appointment.',
  ),
}

export const commonCopy = {
  appointment: text('Randevu Al', 'Book Appointment'),
  contact: text('İletişim', 'Contact'),
  whatsappReach: text('WhatsApp', 'WhatsApp'),
  exploreServices: text('Hizmetler', 'Services'),
  serviceDetails: text('Detaylar', 'Details'),
  allServices: text('Tüm Hizmetler', 'All Services'),
  fillForm: text('Formu Doldur', 'Fill Form'),
  sendMessage: text('Mesaj Gönder', 'Send Message'),
  sending: text('Gönderiliyor...', 'Sending...'),
  rightsReserved: text('Tüm hakları saklıdır.', 'All rights reserved.'),
  customBadge: text('Kişiye özel', 'Custom'),
  backToBlog: text('Blog’a dön', 'Back to Blog'),
  contactQuestion: text('Bize Yazın', 'Ask Us'),
  viewBlog: text('Blog', 'Blog'),
}

export const metadataCopy = {
  titleTemplate: text('%s | Gerçek Ortopedi', '%s | Gerçek Ortopedi'),
  defaultTitle: text(
    'Gerçek Ortopedi | Protez, Ortez ve Kişiye Özel Ortopedik Çözümler',
    'Gerçek Ortopedi | Prosthetics, Orthotics, and Custom Orthopedic Solutions',
  ),
  defaultDescription: text(
    'Gerçek Ortopedi; protez, ortez, yürüme analizi ve kişiye özel tabanlık uygulamalarında güven veren, modern ve hasta odaklı ortopedik çözüm merkezidir.',
    'Gerçek Ortopedi is a patient-focused orthopedic solutions center offering trusted prosthetic, orthotic, gait analysis, and custom insole applications.',
  ),
  keywords: {
    tr: [
      'gerçek ortopedi',
      'protez',
      'ortez',
      'kişiye özel tabanlık',
      'yürüme analizi',
      'ankara ortopedi',
      'protez uygulama merkezi',
    ],
    en: [
      'Gerçek Ortopedi',
      'prosthetics',
      'orthotics',
      'custom insoles',
      'gait analysis',
      'orthopedic clinic Ankara',
      'prosthetic application center',
    ],
  },
  openGraphTitle: text('Gerçek Ortopedi', 'Gerçek Ortopedi'),
  openGraphDescription: text(
    'Protez, ortez, yürüme analizi ve kişiye özel ortopedik çözümler için modern ve güven veren uygulama merkezi.',
    'A modern and trusted clinic for prosthetics, orthotics, gait analysis, and personalized orthopedic solutions.',
  ),
  twitterDescription: text(
    'Kişiye özel protez, ortez ve ortopedik uygulamalar için premium dijital deneyim.',
    'A premium digital experience for custom prosthetics, orthotics, and orthopedic care.',
  ),
  homeTitle: text(
    'Gerçek Ortopedi | Protez, Ortez ve Kişiye Özel Çözümler',
    'Gerçek Ortopedi | Prosthetics, Orthotics, and Custom Solutions',
  ),
  homeDescription: text(
    'Ankara’da protez, ortez, kişiye özel tabanlık ve yürüme analizi hizmetleri için güven veren, modern ve dönüşüm odaklı ortopedik çözüm deneyimi.',
    'A trusted, modern, and conversion-focused orthopedic care experience in Ankara for prosthetics, orthotics, custom insoles, and gait analysis.',
  ),
  servicesTitle: text('Hizmetler', 'Services'),
  servicesDescription: text(
    'Gerçek Ortopedi hizmet alanları: protez uygulamaları, ortez çözümleri, kişiye özel tabanlık, yürüme analizi ve rehabilitasyon destek ürünleri.',
    'Gerçek Ortopedi service areas: prosthetic applications, orthotic solutions, custom insoles, gait analysis, and rehabilitation support products.',
  ),
  blogTitle: text('Blog', 'Blog'),
  blogDescription: text(
    'Protez, ortez, ayak sağlığı, yürüme analizi ve ortopedik bakım süreçlerine dair açıklayıcı içerikler.',
    'Practical and informative content on prosthetics, orthotics, foot health, gait analysis, and orthopedic care journeys.',
  ),
  announcementsTitle: text('Duyurular', 'Announcements'),
  announcementsDescription: text(
    'Gerçek Ortopedi’den güncellemeler, bilgilendirmeler ve kullanıcı iletişimini kolaylaştıran duyurular.',
    'Updates, notices, and service information from Gerçek Ortopedi that make communication easier for visitors.',
  ),
}

export const navigationLinks = [
  { href: '/#hizmetler', label: text('Hizmetler', 'Services') },
  { href: '/#surec', label: text('Süreç', 'Process') },
  { href: '/#uzmanliklar', label: text('Uzmanlıklar', 'Specialties') },
  { href: '/#hakkimizda', label: text('Hakkımızda', 'About') },
  { href: '/blog', label: text('Blog', 'Blog') },
  { href: '/announcements', label: text('Duyurular', 'Announcements') },
  { href: '/#iletisim', label: text('İletişim', 'Contact') },
]

export const navbarCopy = {
  topBarMessage: text(
    '1984’ten beri Ankara’da kişiye özel ortopedik çözümler.',
    'Custom orthopedic solutions in Ankara since 1984.',
  ),
  whatsappConsultation: text('WhatsApp', 'WhatsApp'),
  brandTagline: text(
    'Protez, ortez ve tabanlık',
    'Prosthetics, orthotics, and insoles',
  ),
  mobileMenuLabel: text('Menüyü aç', 'Open menu'),
  languageSwitcherLabel: text('Dil seçimi', 'Language selection'),
  contactCta: text('İletişim', 'Contact'),
  whatsappCta: text('WhatsApp', 'WhatsApp'),
}

export const heroCopy = {
  eyebrow: text(
    'Ankara ortopedik çözüm merkezi',
    'Orthopedic solutions center in Ankara',
  ),
  title: text(
    'Protez, ortez ve tabanlıkta doğru adımı birlikte planlayalım.',
    'Let’s plan the right next step in prosthetics, orthotics, and insoles.',
  ),
  description: text(
    'Değerlendirme, ölçü ve uygulama sürecini sade, güvenli ve kişiye özel biçimde yürütüyoruz.',
    'We manage assessment, measurement, and fitting through a clear, safe, and personalized process.',
  ),
  highlights: list(
    [
      '1984’ten beri deneyim',
      'Kişiye özel ölçü ve uygulama',
    ],
    [
      'Experience since 1984',
      'Custom measurement and fitting',
    ],
  ),
  workflowLabel: text('Klinik akış', 'Clinical flow'),
  workflowTitle: text(
    'Değerlendirme, ölçü ve takip',
    'Assessment, fitting, and follow-up',
  ),
  workflowList: list(
    [
      'Alt ve üst ekstremite protez planlaması',
      'Servikal, spinal ve fonksiyonel ortez çözümleri',
      'Ayak fonksiyon analizi ve kişiye özel tabanlık',
    ],
    [
      'Lower and upper extremity prosthetic planning',
      'Cervical, spinal, and functional orthotic solutions',
      'Foot function analysis and custom insoles',
    ],
  ),
  appointmentLabel: text('Randevu ve bilgi', 'Appointments & guidance'),
  appointmentDescription: text(
    'İlk görüşmede ihtiyaç ve uygun yol haritası netleşir.',
    'The first consultation clarifies the need and the right plan.',
  ),
  approachLabel: text('Yaklaşım', 'Approach'),
  approachDescription: text('Teknik doğruluk\nKişiye özel süreç', 'Technical precision\nPersonalized care'),
  fitLabel: text('Uyum', 'Fit'),
  fitDescription: text(
    'Günlük yaşama\nuyumlu çözümler',
    'Solutions for\ndaily life',
  ),
}

export const processCopy = {
  eyebrow: text('Süreç', 'Process'),
  title: text(
    'İlk görüşmeden teslime net bir süreç',
    'A clear path from consultation to delivery',
  ),
  description: text(
    'Her adımı anlaşılır ve planlı tutuyoruz.',
    'We keep every step clear and structured.',
  ),
}

export const processSteps = [
  {
    title: text('Değerlendirme', 'Assessment'),
    description: text(
      'İhtiyaç ve kullanım hedefi netleştirilir.',
      'Need and daily goals are clarified.',
    ),
  },
  {
    title: text('Analiz ve Ölçü', 'Analysis & Measurement'),
    description: text(
      'Gerekli ölçü ve analizler alınır.',
      'Required measurements and analysis are completed.',
    ),
  },
  {
    title: text('Tasarım ve Planlama', 'Design & Planning'),
    description: text(
      'Uygun malzeme ve plan belirlenir.',
      'The right materials and plan are defined.',
    ),
  },
  {
    title: text('Üretim ve Uygulama', 'Production & Fitting'),
    description: text(
      'Üretim, prova ve ayarlar tamamlanır.',
      'Production, trial fitting, and adjustments are completed.',
    ),
  },
  {
    title: text('Teslim ve Takip', 'Delivery & Follow-up'),
    description: text(
      'Teslim sonrası kullanım ve kontrol planlanır.',
      'Use and follow-up are planned after delivery.',
    ),
  },
]

export const servicesSectionCopy = {
  eyebrow: text('Hizmetler', 'Services'),
  title: text(
    'İhtiyacınıza uygun ortopedik çözümler',
    'Orthopedic solutions shaped to your needs',
  ),
  description: text(
    'Ürünü değil, doğru değerlendirme ve uyumu öne çıkarıyoruz.',
    'We focus on the right assessment, fit, and follow-up.',
  ),
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'protez-uygulamalari',
    title: text('Protez Uygulamaları', 'Prosthetic Applications'),
    shortDescription: text(
      'Alt ve üst ekstremite için kişiye özel protez planlaması.',
      'Custom prosthetic planning for lower and upper extremity needs.',
    ),
    intro: text(
      'Amaç yalnızca protez değil; güvenli, dengeli ve sürdürülebilir kullanımdır.',
      'The goal is not only a prosthesis, but safe, balanced, sustainable use.',
    ),
    whoItsFor: list(
      [
        'Alt veya üst ekstremite ampütasyonu sonrası fonksiyonel çözüme ihtiyaç duyan kişiler',
        'Yeni protez planlaması, soket yenilemesi veya bileşen güncellemesi arayan kullanıcılar',
        'Daha dengeli yürüyüş, daha iyi uyum ve daha konforlu günlük kullanım hedefleyen bireyler',
      ],
      [
        'People who need a functional solution after lower or upper extremity amputation',
        'Users seeking a new prosthesis, socket renewal, or component upgrade',
        'Individuals aiming for more balanced walking, better fit, and greater daily comfort',
      ],
    ),
    process: list(
      [
        'Klinik değerlendirme ve ihtiyaç analizi yapılır.',
        'Soket yapısı, bileşen seçimi ve kullanım senaryosu belirlenir.',
        'Ölçü, prova ve teknik ayarlar tamamlanır.',
        'Teslim sonrası kullanım eğitimi ve takip planlanır.',
      ],
      [
        'Clinical assessment and needs analysis are completed.',
        'Socket structure, component selection, and usage scenario are defined.',
        'Measurements, trial fitting, and technical adjustments are completed.',
        'Usage training and follow-up are planned after delivery.',
      ],
    ),
    benefits: list(
      [
        'Günlük yaşama daha güvenli ve dengeli uyum',
        'Kullanım konforuna göre optimize edilmiş kişiye özel yapı',
        'Fonksiyonel hedefe göre bileşen ve ayar planlaması',
        'Takip randevuları ile sürdürülebilir kullanım desteği',
      ],
      [
        'Safer and more balanced integration into daily life',
        'A custom structure optimized for comfort',
        'Component and adjustment planning aligned with functional goals',
        'Sustainable use supported through follow-up appointments',
      ],
    ),
    focusAreas: list(
      ['Alt ekstremite protezleri', 'Üst ekstremite protezleri', 'Soket yenileme', 'Bileşen güncelleme'],
      ['Lower extremity prosthetics', 'Upper extremity prosthetics', 'Socket renewal', 'Component upgrades'],
    ),
  },
  {
    slug: 'ortez-cozumleri',
    title: text('Ortez Çözümleri', 'Orthotic Solutions'),
    shortDescription: text(
      'Koruma, destek ve hizalama için kişiye uygun ortez çözümleri.',
      'Orthotic solutions tailored for protection, support, and alignment.',
    ),
    intro: text(
      'Doğru ortez, hareketi güvenli biçimde destekler ve günlük yaşamı kolaylaştırır.',
      'The right orthosis supports movement safely and makes daily life easier.',
    ),
    whoItsFor: list(
      [
        'Diz, ayak bileği, el, el bileği, dirsek veya omurga desteğine ihtiyaç duyan kişiler',
        'Cerrahi sonrası koruma ve kontrollü hareket gerektiren kullanıcılar',
        'Nörolojik veya ortopedik nedenlerle stabilizasyon desteği arayan bireyler',
      ],
      [
        'People who need support for the knee, ankle, hand, wrist, elbow, or spine',
        'Users who require protection and controlled movement after surgery',
        'Individuals seeking stabilization support due to neurological or orthopedic conditions',
      ],
    ),
    process: list(
      [
        'Sorunlu bölge, hareket sınırı ve destek ihtiyacı belirlenir.',
        'Hazır veya kişiye özel ortez yaklaşımı planlanır.',
        'Uygun malzeme ve ölçüleme ile uygulama gerçekleştirilir.',
        'Kullanım süresi, bakım ve kontrol süreci anlatılır.',
      ],
      [
        'The affected area, movement limitations, and support needs are assessed.',
        'A ready-made or custom orthotic approach is planned.',
        'Application is completed with appropriate materials and measurements.',
        'Usage duration, care, and control steps are explained.',
      ],
    ),
    benefits: list(
      [
        'Hedeflenen bölgede kontrollü destek ve koruma',
        'Günlük yaşam ve rehabilitasyon sürecinde işlevsel kolaylık',
        'Basınç, uyum ve kullanım konforu açısından daha dengeli sonuç',
        'İyileşme veya koruma planına uygun net kullanım rehberi',
      ],
      [
        'Controlled support and protection in the targeted area',
        'Functional ease in daily life and rehabilitation',
        'A more balanced result in terms of pressure, fit, and comfort',
        'A clear usage guide aligned with the protection or recovery plan',
      ],
    ),
    focusAreas: list(
      ['Alt ekstremite ortezleri', 'Üst ekstremite ortezleri', 'Soft ortezler', 'Fonksiyonel destek sistemleri'],
      ['Lower extremity orthoses', 'Upper extremity orthoses', 'Soft orthoses', 'Functional support systems'],
    ),
  },
  {
    slug: 'kisiye-ozel-tabanlik-ve-yurume-analizi',
    title: text('Kişiye Özel Tabanlık ve Yürüme Analizi', 'Custom Insoles & Gait Analysis'),
    shortDescription: text(
      'Basış ve yürüyüş analizine göre planlanan kişiye özel tabanlıklar.',
      'Custom insoles planned with pressure and gait analysis.',
    ),
    intro: text(
      'Doğru analiz, daha dengeli basış ve daha rahat kullanım sağlar.',
      'Accurate analysis supports better pressure balance and daily comfort.',
    ),
    whoItsFor: list(
      [
        'Ayak tabanı, topuk, diz, kalça veya bel kaynaklı yüklenme şikayetleri yaşayan kişiler',
        'Spor, iş veya günlük kullanım sırasında daha dengeli basış desteği arayan bireyler',
        'Çocuklar ve yetişkinlerde duruş ve yürüme değerlendirmesine ihtiyaç duyan kullanıcılar',
      ],
      [
        'People with load-related complaints affecting the sole, heel, knee, hip, or lower back',
        'Individuals seeking better pressure balance during sports, work, or daily use',
        'Children and adults who need posture and gait evaluation',
      ],
    ),
    process: list(
      [
        'Ayak fonksiyonu, basış ve yürüme örüntüsü değerlendirilir.',
        'Yük dağılımına göre tabanlık tasarımı planlanır.',
        'Kişiye özel üretim ve prova yapılır.',
        'Kullanım takibi ile gerekirse revizyon uygulanır.',
      ],
      [
        'Foot function, pressure pattern, and gait are evaluated.',
        'Insole design is planned according to load distribution.',
        'Custom production and fitting are completed.',
        'Use is followed and revisions are made when necessary.',
      ],
    ),
    benefits: list(
      [
        'Ayak basışında daha dengeli yük aktarımı',
        'Günlük kullanım ve uzun süreli ayakta kalmada konfor artışı',
        'Postür ve yürüyüş kalitesini destekleyen kişisel çözüm',
        'Çocuk ve yetişkin kullanıcılar için uyarlanabilir yaklaşım',
      ],
      [
        'More balanced load transfer during foot strike',
        'Increased comfort in daily use and prolonged standing',
        'A personalized solution that supports posture and gait quality',
        'An adaptable approach for both children and adults',
      ],
    ),
    focusAreas: list(
      ['Ayak fonksiyon analizi', 'Basış analizi', 'Kişiye özel tabanlık', 'Denge desteği'],
      ['Foot function analysis', 'Pressure analysis', 'Custom insoles', 'Balance support'],
    ),
  },
  {
    slug: 'ust-ekstremite-cozumleri',
    title: text('Üst Ekstremite Çözümleri', 'Upper Extremity Solutions'),
    shortDescription: text(
      'El ve kol bölgesi için destek ve fonksiyon odaklı çözümler.',
      'Support and function-focused solutions for the hand and arm.',
    ),
    intro: text(
      'Hedef; kavrama, destek ve günlük kullanım güvenliğini artırmaktır.',
      'The goal is to improve grip, support, and daily-use safety.',
    ),
    whoItsFor: list(
      [
        'El ve kol bölgesinde fonksiyon desteğine ihtiyaç duyan kullanıcılar',
        'Travma, ameliyat sonrası veya nörolojik nedenlerle üst ekstremite desteği arayan kişiler',
        'Üst ekstremite protez veya ortez planlaması gereken bireyler',
      ],
      [
        'Users who need functional support in the hand and arm area',
        'People seeking upper extremity support after trauma, surgery, or neurological conditions',
        'Individuals requiring upper extremity prosthetic or orthotic planning',
      ],
    ),
    process: list(
      [
        'Fonksiyon seviyesi ve günlük kullanım gereksinimleri analiz edilir.',
        'Uygun destek, protez veya ortez planı oluşturulur.',
        'Ölçü, uyarlama ve kullanım eğitimi tamamlanır.',
        'Gerekli takip ve ince ayar süreci yürütülür.',
      ],
      [
        'Functional level and daily-use needs are analyzed.',
        'An appropriate support, prosthetic, or orthotic plan is created.',
        'Measurement, adjustment, and usage training are completed.',
        'Follow-up and fine-tuning are carried out as needed.',
      ],
    ),
    benefits: list(
      [
        'Günlük işlevlerde daha fazla kontrol ve destek',
        'Kullanım amacına göre kişiselleştirilmiş tasarım',
        'Uyum ve konforu artıran uygulama detayları',
        'Takip ile sürdürülebilir fonksiyon desteği',
      ],
      [
        'Greater control and support in daily activities',
        'Personalized design based on intended use',
        'Application details that improve fit and comfort',
        'Sustainable functional support through follow-up',
      ],
    ),
    focusAreas: list(
      ['El ortezleri', 'Dirsek desteği', 'Üst ekstremite protezleri', 'Fonksiyonel yardımcı çözümler'],
      ['Hand orthoses', 'Elbow support', 'Upper extremity prosthetics', 'Functional assistive solutions'],
    ),
  },
  {
    slug: 'servikal-ve-spinal-destekler',
    title: text('Servikal ve Spinal Destekler', 'Cervical & Spinal Supports'),
    shortDescription: text(
      'Boyun ve gövde için kontrollü destek ve hizalama çözümleri.',
      'Controlled support and alignment solutions for the neck and trunk.',
    ),
    intro: text(
      'Doğru destek, gerekli korumayı sağlarken günlük kullanımı da gözetir.',
      'The right support provides protection without losing daily comfort.',
    ),
    whoItsFor: list(
      [
        'Boyun veya gövde bölgesinde destek ve hizalama gereksinimi olan kişiler',
        'Cerrahi sonrası koruma, skolyoz veya postür desteğine ihtiyaç duyan kullanıcılar',
        'Günlük kullanımda kontrollü gövde desteği arayan bireyler',
      ],
      [
        'People who need support and alignment in the neck or trunk region',
        'Users who need post-surgical protection, scoliosis support, or posture support',
        'Individuals looking for controlled trunk support in daily use',
      ],
    ),
    process: list(
      [
        'Destek ihtiyacı ve hareket kısıt gereksinimi değerlendirilir.',
        'Uygun ürün veya kişiye özel tasarım belirlenir.',
        'Uygulama, basınç kontrolü ve kullanım eğitimi verilir.',
        'Kullanım sürecine göre kontrol ve ayar yapılır.',
      ],
      [
        'Support needs and required motion restriction are assessed.',
        'An appropriate product or custom design is selected.',
        'Application, pressure control, and usage training are completed.',
        'Control and adjustments are made according to use.',
      ],
    ),
    benefits: list(
      [
        'Boyun ve gövde bölgesinde daha güvenli destek',
        'Hizalamayı koruyan kontrollü yapı',
        'Kullanım süresine göre planlanmış takip desteği',
        'Günlük yaşama uyum sağlayan daha rahat kullanım',
      ],
      [
        'Safer support for the neck and trunk',
        'A controlled structure that preserves alignment',
        'Follow-up support planned according to use duration',
        'A more comfortable fit that adapts to daily life',
      ],
    ),
    focusAreas: list(
      ['Servikal destekler', 'Spinal ortezler', 'Postür destekleri', 'Kişiye özel gövde çözümleri'],
      ['Cervical supports', 'Spinal orthoses', 'Posture supports', 'Custom trunk solutions'],
    ),
  },
  {
    slug: 'rehabilitasyon-ve-destek-urunleri',
    title: text('Rehabilitasyon ve Destek Ürünleri', 'Rehabilitation & Support Products'),
    shortDescription: text(
      'İyileşme ve günlük yaşamı destekleyen yardımcı ürünler.',
      'Support products that help recovery and daily life.',
    ),
    intro: text(
      'Ana tedavi planını tamamlayan pratik ve güvenli destek ürünleri sunuyoruz.',
      'We offer practical support products that complement the main treatment plan.',
    ),
    whoItsFor: list(
      [
        'Ameliyat sonrası veya rehabilitasyon sürecinde destek gerektiren kişiler',
        'Günlük yaşam güvenliği ve hareket kolaylığı arayan kullanıcılar',
        'Spor sonrası destek veya koruyucu ekipman ihtiyacı olan bireyler',
      ],
      [
        'People who need support after surgery or during rehabilitation',
        'Users seeking daily-life safety and easier movement',
        'Individuals who need post-sport support or protective equipment',
      ],
    ),
    process: list(
      [
        'Kullanım amacı ve ihtiyaç seviyesi belirlenir.',
        'Uygun ürün grubu ve kullanım senaryosu açıklanır.',
        'Doğru beden, doğru kullanım ve bakım bilgisi paylaşılır.',
        'Gerekli olduğunda ileri uygulama çözümlerine yönlendirme yapılır.',
      ],
      [
        'The purpose of use and level of need are identified.',
        'The right product group and use scenario are explained.',
        'Correct sizing, usage, and care information are shared.',
        'When needed, the user is directed to more advanced application solutions.',
      ],
    ),
    benefits: list(
      [
        'İyileşme sürecinde daha kontrollü günlük yaşam',
        'Hareket güvenliğini artıran yardımcı çözümler',
        'Uzun süreli kullanım için uygun ürün yönlendirmesi',
        'Ana uygulama planıyla uyumlu destek yaklaşımı',
      ],
      [
        'Better controlled daily life during recovery',
        'Supportive solutions that improve movement safety',
        'Product guidance suitable for long-term use',
        'A support approach aligned with the main application plan',
      ],
    ),
    focusAreas: list(
      ['Rehabilitasyon yardımcıları', 'Spor destek ürünleri', 'Mobilite çözümleri', 'Koruyucu ekipmanlar'],
      ['Rehabilitation aids', 'Sports support products', 'Mobility solutions', 'Protective equipment'],
    ),
  },
]

export const specialtiesCopy = {
  eyebrow: text('Uzmanlık Alanları', 'Specialties'),
  title: text(
    'Uzmanlık alanlarımız',
    'Our specialties',
  ),
  description: text(
    'Çözümü; bölgeye, fonksiyona ve günlük yaşama göre planlıyoruz.',
    'We shape each solution around region, function, and daily life.',
  ),
}

export const featuredSpecialties = [
  {
    title: text('Alt ekstremite odaklı çözümler', 'Lower extremity-focused solutions'),
    description: text(
      'Yürüme dengesi ve günlük kullanım için planlanan çözümler.',
      'Solutions planned for gait balance and daily use.',
    ),
    points: list(
      ['Yürüme analizi desteği', 'Alt ekstremite protez ve ortez planlaması', 'Kademeli uyum ve takip yaklaşımı'],
      ['Gait analysis support', 'Lower extremity prosthetic and orthotic planning', 'A gradual fit and follow-up approach'],
    ),
  },
  {
    title: text('Üst ekstremite uygulamaları', 'Upper extremity applications'),
    description: text(
      'El ve kol kullanımını destekleyen kişiye özel uygulamalar.',
      'Personalized applications that support hand and arm use.',
    ),
    points: list(
      ['Günlük yaşama uyum', 'Fonksiyonel destek planı', 'Kullanıcı odaklı ölçü ve uygulama'],
      ['Daily-life adaptation', 'Functional support planning', 'User-focused measurement and fitting'],
    ),
  },
  {
    title: text('Omurga ve postür desteği', 'Spine and posture support'),
    description: text(
      'Boyun ve gövde desteğinde koruma ile konfor birlikte değerlendirilir.',
      'Support, protection, and comfort are considered together.',
    ),
    points: list(
      ['Koruma ve hizalama dengesi', 'Kişiye göre destek seviyesi', 'Kontrollü takip planı'],
      ['Balance between protection and alignment', 'Support level tailored to the user', 'Controlled follow-up planning'],
    ),
  },
  {
    title: text('Atölye ve uygulama sürekliliği', 'Workshop and fitting continuity'),
    description: text(
      'Ölçü, prova ve teknik ayarlar aynı kalite akışında yürür.',
      'Measurement, trial fitting, and adjustments move within one quality flow.',
    ),
    points: list(
      ['Kişiye özel üretim yaklaşımı', 'Teknik ince ayar imkanı', 'Teslim sonrası kontrol desteği'],
      ['Custom production approach', 'Technical fine-tuning capability', 'Post-delivery control support'],
    ),
  },
]

export const aboutCopy = {
  eyebrow: text('Hakkımızda', 'About'),
  title: text(
    'Deneyim, teknik yeterlilik ve kişiye özel yaklaşım',
    'Experience, technical skill, and personalized care',
  ),
  description: text(
    'Protez, ortez ve tabanlık süreçlerini tek merkezde, net ve güvenli biçimde yönetiyoruz.',
    'We manage prosthetic, orthotic, and insole care under one roof with clarity and confidence.',
  ),
  foundedLabel: text('Kuruluş', 'Founded'),
  centerLabel: text('Merkez', 'Center'),
  whyImportantEyebrow: text('Neden önemli?', 'Why it matters'),
  whyImportantTitle: text(
    'Sürecin her adımını görünür kılıyoruz',
    'We make every step visible',
  ),
  whyImportantDescription: text(
    'Net süreç, doğru beklenti ve daha güçlü güven sağlar.',
    'A clear process supports better expectations and stronger trust.',
  ),
  storyPoints: [
    {
      title: text('Köklü deneyim', 'Established experience'),
      description: text(
        '1984’ten beri süren uygulama deneyimi.',
        'Application experience built since 1984.',
      ),
    },
    {
      title: text('Kişiye özel ölçü yaklaşımı', 'Custom measurement approach'),
      description: text(
        'Ölçü ve kullanım alışkanlığına göre daha doğru uyum hedeflenir.',
        'Fit is tailored to measurement and usage habits.',
      ),
    },
    {
      title: text('Teknik üretim ve ince ayar', 'Technical production and fine-tuning'),
      description: text(
        'Prova ve teknik ayarlar aynı akışta tamamlanır.',
        'Trial fitting and adjustments are completed in one flow.',
      ),
    },
    {
      title: text('Süreç görünürlüğü', 'Process visibility'),
      description: text(
        'Başvuru, uygulama ve takip adımlarını net tutuyoruz.',
        'We keep the consultation, fitting, and follow-up steps clear.',
      ),
    },
  ],
}

export const credibilityNotes = [
  text('1984’ten bu yana ortopedik uygulama tecrübesi', 'Orthopedic application experience since 1984'),
  text('Kişiye özel ölçülendirme ve uygulama planlaması', 'Custom measurement and application planning'),
  text('Ayak fonksiyonu, yürüme ve denge analizi odaklı yaklaşım', 'A foot function, gait, and balance-oriented approach'),
  text('Protez-ortez uygulamaları ile destek ürünlerinin aynı merkezde planlanması', 'Planning prosthetic-orthotic applications and support products within the same center'),
]

export const knowledgeCenterCopy = {
  eyebrow: text('Bilgi Merkezi', 'Knowledge Center'),
  title: text(
    'Karar vermeyi kolaylaştıran içerikler',
    'Content that helps you decide',
  ),
  description: text(
    'Süreçleri ve güncel bilgileri sade içeriklerle paylaşıyoruz.',
    'We share care journeys and updates through clear, accessible content.',
  ),
  guidanceEyebrow: text('Rehberlik', 'Guidance'),
  guidanceTitle: text(
    'İlk başvuruda süreci birlikte netleştirelim',
    'Let’s clarify the process from the first contact',
  ),
  guidanceDescription: text(
    'Başvuru, ölçü, teslim ve takip adımlarını sade biçimde anlatıyoruz.',
    'We explain consultation, measurement, delivery, and follow-up clearly.',
  ),
  guidanceCta: text('Süreci Değerlendir', 'Review the Process'),
}

export const knowledgeCards = [
  {
    title: text('Blog', 'Blog'),
    description: text(
      'Protez, ortez ve ayak sağlığı hakkında kısa içerikler.',
      'Short reads on prosthetics, orthotics, and foot health.',
    ),
    href: '/blog',
    cta: text('Yazıları Gör', 'View Articles'),
  },
  {
    title: text('Duyurular', 'Announcements'),
    description: text(
      'Merkezden kısa güncellemeler ve bilgilendirmeler.',
      'Short updates and notices from the clinic.',
    ),
    href: '/announcements',
    cta: text('Duyuruları Gör', 'View Updates'),
  },
]

export const contactCopy = {
  eyebrow: text('İletişim', 'Contact'),
  title: text(
    'İhtiyacınızı paylaşın',
    'Tell us what you need',
  ),
  description: text(
    'Telefon, WhatsApp veya form ile hızlıca ulaşabilirsiniz.',
    'Reach us quickly by phone, WhatsApp, or the form.',
  ),
  cards: [
    {
      title: text('Telefon', 'Phone'),
      value: text(siteConfig.phone.display, siteConfig.phone.display),
      hint: text('Randevu hattı', 'Appointment line'),
    },
    {
      title: text('WhatsApp', 'WhatsApp'),
      value: text('Hızlı iletişim', 'Quick contact'),
      hint: text('Mesaj bırakın', 'Send a message'),
    },
    {
      title: text('E-posta', 'Email'),
      value: text(siteConfig.email, siteConfig.email),
      hint: text('Detaylı talepler için', 'For detailed requests'),
    },
    {
      title: text('Adres', 'Address'),
      value: siteConfig.address.line,
      hint: text('Çankaya / Ankara', 'Çankaya / Ankara'),
    },
  ],
  infoLabel: text('Bilgi notu', 'Helpful note'),
  infoTitle: text(
    'İlk görüşmede ihtiyacınızı kısa şekilde anlatmanız yeterlidir.',
    'A short note about your need is enough for the first contact.',
  ),
  infoDescription: text(
    'Mevcut ürününüzü veya şikayetinizi birkaç cümleyle paylaşabilirsiniz.',
    'You can briefly mention any current product or complaint.',
  ),
  formEyebrow: text('Randevu Talebi', 'Appointment Request'),
  formTitle: text(
    'Kısa formu doldurun',
    'Fill out the short form',
  ),
  labels: {
    name: text('Ad Soyad', 'Full Name'),
    phone: text('Telefon', 'Phone'),
    email: text('E-posta', 'Email'),
    service: text('İlgilendiğiniz alan', 'Area of interest'),
    message: text('Mesajınız', 'Your message'),
  },
  placeholders: {
    name: text('Adınızı ve soyadınızı yazın', 'Enter your full name'),
    phone: text('05xx xxx xx xx', '+90 5xx xxx xx xx'),
    email: text('ornek@eposta.com', 'name@example.com'),
    service: text('Seçiniz', 'Select'),
    message: text(
      'İhtiyacınızı, varsa mevcut ürününüzü veya randevu talebinizi kısaca paylaşın.',
      'Briefly share your need, current product if any, or your appointment request.',
    ),
  },
  success: text(
    'Teşekkür ederiz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
    'Thank you. Our team will get in touch with you as soon as possible.',
  ),
  errors: {
    generic: text(
      'Mesaj gönderimi sırasında bir sorun oluştu.',
      'There was a problem while sending your message.',
    ),
    required: text(
      'Ad Soyad, telefon ve mesaj alanları zorunludur.',
      'Full name, phone, and message are required.',
    ),
    failed: text(
      'Mesaj kaydedilirken beklenmeyen bir hata oluştu.',
      'An unexpected error occurred while saving your message.',
    ),
  },
  messagePrefixes: {
    service: text('Talep alanı', 'Requested area'),
    email: text('E-posta', 'Email'),
  },
}

export const footerCopy = {
  eyebrow: text('Gerçek Ortopedi', 'Gerçek Ortopedi'),
  title: text(
    'Kişiye özel ortopedik çözümler',
    'Custom orthopedic solutions',
  ),
  description: text(
    'Protez, ortez ve tabanlık süreçlerini net planlama ve yakın takip ile yürütüyoruz.',
    'We manage prosthetic, orthotic, and insole care with clear planning and close follow-up.',
  ),
  menuTitle: text('Menü', 'Menu'),
  featuredServicesTitle: text('Öne çıkan hizmetler', 'Featured services'),
  quickContactTitle: text('Hızlı iletişim', 'Quick contact'),
  quickContactLabel: text('Randevu ve bilgi hattı', 'Appointment and information line'),
  quickContactDescription: text(
    'İlk görüşme ve yönlendirme için ekibimize ulaşabilirsiniz.',
    'Reach our team for first consultation and guidance.',
  ),
}

export const servicesPageCopy = {
  heroEyebrow: text('Hizmet Alanları', 'Service Areas'),
  heroTitle: text(
    'Hizmet alanlarımız',
    'Our service areas',
  ),
  heroDescription: text(
    'Her başlık; ihtiyaç, süreç ve beklenen faydayı net biçimde özetler.',
    'Each area summarizes the need, process, and expected benefit.',
  ),
  allHeadingsEyebrow: text('Tüm başlıklar', 'All service areas'),
  allHeadingsTitle: text(
    'İhtiyaç alanınızı belirleyin',
    'Find the right care area',
  ),
  allHeadingsDescription: text(
    'Aşağıdaki kartlar size uygun başlığı hızlıca görmenize yardımcı olur.',
    'The cards below help you quickly spot the right service.',
  ),
  guidanceEyebrow: text('Doğru yönlendirme', 'Right guidance'),
  guidanceTitle: text(
    'Emin değilseniz birlikte değerlendirebiliriz',
    'If you are unsure, we can review it together',
  ),
  guidanceDescription: text(
    'İlk görüşmede mevcut durum ve kullanım hedefi değerlendirilerek doğru başlığa yönlendirme yapılır.',
    'We review your current condition and usage goals to guide you to the right service.',
  ),
  informationLine: text('Randevu Al', 'Book Appointment'),
}

export const serviceDetailPageCopy = {
  notFoundTitle: text('Hizmet Bulunamadı', 'Service Not Found'),
  heroEyebrow: text('Hizmet Detayı', 'Service Details'),
  appointmentRequest: text('Randevu Talebi Oluştur', 'Request an Appointment'),
  backToAllServices: text('Tüm Hizmetlere Dön', 'Back to All Services'),
  whoItsFor: text('Kimler için?', 'Who is it for?'),
  focusAreas: text('Odak alanları', 'Focus areas'),
  howProcessMoves: text('Süreç nasıl ilerler?', 'How does the process move forward?'),
  expectedBenefits: text('Beklenen faydalar', 'Expected benefits'),
  nextStepEyebrow: text('Sonraki adım', 'Next step'),
  nextStepTitle: text(
    '{service} için ilk adımı planlayalım',
    `Let's plan the first step for {service}`,
  ),
  nextStepDescription: text(
    'Kısa bir ön bilgiyle ilk görüşmeyi doğru başlıkta planlayabiliriz.',
    'A short note is enough to guide the first consultation in the right direction.',
  ),
  whatsappAsk: text('WhatsApp', 'WhatsApp'),
}

export const blogPageCopy = {
  heroEyebrow: text('Blog', 'Blog'),
  heroTitle: text(
    'Kısa ve açıklayıcı içerikler',
    'Short, practical reads',
  ),
  heroDescription: text(
    'Protez, ortez ve ayak sağlığı hakkında sade bilgiler paylaşıyoruz.',
    'We share clear information on prosthetics, orthotics, and foot health.',
  ),
  emptyTitle: text('İçerikler hazırlanıyor', 'Content is being prepared'),
  emptyDescription: text(
    'Çok yakında protez, ortez ve ortopedik bakım süreçlerine dair açıklayıcı blog yazılarını burada bulabilirsiniz.',
    'You will soon find explanatory blog articles here about prosthetics, orthotics, and orthopedic care processes.',
  ),
  readPost: text('Oku', 'Read'),
}

export const blogPostCopy = {
  notFoundTitle: text('Yazı Bulunamadı', 'Article Not Found'),
  informationalContent: text('Bilgilendirici içerik', 'Informational content'),
  readTimeSuffix: text('dk okuma', 'min read'),
  nextStepEyebrow: text('Sonraki adım', 'Next step'),
  nextStepTitle: text(
    'Bu konu sizin için de geçerliyse bize ulaşın',
    'If this topic applies to you, contact us',
  ),
  nextStepDescription: text(
    'Doğru hizmet alanını birlikte değerlendirebiliriz.',
    'We can review the right service area together.',
  ),
}

export const announcementsPageCopy = {
  heroEyebrow: text('Duyurular', 'Announcements'),
  heroTitle: text(
    'Merkezden güncel duyurular',
    'Current clinic updates',
  ),
  heroDescription: text(
    'Çalışma akışı ve hizmetlerle ilgili kısa bilgilendirmeleri burada paylaşırız.',
    'We share short updates about service flow and clinic information here.',
  ),
  emptyTitle: text('Güncel duyuru bulunmuyor', 'There are no current announcements'),
  emptyDescription: text(
    'Yeni bilgilendirmeler yayınlandığında bu sayfada görebilirsiniz.',
    'When new updates are published, you will see them on this page.',
  ),
  fallbackTitle: text('Duyuru', 'Announcement'),
}

export const notFoundCopy = {
  title: text('Aradığınız sayfaya ulaşılamadı', 'The page you are looking for could not be found'),
  description: text(
    'Sayfa taşınmış, kaldırılmış veya bağlantı hatalı olabilir. Ana sayfaya dönebilir ya da hizmet alanlarımızı inceleyebilirsiniz.',
    'The page may have been moved, removed, or the link may be incorrect. You can return to the homepage or review our service areas.',
  ),
  homeCta: text('Ana Sayfaya Dön', 'Return Home'),
}

export const footerServiceLinks = serviceDetails.slice(0, 4).map((service) => ({
  href: `/hizmetler/${service.slug}`,
  label: service.title,
}))

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug)
}
