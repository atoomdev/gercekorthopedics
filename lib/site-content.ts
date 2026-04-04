export type ServiceDetail = {
  slug: string
  title: string
  shortDescription: string
  intro: string
  whoItsFor: string[]
  process: string[]
  benefits: string[]
  focusAreas: string[]
}

export const siteConfig = {
  name: 'Gerçek Ortopedi',
  legalName: 'Gerçek Protez Ortez',
  url: 'https://www.gercekortopedi.com.tr',
  description:
    'Gerçek Ortopedi, 1984’ten bu yana Ankara’da kişiye özel protez, ortez, yürüme analizi ve özel tabanlık uygulamaları sunan ortopedik çözüm merkezidir.',
  phone: {
    display: '+90 312 435 04 72',
    raw: '+903124350472',
    whatsappRaw: '903124350472',
    secondary: ['+90 312 432 07 08', '+90 312 433 02 03'],
  },
  email: 'gercekortopedi@post.com',
  address: {
    line: 'Bülbülderesi Caddesi No: 8, Çankaya / Ankara',
    city: 'Ankara',
    country: 'Türkiye',
  },
  foundedYear: 1984,
  appointmentNote: 'Randevu ile değerlendirme, ölçü ve uygulama planlaması yapılır.',
}

export const navigationLinks = [
  { href: '/#hizmetler', label: 'Hizmetler' },
  { href: '/#surec', label: 'Süreç' },
  { href: '/#uzmanliklar', label: 'Uzmanlıklar' },
  { href: '/#hakkimizda', label: 'Hakkımızda' },
  { href: '/blog', label: 'Blog' },
  { href: '/announcements', label: 'Duyurular' },
  { href: '/#iletisim', label: 'İletişim' },
]

export const heroHighlights = [
  '1984’ten bu yana ortopedik uygulama deneyimi',
  'Kişiye özel ölçü, üretim ve uygulama yaklaşımı',
  'Protez, ortez, tabanlık ve yürüme analizi tek merkezde',
]

export const trustStats = [
  { value: '1984', label: 'başlangıç yılı' },
  { value: '40+', label: 'yıllık sektör birikimi' },
  { value: 'Ankara', label: 'uygulama merkezi' },
  { value: 'Kişiye özel', label: 'ölçü ve üretim yaklaşımı' },
]

export const trustPillars = [
  {
    title: 'Uzman değerlendirme ile başlar',
    description:
      'Her süreç; ihtiyacı, hareket kalitesini ve günlük yaşam hedeflerini anlamaya odaklanan ayrıntılı bir ön görüşme ile şekillenir.',
  },
  {
    title: 'Teknik doğruluk ve klinik denge birlikte yürür',
    description:
      'Ölçü, denge, uyum, malzeme seçimi ve uygulama detayları tek bir hasta deneyimi içinde ele alınır.',
  },
  {
    title: 'Takip ve revizyon planı netleştirilir',
    description:
      'Teslim sonrası kullanım konforu, adaptasyon ve gerekli düzenlemeler için kontrollü bir takip akışı sunulur.',
  },
]

