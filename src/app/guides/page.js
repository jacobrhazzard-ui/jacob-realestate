import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import { getGuides } from './guides';
import { JsonLd, SITE, agent, breadcrumbs } from '../jsonld';

export const metadata = {
  title: 'San Clemente Real Estate Guides for Buyers and Sellers',
  description:
    "Straight answers for buying, selling and living in San Clemente: seller's and buyer's guides, Dana Point vs. San Clemente, and the real cost of living, from local REALTOR® Jacob Hazzard.",
  alternates: { canonical: '/guides' },
};

export default function GuidesHub() {
  const guides = getGuides();
  return (
    <main className="text-gray-900 bg-[#faf8f4] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'CollectionPage',
            '@id': `${SITE}/guides#page`,
            name: 'San Clemente Real Estate Guides',
            url: `${SITE}/guides`,
            publisher: agent,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: `${SITE}/guides/${g.slug}` })),
            },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
          ]),
        ]}
      />
      <section className="relative min-h-[50vh] bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/photos/san-clemente/pier-bowl-aerial-golden-hour.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-16 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">Straight Answers</p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-4">San Clemente Real Estate Guides</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">Buying, selling and living here, explained by a local.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group block bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${g.image}')` }} />
              <div className="p-6">
                <p className="f2 text-xs uppercase tracking-widest text-gray-500 mb-2">{g.category}</p>
                <h2 className="f1 text-2xl mb-2 group-hover:underline">{g.title}</h2>
                <p className="f2 text-base text-gray-600">{g.excerpt}</p>
              </div>
            </Link>
          ))}
          {guides.length === 0 && <p className="text-center f2 text-gray-600 md:col-span-2">Guides are coming soon.</p>}
        </div>
      </section>

      <Footer />
    </main>
  );
}
