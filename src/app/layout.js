import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd, SITE, agent, author } from './jsonld';
import "./globals.css";
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
  metadataBase: new URL("https://jacobhazzardrealestate.com"),
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
    description: "Luxury real estate, renovations, investments, rentals, and sales across Orange County, California. Based in San Clemente.",
    url: "https://jacobhazzardrealestate.com",
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
    description: "San Clemente based realtor specializing in renovations, selling, buying and investment properties in Orange County.",
    images: ["https://jacobhazzardrealestate.com/cordoba5.jpeg"]
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
      </body>
    </html>
  );
}
