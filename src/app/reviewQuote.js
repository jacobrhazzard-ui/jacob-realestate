import { reviews } from './reviews';

// A client review band. Pass `dark` for use on dark backgrounds.
export default function ReviewQuote({ dark = false, className = '' }) {
  const r = reviews[0];
  if (!r) return null;
  return (
    <section className={`${dark ? 'bg-gray-900 text-white' : 'bg-[#e2ded4] text-gray-800'} py-16 px-6 text-center ${className}`}>
      <figure className="max-w-3xl mx-auto">
        <p className={`text-4xl f1 leading-none mb-2 ${dark ? 'text-white/40' : 'text-gray-400'}`} aria-hidden="true">&ldquo;</p>
        <blockquote className="text-2xl md:text-3xl italic font-light f2 leading-relaxed">{r.quote}</blockquote>
        <figcaption className={`mt-6 text-sm uppercase tracking-widest f2 ${dark ? 'text-white/60' : 'text-gray-500'}`}>— {r.name}, {r.role}</figcaption>
      </figure>
    </section>
  );
}
