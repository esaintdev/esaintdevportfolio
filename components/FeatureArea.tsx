"use client";
import React from 'react';

export default function FeatureArea() {
    return (
        <div className="tp-feature-2-area tp-sm-pt tp-sm-pb pt-130 pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="tp-feature-2-title-box text-center mb-55">
                            <h4 className="tp-section-title mb-15 tp-fade-anim" data-delay=".5">
                                <span>Premium Services <br /> for your digital needs.</span>
                            </h4>
                            <div className="tp-fade-anim" data-delay=".7">
                                <p>Unlock powerful solutions: Web, Mobile, & Automation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-feature-2-wrap">
                    <div className="tp-feature-2-left">
                        <div className="tp-feature-2-item mb-30 p-relative">
                            <div className="tp-feature-2-bg">
                                <img src="images/feature-2-1.jpg" alt="" />
                            </div>
                            <div className="tp-feature-2-content">
                                <span className="tp-feature-2-icon p-relative">
                                    <img className="anim-img" src="images/feature-shape-2-1.png" alt="" />
                                    <img src="images/feature-shape-2-2.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="tp-feature-2-item mb-30 p-relative">
                            <div className="tp-feature-2-bg">
                                <img src="images/feature-2-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tp-feature-2-middle mb-30 d-flex justify-content-center align-items-end" data-background="assets/img/feature/feature-bg-2.jpg">
                        <div className="tp-feature-2-item d-flex h-100 flex-column justify-content-between">
                            <div className="tp-feature-2-middle-content text-center">
                                <span>Automation & AI</span>
                                <h4 className="tp-feature-2-title mb-35">Intelligent Systems <br /> for Business Growth</h4>
                            </div>
                            <div id="image-compare" className="tp-feature-2-beforeafter p-relative text-center">
                                <img src="images/feature-light-img.jpg" alt="" />
                                <img src="images/feature-dark-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tp-feature-2-right">
                        <div className="tp-feature-2-item mb-30">
                            <div className="tp-feature-2-bg">
                                <img src="images/feature-2-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="tp-feature-2-item mb-30">
                            <div className="tp-feature-2-bg p-relative">
                                <img className="text-img" src="images/text.png" alt="" />
                                <img className="gif-img" src="images/gsap.gif" alt="" />
                                <img src="images/feature-2-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-feature-bottom d-flex">
                    <div className="tp-feature-new-item d-flex justify-content-between align-items-center mb-30">
                        <div className="tp-feature-new-content">
                            <h4 className="tp-feature-new-title">Optimized <br /> for fast loading.</h4>
                            <p>
                                Enjoy optimized performance with faster load <br />
                                times and higher speed scores.
                            </p>
                            <a href="#">
                                Run speed test
                                <span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1H1M9 1V9" stroke="#0E0F11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="tp-feature-new-img">
                            <img src="images/feature-new-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
