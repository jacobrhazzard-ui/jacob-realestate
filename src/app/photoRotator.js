'use client';

// Crossfading photo rotation for page headers and photo strips.
// Usage: <PhotoRotator photos={[{ src: '/photos/talega/trail.jpg', alt: 'Talega trail' }, ...]} />
// Renders as an absolutely positioned layer, so place it inside a `relative` container.
// One photo = a still image. Respects the visitor's "reduce motion" setting.

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PhotoRotator({ photos = [], interval = 6000, sizes = '100vw', className = '', showCaption = false }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % photos.length), interval);
    return () => clearInterval(t);
  }, [photos.length, interval]);

  if (!photos.length) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {photos.map((p, idx) => (
        <div
          key={p.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === i ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={idx === i ? undefined : true}
        >
          <Image
            src={p.src}
            alt={p.alt || ''}
            fill
            sizes={sizes}
            priority={idx === 0}
            className={`object-cover ${idx === i ? 'scale-105' : 'scale-100'} transition-transform duration-[7000ms] ease-out`}
          />
          {showCaption && p.caption && (
            <p className="absolute bottom-3 left-3 right-3 text-white text-sm f2 drop-shadow">{p.caption}</p>
          )}
        </div>
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-4 right-4 z-30 flex gap-2">
          {photos.map((p, idx) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show photo ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 w-2 rounded-full transition ${idx === i ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
