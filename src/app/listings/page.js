import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import ListingCard from '../listingCard';
import { listingSections } from '../listingsData';

export const metadata = {
    title: 'Listings & Recent Sales',
    description: 'Homes Jacob Hazzard has sold, represented buyers on, and leased across San Clemente, Dana Point, Laguna Niguel and Orange County — plus exclusive off-market opportunities.',
    alternates: { canonical: '/listings' },
};

export default function ListingsPage() {
    return (
        <main className="text-gray-900 bg-[#f1f0eb] font-sans">
            {/* Hero Section */}
            <section
                className="relative min-h-[70vh] bg-cover bg-center flex flex-col justify-start px-0"
                style={{ backgroundImage: "url('/cordoba1.jpeg')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/20 z-10" />

                <Navigation />

                <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6 mt-auto mb-20 pt-40">
                    <p className="uppercase text-sm tracking-widest mb-4 f2 text-white/70">
                        Track Record
                    </p>
                    <h1 className="text-5xl md:text-6xl font-light f1 tracking-tight mb-6">
                        Listings &amp; <span className="font-semibold">Recent Sales</span>
                    </h1>
                    <p className="text-lg md:text-xl font-light f2 text-white/90 max-w-2xl mx-auto">
                        Homes sold, buyers represented, and leases placed across San Clemente and Orange County.
                    </p>

                    <nav className="mt-10 flex flex-wrap justify-center gap-3" aria-label="Listing sections">
                        {listingSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="border border-white/60 px-4 py-2 text-xs uppercase tracking-widest f2 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Listing Sections */}
            {listingSections.map((section, i) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`px-6 py-20 md:py-24 scroll-mt-8 ${i % 2 === 0 ? 'bg-[#f1f0eb]' : 'bg-[#e2ded4]'}`}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 text-center md:text-left">
                            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3 f2">
                                {section.eyebrow}
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold f1">
                                {section.title}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.listings.map((listing) => (
                                <ListingCard key={`${listing.address}-${listing.date ?? listing.status}`} listing={listing} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="relative bg-[#2e2b28] px-6 py-24 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold f1 mb-6">
                        Thinking About Your Next Move?
                    </h2>
                    <p className="text-lg text-gray-300 font-light f2 mb-10">
                        Whether you&apos;re buying, selling, or leasing, Jacob will put together a plan built around your goals.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block border border-white px-10 py-4 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Contact Jacob →
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
