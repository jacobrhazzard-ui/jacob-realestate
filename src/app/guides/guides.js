// Answer guides: evergreen pages that answer the questions buyers and sellers
// actually search for. Same block types as the blog (see ../blog/posts.js), plus
//   { type: 'steps', items: [{ title, text }] }   -> numbered timeline
// faq: [{ q, a }] renders at the bottom and as FAQPage structured data.
// Only use figures quoted by a named source. Drafts show on preview links only.

const REDFIN_SC = 'https://www.redfin.com/city/16690/CA/San-Clemente/housing-market';
const REDFIN_DP = 'https://www.redfin.com/city/4641/CA/Dana-Point/housing-market';
const FREDDIE = 'https://www.globenewswire.com/news-release/2026/10/22/3386709/0/en/mortgage-rates-decrease-to-7-32.html';
const BOE = 'https://www.boe.ca.gov/proptaxes/pdf/pub29.pdf';
const OC_DTT = 'https://www.ocrecorder.com/sites/ocrecorder/files/import/data/files/88534.pdf';

export const guides = [
  {
    slug: 'dana-point-vs-san-clemente',
    published: false,
    updated: '2026-10-27',
    category: 'Compare',
    title: 'Dana Point vs. San Clemente: Which Beach Town Fits You?',
    excerpt:
      'Two neighboring beach towns, one school district, very different price points. A local comparison of homes, prices, pace and lifestyle in Dana Point and San Clemente.',
    summary:
      'Both are coastal South County towns in Capistrano Unified. Dana Point is the harbor town with a higher median price; San Clemente is larger, with more variety in neighborhoods and price points.',
    image: 'https://images.unsplash.com/photo-1718145542654-d48bfc8fc05e',
    imageAlt: 'Boats in Dana Point Harbor',
    body: [
      { type: 'h2', text: 'The Short Answer' },
      { type: 'p', text: "I grew up in San Clemente and spend a lot of time in Dana Point, and I get this question all the time. They share a border, a coastline and a school district, but they feel different day to day. Dana Point life centers on the harbor and the headlands. San Clemente is a bigger town with a walkable downtown on Avenida Del Mar, the pier, and inland neighborhoods like Talega and Forster Ranch alongside the beach areas." },
      { type: 'h2', text: 'Prices and Pace' },
      {
        type: 'compare',
        localLabel: 'San Clemente',
        otherLabel: 'Dana Point',
        rows: [
          { label: 'Median sale price', local: '$1,799,143', localNote: 'September 2026, +4.0% YoY', other: '$2,099,000', otherNote: '3 months ending Sept 2026, +16.6% YoY' },
          { label: 'Price per sq ft', local: '$815', localNote: '+9.0% YoY', other: 'About $1,130', otherNote: '+23.9% YoY' },
          { label: 'Median days on market', local: '34', localNote: '71 a year earlier', other: '47', otherNote: '64 a year earlier' },
          { label: 'Homes sold (September)', local: '184', localNote: '163 a year earlier', other: '113', otherNote: '110 a year earlier' },
        ],
        source: 'Source: Redfin housing market pages for San Clemente and Dana Point. Redfin reports the two medians over slightly different periods, so treat this as a general comparison.',
      },
      { type: 'source', text: 'Redfin: Dana Point housing market', href: REDFIN_DP },
      {
        type: 'takeaways',
        items: [
          { who: 'buyers', title: 'If you are buying', text: 'San Clemente has more homes trading each month and a wider range of neighborhoods, which usually means more choice. In Dana Point, prices swing a lot between harbor-area condos, bluff-top homes and gated coastal communities, so comparing the right homes matters.' },
          { who: 'sellers', title: 'If you are selling', text: 'Both markets are moving faster than a year ago. Pricing against the right comparable sales, in the right part of town, matters more than the citywide median.' },
        ],
      },
      { type: 'h2', text: 'Lifestyle' },
      {
        type: 'compare',
        localLabel: 'San Clemente',
        otherLabel: 'Dana Point',
        rows: [
          { label: 'Feel', local: 'Spanish Village by the Sea', localNote: 'Walkable downtown, pier, surf town', other: 'Harbor town', otherNote: 'Marina, headlands, Lantern District' },
          { label: 'Beaches', local: 'Pier, T-Street, Trestles', localNote: 'Beach trail along the coast', other: 'Doheny, Salt Creek, Strands', otherNote: 'Harbor and state beach' },
          { label: 'Home types', local: 'Beach cottages to master-planned', localNote: 'Pier Bowl, Talega, Forster Ranch and more', other: 'Coastal and gated communities', otherNote: 'Monarch Beach, Niguel Shores, Capo Beach' },
          { label: 'Schools', local: 'Capistrano Unified', localNote: 'Confirm by address', other: 'Capistrano Unified', otherNote: 'Confirm by address' },
          { label: 'Train', local: 'Metrolink & Amtrak stops', localNote: 'Downtown and the pier', other: 'Nearest station in San Juan Capistrano or San Clemente', otherNote: '' },
        ],
        source: 'Jacob Hazzard, local knowledge. School boundaries can change; always confirm with the district.',
      },
      { type: 'callout', title: "Jacob's take", text: 'If the harbor and the headlands are your thing, start in Dana Point. If you want variety, a downtown you can walk to, and more homes to choose from, start in San Clemente. Most of my clients tour both.' },
      { type: 'h2', text: 'Explore Each Town' },
      { type: 'spotlight', neighborhood: 'dana-point', text: 'A harbor town next door, with Doheny State Beach, Salt Creek and the Lantern District.' },
      { type: 'p', text: 'For San Clemente, browse the neighborhood guides: every area from the Pier Bowl to Talega has its own page with homes, schools and recent prices.' },
    ],
    links: [
      { href: '/san-clemente-neighborhoods', label: 'San Clemente neighborhood guides' },
      { href: '/orange-county-cities/dana-point', label: 'Dana Point city guide' },
    ],
    faq: [
      { q: 'Is Dana Point more expensive than San Clemente?', a: "Based on Redfin's latest figures, yes: Dana Point's median sale price was $2,099,000 for the three months ending September 2026, compared with San Clemente's $1,799,143 in September. Prices vary a lot by neighborhood in both towns." },
      { q: 'Do Dana Point and San Clemente share a school district?', a: 'Yes. Both are served by Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district, since boundaries can change.' },
      { q: 'Which town has more homes for sale?', a: 'San Clemente is the bigger market. Redfin reported 184 homes sold in San Clemente in September 2026, compared with 113 in Dana Point.' },
    ],
  },

  {
    slug: 'selling-a-home-in-san-clemente',
    published: false,
    updated: '2026-10-27',
    category: "Seller's Guide",
    title: "Selling a Home in San Clemente: A Local Seller's Guide",
    excerpt:
      'How to sell a San Clemente home for the most money: today\'s market, the steps from first call to closing, what to update before listing, and the costs to plan for.',
    summary:
      'Homes in San Clemente are selling in about half the time they took a year ago, close to list price. The sellers who do best price right from day one and prepare the home with purpose.',
    image: '/cordoba5.jpeg',
    imageAlt: 'San Clemente home sold by Jacob Hazzard',
    body: [
      { type: 'h2', text: 'The Market Right Now' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, September 2026',
        items: [
          { value: '$1.80M', label: 'Median sale price', change: '+4.0% vs. last year', dir: 'up' },
          { value: '34', label: 'Median days on market', change: 'Down from 71 a year ago', dir: 'down' },
          { value: '98.6%', label: 'Sale-to-list price', change: '+1.0 pt vs. last year', dir: 'up' },
        ],
        source: 'Source: Redfin, San Clemente housing market',
        href: REDFIN_SC,
      },
      { type: 'p', text: 'In plain terms: well-priced homes are selling quickly, and close to their asking price. That also means buyers notice fast when a home is priced too high, and those homes tend to sit.' },
      { type: 'h2', text: 'Step by Step' },
      {
        type: 'steps',
        items: [
          { title: 'Talk strategy', text: "We walk the home together, talk about your timing and goals, and I put together a pricing analysis based on recent sales nearby, not a citywide average." },
          { title: 'Prepare with purpose', text: 'Not every update pays off. I help you decide what is worth doing before listing, from paint and lighting to small repairs, and what to skip. I can connect you with trusted local trades.' },
          { title: 'Photos, video and launch', text: 'Professional photography and video, a listing written for how buyers actually search, and a launch plan across the MLS, the major home-search sites and my network.' },
          { title: 'Showings and offers', text: 'I handle showings and feedback, then walk you through every offer, including price, financing, contingencies and timing, so you can compare them side by side.' },
          { title: 'Escrow to closing', text: 'Disclosures, inspections, appraisal and any repair requests. I stay on top of every deadline until the keys change hands.' },
        ],
      },
      { type: 'h2', text: 'Costs to Plan For' },
      { type: 'p', text: "Every sale is different, so I'll give you a net sheet with your actual numbers. A few costs come up in almost every San Clemente sale:" },
      {
        type: 'list',
        items: [
          'Orange County documentary transfer tax: $0.55 for each $500 of value (about $1.10 per $1,000). Who pays is set in the purchase contract.',
          'Escrow and title fees, and any HOA transfer or document fees if the home is in an association',
          'Real estate commissions, which are always negotiable',
          'Any repairs or credits agreed to after the buyer\'s inspections',
        ],
      },
      { type: 'source', text: 'Source: Orange County Clerk-Recorder, documentary transfer tax', href: OC_DTT },
      { type: 'h2', text: 'What Sellers Ask Me' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'Should I renovate before selling?', text: 'Usually not a full remodel. Targeted updates that fix what buyers notice first can make a real difference. Before I listed 433 E Avenida Cordoba, pre-sale updates added more than $400,000 to the seller\'s net.' },
          { who: 'sellers', title: 'When is the best time to list?', text: 'The best time is when your home is ready and priced right. Right now, homes are selling faster than they did a year ago, which helps sellers who are prepared.' },
        ],
      },
      { type: 'callout', title: "Jacob's take", text: 'Price it right, prepare with purpose, then market it hard. In this market, the first two weeks matter most.' },
    ],
    links: [
      { href: '/sell#property-valuation', label: "What's my home worth?" },
      { href: '/sell', label: 'How I market homes' },
    ],
    faq: [
      { q: 'How long does it take to sell a home in San Clemente?', a: 'Redfin reported a median of 34 days on market in San Clemente in September 2026, down from 71 days a year earlier. Escrow comes after that, so plan on more time from listing to closing.' },
      { q: 'Do San Clemente homes sell for asking price?', a: 'On average, close to it. Redfin reported a 98.6% sale-to-list ratio in San Clemente in September 2026. Pricing and condition make a big difference for each home.' },
      { q: 'What is the transfer tax when selling in Orange County?', a: 'The Orange County documentary transfer tax is $0.55 for each $500 of value, about $1.10 per $1,000. Who pays it is negotiated in the purchase contract.' },
    ],
  },

  {
    slug: 'buying-a-home-in-san-clemente',
    published: false,
    updated: '2026-10-27',
    category: "Buyer's Guide",
    title: "Buying a Home in San Clemente: A Local Buyer's Guide",
    excerpt:
      'Everything to know before buying in San Clemente: current rates and prices, a payment calculator, the steps from pre-approval to keys, and how to compete in a fast market.',
    summary:
      'San Clemente homes are selling in about a month, close to list price. Buyers who are pre-approved, know their neighborhoods, and move quickly have the edge.',
    image: '/photos/san-clemente/pier-bowl-aerial-dusk.jpg',
    imageAlt: 'Aerial view of the San Clemente Pier at dusk',
    body: [
      { type: 'h2', text: 'Rates and Payments' },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.32, prev: 7.40, yearAgo: 6.19 },
          { label: '15-year fixed', value: 6.68, prev: 6.71, yearAgo: 5.44 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, October 22, 2026',
        href: FREDDIE,
      },
      { type: 'calculator', price: 1799143, rate: 7.32, rate15: 6.68, source: 'Freddie Mac weekly average, October 22, 2026' },
      { type: 'h2', text: 'The Market Right Now' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, September 2026',
        items: [
          { value: '$1.80M', label: 'Median sale price', change: '+4.0% vs. last year', dir: 'up' },
          { value: '34', label: 'Median days on market', change: 'Down from 71 a year ago', dir: 'down' },
          { value: '184', label: 'Homes sold', change: 'Up from 163 a year ago', dir: 'up' },
        ],
        source: 'Source: Redfin, San Clemente housing market',
        href: REDFIN_SC,
      },
      { type: 'h2', text: 'Step by Step' },
      {
        type: 'steps',
        items: [
          { title: 'Get pre-approved', text: 'Talk to a lender who knows Orange County condos, HOAs and jumbo loans. A strong pre-approval makes your offer stand out.' },
          { title: 'Sign a buyer agreement', text: "California now requires a written agreement with your agent before touring homes. It spells out what I'll do for you and how I'm paid, and it's all negotiable." },
          { title: 'Find the right neighborhood', text: 'The Pier Bowl, Talega and Forster Ranch are very different places to live. I help you narrow it down by lifestyle, commute and budget.' },
          { title: 'Write a winning offer', text: 'Price, terms, contingencies and timing all matter. I use recent sales and what I know about the listing to help you put your best offer forward.' },
          { title: 'Inspections to keys', text: 'Inspections, appraisal, loan approval and disclosures, with every deadline tracked until closing day.' },
        ],
      },
      { type: 'h2', text: 'Costs Beyond the Price' },
      {
        type: 'list',
        items: [
          'Property taxes: under Proposition 13, the base tax is capped at 1% of a home\'s assessed value, plus any voter-approved local charges. Your home is reassessed when you buy it.',
          'Mello-Roos and special assessments in some newer communities, which show up on the property tax bill',
          'HOA dues in many communities, which vary widely',
          'Homeowners insurance. Get quotes early, especially for homes near open space or hillsides',
        ],
      },
      { type: 'source', text: 'Source: California State Board of Equalization, Publication 29', href: BOE },
      { type: 'callout', title: "Jacob's take", text: 'In a market this fast, the best homes go to buyers who are ready. Get pre-approved, know your must-haves, and let me watch the market for you.' },
    ],
    links: [
      { href: '/buy', label: 'Search homes' },
      { href: '/san-clemente-neighborhoods', label: 'San Clemente neighborhood guides' },
      { href: '/guides/cost-of-living-in-san-clemente', label: 'Cost of living in San Clemente' },
    ],
    faq: [
      { q: 'What is the median home price in San Clemente?', a: "Redfin reported a median sale price of $1,799,143 for San Clemente in September 2026, up 4.0% from a year earlier." },
      { q: 'Do I need a buyer agreement to tour homes in California?', a: 'Yes. Since August 2024, buyers sign a written agreement with their agent before touring. It lays out the services and how the agent is paid, and the terms are negotiable.' },
      { q: 'How fast do homes sell in San Clemente?', a: 'Redfin reported a median of 34 days on market in September 2026, down from 71 days a year earlier.' },
    ],
  },

  {
    slug: 'cost-of-living-in-san-clemente',
    published: false,
    updated: '2026-10-27',
    category: 'Living Here',
    title: 'Cost of Living in San Clemente: Housing, Taxes and Monthly Costs',
    excerpt:
      'What it really costs to own a home in San Clemente: home prices, mortgage payments, how California property taxes work, Mello-Roos, HOA dues and insurance.',
    summary:
      "Housing is the biggest cost of living here. Beyond the mortgage, plan for property taxes based on your purchase price, and HOA dues or Mello-Roos in many communities.",
    image: '/photos/san-clemente/pier-sunset-palms.jpg',
    imageAlt: 'San Clemente Pier at sunset through the palms',
    body: [
      { type: 'h2', text: 'Home Prices' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, September 2026',
        items: [
          { value: '$1.80M', label: 'Median sale price', change: '+4.0% vs. last year', dir: 'up' },
          { value: '$815', label: 'Median price per sq ft', change: '+9.0% vs. last year', dir: 'up' },
        ],
        source: 'Source: Redfin, San Clemente housing market',
        href: REDFIN_SC,
      },
      { type: 'h2', text: 'Your Monthly Payment' },
      { type: 'p', text: "Try your own numbers. The calculator starts at San Clemente's median price and this week's average rate." },
      { type: 'calculator', price: 1799143, rate: 7.32, rate15: 6.68, source: 'Freddie Mac weekly average, October 22, 2026' },
      { type: 'h2', text: 'Property Taxes' },
      {
        type: 'steps',
        items: [
          { title: 'Reassessed when you buy', text: 'California reassesses a home to current market value when it changes ownership, so your taxes are based on your purchase price, not the seller\'s.' },
          { title: 'Capped at 1%', text: 'Proposition 13 caps the base property tax at 1% of taxable value. Voter-approved charges and special assessments are added on top.' },
          { title: 'Up to 2% a year', text: 'After you buy, your assessed value can generally rise by no more than 2% a year.' },
          { title: 'Supplemental bill', text: 'Expect a one-time supplemental tax bill after you buy, which covers the difference between the old and new assessed value.' },
          { title: "Homeowners' exemption", text: 'If it\'s your main home, file for the $7,000 reduction in taxable value.' },
        ],
      },
      { type: 'source', text: 'Source: California State Board of Equalization, Publication 29', href: BOE },
      { type: 'h2', text: 'Other Costs to Know' },
      {
        type: 'takeaways',
        items: [
          { who: 'buyers', title: 'Mello-Roos and HOA dues', text: 'Many newer and planned communities, including parts of Talega and Forster Ranch, have HOA dues, and some carry Mello-Roos special taxes. Amounts vary by community, so always check the actual tax bill and HOA documents for a specific home.' },
          { who: 'buyers', title: 'Utilities and insurance', text: 'SDG&E provides electricity in San Clemente. Get homeowners insurance quotes early in your search, especially for homes near open space or hillsides.' },
        ],
      },
      { type: 'callout', title: "Jacob's take", text: 'Two homes at the same price can have very different monthly costs. I always pull the tax bill and HOA details before you write an offer.' },
    ],
    links: [
      { href: '/guides/buying-a-home-in-san-clemente', label: "Buyer's guide" },
      { href: '/oc-relocation-guide', label: 'Orange County relocation guide' },
    ],
    faq: [
      { q: 'How much are property taxes in San Clemente?', a: 'Under Proposition 13, the base property tax is capped at 1% of a home\'s assessed value, which is set at your purchase price. Voter-approved charges, special assessments and any Mello-Roos are added on top, so check the tax bill for a specific home.' },
      { q: 'Does San Clemente have Mello-Roos?', a: 'Some communities do, typically newer master-planned areas. It varies by property, so always review the actual property tax bill.' },
      { q: 'Who provides electricity in San Clemente?', a: 'San Diego Gas & Electric (SDG&E).' },
    ],
  },
];

const showDrafts = process.env.VERCEL_ENV === 'preview';

export function getGuides() {
  return guides.filter((g) => g.published || showDrafts);
}

export function getGuide(slug) {
  return getGuides().find((g) => g.slug === slug);
}
