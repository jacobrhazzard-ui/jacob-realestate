import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import { getNeighborhoods } from './neighborhoods';
import { getPublishedPosts, formatDate } from '../blog/posts';
import { JsonLd, SITE, agent, author, breadcrumbs } from '../jsonld';

export const metadata = {
  title: 'Best Neighborhoods in San Clemente, CA: A Local’s Guide',
  description:
    'A San Clemente native’s guide to the city’s neighborhoods: what each area is known for, the types of homes, current prices, HOA and Mello-Roos, and getting around.',
  alternates: { canonical: '/san-clemente-neighborhoods' },
};

export default function NeighborhoodsHub() {
  const list = getNeighborhoods();
  const posts = getPublishedPosts().filter((p) => (p.neighborhoods || []).length).slice(0, 3);
  const nameFor = Object.fromEntries(list.map((n) => [n.slug, n.name]));

  return (
    <main className="text-gray-900 bg-[#f1f0eb] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'CollectionPage',
            '@id': `${SITE}/san-clemente-neighborhoods#page`,
            name: 'Best Neighborhoods in San Clemente, CA',
            url: `${SITE}/san-clemente-neighborhoods`,
            author,
            publisher: agent,
            about: { '@type': 'City', name: 'San Clemente, CA' },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: list.map((n, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: `${n.name}, San Clemente`,
                url: `${SITE}/san-clemente-neighborhoods/${n.slug}`,
              })),
            },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'San Clemente Neighborhoods', path: '/san-clemente-neighborhoods' },
          ]),
        ]}
      />

      <section className="relative min-h-[60vh] bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/ameno2.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">A Local&apos;s Guide</p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">The Best Neighborhoods in San Clemente</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">
            From the Pier Bowl to the hills of Talega, here&apos;s what each part of town is really like, from someone who grew up here.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        <p>
          &ldquo;Best&rdquo; depends on what matters to you: walking to the beach, newer construction, a bigger yard, or trails out the back door. Each guide below covers what the area is known for, the types of homes, recent prices from published market reports, HOA and Mello-Roos, and getting around. New guides are added regularly, and each one links to my weekly market notes for that neighborhood.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {list.map((n) => (
            <Link key={n.slug} href={`/san-clemente-neighborhoods/${n.slug}`} className="group block bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${n.image}')` }} role="img" aria-label={n.imageAlt} />
              <div className="p-8 f2">
                <h2 className="text-2xl f1 mb-3 group-hover:underline">{n.name}</h2>
                <p className="text-gray-700 leading-relaxed">{n.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-center f2 text-gray-600">Neighborhood guides are coming soon.</p>
        )}
      </section>

      {posts.length > 0 && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl f1 font-light mb-8 text-center">Latest Neighborhood Spotlights</h2>
            <div className="space-y-4">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block bg-[#f1f0eb] p-6 hover:shadow-md transition f2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {formatDate(p.date)} &middot; {p.neighborhoods.map((s) => nameFor[s]).filter(Boolean).join(', ')}
                  </p>
                  <p className="text-xl f1">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Not Sure Which Area Fits?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            Tell me what you&apos;re looking for and I&apos;ll put together a short list of neighborhoods and homes worth seeing.
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
