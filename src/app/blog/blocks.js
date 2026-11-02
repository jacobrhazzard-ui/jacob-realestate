import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { getNeighborhood, guideHref } from '../san-clemente-neighborhoods/neighborhoods';
import MortgageCalc from './mortgageCalc';
import { display, sans, kicker, kickerSm } from './fonts';

export const anchor = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Column widths: reading text stays narrow like a newspaper column,
// charts and cards break out a little wider.
const NARROW = 'max-w-[680px] mx-auto';
const WIDE = 'max-w-[880px] mx-auto';

function Trend({ dir, text, dark }) {
  const Icon = dir === 'up' ? ArrowUpRight : dir === 'down' ? ArrowDownRight : Minus;
  return (
    <span className={`${sans.className} inline-flex items-center gap-1 text-[13px] ${dark ? 'text-white/70' : 'text-[#5b6168]'}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {text}
    </span>
  );
}

function Source({ text, href, dark }) {
  if (!text) return null;
  const color = dark ? 'text-white/60' : 'text-[#6b7178]';
  return (
    <p className={`${sans.className} text-[12px] leading-snug mt-3 ${color}`}>
      {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[#b9b2a4] hover:decoration-current">{text}</a> : text}
    </p>
  );
}

// A figure with a ruled label on top, like a newspaper chart.
function Figure({ label, children, source, href, className = '' }) {
  return (
    <figure className={`${WIDE} my-12 ${className}`}>
      {label && (
        <figcaption className={`${kicker} text-[#14181c] border-t-2 border-[#14181c] pt-3 mb-5`}>{label}</figcaption>
      )}
      {children}
      <Source text={source} href={href} />
    </figure>
  );
}

// Stat grid with hairline dividers.
function Snapshot({ b }) {
  return (
    <Figure label={b.title} source={b.source} href={b.href}>
      <div className="grid grid-cols-2 md:grid-cols-3 border-l border-t border-[#d8d2c6] bg-white">
        {b.items.map((s) => (
          <div key={s.label} className="border-r border-b border-[#d8d2c6] p-5 md:p-6">
            <p className={`${display.className} text-[30px] md:text-[38px] leading-none text-[#14181c]`}>{s.value}</p>
            <p className={`${kickerSm} text-[#5b6168] mt-3 mb-2 md:text-[11px]`}>{s.label}</p>
            {s.change && <Trend dir={s.dir} text={s.change} />}
          </div>
        ))}
      </div>
    </Figure>
  );
}

