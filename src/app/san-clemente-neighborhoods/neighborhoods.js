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
    published: true,
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
    localTip: "I spent a lot of my childhood at Talega's parks and at friends' houses here back when the community was first being built, so I've watched it grow up.",
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
    published: true,
    name: 'Pier Bowl',
    updated: '2026-10-23',
    image: '/photos/san-clemente/pier-bowl-aerial-dusk.jpg',
    imageAlt: 'Aerial view of the San Clemente Pier and Pier Bowl at dusk',
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
    gallery: [
      { src: '/photos/san-clemente/pier-bowl-aerial-dusk.jpg', alt: 'Aerial view of the San Clemente Pier and Pier Bowl at dusk', caption: 'The Pier Bowl at dusk' },
      { src: '/photos/san-clemente/pier-lifeguard-tower.jpg', alt: 'San Clemente Pier lifeguard tower on a sunny day', caption: 'The lifeguard tower on the pier' },
      { src: '/photos/san-clemente/pier-sunset-palms.jpg', alt: 'San Clemente Pier at sunset framed by palm trees', caption: 'Sunset over the pier' },
      { src: '/photos/san-clemente/pier-bowl-aerial-golden-hour.jpg', alt: 'San Clemente coastline and pier at golden hour', caption: 'The coastline from above' },
      { src: '/photos/san-clemente/pier-lifeguard-tower-sunset.jpg', alt: 'San Clemente Pier lifeguard tower silhouetted at sunset', caption: 'Golden hour on the pier' },
      { src: '/photos/san-clemente/pier-through-palms.jpg', alt: 'San Clemente Pier seen through palm trees', caption: 'Looking down on the pier' },
    ],
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
    localTip: "This is where I live. You can walk to downtown and the beach, and there's always a fun neighborhood event going on.",
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
    published: true,
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
    localTip: "I grew up in Forster Ranch starting in 2001, and some of my best memories are from these streets and parks. It's a neighborhood I know inside and out.",
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
    published: true,
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
    published: true,
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
    localTip: "Marblehead has some of the cleanest, best-kept homes in town, and the front-gate staff are some of the friendliest people you'll meet. You're also close to the freeway and downtown.",
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
    published: true,
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
    localTip: "One of San Clemente's newest neighborhoods, right in the middle of town and close to everything, with ocean-view homes across from the Outlets.",
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
    published: true,
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
    localTip: "A great coastal neighborhood with private beach access and plenty of ocean-view homes.",
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
    published: true,
    name: 'Cyprus Shore & Cyprus Cove',
    shortName: 'Cyprus Shore',
    updated: '2026-10-23',
    image: '/cordoba7.jpeg',
    imageAlt: 'Luxury home in San Clemente',
    tagline: 'Two neighboring guard-gated communities sharing one entrance, with private beach access facing Trestles.',
    summary:
      'Cyprus Shore and Cyprus Cove are neighboring guard-gated communities in Southwest San Clemente that share an entrance off Avenida Del Presidente, with custom homes and private beach access facing Trestles.',
    intro:
      'Cyprus Shore and Cyprus Cove are two separate, side-by-side communities in Southwest San Clemente that share one guard-gated entrance off Avenida Del Presidente. Cyprus Shore sits between Cyprus Cove and Cotton Point. Both are made up of custom homes, and both give residents private access to a beach looking out on Trestles. Cyprus Shore homes run roughly 1,896 to 4,302 square feet; Cyprus Cove homes run about 3,000 to 5,000.',
    atAGlance: [
      { value: '2', label: 'Communities, one gate' },
      { value: '24/7', label: 'Guard-gated security' },
      { value: 'Private', label: 'Beach access' },
      { value: 'Trestles', label: 'Surf break view' },
      { value: '3–7', label: 'Bedrooms' },
      { value: 'Custom', label: 'Homes' },
    ],
    map: { bbox: [-117.612, 33.382, -117.582, 33.404], marker: [33.3921, -117.5974] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'beach', title: 'Private beach', text: 'Residents’ access to a beach facing Trestles that is hard to reach from outside' },
      { icon: 'gate', title: 'Guard-gated', text: 'One shared, staffed gate off Avenida Del Presidente; Cyprus Shore has 24-hour security' },
      { icon: 'pool', title: 'Association amenities', text: 'Pools, spas, and tennis courts; Cyprus Cove also lists a clubhouse and sports courts' },
      { icon: 'home', title: 'Custom homes', text: 'Custom brick, stone, granite, and woodwork, cathedral ceilings, and stone-path entries' },
      { icon: 'trees', title: 'Resort-style yards', text: 'Tropical landscaping, pools and spas, BBQ islands, waterfalls, and koi ponds' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Cyprus Shore', text: 'Custom homes of about 1,896 to 4,302 sq ft, 3 to 5 bedrooms, 2- to 3-car garages' },
      { icon: 'home', title: 'Cyprus Cove', text: 'Custom homes of about 3,000 to 5,000 sq ft, 3 to 7 bedrooms, 2- to 6-car garages' },
    ],
    market: {
      cards: [
        { value: '$9,725,000', label: 'Cyprus Shore median list price', detail: '6 active listings, Oct 20, 2026', source: 'Ruby Home' },
        { value: '$2,155', label: 'Avg. list price per sq ft', detail: 'Cyprus Shore, Oct 20, 2026', source: 'Ruby Home' },
        { value: '0', label: 'Cyprus Cove homes for sale', detail: 'At the time of research, Oct 2026', source: 'Ruby Home' },
      ],
      range: { low: 3795000, high: 11995000, median: 9725000, label: 'Cyprus Shore listed prices, Oct 20, 2026 (Ruby Home)' },
      figures: ['On October 20, 2026, 6 Cyprus Shore homes were listed from $3,795,000 to $11,995,000 (Ruby Home)'],
      note: 'Every home here is custom, so prices depend heavily on the lot, the beach frontage, and the home itself.',
    },
    costsToKnow: [
      'Both communities have monthly HOA dues that support the gate, security, and shared amenities; published guides don’t say whether the two share one HOA, so confirm for any specific home',
    ],
    schools:
      'Cyprus Shore and Cyprus Cove are in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Shared gated entrance off Avenida Del Presidente',
      'At the south end of San Clemente near Cotton Point and Trestles',
    ],
    localTip: "This is one of my favorite neighborhoods in town: exclusive, private, and full of history. President Richard Nixon's Western White House, La Casa Pacifica, sits on Calle Isabella, and that street is my dream address.",
    faqs: [
      {
        q: 'Are Cyprus Shore and Cyprus Cove the same neighborhood?',
        a: 'No. They are two separate, neighboring communities in Southwest San Clemente that share one guard-gated entrance off Avenida Del Presidente. Both have private beach access facing Trestles.',
      },
      {
        q: 'Is Cyprus Shore gated?',
        a: 'Yes. Cyprus Shore is guard-gated with 24-hour security, sharing its entrance with Cyprus Cove.',
      },
      {
        q: 'How much do homes cost in Cyprus Shore?',
        a: 'On October 20, 2026, Ruby Home reported 6 Cyprus Shore homes for sale with a median list price of $9,725,000, from $3,795,000 to $11,995,000.',
      },
    ],
    sources: [
      { label: 'Ruby Home: Cyprus Shore', href: 'https://www.rubyhome.com/san-clemente-ca/cyprus-shore/' },
      { label: 'Ruby Home: Cyprus Cove', href: 'https://www.rubyhome.com/san-clemente-ca/cyprus-cove/' },
    ],
  },

  {
    slug: 'broadmoor',
    published: true,
    name: 'Broadmoor',
    updated: '2026-10-23',
    image: '/cordoba8.jpeg',
    imageAlt: 'San Clemente home',
    tagline: 'Single-story 1970s homes on big lots in the hills above town, close to downtown and the high school.',
    summary:
      'Broadmoor is a mid-1970s tract of single-story homes on large lots in the hills of Central San Clemente, above San Clemente High School, with some ocean views and relatively low HOA fees.',
    intro:
      'Broadmoor is a large tract in the hills of Central San Clemente, reached by climbing up from San Clemente High School on Avenida Presidio. Homes were built in the mid-1970s and are all single-story, on lots of roughly 7,000 to 13,000 square feet. It sits far enough from the freeway and Avenida Pico to stay fairly quiet, and some homes look out over the coastline and the city.',
    atAGlance: [
      { value: 'Mid-1970s', label: 'Homes built' },
      { value: 'Single-story', label: 'Every home' },
      { value: '7K–13K', label: 'Sq ft lots' },
      { value: '1,900–2,339', label: 'Sq ft homes' },
      { value: '3–4', label: 'Bedrooms' },
      { value: 'Low', label: 'HOA fees' },
    ],
    map: { bbox: [-117.628, 33.428, -117.596, 33.448], marker: [33.4368, -117.6121] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'home', title: 'All single-story', text: 'One-level homes, rare for a hillside neighborhood' },
      { icon: 'layers', title: 'Big lots', text: 'About 7,000 to 13,000 square feet, with room for pools and large yards' },
      { icon: 'mountain', title: 'Views', text: 'Select homes look out over the coastline and the city' },
      { icon: 'gate', title: 'Quiet streets', text: 'Cul-de-sacs and single-loaded streets, set back from the freeway and Avenida Pico' },
      { icon: 'landmark', title: 'Close to town', text: 'Near Downtown San Clemente, San Clemente High School, and Verde Park' },
      { icon: 'receipt', title: 'Low HOA fees', text: 'Relatively low for San Clemente' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-story single-family', text: 'Models include Seascape (3 bed, 1,900 sq ft), Windjammer (4 bed, 2,212), Brigantine (4 bed, 2,272), and Sandcastle (4 bed, 2,339)' },
      { icon: 'pool', title: 'Large backyards', text: 'Some homes have private pools; 2-car attached garages are standard' },
    ],
    market: {
      cards: [
        { value: '0', label: 'Homes for sale', detail: 'At the time of research, Oct 2026', source: 'Ruby Home' },
      ],
      figures: [],
      note: 'No Broadmoor homes were listed for sale when this guide was written, so there is no current list price to report. Ask for recent Broadmoor closed sales for an accurate picture of value.',
    },
    costsToKnow: ['HOA fees are relatively low for San Clemente; get the current amount for any specific home'],
    schools:
      'Broadmoor is in Capistrano Unified School District and sits just above San Clemente High School. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: ['Reached by climbing up from San Clemente High School on Avenida Presidio', 'Close to Downtown San Clemente and Verde Park'],
    localTip: "One of my favorite neighborhoods: single-loaded streets, one-story homes, and ocean views, right above San Clemente High School.",
    faqs: [
      {
        q: 'Are Broadmoor homes in San Clemente single-story?',
        a: 'Yes. Broadmoor homes are single-story, built in the mid-1970s, about 1,900 to 2,339 square feet on lots of roughly 7,000 to 13,000 square feet.',
      },
      {
        q: 'Where is Broadmoor in San Clemente?',
        a: 'In the hills of Central San Clemente, above San Clemente High School off Avenida Presidio, close to downtown and Verde Park.',
      },
    ],
    sources: [{ label: 'Ruby Home: Broadmoor', href: 'https://www.rubyhome.com/san-clemente-ca/broadmoor/' }],
  },

  {
    slug: 'misty-ridge',
    published: true,
    name: 'Misty Ridge',
    updated: '2026-10-23',
    image: '/cordoba1.jpeg',
    imageAlt: 'Custom home in San Clemente',
    tagline: 'Custom 1980s homes on a quiet ridge with panoramic ocean views, minutes from downtown.',
    summary:
      'Misty Ridge is a small enclave of custom homes, mostly built in the late 1980s, in the hills of Central San Clemente off Avenida Salvador, with panoramic ocean views and low HOA dues.',
    intro:
      'Misty Ridge sits in the hills of Central San Clemente, east of the 5, just off Avenida Salvador and near Avenida Presidio, which leads down to downtown. It has a single entrance, and its side streets end in cul-de-sacs. The homes are custom, many built in the late 1980s, roughly 3,000 to 5,000 square feet, and many have panoramic ocean views reaching downtown and Dana Point Harbor on clear days.',
    atAGlance: [
      { value: 'Late 1980s', label: 'Most homes built' },
      { value: 'Custom', label: 'Homes' },
      { value: '3,000–5,000', label: 'Sq ft' },
      { value: '3–5', label: 'Bedrooms' },
      { value: '1', label: 'Community entrance' },
      { value: 'Low', label: 'HOA dues' },
    ],
    gallery: [],
    whyPeopleMove: [
      { icon: 'mountain', title: 'Ocean views', text: 'Panoramic views over downtown to Dana Point Harbor on clear days' },
      { icon: 'home', title: 'Custom homes', text: 'Many with designer finishes, some on oversized lots with pools or room for one' },
      { icon: 'gate', title: 'Quiet and private', text: 'One community entrance, with side streets ending in cul-de-sacs' },
      { icon: 'landmark', title: 'Close to downtown', text: 'Near Avenida Presidio, which leads down to downtown' },
      { icon: 'receipt', title: 'Low HOA dues', text: 'Few shared amenities keep dues low' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Custom single-family homes', text: 'About 3,000 to 5,000 sq ft, 3 to 5 bedrooms, 2.5 to 5 baths, 2- to 3-car garages' },
    ],
    market: {
      cards: [{ value: '0', label: 'Homes for sale', detail: 'At the time of research, Oct 2026', source: 'Ruby Home' }],
      figures: [],
      note: 'No Misty Ridge homes were listed for sale when this guide was written. Homes here trade rarely, so recent closed sales are the best guide to value.',
    },
    costsToKnow: ['HOA dues are low because there are few shared amenities; get the current amount for any specific home'],
    schools:
      'Misty Ridge is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: ['Just off Avenida Salvador, east of I-5', 'Avenida Presidio leads down to downtown'],
    localTip: "Misty Ridge wraps around what locals call the \"Top of the World\" in San Clemente: custom homes and big ocean views.",
    faqs: [
      {
        q: 'Where is Misty Ridge in San Clemente?',
        a: 'In the hills of Central San Clemente, east of I-5, just off Avenida Salvador and near Avenida Presidio.',
      },
      {
        q: 'What are homes like in Misty Ridge?',
        a: 'Custom homes, many built in the late 1980s, about 3,000 to 5,000 square feet with 3 to 5 bedrooms, many with panoramic ocean views.',
      },
    ],
    sources: [{ label: 'Ruby Home: Misty Ridge', href: 'https://www.rubyhome.com/san-clemente-ca/misty-ridge/' }],
  },

  {
    slug: 'sea-ridge-estates',
    published: true,
    name: 'Sea Ridge Estates',
    updated: '2026-10-23',
    image: '/ameno3.jpeg',
    imageAlt: 'Ocean-view home in San Clemente',
    tagline: 'A small gated enclave of 1990s villa-style homes on one of the highest points in San Clemente.',
    summary:
      'Sea Ridge Estates is a gated community of about 43 villa-style custom homes built from 1990 on, on one of the highest points in Southeast San Clemente, with panoramic ocean and canyon views.',
    intro:
      'Sea Ridge Estates is a private, gated community of about 43 homes in Southeast San Clemente, on one of the highest points in the city. The homes are villa-style customs built from 1990 on, roughly 3,200 to 5,700 square feet on lots of about 7,000 to 9,000 square feet, set along the ridgetop with views of the canyons and the Pacific.',
    atAGlance: [
      { value: '~43', label: 'Homes' },
      { value: 'Gated', label: 'Private entrance' },
      { value: '1990s', label: 'Homes built' },
      { value: '3,200–5,700', label: 'Sq ft' },
      { value: '4–6', label: 'Bedrooms' },
      { value: 'Ridgetop', label: 'Ocean & canyon views' },
    ],
    map: { bbox: [-117.612, 33.42, -117.582, 33.438], marker: [33.4287, -117.5968] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'mountain', title: 'Panoramic views', text: 'Ridgetop homesites look out over the canyons and the Pacific' },
      { icon: 'gate', title: 'Gated and small', text: 'A private, gated community of about 43 homes' },
      { icon: 'home', title: 'Villa-style customs', text: 'Gourmet kitchens, dual-sided fireplaces, and primary-suite view decks' },
      { icon: 'trees', title: 'Outdoor living', text: 'Large backyards with BBQ islands and ocean views' },
      { icon: 'receipt', title: 'No Mello-Roos', text: 'Ruby Home reports no Mello-Roos assessments in Southeast San Clemente' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Custom single-family homes', text: 'About 3,200 to 5,700 sq ft on 7,000 to 9,000 sq ft lots, 4 to 6 bedrooms, 3-car garages' },
    ],
    market: {
      cards: [{ value: '0', label: 'Homes for sale', detail: 'At the time of research, Oct 2026', source: 'Ruby Home' }],
      figures: [],
      note: 'No Sea Ridge Estates homes were listed for sale when this guide was written. With only about 43 homes, sales are rare, so recent closed sales are the best guide to value.',
    },
    costsToKnow: [
      'Monthly HOA dues cover the gated entrance and common-area maintenance; get the current amount for any specific home',
      'Ruby Home reports no Mello-Roos in Southeast San Clemente; confirm on the tax bill',
    ],
    schools:
      'Sea Ridge Estates is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: ['In the hills of Southeast San Clemente, east of I-5', 'Close to hiking trails, beaches, and downtown'],
    localTip: "My grandparents lived in Sea Ridge Estates, and I spent a lot of time and holidays here growing up. It's a small enclave of about 40 custom homes on one of the highest points in San Clemente.",
    faqs: [
      {
        q: 'Is Sea Ridge Estates in San Clemente gated?',
        a: 'Yes. Sea Ridge Estates is a private gated community of about 43 homes in Southeast San Clemente.',
      },
      {
        q: 'What are homes like in Sea Ridge Estates?',
        a: 'Villa-style custom homes built from 1990 on, about 3,200 to 5,700 square feet on 7,000 to 9,000 square foot lots, with ocean and canyon views.',
      },
    ],
    sources: [
      { label: 'Ruby Home: Sea Ridge Estates', href: 'https://www.rubyhome.com/san-clemente-ca/sea-ridge-estates/' },
      { label: 'BCRE: Sea Ridge Estates', href: 'https://www.bcre.com/sea-ridge-estates-san-clemente-ca.php' },
      { label: 'Ruby Home: Southeast San Clemente', href: 'https://www.rubyhome.com/san-clemente-ca/southeast-san-clemente/' },
    ],
  },

  {
    slug: 'sea-pointe-estates',
    published: true,
    name: 'Sea Pointe Estates',
    updated: '2026-10-23',
    image: '/cordoba2.jpg',
    imageAlt: 'Custom home in San Clemente',
    tagline: 'A 24/7 guard-gated hillside community of custom homes with views to Catalina.',
    summary:
      'Sea Pointe Estates is a 24/7 guard-gated community of custom homes in the hills of North San Clemente (92673), with coastal, canyon, and Catalina views and an association pool, clubhouse, and tennis courts.',
    intro:
      'Sea Pointe Estates is a 24/7 guard-gated community in the hills of North San Clemente, in the 92673 ZIP code, a couple of miles from the beach and less than a mile from the 5. The homes are custom, from about 2,702 to 6,408 square feet with Spanish-influenced architecture and large backyards, and nearly every homesite has a view of the coast, the canyons, city lights, or Catalina Island.',
    atAGlance: [
      { value: '24/7', label: 'Guard-gated' },
      { value: '2,702–6,408', label: 'Sq ft' },
      { value: '3–6', label: 'Bedrooms' },
      { value: 'Catalina', label: 'Views' },
      { value: '<1 mi', label: 'To I-5' },
      { value: '92673', label: 'ZIP code' },
    ],
    map: { bbox: [-117.665, 33.45, -117.632, 33.472], marker: [33.461, -117.6486] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'gate', title: '24/7 guard gate', text: 'A staffed gate around the clock' },
      { icon: 'mountain', title: 'Views from nearly every lot', text: 'The coast, rolling canyons, city lights, and Catalina Island' },
      { icon: 'pool', title: 'Association amenities', text: 'Pool and spa, a clubhouse with BBQ area, tennis and sports courts, and a playground' },
      { icon: 'home', title: 'Custom homes', text: 'Spanish-influenced architecture with large backyards' },
      { icon: 'bag', title: 'Convenient', text: 'Near shopping on Camino De Los Mares and under a mile from I-5' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Custom single-family homes', text: 'About 2,702 to 6,408 sq ft (mostly 3,000 to 5,000), 3 to 6 bedrooms, 3- to 5-car garages' },
    ],
    market: {
      cards: [
        { value: '$4,000,000', label: 'Median list price', detail: '3 active listings, Oct 6, 2026', source: 'Ruby Home' },
        { value: '$882', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 6, 2026', source: 'Ruby Home' },
        { value: '3', label: 'Homes for sale', detail: 'Oct 6, 2026', source: 'Ruby Home' },
      ],
      range: { low: 3798000, high: 5800000, median: 4000000, label: 'Listed prices, Oct 6, 2026 (Ruby Home)' },
      figures: ['On October 6, 2026, listed prices ran from $3,798,000 for a 4-bed, 5,129 sq ft home to $5,800,000 for a 4-bed, 6,145 sq ft home (Ruby Home)'],
      note: 'With only a few homes for sale at a time, list prices can move a lot from month to month.',
    },
    costsToKnow: ['HOA dues support the guard gate and amenities; published guides don’t list the amount, so get it for any specific home'],
    schools:
      'Sea Pointe Estates is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: ['Under a mile from I-5', 'Near shopping centers on Camino De Los Mares, a couple of miles from the beach'],
    localTip: "Beautiful custom homes with ocean views, and you're minutes from Trader Joe's, Handel's Ice Cream, and the freeway.",
    faqs: [
      {
        q: 'Is Sea Pointe Estates in San Clemente guard-gated?',
        a: 'Yes. Sea Pointe Estates is a 24/7 guard-gated community in North San Clemente.',
      },
      {
        q: 'How much do homes cost in Sea Pointe Estates?',
        a: 'On October 6, 2026, Ruby Home reported 3 homes for sale with a median list price of $4,000,000, from $3,798,000 to $5,800,000.',
      },
    ],
    sources: [{ label: 'Ruby Home: Sea Pointe Estates', href: 'https://www.rubyhome.com/san-clemente-ca/sea-pointe-estates/' }],
  },

  {
    slug: 'southeast-san-clemente',
    published: true,
    name: 'Southeast San Clemente',
    updated: '2026-10-23',
    image: '/cordoba6.jpeg',
    imageAlt: 'San Clemente hillside home',
    tagline: 'Hillside homes east of the 5 around the municipal golf course, close to the beaches near Trestles.',
    summary:
      'Southeast San Clemente is the hillside area east of I-5 around the San Clemente Municipal Golf Course, with single-family homes and condos, no Mello-Roos, and quick access to the beaches near Trestles.',
    intro:
      "Southeast San Clemente covers the hillsides east of the 5 around the San Clemente Municipal Golf Course, about a mile from the ocean. It's made up of a mix of single-family homes and condo communities, many built in the 1960s and 1970s, with smaller enclaves including Cantamar, Mariners Point, Palacio Del Mar, Patrician Villa, Salvador Summit, and Sea Ridge Estates.",
    atAGlance: [
      { value: '1930', label: 'Golf course opened' },
      { value: '18', label: 'Holes, ocean views' },
      { value: '~1 mi', label: 'Course to the ocean' },
      { value: '19', label: 'Homes for sale (Oct 9)' },
      { value: '6', label: 'Named enclaves' },
      { value: 'None', label: 'Mello-Roos' },
    ],
    map: { bbox: [-117.615, 33.398, -117.58, 33.425], marker: [33.409, -117.5966] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'flag', title: 'Municipal golf course', text: 'A public 18-hole course with sweeping ocean views; nine holes opened in 1930 and the back nine in 1955' },
      { icon: 'beach', title: 'South-end beaches', text: 'Close to Riviera, San Clemente State Beach, and San Onofre, home to Trestles' },
      { icon: 'park', title: 'Parks', text: 'San Luis Rey Park and Vista Bahia Park near the golf course' },
      { icon: 'trees', title: 'Trails', text: 'Hiking on local trails in the hills' },
      { icon: 'receipt', title: 'No Mello-Roos', text: 'Ruby Home reports no Mello-Roos and no leased land' },
      { icon: 'landmark', title: 'Close to downtown', text: 'A shorter drive to downtown than many hillside neighborhoods' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Single-family homes', text: 'Many built in the 1960s and 1970s' },
      { icon: 'building', title: 'Condo communities', text: 'Including Presidential Heights, which borders the golf course' },
      { icon: 'gate', title: 'Gated enclave', text: 'Sea Ridge Estates, with 1990s villa-style custom homes' },
    ],
    market: {
      cards: [
        { value: '$2,195,000', label: 'Median list price', detail: '19 active listings, Oct 9, 2026', source: 'Ruby Home' },
        { value: '$1,034', label: 'Avg. list price per sq ft', detail: 'Active listings, Oct 9, 2026', source: 'Ruby Home' },
        { value: '19', label: 'Homes for sale', detail: 'Oct 9, 2026', source: 'Ruby Home' },
      ],
      figures: ['On October 9, 2026, Southeast San Clemente had 19 active listings with a median list price of $2,195,000 and an average of $1,034 per square foot (Ruby Home)'],
      note: 'This area mixes condos and single-family homes, so the median moves with whatever is for sale that week.',
    },
    costsToKnow: [
      'Ruby Home reports no Mello-Roos assessments and no leased land; confirm on the tax bill',
      'Condo communities and gated enclaves have HOA dues; get the current amount for any specific home',
    ],
    schools:
      'Southeast San Clemente is in Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'San Clemente Municipal Golf Course: 150 E Avenida Magdalena',
      'East of I-5, close to the south-end beaches and San Onofre State Beach',
    ],
    localTip: "A quieter pocket near the municipal golf course and Trestles, and one of the better values you'll find in San Clemente.",
    faqs: [
      {
        q: 'What neighborhoods are near the San Clemente Municipal Golf Course?',
        a: 'Southeast San Clemente, east of I-5. Presidential Heights condos border the course, and enclaves nearby include Cantamar, Mariners Point, Palacio Del Mar, Patrician Villa, Salvador Summit, and Sea Ridge Estates.',
      },
      {
        q: 'Is there Mello-Roos in Southeast San Clemente?',
        a: 'Ruby Home reports no Mello-Roos assessments and no leased land in Southeast San Clemente. Confirm on the tax bill for any specific home.',
      },
      {
        q: 'How much do homes cost in Southeast San Clemente?',
        a: 'On October 9, 2026, Ruby Home reported 19 homes for sale with a median list price of $2,195,000.',
      },
    ],
    sources: [
      { label: 'Ruby Home: Southeast San Clemente', href: 'https://www.rubyhome.com/san-clemente-ca/southeast-san-clemente/' },
      { label: 'City of San Clemente: Golf course information', href: 'https://www.sanclemente.gov/208' },
    ],
  },
  // ---------------------------------------------------------------------------
  // Nearby Orange County cities (kind: 'city'). Same format as the neighborhood guides.
  // Photos: Unsplash (free license), each confirmed to show that city.
  // ---------------------------------------------------------------------------
  {
    slug: 'dana-point',
    kind: 'city',
    place: 'Dana Point, CA',
    published: false,
    name: 'Dana Point',
    updated: '2026-10-27',
    image: 'https://images.unsplash.com/photo-1628961434939-30a5179c7e0d',
    imageAlt: 'Aerial view of the Dana Point coastline and beach',
    tagline: 'A harbor town next door to San Clemente, with surf breaks, bluff-top parks, and one of the few harbors on the Orange County coast.',
    summary:
      'Dana Point is a coastal city just north of San Clemente with a working harbor, Doheny State Beach, Salt Creek and Strands beaches, and the historic Lantern District.',
    intro:
      "Dana Point sits right next door to San Clemente along Pacific Coast Highway. It became a city in 1989, and 33,107 people lived here at the 2020 census. Life here centers on Dana Point Harbor, dedicated in 1971, with its marina, shops, restaurants, and the Catalina Express to Avalon. The city is named after Richard Henry Dana Jr., who described the headland in his 1840 memoir Two Years Before the Mast.",
    atAGlance: [
      { value: '33,107', label: 'Residents (2020 census)' },
      { value: '1989', label: 'Became a city' },
      { value: '1971', label: 'Harbor dedicated' },
      { value: '6.8 sq mi', label: 'Total area' },
      { value: '$2.1M', label: 'Median sale price' },
      { value: '47', label: 'Median days on market' },
    ],
    map: { bbox: [-117.735, 33.445, -117.645, 33.5], marker: [33.4669721, -117.6981075] },
    gallery: [
      { src: 'https://images.unsplash.com/photo-1718145542654-d48bfc8fc05e', alt: 'Boats in Dana Point Harbor', caption: 'Dana Point Harbor' },
      { src: 'https://images.unsplash.com/photo-1593449183239-7eba18f226aa', alt: 'Salt Creek Beach in Dana Point at sunset', caption: 'Salt Creek Beach' },
      { src: 'https://images.unsplash.com/photo-1776660244774-eabab8cd1ae3', alt: 'Golf course overlooking the beach and ocean in Dana Point', caption: 'Ocean views along the coast' },
    ],
    whyPeopleMove: [
      { icon: 'beach', title: 'Dana Point Harbor', text: 'A marina with shops and restaurants, and the Catalina Express to Avalon on Catalina Island' },
      { icon: 'pool', title: 'Doheny State Beach', text: 'Known as the first state beach in the California state park system, with a popular surf break' },
      { icon: 'trees', title: 'Salt Creek & Strands', text: 'Neighboring beaches below the headlands, with improved public stairs and access at Strands' },
      { icon: 'landmark', title: 'Surf history', text: 'Hobie Alter opened the world’s first retail surf shop here in 1954' },
      { icon: 'home', title: 'Lantern District', text: 'The historic core, with streets named for the colored lanterns ships once used in the harbor' },
      { icon: 'train', title: 'Next door to San Clemente', text: 'Pacific Coast Highway connects Dana Point to San Clemente, Laguna Beach and Laguna Niguel' },
    ],
    homeTypes: [
      { icon: 'home', title: 'Historic core', text: 'The Lantern District, where many of the early "Woodruff" houses are concentrated' },
      { icon: 'gate', title: 'Coastal communities', text: 'Including Monarch Beach, Niguel Shores and the Strands at Headlands, a luxury development on the bluff' },
      { icon: 'beach', title: 'Capistrano Beach', text: 'Bluff-top and beachfront homes on the south end of town (see the Capistrano Beach guide)' },
    ],
    market: {
      cards: [
        { value: '$2,099,000', label: 'Median sale price', detail: '3 months ending Sept 2026, +16.6% YoY', source: 'Redfin' },
        { value: '$1.13K', label: 'Median price per sq ft', detail: '+23.9% vs. last year', source: 'Redfin' },
        { value: '113', label: 'Homes sold in September', detail: 'Up from 110 a year earlier', source: 'Redfin' },
      ],
      figures: [
        'Median sale price: $2,099,000 over the three months ending September 2026, up 16.6% from a year earlier (Redfin)',
        'Median price per square foot: about $1,130, up 23.9% from a year earlier (Redfin)',
        'Median days on market: 47, compared with 64 a year earlier (Redfin)',
        'Homes sold in September 2026: 113, up from 110 (Redfin)',
      ],
      note: 'Redfin describes the Dana Point market as somewhat competitive. Prices vary a lot between harbor-area condos, bluff-top homes, and gated coastal communities.',
    },
    costsToKnow: [
      'Many planned and gated communities have HOA dues, and amounts vary widely, so check the dues for any specific home',
      'Some newer communities may also carry special taxes; always review the actual property tax bill',
    ],
    schools:
      'Dana Point is served by Capistrano Unified School District. Boundaries can change, so always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Pacific Coast Highway (State Route 1) runs through town',
      'The Catalina Express leaves from Dana Point Harbor for Avalon',
      'Borders San Clemente and Capistrano Beach to the south and Laguna Niguel and Laguna Beach to the north',
    ],
    localTip: null,
    faqs: [
      { q: 'What is Dana Point known for?', a: 'Dana Point Harbor, Doheny State Beach, the surf breaks at Salt Creek and Strands, and its surf history; Hobie Alter opened the first retail surf shop here in 1954.' },
      { q: 'How much do homes cost in Dana Point?', a: 'Redfin reported a median sale price of $2,099,000 for the three months ending September 2026, up 16.6% from a year earlier.' },
      { q: 'How far is Dana Point from San Clemente?', a: 'They are next-door neighbors. Capistrano Beach, the south end of Dana Point, borders San Clemente.' },
      { q: 'What school district serves Dana Point?', a: 'Capistrano Unified School District. Confirm the assigned schools for a specific address with the district.' },
    ],
    sources: [
      { label: 'Redfin: Dana Point housing market', href: 'https://www.redfin.com/city/4641/CA/Dana-Point/housing-market' },
      { label: 'Wikipedia: Dana Point, California', href: 'https://en.wikipedia.org/wiki/Dana_Point,_California' },
      { label: 'Wikipedia: Doheny State Beach', href: 'https://en.wikipedia.org/wiki/Doheny_State_Beach' },
    ],
  },
  {
    slug: 'capistrano-beach',
    kind: 'city',
    place: 'Capistrano Beach, Dana Point',
    published: false,
    name: 'Capistrano Beach',
    updated: '2026-10-27',
    image: 'https://images.unsplash.com/photo-1705104909766-8e00f80770db',
    imageAlt: 'Sunset over the sand in Dana Point near Capistrano Beach',
    tagline: 'Bluff-top homes and a beach road on the south end of Dana Point, right on the San Clemente border.',
    summary:
      'Capistrano Beach ("Capo Beach") is the southern coastal neighborhood of Dana Point, between San Clemente and Doheny State Beach, with bluff-top homes, Beach Road, and Capistrano Beach Park.',
    intro:
      'Capistrano Beach, or "Capo Beach," is the southern coastal neighborhood of Dana Point, bordered by San Clemente to the south and Doheny State Beach to the north. Homes were first built on the bluff in 1925, and Capo Beach became part of the City of Dana Point in 1989. Some homes sit atop the cliff overlooking Coast Highway and Capistrano Beach Park, and Beach Road, where Hobie Alter conceived the Hobie Cat catamaran, runs right along the sand.',
    atAGlance: [
      { value: '1925', label: 'Bluff homes first built' },
      { value: '1989', label: 'Joined Dana Point' },
      { value: '41.4', label: 'Acres given for Doheny State Beach (1931)' },
      { value: '$2.07M', label: 'Median sale price' },
      { value: '46', label: 'Median days on market' },
      { value: '23', label: 'Homes sold in September' },
    ],
    map: { bbox: [-117.69, 33.439, -117.645, 33.474], marker: [33.4587166, -117.66857] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'beach', title: 'Capistrano Beach Park', text: 'A beach park along Coast Highway, below the bluff-top homes' },
      { icon: 'pool', title: 'Doheny next door', text: 'Doheny State Beach borders Capo Beach to the north' },
      { icon: 'home', title: 'Bluff-top views', text: 'Some homes sit atop the cliff overlooking Coast Highway and the ocean' },
      { icon: 'landmark', title: 'Beach Road', text: 'The beachfront street where Hobie Alter conceived the Hobie Cat' },
      { icon: 'train', title: 'Close to San Clemente', text: 'Borders San Clemente to the south' },
      { icon: 'layers', title: 'Spanish-style roots', text: "Early Spanish-style homes built by the Doheny family's Capistrano Beach Company" },
    ],
    homeTypes: [
      { icon: 'home', title: 'Bluff-top homes', text: 'Homes on the bluff, where development started in 1925' },
      { icon: 'beach', title: 'Beach Road', text: 'Homes right on the sand along Beach Road' },
      { icon: 'building', title: 'Spanish-style houses', text: 'Red-tile, Spanish-style homes from the area’s early development' },
    ],
    market: {
      cards: [
        { value: '$2,074,419', label: 'Median sale price', detail: '3 months ending Sept 2026, +29.9% YoY', source: 'Redfin' },
        { value: '$844', label: 'Median price per sq ft', detail: '-8.7% vs. last year', source: 'Redfin' },
        { value: '46', label: 'Median days on market', detail: 'Compared with 45 a year earlier', source: 'Redfin' },
      ],
      figures: [
        'Median sale price: $2,074,419 over the three months ending September 2026, up 29.9% from a year earlier (Redfin)',
        'Median price per square foot: $844, down 8.7% from a year earlier (Redfin)',
        'Homes sold in September 2026: 23, the same as a year earlier (Redfin)',
      ],
      note: 'With only about two dozen sales a month, a few large or small homes can move the median a lot. Price per square foot fell even as the median rose.',
    },
    costsToKnow: ['Some streets and gated sections have HOA dues; check the dues and the property tax bill for any specific home'],
    schools:
      'Capistrano Beach is served by Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Pacific Coast Highway runs along the base of the bluff',
      'San Clemente borders the neighborhood to the south; Dana Point Harbor is just north past Doheny',
    ],
    localTip: null,
    faqs: [
      { q: 'Is Capistrano Beach part of Dana Point or San Clemente?', a: 'Dana Point. Capistrano Beach became part of the City of Dana Point in 1989. It borders San Clemente to the south.' },
      { q: 'How much do homes cost in Capistrano Beach?', a: 'Redfin reported a median sale price of $2,074,419 for the three months ending September 2026, up 29.9% from a year earlier.' },
      { q: 'What is Beach Road in Capistrano Beach?', a: 'A street of homes right on the sand, where Hobie Alter conceived the Hobie Cat catamaran.' },
    ],
    sources: [
      { label: 'Redfin: Capistrano Beach housing market', href: 'https://www.redfin.com/neighborhood/14730/CA/Dana-Point/Capistrano-Beach/housing-market' },
      { label: 'Wikipedia: Capistrano Beach, Dana Point', href: 'https://en.wikipedia.org/wiki/Capistrano_Beach,_Dana_Point,_California' },
      { label: 'Wikipedia: Dana Point (Capistrano Beach history)', href: 'https://en.wikipedia.org/wiki/Dana_Point,_California' },
    ],
  },
  {
    slug: 'san-juan-capistrano',
    kind: 'city',
    place: 'San Juan Capistrano, CA',
    published: false,
    name: 'San Juan Capistrano',
    updated: '2026-10-27',
    image: 'https://images.unsplash.com/photo-1577992798157-3fc368469168',
    imageAlt: 'Bell tower at Mission San Juan Capistrano',
    tagline: 'A historic mission town just inland, with California’s oldest neighborhood and a train station downtown.',
    summary:
      'San Juan Capistrano grew up around Mission San Juan Capistrano (founded 1776), with the historic Los Rios district, a walkable downtown, and an Amtrak and Metrolink station.',
    intro:
      "San Juan Capistrano grew up around Mission San Juan Capistrano, founded in 1776 by Father Junípero Serra as the seventh of California's Spanish missions. The city incorporated in 1961, covers 14.4 square miles, and had 35,253 residents at the 2020 census. The mission's Serra Chapel is the oldest building in California still in use, and the nearby Los Rios neighborhood is considered the oldest residential neighborhood in the state.",
    atAGlance: [
      { value: '1776', label: 'Mission founded' },
      { value: '1961', label: 'Incorporated' },
      { value: '35,253', label: 'Residents (2020 census)' },
      { value: '14.4 sq mi', label: 'Total area' },
      { value: '$1.41M', label: 'Median sale price' },
      { value: '98', label: 'Homes sold in September' },
    ],
    map: { bbox: [-117.687, 33.466, -117.611, 33.546], marker: [33.5016932, -117.6625509] },
    gallery: [
      { src: 'https://images.unsplash.com/photo-1706363009245-dd58066a6f18', alt: 'Mission bells at Mission San Juan Capistrano', caption: 'The mission bells' },
      { src: 'https://images.unsplash.com/photo-1533563997972-a04f420ffc2a', alt: 'Mission San Juan Capistrano grounds', caption: 'Mission San Juan Capistrano' },
    ],
    whyPeopleMove: [
      { icon: 'landmark', title: 'Mission San Juan Capistrano', text: 'Founded in 1776; its Serra Chapel is the oldest building in California still in use' },
      { icon: 'home', title: 'Los Rios Historic District', text: 'Considered the oldest residential neighborhood in California, with original adobes still standing' },
      { icon: 'flag', title: 'Swallows Day traditions', text: 'The annual Swallows Day Parade and Fiesta de las Golondrinas celebrate the swallows’ return' },
      { icon: 'train', title: 'Train downtown', text: 'Amtrak and Metrolink stop one block from the mission' },
      { icon: 'park', title: 'Small-town downtown', text: 'A historic, walkable center around the mission and Los Rios Street' },
      { icon: 'beach', title: 'Minutes from the coast', text: 'Borders Dana Point and San Clemente, a short drive to the beach' },
    ],
    homeTypes: [
      { icon: 'landmark', title: 'Historic homes', text: 'Adobe and board-and-batten structures in the Los Rios district near the mission' },
      { icon: 'home', title: 'Single-family neighborhoods', text: 'Neighborhoods spread across the city’s 14.4 square miles' },
      { icon: 'building', title: 'Condos & townhomes', text: 'Attached homes are also part of the mix' },
    ],
    market: {
      cards: [
        { value: '$1,410,828', label: 'Median sale price', detail: '3 months ending Sept 2026, +3.4% YoY', source: 'Redfin' },
        { value: '$666', label: 'Median price per sq ft', detail: '-2.3% vs. last year', source: 'Redfin' },
        { value: '98', label: 'Homes sold in September', detail: 'Up from 83 a year earlier', source: 'Redfin' },
      ],
      figures: [
        'Median sale price: $1,410,828 over the three months ending September 2026, up 3.4% from a year earlier (Redfin)',
        'Median days on market: 49, compared with 48 a year earlier (Redfin)',
        'Homes received 5 offers on average over the three months (Redfin)',
      ],
      note: 'Redfin describes the San Juan Capistrano market as somewhat competitive.',
    },
    costsToKnow: ['HOA dues and any special taxes vary by community; check the dues and the property tax bill for any specific home'],
    schools:
      'San Juan Capistrano is served by Capistrano Unified School District. Mission Basilica School (K-8) is a private school on the mission grounds. Always confirm the assigned public schools for a specific address with the district.',
    gettingAround: [
      'I-5 runs through the city',
      'Amtrak and Metrolink stop at the San Juan Capistrano station, one block from the mission',
    ],
    localTip: null,
    faqs: [
      { q: 'What is San Juan Capistrano known for?', a: 'Mission San Juan Capistrano (founded 1776), the Los Rios Historic District, and the annual Swallows Day Parade.' },
      { q: 'How much do homes cost in San Juan Capistrano?', a: 'Redfin reported a median sale price of $1,410,828 for the three months ending September 2026, up 3.4% from a year earlier.' },
      { q: 'Does San Juan Capistrano have a train station?', a: 'Yes. Amtrak and Metrolink both stop at the downtown station, one block from the mission.' },
    ],
    sources: [
      { label: 'Redfin: San Juan Capistrano housing market', href: 'https://www.redfin.com/city/17431/CA/San-Juan-Capistrano/housing-market' },
      { label: 'Wikipedia: San Juan Capistrano, California', href: 'https://en.wikipedia.org/wiki/San_Juan_Capistrano,_California' },
      { label: 'Wikipedia: Los Rios Historic District', href: 'https://en.wikipedia.org/wiki/Los_Rios_Street_Historic_District' },
    ],
  },
  {
    slug: 'laguna-niguel',
    kind: 'city',
    place: 'Laguna Niguel, CA',
    published: false,
    name: 'Laguna Niguel',
    updated: '2026-10-27',
    image: 'https://images.unsplash.com/photo-1694934035962-65b00f676bb4',
    imageAlt: 'Ocean view from a Laguna Niguel hillside trail',
    tagline: 'One of California’s first master-planned communities, with parks, trails, and canyon and ocean views.',
    summary:
      'Laguna Niguel is a master-planned city in the San Joaquin Hills, inland from Dana Point and Laguna Beach, known for its parks, public trails, and neighborhoods with city, canyon and ocean views.',
    intro:
      "Laguna Niguel sits in the San Joaquin Hills, just inland from Dana Point and Laguna Beach. It began in 1959 as one of California's first master-planned communities, with nearly a third of the planned land set aside for parks and open space, and it incorporated in 1989 as Orange County's 29th city. The city covers 14.8 square miles and had 64,355 residents at the 2020 census.",
    atAGlance: [
      { value: '64,355', label: 'Residents (2020 census)' },
      { value: '1959', label: 'Master plan began' },
      { value: '1989', label: 'Incorporated' },
      { value: '14.8 sq mi', label: 'Total area' },
      { value: '$1.37M', label: 'Median sale price' },
      { value: '179', label: 'Homes sold in September' },
    ],
    map: { bbox: [-117.74, 33.487, -117.673, 33.571], marker: [33.5225261, -117.7075526] },
    gallery: [],
    whyPeopleMove: [
      { icon: 'trees', title: 'Parks & trails', text: 'Nearly a third of the original plan was set aside for parks and open space' },
      { icon: 'park', title: 'Laguna Niguel Regional Park', text: 'A lake, open space, and the city’s annual 4th of July fireworks' },
      { icon: 'mountain', title: 'Wilderness next door', text: 'Borders the 4,500-acre Aliso and Wood Canyons Wilderness Park' },
      { icon: 'home', title: 'View neighborhoods', text: 'Hillside neighborhoods with city, canyon and ocean views' },
      { icon: 'train', title: 'Easy commuting', text: 'Two I-5 interchanges, plus the 73 toll road toward I-405' },
      { icon: 'beach', title: 'Close to the coast', text: 'Crown Valley Parkway runs from I-5 down to Pacific Coast Highway' },
    ],
    homeTypes: [
      { icon: 'home', title: 'View neighborhoods', text: 'Bear Brand Ranch, Ocean Ranch, Palmilla, Beacon Hill, Monarch Point and the Highlands, among others' },
      { icon: 'layers', title: 'Established neighborhoods', text: 'Rancho Niguel, Marina Hills, Niguel West, Kite Hill and more' },
      { icon: 'gate', title: 'Master-planned layout', text: 'Neighborhoods built around parks and open space since the 1960s' },
    ],
    market: {
      cards: [
        { value: '$1,370,847', label: 'Median sale price', detail: '3 months ending Sept 2026, -5.5% YoY', source: 'Redfin' },
        { value: '$733', label: 'Median price per sq ft', detail: '-3.9% vs. last year', source: 'Redfin' },
        { value: '45', label: 'Median days on market', detail: 'Down from 62 a year earlier', source: 'Redfin' },
      ],
      figures: [
        'Median sale price: $1,370,847 over the three months ending September 2026, down 5.5% from a year earlier (Redfin)',
        'Homes sold in September 2026: 179, up from 177 (Redfin)',
        'Homes received 2 offers on average over the three months (Redfin)',
      ],
      note: 'Redfin describes the Laguna Niguel market as somewhat competitive. Prices were down slightly from a year ago, while homes sold faster.',
    },
    costsToKnow: ['Most planned neighborhoods have HOA dues, and some have special taxes; check both for any specific home'],
    schools:
      'Laguna Niguel is served by Capistrano Unified School District. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'I-5 has two interchanges in the city',
      'The 73 San Joaquin Hills toll road links Laguna Niguel to I-405',
      'Crown Valley Parkway connects I-5 to Pacific Coast Highway',
    ],
    localTip: null,
    faqs: [
      { q: 'What is Laguna Niguel known for?', a: 'Its master-planned layout from 1959, its many parks and public trails, Laguna Niguel Regional Park, and hillside neighborhoods with canyon and ocean views.' },
      { q: 'How much do homes cost in Laguna Niguel?', a: 'Redfin reported a median sale price of $1,370,847 for the three months ending September 2026, down 5.5% from a year earlier.' },
      { q: 'Is Laguna Niguel on the beach?', a: 'No. It sits in the hills just inland, bordering Dana Point and Laguna Beach; Crown Valley Parkway runs down to Pacific Coast Highway.' },
    ],
    sources: [
      { label: 'Redfin: Laguna Niguel housing market', href: 'https://www.redfin.com/city/9965/CA/Laguna-Niguel/housing-market' },
      { label: 'Wikipedia: Laguna Niguel, California', href: 'https://en.wikipedia.org/wiki/Laguna_Niguel,_California' },
      { label: 'Wikipedia: Aliso and Wood Canyons Wilderness Park', href: 'https://en.wikipedia.org/wiki/Aliso_and_Wood_Canyons_Wilderness_Park' },
    ],
  },
  {
    slug: 'laguna-beach',
    kind: 'city',
    place: 'Laguna Beach, CA',
    published: false,
    name: 'Laguna Beach',
    updated: '2026-10-27',
    image: 'https://images.unsplash.com/photo-1558996923-e575015e76fb',
    imageAlt: 'Laguna Beach coastline and hillside homes',
    tagline: 'An art-colony beach town with 27 beaches and coves, protected hills, and its own school district.',
    summary:
      'Laguna Beach is a coastal arts town with 7 miles of coastline, 27 beaches and coves, state marine reserves, a dedicated greenbelt, and annual events like the Pageant of the Masters.',
    intro:
      "Laguna Beach was founded in 1887 and incorporated as a city in 1927, and it had 23,032 residents at the 2020 census. Plein-air painters arrived in the early 1900s and formed the Laguna Beach Art Association, and the town is still known for its art festivals. Its 7 miles of coastline include 27 beaches and coves, protected by state marine reserves, and it is the only Orange County city with a dedicated greenbelt in the hills behind it.",
    atAGlance: [
      { value: '23,032', label: 'Residents (2020 census)' },
      { value: '1927', label: 'Incorporated' },
      { value: '7 mi', label: 'Of coastline' },
      { value: '27', label: 'Beaches and coves' },
      { value: '7,000', label: 'Acres of wilderness park' },
      { value: '$3.29M', label: 'Median sale price' },
    ],
    map: { bbox: [-117.865, 33.443, -117.731, 33.61], marker: [33.5426975, -117.785366] },
    gallery: [
      { src: 'https://images.unsplash.com/photo-1495171081156-cc1209ddf6a0', alt: 'Laguna Beach coves from above at sunset', caption: 'The coves' },
      { src: 'https://images.unsplash.com/photo-1761835305808-5a00b0c7e515', alt: 'Sunset over a cliffside in Laguna Beach', caption: 'Sunset on the cliffs' },
      { src: 'https://images.unsplash.com/photo-1615470479605-cc37a627dc0e', alt: 'Laguna Beach shoreline and hillside at dusk', caption: 'Laguna Beach at dusk' },
    ],
    whyPeopleMove: [
      { icon: 'beach', title: '27 beaches & coves', text: 'Seven miles of coastline, protected by state marine reserves' },
      { icon: 'landmark', title: 'Art colony roots', text: 'The Festival of Arts, Pageant of the Masters and Sawdust Art Festival each year' },
      { icon: 'mountain', title: 'Protected hills', text: 'A dedicated greenbelt, including the 7,000-acre Laguna Coast Wilderness Park' },
      { icon: 'park', title: 'Crystal Cove next door', text: 'Crystal Cove State Park borders the city to the northwest' },
      { icon: 'flag', title: 'Its own school district', text: 'Laguna Beach Unified: one high school, one middle school, two elementary schools' },
      { icon: 'home', title: 'Small-town feel', text: 'Surrounding hills and limited highway access have kept the town compact' },
    ],
    homeTypes: [
      { icon: 'mountain', title: 'Hillside homes', text: 'Neighborhoods like Top of the World, where Temple Hill reaches 1,007 feet' },
      { icon: 'beach', title: 'Coastal homes', text: 'Homes near the beaches and coves along the 7-mile coastline' },
      { icon: 'gate', title: 'Nearby coastal enclaves', text: 'Emerald Bay, an unincorporated community, borders the city’s north coast' },
    ],
    market: {
      cards: [
        { value: '$3,285,935', label: 'Median sale price', detail: '3 months ending Sept 2026, +17.4% YoY', source: 'Redfin' },
        { value: '$1.62K', label: 'Median price per sq ft', detail: '-7.8% vs. last year', source: 'Redfin' },
        { value: '71', label: 'Median days on market', detail: 'Down from 103 a year earlier', source: 'Redfin' },
      ],
      figures: [
        'Median sale price: $3,285,935 over the three months ending September 2026, up 17.4% from a year earlier (Redfin)',
        'Homes sold in September 2026: 89, up from 84 (Redfin)',
        'Median days on market: 71, compared with 103 a year earlier (Redfin)',
      ],
      note: 'The median rose while price per square foot fell, which can happen when more large homes sell in a given period.',
    },
    costsToKnow: ['Some communities have HOA dues; check the dues and the property tax bill for any specific home'],
    schools:
      'Laguna Beach Unified School District serves the city, with Laguna Beach High School, Thurston Middle School, and El Morro and Top of the World elementary schools. Always confirm the assigned schools for a specific address with the district.',
    gettingAround: [
      'Pacific Coast Highway runs along the coast through town',
      'Borders Dana Point to the southeast and Laguna Niguel and Aliso Viejo to the east',
    ],
    localTip: null,
    faqs: [
      { q: 'What is Laguna Beach known for?', a: 'Its 27 beaches and coves, its art colony history and festivals like the Pageant of the Masters, and the protected hills of its greenbelt.' },
      { q: 'How much do homes cost in Laguna Beach?', a: 'Redfin reported a median sale price of $3,285,935 for the three months ending September 2026, up 17.4% from a year earlier.' },
      { q: 'What school district serves Laguna Beach?', a: 'Laguna Beach Unified School District, with one high school, one middle school and two elementary schools.' },
    ],
    sources: [
      { label: 'Redfin: Laguna Beach housing market', href: 'https://www.redfin.com/city/9948/CA/Laguna-Beach/housing-market' },
      { label: 'Wikipedia: Laguna Beach, California', href: 'https://en.wikipedia.org/wiki/Laguna_Beach,_California' },
    ],
  },
];

const showDrafts = process.env.VERCEL_ENV === 'preview';

export function getNeighborhoods() {
  return neighborhoods.filter((n) => n.published || showDrafts);
}

// San Clemente neighborhoods vs. nearby Orange County cities
export const isCity = (n) => n.kind === 'city';
export const placeName = (n) => n.place || (n.name.includes('San Clemente') ? n.name : `${n.name}, San Clemente`);

export function getNeighborhood(slug) {
  return getNeighborhoods().find((n) => n.slug === slug);
}
