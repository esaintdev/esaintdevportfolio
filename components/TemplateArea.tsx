"use client";
import React from 'react';

export default function TemplateArea() {
    return (
        <div className="tp-template-area tp-template-content-wrap tp-template-bg p-relative tp-bg-black fix">
            <div className="tp-template-inner">
                <img className="images w-100" src="images/bg_3.png" alt="" />
                <div className="tp-template-content">
                    <div className="tp-template-header">
                        <div className="tp-template-section-title-wrapper">
                            <div className="tp-template-subtitle-wrapper">
                                <span className="tp-template-subtitle d-inline-block mb-20">Awesome inner pages</span>
                            </div>
                            <div className="tp-template-title-wrapper mb-35">
                                <h2 className="tp-section-title tp-section-title-white">Build stunning <br />
                                    sites with awesome <br />
                                    inner pages
                                </h2>
                            </div>
                        </div>
                        <div className="tp-template-btn-wrapper">
                            <a className="tp-btn-yellow d-inline-flex align-items-center" href="aleric/index.html" target="_blank">
                                <span>
                                    <span className="text-1">Explore Demos</span>
                                    <span className="text-2">Explore Demos</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