// Mortgage rates: big serif number with this week / last week / a year ago bars.
function Rates({ b }) {
  const max = Math.max(...b.items.flatMap((r) => [r.value, r.prev, r.yearAgo].filter(Boolean)));
  return (
    <Figure label="Average mortgage rates this week" source={b.source} href={b.href}>
      <div className="grid md:grid-cols-2 gap-px bg-[#d8d2c6] border border-[#d8d2c6]">
        {b.items.map((r) => {
          const diff = r.prev != null ? +(r.value - r.prev).toFixed(2) : null;
          const rows = [
            { k: 'This week', v: r.value, strong: true },
            r.prev != null && { k: 'Last week', v: r.prev },
            r.yearAgo != null && { k: 'A year ago', v: r.yearAgo },
          ].filter(Boolean);
          return (
            <div key={r.label} className="bg-white p-6 md:p-7">
              <p className={`${kicker} text-[#5b6168]`}>{r.label}</p>
              <p className={`${display.className} text-[56px] leading-none text-[#14181c] mt-3 mb-2`}>{r.value.toFixed(2)}%</p>
              {diff != null && (
                <Trend dir={diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat'} text={`${diff > 0 ? '+' : ''}${diff.toFixed(2)} pts from last week`} />
              )}
              <div className="mt-6 space-y-3">
                {rows.map((row) => (
                  <div key={row.k} className={`${sans.className} text-[13px]`}>
                    <div className="flex justify-between text-[#5b6168] mb-1">
                      <span>{row.k}</span>
                      <span className={row.strong ? 'text-[#14181c] font-semibold' : ''}>{row.v.toFixed(2)}%</span>
                    </div>
                    <div className="h-1.5 bg-[#efebe3]">
                      <div className={row.strong ? 'h-1.5 bg-[#1f4e66]' : 'h-1.5 bg-[#b9b2a4]'} style={{ width: `${(row.v / max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Figure>
  );
}

// San Clemente vs. the U.S., as a ruled table.
function Compare({ b }) {
  return (
    <Figure label={`${b.localLabel || 'San Clemente'} vs. ${b.otherLabel || 'the United States'}`} source={b.source}>
      <div className="bg-white border border-[#d8d2c6]">
        <div className={`grid grid-cols-[1fr_1.2fr_1.2fr] ${kickerSm} text-[#5b6168] border-b border-[#14181c]`}>
          <div className="p-3 md:p-4" />
          <div className="p-3 md:p-4">{b.localLabel || 'San Clemente'}</div>
          <div className="p-3 md:p-4">{b.otherLabel || 'United States'}</div>
        </div>
        {b.rows.map((r, i) => (
          <div key={r.label} className={`grid grid-cols-[1fr_1.2fr_1.2fr] ${i ? 'border-t border-[#e7e2d8]' : ''}`}>
            <div className={`${sans.className} p-3 md:p-4 text-[13px] text-[#5b6168]`}>{r.label}</div>
            <div className="p-3 md:p-4">
              <p className={`${display.className} text-[18px] md:text-[22px] leading-tight text-[#14181c]`}>{r.local}</p>
              {r.localNote && <p className={`${sans.className} text-[12px] text-[#6b7178] mt-1`}>{r.localNote}</p>}
            </div>
            <div className="p-3 md:p-4">
              <p className={`${display.className} text-[18px] md:text-[22px] leading-tight text-[#14181c]`}>{r.other}</p>
              {r.otherNote && <p className={`${sans.className} text-[12px] text-[#6b7178] mt-1`}>{r.otherNote}</p>}
            </div>
          </div>
        ))}
      </div>
    </Figure>
  );
}

// Horizontal bar chart, e.g. where buyers are searching from.
function Bars({ b }) {
  const max = Math.max(...b.items.map((i) => i.value));
  return (
    <Figure label={b.title} source={b.source} href={b.href}>
      <div className="bg-white border border-[#d8d2c6] p-6 md:p-7 space-y-4">
        {b.items.map((i) => (
          <div key={i.label} className={sans.className}>
            <div className="flex justify-between text-[13px] text-[#3c4248] mb-1">
              <span>{i.label}</span>
              <span className="text-[#14181c] font-semibold">{i.value.toLocaleString('en-US')}</span>
            </div>
            <div className="h-2 bg-[#efebe3]">
              <div className="h-2 bg-[#1f4e66]" style={{ width: `${(i.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
        {b.note && <p className={`${sans.className} text-[13px] text-[#5b6168] pt-2`}>{b.note}</p>}
      </div>
    </Figure>
  );
}

// "What it means": two columns split by a rule, like a paper's analysis box.
function Takeaways({ b }) {
  return (
    <div className={`${WIDE} my-12 grid md:grid-cols-2 border-y border-[#14181c]`}>
      {b.items.map((t, i) => (
        <div key={t.title} className={`py-7 md:px-8 ${i ? 'border-t md:border-t-0 md:border-l border-[#d8d2c6]' : 'md:pl-0'}`}>
          <p className={`${kicker} text-[#1f4e66] mb-3`}>{t.who === 'buyers' ? 'For buyers' : 'For sellers'}</p>
          <h3 className={`${display.className} text-[24px] leading-snug text-[#14181c] mb-3`}>{t.title}</h3>
          <p className="text-[17px] leading-[1.65] text-[#2b3036]">{t.text}</p>
        </div>
      ))}
    </div>
  );
}

// Neighborhood spotlight: a magazine-style feature that pulls photo and facts from the guide,
// so the post and the guide always match.
function Spotlight({ b }) {
  const n = getNeighborhood(b.neighborhood);
  if (!n) return null;
  const facts = (n.atAGlance || []).slice(0, 3);
  const why = (n.whyPeopleMove || []).slice(0, 3);
  return (
    <article className={`${WIDE} my-12 bg-white border border-[#d8d2c6]`}>
      <div className="relative h-64 md:h-[380px]">
        <Image src={n.image} alt={n.imageAlt || n.name} fill sizes="(max-width: 900px) 100vw, 880px" className="object-cover" />
      </div>
      <div className="p-6 md:p-10">
        <p className={`${kicker} text-[#1f4e66] mb-2`}>Neighborhood Spotlight</p>
        <h3 className={`${display.className} text-[34px] md:text-[44px] leading-tight text-[#14181c] mb-4`}>{n.name}</h3>
        <p className="text-[18px] leading-[1.65] text-[#2b3036] mb-8 max-w-[640px]">{b.text || n.tagline}</p>
        {facts.length > 0 && (
          <div className="grid grid-cols-3 border-y border-[#d8d2c6] py-5 mb-8">
            {facts.map((f, i) => (
              <div key={f.label} className={i ? 'pl-4 border-l border-[#e7e2d8]' : ''}>
                <p className={`${display.className} text-[24px] md:text-[28px] text-[#14181c]`}>{f.value}</p>
                <p className={`${kickerSm} text-[#5b6168] mt-1`}>{f.label}</p>
              </div>
            ))}
          </div>
        )}
        {why.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {why.map((w) => (
              <div key={w.title}>
                <p className={`${display.className} text-[19px] text-[#14181c] mb-1`}>{w.title}</p>
                <p className={`${sans.className} text-[13px] leading-relaxed text-[#5b6168]`}>{w.text}</p>
              </div>
            ))}
          </div>
        )}
        {b.jacobsTake && (
          <blockquote className="border-l-2 border-[#1f4e66] pl-5 mb-8">
            <p className={`${display.className} italic text-[21px] leading-snug text-[#14181c]`}>&ldquo;{b.jacobsTake}&rdquo;</p>
            <footer className={`${kickerSm} text-[#5b6168] mt-3`}>Jacob Hazzard</footer>
          </blockquote>
        )}
        <Link href={guideHref(n)} className={`${sans.className} inline-block bg-[#14181c] text-white px-6 py-3 text-[13px] uppercase tracking-[0.16em] hover:bg-[#1f4e66] transition`}>
          Read the {n.name} guide
        </Link>
      </div>
    </article>
  );
}

// Local event, set like a newspaper calendar listing.
function Event({ b }) {
  const d = new Date(`${b.date}T12:00:00`);
  return (
    <div className={`${WIDE} my-12 border-y border-[#14181c] py-7 grid grid-cols-[88px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-8`}>
      <div className="text-center border-r border-[#d8d2c6] pr-5 md:pr-8">
        <p className={`${kicker} text-[#1f4e66]`}>{d.toLocaleDateString('en-US', { month: 'short' })}</p>
        <p className={`${display.className} text-[52px] md:text-[64px] leading-none text-[#14181c] my-1`}>{d.getDate()}</p>
        <p className={`${kickerSm} text-[#5b6168]`}>{d.toLocaleDateString('en-US', { weekday: 'long' })}</p>
      </div>
      <div>
        <p className={`${kicker} text-[#5b6168] mb-2`}>{b.label || 'Around Town'}</p>
        <h3 className={`${display.className} text-[26px] md:text-[30px] leading-tight text-[#14181c] mb-3`}>{b.title}</h3>
        <p className={`${sans.className} text-[13px] text-[#3c4248] mb-4`}>
          {[b.time, b.where, b.cost].filter(Boolean).join('  ·  ')}
        </p>
        <p className="text-[17px] leading-[1.65] text-[#2b3036]">{b.text}</p>
        {b.href && (
          <a href={b.href} target="_blank" rel="noopener noreferrer" className={`${sans.className} inline-block text-[13px] uppercase tracking-[0.14em] text-[#1f4e66] border-b border-[#1f4e66] mt-4`}>
            Event details
          </a>
        )}
      </div>
    </div>
  );
}

// Numbered steps, e.g. how a sale works from first call to closing.
function Steps({ b }) {
  return (
    <ol className={`${WIDE} my-12 border-t border-[#14181c]`}>
      {b.items.map((t, i) => (
        <li key={t.title} className="py-6 border-b border-[#d8d2c6] flex gap-6">
          <span className={`${display.className} text-[40px] leading-none text-[#b9b2a4] w-12 shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3 className={`${display.className} text-[22px] text-[#14181c] mb-1`}>{t.title}</h3>
            <p className="text-[17px] leading-[1.65] text-[#2b3036]">{t.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// Pull quote / "worth noticing" note.
function Callout({ b }) {
  return (
    <aside className={`${NARROW} my-12 border-y border-[#d8d2c6] py-8 text-center`}>
      {b.title && <p className={`${kicker} text-[#1f4e66] mb-4`}>{b.title}</p>}
      <p className={`${display.className} italic text-[24px] md:text-[28px] leading-snug text-[#14181c]`}>{b.text}</p>
    </aside>
  );
}

export function Block({ b, first }) {
  switch (b.type) {
    case 'h2':
      return (
        <h2 id={anchor(b.text)} className={`${NARROW} scroll-mt-28 mt-16 mb-5 pt-4 border-t border-[#14181c] ${display.className} text-[28px] md:text-[32px] leading-tight text-[#14181c]`}>
          {b.text}
        </h2>
      );
    case 'lede':
      return (
        <p className={`${NARROW} mb-6 text-[19px] md:text-[21px] leading-[1.7] text-[#1e2328] dropcap`}>
          {b.text}
        </p>
      );
    case 'list':
      return (
        <ul className={`${NARROW} list-disc pl-6 space-y-2 mb-6 text-[19px] leading-[1.7]`}>
          {b.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      );
    case 'snapshot': return <Snapshot b={b} />;
    case 'rates': return <Rates b={b} />;
    case 'calculator':
      return <div className={WIDE}><MortgageCalc price={b.price} rate={b.rate} rate15={b.rate15} source={b.source} /></div>;
    case 'compare': return <Compare b={b} />;
    case 'bars': return <Bars b={b} />;
    case 'takeaways': return <Takeaways b={b} />;
    case 'spotlight': return <Spotlight b={b} />;
    case 'event': return <Event b={b} />;
    case 'callout': return <Callout b={b} />;
    case 'steps': return <Steps b={b} />;
    case 'source': return <div className={NARROW}><Source text={b.text} href={b.href} /></div>;
    default:
      return <p className={`${NARROW} mb-6 text-[19px] leading-[1.7] text-[#1e2328]`}>{b.text}</p>;
  }
}
