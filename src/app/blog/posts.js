// Blog posts. Newest first is handled automatically (sorted by date).
// To add a post: copy one entry, give it a unique slug, and set published: true
// once Jacob has approved it. Unpublished posts never appear on the site.
//
// body blocks:
//   { type: 'h2', text: '...' }
//   { type: 'p', text: '...' }
//   { type: 'list', items: ['...', '...'] }
//   { type: 'source', text: 'Source: ...', href: 'https://...' }
//   { type: 'spotlight', neighborhood: 'talega', text: '...', jacobsTake: '...' }  -> card built from the guide
//   { type: 'snapshot', title, items: [{ value, label, change, dir: 'up'|'down'|'flat' }], source, href }
//   { type: 'rates', items: [{ label, value, prev, yearAgo }], source, href }
//   { type: 'calculator', price, rate, rate15, source }   -> interactive payment estimator
//   { type: 'compare', localLabel, otherLabel, rows: [{ label, local, localNote, other, otherNote }], source }
//   { type: 'bars', title, items: [{ label, value }], note, source, href }
//   { type: 'takeaways', items: [{ who: 'buyers'|'sellers', title, text }] }
//   { type: 'event', date: 'YYYY-MM-DD', title, time, where, cost, text, href, label }
//   { type: 'callout', title, text }
// Optional post field: summary (the "This week in 30 seconds" box). Only use figures quoted by a named source.
//
// neighborhoods: list every guide slug a post features. The guide page lists the post
// automatically, so blog <-> neighborhood links always go both ways.

