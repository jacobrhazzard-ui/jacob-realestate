import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../footer';
import Navigation from '../../navbar';
import { getPublishedPosts, getPost, formatDate } from '../posts';
import { getNeighborhood, guideHref } from '../../san-clemente-neighborhoods/neighborhoods';
import Image from 'next/image';
import { Block, anchor } from '../blocks';
import { display, serif, sans, kicker, kickerSm } from '../fonts';
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
  const sections = p.body.filter((b) => b.type === 'h2').map((b) => b.text);
  const words = [p.summary, ...p.body.map((b) => b.text || '')].join(' ').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 230) + 2); // +2 for the charts
  const more = getPublishedPosts().filter((m) => m.slug !== p.slug).slice(0, 3);

  return (
    <main className={`${display.variable} text-[#14181c] bg-[#faf8f4]`}>
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
            image: `${SITE}${p.image || '/photos/san-clemente/pier-bowl-aerial-dusk.jpg'}`,
            author,
            publisher: agent,
            about: [{ '@type': 'City', name: 'San Clemente, CA' }, ...featured.map(placeFor)],
            ...(featured.length ? { mentions: featured.map((n) => ({ '@type': 'WebPage', name: `${n.name} Neighborhood Guide`, url: `${SITE}${guideHref(n)}` })) } : {}),
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Market Notes', path: '/blog' },
            { name: p.title, path: `/blog/${p.slug}` },
          ]),
        ]}
      />
      <div className="relative h-24 md:h-28 bg-[#0f1a21]">
        <Navigation />
      </div>

      {/* Nameplate */}
      <header className="border-b border-[#14181c] bg-[#faf8f4]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-8 pb-4 text-center">
          <Link href="/blog" className={`${display.className} block text-[42px] md:text-[64px] leading-none tracking-tight text-[#14181c]`}>
            Market Notes
          </Link>
          <div className={`${kicker} text-[#5b6168] mt-4 pt-3 border-t border-[#d8d2c6] flex flex-wrap justify-center gap-x-4 gap-y-1`}>
            <span>San Clemente &amp; South Orange County</span>
            <span aria-hidden="true" className="text-[#b9b2a4]">|</span>
            <span>{formatDate(p.date)}</span>
            <span aria-hidden="true" className="text-[#b9b2a4]">|</span>
            <span>Weekly</span>
          </div>
        </div>
      </header>

      {/* Headline */}
      <section className="max-w-[880px] mx-auto px-5 md:px-8 pt-12 md:pt-16 text-center">
        <p className={`${kicker} text-[#1f4e66] mb-5`}>
          <Link href="/blog" className="hover:underline">{p.category}</Link>
        </p>
        <h1 className={`${display.className} text-[34px] md:text-[54px] leading-[1.08] tracking-tight text-[#14181c] mb-6`}>{p.title}</h1>
        {p.excerpt && <p className={`${serif.className} italic text-[19px] md:text-[22px] leading-snug text-[#3c4248] max-w-[720px] mx-auto mb-8`}>{p.excerpt}</p>}
        <p className={`${sans.className} text-[13px] text-[#3c4248]`}>
          By <Link href="/about" className="font-semibold text-[#14181c] hover:underline">Jacob Hazzard</Link>, REALTOR&reg; &middot; Luxre Realty
        </p>
        <p className={`${sans.className} text-[12px] text-[#6b7178] mt-1`}>
          <time dateTime={p.date}>{formatDate(p.date)}</time> &middot; {minutes} min read
        </p>
      </section>

      {/* Lead photo */}
      <figure className="max-w-[1100px] mx-auto px-0 md:px-8 mt-10">
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#e7e2d8]">
          <Image src={p.image || '/photos/san-clemente/pier-bowl-aerial-dusk.jpg'} alt={p.imageAlt || ''} fill priority sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover" />
        </div>
        {p.imageAlt && <figcaption className={`${sans.className} text-[12px] text-[#6b7178] mt-2 px-5 md:px-0`}>{p.imageAlt}</figcaption>}
      </figure>

      {sections.length > 2 && (
        <nav aria-label="In this issue" className="sticky top-0 z-30 bg-[#faf8f4]/95 backdrop-blur border-y border-[#d8d2c6] mt-12">
          <div className={`max-w-[880px] mx-auto px-5 md:px-8 py-3 flex items-center gap-5 overflow-x-auto ${sans.className} text-[12px] uppercase tracking-[0.14em]`}>
            <span className="text-[#1f4e66] font-semibold whitespace-nowrap">In this issue</span>
            {sections.map((t) => (
              <a key={t} href={`#${anchor(t)}`} className="whitespace-nowrap text-[#3c4248] hover:text-[#14181c] border-b border-transparent hover:border-[#14181c]">{t}</a>
            ))}
          </div>
        </nav>
      )}

      <article className={`${serif.className} px-5 md:px-8 pt-12 pb-20 text-[#1e2328]`}>
        {p.summary && (
          <aside className="max-w-[680px] mx-auto mb-12 border-t-2 border-[#14181c] border-b border-b-[#d8d2c6] py-6">
            <p className={`${kicker} text-[#1f4e66] mb-3`}>The Brief</p>
            <p className={`${display.className} text-[22px] md:text-[25px] leading-snug text-[#14181c]`}>{p.summary}</p>
          </aside>
        )}
        {p.body.map((b, i) => <Block key={i} b={b} />)}

        <div className="max-w-[680px] mx-auto mt-16 pt-6 border-t border-[#14181c] flex gap-5 items-start">
          <div className={`${sans.className} text-[13px] leading-relaxed text-[#3c4248]`}>
            <p className="text-[#14181c] font-semibold">Jacob Hazzard</p>
            <p>REALTOR&reg; with Luxre Realty, born and raised in San Clemente. CA DRE# 02222037.</p>
            <p className="mt-2 text-[#6b7178]">Figures come from the named public sources linked under each chart. Market Notes never estimates a number.</p>
          </div>
        </div>

        {featured.length > 0 && (
          <div className="max-w-[680px] mx-auto mt-10">
            <p className={`${kicker} text-[#5b6168] mb-3`}>Neighborhoods in this issue</p>
            <ul className={`${sans.className} flex flex-wrap gap-3 text-[14px]`}>
              {featured.map((n) => (
                <li key={n.slug}>
                  <Link href={guideHref(n)} className="inline-block border border-[#14181c] px-4 py-2 hover:bg-[#14181c] hover:text-white transition">
                    {n.name} Guide
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/san-clemente-neighborhoods" className="inline-block px-4 py-2 underline underline-offset-2">All San Clemente neighborhoods</Link>
              </li>
            </ul>
          </div>
        )}
      </article>

      {more.length > 0 && (
        <section className="border-t border-[#14181c] bg-[#faf8f4]">
          <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-14">
            <p className={`${kicker} text-[#14181c] mb-6`}>More from Market Notes</p>
            <div className="grid md:grid-cols-3 gap-8">
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="group block">
                  {m.image && (
                    <div className="relative aspect-[3/2] mb-4 bg-[#e7e2d8]">
                      <Image src={m.image} alt={m.imageAlt || ''} fill sizes="(max-width: 768px) 100vw, 340px" className="object-cover" />
                    </div>
                  )}
                  <p className={`${kickerSm} text-[#1f4e66] mb-2`}>{formatDate(m.date)}</p>
                  <h3 className={`${display.className} text-[21px] leading-snug text-[#14181c] group-hover:underline underline-offset-4`}>{m.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0f1a21] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className={`${display.className} text-[32px] md:text-[42px] leading-tight mb-6`}>Curious What This Means for Your Home?</h2>
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
