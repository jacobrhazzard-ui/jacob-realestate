'use client';

import { useState } from 'react';

const money = (v) => `$${Math.round(v).toLocaleString('en-US')}`;

// Principal + interest only. Taxes, insurance, HOA and Mello-Roos are extra.
function monthlyPI(price, downPct, ratePct, years) {
  const loan = price * (1 - downPct / 100);
  const r = ratePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return loan / n;
  return (loan * r) / (1 - Math.pow(1 + r, -n));
}

export default function MortgageCalc({ price = 1800000, rate = 7, rate15, source }) {
  const [p, setP] = useState(price);
  const [down, setDown] = useState(20);
  const [term, setTerm] = useState(30);
  const activeRate = term === 15 && rate15 ? rate15 : rate;
  const pi = monthlyPI(p, down, activeRate, term);
  const lower = monthlyPI(p, down, activeRate - 0.5, term);

  return (
    <div className="bg-white shadow-sm p-6 md:p-8 my-10 not-prose">
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Try it yourself</p>
      <h3 className="text-2xl f1 text-gray-900 mb-6">What would the payment be?</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 f2 text-base">
          <label className="block">
            <span className="flex justify-between text-gray-700 mb-2">
              <span>Home price</span>
              <span className="font-medium text-gray-900">{money(p)}</span>
            </span>
            <input type="range" min={500000} max={5000000} step={25000} value={p} onChange={(e) => setP(Number(e.target.value))} className="w-full accent-gray-900" />
          </label>
          <label className="block">
            <span className="flex justify-between text-gray-700 mb-2">
              <span>Down payment</span>
              <span className="font-medium text-gray-900">{down}% ({money((p * down) / 100)})</span>
            </span>
            <input type="range" min={5} max={50} step={5} value={down} onChange={(e) => setDown(Number(e.target.value))} className="w-full accent-gray-900" />
          </label>
          <div>
            <span className="block text-gray-700 mb-2">Loan term</span>
            <div className="flex gap-2">
              {[30, 15].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTerm(t)}
                  disabled={t === 15 && !rate15}
                  className={`px-5 py-2 border ${term === t ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-800 hover:border-gray-900'}`}
                >
                  {t}-year fixed
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white p-6 flex flex-col justify-center">
          <p className="f2 text-sm uppercase tracking-widest text-white/60">Principal + interest</p>
          <p className="text-5xl f1 font-light my-2">{money(pi)}<span className="text-xl text-white/60">/mo</span></p>
          <p className="f2 text-sm text-white/70">At {activeRate.toFixed(2)}% on a {term}-year fixed loan.</p>
          <p className="f2 text-sm text-white/70 mt-4">
            If rates were half a point lower, about <span className="text-white font-medium">{money(lower)}/mo</span>, a difference of {money(pi - lower)} a month.
          </p>
        </div>
      </div>
      <p className="f2 text-xs text-gray-500 mt-6">
        An estimate only, not a loan offer. Property taxes, insurance, HOA dues and Mello-Roos are not included, and your actual rate will depend on your lender and credit.
        {source ? ` Rate: ${source}.` : ''}
      </p>
    </div>
  );
}
