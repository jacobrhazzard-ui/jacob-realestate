'use client';

import { useState } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../footer';
import Navigation from '../navbar';

config.autoAddCss = false;

export default function ContactPage() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Sell', href: '/sell' },
        { label: 'Buy', href: '/buy' },
        { label: 'About', href: '/about' },
        // { label: 'Testimonials', href: '/testimonials' },
    ];

    return (
        <>
            <Head>
                <title>Contact Jacob Hazzard | San Clemente Real Estate</title>
                <meta
                    name="description"
                    content="Get in touch with Jacob Hazzard for all your San Clemente real estate needs. Schedule a consultation today."
                />
            </Head>
            <main className="text-gray-900 bg-[#f1f0eb] font-sans">
                {/* Hero Section */}
                <section
                    className="relative min-h-screen h-[135vh] md:h-[100vh] flex flex-col justify-start px-0"
                    style={{
                        backgroundImage: "url('/ameno-ariel1.jpeg')",
                        backgroundPosition: "center top"
                    }}
                    key={`contact-hero-${pathname}`}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/20 z-10" />

                    {/* Desktop Navigation */}
                    <Navigation />

                    {/* Hero Content Container */}
                    <div className="relative z-20 flex flex-col justify-between h-full pt-32 pb-20">
                        {/* Hero Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-center max-w-4xl mx-auto px-6 pt-15 md:pt-50 md:mb-0"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold f1 mb-4">
                                Let&apos;s Connect
                            </h1>
                            <p className="text-lg md:text-2xl font-light f2 text-white/90 max-w-2xl mx-auto mb-12">
                                Ready to make your next move? Reach out for consultations, property showings, or renovation strategies.
                            </p>

                            {/* CTA Button to Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mb-16"
                            >
                                <button
                                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center gap-3 text-white border-2 border-white px-12 py-4 text-lg tracking-wide font-light hover:bg-white hover:text-black transition-all duration-300 animate-pulse"
                                >
                                    Send Me a Message →
                                </button>

                            </motion.div>
                        </motion.div>

                        {/* Contact Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full mx-auto px-6"
                        >
                            {/* Phone Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <h3 className="text-xl font-semibold f1 mb-2">Call Direct</h3>
                                <Link href="tel:+9492919395" className="text-lg f2 hover:text-white/80 transition">
                                    (949) 291-9395
                                </Link> 
                                <p className="text-sm f2 text-white/60 mt-2">Available 7 days a week</p>
                                <p className="text-sm f2 text-white font-semibold mt-1">Jacob Hazzard | CA DRE# 02222037</p>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 pr-6 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <h3 className="text-xl font-semibold f1 mb-2">Send Email</h3>
                                <Link href="mailto:jacob@hazzardestates.com" className="text-lg f2 hover:text-white/80 transition break-all">
                                    jacob@hazzardestates.com
                                </Link>
                                <p className="text-sm f2 text-white/60 mt-2">Quick response guaranteed</p>
                            </div>

                            {/* Social Card */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center text-white hover:scale-105 transition-transform duration-300 w-full md:w-1/3 hidden md:block">
                                <div className="flex justify-center space-x-4 mb-4">
                                    <Link href="https://www.instagram.com/jacobhazzardrealestate/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-white/80 transition">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/jacob-hazzard-ocrealtor" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-white/80 transition">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                </div>
                                <h3 className="text-xl font-semibold f1 mb-2">Follow Along</h3>
                                <p className="text-lg f2">Stay updated with listings</p>
                                <p className="text-sm f2 text-white/60 mt-2">Market insights & tours</p>
                            </div>
                            <div className="flex justify-center space-x-4 mb-4 md:hidden">
                                <Link href="https://www.instagram.com/jacobhazzardrealestate/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white/100 transition">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/jacob-hazzard-ocrealtor" target="_blank" rel="noopener noreferrer" className="text-2xl text-white/100 transition">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact-form" className="relative bg-[#2e2b28] px-6 py-24 text-white border-t-4 border-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-15">
                                <Image
                                    src="/jg-logo-2.png"
                                    alt="Jacob Hazzard Real Estate logo"
                                    width={200}
                                    height={200}
                                    className="max-w-[200] max-h-[200] object-contain"
                                />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-6 f1">
                                Making a Move in Orange County?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 font-light f2 max-w-2xl mx-auto">
                                Answer a few quick questions about buying or selling and Jacob will reach out with a personalized plan, usually the same day.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-4 md:p-8 border border-gray-700 shadow-2xl"
                        >
                            <iframe
                                title="Contact Jacob Hazzard"
                                src="https://form.jotform.com/262540630184048"
                                className="w-full min-h-[1100px] border-0 bg-white"
                                allow="geolocation; microphone; camera; fullscreen"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="relative bg-[#242220] px-6 py-24 text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="uppercase text-sm tracking-widest text-gray-400 mb-3 f2">
                            Visit Our Office
                        </p>
                        <h2 className="text-4xl font-semibold mb-6 f1">
                            San Clemente Location
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg f2 text-gray-300 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                            </svg>
                            <span>222 Avenida Del Mar, San Clemente, CA 92672</span>
                        </div>
                        <p className="text-gray-400 f2 max-w-2xl mx-auto">
                            Located in the heart of San Clemente, our office provides easy access for clients throughout Orange County&apos;s coastal communities.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}