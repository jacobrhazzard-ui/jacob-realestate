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
    // At-a-glance stats strip (all from the sources listed below)
    atAGlance: [
      { value: '1999', label: 'Construction began' },
      { value: '3,510', label: 'Acres in the plan area' },
      { value: '~2,000', label: 'Acres of open space' },
      { value: '19+', label: 'Miles of trails' },
      { value: '30+', label: 'Smaller neighborhoods' },
      { value: '~3 mi', label: 'To the coast' },
    ],
    // Map: OpenStreetMap embed (free, no API key). bbox = [west, south, east, north]
    map: { bbox: [-117.625, 33.445, -117.55, 33.485], marker: [33.4639, -117.5889] },
    // Photos: add Jacob's own photos here, e.g. { src: '/neighborhoods/talega-trails.jpg', alt: '...', caption: '...' }
    gallery: [],
    whyPeopleMove: [
      { icon: 'home', title: 'Newer construction', text: 'Homes built from 1999 on, mostly Spanish and Mediterranean in style' },
      { icon: 'trees', title: 'Trails & open space', text: 'About 2,000 acres of open space and more than 19 miles of trails' },
      { icon: 'pool', title: 'Swim & Athletic Club', text: 'Two pools, tennis courts, sand volleyball, and a roller hockey rink' },
      { icon: 'flag', title: 'Talega Golf Club', text: 'A public 18-hole course designed by Fred Couples that opened in 2001' },
      { icon: 'cart', title: 'Errands nearby', text: 'Talega Village Center, with a supermarket, restaurants, and services' },
      { icon: 'layers', title: 'Range of home sizes', text: 'From townhomes and 3-bedroom homes to 7-bedroom estates' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family homes', text: 'Mostly tract homes, from 3-bedroom homes up to 7-bedroom estates; larger lots tend to command higher prices' },
      { icon: 'building', title: 'Condos & townhomes', text: 'Mostly two- and three-story attached homes; single-level options are limited to Carmel, Santalana, Verano, and a few units in Seagarden' },
      { icon: 'gate', title: 'Talega Gallery (55+)', text: 'A gated 55+ community with four sub-communities, three with detached homes and one with single-level attached townhomes' },
    ],
    market: {
      cards: [
        { value: '$1,983,810', label: 'Median sale price', detail: '3 months ending June 2026, +13.4% YoY', source: 'Redfin' },
        { value: '$1,974,500', label: 'Median list price', detail: '26 active listings, Oct 17, 2026', source: 'Ruby Home' },
        { value: '$733', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 17, 2026', source: 'Ruby Home' },
      ],
      // Listed price range on Oct 17, 2026 (Ruby Home), drawn as a bar with the median marked
      range: { low: 839888, high: 5875000, median: 1974500, label: 'Listed prices, Oct 17, 2026 (Ruby Home)' },
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

  {
    slug: 'pier-bowl',
    published: false,
    name: 'Pier Bowl',
    updated: '2026-10-23',
    image: '/ameno1.jpeg',
    imageAlt: 'San Clemente coastal home',
    tagline: 'Walk to the pier, the beach trail, and the train, in the heart of the original "Spanish Village by the Sea."',
    summary:
      'The Pier Bowl surrounds the San Clemente Pier below downtown, with walkable access to the beach, the San Clemente Coastal Trail, the pier train stop, and Casa Romantica.',
    intro:
      "The Pier Bowl wraps around the San Clemente Pier, just below downtown in the 92672 ZIP code. This is where the city began: founder Ole Hanson bought the land in 1925 and required Spanish Colonial design in every deed, which is why white stucco and red tile roofs still define the area. Hanson's own villa, Casa Romantica, was completed in 1928 on the bluff facing the pier.",
    atAGlance: [
      { value: '~1,296 ft', label: 'Length of the pier' },
      { value: '1928', label: 'Casa Romantica built' },
      { value: '1925', label: 'Ole Hanson buys the land' },
      { value: 'Train', label: 'Stop at the pier' },
      { value: '92672', label: 'ZIP code' },
      { value: 'Coastal', label: 'Trail along the sand' },
    ],
    map: { bbox: [-117.632, 33.412, -117.607, 33.428], marker: [33.4196, -117.6197] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'beach', title: 'The pier at your door', text: 'A roughly 1,296-foot pier known for fishing, with a restaurant and a bait and tackle shop' },
      { icon: 'train', title: 'Train at the pier', text: 'The San Clemente Pier station (615 Avenida Victoria) is a stop on the Pacific Surfliner' },
      { icon: 'trees', title: 'San Clemente Coastal Trail', text: 'The multi-use beach trail runs from North Beach to Calafia Beach for walking, running, and biking' },
      { icon: 'landmark', title: 'Casa Romantica', text: "Ole Hanson's 1928 villa on the bluff, now the city's cultural and historical center" },
      { icon: 'home', title: 'Spanish Colonial roots', text: 'Hanson required Spanish Colonial design in every deed, the source of the white stucco and red tile look' },
      { icon: 'bag', title: 'Close to Avenida Del Mar', text: "Downtown's main street, home to the San Clemente Fiesta each August" },
    ],
    homeTypes: [
      { icon: 'building', title: 'Condos & attached homes', text: 'The three homes listed for sale on October 23, 2026 were in multi-unit complexes: Arenoso Bahia, Sunset Shores, and Villa Granada' },
      { icon: 'home', title: 'Spanish Colonial character', text: 'The area dates to the city’s founding, when deeds required Spanish Colonial design' },
    ],
    market: {
      cards: [
        { value: '$1,800,000', label: 'Median list price', detail: '3 active listings, Oct 23, 2026', source: 'Ruby Home' },
        { value: '$1,104', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 23, 2026', source: 'Ruby Home' },
        { value: '3', label: 'Homes for sale', detail: 'Oct 23, 2026', source: 'Ruby Home' },
      ],
      range: { low: 1199990, high: 2500000, median: 1800000, label: 'Listed prices, Oct 23, 2026 (Ruby Home)' },
      figures: [
        'On October 23, 2026, listed prices ran from $1,199,990 for a 2-bed, 1,282 sq ft home at Villa Granada to $2,500,000 for a 2-bed, 1,902 sq ft home at Sunset Shores (Ruby Home)',
      ],
      note: 'With only a few homes for sale at a time, list prices here can swing a lot from month to month.',
    },
    costsToKnow: [
      'Condo and attached homes typically come with HOA dues; get the exact amount and what it covers for any specific home',
      'Check the property tax bill for any special assessments before you buy',
    ],
    schools:
      'The Pier Bowl is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Pacific Surfliner trains stop at the San Clemente Pier station, 615 Avenida Victoria',
      'The San Clemente Coastal Trail connects the pier area with North Beach and Calafia Beach',
    ],
    localTip: null,
    faqs: [
      {
        q: 'What is the Pier Bowl in San Clemente?',
        a: 'The Pier Bowl is the neighborhood around the San Clemente Pier, just below downtown. It is walkable to the beach, the San Clemente Coastal Trail, Casa Romantica, and the pier train stop on the Pacific Surfliner.',
      },
      {
        q: 'How much do homes cost in the Pier Bowl?',
        a: 'As of October 23, 2026, Ruby Home reported 3 homes for sale with a median list price of $1,800,000, ranging from $1,199,990 to $2,500,000.',
      },
      {
        q: 'Can you take the train from the Pier Bowl?',
        a: 'Yes. The San Clemente Pier station at 615 Avenida Victoria is a stop on the Pacific Surfliner.',
      },
    ],
    sources: [
      { label: 'Ruby Home: Pier Bowl', href: 'https://www.rubyhome.com/san-clemente-ca/pier-bowl/' },
      { label: 'San Clemente Times: History of San Clemente', href: 'https://www.sanclementetimes.com/history-of-san-clemente/' },
      { label: 'Great American Stations: San Clemente Pier (SNP)', href: 'https://www.greatamericanstations.com/?p=7564' },
      { label: 'Metrolink: North Beach & the Coastal Trail', href: 'https://metrolinktrains.com/explore/orange-county/north-beach/' },
    ],
  },

  {
    slug: 'forster-ranch',
    published: false,
    name: 'Forster Ranch',
    updated: '2026-10-23',
    image: '/cordoba3.jpeg',
    imageAlt: 'Spanish-style home in San Clemente',
    tagline: 'Hillside homes with ocean and city-light views, a ridgeline trail, and no Mello-Roos.',
    summary:
      'Forster Ranch is a hillside San Clemente neighborhood of about twenty single-family tracts and five condo communities, built from the early 1970s on, with views, the Forster Ridgeline Trail, and no Mello-Roos bonds.',
    intro:
      "Forster Ranch spreads across the rolling hills of San Clemente, about two miles from the beach. The first homes went up in the early 1970s, with major expansions in the mid-1980s and early 2000s. Today it's made up of about twenty single-family tracts and five condo communities, a few of them gated, and many homes have panoramic views thanks to the hills.",
    atAGlance: [
      { value: '1970s', label: 'First homes built' },
      { value: '~20', label: 'Single-family tracts' },
      { value: '5', label: 'Condo communities' },
      { value: '3.2 mi', label: 'Ridgeline Trail' },
      { value: '~2 mi', label: 'To the beach' },
      { value: 'None', label: 'Mello-Roos bonds' },
    ],
    map: { bbox: [-117.645, 33.452, -117.6, 33.48], marker: [33.4664, -117.6238] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'mountain', title: 'Views', text: 'The rolling hills give many homes panoramic views, and some sit tucked away from central San Clemente' },
      { icon: 'trees', title: 'Ridgeline Trail', text: 'A 3.2-mile trail from the Camino Vera Cruz entrance with ocean and city-light views' },
      { icon: 'park', title: '“Pirate Park”', text: 'Forster Ranch Community Park sits next to Truman Benedict Elementary and Bernice Ayer Middle School' },
      { icon: 'pool', title: 'Community amenities', text: 'HOA pools and spas, tennis courts, clubhouses, walking paths, and small parks' },
      { icon: 'flag', title: 'Golf nearby', text: 'Shorecliffs Golf Club is a short distance from the western communities' },
      { icon: 'receipt', title: 'No Mello-Roos', text: 'Ruby Home reports no Mello-Roos bonds and no homes on leased land' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family homes', text: 'Most of the housing; strong Spanish influence with brick and stonework, red tile roofs, and lush landscaping' },
      { icon: 'building', title: 'Condos & townhomes', text: 'Five condo communities; Del Cabo has some of the largest townhomes in San Clemente' },
      { icon: 'gate', title: 'Gated enclaves', text: 'A few of the communities are gated' },
    ],
    market: {
      cards: [
        { value: '$1,819,367', label: 'Median sale price', detail: '3 months ending June 2026, +4.0% YoY', source: 'Redfin' },
        { value: '$2,074,000', label: 'Median list price', detail: '8 active listings, Oct 17, 2026', source: 'Ruby Home' },
        { value: '$829', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 17, 2026', source: 'Ruby Home' },
      ],
      range: { low: 1595000, high: 7900000, median: 2074000, label: 'Listed prices, Oct 17, 2026 (Ruby Home)' },
      figures: [
        'Median sale price: $1,819,367 over the three months ending June 2026, up 4.0% from a year earlier (Redfin)',
        'Homes sold in June 2026: 33, up from 29 a year earlier (Redfin)',
        'Active listings on October 17, 2026: 8, from $1,595,000 to $7,900,000 and 1,480 to 8,594 sq ft (Ruby Home)',
      ],
      note: 'Sale prices are what homes actually closed for; list prices are what sellers are currently asking. They come from different sources and periods.',
    },
    costsToKnow: [
      'Community HOAs maintain the grounds and common areas; dues vary by tract',
      'Ruby Home reports no Mello-Roos bonds in Forster Ranch; still confirm on the tax bill for any specific home',
    ],
    schools:
      'Forster Ranch is in Capistrano Unified School District. Depending on the address, elementary is Truman Benedict or Marblehead, middle school is Bernice Ayer or Shorecliffs, and high school is San Clemente High. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'About two miles from San Clemente’s beaches',
      'The Ridgeline Trail starts at the Camino Vera Cruz entrance',
    ],
    localTip: null,
    faqs: [
      {
        q: 'Does Forster Ranch have Mello-Roos?',
        a: 'Ruby Home reports that Forster Ranch has no Mello-Roos bonds and no homes on leased land. Confirm on the tax bill for any specific home.',
      },
      {
        q: 'How much do homes cost in Forster Ranch?',
        a: 'Redfin reported a median sale price of $1,819,367 for the three months ending June 2026. On October 17, 2026, Ruby Home reported 8 active listings with a median list price of $2,074,000.',
      },
      {
        q: 'What is there to do in Forster Ranch?',
        a: 'The 3.2-mile Ridgeline Trail, Forster Ranch Community Park ("Pirate Park"), HOA pools, tennis courts, and clubhouses, with Shorecliffs Golf Club nearby.',
      },
    ],
    sources: [
      { label: 'Redfin: Forster Ranch housing market', href: 'https://www.redfin.com/neighborhood/111203/CA/San-Clemente/Forster-Ranch/housing-market' },
      { label: 'Ruby Home: Forster Ranch', href: 'https://www.rubyhome.com/san-clemente-ca/forster-ranch/' },
    ],
  },

  {
    slug: 'rancho-san-clemente',
    published: false,
    name: 'Rancho San Clemente',
    updated: '2026-10-23',
    image: '/cordoba5.jpeg',
    imageAlt: 'Spanish-style home in San Clemente',
    tagline: 'Hillside tracts with canyon and ocean views, a ridgeline trail, and big parks close by.',
    summary:
      'Rancho San Clemente is a hillside district of eleven single-family tracts and three condo communities, with views, the Rancho San Clemente Ridgeline Trail, a private tennis club, and nearby sports parks.',
    intro:
      'Rancho San Clemente is a hillside district overlooking the Pier Bowl, with subdivisions set on gradual rises. Many homes and condos look out over mountains, canyons, the Pacific, and on clear days Catalina Island. It includes eleven single-family tracts (two of them gated, Mandalay and Pacific Crest) and three large condo communities, mostly in Spanish and Mediterranean styles. Most tracts connect by way of Calle Del Cerro, which helps keep through-traffic down.',
    atAGlance: [
      { value: '11', label: 'Single-family tracts' },
      { value: '2', label: 'Gated tracts' },
      { value: '3', label: 'Condo communities' },
      { value: '3.5 mi', label: 'Ridgeline Trail' },
      { value: '19', label: 'Lighted tennis courts at RSC' },
      { value: '45 ac', label: 'Hermosa Sports Park' },
    ],
    map: { bbox: [-117.62, 33.43, -117.585, 33.456], marker: [33.4414, -117.6002] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'mountain', title: 'Views', text: 'Mountains, canyons, the ocean, and Catalina Island on clear days' },
      { icon: 'trees', title: 'Ridgeline Trail', text: 'A 3.5-mile hiking and biking path starting at the top of Avenida Salvador' },
      { icon: 'tennis', title: 'RSC Tennis & Fitness', text: 'A private club with 19 lighted tennis courts, a fitness center, and a pool' },
      { icon: 'park', title: 'Parks', text: 'Rancho San Clemente Park, Richard T. Steed Memorial Park, and the free Ralphs Skate Court' },
      { icon: 'pool', title: 'Hermosa Sports Park', text: 'A 45-acre park nearby with ball fields, soccer fields, and an aquatic complex' },
      { icon: 'bag', title: 'Shopping close by', text: 'Centers off Avenida Pico near Calle Del Cerro and Camino Vera Cruz' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family homes', text: 'Eleven tracts, mostly Spanish and Mediterranean in style' },
      { icon: 'gate', title: 'Gated tracts', text: 'Mandalay and Pacific Crest are gated' },
      { icon: 'building', title: 'Condos', text: 'Three large condo communities with pools and clubhouses' },
    ],
    market: {
      cards: [
        { value: '$1,157,500', label: 'Median list price', detail: '8 active listings, Oct 19, 2026', source: 'Ruby Home' },
        { value: '$733', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 19, 2026', source: 'Ruby Home' },
        { value: '8', label: 'Homes for sale', detail: 'Oct 19, 2026', source: 'Ruby Home' },
      ],
      range: { low: 495000, high: 1995000, median: 1157500, label: 'Listed prices, Oct 19, 2026 (Ruby Home)' },
      figures: [
        'On October 19, 2026, listed prices ran from $495,000 for a 1-bed, 608 sq ft condo to $1,995,000 for a 3-bed, 2,483 sq ft home (Ruby Home)',
      ],
      note: 'The mix of condos and single-family homes for sale on any given day moves the median a lot.',
    },
    costsToKnow: [
      'HOA dues and any special taxes vary by tract and condo community; check the HOA documents and tax bill for any specific home',
    ],
    schools:
      'Rancho San Clemente is in Capistrano Unified School District. Schools serving the area include Clarence Lobo Elementary, Vista Del Mar Elementary, Bernice Ayer Middle, Vista Del Mar Middle, and San Clemente High. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Most tracts connect via Calle Del Cerro',
      'Shopping off Avenida Pico near Calle Del Cerro and Camino Vera Cruz, with Talega’s shops and parks nearby',
    ],
    localTip: null,
    faqs: [
      {
        q: 'How much do homes cost in Rancho San Clemente?',
        a: 'On October 19, 2026, Ruby Home reported 8 homes for sale with a median list price of $1,157,500, from $495,000 for a 1-bed condo to $1,995,000 for a 3-bed home.',
      },
      {
        q: 'Are there gated communities in Rancho San Clemente?',
        a: 'Yes. Of the eleven single-family tracts, Mandalay and Pacific Crest are gated.',
      },
      {
        q: 'What is there to do in Rancho San Clemente?',
        a: 'The 3.5-mile Rancho San Clemente Ridgeline Trail, RSC Tennis & Fitness Club, Rancho San Clemente Park, Steed Memorial Park, the Ralphs Skate Court, and the 45-acre Hermosa Sports Park nearby.',
      },
    ],
    sources: [{ label: 'Ruby Home: Rancho San Clemente', href: 'https://www.rubyhome.com/san-clemente-ca/rancho-san-clemente/' }],
  },

  {
    slug: 'marblehead',
    published: false,
    name: 'Marblehead',
    updated: '2026-10-23',
    image: '/cordoba6.jpeg',
    imageAlt: 'Spanish-style home in San Clemente',
    tagline: 'Mostly gated hillside enclaves with ocean views, from condos to custom estates.',
    summary:
      'Marblehead is a North San Clemente neighborhood just east of I-5, built mostly in the late 1980s and early 1990s, with mostly gated enclaves, ocean views, Marblehead Park, and trail access.',
    intro:
      'Marblehead starts just east of the 5 in North San Clemente and climbs into the hills, about a couple of miles from the beach. Most homes were built in the late 1980s and early 1990s, in a handful of enclaves: Crest, Highland Light Estates, Highland Light Village, New Providence, Signal Point, and Summit at Highland Light. Most are gated, and the elevation gives many homes wide ocean views.',
    atAGlance: [
      { value: 'Late ’80s', label: 'Most homes built' },
      { value: '6', label: 'Enclaves' },
      { value: 'Most', label: 'Enclaves gated' },
      { value: '24-hr', label: 'Guard gate at Highland Light' },
      { value: '~2 mi', label: 'To the beach' },
      { value: 'Catalina', label: 'Views on clear days' },
    ],
    map: { bbox: [-117.64, 33.44, -117.605, 33.462], marker: [33.4514, -117.6222] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'mountain', title: 'Ocean views', text: 'The coastline, Catalina Island, and Dana Point Harbor on clear days' },
      { icon: 'gate', title: 'Gated privacy', text: 'Every enclave except Faire Harbour and New Providence is gated, most with guard booths' },
      { icon: 'park', title: 'Marblehead Park', text: 'An ocean-view park with sports courts, a tot lot, a small amphitheater, and BBQs' },
      { icon: 'trees', title: 'Trail access', text: 'Close to the Forster Ridgeline and Rancho San Clemente trailheads' },
      { icon: 'pool', title: 'Sports park nearby', text: 'About 1.5 miles from Vista Hermosa Sports Park' },
      { icon: 'home', title: 'Range of homes', text: 'Condos, detached condos, single-family homes, and custom estates' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family & custom estates', text: 'Including Highland Light Estates and Summit at Highland Light' },
      { icon: 'layers', title: 'Detached condos', text: 'Highland Light Village and New Providence look like single-family homes' },
      { icon: 'building', title: 'Attached condos', text: 'Faire Harbour' },
    ],
    market: {
      cards: [
        { value: '$2,047,500', label: 'Median list price', detail: '6 active listings, Sept 17, 2026', source: 'Ruby Home' },
        { value: '$1,018', label: 'Avg. list price per sq ft', detail: 'Active listings, Sept 17, 2026', source: 'Ruby Home' },
        { value: '6', label: 'Homes for sale', detail: 'Sept 17, 2026', source: 'Ruby Home' },
      ],
      range: { low: 850000, high: 4595000, median: 2047500, label: 'Listed prices, Sept 17, 2026 (Ruby Home)' },
      figures: [
        'On September 17, 2026, listed prices ran from $850,000 for a 2-bed, 984 sq ft Faire Harbour condo to $4,595,000 for a 4-bed, 4,309 sq ft home at Summit at Highland Light (Ruby Home)',
      ],
      note: 'Prices vary widely by enclave, from attached condos to custom estates.',
    },
    costsToKnow: [
      'HOA dues vary by enclave (gated, guard-staffed communities generally carry their own dues); check the HOA documents and tax bill for any specific home',
    ],
    schools:
      'Marblehead is in Capistrano Unified School District. Schools serving the area include Marblehead Elementary, Shorecliffs Middle, Bernice Ayer Middle, and San Clemente High. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Starts just east of I-5 in North San Clemente',
      'About a couple of miles from the beach and 1.5 miles from Vista Hermosa Sports Park',
    ],
    localTip: null,
    faqs: [
      {
        q: 'Is Marblehead in San Clemente gated?',
        a: 'Mostly. Every Marblehead enclave except Faire Harbour and New Providence is gated, and Highland Light has a 24-hour guard gate.',
      },
      {
        q: 'How much do homes cost in Marblehead?',
        a: 'On September 17, 2026, Ruby Home reported 6 homes for sale with a median list price of $2,047,500, from $850,000 to $4,595,000.',
      },
      {
        q: 'Is Marblehead the same as Sea Summit?',
        a: 'No. Sea Summit (formerly Marblehead Coastal) is a newer community west of I-5 on the coastal bluffs. Marblehead is the older, mostly gated hillside area east of the freeway.',
      },
    ],
    sources: [{ label: 'Ruby Home: Marblehead', href: 'https://www.rubyhome.com/san-clemente-ca/marblehead/' }],
  },

  {
    slug: 'sea-summit',
    published: false,
    name: 'Sea Summit',
    updated: '2026-10-23',
    image: '/ameno3.jpeg',
    imageAlt: 'Coastal home in San Clemente',
    tagline: 'Newer homes on the coastal bluffs, with a private clubhouse, trails down to the beach, and the Outlets next door.',
    summary:
      'Sea Summit (formerly Marblehead Coastal) is a Taylor Morrison community on San Clemente’s coastal bluffs that opened in 2015, with 309 homes, a clubhouse, about four miles of trails, a 116-acre preserve, and the Outlets at San Clemente next door.',
    intro:
      'Sea Summit sits on the coastal bluffs of North San Clemente, on land once called Marblehead Coastal. Taylor Morrison broke ground in January 2015 and opened the community that November: 309 single-family homes in four neighborhoods (Aqua, Azure, Indigo, and Sapphire), from about 1,750 to 5,000 square feet. About 116 acres are set aside as a protected nature preserve.',
    atAGlance: [
      { value: '2015', label: 'Community opened' },
      { value: '309', label: 'Single-family homes' },
      { value: '4', label: 'Neighborhoods' },
      { value: '116 ac', label: 'Nature preserve' },
      { value: '~4 mi', label: 'Of trails' },
      { value: '5', label: 'Community parks' },
    ],
    map: { bbox: [-117.65, 33.43, -117.615, 33.452], marker: [33.4401, -117.6333] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'home', title: 'Newer construction', text: 'Homes built from 2015 on, about 1,750 to 5,000 square feet' },
      { icon: 'landmark', title: 'The Summit Club', text: 'A Spanish Colonial-style clubhouse overlooking the ocean, with a pool and fitness center' },
      { icon: 'trees', title: 'Trails to the beach', text: 'About four miles of trails across the bluffs, down to PCH and San Clemente beach' },
      { icon: 'mountain', title: 'Protected open space', text: 'A 116-acre preserve of mesa and canyon habitat' },
      { icon: 'park', title: 'Five parks', text: 'Five community parks totaling 12 acres, tied into the trail network' },
      { icon: 'bag', title: 'Outlets next door', text: 'The Outlets at San Clemente, with more than 70 stores and restaurants' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family homes', text: 'Four neighborhoods: Aqua, Azure, Indigo, and Sapphire' },
      { icon: 'layers', title: 'Range of sizes', text: 'About 1,750 to 5,000 square feet' },
    ],
    market: {
      cards: [
        { value: '$2,550,000', label: 'Median list price', detail: '3 active listings, Oct 6, 2026', source: 'Ruby Home' },
        { value: '$1,109', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 6, 2026', source: 'Ruby Home' },
        { value: '3', label: 'Homes for sale', detail: 'Oct 6, 2026', source: 'Ruby Home' },
      ],
      range: { low: 2450000, high: 4995000, median: 2550000, label: 'Listed prices, Oct 6, 2026 (Ruby Home)' },
      figures: [
        'On October 6, 2026, listed prices ran from $2,450,000 for a 3-bed, 2,348 sq ft home to $4,995,000 for a 5-bed, 4,313 sq ft home (Ruby Home)',
        'When the community opened in 2015, Taylor Morrison priced homes from the low $1 millions to the mid $2 millions (Taylor Morrison)',
      ],
      note: 'With only a few homes for sale at a time, list prices here can move a lot from month to month.',
    },
    costsToKnow: [
      'Ask for the HOA dues and check the tax bill for any Mello-Roos or special taxes on any specific home; published guides don’t list the amounts',
    ],
    schools:
      'Sea Summit is in Capistrano Unified School District. Schools serving the area include Las Palmas or Marblehead Elementary, Shorecliffs Middle, and San Clemente High. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Trails lead down to PCH and San Clemente beach, and a long stairway at the front of the community goes to the beach',
      'The Outlets at San Clemente are part of the same development',
    ],
    localTip: null,
    faqs: [
      {
        q: 'When was Sea Summit in San Clemente built?',
        a: 'Taylor Morrison broke ground in January 2015 and held the grand opening in November 2015.',
      },
      {
        q: 'How much do homes cost in Sea Summit?',
        a: 'On October 6, 2026, Ruby Home reported 3 homes for sale with a median list price of $2,550,000, from $2,450,000 to $4,995,000.',
      },
      {
        q: 'What amenities does Sea Summit have?',
        a: 'The Summit Club clubhouse with a pool and fitness center, about four miles of trails down to the beach, five parks, a 116-acre nature preserve, and the Outlets at San Clemente next door.',
      },
    ],
    sources: [
      { label: 'Taylor Morrison: Sea Summit grand opening', href: 'https://newsroom.taylormorrison.com/2015-11-10-Taylor-Morrison-Announces-Grand-Opening-of-Sea-Summit-at-Marblehead' },
      { label: 'Ruby Home: Sea Summit at Marblehead', href: 'https://www.rubyhome.com/san-clemente-ca/sea-summit-at-marblehead/' },
    ],
  },

  {
    slug: 'shorecliffs',
    published: false,
    name: 'Shorecliffs',
    updated: '2026-10-23',
    image: '/ameno4.jpeg',
    imageAlt: 'Coastal home in San Clemente',
    tagline: 'Classic 1960s single-family homes near the beach, next to a golf course, with a private beach club.',
    summary:
      'Shorecliffs is a North San Clemente neighborhood built in the 1960s and early 1970s, with one- and two-story single-family homes, a private residents’ beach club, and Shorecliffs Golf Club next door.',
    intro:
      'Shorecliffs sits in North San Clemente, close to the beach and Pacific Coast Highway. Pacesetter Homes built it in the 1960s and early 1970s, and it is made up of one- and two-story single-family homes of about 1,371 to 2,387 square feet. Some backyards border Shorecliffs Golf Club, and many homes look out over the ocean, the course, or the hills.',
    atAGlance: [
      { value: '1960s', label: 'Built by Pacesetter Homes' },
      { value: '3–5', label: 'Bedrooms' },
      { value: '1,371–2,387', label: 'Square feet' },
      { value: 'Private', label: 'Residents’ beach club' },
      { value: 'Golf', label: 'Course next door' },
      { value: 'Catalina', label: 'Views on clear days' },
    ],
    map: { bbox: [-117.66, 33.448, -117.625, 33.47], marker: [33.4594, -117.6407] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'beach', title: 'Private beach club', text: 'For residents: beach parking, a large clubhouse, a playground, BBQs, and tennis and sports courts' },
      { icon: 'flag', title: 'Shorecliffs Golf Club', text: 'Right next door, with some backyards bordering the course' },
      { icon: 'mountain', title: 'Views', text: 'Ocean, golf course, and hill views, with Catalina Island visible on clear days' },
      { icon: 'home', title: 'Single-story options', text: 'A mix of one- and two-story homes' },
      { icon: 'beach', title: 'Close to the coast', text: 'Near the beach and Pacific Coast Highway' },
    ],
    homeTypes: [
      { icon: 'home', title: 'One-story homes', text: 'Single-level single-family homes, 3 to 5 bedrooms' },
      { icon: 'layers', title: 'Two-story homes', text: 'Up to about 2,387 square feet, with 2- to 3-car attached garages' },
    ],
    market: {
      cards: [
        { value: '$2,375,000', label: 'List price', detail: 'The 1 home for sale, Oct 23, 2026', source: 'Ruby Home' },
        { value: '$1,080', label: 'Avg. list price per sq ft', detail: 'Oct 23, 2026', source: 'Ruby Home' },
        { value: '1', label: 'Home for sale', detail: 'Oct 23, 2026', source: 'Ruby Home' },
      ],
      figures: [
        'On October 23, 2026, one home was listed: a 5-bed, 2,200 sq ft home at $2,375,000 (Ruby Home)',
      ],
      note: 'One listing isn’t a reliable picture of value. For a real read on Shorecliffs prices, recent closed sales matter more.',
    },
    costsToKnow: ['HOA dues are paid monthly; get the current amount and what it covers for any specific home'],
    schools:
      'Shorecliffs is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: ['Close to the beach and Pacific Coast Highway', 'Shorecliffs Golf Club is on Avenida Vaquero'],
    localTip: null,
    faqs: [
      {
        q: 'When was Shorecliffs in San Clemente built?',
        a: 'Pacesetter Homes built Shorecliffs in the 1960s and early 1970s.',
      },
      {
        q: 'Does Shorecliffs have beach access?',
        a: 'Yes. Residents have a private beach club with beach parking, a clubhouse, a playground, BBQs, and tennis and sports courts.',
      },
      {
        q: 'What size are homes in Shorecliffs?',
        a: 'One- and two-story single-family homes of about 1,371 to 2,387 square feet, with 3 to 5 bedrooms.',
      },
    ],
    sources: [{ label: 'Ruby Home: Shorecliffs', href: 'https://www.rubyhome.com/san-clemente-ca/shorecliffs/' }],
  },

  {
    slug: 'cyprus-shore',
    published: false,
    name: 'Cyprus Shore',
    updated: '2026-10-23',
    image: '/cordoba7.jpeg',
    imageAlt: 'Luxury home in San Clemente',
    tagline: 'Guard-gated custom homes with private beach access looking out toward Trestles.',
    summary:
      'Cyprus Shore is a guard-gated community in Southwest San Clemente with custom homes, 24-hour security, an association pool and tennis courts, and private beach access facing Trestles.',
    intro:
      'Cyprus Shore is in Southwest San Clemente, near the beach, behind a gate off Avenida Del Presidente. It shares a large gated area with neighboring Cyprus Cove and sits between Cyprus Cove and Cotton Point. The homes are custom, roughly 1,896 to 4,302 square feet, and residents have private access to a beach that looks out on Trestles.',
    atAGlance: [
      { value: '24/7', label: 'Guard-gated security' },
      { value: 'Private', label: 'Beach access' },
      { value: 'Trestles', label: 'Surf break view' },
      { value: '3–5', label: 'Bedrooms' },
      { value: '1,896–4,302', label: 'Square feet' },
      { value: 'Custom', label: 'Homes' },
    ],
    map: { bbox: [-117.612, 33.386, -117.582, 33.41] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'beach', title: 'Private beach', text: 'Residents’ access to a beach facing Trestles that is hard to reach from outside' },
      { icon: 'gate', title: '24-hour guard gate', text: 'Guard-gated entry off Avenida Del Presidente with security around the clock' },
      { icon: 'pool', title: 'Association amenities', text: 'A pool, spa, and tennis courts' },
      { icon: 'home', title: 'Custom homes', text: 'Custom brick, stone, granite, and woodwork' },
      { icon: 'trees', title: 'Resort-style yards', text: 'Tropical landscaping, BBQ islands, waterfalls, koi ponds, and palm trees' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Custom single-family homes', text: 'About 1,896 to 4,302 square feet, 3 to 5 bedrooms, 2 to 6 baths, 2- to 3-car garages' },
    ],
    market: {
      cards: [
        { value: '$9,725,000', label: 'Median list price', detail: '6 active listings, Oct 20, 2026', source: 'Ruby Home' },
        { value: '$2,155', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 20, 2026', source: 'Ruby Home' },
        { value: '6', label: 'Homes for sale', detail: 'Oct 20, 2026', source: 'Ruby Home' },
      ],
      range: { low: 3795000, high: 11995000, median: 9725000, label: 'Listed prices, Oct 20, 2026 (Ruby Home)' },
      figures: ['On October 20, 2026, 6 homes were listed from $3,795,000 to $11,995,000 (Ruby Home)'],
      note: 'Every home here is custom, so prices depend heavily on the lot, the beach frontage, and the home itself.',
    },
    costsToKnow: [
      'HOA dues are paid monthly and support the pool, spa, tennis courts, security, and beach access; get the current amount for any specific home',
    ],
    schools:
      'Cyprus Shore is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Gated entrance off Avenida Del Presidente',
      'Next to Cyprus Cove and Cotton Point, at the south end of San Clemente near Trestles',
    ],
    localTip: null,
    faqs: [
      {
        q: 'Is Cyprus Shore in San Clemente gated?',
        a: 'Yes. Cyprus Shore is guard-gated with 24-hour security, with its entrance off Avenida Del Presidente.',
      },
      {
        q: 'Does Cyprus Shore have private beach access?',
        a: 'Yes. Residents have private access to a beach that faces the Trestles surf break.',
      },
      {
        q: 'How much do homes cost in Cyprus Shore?',
        a: 'On October 20, 2026, Ruby Home reported 6 homes for sale with a median list price of $9,725,000, from $3,795,000 to $11,995,000.',
      },
    ],
    sources: [{ label: 'Ruby Home: Cyprus Shore', href: 'https://www.rubyhome.com/san-clemente-ca/cyprus-shore/' }],
  },
];

const showDrafts = process.env.VERCEL_ENV === 'preview';

export function getNeighborhoods() {
  return neighborhoods.filter((n) => n.published || showDrafts);
}

export function getNeighborhood(slug) {
  return getNeighborhoods().find((n) => n.slug === slug);
}
