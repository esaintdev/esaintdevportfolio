"use client";
import React from 'react';
import Link from 'next/link';

export default function HeroMain() {
    return (
        <div className="tp-hero-area tp-hero-bg p-relative fix include-bg pb-50" data-bg-color="#010103">
            <div className="tp-hero-noise">
                <img src="images/noise.png" alt="" />
            </div>
            <div className="container-fluid z-index-1 p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-hero-wrapper pt-200 pb-80">
                            <div className="tp-hero-content text-center">
                                <h2 className="tp-hero-title tp-fade-anim" data-delay=".5">
                                    Elevate Your Business <br />
                                    with Esaint Mjay
                                </h2>
                                <div className="tp-fade-anim" data-delay=".7">
                                    <p>Websites | Software | Mobile Apps | Modern Web Apps</p>
                                    <p className="mt-10" style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                                        <a href="mailto:esaint.designer@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>esaint.designer@gmail.com</a>
                                        <span className="mx-2">|</span>
                                        <a href="https://wa.me/2348121855275" style={{ color: 'inherit', textDecoration: 'none' }}>+234 812 185 5275</a>
                                    </p>
                                </div>
                            </div>

                            <div className="tp-hero-btn-box text-center">
                                <div className="tp-fade-anim smooth" data-delay=".3" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                    <Link className="tp-btn-yellow btn-orange btn-bdr d-inline-flex align-items-center" href="/portfolio">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                                            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 6L1 5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696698C15.4645 0.403804 14.9896 0.403805 14.6967 0.696698C14.4038 0.989591 14.4038 1.46446 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6L1 6.75L20 6.75L20 6L20 5.25L1 5.25L1 6Z" fill="white"></path>
                                        </svg>
                                        <span>
                                            <span className="text-1">My Portfolio</span>
                                            <span className="text-2">My Portfolio</span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="tp-fade-anim smooth" data-delay=".5" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                    <Link className="tp-btn-yellow btn-gray btn-bdr border-style d-inline-flex align-items-center" href="/about">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M8.835 16.67C13.1622 16.67 16.67 13.1621 16.67 8.83497C16.67 4.50782 13.1622 0.999969 8.835 0.999969C4.50785 0.999969 1 4.50782 1 8.83497C1 13.1621 4.50785 16.67 8.835 16.67Z" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8.83594 5.70093V11.9689" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M5.70117 8.83502H11.9692" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <span>
                                            <span className="text-1">About Me</span>
                                            <span className="text-2">About Me</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-hero-gallery-box">
                    <div className="row row-cols-lg-5">
                        <div className="col">
                            <div className="tp-hero-gallery-item" data-speed="0.7">
                                <img src="images/hero-thumb-1.png" alt="" />
                                <img src="images/hero-thumb-1.png" alt="" />
                                <img src="images/hero-thumb-1.png" alt="" />
                                <img src="images/hero-thumb-1.png" alt="" />
                                <img src="images/hero-thumb-1.png" alt="" />
                                <img src="images/hero-thumb-1.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="tp-hero-gallery-item" data-speed="0.90">
                                <img src="images/hero-thumb-2.png" alt="" />
                                <img src="images/hero-thumb-2.png" alt="" />
                                <img src="images/hero-thumb-2.png" alt="" />
                                <img src="images/hero-thumb-2.png" alt="" />
                                <img src="images/hero-thumb-2.png" alt="" />
                                <img src="images/hero-thumb-2.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="tp-hero-gallery-item" data-speed="0.7">
                                <img src="images/hero-thumb-3.png" alt="" />
                                <img src="images/hero-thumb-3.png" alt="" />
                                <img src="images/hero-thumb-3.png" alt="" />
                                <img src="images/hero-thumb-3.png" alt="" />
                                <img src="images/hero-thumb-3.png" alt="" />
                                <img src="images/hero-thumb-3.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="tp-hero-gallery-item" data-speed="0.90">
                                <img src="images/hero-thumb-4.png" alt="" />
                                <img src="images/hero-thumb-4.png" alt="" />
                                <img src="images/hero-thumb-4.png" alt="" />
                                <img src="images/hero-thumb-4.png" alt="" />
                                <img src="images/hero-thumb-4.png" alt="" />
                                <img src="images/hero-thumb-4.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="tp-hero-gallery-item" data-speed="0.7">
                                <img src="images/hero-thumb-5.png" alt="" />
                                <img src="images/hero-thumb-5.png" alt="" />
                                <img src="images/hero-thumb-5.png" alt="" />
                                <img src="images/hero-thumb-5.png" alt="" />
                                <img src="images/hero-thumb-5.png" alt="" />
                                <img src="images/hero-thumb-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
