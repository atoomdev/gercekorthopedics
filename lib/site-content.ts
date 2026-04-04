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
  contact: text('İletişime Geç', 'Contact Us'),
  whatsappReach: text('WhatsApp’tan Ulaş', 'Reach Us on WhatsApp'),
  exploreServices: text('Hizmetleri İncele', 'Explore Services'),
  serviceDetails: text('Detayları İnceleyin', 'View Details'),
  allServices: text('Tüm Hizmetleri Görün', 'View All Services'),
  fillForm: text('Formu Doldur', 'Fill Out the Form'),
  sendMessage: text('Mesaj Gönder', 'Send Message'),
  sending: text('Gönderiliyor...', 'Sending...'),
  rightsReserved: text('Tüm hakları saklıdır.', 'All rights reserved.'),
  customBadge: text('Kişiye özel', 'Custom'),
  backToBlog: text('Blog’a dön', 'Back to Blog'),
  contactQuestion: text('Sorunuzu İletin', 'Send Your Question'),
  viewBlog: text('Blog’u İncele', 'Explore the Blog'),
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
    '1984’ten bu yana Ankara’da kişiye özel protez, ortez ve ortopedik uygulama deneyimi',
    'Custom prosthetic, orthotic, and orthopedic application experience in Ankara since 1984',
  ),
  whatsappConsultation: text('WhatsApp danışma', 'WhatsApp consultation'),
  brandTagline: text(
    'Protez, ortez ve kişiye özel ortopedik çözümler',
    'Prosthetics, orthotics, and custom orthopedic solutions',
  ),
  mobileMenuLabel: text('Menüyü aç', 'Open menu'),
  languageSwitcherLabel: text('Dil seçimi', 'Language selection'),
}

export const heroCopy = {
  eyebrow: text(
    'Ankara merkezli ortopedik çözüm merkezi',
    'Orthopedic solutions center based in Ankara',
  ),
  title: text(
    'Protez, ortez ve kişiye özel ortopedik uygulamalarda güven veren bir sonraki adımı birlikte planlayalım.',
    'Let’s plan the next confident step in prosthetic, orthotic, and custom orthopedic care together.',
  ),
  description: text(
    'Gerçek Ortopedi; protez uygulamaları, ortez çözümleri, yürüme analizi ve kişiye özel tabanlık süreçlerini, net iletişim ve kişiye özel planlama ile yürüten deneyimli bir uygulama merkezidir.',
    'Gerçek Ortopedi is an experienced application center that delivers prosthetics, orthotic solutions, gait analysis, and custom insoles through clear communication and tailored planning.',
  ),
  highlights: list(
    [
      '1984’ten bu yana ortopedik uygulama deneyimi',
      'Kişiye özel ölçü, üretim ve uygulama yaklaşımı',
      'Protez, ortez, tabanlık ve yürüme analizi tek merkezde',
    ],
    [
      'Orthopedic application experience since 1984',
      'Custom measurement, production, and application approach',
      'Prosthetics, orthotics, insoles, and gait analysis in one center',
    ],
  ),
  workflowLabel: text('Klinik akış', 'Clinical flow'),
  workflowTitle: text(
    'Değerlendirme, ölçü, uygulama ve takip',
    'Assessment, measurement, fitting, and follow-up',
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
    'İlk görüşmeden itibaren ihtiyaç analizi, uygun çözüm planı ve sonraki adımlar net şekilde aktarılır.',
    'From the first consultation onward, needs analysis, the right solution plan, and next steps are communicated clearly.',
  ),
  approachLabel: text('Yaklaşım', 'Approach'),
  approachDescription: text('Teknik doğruluk\nHasta odaklı süreç', 'Technical precision\nPatient-centered process'),
  fitLabel: text('Uyum', 'Fit'),
  fitDescription: text(
    'Günlük yaşamla\nbütünleşen çözümler',
    'Solutions\nintegrated with daily life',
  ),
}

export const trustStats = [
  { value: '1984', label: text('başlangıç yılı', 'founding year') },
  { value: '40+', label: text('yıllık sektör birikimi', 'years of experience') },
  { value: 'Ankara', label: text('uygulama merkezi', 'application center') },
  { value: text('Kişiye özel', 'Custom'), label: text('ölçü ve üretim yaklaşımı', 'measurement and production approach') },
]

