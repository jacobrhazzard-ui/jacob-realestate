import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';

export const metadata = {
  title: 'Orange County Relocation Guide',
  description:
    "Moving to Orange County? A local's guide to OC neighborhoods, schools, commutes, and homeownership costs, from San Clemente native Jacob Hazzard of Luxre Realty.",
  alternates: { canonical: '/oc-relocation-guide' },
};

const regions = [
  { name: 'South County', places: 'San Clemente, Dana Point, San Juan Capistrano, Laguna Niguel, Mission Viejo, Ladera Ranch, Rancho Mission Viejo', vibe: 'Beach towns, master-planned communities, and a slower, outdoorsy pace. My home turf.' },
  { name: 'Coastal OC', places: 'Laguna Beach, Newport Beach, Corona del Mar, Huntington Beach', vibe: 'Iconic coastline, harbors, art and dining. Premium pricing for the ocean lifestyle.' },
  { name: 'Central OC', places: 'Irvine, Tustin, Costa Mesa, Lake Forest', vibe: 'The job hub. Newer neighborhoods, highly rated schools, and shorter commutes.' },
  { name: 'North County', places: 'Yorba Linda, Fullerton, Orange, Anaheim Hills', vibe: 'More space for the money, established neighborhoods, and easier access to LA.' },
];

const neighborhoods = [
  { name: 'San Clemente', best: 'Surfers, families, and anyone who wants a true beach-town feel', about: 'The "Spanish Village by the Sea." White walls, red tile roofs, a walkable downtown on Avenida Del Mar, and world-class surf at Trestles. Neighborhoods range from walk-to-the-pier cottages near T-Street to newer master-planned areas like Talega and Forster Ranch with pools, parks, and trails.', tip: 'West of the freeway puts you near the beach and downtown. East of the freeway generally means newer homes, larger lots, and community amenities.' },
  { name: 'Dana Point', best: 'Boaters, beach lovers, and buyers seeking luxury or coastal condos', about: 'Built around Dana Point Harbor and Doheny State Beach, with famous whale watching. Capistrano Beach offers a laid-back, neighborly feel, while Monarch Beach and the Strand are home to some of the most prestigious oceanfront real estate in Southern California.', tip: 'The harbor has been going through a major revitalization, so expect new shops and dining along the water.' },
  { name: 'San Juan Capistrano', best: 'Horse owners, history lovers, and buyers who want more land', about: 'Home to the historic Mission San Juan Capistrano and the Los Rios Historic District, one of the oldest neighborhoods in California. Larger lots, equestrian properties, and a charming small-town downtown with a train station.', tip: 'Ask me about equestrian-zoned areas if you want room for horses or a bigger yard.' },
  { name: 'Rancho Mission Viejo & Ladera Ranch', best: 'Families who want newer homes and resort-style amenities', about: 'Two of OC\'s most popular master-planned communities. Ladera Ranch is established and walkable with parks and pools in every neighborhood. Rancho Mission Viejo\'s villages (Sendero, Esencia, and Rienda) offer brand-new construction and include 55+ options.', tip: 'Newer communities often carry Mello-Roos taxes and HOA dues, so factor those into your monthly budget.' },
  { name: 'Laguna Niguel & Mission Viejo', best: 'Families who want great value, parks, and suburban convenience', about: 'Quiet, well-kept suburbs with plenty of parks and trails. Mission Viejo is known for its private resident lake, and Laguna Niguel sits just minutes from the coast. Both offer easy freeway access.', tip: 'Ocean-view pockets of Laguna Niguel offer coastal views at a lower price point than the beach cities.' },
  { name: 'Laguna Beach', best: 'Artists, creatives, and buyers who want a one-of-a-kind coastal village', about: 'Dramatic coves, tide pools, galleries, and the famous Festival of Arts and Pageant of the Masters. Homes range from historic cottages to architectural estates on the hillsides.', tip: 'Summer traffic is real. Many locals plan errands and beach days around it.' },
  { name: 'Newport Beach', best: 'Buyers who want the luxury coastal lifestyle and boating', about: 'Balboa Island, the Peninsula, Corona del Mar, and Newport Coast. World-class dining and shopping at Fashion Island, a large harbor, and some of the highest-end real estate in the country.', tip: 'Each area of Newport has a completely different personality. We should tour a few before you decide.' },
  { name: 'Irvine', best: 'Professionals and families who prioritize schools and a short commute', about: 'One of the largest master-planned cities in the U.S. It\'s home to UC Irvine, the Irvine Spectrum, and many of OC\'s major employers, with highly rated public schools and a reputation for safety.', tip: 'Newer Irvine villages commonly have Mello-Roos and HOA fees. I\'ll help you compare the total monthly cost, not just the price.' },
  { name: 'Huntington Beach', best: 'Beach lovers who want more space and a classic SoCal vibe', about: '"Surf City USA," with miles of wide sandy beaches, the pier, and a wide range of neighborhoods. It\'s also a quicker drive to Long Beach and LA than South County.', tip: 'Neighborhoods close to the water feel very different from inland HB. Location within the city matters a lot here.' },
];

