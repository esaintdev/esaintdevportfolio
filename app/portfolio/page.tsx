"use client";

import React, { useEffect } from "react";
import PublicHeader from "@/components/PublicHeader";
import DemoSection from "@/components/DemoSection";

export default function PortfolioPage() {
    useEffect(() => {
        document.body.classList.remove('loaded');
    }, []);
    return (
        <>
            <PublicHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="tp-template-area tp-template-content-wrap tp-template-bg p-relative tp-bg-black fix" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                            <div className="tp-template-inner" style={{ width: '100%' }}>
                                <img className="images w-100" src="/images/bg_3.png" alt="" style={{ position: 'absolute', top: 0, left: 0, height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.2 }} />
                                <div className="tp-template-content" style={{ marginTop: '50px', position: 'relative', zIndex: 1 }}>
                                    <div className="tp-template-header">
                                        <div className="tp-template-section-title-wrapper text-center">
                                            <div className="tp-template-subtitle-wrapper">
                                                <span className="tp-template-subtitle d-inline-block mb-20">Portfolio</span>
                                            </div>
                                            <div className="tp-template-title-wrapper mb-35">
                                                <h2 className="tp-section-title tp-section-title-white">
                                                    Our Amazing <br />
                                                    Collection
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-hero-noise">
                                <img src="/images/noise.png" alt="" style={{ opacity: 0.05 }} />
                            </div>
                        </div>

                        <DemoSection />
                    </main>
                </div>
            </div>
        </>
    );
}
