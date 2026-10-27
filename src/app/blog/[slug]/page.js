import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../footer';
import Navigation from '../../navbar';
import { getPublishedPosts, getPost, formatDate } from '../posts';
import { getNeighborhood } from '../../san-clemente-neighborhoods/neighborhoods';
import { Block, anchor } from '../blocks';
import { JsonLd, SITE, agent, author, placeFor, breadcrumbs } from '../../jsonld';

export const dynamicParams = false;

export function generateStaticParams() {
  // Next needs at least one param for a static route; the placeholder 404s.
  const posts = getPublishedPosts();
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: '_none' }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: 'article',
      ...(p.image ? { images: [{ url: p.image }] } : {}),
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const featured = (p.neighborhoods || []).map(getNeighborhood).filter(Boolean);
  const url = `${SITE}/blog/${p.slug}`;

  return (
    <main className="text-gray-900 bg-[#faf8f4] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'BlogPosting',
            '@id': `${url}#post`,
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            dateModified: p.updated || p.date,
            url,
            mainEntityOfPage: url,
            image: `${SITE}${p.image || '/ameno2.jpeg'}`,
            author,
            publisher: agent,
            about: [{ '@type': 'City', name: 'San Clemente, CA' }, ...featured.map(placeFor)],
            ...(featured.length ? { mentions: featured.map((n) => ({ '@type': 'WebPage', name: `${n.name} Neighborhood Guide`, url: `${SITE}/san-clemente-neighborhoods/${n.slug}` })) } : {}),
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Market Notes', path: '/blog' },
            { name: p.title, path: `/blog/${p.slug}` },
          ]),
        ]}
      />
      <section
        className="relative min-h-[60vh] bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('${p.image || '/ameno2.jpeg'}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">
            <Link href="/blog" className="hover:underline">Market Notes</Link> / {p.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-light f1 tracking-tight mb-6">{p.title}</h1>
          <p className="f2 text-white/80">{formatDate(p.date)} &middot; Jacob Hazzard</p>
        </div>
      </section>

      {p.body.filter((b) => b.type === 'h2').length > 2 && (
        <nav aria-label="In this update" className="sticky top-0 z-30 bg-[#faf8f4]/95 backdrop-blur border-b border-gray-300">
          <div className="max-w-4xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto f2 text-sm">
            {p.body.filter((b) => b.type === 'h2').map((b) => (
              <a key={b.text} href={`#${anchor(b.text)}`} className="whitespace-nowrap px-4 py-2 bg-white shadow-sm hover:bg-gray-900 hover:text-white transition">{b.text}</a>
            ))}
          </div>
        </nav>
      )}

      <article className="max-w-4xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        {p.summary && (
          <div className="bg-white shadow-sm p-6 md:p-8 mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">This week in 30 seconds</p>
            <p className="f1 text-2xl text-gray-900 leading-snug">{p.summary}</p>
          </div>
        )}
        {p.body.map((b, i) => <Block key={i} b={b} />)}
        {featured.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Neighborhoods in this update</p>
            <ul className="flex flex-wrap gap-3">
              {featured.map((n) => (
                <li key={n.slug}>
                  <Link href={`/san-clemente-neighborhoods/${n.slug}`} className="inline-block bg-white px-4 py-2 shadow-sm hover:shadow-md text-base">
                    {n.name} Guide
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/san-clemente-neighborhoods" className="inline-block px-4 py-2 underline text-base">All San Clemente neighborhoods</Link>
              </li>
            </ul>
          </div>
        )}
      </article>

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Curious What This Means for Your Home?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            Every street is a little different. I&apos;m happy to put together a no-pressure report on your home or the neighborhoods you&apos;re watching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell#property-valuation" className="bg-white text-gray-900 px-8 py-4 f2 tracking-wide hover:bg-gray-200 transition">What&apos;s My Home Worth?</Link>
            <a href="tel:+19492919395" className="border border-white px-8 py-4 f2 tracking-wide hover:bg-white/10 transition">Call (949) 291-9395</a>
          </div>
          <p className="f2 text-sm text-white/60 mt-8">Jacob Hazzard, REALTOR® | CA DRE# 02222037 | Luxre Realty</p>
          <p className="f2 mt-6"><Link href="/blog" className="underline text-white/80">More market notes</Link></p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