export const trustPillars = [
  {
    title: text('Uzman değerlendirme ile başlar', 'It starts with expert assessment'),
    description: text(
      'Her süreç; ihtiyacı, hareket kalitesini ve günlük yaşam hedeflerini anlamaya odaklanan ayrıntılı bir ön görüşme ile şekillenir.',
      'Every process begins with a detailed consultation focused on understanding the need, movement quality, and daily-life goals.',
    ),
  },
  {
    title: text('Teknik doğruluk ve klinik denge birlikte yürür', 'Technical precision and clinical balance go together'),
    description: text(
      'Ölçü, denge, uyum, malzeme seçimi ve uygulama detayları tek bir hasta deneyimi içinde ele alınır.',
      'Measurement, balance, fit, material selection, and application details are handled as one integrated patient experience.',
    ),
  },
  {
    title: text('Takip ve revizyon planı netleştirilir', 'Follow-up and revision are planned clearly'),
    description: text(
      'Teslim sonrası kullanım konforu, adaptasyon ve gerekli düzenlemeler için kontrollü bir takip akışı sunulur.',
      'After delivery, a structured follow-up path supports comfort, adaptation, and any necessary adjustments.',
    ),
  },
]

export const processCopy = {
  eyebrow: text('Süreç', 'Process'),
  title: text(
    'İlk görüşmeden teslim ve takibe kadar net bir uygulama akışı',
    'A clear application flow from first consultation to delivery and follow-up',
  ),
  description: text(
    'Her adımın anlaşılır olması; hem güven duygusunu hem de tedaviye uyumu güçlendirir. Bu nedenle süreci sade, planlı ve görünür kılıyoruz.',
    'When every step is understandable, it strengthens both trust and treatment adherence. That is why we keep the process simple, structured, and visible.',
  ),
}

export const processSteps = [
  {
    title: text('Değerlendirme', 'Assessment'),
    description: text(
      'Şikayet, beklenti, fonksiyonel ihtiyaç ve günlük yaşam hedefleri birlikte ele alınır.',
      'Your concerns, expectations, functional needs, and daily-life goals are evaluated together.',
    ),
  },
  {
    title: text('Analiz ve Ölçü', 'Analysis & Measurement'),
    description: text(
      'Yürüme, denge, yük dağılımı ve anatomik uyum için gerekli ölçümler alınır.',
      'Required measurements are taken for gait, balance, load distribution, and anatomical fit.',
    ),
  },
  {
    title: text('Tasarım ve Planlama', 'Design & Planning'),
    description: text(
      'Malzeme, bileşen ve uygulama planı; kullanım senaryosuna göre netleştirilir.',
      'Materials, components, and the application plan are defined according to the usage scenario.',
    ),
  },
  {
    title: text('Üretim ve Uygulama', 'Production & Fitting'),
    description: text(
      'Kişiye özel üretim, deneme ve teknik ayarlar kontrollü şekilde tamamlanır.',
      'Custom production, trials, and technical adjustments are completed in a controlled way.',
    ),
  },
  {
    title: text('Teslim ve Takip', 'Delivery & Follow-up'),
    description: text(
      'Kullanım eğitimi, adaptasyon takibi ve gerektiğinde revizyon süreci planlanır.',
      'Usage training, adaptation follow-up, and revisions are planned when needed.',
    ),
  },
]

