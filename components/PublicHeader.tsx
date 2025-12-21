"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicHeader() {
    const pathname = usePathname();
    const isHome = pathname === "/";

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
                                <div className="tp-header-btn text-end">
                                    <a
                                        className="tp-btn-yellow btn-white btn-bdr d-inline-flex align-items-center"
                                        href="https://wa.me/2348121855275"
                                        target="_blank"
                                    >
                                        
                                        <span>
                                            <span className="text-1">Contact</span>
                                            <span className="text-2">Contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header area end */}
        </header>
    );
}
