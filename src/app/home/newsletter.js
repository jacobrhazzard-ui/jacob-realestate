'use client';

import { useState } from 'react';

// "San Clemente Market Notes" signup. Goes to Follow Up Boss through /api/lead.
export default function Newsletter() {
  const [state, setState] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState('sending');
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'newsletter', name: f.get('name'), email: f.get('email'), interest: 'Weekly San Clemente Market Notes' }),
      });
      setState(r.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return <p className="f1 text-2xl font-light text-white">You&apos;re on the list. Your first market notes arrive next week.</p>;
  }

  return (
    <form onSubmit={submit} className="flex flex-col md:flex-row gap-3 w-full max-w-2xl mx-auto">
      <label className="sr-only" htmlFor="nl-name">Name</label>
      <input id="nl-name" name="name" required placeholder="Name" className="flex-1 bg-transparent border border-white/40 px-5 py-4 f2 text-white placeholder-white/50 focus:outline-none focus:border-white" />
      <label className="sr-only" htmlFor="nl-email">Email</label>
      <input id="nl-email" name="email" type="email" required placeholder="Email" className="flex-1 bg-transparent border border-white/40 px-5 py-4 f2 text-white placeholder-white/50 focus:outline-none focus:border-white" />
      <button type="submit" disabled={state === 'sending'} className="bg-white text-black px-8 py-4 f2 text-sm uppercase tracking-[0.2em] hover:bg-white/85 transition disabled:opacity-60">
        {state === 'sending' ? 'Joining…' : 'Subscribe'}
      </button>
      {state === 'error' && <p className="f2 text-sm text-red-300 md:basis-full">Something went wrong. Please try again or email jacob@hazzardestates.com.</p>}
    </form>
  );
}
