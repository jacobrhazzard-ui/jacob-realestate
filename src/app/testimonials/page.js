import Link from 'next/link';
import Footer from '../footer';
import Navigation from '../navbar';
import PhotoRotator from '../photoRotator';
import { sanClementePhotos } from '../photos';
import { reviews, GOOGLE_REVIEW_URL } from '../reviews';

export default function TestimonialsPage() {
  return (
    <main className="text-gray-900 bg-[#faf8f4] font-sans">
      <section className="relative min-h-[50vh] flex flex-col">
        <PhotoRotator photos={sanClementePhotos} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
        <Navigation />
        <div className="relative z-20 text-white text-center max-w-3xl mx-auto px-6 mt-auto mb-16 pt-40">
          <h1 className="text-4xl md:text-6xl font-light f1 tracking-tight mb-4">What Clients Are Saying</h1>
          <p className="f2 text-lg text-white/80">In their own words.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-white p-10 shadow-sm text-center">
              <blockquote className="text-2xl italic font-light f2 text-gray-800 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest f2 text-gray-500">— {r.name}, {r.role}</figcaption>
            </figure>
          ))}
          <div className="text-center pt-4">
            <p className="f2 text-gray-700 mb-5">Worked with Jacob? He&rsquo;d be grateful for a few words about your experience.</p>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-8 py-4 f2 tracking-wide hover:bg-gray-700 transition">Leave a Google Review</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center px-6">
        <h2 className="text-3xl font-light mb-4 f1">See Recent Sales</h2>
        <p className="text-lg text-gray-700 mb-8 f2">Homes Jacob has sold, represented buyers on, and leased across Orange County.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/listings" className="bg-gray-900 text-white px-8 py-4 f2 tracking-wide hover:bg-gray-700 transition">View Listings &amp; Sales</Link>
          <Link href="/contact" className="border border-gray-900 px-8 py-4 f2 tracking-wide hover:bg-gray-100 transition">Get in Touch</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
