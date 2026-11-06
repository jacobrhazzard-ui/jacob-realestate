'use client';

import { useEffect, useState } from 'react';
import { reviews, GOOGLE_PROFILE_URL } from './reviews';

// Client review carousel. Pass `dark` for dark backgrounds and `index` to choose
// which review a page opens on. Auto-advances every 7s (paused on hover/focus,
// and off for visitors who prefer reduced motion).
export default function ReviewQuote({ dark = false, className = '', index = 0 }) {
  const count = reviews.length;
  const [i, setI] = useState(count ? index % count : 0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (count < 2 || paused) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % count), 7000);
    return () => clearInterval(t);
  }, [count, paused]);

  if (!count) return null;
  const r = reviews[i];
  const go = (n) => setI((n + count) % count);
  const muted = dark ? 'text-white/60' : 'text-gray-500';
  const btn = `w-10 h-10 rounded-full border flex items-center justify-center transition ${dark ? 'border-white/30 hover:bg-white/10' : 'border-gray-400 hover:bg-white/60'}`;

  return (
    <section
      className={`${dark ? 'bg-gray-900 text-white' : 'bg-[#e2ded4] text-gray-800'} py-16 px-6 text-center ${className}`}
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure className="max-w-3xl mx-auto min-h-[14rem] flex flex-col justify-center" aria-live="polite">
        <p className={`text-4xl f1 leading-none mb-2 ${dark ? 'text-white/40' : 'text-gray-400'}`} aria-hidden="true">&ldquo;</p>
        <p className="text-amber-500 tracking-widest mb-3" aria-label="5 out of 5 stars">★★★★★</p>
        <blockquote key={i} className="text-xl md:text-3xl italic font-light f2 leading-relaxed">{r.quote}</blockquote>
        <figcaption className={`mt-6 text-sm uppercase tracking-widest f2 ${muted}`}>— {r.name}, {r.role}</figcaption>
      </figure>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button type="button" className={btn} onClick={() => go(i - 1)} aria-label="Previous review">&#8249;</button>
          <div className="flex gap-2">
            {reviews.map((rv, n) => (
              <button
                key={rv.name}
                type="button"
                onClick={() => go(n)}
                aria-label={`Show review from ${rv.name}`}
                aria-current={n === i}
                className={`h-2.5 rounded-full transition-all ${n === i ? (dark ? 'w-6 bg-white' : 'w-6 bg-gray-800') : (dark ? 'w-2.5 bg-white/40' : 'w-2.5 bg-gray-400')}`}
              />
            ))}
          </div>
          <button type="button" className={btn} onClick={() => go(i + 1)} aria-label="Next review">&#8250;</button>
        </div>
      )}

      {GOOGLE_PROFILE_URL && (
        <p className="mt-6 text-xs uppercase tracking-widest f2">
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 ${muted}`}>Read all reviews on Google</a>
        </p>
      )}
    </section>
  );
}
