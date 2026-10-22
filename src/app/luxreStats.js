import Image from 'next/image';

// Brokerage figures as published on luxrerealty.com (Oct 2026). Update here if Luxre's site changes.
const stats = [
  { value: '$2B+', label: 'Total Sales Volume' },
  { value: '14', label: 'Years in Real Estate' },
  { value: '2', label: 'Offices: San Clemente & Huntington Beach' },
];

export default function LuxreStats() {
  return (
    <section className="bg-[#111111] py-16 px-6 text-center">
      <p className="uppercase text-xs tracking-[0.3em] text-gray-400 f2 mb-4">Backed by my brokerage</p>
      <div className="flex justify-center mb-8">
        <Image src="/LUXRE Realty Logo.svg" alt="Luxre Realty" width={160} height={80} className="h-14 w-auto" />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl md:text-5xl font-light f1 text-white">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-gray-400 f2">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-gray-500 f2">
        Brokerage figures for Luxre Realty, Inc. (CA DRE# 01897290), as published at{' '}
        <a href="https://luxrerealty.com" target="_blank" rel="noopener noreferrer" className="underline">luxrerealty.com</a>.
      </p>
    </section>
  );
}
