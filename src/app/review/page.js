import Link from 'next/link';
import { GOOGLE_REVIEW_URL } from '../reviews';

export const metadata = {
  title: 'Leave a Review for Jacob Hazzard',
  description: 'Worked with Jacob Hazzard? Share your experience in a quick review.',
  alternates: { canonical: '/review' },
  robots: { index: false, follow: true },
};

const others = [
  { name: 'Zillow', href: 'https://www.zillow.com/profile/Jacob%20Hazzard', note: 'Open my profile and tap "Write a review"' },
  { name: 'Realtor.com', href: 'https://www.realtor.com/realestateagents/65085efa1345711a4a7dba6c', note: 'Scroll to Reviews on my profile' },
  { name: 'Facebook', href: 'https://www.facebook.com/100084211282142/reviews', note: 'Recommend my page' },
];

// One short link for past clients: jacobhazzardrealestate.com/review
// Google is the main ask (it shows on Search and Maps). Yelp is left off on purpose:
// Yelp's rules don't allow businesses to ask for reviews.
export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-gray-900 font-sans flex flex-col">
      <div className="bg-gray-900 text-white text-center px-6 pt-16 pb-12">
        <Link href="/" className="inline-block mb-8">
          <img src="/icon.png" alt="Jacob Hazzard Real Estate" className="h-16 w-16 mx-auto" />
        </Link>
        <h1 className="f1 text-4xl md:text-5xl font-light tracking-tight mb-4">Thank you for working with me</h1>
        <p className="f2 text-lg text-white/80 max-w-xl mx-auto">
          A quick review means the world to a local business like mine, and it helps your neighbors find someone they can trust.
        </p>
      </div>

      <div className="flex-1 px-6 py-12">
        <div className="max-w-xl mx-auto text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 text-white px-8 py-6 f2 text-xl tracking-wide hover:bg-gray-700 transition shadow-lg"
          >
            Leave a Google Review &rarr;
          </a>
          <p className="f2 text-sm text-gray-500 mt-3">Takes about a minute. Tap the stars, add a sentence or two, and post.</p>

          <div className="mt-14">
            <p className="f2 text-xs uppercase tracking-widest text-gray-500 mb-4">Already left one on Google? Thank you! You can also share it here</p>
            <div className="grid gap-3">
              {others.map((o) => (
                <a key={o.name} href={o.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white shadow-sm px-6 py-4 hover:shadow-md transition text-left">
                  <span className="f1 text-lg">{o.name}</span>
                  <span className="f2 text-sm text-gray-500">{o.note} &rarr;</span>
                </a>
              ))}
            </div>
          </div>

          <p className="f2 text-sm text-gray-500 mt-14">
            Questions? Call or text me at <a href="tel:+19492919395" className="underline">(949) 291-9395</a>.
          </p>
          <p className="f2 text-xs text-gray-400 mt-4">Jacob Hazzard, REALTOR® | CA DRE# 02222037 | Luxre Realty</p>
        </div>
      </div>
    </main>
  );
}
