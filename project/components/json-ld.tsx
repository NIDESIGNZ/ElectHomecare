import { contactInfo, suburbs } from '@/lib/data';

export function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elect Home Care',
    description:
      'Professional in-home care on the Mornington Peninsula. Personalised, professional care with no call centres. Open 24/7.',
    telephone: contactInfo.phone,
    email: contactInfo.email,
    url: 'https://electhomecare.com.au',
    areaServed: suburbs.map((s) => ({
      '@type': 'City',
      name: s,
    })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    founder: {
      '@type': 'Person',
      name: 'Jo-Ann Beck',
      jobTitle: 'Founder & Care Coordinator',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
