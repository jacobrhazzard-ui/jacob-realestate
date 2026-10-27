import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../footer';
import Navigation from '../../navbar';
import { getGuides, getGuide } from '../guides';
import { Block, anchor } from '../../blog/blocks';
import { formatDate } from '../../blog/posts';
import { JsonLd, SITE, agent, author, breadcrumbs } from '../../jsonld';

export const dynamicParams = false;

export function generateStaticParams() {
  const g = getGuides();
  return g.length ? g.map((x) => ({ slug: x.slug })) : [{ slug: '_none' }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: g.title, description: g.excerpt, type: 'article', images: [{ url: g.image }] },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${SITE}/guides/${g.slug}`;
  const h2s = g.body.filter((b) => b.type === 'h2');
  const others = getGuides().filter((x) => x.slug !== g.slug);

  return (
    <main className="text-gray-900 bg-[#faf8f4] font-sans">
      <JsonLd
        data={[
          {
            '@type': 'Article',
            '@id': `${url}#article`,
            headline: g.title,
            description: g.excerpt,
            dateModified: g.updated,
            url,
            mainEntityOfPage: url,
            image: g.image.startsWith('http') ? g.image : `${SITE}${g.image}`,
            author,
            publisher: agent,
            about: { '@type': 'City', name: 'San Clemente, CA' },
          },
          ...(g.faq?.length
            ? [{
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
              }]
            : []),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
            { name: g.title, path: `/guides/${g.slug}` },
          ]),
        ]}
      />

      <section className="relative min-h-[60vh] bg-cover bg-center flex flex-col" style={{ backgroundImage: `url('${g.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">
            <Link href="/guides" className="hover:underline">Guides</Link> / {g.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-light f1 tracking-tight mb-6">{g.title}</h1>
          <p className="f2 text-white/80">Updated {formatDate(g.updated)} &middot; Jacob Hazzard</p>
        </div>
      </section>

      {h2s.length > 2 && (
        <nav aria-label="In this guide" className="sticky top-0 z-30 bg-[#faf8f4]/95 backdrop-blur border-b border-gray-300">
          <div className="max-w-4xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto f2 text-sm">
            {h2s.map((b) => (
              <a key={b.text} href={`#${anchor(b.text)}`} className="whitespace-nowrap px-4 py-2 bg-white shadow-sm hover:bg-gray-900 hover:text-white transition">{b.text}</a>
            ))}
            {g.faq?.length > 0 && <a href="#faq" className="whitespace-nowrap px-4 py-2 bg-white shadow-sm hover:bg-gray-900 hover:text-white transition">FAQ</a>}
          </div>
        </nav>
      )}

      <article className="max-w-4xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        {g.summary && (
          <div className="bg-white shadow-sm p-6 md:p-8 mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">The short version</p>
            <p className="f1 text-2xl text-gray-900 leading-snug">{g.summary}</p>
          </div>
        )}
        {g.body.map((b, i) => <Block key={i} b={b} />)}

        {g.links?.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">
            {g.links.map((l) => (
              <Link key={l.href} href={l.href} className="inline-block bg-white px-5 py-3 shadow-sm hover:shadow-md text-base">{l.label} &rarr;</Link>
            ))}
          </div>
        )}

        {g.faq?.length > 0 && (
          <section id="faq" className="mt-16 scroll-mt-20">
            <h2 className="text-3xl f1 font-light mb-6 text-gray-900">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-300 border-y border-gray-300">
              {g.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none flex justify-between gap-4 f1 text-xl text-gray-900">
                    {f.q}
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-base text-gray-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      {others.length > 0 && (
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 f2 mb-6 text-center">More guides</p>
            <div className="grid md:grid-cols-3 gap-6">
              {others.slice(0, 3).map((o) => (
                <Link key={o.slug} href={`/guides/${o.slug}`} className="group block border border-gray-200 hover:border-gray-900 transition p-6">
                  <p className="f2 text-xs uppercase tracking-widest text-gray-500 mb-2">{o.category}</p>
                  <p className="f1 text-xl group-hover:underline">{o.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Have a Question About Your Move?</h2>
          <p className="f2 text-lg text-white/80 mb-10">No pressure, just straight answers from someone who grew up here.</p>
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
