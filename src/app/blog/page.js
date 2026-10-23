import PhotoRotator from '../photoRotator';
import { sanClementePhotos } from '../photos';
import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import { getPublishedPosts, formatDate } from './posts';

export const metadata = {
  title: 'San Clemente & South OC Market Updates',
  description:
    'Weekly San Clemente and South Orange County real estate market updates and local highlights from Jacob Hazzard, Luxre Realty.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getPublishedPosts();

  return (
    <main className="text-gray-900 bg-[#f1f0eb] font-sans">
      <section className="relative min-h-[60vh] flex flex-col">
        <PhotoRotator photos={sanClementePhotos} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
          <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">The Weekly Update</p>
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-6">San Clemente &amp; South OC Market Notes</h1>
          <p className="text-lg md:text-xl f2 font-light text-white/85">
            What&apos;s moving in the local market, plus a little of what makes this place home.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-center f2 text-gray-700 mb-10">
          Looking for a specific area? See the{' '}
          <Link href="/san-clemente-neighborhoods" className="underline">San Clemente neighborhood guides</Link>.
        </p>
        {posts.length === 0 ? (
          <div className="bg-white p-10 shadow-sm text-center f2">
            <h2 className="text-2xl f1 font-light mb-4">The first update is on its way</h2>
            <p className="text-gray-700 mb-6">
              New market updates post weekly. Want them in your inbox, or a custom report for your neighborhood now?
            </p>
            <Link href="/contact" className="inline-block bg-gray-900 text-white px-8 py-4 tracking-wide hover:bg-gray-700 transition">
              Get In Touch
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {p.image && (
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{ backgroundImage: `url('${p.image}')` }}
                    role="img"
                    aria-label={p.imageAlt || p.title}
                  />
                )}
                <div className="p-8 f2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    {p.category} &middot; {formatDate(p.date)}
                  </p>
                  <h2 className="text-2xl f1 mb-3 group-hover:underline">{p.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