const schools = [
  ['Capistrano Unified', 'San Clemente, Dana Point, San Juan Capistrano, Laguna Niguel, Ladera Ranch, Rancho Mission Viejo, and parts of Mission Viejo'],
  ['Saddleback Valley Unified', 'Most of Mission Viejo, Lake Forest, Laguna Hills, and Rancho Santa Margarita'],
  ['Irvine Unified', 'Irvine'],
  ['Laguna Beach Unified', 'Laguna Beach'],
  ['Newport-Mesa Unified', 'Newport Beach and Costa Mesa'],
  ['Huntington Beach City & Union High', 'Huntington Beach'],
];

const checklist = [
  'Get pre-approved with a local lender who knows Orange County condos, HOAs, and jumbo loans.',
  'Pick 2–3 areas that fit your lifestyle and commute, then tour them on a weekday and a weekend.',
  'Check school boundaries by exact address. They do not always follow city lines.',
  'Budget for the full monthly cost: mortgage, property tax, Mello-Roos, HOA dues, and insurance.',
  'Get homeowners insurance quotes early, especially for homes near open space or hillsides.',
  'Line up utilities and services: SDG&E serves much of South County, and SCE serves most of the rest of OC.',
  'Register your vehicles with the California DMV and update your driver\'s license after the move.',
];

