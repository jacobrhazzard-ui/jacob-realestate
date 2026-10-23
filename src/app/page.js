import { JsonLd } from './jsonld';
import HeroSlideshow from './hero';
import Image from 'next/image';
import Link from 'next/link';
import PastSuccessSlideshow from './pastSection';
import FeaturedListings from './listingSection';
import Footer from './footer';
import LuxreStats from './luxreStats';

export const metadata = {
  title: { absolute: "San Clemente Realtor | Jacob Hazzard, Luxre Realty | Orange County Real Estate" },
  description: "San Clemente-born REALTOR® Jacob Hazzard of Luxre Realty helps buyers, sellers, and families relocating across San Clemente and Orange County. Free home valuations and local neighborhood guides.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jacob Hazzard | San Clemente & Orange County Realtor",
    description: "San Clemente-born REALTOR® with Luxre Realty. Free home valuations, neighborhood guides, and relocation help across Orange County.",
    url: "https://jacobhazzardrealestate.com",
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
  { href: '/oc-relocation-guide', title: 'Orange County Relocation Guide', text: 'South, Central, North, and East OC, compared.' },
  { href: '/blog', title: 'Weekly Market Notes', text: 'San Clemente market numbers and local highlights.' },
  { href: '/sell#property-valuation', title: 'What’s My Home Worth?', text: 'A free valuation, personally reviewed in 24 hours.' },
];

export default function Home() {
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
      <main className="text-gray-800 bg-[#f9f7f4]" >
        {/* Hero Section */}
        <HeroSlideshow />
        <section className="py-10 text-center px-4 bg-[#f1ece3] md:hidden"></section>
        <section id="about" className="relative flex flex-col lg:flex-row bg-white overflow-hidden py-25 pt-0 pb-10 md:pt-45 md:pb-45">
          {/* Left side image (fixed on larger screens) */}
          <div className="relative w-full lg:w-3/5 h-85 lg:h-auto lg:sticky lg:top-0 xl:h-200 xl:w-3/5">
            <Image
              src="/client2.jpeg"
              alt="Jacob Hazzard"
              fill
              priority
              className="object-cover object-[center_30%] md:object-[center_25%] lg:object-center"
            />
          </div>
          {/* Right side content */}
          <div className="w-full lg:w-2/5 flex items-center justify-center px-6 py-6 bg-white z-10">
            <div className="max-w-md text-left space-y-6">
              {/* Trust Layer */}
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold font-title">
                Your Trusted Advocate
              </p>

              {/* Headline Layer */}
              <h2 className="text-4xl lg:text-5xl font-heading text-black leading-tight f1">
                Real Estate with Precision, Integrity, and Vision
              </h2>

              {/* Supporting Body */}
              <p className="text-base text-gray-700 leading-relaxed font-body f2">
                Jacob Hazzard combines years of market expertise with the mindset of a builder, renovator, and homeowner. Known for honest advice and impeccable execution, he helps clients navigate the market with confidence — from thoughtful upgrades to record-breaking closings.
              </p>
              <div className="flex text-md md:text-xl text-gray-600">
                <Link href='/contact'>
                  <button href='/buy' className="font-montserrat font-light border border-black text-black bg-transparent px-28 md:px-32 py-3 mr-5 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                    Work with Jacob
                  </button>
                </Link>
                {/* <Link href='/sell'>
                  <button href='/sell' className="font-montserrat font-light border border-black text-black bg-transparent px-7 md:px-8 py-3 tracking-wider rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
                    Sell with Jacob
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
        {/* Sticky / Fixed Image Scroll Section */}
        <section className="relative">
          {/* For larger screens: fixed background */}
          <div className="hidden md:block relative h-[35vh] bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/cordoba7.jpeg')" }}>
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-white text-center max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-3 f1">
                  A Modern Real Estate Philosophy
                </h2>
                <p className="text-base lg:text-lg font-light f2">
                  Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
                </p>
              </div>
            </div>
          </div>

          {/* For small screens: image with sticky scroll effect */}
          <div className="md:hidden relative h-[40vh]">
            <Image
              src="/cordoba7.jpeg"
              alt="Scroll Background"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-white text-center max-w-xl">
                <h2 className="text-2xl font-semibold mb-2 f1">
                  A Modern Real Estate Philosophy
                </h2>
                <p className="text-sm font-light f2">
                  Jacob&apos;s approach blends design, data, and discipline. Renovate to inspire, market with precision, negotiate with excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PastSuccessSlideshow />
        <section className="pt-20 pb-12.5 text-center px-4 bg-[#f1ece3] hidden md:block"></section>
        {/* Mission Statement */}
        <section className="pt-20 pb-12.5 text-center px-4 bg-gray-700">
          <h2 className="text-2xl font-extralight tracking-widest uppercase mb-6 f1 text-white"> <span className='font-normal' >Honest</span> Work. <br/> <span className='font-normal' >Lasting </span>Results</h2>
          <p className="max-w-xl mx-auto text-lg f2 text-white font-light">
            With experience in renovation, buying, selling, and investments, Jacob delivers real estate with honesty, precision, and a hometown touch.          </p>
          <div className="py-0 flex justify-center items-center ">
            <Image
              src="/jg-logo-2.png"
              alt="Jacob Hazzard Real Estate logo"
              width={400}
              height={250}
              className="w-40 h-35 object-cover mx-auto"
            />
          </div>
        </section>
        <LuxreStats />
        {/* Current Listings */}
        <FeaturedListings />
        {/* Explore + FAQ (internal links and answers for search and AI tools) */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl f1 font-light text-center mb-4">Explore San Clemente &amp; Orange County</h2>
            <p className="f2 text-center text-gray-600 mb-12 max-w-2xl mx-auto">Local guides written by a San Clemente native, updated as the market moves.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {explore.map((e) => (
                <Link key={e.href} href={e.href} className="block bg-[#f9f7f4] p-6 hover:shadow-md transition">
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
        <section id="contact" className="relative bg-[#f9f7f4] py-24 px-6 text-center overflow-hidden">
          {/* Optional: Background Accent Image */}
          <div className="absolute inset-0 opacity-10 bg-[url('/cordoba5.jpeg')] bg-cover bg-center z-0 hidden md:block" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-3xl font-heading f1 text-gray-900 mb-6">
              Let’s Connect & Make Your Move Exceptional
            </h2>
            <p className="text-lg md:text-lg font-light text-gray-700 f2 mb-10">
              Whether you’re buying, selling, or transforming a property, Jacob Hazzard brings precision, vision, and proven results. Let’s talk about your goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gray-600 text-white px-10 py-4 text-lg tracking-wide shadow-md font-light hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
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
