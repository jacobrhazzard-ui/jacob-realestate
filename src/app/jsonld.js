// Structured data (schema.org JSON-LD) that Google and AI search tools read
// to understand who wrote a page and what place it is about.

export const SITE = 'https://jacobhazzardrealestate.com';

export const agent = {
  '@type': 'RealEstateAgent',
  '@id': `${SITE}/#agent`,
  name: 'Jacob Hazzard, REALTOR® | Luxre Realty',
  url: SITE,
  telephone: '+1-949-291-9395',
  email: 'jacob@hazzardestates.com',
  image: `${SITE}/headshot1.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '222 Avenida Del Mar',
    addressLocality: 'San Clemente',
    addressRegion: 'CA',
    postalCode: '92672',
    addressCountry: 'US',
  },
  description:
    'Jacob Hazzard is a San Clemente-born REALTOR® with Luxre Realty helping buyers, sellers, and families relocating across San Clemente and Orange County, CA.',
  areaServed: [
    { '@type': 'City', name: 'San Clemente, CA' },
    { '@type': 'City', name: 'Dana Point, CA' },
    { '@type': 'Place', name: 'Capistrano Beach, CA' },
    { '@type': 'City', name: 'San Juan Capistrano, CA' },
    { '@type': 'City', name: 'Laguna Niguel, CA' },
    { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
  ],
  knowsAbout: ['San Clemente neighborhoods', 'Home valuation', 'Selling a home', 'Buying a home', 'Relocating to Orange County', 'Home renovation before selling', 'Investment property'],
  identifier: { '@type': 'PropertyValue', propertyID: 'California DRE License', value: '02222037' },
  sameAs: ['https://www.linkedin.com/in/jacob-hazzard-ocrealtor', 'https://www.instagram.com/jacobrhazzard/', 'https://www.youtube.com/@jacobhazzardrealestate', 'https://www.zillow.com/profile/Jacob%20Hazzard', 'https://www.realtor.com/realestateagents/65085efa1345711a4a7dba6c'],
  employee: { '@id': `${SITE}/#jacob` },
  parentOrganization: { '@type': 'Organization', name: 'Luxre Realty, Inc.', identifier: 'CA DRE #01897290' },
};

export const author = {
  '@type': 'Person',
  '@id': `${SITE}/#jacob`,
  name: 'Jacob Hazzard',
  jobTitle: 'REALTOR®',
  url: `${SITE}/about`,
  image: `${SITE}/headshot1.jpg`,
  telephone: '+1-949-291-9395',
  email: 'jacob@hazzardestates.com',
  homeLocation: { '@type': 'City', name: 'San Clemente, CA' },
  sameAs: ['https://www.linkedin.com/in/jacob-hazzard-ocrealtor', 'https://www.instagram.com/jacobrhazzard/', 'https://www.youtube.com/@jacobhazzardrealestate', 'https://www.zillow.com/profile/Jacob%20Hazzard', 'https://www.realtor.com/realestateagents/65085efa1345711a4a7dba6c'],
  worksFor: { '@type': 'Organization', name: 'Luxre Realty, Inc.' },
};

export function placeFor(n) {
  return {
    '@type': 'Place',
    '@id': `${SITE}/san-clemente-neighborhoods/${n.slug}#place`,
    name: n.name.includes('San Clemente') ? `${n.name}, CA` : `${n.name}, San Clemente, CA`,
    url: `${SITE}/san-clemente-neighborhoods/${n.slug}`,
    containedInPlace: { '@type': 'City', name: 'San Clemente, CA' },
  };
}

export function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': data }) }}
    />
  );
}
