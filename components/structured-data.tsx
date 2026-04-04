import { siteConfig, serviceDetails } from '@/lib/site-content'

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: siteConfig.name,
    description: siteConfig.description.tr,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.display,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line.tr,
      addressLocality: siteConfig.address.city.tr,
      addressCountry: siteConfig.address.country.tr,
    },
    medicalSpecialty: ['Orthotics', 'Prosthetics'],
    knowsAbout: serviceDetails.map((service) => service.title.tr),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