export const processSteps = [
  {
    title: 'Değerlendirme',
    description:
      'Şikayet, beklenti, fonksiyonel ihtiyaç ve günlük yaşam hedefleri birlikte ele alınır.',
  },
  {
    title: 'Analiz ve Ölçü',
    description:
      'Yürüme, denge, yük dağılımı ve anatomik uyum için gerekli ölçümler alınır.',
  },
  {
    title: 'Tasarım ve Planlama',
    description:
      'Malzeme, bileşen ve uygulama planı; kullanım senaryosuna göre netleştirilir.',
  },
  {
    title: 'Üretim ve Uygulama',
    description:
      'Kişiye özel üretim, deneme ve teknik ayarlar kontrollü şekilde tamamlanır.',
  },
  {
    title: 'Teslim ve Takip',
    description:
      'Kullanım eğitimi, adaptasyon takibi ve gerektiğinde revizyon süreci planlanır.',
  },
]

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'protez-uygulamalari',
    title: 'Protez Uygulamaları',
    shortDescription:
      'Alt ve üst ekstremite kayıplarında hareket, denge ve günlük yaşama uyumu destekleyen kişiye özel protez planlaması.',
    intro:
      'Protez sürecinde amaç yalnızca eksik uzvu tamamlamak değil; güvenli yürüme, günlük yaşam konforu ve fonksiyonel bağımsızlığı artıran bir çözüm oluşturmaktır.',
    whoItsFor: [
      'Alt veya üst ekstremite ampütasyonu sonrası fonksiyonel çözüme ihtiyaç duyan kişiler',
      'Yeni protez planlaması, soket yenilemesi veya bileşen güncellemesi arayan kullanıcılar',
      'Daha dengeli yürüyüş, daha iyi uyum ve daha konforlu günlük kullanım hedefleyen bireyler',
    ],
    process: [
      'Klinik değerlendirme ve ihtiyaç analizi yapılır.',
      'Soket yapısı, bileşen seçimi ve kullanım senaryosu belirlenir.',
      'Ölçü, prova ve teknik ayarlar tamamlanır.',
      'Teslim sonrası kullanım eğitimi ve takip planlanır.',
    ],
    benefits: [
      'Günlük yaşama daha güvenli ve dengeli uyum',
      'Kullanım konforuna göre optimize edilmiş kişiye özel yapı',
      'Fonksiyonel hedefe göre bileşen ve ayar planlaması',
      'Takip randevuları ile sürdürülebilir kullanım desteği',
    ],
    focusAreas: ['Alt ekstremite protezleri', 'Üst ekstremite protezleri', 'Soket yenileme', 'Bileşen güncelleme'],
  },
  {
    slug: 'ortez-cozumleri',
    title: 'Ortez Çözümleri',
    shortDescription:
      'Eklem stabilitesi, koruma, yönlendirme ve günlük yaşam desteği için kişiye göre yapılandırılan ortez uygulamaları.',
    intro:
      'Ortez uygulamaları; hareketi sınırlandırmak, desteklemek veya yönlendirmek gerektiğinde, hastanın yaşam ritmine uyum sağlayan güvenilir bir destek sistemi oluşturur.',
    whoItsFor: [
      'Diz, ayak bileği, el, el bileği, dirsek veya omurga desteğine ihtiyaç duyan kişiler',
      'Cerrahi sonrası koruma ve kontrollü hareket gerektiren kullanıcılar',
      'Nörolojik veya ortopedik nedenlerle stabilizasyon desteği arayan bireyler',
    ],
    process: [
      'Sorunlu bölge, hareket sınırı ve destek ihtiyacı belirlenir.',
      'Hazır veya kişiye özel ortez yaklaşımı planlanır.',
      'Uygun malzeme ve ölçüleme ile uygulama gerçekleştirilir.',
      'Kullanım süresi, bakım ve kontrol süreci anlatılır.',
    ],
    benefits: [
      'Hedeflenen bölgede kontrollü destek ve koruma',
      'Günlük yaşam ve rehabilitasyon sürecinde işlevsel kolaylık',
      'Basınç, uyum ve kullanım konforu açısından daha dengeli sonuç',
      'İyileşme veya koruma planına uygun net kullanım rehberi',
    ],
    focusAreas: ['Alt ekstremite ortezleri', 'Üst ekstremite ortezleri', 'Soft ortezler', 'Fonksiyonel destek sistemleri'],
  },
  {
    slug: 'kisiye-ozel-tabanlik-ve-yurume-analizi',
    title: 'Kişiye Özel Tabanlık ve Yürüme Analizi',
    shortDescription:
      'Ayak basış düzeni, yük dağılımı ve yürüyüş paternine göre planlanan kişiye özel tabanlık çözümleri.',
    intro:
      'Ayak yapısı ve basış paterninin doğru analiz edilmesi; ağrıyı azaltan, dengeyi iyileştiren ve günlük konforu artıran tabanlık planlamasının temelini oluşturur.',
    whoItsFor: [
      'Ayak tabanı, topuk, diz, kalça veya bel kaynaklı yüklenme şikayetleri yaşayan kişiler',
      'Spor, iş veya günlük kullanım sırasında daha dengeli basış desteği arayan bireyler',
      'Çocuklar ve yetişkinlerde duruş ve yürüme değerlendirmesine ihtiyaç duyan kullanıcılar',
    ],
    process: [
      'Ayak fonksiyonu, basış ve yürüme örüntüsü değerlendirilir.',
      'Yük dağılımına göre tabanlık tasarımı planlanır.',
      'Kişiye özel üretim ve prova yapılır.',
      'Kullanım takibi ile gerekirse revizyon uygulanır.',
    ],
    benefits: [
      'Ayak basışında daha dengeli yük aktarımı',
      'Günlük kullanım ve uzun süreli ayakta kalmada konfor artışı',
      'Postür ve yürüyüş kalitesini destekleyen kişisel çözüm',
      'Çocuk ve yetişkin kullanıcılar için uyarlanabilir yaklaşım',
    ],
    focusAreas: ['Ayak fonksiyon analizi', 'Basış analizi', 'Kişiye özel tabanlık', 'Denge desteği'],
  },
  {
    slug: 'ust-ekstremite-cozumleri',
    title: 'Üst Ekstremite Çözümleri',
    shortDescription:
      'El, el bileği, dirsek ve kol bölgesine yönelik destek, fonksiyon ve kullanım kolaylığı odaklı kişiselleştirilmiş çözümler.',
    intro:
      'Üst ekstremite çözümlerinde hedef; kavrama, destek, günlük yaşam bağımsızlığı ve kullanım güvenliğini mümkün olan en doğal akışla desteklemektir.',
    whoItsFor: [
      'El ve kol bölgesinde fonksiyon desteğine ihtiyaç duyan kullanıcılar',
      'Travma, ameliyat sonrası veya nörolojik nedenlerle üst ekstremite desteği arayan kişiler',
      'Üst ekstremite protez veya ortez planlaması gereken bireyler',
    ],
    process: [
      'Fonksiyon seviyesi ve günlük kullanım gereksinimleri analiz edilir.',
      'Uygun destek, protez veya ortez planı oluşturulur.',
      'Ölçü, uyarlama ve kullanım eğitimi tamamlanır.',
      'Gerekli takip ve ince ayar süreci yürütülür.',
    ],
    benefits: [
      'Günlük işlevlerde daha fazla kontrol ve destek',
      'Kullanım amacına göre kişiselleştirilmiş tasarım',
      'Uyum ve konforu artıran uygulama detayları',
      'Takip ile sürdürülebilir fonksiyon desteği',
    ],
    focusAreas: ['El ortezleri', 'Dirsek desteği', 'Üst ekstremite protezleri', 'Fonksiyonel yardımcı çözümler'],
  },
  {
    slug: 'servikal-ve-spinal-destekler',
    title: 'Servikal ve Spinal Destekler',
    shortDescription:
      'Boyun, sırt ve gövde bölgesinde koruma, hizalama ve kontrollü destek amacıyla planlanan ortopedik sistemler.',
    intro:
      'Servikal ve spinal desteklerde doğru amaç; hastayı gereğinden fazla kısıtlamadan, gerekli hizalama ve korumayı güvenli biçimde sağlamaktır.',
    whoItsFor: [
      'Boyun veya gövde bölgesinde destek ve hizalama gereksinimi olan kişiler',
      'Cerrahi sonrası koruma, skolyoz veya postür desteğine ihtiyaç duyan kullanıcılar',
      'Günlük kullanımda kontrollü gövde desteği arayan bireyler',
    ],
    process: [
      'Destek ihtiyacı ve hareket kısıt gereksinimi değerlendirilir.',
      'Uygun ürün veya kişiye özel tasarım belirlenir.',
      'Uygulama, basınç kontrolü ve kullanım eğitimi verilir.',
      'Kullanım sürecine göre kontrol ve ayar yapılır.',
    ],
    benefits: [
      'Boyun ve gövde bölgesinde daha güvenli destek',
      'Hizalamayı koruyan kontrollü yapı',
      'Kullanım süresine göre planlanmış takip desteği',
      'Günlük yaşama uyum sağlayan daha rahat kullanım',
    ],
    focusAreas: ['Servikal destekler', 'Spinal ortezler', 'Postür destekleri', 'Kişiye özel gövde çözümleri'],
  },
  {
    slug: 'rehabilitasyon-ve-destek-urunleri',
    title: 'Rehabilitasyon ve Destek Ürünleri',
    shortDescription:
      'İyileşme sürecini kolaylaştıran, hareketi destekleyen ve günlük yaşam güvenliğini artıran yardımcı ürünler.',
    intro:
      'Rehabilitasyon ve destek ürünleri; ana tedavi planını tamamlayan, hareketi daha güvenli ve daha sürdürülebilir hale getiren yardımcı çözümler sunar.',
    whoItsFor: [
      'Ameliyat sonrası veya rehabilitasyon sürecinde destek gerektiren kişiler',
      'Günlük yaşam güvenliği ve hareket kolaylığı arayan kullanıcılar',
      'Spor sonrası destek veya koruyucu ekipman ihtiyacı olan bireyler',
    ],
    process: [
      'Kullanım amacı ve ihtiyaç seviyesi belirlenir.',
      'Uygun ürün grubu ve kullanım senaryosu açıklanır.',
      'Doğru beden, doğru kullanım ve bakım bilgisi paylaşılır.',
      'Gerekli olduğunda ileri uygulama çözümlerine yönlendirme yapılır.',
    ],
    benefits: [
      'İyileşme sürecinde daha kontrollü günlük yaşam',
      'Hareket güvenliğini artıran yardımcı çözümler',
      'Uzun süreli kullanım için uygun ürün yönlendirmesi',
      'Ana uygulama planıyla uyumlu destek yaklaşımı',
    ],
    focusAreas: ['Rehabilitasyon yardımcıları', 'Spor destek ürünleri', 'Mobilite çözümleri', 'Koruyucu ekipmanlar'],
  },
]

