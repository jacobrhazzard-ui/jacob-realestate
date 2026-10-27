import { JsonLd } from './jsonld';
import ReviewQuote from './reviewQuote';
import VideoHero from './home/videoHero';
import SalesCarousel from './home/salesCarousel';
import Newsletter from './home/newsletter';
import Reveal from './reveal';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer';
import LuxreStats from './luxreStats';
import { getMillionPlusSales } from './listingsData';
import { getPublishedPosts, formatDate } from './blog/posts';

export const metadata = {
  title: { absolute: "San Clemente Realtor | Jacob Hazzard, Luxre Realty | Orange County Real Estate" },
  description: "San Clemente-born REALTOR® Jacob Hazzard of Luxre Realty helps buyers, sellers, and families relocating across San Clemente and Orange County. Free home valuations and local neighborhood guides.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jacob Hazzard | San Clemente & Orange County Realtor",
    description: "San Clemente-born REALTOR® with Luxre Realty. Free home valuations, neighborhood guides, and relocation help across Orange County.",
    url: "https://www.jacobhazzardrealestate.com",
    siteName: "Jacob Hazzard Real Estate",
    images: [
      {
        url: "/cordoba5.jpeg",
        alt: "San Clemente home sold by Jacob Hazzard, Luxre Realty",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: 'Who is Jacob Hazzard?',
    a: 'Jacob Hazzard is a REALTOR® with Luxre Realty (CA DRE #02222037) who was born and raised in San Clemente. His office is at 222 Avenida Del Mar in San Clemente, and he helps clients buy, sell, renovate, and invest across Orange County.',
  },
  {
    q: 'What areas does Jacob Hazzard serve?',
    a: 'San Clemente and the rest of Orange County, including Dana Point and Laguna Niguel. His San Clemente neighborhood guides cover more than a dozen areas, including Talega, the Pier Bowl, Forster Ranch, Sea Summit, Marblehead, Broadmoor, and Cyprus Shore.',
  },
  {
    q: 'How can I find out what my San Clemente home is worth?',
    a: 'Request a free valuation on the Sell page and Jacob will personally review your home within 24 hours, or use the instant automated estimate on the same page.',
  },
  {
    q: 'What are the best neighborhoods in San Clemente?',
    a: 'It depends on what matters to you: walking to the beach, newer construction, views, gated privacy, or trails. The San Clemente neighborhood guides compare each area’s homes, prices, HOA and Mello-Roos, and amenities.',
  },
  {
    q: 'I am relocating to Orange County. Where should I start?',
    a: 'Start with the Orange County Relocation Guide, which breaks the county into South, Central, North, and East OC with cities, schools, commutes, and costs, then reach out for a custom neighborhood shortlist.',
  },
  {
    q: 'How do I contact Jacob Hazzard?',
    a: 'Call or text (949) 291-9395, email jacob@hazzardestates.com, or visit 222 Avenida Del Mar, San Clemente, CA 92672.',
  },
];

const explore = [
  { href: '/san-clemente-neighborhoods', title: 'San Clemente Neighborhoods', text: 'Homes, prices, and what each area is really like.' },
  { href: '/orange-county-cities', title: 'Orange County Cities', text: 'Dana Point, San Juan Capistrano, the Lagunas and more.' },
  { href: '/oc-relocation-guide', title: 'Orange County Relocation Guide', text: 'South, Central, North, and East OC, compared.' },
  { href: '/blog', title: 'Weekly Market Notes', text: 'San Clemente market numbers and local highlights.' },
  { href: '/sell#property-valuation', title: 'What’s My Home Worth?', text: 'A free valuation, personally reviewed in 24 hours.' },
];

const renovationSteps = [
  { n: '01', title: 'Plan the upgrades', text: 'We walk the home together and choose only the improvements that should pay for themselves at sale.' },
  { n: '02', title: 'Funds fronted, work managed', text: 'Renovation and transition funds can be fronted upfront, and I manage the contractors start to finish.' },
  { n: '03', title: 'Launch and sell', text: 'Professional photos, video and targeted marketing put the finished home in front of the right buyers.' },
];

export default function Home() {
  const sales = getMillionPlusSales();
  const volume = sales.reduce((sum, s) => sum + Number(String(s.price).replace(/[^0-9]/g, '')), 0);
  const volumeLabel = `$${Math.floor(volume / 100000) / 10}M+`;
  const posts = getPublishedPosts().slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          {
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
        ]}
      />
      <main className="text-gray-800 bg-[#faf8f4]">
        <VideoHero />

        {/* Proof strip */}
        <section id="proof" className="bg-black text-white py-14 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {[
              { value: volumeLabel, label: 'Sold in $1M+ homes' },
              { value: String(sales.length), label: '$1M+ sales, listing & buyer side' },
              { value: 'Born & raised', label: 'In San Clemente' },
              { value: 'Luxre Realty', label: 'San Clemente office' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <p className="f1 font-extralight text-3xl md:text-5xl tracking-wide">{s.value}</p>
                <p className="f2 text-[11px] uppercase tracking-[0.25em] text-white/60 mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section id="about" className="grid lg:grid-cols-2 bg-white">
          <div className="relative h-[60vh] lg:h-auto lg:min-h-[720px]">
            <Image src="/client2.jpeg" alt="Jacob Hazzard, San Clemente REALTOR®" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_30%]" />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16 lg:px-20">
            <Reveal className="max-w-lg">
              <p className="f2 text-xs uppercase tracking-[0.35em] text-gray-500 mb-6">Your hometown advocate</p>
              <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-4xl md:text-5xl leading-tight text-black mb-8">
                Guided by home.<br />Driven by results.
              </h2>
              <p className="f2 text-lg text-gray-700 leading-relaxed mb-6">
                I grew up in Forster Ranch, live in the Pier Bowl, and have spent my life in these neighborhoods. That local knowledge, paired with the eye of a builder and renovator, is what I bring to every sale and every search.
              </p>
              <p className="f2 text-lg text-gray-700 leading-relaxed mb-10">
                Honest advice, careful pricing, and a plan built around your goals, whether you&apos;re selling, buying or transforming a home.
              </p>
              <Link href="/about" className="inline-block f2 text-sm uppercase tracking-[0.2em] border border-black px-10 py-4 hover:bg-black hover:text-white transition">
                About Jacob
              </Link>
            </Reveal>
          </div>
        </section>

        {/* $1M+ sales */}
        <section className="py-24 md:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Reveal className="px-6 md:px-0 mb-4">
              <p className="f2 text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">Proven results</p>
              <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-4xl md:text-5xl text-black">$1M+ Sales</h2>
              <p className="f2 text-lg text-gray-600 mt-4 max-w-2xl">Every closed sale of $1 million or more, from both the listing and buyer side.</p>
            </Reveal>
            <SalesCarousel sales={sales} />
            <div className="px-6 md:px-0 mt-8">
              <Link href="/listings" className="f2 text-sm uppercase tracking-[0.2em] underline underline-offset-8 hover:text-black">View all sales &amp; listings</Link>
            </div>
          </div>
        </section>

        {/* Featured sale */}
        <section className="relative min-h-[80vh] flex items-end text-white">
          <Image src="/cordoba4.jpeg" alt="433 E Avenida Cordoba, San Clemente, sold for $2,600,000" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <Reveal className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pb-16 md:pb-24">
            <p className="f2 text-xs uppercase tracking-[0.35em] text-white/70 mb-4">Featured sale &nbsp;·&nbsp; Sold over asking</p>
            <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-4xl md:text-6xl">433 E Avenida Cordoba</h2>
            <p className="f2 text-lg text-white/80 mt-3">San Clemente &nbsp;·&nbsp; 4 bd &nbsp;·&nbsp; 3 ba &nbsp;·&nbsp; 2,549 sq ft</p>
            <div className="grid sm:grid-cols-3 gap-8 mt-10 max-w-3xl">
              <div>
                <p className="f1 font-extralight text-4xl">$2,600,000</p>
                <p className="f2 text-[11px] uppercase tracking-[0.25em] text-white/60 mt-2">Sale price, May 2025</p>
              </div>
              <div>
                <p className="f1 font-extralight text-4xl">$400K+</p>
                <p className="f2 text-[11px] uppercase tracking-[0.25em] text-white/60 mt-2">Added to the seller&apos;s net from upgrades</p>
              </div>
              <div>
                <p className="f1 font-extralight text-4xl">Full remodel</p>
                <p className="f2 text-[11px] uppercase tracking-[0.25em] text-white/60 mt-2">Funds fronted, fully managed</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Renovation to sale */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="f2 text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">What sets me apart</p>
              <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-4xl md:text-5xl text-black">Renovate. Then sell for more.</h2>
              <p className="f2 text-lg text-gray-600 mt-6 max-w-2xl mx-auto">For sellers who want top dollar without the stress of managing a remodel themselves.</p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-10">
              {renovationSteps.map((st, i) => (
                <Reveal key={st.n} delay={i * 150} className="border-t border-black pt-8">
                  <p className="f1 font-extralight text-5xl text-gray-300 mb-6">{st.n}</p>
                  <h3 className="f1 text-2xl text-black mb-3">{st.title}</h3>
                  <p className="f2 text-base text-gray-600 leading-relaxed">{st.text}</p>
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link href="/sell" className="inline-block f2 text-sm uppercase tracking-[0.2em] bg-black text-white px-10 py-4 hover:bg-gray-800 transition">Selling? Start here</Link>
            </div>
          </div>
        </section>

        <ReviewQuote />

        {/* Market notes */}
        {posts.length > 0 && (
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="f2 text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">Stay in the know</p>
                  <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-4xl md:text-5xl text-black">Market Notes</h2>
                </div>
                <Link href="/blog" className="f2 text-sm uppercase tracking-[0.2em] underline underline-offset-8">All market notes</Link>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 150}>
                    <Link href={`/blog/${p.slug}`} className="group block bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <Image src={p.image || '/cordoba5.jpeg'} alt={p.imageAlt || p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="p-8">
                        <p className="f2 text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">{formatDate(p.date)} &nbsp;·&nbsp; {p.category}</p>
                        <h3 className="f1 text-2xl text-black leading-snug group-hover:underline">{p.title}</h3>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="relative py-24 px-6 text-center text-white overflow-hidden">
          <Image src="/video/san-clemente-hero-poster.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <Reveal className="relative z-10 max-w-3xl mx-auto">
            <p className="f2 text-xs uppercase tracking-[0.35em] text-white/70 mb-4">Weekly, free, no spam</p>
            <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-3xl md:text-5xl mb-6">San Clemente Market Notes</h2>
            <p className="f2 text-lg text-white/80 mb-10">Rates, local sales, a neighborhood spotlight and what&apos;s happening around town, every Monday.</p>
            <Newsletter />
          </Reveal>
        </section>

        <LuxreStats />

        {/* Explore + FAQ (internal links and answers for search and AI tools) */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl f1 font-light text-center mb-4">Explore San Clemente &amp; Orange County</h2>
            <p className="f2 text-center text-gray-600 mb-12 max-w-2xl mx-auto">Local guides written by a San Clemente native, updated as the market moves.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
              {explore.map((e) => (
                <Link key={e.href} href={e.href} className="block bg-[#faf8f4] p-6 hover:shadow-md transition">
                  <h3 className="text-xl f1 mb-2 text-gray-900">{e.title}</h3>
                  <p className="f2 text-sm text-gray-600">{e.text}</p>
                </Link>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl f1 font-light text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {faqs.map((f) => (
                <details key={f.q} className="py-5 group">
                  <summary className="cursor-pointer list-none flex justify-between items-center text-lg f1 text-gray-900">
                    {f.q}
                    <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="f2 text-gray-700 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative bg-[#faf8f4] py-24 px-6 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="f2 text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">Let&apos;s work together</p>
            <h2 className="f1 font-extralight uppercase tracking-[0.08em] text-3xl md:text-5xl text-black mb-6">
              Make your next move exceptional
            </h2>
            <p className="text-lg md:text-lg font-light text-gray-700 f2 mb-10">
              Whether you’re buying, selling, or transforming a property, Jacob Hazzard brings precision, vision, and proven results. Let’s talk about your goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 f2 text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition"
            >
              Start the Conversation
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
