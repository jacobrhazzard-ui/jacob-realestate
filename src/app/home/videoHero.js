'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navigation from '../navbar';

// Full-screen video hero. Falls back to the poster image for visitors who
// prefer reduced motion or whose browser blocks autoplay.
export default function VideoHero() {
  const ref = useRef(null);
  const [still, setStill] = useState(false);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      return;
    }
    setSrc(window.innerWidth < 768 ? '/video/san-clemente-hero-mobile.mp4' : '/video/san-clemente-hero.mp4');
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (v && src) v.play().catch(() => setStill(true));
  }, [src]);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden text-white bg-black">
      {still ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/video/san-clemente-hero-poster.jpg')" }} />
      ) : (
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/san-clemente-hero-poster.jpg"
          aria-hidden="true"
          src={src || undefined}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />

      <Navigation />

      <div className="relative z-20 h-full flex flex-col justify-end md:justify-center px-6 md:px-16 pb-24 md:pb-0 max-w-7xl mx-auto">
        <p className="f2 text-xs md:text-sm uppercase tracking-[0.35em] text-white/80 mb-6 hero-rise" style={{ animationDelay: '0.1s' }}>
          San Clemente &amp; Orange County Real Estate
        </p>
        <h1 className="f1 font-extralight uppercase tracking-[0.12em] leading-[0.95] text-5xl sm:text-6xl md:text-8xl hero-rise" style={{ animationDelay: '0.25s' }}>
          Jacob<br />Hazzard<span className="sr-only">, San Clemente &amp; Orange County Realtor</span>
        </h1>
        <p className="f1 font-light uppercase tracking-[0.3em] text-sm sm:text-lg md:text-xl mt-8 hero-rise" style={{ animationDelay: '0.45s' }}>
          Born here. Built here. Sold here.
        </p>
        <p className="f2 text-[11px] md:text-xs uppercase tracking-[0.3em] text-white/60 mt-4 hero-rise" style={{ animationDelay: '0.6s' }}>
          REALTOR® &nbsp;|&nbsp; Luxre Realty &nbsp;|&nbsp; CA DRE# 02222037
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-10 hero-rise" style={{ animationDelay: '0.75s' }}>
          <Link href="/buy" className="f2 text-sm uppercase tracking-[0.2em] border border-white/80 px-8 py-4 text-center hover:bg-white hover:text-black transition">
            Search Homes
          </Link>
          <Link href="/sell#property-valuation" className="f2 text-sm uppercase tracking-[0.2em] bg-white text-black px-8 py-4 text-center hover:bg-white/85 transition">
            What&apos;s My Home Worth?
          </Link>
          <Link href="/contact" className="f2 text-sm uppercase tracking-[0.2em] border border-white/80 px-8 py-4 text-center hover:bg-white hover:text-black transition">
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <a href="#proof" aria-label="Scroll down" className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/70 hover:text-white">
        <span className="f2 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block w-px h-10 bg-white/60 animate-pulse" />
      </a>
    </section>
  );
}
