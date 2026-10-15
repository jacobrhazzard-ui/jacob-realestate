// Single source of truth for Jacob's transactions. Used by /listings and the
// homepage / buy page "Recent Sales" section.
//
// date: "YYYY-MM" (month precision). Leave out fields that aren't known.
// image: optional — a path in /public or an mls() photo URL. Cards show a
// placeholder when it's missing.

// MLS listing photo (CRMLS media server). Pass everything after "Key=".
const mls = (key) => `https://matrixmedia.crmls.org/mediaserver/GetMedia.ashx?Key=${key}`;

export const listingSections = [
  {
    id: 'sold-pending',
    eyebrow: 'Listing Agent',
    title: 'Sold & Pending',
    listings: [
      { address: '4709 Westerly Ct', city: 'Oceanside', beds: 3, baths: 2, sqft: 1230, price: '$600,000', date: '2026-10', status: 'Under Contract', image: mls('472186700&TableID=50&Type=1&Number=0&Size=4&exk=4f6338bced1f7380725b25a5a3891f46') },
      { address: '1404 Buena Vista #1', city: 'San Clemente', beds: 2, baths: 2, sqft: 1024, price: '$1,075,000', date: '2026-10', status: 'Under Contract', image: mls('470773323&TableID=50&Type=1&Number=0&Size=4&exk=52dc5f37279df5721120065caa385f20') },
      { address: '1332 Felipe', city: 'San Clemente', beds: 2, baths: 2, sqft: 1032, price: '$1,015,000', date: '2026-07', status: 'Sold', image: mls('464813730&TableID=50&Type=1&Number=0&Size=4&exk=d5e3f6576cf13811ebe604f46d4beec9') },
      { address: '433 E Avenida Cordoba', city: 'San Clemente', beds: 4, baths: 3, sqft: 2549, price: '$2,600,000', date: '2025-05', status: 'Sold', image: mls('412920855&TableID=50&Type=1&Number=0&Size=4&exk=252d60e875992f5bdccb796df2a7fae0') },
    ],
  },
  {
    id: 'represented-buyer',
    eyebrow: 'Buyer Representation',
    title: 'Represented Buyer',
    listings: [
      { address: '604 Calle Juarez', city: 'San Clemente', beds: 4, baths: 3.5, sqft: 3163, price: '$1,470,000', date: '2026-03', status: 'Sold', image: mls('459499695&TableID=50&Type=1&Number=0&Size=4&exk=4ba5da20d06087a7544ec69738a49084') },
      { address: '29162 Bobolink Dr', city: 'Laguna Niguel', beds: 5, baths: 3, sqft: 3336, price: '$1,752,300', date: '2025-10', status: 'Sold', image: mls('446431508&TableID=50&Type=1&Number=0&Size=4&exk=e2307adda9b470557a0dc38bc9ee3504') },
      { address: '24041 Lapwing Ln', city: 'Laguna Niguel', beds: 4, baths: 3, sqft: 3283, price: '$1,720,000', date: '2025-06', status: 'Sold', image: mls('441819627&TableID=50&Type=1&Number=0&Size=4&exk=49acb9058b01ec55f1eee53e57d8e577') },
      { address: '5636 Darien Ct', city: 'Riverside', beds: 4, baths: 3, sqft: 1954, price: '$700,000', date: '2025-02', status: 'Sold', image: mls('426648190&TableID=50&Type=1&Number=0&Size=4&exk=6feeccac0a240d1f37ce0a1e1f631abc') },
      { address: '433 E Avenida Cordoba', city: 'San Clemente', price: '$1,600,000', date: '2024-05', status: 'Sold', note: 'Resold a year later for $2.6M', image: mls('412920855&TableID=50&Type=1&Number=0&Size=4&exk=252d60e875992f5bdccb796df2a7fae0') },
      { address: '850 Powell St', city: 'Hollister', price: '$825,000', status: 'Sold' },
    ],
  },
  {
    id: 'leases',
    eyebrow: 'Rentals',
    title: 'Leases',
    listings: [
      { address: '26061 Via Viento', city: 'Mission Viejo', beds: 4, baths: 3, sqft: 3493, price: '$8,000/mo', status: 'Active', image: mls('457374857&TableID=50&Type=1&Number=0&Size=4&exk=ced58c8a916796ba30c21c82cad2a2f6') },
      { address: '1864 Laurel Rd', city: 'Oceanside', beds: 3, baths: 2, price: '$6,000/mo', status: 'Leased', image: mls('459005943&TableID=50&Type=1&Number=0&Size=4&exk=e6d26b72c8c6ebbce9323ce81a446a93') },
      { address: '34021 Granada #A', city: 'Dana Point', beds: 3, baths: 2, price: '$4,195/mo', status: 'Leased', image: mls('456694859&TableID=50&Type=1&Number=0&Size=4&exk=446ba39cfcd1f677a0c0b67d82a1c4f7') },
      { address: '420 Monterey #1C', city: 'San Clemente', beds: 'Studio', baths: 1, price: '$2,975/mo', status: 'Leased', image: mls('456185538&TableID=50&Type=1&Number=0&Size=4&exk=995f188ec18a45a4d4a644f94e95e6bf') },
      { address: '34405 Via San Juan #B', city: 'Dana Point', beds: 2, baths: 2, price: '$3,400/mo', status: 'Leased', image: mls('453052983&TableID=50&Type=1&Number=0&Size=4&exk=9bf83381460c98860389dfae855e7c35') },
      { address: '46 Los Cabos', city: 'Dana Point', beds: 2, baths: 2, price: '$4,600/mo', status: 'Leased', image: mls('451208857&TableID=50&Type=1&Number=0&Size=4&exk=c391a82f5f1a358443df19f998cb9f78') },
    ],
  },
  {
    id: 'off-market',
    eyebrow: 'Exclusive',
    title: 'Off-Market',
    listings: [
      { address: '513 Calle Malaguena', city: 'San Clemente', beds: 5, baths: 4.5, sqft: 4515, status: 'Off-Market', note: 'Available for Sale or Lease', cta: { label: 'Request Details', href: '/contact' }, image: mls('464117285&TableID=50&Type=1&Number=0&Size=4&exk=1d367670e0dd470d683f11591187fe76') },
    ],
  },
];

const SALE_SECTIONS = ['sold-pending', 'represented-buyer'];

// Most recent sales (listing + buyer side) by date, newest first.
export function getRecentSales(count = 3) {
  return listingSections
    .filter((section) => SALE_SECTIONS.includes(section.id))
    .flatMap((section) => section.listings)
    .filter((listing) => listing.date)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date) {
  if (!date) return null;
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}
