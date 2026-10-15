// Single source of truth for Jacob's transactions. Used by /listings and the
// homepage / buy page "Recent Sales" section.
//
// date: "YYYY-MM" (month precision). Leave out fields that aren't known.
// image: optional path in /public — cards show a placeholder when it's missing.

export const listingSections = [
  {
    id: 'sold-pending',
    eyebrow: 'Listing Agent',
    title: 'Sold & Pending',
    listings: [
      { address: '4709 Westerly Ct', city: 'Oceanside', beds: 3, baths: 2, sqft: 1230, price: '$600,000', date: '2026-10', status: 'Under Contract', image: '/listings/4709-westerly-ct.jpg' },
      { address: '1404 Buena Vista #1', city: 'San Clemente', beds: 2, baths: 2, sqft: 1024, price: '$1,075,000', date: '2026-10', status: 'Active Under Contract', image: '/listings/1404-buena-vista-1.jpg' },
      { address: '1332 Felipe', city: 'San Clemente', beds: 2, baths: 2, sqft: 1032, price: '$1,015,000', date: '2026-07', status: 'Sold', image: '/listings/1332-felipe.jpg' },
      { address: '433 E Avenida Cordoba', city: 'San Clemente', beds: 4, baths: 3, sqft: 2549, price: '$2,600,000', date: '2025-05', status: 'Sold', image: '/cordoba4.jpeg' },
    ],
  },
  {
    id: 'represented-buyer',
    eyebrow: 'Buyer Representation',
    title: 'Represented Buyer',
    listings: [
      { address: '604 Calle Juarez', city: 'San Clemente', beds: 4, baths: 3.5, sqft: 3163, price: '$1,470,000', date: '2026-03', status: 'Sold', image: '/listings/604-calle-juarez.jpg' },
      { address: '29162 Bobolink Dr', city: 'Laguna Niguel', beds: 5, baths: 3, sqft: 3336, price: '$1,752,300', date: '2025-10', status: 'Sold', image: '/listings/29162-bobolink-dr.jpg' },
      { address: '24041 Lapwing Ln', city: 'Laguna Niguel', beds: 4, baths: 3, sqft: 3283, price: '$1,720,000', date: '2025-06', status: 'Sold', image: '/lapwing1.jpeg' },
      { address: '5636 Darien Ct', city: 'Riverside', beds: 4, baths: 3, sqft: 1954, price: '$700,000', date: '2025-02', status: 'Sold', image: '/listings/5636-darien-ct.jpg' },
      { address: '433 E Avenida Cordoba', city: 'San Clemente', price: '$1,600,000', date: '2024-05', status: 'Sold', note: 'Resold a year later for $2.6M', image: '/cordoba4.jpeg' },
      { address: '750 Powell St', city: 'Hollister', price: '$825,000', status: 'Sold', image: '/listings/750-powell-st.jpg' },
    ],
  },
  {
    id: 'leases',
    eyebrow: 'Rentals',
    title: 'Leases',
    listings: [
      { address: '26061 Via Viento', city: 'Mission Viejo', beds: 4, baths: 3, sqft: 3493, price: '$8,000/mo', status: 'Active', image: '/listings/26061-via-viento.jpg' },
      { address: '1864 Laurel Rd', city: 'Oceanside', beds: 3, baths: 2, price: '$6,000/mo', status: 'Leased', image: '/listings/1864-laurel-rd.jpg' },
      { address: '34021 Granada #A', city: 'Dana Point', beds: 3, baths: 2, price: '$4,195/mo', status: 'Leased', image: '/listings/34021-granada-a.jpg' },
      { address: '420 Monterey #1C', city: 'San Clemente', beds: 'Studio', baths: 1, price: '$2,975/mo', status: 'Leased', image: '/listings/420-monterey-1c.jpg' },
      { address: '34405 Via San Juan #B', city: 'Dana Point', beds: 2, baths: 2, price: '$3,400/mo', status: 'Leased', image: '/listings/34405-via-san-juan-b.jpg' },
      { address: '46 Los Cabos', city: 'Dana Point', beds: 2, baths: 2, price: '$4,600/mo', status: 'Leased', image: '/listings/46-los-cabos.jpg' },
    ],
  },
  {
    id: 'off-market',
    eyebrow: 'Exclusive',
    title: 'Off-Market',
    listings: [
      { address: '513 Calle Malaguena', city: 'San Clemente', beds: 5, baths: 4.5, sqft: 4515, status: 'Off-Market', note: 'Available for Sale or Lease', cta: { label: 'Request Details', href: '/contact' }, image: '/listings/513-calle-malaguena.jpg' },
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
