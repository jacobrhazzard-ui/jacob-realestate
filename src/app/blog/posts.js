// Blog posts. Newest first is handled automatically (sorted by date).
// To add a post: copy one entry, give it a unique slug, and set published: true
// once Jacob has approved it. Unpublished posts never appear on the site.
//
// body blocks:
//   { type: 'h2', text: '...' }
//   { type: 'p', text: '...' }
//   { type: 'list', items: ['...', '...'] }
//   { type: 'source', text: 'Source: ...', href: 'https://...' }
//   { type: 'spotlight', neighborhood: 'talega', text: '...' }  -> links to the neighborhood guide
//
// neighborhoods: list every guide slug a post features. The guide page lists the post
// automatically, so blog <-> neighborhood links always go both ways.

export const posts = [
  {
    slug: 'san-clemente-market-update-september-2026',
    published: false, // awaiting Jacob's approval
    date: '2026-10-26',
    category: 'Market Update',
    title: 'San Clemente Market Update: September Numbers, a Talega Spotlight + Día de los Muertos',
    excerpt:
      'More sales, faster sales, and fewer price cuts than last September, a closer look at Talega, and a free community celebration at Max Berg Plaza Park on November 2.',
    neighborhoods: ['talega'],
    image: '/ameno2.jpeg',
    imageAlt: 'San Clemente coastline',
    body: [
      { type: 'p', text: "Happy Monday! Here's a quick look at how San Clemente's housing market finished September, a closer look at Talega, and a community event worth putting on your calendar." },
      { type: 'h2', text: 'The September Numbers' },
      {
        type: 'list',
        items: [
          'Median sale price: $1,799,143, up 4.0% from last September',
          'Homes sold: 184, up 12.8% year over year',
          'Median days on market: 34, compared with 71 a year ago',
          'Sale-to-list ratio: 98.6%, up 1.0 point',
          'Homes sold above list price: 26.0%, up 6.4 points',
          'Homes with a price drop: 24.2%, down 10.5 points',
        ],
      },
      { type: 'source', text: 'Source: Redfin, San Clemente housing market data, September 2026', href: 'https://www.redfin.com/city/16690/CA/San-Clemente/housing-market' },
      { type: 'h2', text: 'What It Means' },
      { type: 'p', text: 'Compared with a year ago, more homes sold, they sold faster, and fewer sellers had to cut their price. For sellers, that rewards pricing right from day one. For buyers, the 98.6% sale-to-list ratio means the typical home still sold a little under asking, so there is often some room to talk.' },
      { type: 'h2', text: 'Neighborhood Spotlight: Talega' },
      { type: 'p', text: "Up in the northeast corner of town, Talega is one of San Clemente's newer communities, with homes built from 1999 on. It's known for its open space (about 2,000 acres and more than 19 miles of trails), the Talega Swim & Athletic Club, and the public Talega Golf Club, designed by Fred Couples. Homes range from two- and three-story townhomes to 7-bedroom estates, plus Talega Gallery, a gated 55+ community." },
      { type: 'p', text: 'As of October 17, 2026, there were 26 homes for sale in Talega with a median list price of $1,974,500, according to Ruby Home.' },
      { type: 'spotlight', neighborhood: 'talega', text: 'Home types, prices, HOA and Mello-Roos, schools, and getting around.' },
      { type: 'h2', text: 'Local Highlight: Día de los Muertos at Max Berg' },
      { type: 'p', text: "The City of San Clemente is hosting its free Día de los Muertos celebration on Monday, November 2, from 2 to 5 PM at Max Berg Plaza Park (1100 Calle Puente). Expect a community altar and ofrenda, sugar skull crafts, face painting, Ballet Folklórico and Danza Azteca performances, local vendors, and food trucks. There's also a plein air art contest with youth, teen, and adult categories." },
      { type: 'p', text: 'The community altar opens October 30, and residents are welcome to bring photos of loved ones to place there.' },
      { type: 'source', text: 'Event details: City of San Clemente', href: 'https://www.sanclemente.gov/Calendar.aspx?EID=1370' },
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
