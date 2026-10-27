'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, X } from 'lucide-react';

// Small "call or text Jacob" card, bottom-right. Appears after a short delay,
// stays closed for the rest of the visit once dismissed.
export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem('jh-popup-closed') === '1'; } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem('jh-popup-closed', '1'); } catch {}
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-label="Contact Jacob Hazzard" className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-xs bg-white shadow-2xl border border-gray-200 p-5 f2 animate-[hero-rise_0.6s_ease-out]">
      <button type="button" onClick={close} aria-label="Close" className="absolute top-3 right-3 text-gray-400 hover:text-gray-900">
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-3 mb-3">
        <Image src="/headshot3.png" alt="Jacob Hazzard" width={48} height={48} className="h-12 w-12 rounded-full object-cover object-top" />
        <div>
          <p className="f1 text-lg text-gray-900 leading-tight">Jacob Hazzard</p>
          <p className="text-xs text-gray-500">REALTOR® | Luxre Realty</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">Have a question? Call or text me anytime.</p>
      <div className="grid grid-cols-2 gap-2">
        <a href="tel:+19492919395" className="flex items-center justify-center gap-1 bg-gray-900 text-white py-2.5 text-sm hover:bg-gray-700 transition">
          <Phone className="h-4 w-4" aria-hidden="true" />Call
        </a>
        <a href="sms:+19492919395" className="flex items-center justify-center gap-1 border border-gray-900 py-2.5 text-sm hover:bg-gray-100 transition">
          <MessageSquare className="h-4 w-4" aria-hidden="true" />Text
        </a>
      </div>
      <p className="text-center text-sm text-gray-900 mt-3 tracking-wide">(949) 291-9395</p>
    </div>
  );
}
