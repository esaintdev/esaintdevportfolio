"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PublicHeaderProps {
    settings?: any;
}

export default function PublicHeader({ settings }: PublicHeaderProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header>
            {/* header area start */}
            <div className="tp-header-area pre-header header-transparent mt-10" style={{ backgroundColor: "#010103" }}>
                <div className="tp-header-box">
                    <div className="container container-1730">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-6">
                                <div className="tp-header-logo">
                                    <Link href="/">
                                        <h3 className="tp-section-title-sm text-white">Esaint Mjay</h3>                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="tp-header-menu text-center">
                                    <nav>
                                        <ul>
                                            <li className="smooth">
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <Link href="/portfolio">Portfolio</Link>
                                            </li>
                                            <li className="smooth">
                                                <a href="/about">About</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="tp-header-btn text-end d-flex align-items-center justify-content-end gap-3">
                                    <a
                                        className="tp-btn-yellow btn-white btn-bdr d-none d-md-inline-flex align-items-center"
                                        href={`https://wa.me/${settings?.whatsapp ? settings.whatsapp.replace(/\+/g, '') : '2348121855275'}`}
                                        target="_blank"
                                    >
                                        <span>
                                            <span className="text-1">Contact</span>
                                            <span className="text-2">Contact</span>
                                        </span>
                                    </a>

                                    {/* Mobile Menu Button */}
                                    <button
                                        className="d-lg-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                        style={{ background: 'transparent', border: 'none', color: 'white', padding: '0' }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header area end */}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(1, 1, 3, 0.95)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(10px)'
                }}>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            padding: '0'
                        }}
                    >
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <nav style={{ textAlign: 'center' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '20px' }}>
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>Home</Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>Portfolio</Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>About</Link>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', color: 'white', fontWeight: 'bold' }}>Contact</Link>
                            </li>
                            <li>
                                <a
                                    className="tp-btn-yellow btn-white btn-bdr d-inline-flex align-items-center"
                                    href={`https://wa.me/${settings?.whatsapp ? settings.whatsapp.replace(/\+/g, '') : '2348121855275'}`}
                                    target="_blank"
                                >
                                    <span>
                                        <span className="text-1">Contact Me</span>
                                        <span className="text-2">Contact Me</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
