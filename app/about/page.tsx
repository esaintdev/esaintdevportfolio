"use client";

import React, { useEffect } from "react";
import PublicHeader from "@/components/PublicHeader";

export default function AboutPage() {
    useEffect(() => {
        document.body.classList.remove('loaded');
    }, []);
    return (
        <>
            <PublicHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* Hero Section */}
                        <div className="tp-template-area tp-template-content-wrap tp-template-bg p-relative tp-bg-black fix" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                            <div className="tp-template-inner" style={{ width: '100%' }}>
                                <img className="images w-100" src="/images/bg_3.png" alt="" style={{ position: 'absolute', top: 0, left: 0, height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.2 }} />
                                <div className="tp-template-content" style={{ marginTop: '50px', position: 'relative', zIndex: 1 }}>
                                    <div className="tp-template-header">
                                        <div className="tp-template-section-title-wrapper text-center">
                                            <div className="tp-template-subtitle-wrapper">
                                                <span className="tp-template-subtitle d-inline-block mb-20">About Us</span>
                                            </div>
                                            <div className="tp-template-title-wrapper mb-35">
                                                <h2 className="tp-section-title tp-section-title-white">
                                                    Building Digital <br />
                                                    Excellence
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

                        {/* Content Section */}
                        <div className="tp-about-area pt-120 pb-120">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10">
                                        <div className="tp-about-content-box text-center">
                                            <div className="d-flex align-items-center justify-content-center mb-40">
                                                <div className="tp-about-img">
                                                    <img src="/images/portfolio.png" alt="Esaint Mjay" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
                                                </div>
                                                <div className="tp-about-info text-start ms-4">
                                                    <h3 className="tp-section-title-sm mb-0">Esaint Mjay</h3>
                                                </div>
                                            </div>
                                            <h3 className="tp-section-title-sm mb-40">Who I Am</h3>
                                            <p className="mb-30" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                                Esaint Mjay is a digital developer dedicated to crafting exceptional web experiences, Mobile Apps, and Software Development.
                                                I believe in the power of programming and technology to transform businesses. I work tirelessly to build solutions that are not only visually stunning but also robust and scalable.
                                            </p>
                                            <p className="mb-60" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                                From concept to deployment, we accompany our clients every step of the way, ensuring their vision comes to life
                                                with pixel-perfect precision. Whether you need a high-converting landing page, a complex web application, or a
                                                unique digital brand identity, we have the expertise to deliver results that exceed expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: '#f5f5f5', borderRadius: '10px' }}>
                                            <h4 className="mb-20">Innovation</h4>
                                            <p>Pushing boundaries with the latest technologies to keep you ahead.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: '#f5f5f5', borderRadius: '10px' }}>
                                            <h4 className="mb-20">Quality</h4>
                                            <p>Uncompromising attention to detail in every line of code and pixel.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: '#f5f5f5', borderRadius: '10px' }}>
                                            <h4 className="mb-20">Support</h4>
                                            <p>Dedicated support ensuring your digital assets perform at their best.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
