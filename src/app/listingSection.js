import Link from 'next/link';
import ListingCard from './listingCard';
import { getRecentSales } from './listingsData';

export default function FeaturedListings({ id = 'listings' }) {
  const recentSales = getRecentSales(3);

  return (
    <section id={id} className="bg-[#1a1a1a] px-6 pb-20">
      {/* Heading */}
      <div className="text-center text-gray-200 px-4 pt-15 pb-12 md:pt-20 md:pb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight f1" data-aos="fade-up">
          <span className="font-semibold">Featured</span> Recent Sales
        </h2>
        <p className="text-base md:text-lg font-light mt-3 f1 text-gray-300">
          A look at Jacob&apos;s latest transactions across San Clemente and Orange County.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recentSales.map((listing, i) => (
          <div key={`${listing.address}-${listing.date}`} data-aos="fade-up" data-aos-delay={i * 150}>
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          href="/listings"
          className="inline-block border border-white text-white px-10 py-4 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          View All Listings →
        </Link>
      </div>
    </section>
  );
}
