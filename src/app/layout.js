import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd, SITE, agent, author } from './jsonld';
import "./globals.css";
import Script from "next/script";

// Google Analytics 4 measurement ID (G-XXXXXXX). Leave empty to turn GA off.
const GA_ID = "G-V771GFXRMT";
import { Inter, Montserrat, Roboto, Playfair_Display, Merriweather } from 'next/font/google'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });


// app/layout.js (or a separate metadata file imported by layout)
export const metadata = {
  metadataBase: new URL("https://www.jacobhazzardrealestate.com"),
  title: {
    default: "Jacob Hazzard | San Clemente & Orange County Realtor, Luxre Realty",
    template: "%s | Jacob Hazzard, Luxre Realty"
  },
  description: "Jacob Hazzard is a San Clemente-born REALTOR® with Luxre Realty helping buyers, sellers, and families relocating across San Clemente and Orange County, CA.",
  keywords: ["Jacob Hazzard", "Luxre Realty", "San Clemente realtor", "Orange County realtor", "San Clemente real estate agent", "South Orange County real estate", "relocating to Orange County"],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jacob Hazzard | Luxre Realty — San Clemente & Orange County",
    description: "Buying, selling, investment and luxury real estate across San Clemente and Orange County, California.",
    url: "https://www.jacobhazzardrealestate.com",
    siteName: "Jacob Hazzard — Luxre Realty",
    images: [
      {
        url: "/cordoba5.jpeg",
        alt: "San Clemente home sold by Jacob Hazzard, Luxre Realty",
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Hazzard | Luxre Realty",
    description: "San Clemente-born REALTOR® helping buyers and sellers across San Clemente and Orange County.",
    images: ["https://www.jacobhazzardrealestate.com/cordoba5.jpeg"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable}`}
      >
        <JsonLd
          data={[
            agent,
            author,
            {
              '@type': 'WebSite',
              '@id': `${SITE}/#website`,
              url: SITE,
              name: 'Jacob Hazzard Real Estate',
              publisher: { '@id': `${SITE}/#agent` },
            },
          ]}
        />
        {children}
        {/* Follow Up Boss Pixel: shows which pages known leads visit */}
        <Script id="fub-pixel" strategy="afterInteractive">{`(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function() {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"), (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i; e.parentNode.insertBefore(t,e);}) (window,"https://widgetbe.com/agent",document,"widgetTracker"); window.widgetTracker("create", "WT-QGDJBQAE"); window.widgetTracker("send", "pageview");`}</Script>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
