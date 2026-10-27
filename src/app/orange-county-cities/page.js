import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import PhotoRotator from '../photoRotator';
import GuideGrid from '../san-clemente-neighborhoods/guideGrid';
import { getCities, guideHref, placeName } from '../san-clemente-neighborhoods/neighborhoods';
import { JsonLd, SITE, agent, author, breadcrumbs } from '../jsonld';

export const metadata = {
  title: 'Orange County Cities Near San Clemente: Area Guides',
  description:
    'Local guides to the Orange County cities next to San Clemente: Dana Point, Capistrano Beach, San Juan Capistrano, Laguna Niguel and Laguna Beach. What each is known for, home prices, schools and getting around.',
  alternates: { canonical: '/orange-county-cities' },
};

export default function CitiesHub() {
  const cities = getCities();
  const photos = cities.map((c) => ({ src: c.image, alt: c.imageAlt }));

  return (
    <main className="text-gray-900 bg-[#faf8f4] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'CollectionPage',
            '@id': `${SITE}/orange-county-cities#page`,
            name: 'Orange County Cities Near San Clemente',
            url: `${SITE}/orange-county-cities`,
            author,
            publisher: agent,
            about: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: cities.map((n, i) => ({ '@type': 'ListItem', position: i + 1, name: placeName(n), url: `${SITE}${guideHref(n)}` })),
            },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Orange County Cities', path: '/orange-county-cities' },
          ]),
        ]}
      />

      <section className="relative min-h-[60vh] flex flex-col">
        {photos.length > 0 ? <PhotoRotator photos={photos} /> : <div className="absolute inset-0 bg-gray-900" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">South Orange County</p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">Orange County Cities Near San Clemente</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">
            Harbor towns, mission history, canyon trails and art-colony coves, all within a short drive of where I grew up.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        <p>
          Each city has its own feel. These guides cover what each one is known for, the types of homes, recent prices from published market reports, schools and getting around, and they&apos;re updated alongside my weekly market notes. More cities, including inland Orange County, are on the way.
        </p>
      </section>

      <section className="px-6 pb-16">
        <GuideGrid items={cities} />
        {cities.length === 0 && <p className="text-center f2 text-gray-600">City guides are coming soon.</p>}
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/san-clemente-neighborhoods" className="group block bg-gray-900 text-white p-8 hover:bg-gray-800 transition">
            <p className="f2 text-xs uppercase tracking-widest text-white/60 mb-2">Prefer San Clemente?</p>
            <p className="f1 text-2xl font-light group-hover:underline">San Clemente neighborhood guides &rarr;</p>
          </Link>
          <Link href="/oc-relocation-guide" className="group block bg-white shadow-sm p-8 hover:shadow-md transition">
            <p className="f2 text-xs uppercase tracking-widest text-gray-500 mb-2">Moving to Orange County?</p>
            <p className="f1 text-2xl font-light group-hover:underline">The OC Relocation Guide &rarr;</p>
          </Link>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Not Sure Which City Fits?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            Tell me what matters most, like the beach, schools, space or a shorter commute, and I&apos;ll help you narrow it down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 f2 tracking-wide hover:bg-gray-200 transition">Get In Touch</Link>
            <a href="tel:+19492919395" className="border border-white px-8 py-4 f2 tracking-wide hover:bg-white/10 transition">Call (949) 291-9395</a>
          </div>
          <p className="f2 text-sm text-white/60 mt-8">Jacob Hazzard, REALTOR® | CA DRE# 02222037 | Luxre Realty</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