export const servicesSectionCopy = {
  eyebrow: text('Hizmetler', 'Services'),
  title: text(
    'Teknik altyapıyı hasta için anlaşılır, güvenli ve kişiye uygun bir sürece çeviriyoruz',
    'We turn technical capability into a clear, safe, and patient-appropriate process.',
  ),
  description: text(
    'Ortopedik çözüm ihtiyacını sadece ürün seçimi olarak değil; değerlendirme, doğru planlama, uygulama ve takip bütünlüğü içinde ele alıyoruz.',
    'We do not approach orthopedic need as product selection alone; we address it through assessment, correct planning, application, and follow-up.',
  ),
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'protez-uygulamalari',
    title: text('Protez Uygulamaları', 'Prosthetic Applications'),
    shortDescription: text(
      'Alt ve üst ekstremite kayıplarında hareket, denge ve günlük yaşama uyumu destekleyen kişiye özel protez planlaması.',
      'Custom prosthetic planning that supports movement, balance, and daily-life adaptation in lower and upper extremity limb loss.',
    ),
    intro: text(
      'Protez sürecinde amaç yalnızca eksik uzvu tamamlamak değil; güvenli yürüme, günlük yaşam konforu ve fonksiyonel bağımsızlığı artıran bir çözüm oluşturmaktır.',
      'The goal of a prosthetic process is not simply to replace a missing limb, but to build a solution that improves safe walking, daily comfort, and functional independence.',
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
      'Eklem stabilitesi, koruma, yönlendirme ve günlük yaşam desteği için kişiye göre yapılandırılan ortez uygulamaları.',
      'Orthotic applications tailored to the individual for joint stability, protection, guidance, and daily-life support.',
    ),
    intro: text(
      'Ortez uygulamaları; hareketi sınırlandırmak, desteklemek veya yönlendirmek gerektiğinde, hastanın yaşam ritmine uyum sağlayan güvenilir bir destek sistemi oluşturur.',
      'Orthotic applications create a reliable support system that limits, supports, or guides movement in line with the patient’s daily rhythm when needed.',
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
      'Ayak basış düzeni, yük dağılımı ve yürüyüş paternine göre planlanan kişiye özel tabanlık çözümleri.',
      'Custom insole solutions designed according to foot strike pattern, load distribution, and gait behavior.',
    ),
    intro: text(
      'Ayak yapısı ve basış paterninin doğru analiz edilmesi; ağrıyı azaltan, dengeyi iyileştiren ve günlük konforu artıran tabanlık planlamasının temelini oluşturur.',
      'Accurate analysis of foot structure and pressure pattern forms the basis of insole planning that can reduce pain, improve balance, and increase daily comfort.',
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
      'El, el bileği, dirsek ve kol bölgesine yönelik destek, fonksiyon ve kullanım kolaylığı odaklı kişiselleştirilmiş çözümler.',
      'Personalized solutions focused on support, function, and ease of use for the hand, wrist, elbow, and arm.',
    ),
    intro: text(
      'Üst ekstremite çözümlerinde hedef; kavrama, destek, günlük yaşam bağımsızlığı ve kullanım güvenliğini mümkün olan en doğal akışla desteklemektir.',
      'In upper extremity solutions, the goal is to support grip, stability, daily independence, and safety in the most natural way possible.',
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
      'Boyun, sırt ve gövde bölgesinde koruma, hizalama ve kontrollü destek amacıyla planlanan ortopedik sistemler.',
      'Orthopedic systems planned for protection, alignment, and controlled support in the neck, back, and trunk region.',
    ),
    intro: text(
      'Servikal ve spinal desteklerde doğru amaç; hastayı gereğinden fazla kısıtlamadan, gerekli hizalama ve korumayı güvenli biçimde sağlamaktır.',
      'The right goal in cervical and spinal support is to provide the necessary alignment and protection without restricting the user more than needed.',
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
      'İyileşme sürecini kolaylaştıran, hareketi destekleyen ve günlük yaşam güvenliğini artıran yardımcı ürünler.',
      'Supportive products that ease recovery, assist movement, and improve daily-life safety.',
    ),
    intro: text(
      'Rehabilitasyon ve destek ürünleri; ana tedavi planını tamamlayan, hareketi daha güvenli ve daha sürdürülebilir hale getiren yardımcı çözümler sunar.',
      'Rehabilitation and support products complement the main treatment plan and offer auxiliary solutions that make movement safer and more sustainable.',
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
    'Ortopedik ihtiyacınızı tek bir ürün değil, doğru çözüm planı olarak ele alıyoruz',
    'We approach orthopedic need not as a single product, but as the right solution plan.',
  ),
  description: text(
    'Her kullanıcı için aynı yaklaşım uygun değildir. Bu nedenle çözümü; bölgeye, fonksiyona, günlük yaşama ve kullanım hedeflerine göre yapılandırıyoruz.',
    'The same approach is not suitable for every user. We shape the solution according to region, function, daily life, and usage goals.',
  ),
}

