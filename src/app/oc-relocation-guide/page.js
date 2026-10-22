import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import { regions } from './regions';

export const metadata = {
  title: 'Orange County Relocation Guide',
  description:
    "Moving to Orange County? A local's guide to OC neighborhoods, schools, commutes, and homeownership costs, from San Clemente native Jacob Hazzard of Luxre Realty.",
  alternates: { canonical: '/oc-relocation-guide' },
};

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
          This guide gives you the lay of the land: the four regions, schools, getting around, and the costs that surprise most newcomers. When you&apos;re ready for current prices and on-the-ground advice, I&apos;m one call away.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-3 text-center">Choose Your Region</h2>
          <p className="text-center f2 text-gray-600 mb-10">Orange County breaks into four very different areas. Each has its own guide with cities, local tips, schools, and commutes.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <Link key={r.slug} href={`/oc-relocation-guide/${r.slug}`} className="group block border border-gray-200 hover:border-gray-900 transition">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${r.image}')` }} />
                <div className="p-6">
                  <h3 className="text-2xl f1 mb-2">{r.name}</h3>
                  <p className="f2 text-gray-800 mb-3">{r.tagline}</p>
                  <p className="text-sm text-gray-500 f2 mb-4">{r.places}</p>
                  <span className="f2 text-sm uppercase tracking-widest underline underline-offset-4">Read the {r.short} guide &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
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

      <section className="bg-white py-16 px-6">
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

      <section className="py-16 px-6">
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
