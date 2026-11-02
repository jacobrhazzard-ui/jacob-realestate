import Link from 'next/link';
import Image from 'next/image';
import Footer from '../footer';
import Navigation from '../navbar';
import { getPublishedPosts, formatDate } from './posts';
import { display, serif, sans, kicker, kickerSm } from './fonts';

export const metadata = {
  title: 'Market Notes: San Clemente & South OC Market Updates',
  description:
    'Weekly San Clemente and South Orange County real estate market updates and local highlights from Jacob Hazzard, Luxre Realty.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getPublishedPosts();
  const [lead, ...rest] = posts;

  return (
    <main className={`${display.variable} text-[#14181c] bg-[#faf8f4]`}>
      <div className="relative h-24 md:h-28 bg-[#0f1a21]">
        <Navigation compact />
      </div>

      {/* Nameplate */}
      <header className="bg-[#faf8f4]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-10 md:pt-14 text-center">
          <p className={`${kicker} text-[#1f4e66] mb-4`}>The Weekly Edition</p>
          <h1 className={`${display.className} text-[56px] md:text-[96px] leading-none tracking-tight`}>Market Notes</h1>
          <p className={`${serif.className} italic text-[18px] md:text-[20px] text-[#3c4248] mt-4`}>
            The San Clemente market, the numbers behind it, and a little of what makes this place home.
          </p>
          <div className={`${kicker} text-[#5b6168] mt-8 py-3 border-y-2 border-[#14181c] flex flex-wrap justify-center gap-x-4 gap-y-1`}>
            <span>San Clemente, California</span>
            <span aria-hidden="true" className="text-[#b9b2a4]">|</span>
            <span>{lead ? `Latest: ${formatDate(lead.date)}` : 'Weekly'}</span>
            <span aria-hidden="true" className="text-[#b9b2a4]">|</span>
            <span>By Jacob Hazzard, Luxre Realty</span>
          </div>
        </div>
      </header>

      <section className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-14">
        {!lead ? (
          <div className="border-y border-[#14181c] py-12 text-center">
            <h2 className={`${display.className} text-[30px] mb-4`}>The first edition is on its way</h2>
            <p className={`${serif.className} text-[18px] text-[#3c4248] mb-6`}>
              New market notes post weekly. Want a custom report for your neighborhood now?
            </p>
            <Link href="/contact" className={`${sans.className} inline-block bg-[#14181c] text-white px-8 py-4 text-[13px] uppercase tracking-[0.16em] hover:bg-[#1f4e66] transition`}>
              Get In Touch
            </Link>
          </div>
        ) : (
          <>
            {/* Lead story */}
            <Link href={`/blog/${lead.slug}`} className="group grid md:grid-cols-[1.35fr_1fr] gap-6 md:gap-10 items-start pb-10 border-b border-[#14181c]">
              {lead.image && (
                <div className="relative aspect-[3/2] bg-[#e7e2d8]">
                  <Image src={lead.image} alt={lead.imageAlt || ''} fill priority sizes="(max-width: 768px) 100vw, 620px" className="object-cover" />
                </div>
              )}
              <div>
                <p className={`${kicker} text-[#1f4e66] mb-3`}>{lead.category} &middot; {formatDate(lead.date)}</p>
                <h2 className={`${display.className} text-[30px] md:text-[40px] leading-[1.1] mb-4 group-hover:underline underline-offset-4 decoration-1`}>{lead.title}</h2>
                <p className={`${serif.className} text-[18px] leading-relaxed text-[#2b3036] mb-4`}>{lead.excerpt}</p>
                {lead.summary && (
                  <p className={`${serif.className} italic text-[16px] leading-relaxed text-[#5b6168] border-l-2 border-[#1f4e66] pl-4`}>{lead.summary}</p>
                )}
                <p className={`${sans.className} text-[12px] uppercase tracking-[0.16em] text-[#14181c] mt-6`}>Read this week&apos;s notes &rarr;</p>
              </div>
            </Link>

            {/* Earlier editions */}
            {rest.length > 0 && (
              <>
                <p className={`${kicker} text-[#14181c] mt-10 mb-6`}>Earlier Editions</p>
                <div className="grid md:grid-cols-3 md:divide-x divide-[#d8d2c6] gap-y-10">
                  {rest.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block md:px-6 md:first:pl-0">
                      {p.image && (
                        <div className="relative aspect-[3/2] mb-4 bg-[#e7e2d8]">
                          <Image src={p.image} alt={p.imageAlt || ''} fill sizes="(max-width: 768px) 100vw, 340px" className="object-cover" />
                        </div>
                      )}
                      <p className={`${kickerSm} text-[#1f4e66] mb-2`}>{formatDate(p.date)}</p>
                      <h3 className={`${display.className} text-[22px] leading-snug mb-2 group-hover:underline underline-offset-4 decoration-1`}>{p.title}</h3>
                      <p className={`${serif.className} text-[16px] leading-relaxed text-[#3c4248]`}>{p.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        <p className={`${serif.className} text-center text-[17px] text-[#3c4248] mt-16 pt-8 border-t border-[#d8d2c6]`}>
          Looking for a specific area? Browse the{' '}
          <Link href="/san-clemente-neighborhoods" className="underline underline-offset-2">San Clemente neighborhood guides</Link>.
        </p>
      </section>

      <Footer />
    </main>
  );
}
