import Link from 'next/link';
import PhotoRotator from '../../photoRotator';
import { notFound } from 'next/navigation';
import Footer from '../../footer';
import Navigation from '../../navbar';
import { regions, getRegion } from '../regions';

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  return {
    title: `${r.name} Relocation Guide`,
    description: `Moving to ${r.name}? A local's guide to ${r.places}: neighborhoods, schools, commutes, and costs, from Jacob Hazzard of Luxre Realty.`,
    alternates: { canonical: `/oc-relocation-guide/${r.slug}` },
  };
}

export default async function RegionGuide({ params }) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();
  const others = regions.filter((o) => o.slug !== r.slug);

  return (
    <main className="text-gray-900 bg-[#f1f0eb] font-sans">
      <section className="relative min-h-[70vh] flex flex-col">
        <PhotoRotator photos={r.photos && r.photos.length ? r.photos : [{ src: r.image, alt: `${r.name}, Orange County` }]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">
            <Link href="/oc-relocation-guide" className="hover:underline">OC Relocation Guide</Link> / {r.short}
          </p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">{r.name} Relocation Guide</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">{r.tagline}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 f2 text-lg leading-relaxed text-gray-800">
        <h2 className="text-3xl f1 font-light mb-6">Welcome to {r.short}</h2>
        <p className="mb-6">{r.intro}</p>
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">Great fit for</p>
        <ul className="list-disc pl-6 space-y-1">
          {r.bestFor.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p className="text-sm text-gray-500 mt-6">Covers: {r.places}</p>
      </section>

      <section className="py-4 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl f1 font-light mb-3 text-center">Cities &amp; Neighborhoods</h2>
          <p className="text-center f2 text-gray-600 mb-10">With a local&apos;s tip for each one.</p>
          <div className="space-y-8">
            {r.cities.map((c) => (
              <div key={c.name} className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl f1 mb-4">{c.name}</h3>
                <p className="f2 text-gray-800 mb-4 leading-relaxed">{c.about}</p>
                <p className="f2 text-gray-700 border-l-4 border-gray-400 pl-4 italic">Local tip: {c.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-6 text-center">Schools</h2>
          <p className="mb-4">{r.schools}</p>
          <p className="text-sm text-gray-500">Boundaries don&apos;t always follow city lines, so always confirm the assigned schools for a specific address with the district before you buy.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl f1 font-light mb-6">Getting Around</h2>
            <ul className="space-y-3 list-disc pl-6">
              {r.gettingAround.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl f1 font-light mb-6">Good to Know</h2>
            <ul className="space-y-3 list-disc pl-6">
              {r.goodToKnow.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto f2 text-gray-800 leading-relaxed">
          <h2 className="text-3xl f1 font-light mb-6 text-center">Local Favorites</h2>
          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6">
            {r.favorites.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl f1 font-light mb-8 text-center">Explore Other Parts of OC</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} href={`/oc-relocation-guide/${o.slug}`} className="block bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl f1 mb-2">{o.name}</h3>
                <p className="f2 text-sm text-gray-600">{o.tagline}</p>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 f2">
            <Link href="/oc-relocation-guide" className="underline">Back to the full OC Relocation Guide</Link>
          </p>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl f1 font-light mb-6">Want Today&apos;s Numbers for {r.short}?</h2>
          <p className="f2 text-lg text-white/80 mb-10">
            Prices and inventory change week to week. Tell me what you&apos;re looking for, and I&apos;ll send you a custom report on the {r.short} neighborhoods that fit, with current prices.
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
