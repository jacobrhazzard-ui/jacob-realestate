import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from './listingsData';

const badgeStyles = {
  'Sold': 'bg-[#b29567] text-white',
  'Under Contract': 'bg-white text-[#2e2b28]',
  'Leased': 'bg-[#2e2b28] text-white border border-white/30',
  'Active': 'bg-emerald-700 text-white',
  'Off-Market': 'bg-black text-[#d8c39e] border border-[#b29567]',
};

function formatBeds(beds) {
  if (beds === undefined) return null;
  return typeof beds === 'number' ? `${beds} bd` : beds;
}

function PlaceholderImage() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#3a3632] via-[#2e2b28] to-[#1a1a1a]">
      <svg className="w-14 h-14 text-[#b29567]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      <span className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40 f2">Photo Coming Soon</span>
    </div>
  );
}

export default function ListingCard({ listing }) {
  const { address, city, beds, baths, sqft, price, date, status, note, image, cta } = listing;
  const specs = [
    formatBeds(beds),
    baths !== undefined && `${baths} ba`,
    sqft && `${sqft.toLocaleString('en-US')} sqft`,
  ].filter(Boolean);

  return (
    <article className="group flex flex-col bg-white shadow-lg overflow-hidden h-full">
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${address}, ${city}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage />
        )}
        <span className={`absolute top-4 left-4 px-3 py-1.5 text-[11px] uppercase tracking-widest font-semibold ${badgeStyles[status] ?? badgeStyles.Sold}`}>
          {status}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 text-gray-900">
        <h3 className="text-xl font-semibold f1 leading-snug">{address}</h3>
        <p className="text-sm uppercase tracking-widest text-gray-500 f2 mt-1">{city}</p>

        {specs.length > 0 && (
          <p className="mt-4 text-sm text-gray-600 f2">{specs.join(' · ')}</p>
        )}
        {note && <p className="mt-2 text-sm italic text-[#8a7350] f2">{note}</p>}

        <div className="flex-1 min-h-6" />
        <div className="pt-5 flex items-end justify-between border-t border-gray-200">
          {price ? (
            <span className="text-2xl font-semibold f1">{price}</span>
          ) : cta ? null : (
            <span className="text-sm text-gray-400 f2">Price undisclosed</span>
          )}
          {date && <span className="text-sm text-gray-500 f2">{formatDate(date)}</span>}
          {cta && (
            <Link
              href={cta.href}
              className="inline-block border border-gray-900 px-5 py-2 uppercase tracking-wider text-xs hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              {cta.label} →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
