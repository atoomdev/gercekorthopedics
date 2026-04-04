import { siteConfig, serviceDetails } from '@/lib/site-content'

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.display,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    medicalSpecialty: ['Orthotics', 'Prosthetics'],
    knowsAbout: serviceDetails.map((service) => service.title),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
