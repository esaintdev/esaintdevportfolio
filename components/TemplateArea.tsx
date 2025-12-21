"use client";
import React from 'react';

export default function TemplateArea() {
    return (
        <div className="tp-template-area tp-template-content-wrap tp-template-bg p-relative tp-bg-black fix">
            <div className="tp-template-inner">
                <img className="images w-100" src="images/bg_3.png" alt="" style={{ height: '650px', objectFit: 'cover', opacity: 0.1 }} />
                <div className="tp-template-content" style={{ paddingTop: '130px', paddingBottom: '130px' }}>
                    <div className="tp-template-header">
                        <div className="tp-template-section-title-wrapper">
                            <div className="tp-template-subtitle-wrapper">
                                <span className="tp-template-subtitle d-inline-block mb-20">My Methodology</span>
                            </div>
                            <div className="tp-template-title-wrapper mb-35">
                                <h2 className="tp-section-title tp-section-title-white">Crafting Scalable <br />
                                    Solutions for Modern <br />
                                    Business Needs
                                </h2>
                            </div>
                        </div>
                        <div className="tp-template-btn-wrapper">
                            <a className="tp-btn-yellow d-inline-flex align-items-center" href="/portfolio">
                                <span>
                                    <span className="text-1">View My Work</span>
                                    <span className="text-2">View My Work</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
