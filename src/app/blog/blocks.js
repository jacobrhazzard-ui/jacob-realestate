import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDownRight, Minus, CalendarDays, MapPin, Clock, Ticket, Home, KeyRound } from 'lucide-react';
import { getNeighborhood } from '../san-clemente-neighborhoods/neighborhoods';
import MortgageCalc from './mortgageCalc';

export const anchor = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function Trend({ dir, text, dark }) {
  const Icon = dir === 'up' ? ArrowUpRight : dir === 'down' ? ArrowDownRight : Minus;
  const color = dark ? 'text-white/70' : 'text-gray-600';
  return (
    <span className={`inline-flex items-center gap-1 text-sm ${color}`}>
      <Icon className="h-4 w-4" aria-hidden="true" />
      {text}
    </span>
  );
}

function Source({ text, href }) {
  if (!text) return null;
  return (
    <p className="f2 text-xs text-gray-500 mt-4">
      {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{text}</a> : text}
    </p>
  );
}

// Dark stat strip, same look as the neighborhood guides.
function Snapshot({ b }) {
  return (
    <section className="my-10 -mx-6 md:mx-0">
      <div className="bg-gray-900 text-white px-6 py-10 md:px-10">
        {b.title && <p className="text-xs uppercase tracking-widest text-white/60 mb-6">{b.title}</p>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {b.items.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl f1 font-light text-blue-300">{s.value}</p>
              <p className="f2 text-xs uppercase tracking-widest text-white/70 mt-2 mb-2">{s.label}</p>
              {s.change && <Trend dir={s.dir} text={s.change} dark />}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 md:px-0"><Source text={b.source} href={b.href} /></div>
    </section>
  );
}

// Mortgage rate cards with a this week / last week / year ago bar for each.
function Rates({ b }) {
  const max = Math.max(...b.items.flatMap((r) => [r.value, r.prev, r.yearAgo].filter(Boolean)));
  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 gap-6">
        {b.items.map((r) => {
          const diff = r.prev != null ? +(r.value - r.prev).toFixed(2) : null;
          const rows = [
            { k: 'This week', v: r.value, strong: true },
            r.prev != null && { k: 'Last week', v: r.prev },
            r.yearAgo != null && { k: 'A year ago', v: r.yearAgo },
          ].filter(Boolean);
          return (
            <div key={r.label} className="bg-white shadow-sm p-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">{r.label}</p>
              <p className="text-5xl f1 font-light text-gray-900 my-2">{r.value.toFixed(2)}%</p>
              {diff != null && (
                <Trend dir={diff > 0 ? 'up' : diff < 0 ? 'down' : 'flat'} text={`${diff > 0 ? '+' : ''}${diff.toFixed(2)} pts from last week`} />
              )}
              <div className="mt-6 space-y-3">
                {rows.map((row) => (
                  <div key={row.k} className="f2 text-sm">
                    <div className="flex justify-between text-gray-600 mb-1">
                      <span>{row.k}</span>
                      <span className={row.strong ? 'text-gray-900 font-medium' : ''}>{row.v.toFixed(2)}%</span>
                    </div>
                    <div className="h-2 bg-gray-100">
                      <div className={row.strong ? 'h-2 bg-gray-900' : 'h-2 bg-gray-400'} style={{ width: `${(row.v / max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Source text={b.source} href={b.href} />
    </div>
  );
}

// San Clemente vs. the U.S. side by side.
function Compare({ b }) {
  return (
    <div className="my-10 bg-white shadow-sm overflow-hidden">
      <div className="grid grid-cols-3 bg-gray-900 text-white f2 text-xs uppercase tracking-widest">
        <div className="p-4" />
        <div className="p-4">{b.localLabel || 'San Clemente'}</div>
        <div className="p-4">{b.otherLabel || 'United States'}</div>
      </div>
      {b.rows.map((r, i) => (
        <div key={r.label} className={`grid grid-cols-3 f2 text-base ${i % 2 ? 'bg-gray-50' : ''}`}>
          <div className="p-4 text-gray-600 text-sm md:text-base">{r.label}</div>
          <div className="p-4 text-gray-900">
            <p className="font-medium">{r.local}</p>
            {r.localNote && <p className="text-sm text-gray-500">{r.localNote}</p>}
          </div>
          <div className="p-4 text-gray-900">
            <p className="font-medium">{r.other}</p>
            {r.otherNote && <p className="text-sm text-gray-500">{r.otherNote}</p>}
          </div>
        </div>
      ))}
      <div className="px-4 pb-4"><Source text={b.source} /></div>
    </div>
  );
}

// Horizontal bar chart, e.g. where buyers are searching from.
function Bars({ b }) {
  const max = Math.max(...b.items.map((i) => i.value));
  return (
    <div className="my-10 bg-white shadow-sm p-6 md:p-8">
      {b.title && <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">{b.title}</p>}
      <div className="space-y-4">
        {b.items.map((i) => (
          <div key={i.label} className="f2">
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>{i.label}</span>
              <span className="text-gray-900 font-medium">{i.value.toLocaleString('en-US')}</span>
            </div>
            <div className="h-3 bg-gray-100">
              <div className="h-3 bg-gradient-to-r from-gray-700 to-gray-900" style={{ width: `${(i.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      {b.note && <p className="f2 text-sm text-gray-600 mt-6">{b.note}</p>}
      <Source text={b.source} href={b.href} />
    </div>
  );
}

// "What it means" for buyers and sellers, side by side.
function Takeaways({ b }) {
  const icons = { buyers: KeyRound, sellers: Home };
  return (
    <div className="my-10 grid md:grid-cols-2 gap-6">
      {b.items.map((t) => {
        const Icon = icons[t.who] || Home;
        return (
          <div key={t.title} className="bg-white shadow-sm p-6">
            <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl f1 mb-2 text-gray-900">{t.title}</h3>
            <p className="f2 text-base text-gray-700 leading-relaxed">{t.text}</p>
          </div>
        );
      })}
    </div>
  );
}

// Neighborhood spotlight: pulls photo and quick facts straight from the guide,
// so the post and the guide always match.
function Spotlight({ b }) {
  const n = getNeighborhood(b.neighborhood);
  if (!n) return null;
  const facts = (n.atAGlance || []).slice(0, 3);
  const why = (n.whyPeopleMove || []).slice(0, 3);
  return (
    <div className="my-10 bg-white shadow-sm overflow-hidden">
      <div className="relative h-64 md:h-80">
        <Image src={n.image} alt={n.imageAlt || n.name} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Neighborhood Spotlight</p>
          <p className="text-3xl md:text-4xl f1 font-light">{n.name}</p>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <p className="f2 text-lg text-gray-700 mb-6">{b.text || n.tagline}</p>
        {facts.length > 0 && (
          <div className="grid grid-cols-3 gap-4 border-y border-gray-200 py-6 mb-6">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-2xl f1 text-gray-900">{f.value}</p>
                <p className="f2 text-xs uppercase tracking-widest text-gray-500 mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        )}
        {why.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {why.map((w) => (
              <div key={w.title}>
                <p className="f1 text-lg text-gray-900 mb-1">{w.title}</p>
                <p className="f2 text-sm text-gray-600 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        )}
        {b.jacobsTake && (
          <div className="bg-[#f1f0eb] p-5 mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Jacob&apos;s take</p>
            <p className="f2 text-base text-gray-800 italic">{b.jacobsTake}</p>
          </div>
        )}
        <Link href={`/san-clemente-neighborhoods/${n.slug}`} className="inline-block bg-gray-900 text-white px-6 py-3 f2 tracking-wide hover:bg-gray-700 transition">
          Read the full {n.name} guide &rarr;
        </Link>
      </div>
    </div>
  );
}

// Local event card with a date badge.
function Event({ b }) {
  const d = new Date(`${b.date}T12:00:00`);
  return (
    <div className="my-10 bg-white shadow-sm flex flex-col md:flex-row">
      <div className="bg-gray-900 text-white flex md:flex-col items-center justify-center gap-3 md:gap-0 p-6 md:w-40 shrink-0">
        <p className="text-sm uppercase tracking-widest text-white/70">{d.toLocaleDateString('en-US', { month: 'short' })}</p>
        <p className="text-5xl f1 font-light">{d.getDate()}</p>
        <p className="text-sm uppercase tracking-widest text-white/70">{d.toLocaleDateString('en-US', { weekday: 'short' })}</p>
      </div>
      <div className="p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{b.label || 'Around Town'}</p>
        <h3 className="text-2xl f1 text-gray-900 mb-4">{b.title}</h3>
        <div className="flex flex-wrap gap-x-6 gap-y-2 f2 text-sm text-gray-600 mb-4">
          {b.time && <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden="true" />{b.time}</span>}
          {b.where && <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" aria-hidden="true" />{b.where}</span>}
          {b.cost && <span className="inline-flex items-center gap-1"><Ticket className="h-4 w-4" aria-hidden="true" />{b.cost}</span>}
        </div>
        <p className="f2 text-base text-gray-700 leading-relaxed">{b.text}</p>
        {b.href && (
          <a href={b.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 f2 text-sm underline mt-4">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />Event details
          </a>
        )}
      </div>
    </div>
  );
}

function Callout({ b }) {
  return (
    <div className="my-10 border-l-4 border-gray-900 bg-white p-6 shadow-sm">
      {b.title && <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{b.title}</p>}
      <p className="f1 text-2xl text-gray-900 leading-snug">{b.text}</p>
    </div>
  );
}

export function Block({ b }) {
  switch (b.type) {
    case 'h2':
      return <h2 id={anchor(b.text)} className="text-3xl f1 font-light mt-16 mb-5 text-gray-900 scroll-mt-24">{b.text}</h2>;
    case 'list':
      return (
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {b.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      );
    case 'snapshot': return <Snapshot b={b} />;
    case 'rates': return <Rates b={b} />;
    case 'calculator': return <MortgageCalc price={b.price} rate={b.rate} rate15={b.rate15} source={b.source} />;
    case 'compare': return <Compare b={b} />;
    case 'bars': return <Bars b={b} />;
    case 'takeaways': return <Takeaways b={b} />;
    case 'spotlight': return <Spotlight b={b} />;
    case 'event': return <Event b={b} />;
    case 'callout': return <Callout b={b} />;
    case 'source': return <Source text={b.text} href={b.href} />;
    default:
      return <p className="mb-6">{b.text}</p>;
  }
}
