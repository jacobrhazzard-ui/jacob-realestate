// Blog posts. Newest first is handled automatically (sorted by date).
// To add a post: copy one entry, give it a unique slug, and set published: true
// once Jacob has approved it. Unpublished posts never appear on the site.
//
// body blocks:
//   { type: 'h2', text: '...' }
//   { type: 'lede', text: '...' }   -> opening paragraph with a drop cap (use once, first)
//   { type: 'p', text: '...' }
//   { type: 'list', items: ['...', '...'] }
//   { type: 'source', text: 'Source: ...', href: 'https://...' }
//   { type: 'spotlight', neighborhood: 'talega', text: '...', jacobsTake: '...', hideImage }  -> card built from the guide
//   { type: 'photo', src, alt, caption, credit, href }   -> a local San Clemente photo (free to use or Jacob's own)
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
    slug: 'san-clemente-market-update-november-23-2026',
    published: true,
    date: '2026-11-23',
    category: 'Market Update',
    title: 'Mortgage Rates Jump to 7.28%, Ending a Four-Week Slide, as San Clemente Homes Keep Selling in 13 Days',
    excerpt:
      "Rates turned back up last week, national contract signings slipped, and San Clemente's October sales still moved fast. Plus a closer look at Sea Summit and Santa's Village by the Sea downtown.",
    summary:
      'The 30-year average rose to 7.28% from 7.11%, according to Freddie Mac, ending four straight weekly declines. Nationally, pending home sales fell 4.7% in October, according to NAR. In San Clemente, homes that closed in October sold in a median 13 days with a median price up 5.7% from a year ago, according to CRMLS.',
    neighborhoods: ['sea-summit'],
    image: '/photos/san-clemente/pier-lifeguard-tower.jpg',
    imageAlt: 'The lifeguard tower on the San Clemente Pier on a sunny day',
    body: [
      { type: 'lede', text: 'After four weeks of easing, mortgage rates turned back up last week. The average 30-year fixed rate rose to 7.28% from 7.11%, according to Freddie Mac, and the 15-year climbed to 6.66%.' },
      { type: 'p', text: "The daily numbers have started to cool off a bit since then: Mortgage News Daily's 30-year index was 7.33% on Friday, down from 7.45% on Thursday. Here in San Clemente, October's sales still tell a story of homes that move quickly when they're priced right." },
      { type: 'h2', text: 'Mortgage Rates' },
      { type: 'p', text: 'The 30-year average was 7.11% the week before and 6.26% a year ago. The 15-year fixed rose to 6.66% from 6.45%.' },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.28, prev: 7.11, yearAgo: 6.26 },
          { label: '15-year fixed', value: 6.66, prev: 6.45, yearAgo: 5.54 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, November 19, 2026',
        href: 'https://www.freddiemac.com/pmms',
      },
      { type: 'p', text: "The calculator below starts at $1,743,250, San Clemente's median sale price for October, according to CRMLS. Change it to any price you like." },
      { type: 'calculator', price: 1743250, rate: 7.28, rate15: 6.66, source: 'Freddie Mac weekly average, November 19, 2026' },
      { type: 'source', text: 'Daily rate: Mortgage News Daily 30-year fixed index, 7.33% on November 20, 2026', href: 'https://www.mortgagenewsdaily.com/mortgage-rates/30-year-fixed' },
      { type: 'h2', text: 'Last Month at a Glance' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, October 2026',
        items: [
          { value: '$1.74M', label: 'Median sale price', change: '+5.7% vs. October 2025 ($1.65M)', dir: 'up' },
          { value: '$775', label: 'Median price per sq ft', change: '+3.6% vs. last year ($747)', dir: 'up' },
          { value: '13', label: 'Median days on market', change: 'Down from 20 a year ago', dir: 'down' },
          { value: '46', label: 'Homes sold', change: 'Down from 49 a year ago', dir: 'down' },
          { value: '99.1%', label: 'Median sale-to-list', change: 'Up from 99.0% a year ago', dir: 'up' },
          { value: '$600K–$4.3M', label: 'Range of October sales', change: 'Lowest to highest closed price', dir: 'flat' },
        ],
        source: 'Source: CRMLS (California Regional MLS), closed residential sales in San Clemente, October 1–31, 2026 vs. October 2025. Pulled November 17, 2026.',
      },
      { type: 'callout', title: 'Reading a small market', text: 'With about 50 sales a month in San Clemente, the local median can swing with the mix of homes that close. The trend over a few months tells a clearer story than any single month.' },
      { type: 'h2', text: 'San Clemente vs. the U.S.' },
      { type: 'p', text: "October is the latest month with numbers on both sides. San Clemente's median rose 5.7% from a year earlier, while the national median barely moved, up 0.4%, according to NAR." },
      {
        type: 'compare',
        rows: [
          { label: 'Median price', local: '$1,743,250', localNote: '+5.7% year over year', other: '$416,700', otherNote: '+0.4% year over year' },
          { label: 'Median days on market', local: '13 days', localNote: 'Down from 20', other: '35 days', otherNote: 'Up from 34' },
          { label: 'Sales', local: '46 homes sold', localNote: 'Down from 49', other: '3.75M annual pace', otherNote: '-5.5% from September, -8.8% year over year' },
        ],
        source: 'Sources: CRMLS closed residential sales, San Clemente, October 2026 vs. October 2025; National Association of REALTORS® existing-home sales, October 2026',
      },
      { type: 'p', text: "New this week: NAR's pending home sales index, which tracks contracts signed, fell 4.7% in October and 16.7% from a year earlier. NAR chief economist Lawrence Yun said October could mark the low point in contract signings for this cycle." },
      {
        type: 'snapshot',
        title: 'National market, October 2026',
        items: [
          { value: '63.0', label: 'Pending home sales index', change: '-4.7% vs. September, -16.7% vs. last year', dir: 'down' },
          { value: '45.8', label: 'West pending sales index', change: '-6.9% vs. September, -20.3% vs. last year', dir: 'down' },
          { value: '1.59M', label: 'Homes for sale', change: '+4.6% vs. last year', dir: 'up' },
          { value: '5.1', label: "Months' supply", change: 'Up from 4.7 in September', dir: 'up' },
          { value: '$624,300', label: 'West median price', change: 'Unchanged from last year', dir: 'flat' },
        ],
        source: 'Source: National Association of REALTORS®, October 2026 pending home sales (released November 18, 2026) and existing-home sales (released November 12, 2026)',
        href: 'https://www.nar.realtor/newsroom/pending-home-sales-decreased-4-7-percent-october-2026',
      },
      { type: 'p', text: 'Also last week: U.S. housing starts rose 9.9% in October to a 1.31 million annual pace, while building permits fell 7.4%, according to Census figures reported by the National Association of Home Builders. And minutes from the Federal Reserve’s October meeting, released November 18, showed the Fed held its target range at 3.75% to 4.00%, with two officials favoring a hike.' },
      { type: 'source', text: 'Sources: NAHB, November 18, 2026; Federal Reserve FOMC minutes, released November 18, 2026', href: 'https://www.nahb.org/news-and-economics/press-releases/2026/11/single-family-starts-post-modest-rebound-amid-challenging-conditions' },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'Homes that closed here in October sold in a median of 13 days at 99.1% of list price, according to CRMLS. With rates ticking up, pricing well from day one matters even more.' },
          { who: 'buyers', title: 'If you are buying', text: "A 17-basis-point jump in a week is a reminder that rates move both ways. Run your numbers in the calculator above, and ask your lender how a rate lock works if you're close to writing an offer." },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      {
        type: 'spotlight',
        neighborhood: 'sea-summit',
        hideImage: true,
        text: 'Sea Summit sits on the coastal bluffs of North San Clemente, on land once called Marblehead Coastal. Opened in 2015, it has 309 single-family homes in four neighborhoods, about four miles of trails down to the beach, and a 116-acre nature preserve, with the Outlets at San Clemente next door.',
        jacobsTake: "One of San Clemente's newest neighborhoods, right in the middle of town and close to everything, with ocean-view homes across from the Outlets.",
      },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-12-05',
        label: 'Coming up Saturday, December 5',
        title: "Santa's Village by the Sea",
        where: 'San Clemente Community Center, 100 N. Calle Seville, and Avenida Del Mar',
        cost: 'Free admission; activity wristbands sold separately',
        text: "The city's annual downtown holiday celebration, with a Santa procession, the tree lighting, visits with Santa, live entertainment, street-fair vendors and a gingerbread contest. Wristbands cover activities like Snow Hill, crafts, games and cookie decorating.",
        href: 'https://www.sanclemente.gov/504/Special-Event-Calendar',
      },
    ],
  },
  {
    slug: 'san-clemente-market-update-november-17-2026',
    published: true,
    date: '2026-11-17',
    category: 'Market Update',
    title: 'San Clemente vs. the U.S. in October: A $1.74M Median, Up 5.7%, as Rates Slip to 7.11%',
    excerpt:
      "Mortgage rates eased for a fourth straight week, NAR's October numbers are in for a side-by-side with San Clemente, a closer look at Marblehead, and the Doggie Dive at Ole Hanson Beach Club.",
    summary:
      'The 30-year average slipped to 7.11%, its fourth weekly decline. San Clemente homes that closed in October sold in a median 13 days with a median price up 5.7% from a year ago, according to CRMLS, while national sales fell to a 3.75 million pace, according to NAR.',
    neighborhoods: ['marblehead'],
    image: 'https://images.unsplash.com/photo-1579127499232-a9ea42e7ff6c',
    imageAlt: 'The San Clemente Pier and waves at sunset',
    body: [
      { type: 'lede', text: 'Borrowing got a little cheaper again last week. The average 30-year fixed mortgage rate slipped to 7.11%, down for the fourth week in a row, according to Freddie Mac.' },
      { type: 'p', text: "And with the National Association of REALTORS® out with its October report, we can finally line San Clemente up against the country for the same month. Here, homes that closed in October sold in a median of 13 days, according to CRMLS, the regional MLS where local agents list and report sales. Nationally, it was 35." },
      { type: 'h2', text: 'Mortgage Rates' },
      { type: 'p', text: 'The 30-year average was 7.18% the week before and 6.24% a year ago. The 15-year fixed fell to 6.45%, from 6.57%.' },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.11, prev: 7.18, yearAgo: 6.24 },
          { label: '15-year fixed', value: 6.45, prev: 6.57, yearAgo: 5.49 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, November 12, 2026',
        href: 'https://www.freddiemac.com/pmms',
      },
      { type: 'calculator', price: 1743250, rate: 7.11, rate15: 6.45, source: 'Freddie Mac weekly average, November 12, 2026' },
      { type: 'h2', text: 'San Clemente Snapshot' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, October 2026',
        items: [
          { value: '$1.74M', label: 'Median sale price', change: '+5.7% vs. October 2025 ($1.65M)', dir: 'up' },
          { value: '$775', label: 'Median price per sq ft', change: '+3.6% vs. last year ($747)', dir: 'up' },
          { value: '13', label: 'Median days on market', change: 'Down from 20 a year ago', dir: 'down' },
          { value: '46', label: 'Homes sold', change: 'Down from 49 a year ago', dir: 'down' },
          { value: '99.1%', label: 'Median sale-to-list', change: 'Up from 99.0% a year ago', dir: 'up' },
          { value: '$600K–$4.3M', label: 'Range of October sales', change: 'Lowest to highest closed price', dir: 'flat' },
        ],
        source: 'Source: CRMLS (California Regional MLS), closed residential sales in San Clemente, October 1–31, 2026 vs. October 2025. Pulled November 17, 2026.',
      },
      { type: 'h2', text: 'San Clemente vs. the U.S.' },
      { type: 'p', text: "NAR's October report, released November 12, showed national sales down 5.5% from September, while the national median price held close to last year's, up 0.4%. San Clemente's median rose faster, up 5.7%. With about 50 sales a month here, the local median can swing with the mix of homes that close, so the trend over a few months tells the clearer story." },
      {
        type: 'compare',
        rows: [
          { label: 'Median price', local: '$1,743,250', localNote: '+5.7% year over year', other: '$416,700', otherNote: '+0.4% year over year' },
          { label: 'Median days on market', local: '13 days', localNote: 'Down from 20', other: '35 days', otherNote: 'Up from 34' },
          { label: 'Sales', local: '46 homes sold', localNote: 'Down from 49', other: '3.75M annual pace', otherNote: '-5.5% from September, -8.8% year over year' },
        ],
        source: 'Sources: CRMLS closed residential sales, San Clemente, October 2026 vs. October 2025; National Association of REALTORS® existing-home sales, October 2026',
      },
      {
        type: 'snapshot',
        title: 'National market, October 2026',
        items: [
          { value: '1.59M', label: 'Homes for sale', change: '+4.6% vs. last year', dir: 'up' },
          { value: '5.1', label: "Months' supply", change: 'Up from 4.7 in September', dir: 'up' },
          { value: '29%', label: 'First-time buyers', change: 'Down from 32% a year ago', dir: 'down' },
          { value: '$624,300', label: 'West median price', change: 'Unchanged from last year', dir: 'flat' },
          { value: '650K', label: 'West sales pace', change: '-14.5% vs. last year', dir: 'down' },
        ],
        source: 'Source: National Association of REALTORS®, October 2026 existing-home sales (released November 12, 2026)',
        href: 'https://www.nar.realtor/newsroom/existing-home-sales-decreased-5-5-percent-october-nar-report',
      },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'Homes that closed here in October sold in a median of 13 days at 99.1% of list price, according to CRMLS, even as sales slowed nationally. A home that is priced right from day one still tends to move quickly.' },
          { who: 'buyers', title: 'If you are buying', text: 'Four straight weeks of easing rates adds up. Try the calculator above with your own numbers, and a quick conversation with your lender can show what the lower rate means for you.' },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      {
        type: 'spotlight',
        neighborhood: 'marblehead',
        hideImage: true,
        text: 'Marblehead starts just east of the 5 in North San Clemente and climbs into the hills, about a couple of miles from the beach. Most homes were built in the late 1980s and early 1990s in a handful of mostly gated enclaves, and the elevation gives many of them wide ocean views.',
        jacobsTake: "Marblehead has some of the cleanest, best-kept homes in town, and the front-gate staff are some of the friendliest people you'll meet. You're also close to the freeway and downtown.",
      },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-11-21',
        label: 'Coming up Saturday',
        title: 'Doggie Dive at Ole Hanson Beach Club',
        time: '9 AM to noon',
        where: 'Ole Hanson Beach Club, 105 W. Avenida Pico',
        cost: '$7 per dog pre-registered, $10 at the door for residents; humans free (non-resident fees apply)',
        text: "The city's annual dogs-only swim before the pool closes for winter maintenance, with tennis balls in the pool, a doggie pie-eating contest on the front lawn at 11:30, and goodie bags while supplies last. Bring proof of a current dog license and rabies vaccination; pre-registration is encouraged.",
        href: 'https://www.sanclemente.gov/Calendar.aspx?EID=1382',
      },
    ],
  },
  {
    slug: 'san-clemente-market-update-november-9-2026',
    published: true,
    date: '2026-11-09',
    category: 'Market Update',
    title: 'October in San Clemente: A $1.74M Median, 13 Days on Market and a 7.18% Rate',
    excerpt:
      "What's happening around town this week, October's local numbers, what a 7.18% rate means for a payment in San Clemente, and a closer look at Rancho San Clemente.",
    summary:
      'The 30-year average dipped to 7.18%, and San Clemente homes that closed in October sold in a median 13 days at 99.1% of list price, with the median sale price up 5.7% from a year ago, according to CRMLS.',
    neighborhoods: ['rancho-san-clemente'],
    image: 'https://images.unsplash.com/photo-1619062416814-bf0094fa1fb7',
    imageAlt: 'Looking north from the San Clemente Pier at the beach, the waves and the coastal rail line',
    body: [
      { type: 'lede', text: 'The holiday season gets going in San Clemente this Saturday with the tree lighting at the Outlets. On the money side, borrowing got a little cheaper again: the average 30-year fixed mortgage rate came in at 7.18% last Thursday, down for the third week in a row, according to Freddie Mac.' },
      { type: 'p', text: 'Here in San Clemente, homes kept moving at a steady clip. Homes that closed in October sold in a median of 13 days, down from 20 a year earlier, according to CRMLS, the regional MLS where local agents list and report sales.' },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-11-14',
        label: 'Coming up Saturday',
        title: 'Tree Lighting Celebration at the Outlets',
        time: '5 PM',
        where: 'Santa Clemente Village, Outlets at San Clemente, 101 W Avenida Vista Hermosa',
        text: "The Outlets kick off the holiday season with an evening hosted by Josh Randall, a special performance by Orange County School of the Arts' Montage!, the Full Circle Boys headlining, and Santa on hand to help light the tree.",
        href: 'https://www.outletsatsanclemente.com/event/32946-tree-lighting-celebration',
      },
      {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1622572090660-e2ac6db0bcbf',
        alt: 'A surfer walking through the T Street beach tunnel in San Clemente',
        caption: 'The T Street tunnel, one of the classic ways down to the sand.',
        credit: 'Photo: Reed Naliboff on Unsplash',
        href: 'https://unsplash.com/photos/man-in-black-shirt-walking-on-brown-concrete-bridge-during-daytime-yx9YSpX7JIE',
      },
      { type: 'h2', text: 'Mortgage Rates' },
      { type: 'p', text: 'The 30-year average was 7.24% the week before and 6.22% a year ago. The 15-year fixed came in at 6.57%.' },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.18, prev: 7.24, yearAgo: 6.22 },
          { label: '15-year fixed', value: 6.57, prev: 6.60, yearAgo: 5.50 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, November 5, 2026',
        href: 'https://www.freddiemac.com/pmms',
      },
      { type: 'calculator', price: 1743250, rate: 7.18, rate15: 6.57, source: 'Freddie Mac weekly average, November 5, 2026' },
      { type: 'h2', text: 'San Clemente Snapshot' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, October 2026',
        items: [
          { value: '$1.74M', label: 'Median sale price', change: '+5.7% vs. October 2025 ($1.65M)', dir: 'up' },
          { value: '$775', label: 'Median price per sq ft', change: '+3.6% vs. last year ($747)', dir: 'up' },
          { value: '13', label: 'Median days on market', change: 'Down from 20 a year ago', dir: 'down' },
          { value: '46', label: 'Homes sold', change: 'Down from 49 a year ago', dir: 'down' },
          { value: '99.1%', label: 'Median sale-to-list', change: 'Up from 99.0% a year ago', dir: 'up' },
          { value: '$600K–$4.3M', label: 'Range of October sales', change: 'Lowest to highest closed price', dir: 'flat' },
        ],
        source: 'Source: CRMLS (California Regional MLS), closed residential sales in San Clemente, October 1–31, 2026 vs. October 2025. Pulled November 9, 2026.',
      },
      { type: 'h2', text: 'San Clemente vs. the U.S.' },
      { type: 'p', text: "NAR's October national numbers come out on November 12, so September is still the latest side-by-side. With about 50 sales a month in San Clemente, the local median can swing with the mix of homes that close, so the trend over a few months tells the clearer story." },
      {
        type: 'compare',
        rows: [
          { label: 'Median price', local: '$2,200,000', localNote: '+16.6% year over year', other: '$417,500', otherNote: '+1.3% year over year' },
          { label: 'Median days on market', local: '13 days', localNote: 'Down from 37', other: '33 days', otherNote: 'Same as a year ago' },
          { label: 'Sales', local: '55 homes sold', localNote: 'Down from 58', other: '3.99M annual pace', otherNote: '+1.5% from August, -2.2% year over year' },
        ],
        source: 'Sources: CRMLS closed residential sales, San Clemente, September 2026 vs. September 2025; National Association of REALTORS® existing-home sales, September 2026',
      },
      {
        type: 'snapshot',
        title: 'National market, September 2026',
        items: [
          { value: '1.60M', label: 'Homes for sale', change: '+4.6% vs. last year', dir: 'up' },
          { value: '4.8', label: "Months' supply", change: 'Unchanged from August', dir: 'flat' },
          { value: '31%', label: 'First-time buyers', change: 'Share of September sales', dir: 'flat' },
          { value: '$613,600', label: 'West median price', change: '-0.3% vs. last year', dir: 'down' },
          { value: '-7.3%', label: 'Pending home sales', change: 'September vs. August', dir: 'down' },
        ],
        source: 'Source: National Association of REALTORS®, September 2026 existing-home sales (released October 13, 2026) and pending home sales (released October 20, 2026)',
        href: 'https://www.nar.realtor/newsroom/existing-home-sales-increased-1-5-in-september-according-to-nar-report',
      },
      { type: 'callout', title: 'New from NAR this week', text: "NAR's 2026 Profile of Home Buyers and Sellers, released November 5, found first-time buyers made up 22% of purchases over the past year, up from a record-low 21%. The typical first-time buyer was 40 and put 9% down, and sellers had stayed in their homes a record 12 years before selling." },
      { type: 'source', text: 'Source: National Association of REALTORS®, 2026 Profile of Home Buyers and Sellers, November 5, 2026', href: 'https://www.nar.realtor/newsroom/first-time-home-buyer-share-inches-up-to-22-median-age-remains-at-record-high-of-40' },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'Homes that closed here in October sold in a median of 13 days at 99.1% of list price, according to CRMLS. Thoughtful pricing from the start still goes a long way.' },
          { who: 'buyers', title: 'If you are buying', text: 'Three weeks of easing rates trims the monthly payment a little at a time. Try the calculator above with your own numbers, and a quick check-in with your lender can show where you stand.' },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      {
        type: 'spotlight',
        neighborhood: 'rancho-san-clemente',
        hideImage: true,
        text: 'Rancho San Clemente is a hillside district overlooking the Pier Bowl, with eleven single-family tracts and three condo communities, mostly in Spanish and Mediterranean styles. Many homes look out over mountains, canyons and the Pacific, and on clear days Catalina Island.',
      },
    ],
  },
  {
    slug: 'san-clemente-market-update-november-2026',
    published: true,
    date: '2026-11-02',
    category: 'Market Update',
    title: 'Rates Ease to 7.24% as San Clemente Homes Sell in a Median 15 Days',
    excerpt:
      "The 30-year average fell for a second straight week. Here's what that means for a payment in San Clemente, how the city compares with the country, and a closer look at Forster Ranch.",
    summary:
      'Rates dipped to their lowest level this month, and San Clemente homes that closed in October sold in a median 15 days at 99.3% of list price, according to CRMLS.',
    neighborhoods: ['forster-ranch'],
    image: 'https://images.unsplash.com/photo-1693160206330-b13007e04dd5',
    imageAlt: 'Palm trees along the beach with the San Clemente Pier in the distance',
    body: [
      { type: 'lede', text: 'For the second week in a row, borrowing got a little cheaper. The average 30-year fixed mortgage rate slipped to 7.24% last Thursday, its lowest level this month, according to Freddie Mac.' },
      { type: 'p', text: "The move is small, but at San Clemente prices it shows up in the monthly payment. And the local market hasn't been waiting on rates. In October, homes here closed in a median of 15 days, down from 20 a year earlier, according to CRMLS, the regional MLS where local agents list and report sales." },
      { type: 'h2', text: 'Mortgage Rates' },
      { type: 'p', text: 'The 30-year average was 7.32% the week before and 6.17% a year ago, so rates are still about a point higher than last fall. The 15-year fixed fell to 6.60%.' },
      {
        type: 'rates',
        items: [
          { label: '30-year fixed', value: 7.24, prev: 7.32, yearAgo: 6.17 },
          { label: '15-year fixed', value: 6.60, prev: 6.68, yearAgo: 5.41 },
        ],
        source: 'Source: Freddie Mac Primary Mortgage Market Survey, October 29, 2026',
        href: 'https://www.globenewswire.com/news-release/2026/10/29/3391637/0/en/mortgage-rates-decline-further-to-7-24.html',
      },
      { type: 'calculator', price: 1749000, rate: 7.24, rate15: 6.60, source: 'Freddie Mac weekly average, October 29, 2026' },
      { type: 'h2', text: 'San Clemente Snapshot' },
      {
        type: 'snapshot',
        title: 'San Clemente, all home types, October 2026',
        items: [
          { value: '$1.75M', label: 'Median sale price', change: '+6.0% vs. October 2025 ($1.65M)', dir: 'up' },
          { value: '$773', label: 'Median price per sq ft', change: '+3.4% vs. last year ($747)', dir: 'up' },
          { value: '15', label: 'Median days on market', change: 'Down from 20 a year ago', dir: 'down' },
          { value: '45', label: 'Homes sold', change: 'Down from 49 a year ago', dir: 'down' },
          { value: '99.3%', label: 'Median sale-to-list', change: 'Up from 99.0% a year ago', dir: 'up' },
          { value: '$600K–$4.3M', label: 'Range of October sales', change: 'Lowest to highest closed price', dir: 'flat' },
        ],
        source: 'Source: CRMLS (California Regional MLS), closed residential sales in San Clemente, October 1–31, 2026 vs. October 2025. Pulled November 2, 2026; a few late-reported closings can still be added.',
      },
      { type: 'h2', text: 'San Clemente vs. the U.S.' },
      { type: 'p', text: "The October national numbers come out later this month, so here is September side by side. One early signal: NAR's pending home sales, which track contracts signed, fell 7.3% in September from August, and 9.2% in the West. With about 50 sales a month in San Clemente, the local median can swing with the mix of homes that close, so it's worth watching the trend over a few months." },
      {
        type: 'compare',
        rows: [
          { label: 'Median price', local: '$2,200,000', localNote: '+16.6% year over year', other: '$417,500', otherNote: '+1.3% year over year' },
          { label: 'Median days on market', local: '13 days', localNote: 'Down from 37', other: '33 days', otherNote: 'Same as a year ago' },
          { label: 'Sales', local: '55 homes sold', localNote: 'Down from 58', other: '3.99M annual pace', otherNote: '+1.5% from August, -2.2% year over year' },
        ],
        source: 'Sources: CRMLS closed residential sales, San Clemente, September 2026 vs. September 2025; National Association of REALTORS® existing-home sales, September 2026',
      },
      {
        type: 'snapshot',
        title: 'National market, September 2026',
        items: [
          { value: '1.60M', label: 'Homes for sale', change: '+4.6% vs. last year', dir: 'up' },
          { value: '4.8', label: "Months' supply", change: 'Unchanged from August', dir: 'flat' },
          { value: '31%', label: 'First-time buyers', change: 'Share of sales', dir: 'flat' },
          { value: '$613,600', label: 'West median price', change: '-0.3% vs. last year', dir: 'down' },
          { value: '-7.3%', label: 'Pending home sales', change: 'September vs. August', dir: 'down' },
        ],
        source: 'Source: National Association of REALTORS®, September 2026 existing-home sales and pending home sales (released October 20, 2026)',
        href: 'https://www.nar.realtor/newsroom/existing-home-sales-increased-1-5-in-september-according-to-nar-report',
      },
      { type: 'h2', text: 'What It Means' },
      {
        type: 'takeaways',
        items: [
          { who: 'sellers', title: 'If you are selling', text: 'Homes that closed here in October sold in a median of 15 days at 99.3% of list price, according to CRMLS. A well-priced home still tends to move without much waiting.' },
          { who: 'buyers', title: 'If you are buying', text: "Two weeks of easing rates trims the monthly payment a little. Try the calculator above with your own numbers, and it's a good time to check in with your lender if you've been waiting." },
        ],
      },
      { type: 'h2', text: 'Neighborhood Spotlight' },
      {
        type: 'spotlight',
        neighborhood: 'forster-ranch',
        text: 'Forster Ranch spreads across the hills about two miles from the beach, with about twenty single-family tracts and five condo communities built from the early 1970s on. Many homes have views, and the 3.2-mile Forster Ridgeline Trail looks out over the ocean and city lights.',
        jacobsTake: "I grew up in Forster Ranch starting in 2001, and some of my best memories are from these streets and parks. It's a neighborhood I know inside and out.",
      },
      { type: 'h2', text: 'Around Town' },
      {
        type: 'event',
        date: '2026-11-07',
        label: 'Coming up Saturday',
        title: 'San Clemente Village Art Faire',
        time: '10 AM to 4 PM',
        where: 'San Clemente Library and Community Center lawns, 242 Avenida Del Mar',
        text: 'A long-running juried art faire where Southern California artisans sell their own handmade work, from photography and fine art to jewelry, ceramics, woodwork, glass and home decor. It happens on the first Saturday of most months, right in the heart of downtown.',
        href: 'https://scdba.org/Village-Art-Faire',
      },
    ],
  },
  {
    slug: 'san-clemente-market-update-october-2026',
    published: true,
    date: '2026-10-27',
    category: 'Market Update',
    title: 'San Clemente Market Update: Rates Ease to 7.32%, Price per Foot Up 9% + a Pier Bowl Spotlight',
    excerpt:
      'Mortgage rates slipped for the first time this month, San Clemente price per square foot is up 9% from last year, how we compare with the national market, and a closer look at the Pier Bowl.',
    summary:
      'Rates dipped this week, San Clemente homes are selling in half the time they did a year ago, and price per square foot is climbing faster than the median price.',
    neighborhoods: ['pier-bowl'],
    image: 'https://images.unsplash.com/photo-1732150213654-13a4346525e8',
    imageAlt: 'Spanish-style hotels and shops on a palm-lined street in San Clemente',
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
    image: 'https://images.unsplash.com/photo-1612523910555-fd45d6f9e00f',
    imageAlt: 'Evening stroll on the San Clemente Pier',
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
