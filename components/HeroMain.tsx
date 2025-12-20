"use client";
import React from 'react';
import Link from 'next/link';

export default function HeroMain() {
    return (
        <div className="tp-hero-area tp-hero-bg p-relative fix include-bg pb-50" style={{ backgroundColor: "#010103", borderRadius: 0 }}>
            <div className="container z-index-1">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-hero-wrapper pt-150 pb-80">
                            <div className="tp-hero-content text-start">
                                {/* <span className="tp-section-subtitle tp-fade-anim mb-30 d-inline-block" data-delay=".3" style={{ color: '#FFD700' }}>Welcome to my portfolio!</span> */}
                                <h2 className="tp-hero-title tp-fade-anim mb-30" data-delay=".5" style={{ fontSize: '70px', lineHeight: '1.1' }}>
                                    Hello, my <br />
                                    name's <span style={{ color: '#3A96E8' }}>Esaint.</span>
                                </h2>
                                <div className="tp-fade-anim mb-40" data-delay=".7">
                                    <p style={{ fontSize: '18px', maxWidth: '500px', color: '#B0B0B0' }}>I'm a fullstack developer. Currently working with @knuthub as a developer and graphic designer.</p>
                                </div>

                                <div className="tp-hero-btn-box text-start">
                                    <div className="tp-fade-anim smooth d-inline-block me-3" data-delay=".5" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                        <Link className="tp-btn-yellow btn-gray btn-bdr border-style d-inline-flex align-items-center" href="/contact" style={{ borderRadius: '30px', padding: '10px 30px' }}>
                                            <span>
                                                <span className="text-1">Download cv</span>
                                                <span className="text-2">Download cv</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="tp-fade-anim smooth d-inline-block" data-delay=".3" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                        <Link className="tp-btn-yellow btn-bdr d-inline-flex align-items-center" href="/portfolio" style={{ borderRadius: '30px', padding: '10px 30px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                                            <span>
                                                <span className="text-1">See my work</span>
                                                <span className="text-2">See my work</span>
                                            </span>
                                            <i className="fa-regular fa-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="tp-hero-scroll-btn mt-80 tp-fade-anim" data-delay="1">
                                    <button
                                        onClick={() => {
                                            const featureSection = document.getElementById('feature');
                                            if (featureSection) {
                                                featureSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        style={{ background: 'transparent', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                                    >
                                        <span style={{ height: '40px', width: '25px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
                                            <span style={{ width: '4px', height: '8px', background: '#fff', borderRadius: '2px' }}></span>
                                        </span>
                                        Scroll down
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-hero-thumb-wrapper p-relative text-center text-lg-end tp-fade-anim" data-delay=".9" style={{ paddingTop: '50px' }}>
                            <div className="tp-hero-thumb-shape" style={{
                                position: 'relative',
                                display: 'inline-block',
                                borderRadius: '50% 50% 0 0',
                                border: '2px solid rgba(255,255,255,0.1)',
                                padding: '20px',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                                transform: 'scale(1.2)'
                            }}>
                                <img
                                    src="images/portfolio.png"
                                    alt="Visual Designer"
                                    className="img-fluid"
                                    style={{
                                        borderRadius: '200px 200px 0 0',
                                        maxWidth: '100%',
                                        height: 'auto',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                    }}
                                />
                                {/* Decorative elements mimicking the design */}
                                <div style={{ position: 'absolute', top: '10%', left: '-30px', width: '60px', height: '60px' }}>
                                    {/* Triangle/Shape placeholder */}
                                    <svg viewBox="0 0 100 100" fill="#3A96E8" style={{ width: '100%', height: '100%', transform: 'rotate(-15deg)' }}>
                                        <path d="M50 15 L90 85 L10 85 Z" />
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', bottom: '10%', right: '-30px', width: '50px', height: '50px' }}>
                                    {/* Spiral/Spring placeholder */}
                                    <svg viewBox="0 0 100 100" fill="none" stroke="#3A96E8" strokeWidth="15" style={{ width: '100%', height: '100%', transform: 'rotate(45deg)' }}>
                                        <path d="M20 20 Q80 20 80 50 T20 80" />
                                    </svg>
                                </div>
                            </div>

                            {/* Social Icons Sidebar */}
                            <div className="tp-hero-social d-none d-xl-flex flex-column" style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', gap: '20px' }}>
                                <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontSize: '12px', letterSpacing: '2px' }}>FOLLOW ME ON</span>
                                <a href="#" style={{ color: '#3A96E8', fontSize: '20px' }}><i className="fab fa-behance"></i></a>
                                <a href="#" style={{ color: '#ea4c89', fontSize: '20px' }}><i className="fab fa-dribbble"></i></a>
                                <a href="#" style={{ color: '#0077b5', fontSize: '20px' }}><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