export default function RelocationGuide() {
  return (
    <main className="text-gray-900 bg-[#f1f0eb] font-sans">
      <section className="relative min-h-[70vh] bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/cordoba1.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">Free Guide</p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">The Orange County Relocation Guide</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">
            Everything you need to know about moving to OC, from a local who was born and raised in San Clemente.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        <h2 className="text-3xl f1 font-light mb-6">Welcome to Orange County</h2>
        <p className="mb-4">
          Hi, I&apos;m Jacob Hazzard. I grew up in San Clemente, and I help families buy and sell homes across Orange County. People move here for the weather, the beaches, the schools, and the lifestyle. But OC is really a collection of very different communities, and the right one depends on how you want to live.
        </p>
        <p>
          This guide gives you the lay of the land: the regions, the neighborhoods, schools, getting around, and the costs that surprise most newcomers. When you&apos;re ready for current prices and on-the-ground advice, I&apos;m one call away.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-10 text-center">Know the Map</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div key={r.name} className="border border-gray-200 p-6">
                <h3 className="text-xl f1 mb-2">{r.name}</h3>
                <p className="text-sm text-gray-500 f2 mb-3">{r.places}</p>
                <p className="f2 text-gray-800">{r.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-3 text-center">Neighborhood Guide</h2>
          <p className="text-center f2 text-gray-600 mb-10">With a local&apos;s tip for each one.</p>
          <div className="space-y-8">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl f1 mb-1">{n.name}</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500 f2 mb-4">Best for: {n.best}</p>
                <p className="f2 text-gray-800 mb-4 leading-relaxed">{n.about}</p>
                <p className="f2 text-gray-700 border-l-4 border-gray-400 pl-4 italic">Local tip: {n.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-6 text-center">Schools</h2>
          <p className="f2 text-gray-700 mb-8 text-center">Orange County is known for strong public schools. These are the main districts by area:</p>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {schools.map(([d, a]) => (
              <div key={d} className="py-4 grid md:grid-cols-3 gap-2">
                <div className="f1 font-medium">{d}</div>
                <div className="md:col-span-2 f2 text-gray-700">{a}</div>
              </div>
            ))}
          </div>
          <p className="f2 text-sm text-gray-500 mt-6">Boundaries can split neighborhoods, so always confirm the assigned schools for a specific address with the district before you buy.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-6 text-center">Getting Around</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Freeways:</strong> I-5 and I-405 are the main north–south routes. The 73, 241, and 261 toll roads can save serious time at rush hour.</li>
            <li><strong>Airports:</strong> John Wayne Airport (SNA) in Santa Ana is the local favorite. LAX, Long Beach, and San Diego are also within driving distance.</li>
            <li><strong>Train:</strong> Metrolink and Amtrak&apos;s Pacific Surfliner stop in Irvine and San Juan Capistrano. The coastal line through San Clemente has had periodic closures, so check current schedules.</li>
            <li><strong>From San Clemente:</strong> roughly 20–25 miles to Irvine, about 30 miles to John Wayne Airport, and about 60 miles to both San Diego and downtown LA. Drive times depend heavily on traffic.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-6 text-center">Costs That Surprise Newcomers</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li><strong>Property tax (Prop 13):</strong> Your home is assessed at the purchase price. The base rate is 1%, plus any local voter-approved bonds and assessments, and annual increases in assessed value are capped at 2%.</li>
            <li><strong>Mello-Roos:</strong> Many newer communities carry a special tax that funds local infrastructure. It shows up on your property tax bill and can be significant, so always ask.</li>
            <li><strong>HOA dues:</strong> Common in condos and master-planned neighborhoods. They often cover pools, parks, and landscaping. Review the HOA documents and reserves before you commit.</li>
            <li><strong>Homeowners insurance:</strong> Wildfire risk has made coverage harder to get in some areas. Get quotes early in your search, not after you&apos;re in escrow.</li>
            <li><strong>Utilities:</strong> Electricity and water rates vary by provider and city. Budget a little higher for summer cooling in inland areas.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-6 text-center">My San Clemente Favorites</h2>
          <p className="mb-6 text-center">A few spots I&apos;d show any friend moving to town:</p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6">
            <li>Sunset walk on the San Clemente Pier</li>
            <li>Surfing (or watching the pros) at Trestles</li>
            <li>Morning coffee and shops on Avenida Del Mar</li>
            <li>The Beach Trail from North Beach to Calafia</li>
            <li>Casa Romantica Cultural Center &amp; Gardens</li>
            <li>A swim at the Ole Hanson Beach Club</li>
            <li>Whale watching out of Dana Point Harbor</li>
            <li>Historic Mission San Juan Capistrano</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-8 text-center">Your Moving Checklist</h2>
          <ol className="space-y-4 f2 text-gray-800">
            {checklist.map((c, i) => (
              <li key={i} className="flex gap-4">
                <span className="f1 text-xl text-gray-400 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Want Today&apos;s Numbers?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            Prices and inventory change week to week. Tell me where you&apos;re moving from and what you&apos;re looking for, and I&apos;ll send you a custom report on the neighborhoods that fit, with current prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 f2 tracking-wide hover:bg-gray-200 transition">Get My Custom Report</Link>
            <a href="tel:+19492919395" className="border border-white px-8 py-4 f2 tracking-wide hover:bg-white/10 transition">Call (949) 291-9395</a>
          </div>
          <p className="f2 text-sm text-white/60 mt-8">Jacob Hazzard, REALTOR® | CA DRE# 02222037 | Luxre Realty</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