export const posts = [
  {
    slug: 'san-clemente-market-update-october-2026',
    published: false,
    date: '2026-10-27',
    category: 'Market Update',
    title: 'San Clemente Market Update: Rates Ease to 7.32%, Price per Foot Up 9% + a Pier Bowl Spotlight',
    excerpt:
      'Mortgage rates slipped for the first time this month, San Clemente price per square foot is up 9% from last year, how we compare with the national market, and a closer look at the Pier Bowl.',
    summary:
      'Rates dipped this week, San Clemente homes are selling in half the time they did a year ago, and price per square foot is climbing faster than the median price.',
    neighborhoods: ['pier-bowl'],
    image: '/photos/san-clemente/pier-bowl-aerial-dusk.jpg',
    imageAlt: 'Aerial view of the San Clemente Pier and Pier Bowl at dusk',
    body: [
      { type: 'h2', text: 'Mortgage Rates' },
      { type: 'p', text: "After two weeks at 7.40%, the average 30-year fixed rate eased to 7.32% this week, according to Freddie Mac. It's still more than a point higher than a year ago, so every bit of movement matters on San Clemente price points." },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.32, prev: 7.40, yearAgo: 6.19 },
          { label: '15-year fixed', value: 6.68, prev: 6.71, yearAgo: 5.44 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, October 22, 2026',
        href: 'https://www.globenewswire.com/news-release/2026/10/22/3386709/0/en/mortgage-rates-decrease-to-7-32.html',
      },
      { type: 'calculator', price: 1799143, rate: 7.32, rate15: 6.68, source: 'Freddie Mac weekly average, October 22, 2026' },
      { type: 'h2', text: 'San Clemente Snapshot' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, September 2026',
        items: [
          { value: '$1.80M', label: 'Median sale price', change: '+4.0% vs. last year', dir: 'up' },
          { value: '$815', label: 'Median price per sq ft', change: '+9.0% vs. last year', dir: 'up' },
          { value: '34', label: 'Median days on market', change: 'Down from 71 a year ago', dir: 'down' },
          { value: '184', label: 'Homes sold', change: 'Up from 163 a year ago', dir: 'up' },
          { value: '98.6%', label: 'Sale-to-list price', change: '+1.0 pt vs. last year', dir: 'up' },
          { value: '70', label: 'Redfin Compete Score', change: 'Very competitive', dir: 'flat' },
        ],
        source: 'Source: Redfin San Clemente housing market data, September 2026',
        href: 'https://www.redfin.com/city/16690/CA/San-Clemente/housing-market',
      },
      { type: 'callout', title: 'Worth noticing', text: 'Price per square foot rose 9.0% while the median price rose 4.0%. Buyers are paying more for each foot of space, even when they buy a little smaller.' },
      { type: 'h2', text: 'San Clemente vs. the U.S.' },
      { type: 'p', text: 'Nationally, existing-home sales ticked up in September and prices rose modestly. San Clemente is moving faster on price, while homes here are selling at about the same pace as the national market.' },
      {
        type: 'compare',
        rows: [
          { label: 'Median price', local: '$1,799,143', localNote: '+4.0% year over year', other: '$417,500', otherNote: '+1.3% year over year' },
          { label: 'Median days on market', local: '34 days', localNote: 'Down from 71', other: '33 days', otherNote: 'Same as a year ago' },
          { label: 'Sales', local: '184 homes sold', localNote: 'Up from 163', other: '3.99M annual pace', otherNote: '+1.5% from August, -2.2% year over year' },
        ],
        source: 'Sources: Redfin (San Clemente, September 2026); National Association of REALTORS® existing-home sales, released October 13, 2026',
      },
      {
        type: 'snapshot',
        title: 'National market, September 2026',
        items: [
          { value: '1.60M', label: 'Homes for sale', change: '+4.6% vs. last year', dir: 'up' },
          { value: '4.8', label: "Months' supply", change: 'Unchanged from August', dir: 'flat' },
          { value: '31%', label: 'First-time buyers', change: 'Share of sales', dir: 'flat' },
          { value: '$613,600', label: 'West median price', change: '-0.3% vs. last year', dir: 'down' },
        ],
        source: 'Source: National Association of REALTORS®, September 2026 existing-home sales',
        href: 'https://www.nar.realtor/newsroom/existing-home-sales-increased-1-5-in-september-according-to-nar-report',
      },
      { type: 'h2', text: 'Who Is Looking at San Clemente' },
      {
        type: 'bars',
        title: 'Homebuyers searching to move into San Clemente, April to June 2026',
        items: [
          { label: 'San Francisco', value: 1026 },
          { label: 'Chicago', value: 577 },
          { label: 'Seattle', value: 386 },
          { label: 'Washington, DC', value: 213 },
          { label: 'New York', value: 179 },
        ],
        note: 'These are Redfin.com home searches, not actual moves. Most San Clemente buyers (86%) searched to stay in the area.',
        source: 'Source: Redfin migration data, April to June 2026',
        href: 'https://www.redfin.com/city/16690/CA/San-Clemente/housing-market',
      },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'Homes are selling in about half the time they took a year ago, and the typical sale closed at 98.6% of list price. Pricing right from day one matters more than waiting for a perfect market.' },
          { who: 'buyers', title: 'If you are buying', text: "The typical home still sold a little under asking, so there's often room to talk. And with rates moving week to week, it's worth having your financing lined up so you can act when the right home comes up." },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      {
        type: 'spotlight',
        neighborhood: 'pier-bowl',
        text: "The Pier Bowl wraps around the San Clemente Pier just below downtown. It's where the city began in 1925, and you can still walk to the beach, the Coastal Trail, the train and Avenida Del Mar.",
        jacobsTake: "This is where I live. You can walk to downtown and the beach, and there's always a fun neighborhood event going on.",
      },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-11-02',
        label: 'Coming up Monday',
        title: 'Día de los Muertos at Max Berg Plaza Park',
        time: '2 to 5 PM',
        where: 'Max Berg Plaza Park, 1100 Calle Puente',
        cost: 'Free',
        text: 'A community altar and ofrenda, sugar skull crafts, face painting, Ballet Folklórico and Danza Azteca performances, local vendors and food trucks. Residents are welcome to bring photos of loved ones for the altar.',
        href: 'https://www.sanclemente.gov/Calendar.aspx?EID=1370',
      },
    ],
  },
  {
    slug: 'san-clemente-market-update-september-2026',
    published: true,
    date: '2026-10-23',
    category: 'Market Update',
    title: 'San Clemente Market Update: September Numbers, a Talega Spotlight + Día de los Muertos',
    excerpt:
      'More sales, faster sales, and fewer price cuts than last September, a closer look at Talega, and a free community celebration at Max Berg Plaza Park on November 2.',
    summary: 'More homes sold, they sold faster, and fewer sellers had to cut their price than a year ago.',
    neighborhoods: ['talega'],
    image: '/photos/san-clemente/pier-bowl-aerial-dusk.jpg',
    imageAlt: 'Aerial view of the San Clemente Pier at dusk',
    body: [
      { type: 'h2', text: 'The September Numbers' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, September 2026',
        items: [
          { value: '$1,799,143', label: 'Median sale price', change: '+4.0% vs. last year', dir: 'up' },
          { value: '184', label: 'Homes sold', change: '+12.8% vs. last year', dir: 'up' },
          { value: '34', label: 'Median days on market', change: 'Down from 71 a year ago', dir: 'down' },
          { value: '98.6%', label: 'Sale-to-list price', change: '+1.0 pt vs. last year', dir: 'up' },
          { value: '26.0%', label: 'Sold above list', change: '+6.4 pts vs. last year', dir: 'up' },
          { value: '24.2%', label: 'Had a price drop', change: '-10.5 pts vs. last year', dir: 'down' },
        ],
        source: 'Source: Redfin, San Clemente housing market data, September 2026',
        href: 'https://www.redfin.com/city/16690/CA/San-Clemente/housing-market',
      },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'More homes sold, they sold faster, and fewer sellers had to cut their price. That rewards pricing right from day one.' },
          { who: 'buyers', title: 'If you are buying', text: 'The 98.6% sale-to-list ratio means the typical home still sold a little under asking, so there is often some room to talk.' },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      { type: 'p', text: 'As of October 17, 2026, there were 26 homes for sale in Talega with a median list price of $1,974,500, according to Ruby Home.' },
      {
        type: 'spotlight',
        neighborhood: 'talega',
        text: "Up in the northeast corner of town, Talega is one of San Clemente's newer communities, with homes built from 1999 on. It's known for its open space, the Talega Swim & Athletic Club, and the public Talega Golf Club, designed by Fred Couples.",
        jacobsTake: "I spent a lot of my childhood at Talega's parks and at friends' houses here back when the community was first being built, so I've watched it grow up.",
      },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-11-02',
        title: 'Día de los Muertos at Max Berg Plaza Park',
        time: '2 to 5 PM',
        where: 'Max Berg Plaza Park, 1100 Calle Puente',
        cost: 'Free',
        text: 'A community altar and ofrenda, sugar skull crafts, face painting, Ballet Folklórico and Danza Azteca performances, local vendors, food trucks, and a plein air art contest. The community altar opens October 30, and residents are welcome to bring photos of loved ones.',
        href: 'https://www.sanclemente.gov/Calendar.aspx?EID=1370',
      },
    ],
  },
];

// Drafts show on Vercel preview links (for review) but never on the live site.
const showDrafts = process.env.VERCEL_ENV === 'preview';

export function getPublishedPosts() {
  return posts
    .filter((p) => p.published || showDrafts)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsForNeighborhood(slug) {
  return getPublishedPosts().filter((p) => (p.neighborhoods || []).includes(slug));
}

export function getPost(slug) {
  return getPublishedPosts().find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