export const featuredSpecialties = [
  {
    title: text('Alt ekstremite odaklı çözümler', 'Lower extremity-focused solutions'),
    description: text(
      'Yürüme dengesi, yük aktarımı ve günlük yaşam güvenliği hedefiyle protez, ortez ve tabanlık süreçleri birlikte ele alınır.',
      'Prosthetic, orthotic, and insole processes are handled together with a focus on gait balance, load transfer, and daily-life safety.',
    ),
    points: list(
      ['Yürüme analizi desteği', 'Alt ekstremite protez ve ortez planlaması', 'Kademeli uyum ve takip yaklaşımı'],
      ['Gait analysis support', 'Lower extremity prosthetic and orthotic planning', 'A gradual fit and follow-up approach'],
    ),
  },
  {
    title: text('Üst ekstremite uygulamaları', 'Upper extremity applications'),
    description: text(
      'Fonksiyon, kavrama ve kullanım kolaylığı için el, el bileği, dirsek ve kol bölgesine yönelik kişiselleştirilmiş çözümler sunulur.',
      'Personalized solutions are offered for the hand, wrist, elbow, and arm to support function, grip, and ease of use.',
    ),
    points: list(
      ['Günlük yaşama uyum', 'Fonksiyonel destek planı', 'Kullanıcı odaklı ölçü ve uygulama'],
      ['Daily-life adaptation', 'Functional support planning', 'User-focused measurement and fitting'],
    ),
  },
  {
    title: text('Omurga ve postür desteği', 'Spine and posture support'),
    description: text(
      'Servikal ve spinal bölgede doğru destek seviyesi, kullanım konforu ve uzun süreli uyum birlikte düşünülür.',
      'In the cervical and spinal region, the right support level, comfort, and long-term fit are considered together.',
    ),
    points: list(
      ['Koruma ve hizalama dengesi', 'Kişiye göre destek seviyesi', 'Kontrollü takip planı'],
      ['Balance between protection and alignment', 'Support level tailored to the user', 'Controlled follow-up planning'],
    ),
  },
  {
    title: text('Atölye ve uygulama sürekliliği', 'Workshop and fitting continuity'),
    description: text(
      'Ölçüleme, prova, uygulama ve teknik düzenlemeler birbirinden kopuk değil; aynı kalite standardı içinde yürütülür.',
      'Measurement, trial, fitting, and technical adjustments are not isolated steps; they are carried out within the same quality standard.',
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
    'Klinik güveni, teknik yeterlilik ve kişiye özel planlama aynı masada buluşmalı',
    'Clinical trust, technical capability, and custom planning should meet at the same table.',
  ),
  description: text(
    'Bu anlayışla; protez, ortez, tabanlık ve ortopedik destek süreçlerini tek merkezde, daha anlaşılır ve daha sürdürülebilir bir deneyime dönüştürmeyi hedefliyoruz.',
    'With this understanding, we aim to turn prosthetic, orthotic, insole, and orthopedic support processes into a clearer and more sustainable experience under one roof.',
  ),
  foundedLabel: text('Kuruluş', 'Founded'),
  centerLabel: text('Merkez', 'Center'),
  whyImportantEyebrow: text('Neden önemli?', 'Why it matters'),
  whyImportantTitle: text(
    'Kullanıcı deneyimini sadece sonuçta değil, sürecin her adımında güçlendiriyoruz',
    'We strengthen the user experience not only in the result, but in every step of the process.',
  ),
  whyImportantDescription: text(
    'Modern bir ortopedik marka; karmaşık terimlerle değil, hastanın ne yaşayacağını netleştirerek güven inşa eder. Tasarladığımız deneyim bu prensibe dayanıyor.',
    'A modern orthopedic brand builds trust not through complex terminology, but by clarifying what the patient will experience. Our design is built on that principle.',
  ),
  storyPoints: [
    {
      title: text('Köklü deneyim', 'Established experience'),
      description: text(
        'Gerçek Ortopedi, 1984’ten bu yana ortopedik uygulama alanında biriken tecrübesini güncel ihtiyaçlarla birleştirir.',
        'Gerçek Ortopedi combines experience built since 1984 with today’s orthopedic needs.',
      ),
    },
    {
      title: text('Kişiye özel ölçü yaklaşımı', 'Custom measurement approach'),
      description: text(
        'Her kullanıcı için ölçü, denge, yüklenme ve kullanım alışkanlıkları dikkate alınarak daha doğru uyum hedeflenir.',
        'For every user, fit is improved through a careful review of measurement, balance, load pattern, and usage habits.',
      ),
    },
    {
      title: text('Teknik üretim ve ince ayar', 'Technical production and fine-tuning'),
      description: text(
        'Atölye ve uygulama akışının birlikte yürütülmesi; prova, düzeltme ve kullanım konforunu daha kontrollü hale getirir.',
        'Running workshop and fitting flow together makes trials, adjustments, and comfort optimization more controlled.',
      ),
    },
    {
      title: text('Süreç görünürlüğü', 'Process visibility'),
      description: text(
        'Başvuru, planlama, uygulama ve takip adımlarını netleştirerek karar verme sürecini hasta için daha anlaşılır kılıyoruz.',
        'We make decision-making clearer by defining the steps of application, planning, fitting, and follow-up.',
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

export const whyUsCopy = {
  eyebrow: text('Güven Unsurları', 'Trust Factors'),
  title: text(
    'Karar vermeyi zorlaştıran belirsizlikleri azaltmak için tasarlanmış bir deneyim',
    'An experience designed to reduce the uncertainties that make decision-making harder.',
  ),
  description: text(
    'Doğru tıbbi yaklaşım kadar; neyin neden önerildiği, uygulamanın nasıl ilerlediği ve sonrasında hangi desteğin verileceği de önemlidir.',
    'Beyond the right medical approach, it also matters why something is recommended, how the process will move forward, and what support will follow.',
  ),
  focusLabel: text('Hasta odaklı yaklaşım', 'Patient-centered approach'),
  focusTitle: text(
    'Teknik kararlar, kullanıcının günlük yaşam hedefi ile birlikte değerlendirilir',
    'Technical decisions are evaluated together with the user’s daily-life goals.',
  ),
  supportTitle: text('Süreci açıklayan destek başlıkları', 'Support topics that clarify the process'),
  supportTopics: list(
    [
      'İlk başvuruda hangi bilgilerin gerekli olduğu',
      'Ölçü, prova ve teslim adımlarının nasıl ilerlediği',
      'Kullanım sonrası kontrol ve revizyon planı',
      'Bakım, onarım ve destek süreçleri hakkında yönlendirme',
    ],
    [
      'What information is needed at the first contact',
      'How measurement, trial, and delivery steps progress',
      'Post-use control and revision planning',
      'Guidance on care, repair, and support processes',
    ],
  ),
  communicationTitle: text('İletişimde hız ve açıklık', 'Fast and clear communication'),
  communicationDescription: text(
    'Telefon, WhatsApp ve form kanallarını aynı anda görünür kılarak, danışma ve randevu başlatmayı kullanıcı için daha kolay hale getiriyoruz.',
    'By making phone, WhatsApp, and form channels visible at the same time, we make consultation and appointment requests easier for users.',
  ),
}

export const knowledgeCenterCopy = {
  eyebrow: text('Bilgi Merkezi', 'Knowledge Center'),
  title: text(
    'Sadece uygulama değil, karar vermeyi kolaylaştıran net bilgi de sunuyoruz',
    'We offer not only applications, but also clear information that makes decisions easier.',
  ),
  description: text(
    'Hizmet akışını, kullanıcıya etkisini ve güncel bilgilendirmeleri erişilebilir içeriklerle görünür kılıyoruz.',
    'We make the service flow, its impact, and current updates visible through accessible content.',
  ),
  guidanceEyebrow: text('Rehberlik', 'Guidance'),
  guidanceTitle: text(
    'İlk kez başvuruyor olsanız da süreci daha net anlamanızı istiyoruz',
    'Even if this is your first visit, we want the process to feel clear.',
  ),
  guidanceDescription: text(
    'Başvuru öncesi hazırlık, ölçü süreci, teslim, kullanım eğitimi ve takip gibi kritik başlıkları sade bir dille görünür hale getiriyoruz.',
    'We make critical topics such as pre-visit preparation, measurement, delivery, usage training, and follow-up easier to understand.',
  ),
  guidanceCta: text('Süreci birlikte değerlendirelim', 'Let’s review the process together'),
}

export const knowledgeCards = [
  {
    title: text('Blog', 'Blog'),
    description: text(
      'Ortopedik bakım, protez-ortez kullanımı, ayak sağlığı ve uygulama süreçlerine dair açıklayıcı içerikler.',
      'Clear content about orthopedic care, prosthetic-orthotic use, foot health, and application processes.',
    ),
    href: '/blog',
    cta: text('Blog yazılarını inceleyin', 'Explore blog articles'),
  },
  {
    title: text('Duyurular', 'Announcements'),
    description: text(
      'Merkezden güncellemeler, bilgilendirmeler ve hasta iletişimini kolaylaştıran güncel duyurular.',
      'Current announcements, operational updates, and helpful notices from the center.',
    ),
    href: '/announcements',
    cta: text('Duyurulara göz atın', 'Browse announcements'),
  },
]

export const contactCopy = {
  eyebrow: text('İletişim', 'Contact'),
  title: text(
    'İhtiyacınızı anlatın, size uygun ilk adımı birlikte planlayalım',
    'Tell us about your need, and let’s plan the right first step together.',
  ),
  description: text(
    'Telefon, WhatsApp, e-posta ve form üzerinden hızlıca ulaşabilir; ilk görüşme için uygun yönlendirmeyi ekibimizden alabilirsiniz.',
    'You can quickly reach us by phone, WhatsApp, email, or form and get the right guidance for the first consultation.',
  ),
  cards: [
    {
      title: text('Telefon', 'Phone'),
      value: text(siteConfig.phone.display, siteConfig.phone.display),
      hint: text('Randevu ve bilgi hattı', 'Appointments and information line'),
    },
    {
      title: text('WhatsApp', 'WhatsApp'),
      value: text('Danışma hattı', 'Consultation line'),
      hint: text('Hızlı dönüş için mesaj gönderin', 'Send a message for a quick response'),
    },
    {
      title: text('E-posta', 'Email'),
      value: text(siteConfig.email, siteConfig.email),
      hint: text('Detaylı talepler için yazabilirsiniz', 'You can write for detailed requests'),
    },
    {
      title: text('Adres', 'Address'),
      value: siteConfig.address.line,
      hint: text('Çankaya / Ankara', 'Çankaya / Ankara'),
    },
  ],
  infoLabel: text('Bilgi notu', 'Helpful note'),
  infoTitle: text(
    'İlk görüşmede ihtiyacınızı, günlük yaşam hedeflerinizi ve mevcut kullanım durumunuzu netleştirmek süreci hızlandırır.',
    'Clarifying your need, daily-life goals, and current usage situation in the first consultation makes the process faster.',
  ),
  infoDescription: text(
    'Daha önce kullandığınız ürün, mevcut şikayetiniz veya yeni başvuru nedeniniz varsa formda kısa şekilde belirtmeniz yeterlidir.',
    'If you have a previous product, a current complaint, or a reason for your new inquiry, briefly sharing it in the form is enough.',
  ),
  formEyebrow: text('Randevu Talebi', 'Appointment Request'),
  formTitle: text(
    'Kısa formu doldurun, size uygun yönlendirmeyi hazırlayalım',
    'Fill out the short form and let us prepare the right guidance for you.',
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
    'Kişiye özel ortopedik çözümleri güven veren bir süreçle buluşturuyoruz',
    'We bring custom orthopedic solutions together with a trustworthy process.',
  ),
  description: text(
    'Protez, ortez, yürüme analizi ve kişiye özel tabanlık uygulamalarında hastanın ihtiyacını anlamaya, doğru planı oluşturmaya ve sürdürülebilir kullanım desteği sunmaya odaklanıyoruz.',
    'In prosthetics, orthotics, gait analysis, and custom insoles, we focus on understanding the patient’s needs, building the right plan, and supporting sustainable use.',
  ),
  menuTitle: text('Menü', 'Menu'),
  featuredServicesTitle: text('Öne çıkan hizmetler', 'Featured services'),
  quickContactTitle: text('Hızlı iletişim', 'Quick contact'),
  quickContactLabel: text('Randevu ve bilgi hattı', 'Appointment and information line'),
  quickContactDescription: text(
    'İlk görüşme, süreç planlaması veya ürün yönlendirmesi için ekibimizle doğrudan iletişime geçebilirsiniz.',
    'You can contact our team directly for first consultations, process planning, or product guidance.',
  ),
}

export const servicesPageCopy = {
  heroEyebrow: text('Hizmet Alanları', 'Service Areas'),
  heroTitle: text(
    'Ortopedik ihtiyaçları daha anlaşılır, daha yönlendirici ve daha güvenli bir yapıda sunuyoruz',
    'We present orthopedic needs in a structure that is clearer, more guiding, and more trustworthy.',
  ),
  heroDescription: text(
    'Her hizmet başlığı; kimler için uygun olduğu, süreçte nelerin bekleneceği ve hangi faydayı hedeflediği açık şekilde yapılandırılmıştır.',
    'Each service area is structured clearly around who it is for, what to expect from the process, and what benefit it aims to deliver.',
  ),
  allHeadingsEyebrow: text('Tüm başlıklar', 'All service areas'),
  allHeadingsTitle: text(
    'Doğru çözümü seçebilmek için önce ihtiyaç alanını netleştirmek gerekir',
    'To choose the right solution, the need area must first become clear.',
  ),
  allHeadingsDescription: text(
    'Aşağıdaki hizmet kartları, hangi çözümün hangi kullanıcı ihtiyacına yanıt verdiğini daha kolay görmeniz için hazırlanmıştır.',
    'The service cards below help you understand which solution responds to which user need.',
  ),
  guidanceEyebrow: text('Doğru yönlendirme', 'Right guidance'),
  guidanceTitle: text(
    'Hangi hizmete ihtiyacınız olduğundan emin değilseniz birlikte değerlendirebiliriz',
    'If you are not sure which service you need, we can evaluate it together.',
  ),
  guidanceDescription: text(
    'İlk görüşmede mevcut durumunuzu, kullanım hedefinizi ve günlük yaşam ihtiyaçlarınızı dinleyerek uygun başlığa yönlendirme yapılabilir. Böylece yanlış ürün arayışı yerine doğru çözüm planıyla ilerlersiniz.',
    'In the first consultation, we can review your current condition, usage goals, and daily-life needs to guide you to the right service. This helps you move forward with the right solution plan instead of searching for the wrong product.',
  ),
  informationLine: text('Randevu ve Bilgi Al', 'Book an Appointment & Get Information'),
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
    '{service} için size uygun değerlendirme sürecini başlatalım',
    `Let's start the right assessment process for {service}`,
  ),
  nextStepDescription: text(
    'Mevcut durumunuzu kısaca paylaşırsanız, ilk görüşme için en doğru yönlendirmeyi birlikte planlayabiliriz.',
    'If you briefly share your current situation, we can plan the most appropriate guidance for the first consultation together.',
  ),
  whatsappAsk: text('WhatsApp ile Sorun', 'Ask on WhatsApp'),
}

export const blogPageCopy = {
  heroEyebrow: text('Blog', 'Blog'),
  heroTitle: text(
    'Ortopedik bakım ve uygulama süreçlerini daha anlaşılır hale getiren içerikler',
    'Content that makes orthopedic care and application processes easier to understand.',
  ),
  heroDescription: text(
    'Kullanıcıların karar verme sürecini kolaylaştırmak için protez, ortez, yürüme analizi ve ayak sağlığı alanlarında açıklayıcı içerikler paylaşıyoruz.',
    'We publish clear content about prosthetics, orthotics, gait analysis, and foot health to make decision-making easier for users.',
  ),
  emptyTitle: text('İçerikler hazırlanıyor', 'Content is being prepared'),
  emptyDescription: text(
    'Çok yakında protez, ortez ve ortopedik bakım süreçlerine dair açıklayıcı blog yazılarını burada bulabilirsiniz.',
    'You will soon find explanatory blog articles here about prosthetics, orthotics, and orthopedic care processes.',
  ),
  readPost: text('Yazıyı okuyun', 'Read the article'),
}

export const blogPostCopy = {
  notFoundTitle: text('Yazı Bulunamadı', 'Article Not Found'),
  informationalContent: text('Bilgilendirici içerik', 'Informational content'),
  readTimeSuffix: text('dk okuma', 'min read'),
  nextStepEyebrow: text('Sonraki adım', 'Next step'),
  nextStepTitle: text(
    'İçerikte bahsedilen konu sizin için de geçerliyse bize ulaşabilirsiniz',
    'If the topic in this article also applies to you, you can reach out to us.',
  ),
  nextStepDescription: text(
    'Süreci birlikte değerlendirmek, doğru hizmet alanını belirlemek ve ilk randevu adımını planlamak için iletişim sayfasına geçebilirsiniz.',
    'You can move to the contact section to review the process together, identify the right service area, and plan the first appointment step.',
  ),
}

export const announcementsPageCopy = {
  heroEyebrow: text('Duyurular', 'Announcements'),
  heroTitle: text(
    'Merkezden güncel bilgilendirmeler ve takip edilmesi gereken duyurular',
    'Current updates from the center and announcements worth following.',
  ),
  heroDescription: text(
    'Operasyonel güncellemeler, başvuru akışıyla ilgili bilgilendirmeler ve kullanıcı iletişimini kolaylaştıran gelişmeleri burada paylaşırız.',
    'We share operational updates, application flow notices, and developments that make user communication easier here.',
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
