// San Clemente neighborhood guides.
// Rules: only use figures quoted in a published source (with its date), never estimates.
// Fair Housing: describe the place (homes, amenities, access), never who "should" live there.
// A guide only appears on the live site once published: true (drafts show on Vercel preview links).
//
// Weekly blog posts link to a guide by listing its slug in the post's `neighborhoods` array;
// the guide then shows those posts automatically, so the two always stay linked.

export const neighborhoods = [
  {
    slug: 'talega',
    published: false, // awaiting Jacob's approval
    name: 'Talega',
    updated: '2026-10-23',
    image: '/cordoba2.jpeg',
    imageAlt: 'Spanish-style home in San Clemente',
    tagline: 'Newer master-planned homes, miles of trails, and a golf course, a few minutes inland from the beach.',
    summary:
      'Talega is a master-planned community in northeast San Clemente, built starting in 1999, with Spanish and Mediterranean-style homes, a swim and athletic club, about 2,000 acres of open space, and the Talega Golf Club.',
    intro:
      "Talega sits in the northeast corner of San Clemente, roughly 3 miles from the coast and about 2 miles east of the 5. Construction started in 1999, so most homes here are newer than what you'll find closer to the pier. The whole area covers 3,510 acres and is made up of more than 30 smaller neighborhoods, from condos and townhomes to large single-family estates, plus a gated 55+ community.",
    whyPeopleMove: [
      'Newer construction: homes built from 1999 on, mostly Spanish and Mediterranean in style',
      'Open space: about 2,000 acres of open space and more than 19 miles of trails',
      'The Talega Swim & Athletic Club, with two pools, tennis courts, sand volleyball, and a roller hockey rink',
      'Talega Golf Club, a public 18-hole course designed by Fred Couples that opened in 2001',
      'Everyday errands close by at Talega Village Center, with a supermarket, restaurants, and services',
      'A range of home sizes in one community, from 3-bedroom homes to 7-bedroom estates',
    ],
    homeTypes: [
      'Single-family homes: mostly tract homes, from 3-bedroom homes up to 7-bedroom estates; larger lots tend to command higher prices',
      'Condos and townhomes: mostly two- and three-story attached homes; single-level options are limited to Carmel, Santalana, Verano, and a few units in Seagarden',
      'Talega Gallery: a gated 55+ community with four sub-communities, three with detached homes and one with single-level attached townhomes',
    ],
    market: {
      figures: [
        'Median sale price: $1,983,810 over the three months ending June 2026, up 13.4% from the same period a year earlier (Redfin)',
        'Homes sold in June 2026: 35, up from 33 a year earlier (Redfin)',
        'Active listings as of October 17, 2026: 26, with a median list price of $1,974,500 and an average of $733 per square foot (Ruby Home)',
        'Listed prices on October 17, 2026 ranged from $839,888 for a 2-bed, 1,351 sq ft home to $5,875,000 for a 4-bed, 5,263 sq ft home (Ruby Home)',
      ],
      note: 'Sale prices are what homes actually closed for; list prices are what sellers are currently asking. They are reported by different sources over different periods.',
    },
    costsToKnow: [
      'Every home pays dues to the Talega Master HOA, and condo communities add a second HOA for their own amenities',
      'Most homes also pay Mello-Roos special taxes on the property tax bill; Ruby Home puts the effective tax rate with Mello-Roos at about 1.5%',
      'Both vary by tract, so check the HOA dues and the actual tax bill for any specific home',
    ],
    schools:
      'Talega is in Capistrano Unified School District. Vista Del Mar Elementary and Middle School (K-8) was built alongside the community, and San Clemente High School is a couple of miles away. Boundaries can change, so always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'About 2 miles east of I-5, roughly 3 miles from the coast',
      'Main roads: Avenida Pico, Avenida Talega, Avenida Vista Hermosa, and Camino La Pedriza',
    ],
    localTip: null, // Jacob to add one line in his own words
    faqs: [
      {
        q: 'Why do people move to Talega in San Clemente?',
        a: 'Talega offers newer homes (built from 1999 on), about 2,000 acres of open space with more than 19 miles of trails, a swim and athletic club, the public Talega Golf Club, and a shopping center inside the community, all a few miles from the beach.',
      },
      {
        q: 'How much do homes cost in Talega?',
        a: 'Redfin reported a median sale price of $1,983,810 for the three months ending June 2026. As of October 17, 2026, Ruby Home reported a median list price of $1,974,500 across 26 active listings.',
      },
      {
        q: 'Does Talega have HOA fees and Mello-Roos?',
        a: 'Yes. Homes pay dues to the Talega Master HOA (condos have an additional HOA), and most homes pay Mello-Roos special taxes. Amounts vary by tract, so check the specific property.',
      },
      {
        q: 'What types of homes are in Talega?',
        a: 'Mostly single-family tract homes from 3 to 7 bedrooms, two- and three-story condos and townhomes, and Talega Gallery, a gated 55+ community.',
      },
    ],
    sources: [
      { label: 'Redfin: Talega housing market', href: 'https://www.redfin.com/neighborhood/65361/CA/San-Clemente/Talega/housing-market' },
      { label: 'Ruby Home: Talega neighborhood guide', href: 'https://www.rubyhome.com/san-clemente-ca/talega/' },
      { label: 'Wikipedia: Talega, San Clemente', href: 'https://en.wikipedia.org/wiki/Talega,_San_Clemente,_California' },
      { label: 'GolfN: Talega Golf Club', href: 'https://www.golfn.com/courses/united-states-of-america/california/talega-golf-club' },
    ],
  },
];

const showDrafts = process.env.VERCEL_ENV === 'preview';

export function getNeighborhoods() {
  return neighborhoods.filter((n) => n.published || showDrafts);
}

export function getNeighborhood(slug) {
  return getNeighborhoods().find((n) => n.slug === slug);
}
