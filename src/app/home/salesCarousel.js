'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Horizontal, swipeable carousel of closed sales.
export default function SalesCarousel({ sales }) {
  const track = useRef(null);
  const go = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    el.scrollBy({ left: dir * ((card ? card.offsetWidth : 360) + 24), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="flex justify-end gap-2 mb-6 px-6 md:px-0">
        <button type="button" onClick={() => go(-1)} aria-label="Previous sale" className="w-12 h-12 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next sale" className="w-12 h-12 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div ref={track} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sales.map((s) => (
          <article key={`${s.address}-${s.side}`} data-card className="snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-[32%] group">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              {s.image && (
                <Image src={s.image} alt={`${s.address}, ${s.city}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              )}
              <span className="absolute top-4 left-4 bg-white/95 text-gray-900 f2 text-[11px] uppercase tracking-[0.2em] px-3 py-1">{s.side}</span>
            </div>
            <div className="pt-5">
              <p className="f1 text-3xl font-light text-gray-900">{s.price}</p>
              <p className="f2 text-base text-gray-800 mt-1">{s.address}, {s.city}</p>
              <p className="f2 text-sm text-gray-500 mt-1">
                {[s.beds && `${s.beds} bd`, s.baths && `${s.baths} ba`, s.sqft && `${s.sqft.toLocaleString('en-US')} sq ft`, s.when].filter(Boolean).join('  ·  ')}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
