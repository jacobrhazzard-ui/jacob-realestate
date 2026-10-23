import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../footer';
import Navigation from '../../navbar';
import { getNeighborhoods, getNeighborhood } from '../neighborhoods';
import { getPostsForNeighborhood, formatDate } from '../../blog/posts';
import { JsonLd, SITE, agent, author, placeFor, breadcrumbs } from '../../jsonld';

export const dynamicParams = false;

export function generateStaticParams() {
  const list = getNeighborhoods();
  return list.length ? list.map((n) => ({ neighborhood: n.slug })) : [{ neighborhood: '_none' }];
}

// The guide counts as updated whenever a newer blog post features it.
function lastUpdated(n) {
  const latestPost = getPostsForNeighborhood(n.slug)[0];
  return latestPost && latestPost.date > n.updated ? latestPost.date : n.updated;
}

export async function generateMetadata({ params }) {
  const { neighborhood } = await params;
  const n = getNeighborhood(neighborhood);
  if (!n) return {};
  const title = `${n.name}, San Clemente: Homes, Prices & Neighborhood Guide`;
  return {
    title,
    description: n.summary,
    alternates: { canonical: `/san-clemente-neighborhoods/${n.slug}` },
    openGraph: { title, description: n.summary, type: 'article', images: [{ url: n.image }] },
  };
}

function List({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

export default async function NeighborhoodGuide({ params }) {
  const { neighborhood } = await params;
  const n = getNeighborhood(neighborhood);
  if (!n) notFound();
  const posts = getPostsForNeighborhood(n.slug);
  const updated = lastUpdated(n);
  const others = getNeighborhoods().filter((o) => o.slug !== n.slug);
  const url = `${SITE}/san-clemente-neighborhoods/${n.slug}`;

  return (
    <main className="text-gray-900 bg-[#f1f0eb] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'Article',
            '@id': `${url}#guide`,
            headline: `${n.name}, San Clemente Neighborhood Guide`,
            description: n.summary,
            dateModified: updated,
            url,
            mainEntityOfPage: url,
            image: `${SITE}${n.image}`,
            author,
            publisher: agent,
            about: placeFor(n),
            ...(posts.length
              ? { subjectOf: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date })) }
              : {}),
          },
          { ...placeFor(n), description: n.summary },
          {
            '@type': 'FAQPage',
            mainEntity: n.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'San Clemente Neighborhoods', path: '/san-clemente-neighborhoods' },
            { name: n.name, path: `/san-clemente-neighborhoods/${n.slug}` },
          ]),
        ]}
      />

      <section className="relative min-h-[70vh] bg-cover bg-center flex flex-col" style={{ backgroundImage: `url('${n.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">
            <Link href="/san-clemente-neighborhoods" className="hover:underline">San Clemente Neighborhoods</Link> / {n.name}
          </p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">Living in {n.name}, San Clemente</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">{n.tagline}</p>
          <p className="f2 text-sm text-white/60 mt-6">Updated {formatDate(updated)} &middot; Jacob Hazzard, Luxre Realty</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        <h2 className="text-3xl f1 font-light mb-6">About {n.name}</h2>
        <p className="mb-10">{n.intro}</p>
        <h2 className="text-3xl f1 font-light mb-6">Why People Move to {n.name}</h2>
        <List items={n.whyPeopleMove} />
        {n.localTip && (
          <p className="mt-8 text-gray-700 border-l-4 border-gray-400 pl-4 italic">Local tip: {n.localTip}</p>
        )}
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto f2 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl f1 font-light mb-6">Types of Homes</h2>
          <List items={n.homeTypes} />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto f2 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl f1 font-light mb-6">{n.name} Home Prices</h2>
          <List items={n.market.figures} />
          <p className="text-sm text-gray-500 mt-6">{n.market.note}</p>
          <Link href="/sell#property-valuation" className="inline-block mt-6 underline">
            Want a valuation for a specific {n.name} home?
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl f1 font-light mb-6">HOA &amp; Taxes</h2>
            <List items={n.costsToKnow} />
          </div>
          <div>
            <h2 className="text-3xl f1 font-light mb-6">Getting Around</h2>
            <List items={n.gettingAround} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto f2 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl f1 font-light mb-6">Schools</h2>
          <p>{n.schools}</p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl f1 font-light mb-8 text-center">Latest Market Notes on {n.name}</h2>
            <div className="space-y-4">
              {posts.slice(0, 6).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block bg-[#f1f0eb] p-6 hover:shadow-md transition f2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{formatDate(p.date)}</p>
                  <p className="text-xl f1 mb-1">{p.title}</p>
                  <p className="text-gray-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8 f2"><Link href="/blog" className="underline">All market notes</Link></p>
          </div>
        </section>
      )}

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-8">{n.name} FAQ</h2>
          <div className="space-y-6">
            {n.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl f1 mb-2">{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-sm text-gray-500">
            <p className="mb-2">Sources:</p>
            <ul className="space-y-1">
              {n.sources.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl f1 font-light mb-8 text-center">More San Clemente Neighborhoods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link key={o.slug} href={`/san-clemente-neighborhoods/${o.slug}`} className="block bg-[#f1f0eb] p-6 hover:shadow-md transition">
                  <h3 className="text-xl f1 mb-2">{o.name}</h3>
                  <p className="f2 text-sm text-gray-600">{o.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Thinking About {n.name}?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            I grew up in San Clemente and am happy to walk you through any home or street in {n.name}, no pressure.
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
