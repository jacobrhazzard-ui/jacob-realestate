'use client';

import { useEffect, useRef } from 'react';

// IDX Broker "Homepage Coastal Carousel" widget (ID 181864): active San Clemente
// listings $1.5M+, newest first. Edit the criteria in IDX Broker > Design > Widgets.
// MLS rules require the listing brokerage credit, which IDX Broker renders.
const WIDGET_ID = '181864';
export const IDX_SEARCH_URL = 'https://jacobhazzardrealestate.idxbroker.com/idx/map/mapsearch';

export default function IdxCarousel() {
  const box = useRef(null);
  useEffect(() => {
    const el = box.current;
    if (!el || el.querySelector('script')) return;
    const s = document.createElement('script');
    s.id = `idxwidgetsrc-${WIDGET_ID}`;
    s.charset = 'UTF-8';
    s.type = 'text/javascript';
    s.src = `https://jacobhazzardrealestate.idxbroker.com/idx/widgets/${WIDGET_ID}`;
    el.appendChild(s);
  }, []);
  return <div ref={box} className="idx-carousel min-h-[280px]" />;
}
