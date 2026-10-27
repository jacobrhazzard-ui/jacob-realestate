import Link from 'next/link';
import { guideHref } from './neighborhoods';

export default function GuideGrid({ items, card = 'bg-white' }) {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {items.map((n) => (
        <Link key={n.slug} href={guideHref(n)} className={`group block ${card} shadow-sm hover:shadow-lg transition overflow-hidden`}>
          <div className="h-56 overflow-hidden">
            <div
              className="h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${n.image.startsWith('http') ? `${n.image}?w=900&q=70&auto=format&fit=crop` : n.image}')` }}
              role="img"
              aria-label={n.imageAlt}
            />
          </div>
          <div className="p-8 f2">
            <h3 className="text-2xl f1 mb-3 group-hover:underline">{n.name}</h3>
            <p className="text-gray-700 leading-relaxed">{n.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