export const featuredSpecialties = [
  {
    title: 'Alt ekstremite odaklı çözümler',
    description:
      'Yürüme dengesi, yük aktarımı ve günlük yaşam güvenliği hedefiyle protez, ortez ve tabanlık süreçleri birlikte ele alınır.',
    points: ['Yürüme analizi desteği', 'Alt ekstremite protez ve ortez planlaması', 'Kademeli uyum ve takip yaklaşımı'],
  },
  {
    title: 'Üst ekstremite uygulamaları',
    description:
      'Fonksiyon, kavrama ve kullanım kolaylığı için el, el bileği, dirsek ve kol bölgesine yönelik kişiselleştirilmiş çözümler sunulur.',
    points: ['Günlük yaşama uyum', 'Fonksiyonel destek planı', 'Kullanıcı odaklı ölçü ve uygulama'],
  },
  {
    title: 'Omurga ve postür desteği',
    description:
      'Servikal ve spinal bölgede doğru destek seviyesi, kullanım konforu ve uzun süreli uyum birlikte düşünülür.',
    points: ['Koruma ve hizalama dengesi', 'Kişiye göre destek seviyesi', 'Kontrollü takip planı'],
  },
  {
    title: 'Atölye ve uygulama sürekliliği',
    description:
      'Ölçüleme, prova, uygulama ve teknik düzenlemeler birbirinden kopuk değil; aynı kalite standardı içinde yürütülür.',
    points: ['Kişiye özel üretim yaklaşımı', 'Teknik ince ayar imkanı', 'Teslim sonrası kontrol desteği'],
  },
]

export const credibilityNotes = [
  '1984’ten bu yana ortopedik uygulama tecrübesi',
  'Kişiye özel ölçülendirme ve uygulama planlaması',
  'Ayak fonksiyonu, yürüme ve denge analizi odaklı yaklaşım',
  'Protez-ortez uygulamaları ile destek ürünlerinin aynı merkezde planlanması',
]

export const knowledgeCards = [
  {
    title: 'Blog',
    description:
      'Ortopedik bakım, protez-ortez kullanımı, ayak sağlığı ve uygulama süreçlerine dair açıklayıcı içerikler.',
    href: '/blog',
    cta: 'Blog yazılarını inceleyin',
  },
  {
    title: 'Duyurular',
    description:
      'Merkezden güncellemeler, bilgilendirmeler ve hasta iletişimini kolaylaştıran güncel duyurular.',
    href: '/announcements',
    cta: 'Duyurulara göz atın',
  },
]

export const footerServiceLinks = serviceDetails.slice(0, 4).map((service) => ({
  href: `/hizmetler/${service.slug}`,
  label: service.title,
}))

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug)
}
