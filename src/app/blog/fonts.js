// Editorial type for Market Notes: a high-contrast serif for headlines,
// a book serif for reading, and the site's Montserrat for small labels.
import { Playfair_Display, Source_Serif_4, Montserrat } from 'next/font/google';

export const display = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], display: 'swap', variable: '--font-display' });
export const serif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], display: 'swap' });
export const sans = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });

// Palette: paper, ink, hairline rules and one deep Pacific accent.
export const ed = {
  paper: 'bg-[#faf8f4]',
  ink: 'text-[#14181c]',
  rule: 'border-[#d8d2c6]',
  accent: 'text-[#1f4e66]',
};

// Small uppercase label used for kickers and section heads.
export const kicker = `${sans.className} text-[11px] font-semibold uppercase tracking-[0.2em]`;
export const kickerSm = `${sans.className} text-[10px] font-semibold uppercase tracking-[0.14em]`;
