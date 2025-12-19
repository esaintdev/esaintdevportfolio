"use client";
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header>

            {/* header area start */}
            <div className="tp-header-area pre-header header-transparent mt-10">
                <div className="tp-header-top-area d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-header-top-content text-center">
                                    <p><span>Status:</span> Available for freelance projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-header-box">
                    <div className="container container-1730">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-6">
                                <div className="tp-header-logo">
                                    <a href="index.html"><img data-width="140" src="images/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="tp-header-menu text-center">
                                    <nav>
                                        <ul>
                                            <li className="smooth"><a href="#demo">Demos</a></li>
                                            <li className="smooth"><a href="#feature">Features</a></li>
                                            <li><a href="https://help.aqlova.com/login" target="_blank">Support</a></li>
                                            <li><a href="https://html.aqlova.com/docs/aleric-html-docs/" target="_blank">Documentation</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="tp-header-btn text-end">
                                    <Link className="tp-btn-yellow btn-white btn-bdr d-inline-flex align-items-center" href="/contact">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.3704 4.74025L12.7193 0.321646C12.531 0.00792557 12.1236 -0.0937023 11.8099 0.0945302C11.4962 0.282763 11.3946 0.690158 11.5828 1.00388L14.234 5.42248C14.4222 5.7362 14.8296 5.83783 15.1433 5.6496C15.457 5.46137 15.5587 5.05397 15.3704 4.74025Z" fill="black"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.76615 5.42248L7.41731 1.00388C7.60555 0.690158 7.50392 0.282763 7.1902 0.0945302C6.87648 -0.0937023 6.46908 0.00792557 6.28085 0.321646L3.62969 4.74025C3.44145 5.05397 3.54308 5.46137 3.8568 5.6496C4.17052 5.83783 4.57792 5.7362 4.76615 5.42248Z" fill="black"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.1067 5.1883C18.1386 4.99654 18.0838 4.80035 17.9583 4.65189C17.8319 4.5043 17.6472 4.41858 17.4528 4.41858H1.54582C1.3514 4.41858 1.1667 4.5043 1.04033 4.65189C0.91484 4.80035 0.860049 4.99654 0.891863 5.1883C0.891863 5.1883 1.79503 10.7063 2.23954 13.4272C2.43219 14.6026 3.44758 15.4651 4.63796 15.4651H14.3607C15.551 15.4651 16.5664 14.6026 16.7591 13.4272L18.1067 5.1883ZM8.83651 8.1744V11.7093C8.83651 12.0751 9.13344 12.3721 9.4993 12.3721C9.86516 12.3721 10.1621 12.0751 10.1621 11.7093V8.1744C10.1621 7.80854 9.86516 7.51161 9.4993 7.51161C9.13344 7.51161 8.83651 7.80854 8.83651 8.1744ZM12.3714 8.1744V11.7093C12.3714 12.0751 12.6683 12.3721 13.0342 12.3721C13.4 12.3721 13.697 12.0751 13.697 11.7093V8.1744C13.697 7.80854 13.4 7.51161 13.0342 7.51161C12.6683 7.51161 12.3714 7.80854 12.3714 8.1744ZM5.30163 8.1744V11.7093C5.30163 12.0751 5.59856 12.3721 5.96442 12.3721C6.33028 12.3721 6.62721 12.0751 6.62721 11.7093V8.1744C6.62721 7.80854 6.33028 7.51161 5.96442 7.51161C5.59856 7.51161 5.30163 7.80854 5.30163 8.1744Z" fill="black"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.3372 4.41858H0.662791C0.29693 4.41858 0 4.71551 0 5.08137C0 5.44724 0.29693 5.74416 0.662791 5.74416H18.3372C18.7031 5.74416 19 5.44724 19 5.08137C19 4.71551 18.7031 4.41858 18.3372 4.41858Z" fill="black"></path>
                                            </svg>
                                        </i>
                                        <span>
                                            <span className="text-1">Hire Me</span>
                                            <span className="text-2">Hire Me</span>
                                        </span>
                                    </Link>
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
