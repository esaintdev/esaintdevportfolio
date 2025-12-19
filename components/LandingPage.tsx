"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import DemoSection from './DemoSection';

export default function LandingPage() {
   useEffect(() => {
      // Logic to hide preloader
      const hidePreloader = () => {
         const loader = document.querySelector(".loader-wrap") as HTMLElement;
         const heading = document.querySelector(".loader-wrap-heading");

         if (loader) {
            // Check if GSAP is available
            if ((window as any).gsap) {
               const gsap = (window as any).gsap;
               const tls = gsap.timeline();

               if (heading) {
                  tls.to(heading.querySelectorAll(".load-text , .cont"), {
                     delay: 0.2,
                     y: -100,
                     opacity: 0,
                  });
               }

               tls.to(loader, {
                  y: -1500,
                  duration: 0.8,
                  ease: "power2.inOut",
                  onComplete: () => {
                     loader.style.display = "none";
                  }
               });
            } else {
               // Fallback
               loader.style.transition = "opacity 0.5s ease";
               loader.style.opacity = "0";
               setTimeout(() => {
                  loader.style.display = "none";
               }, 500);
            }
         }
      };

      // Run after short delay to ensure assets load or simulate loading
      const timer = setTimeout(() => {
         hidePreloader();
         // Initialize scripts if they are already loaded
         if ((window as any).initMain) (window as any).initMain();
         if ((window as any).initSlider) (window as any).initSlider();
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>


         {/* loading-area-start */}
         <div className="loader-wrap">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
               <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
            </svg>
            <div className="loader-wrap-heading">
               <div className="load-text">
                  <span>A</span>
                  <span>L</span>
                  <span>E</span>
                  <span>R</span>
                  <span>i</span>
                  <span>C</span>
               </div>
            </div>
         </div>
         {/* loading-area-end */}

         {/* back to top start */}
         <div className="back-to-top-wrapper">
            <button id="back_to_top" type="button" className="back-to-top-btn">
               <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
               </svg>
            </button>
         </div>
         {/* back to top end */}


         <div id="smooth-wrapper">
            <div id="smooth-content">
               <header>

                  {/* header area start */}
                  <div className="tp-header-area pre-header header-transparent mt-10">
                     <div className="tp-header-top-area d-none">
                        <div className="container">
                           <div className="row">
                              <div className="col-lg-12">
                                 <div className="tp-header-top-content text-center">
                                    <p><span>Limited offer</span> <img src="images/header-fire-icon.svg" alt="" /> Aleric for $12 only, don’t miss</p>
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
                                    <a className="tp-btn-yellow btn-white btn-bdr d-inline-flex align-items-center" href="https://themeforest.net/checkout/from_item/59505968?license=regular" target="_blank">
                                       <i>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M15.3704 4.74025L12.7193 0.321646C12.531 0.00792557 12.1236 -0.0937023 11.8099 0.0945302C11.4962 0.282763 11.3946 0.690158 11.5828 1.00388L14.234 5.42248C14.4222 5.7362 14.8296 5.83783 15.1433 5.6496C15.457 5.46137 15.5587 5.05397 15.3704 4.74025Z" fill="black"></path>
                                             <path fillRule="evenodd" clipRule="evenodd" d="M4.76615 5.42248L7.41731 1.00388C7.60555 0.690158 7.50392 0.282763 7.1902 0.0945302C6.87648 -0.0937023 6.46908 0.00792557 6.28085 0.321646L3.62969 4.74025C3.44145 5.05397 3.54308 5.46137 3.8568 5.6496C4.17052 5.83783 4.57792 5.7362 4.76615 5.42248Z" fill="black"></path>
                                             <path fillRule="evenodd" clipRule="evenodd" d="M18.1067 5.1883C18.1386 4.99654 18.0838 4.80035 17.9583 4.65189C17.8319 4.5043 17.6472 4.41858 17.4528 4.41858H1.54582C1.3514 4.41858 1.1667 4.5043 1.04033 4.65189C0.91484 4.80035 0.860049 4.99654 0.891863 5.1883C0.891863 5.1883 1.79503 10.7063 2.23954 13.4272C2.43219 14.6026 3.44758 15.4651 4.63796 15.4651H14.3607C15.551 15.4651 16.5664 14.6026 16.7591 13.4272L18.1067 5.1883ZM8.83651 8.1744V11.7093C8.83651 12.0751 9.13344 12.3721 9.4993 12.3721C9.86516 12.3721 10.1621 12.0751 10.1621 11.7093V8.1744C10.1621 7.80854 9.86516 7.51161 9.4993 7.51161C9.13344 7.51161 8.83651 7.80854 8.83651 8.1744ZM12.3714 8.1744V11.7093C12.3714 12.0751 12.6683 12.3721 13.0342 12.3721C13.4 12.3721 13.697 12.0751 13.697 11.7093V8.1744C13.697 7.80854 13.4 7.51161 13.0342 7.51161C12.6683 7.51161 12.3714 7.80854 12.3714 8.1744ZM5.30163 8.1744V11.7093C5.30163 12.0751 5.59856 12.3721 5.96442 12.3721C6.33028 12.3721 6.62721 12.0751 6.62721 11.7093V8.1744C6.62721 7.80854 6.33028 7.51161 5.96442 7.51161C5.59856 7.51161 5.30163 7.80854 5.30163 8.1744Z" fill="black"></path>
                                             <path fillRule="evenodd" clipRule="evenodd" d="M18.3372 4.41858H0.662791C0.29693 4.41858 0 4.71551 0 5.08137C0 5.44724 0.29693 5.74416 0.662791 5.74416H18.3372C18.7031 5.74416 19 5.44724 19 5.08137C19 4.71551 18.7031 4.41858 18.3372 4.41858Z" fill="black"></path>
                                          </svg>
                                       </i>
                                       <span>
                                          <span className="text-1">Buy Now</span>
                                          <span className="text-2">Buy Now</span>
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

               <div id="smooth-wrapper">
                  <div id="smooth-content">

                     <main>
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

                        {/* hero area start */}
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
                                             Launch your agency <br />
                                             with Aleric - <span>HTML</span> <br />
                                             Template
                                          </h2>
                                          <div className="tp-fade-anim" data-delay=".7">
                                             <p>Build Creative Websites with Cunnet Flexbox</p>
                                          </div>
                                       </div>
                                       <div className="tp-hero-btn-box text-center">
                                          <div className="tp-fade-anim smooth" data-delay=".3" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                             <a className="tp-btn-yellow btn-orange btn-bdr d-inline-flex align-items-center" href="https://themeforest.net/checkout/from_item/59505968?license=regular" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                                                   <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 6L1 5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696698C15.4645 0.403804 14.9896 0.403805 14.6967 0.696698C14.4038 0.989591 14.4038 1.46446 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6L1 6.75L20 6.75L20 6L20 5.25L1 5.25L1 6Z" fill="white"></path>
                                                </svg>
                                                <span>
                                                   <span className="text-1">Perchase Now</span>
                                                   <span className="text-2">Perchase Now</span>
                                                </span>
                                             </a>
                                          </div>
                                          <div className="tp-fade-anim smooth" data-delay=".5" data-ease="bounce" data-fade-from="top" data-duration="1.2">
                                             <a className="tp-btn-yellow btn-gray btn-bdr border-style d-inline-flex align-items-center" href="#demo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                   <path d="M8.835 16.67C13.1622 16.67 16.67 13.1621 16.67 8.83497C16.67 4.50782 13.1622 0.999969 8.835 0.999969C4.50785 0.999969 1 4.50782 1 8.83497C1 13.1621 4.50785 16.67 8.835 16.67Z" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path d="M8.83594 5.70093V11.9689" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   <path d="M5.70117 8.83502H11.9692" stroke="#F3F1F2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <span>
                                                   <span className="text-1">56+ Demos</span>
                                                   <span className="text-2">56+ Demos</span>
                                                </span>
                                             </a>
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
                        {/* hero area end */}


                        {/* feature-area start */}
                        <div className="tp-feature-2-area tp-sm-pt tp-sm-pb pt-130 pb-130">
                           <div className="container">
                              <div className="row justify-content-center">
                                 <div className="col-xl-8">
                                    <div className="tp-feature-2-title-box text-center mb-55">
                                       <h4 className="tp-section-title mb-15 tp-fade-anim" data-delay=".5">
                                          <span>Core features <br /> all your website needs.</span>
                                       </h4>
                                       <div className="tp-fade-anim" data-delay=".7">
                                          <p>Unlock powerful features for a stunning, <span>customizable</span> website</p>
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
                                          <span>Light and Dark mode</span>
                                          <h4 className="tp-feature-2-title mb-35">Light, Dark & System Color <br /> mode browsing</h4>
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
                        {/* feature-area end */}


                        <DemoSection />
                        {/* tp-feature-area-start */}
                        <div id="feature" className="tp-feature-area tp-sm-pt tp-sm-pb tp-bg-black-2 section-meinus pt-135 pb-135">
                           <div className="container container-1230">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="tp-feature-include-title-wrap text-center mb-75">
                                       <span className="tp-responsive-layout-subtitle mb-15 tp-fade-anim" data-delay=".3">Features Included</span>
                                       <h2 className="tp-section-title tp-section-title-60 text-lts tp-section-title-white mb-40 tp-fade-anim" data-delay=".5">Top-Notch <br /> Features Included</h2>
                                       <div className="tp-feature-include-tag tp-fade-anim" data-delay=".7">
                                          <span>Creative Animetion</span>
                                          <span>56+Demos</span>
                                          <span>600+ Section</span>
                                       </div>
                                    </div>
                                    <div className="tp-feature-include-wrap">
                                       <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".2">
                                                <span className="d-inline-block mb-30">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
                                                      <path d="M20.0067 35.2605H11.0023C2.9957 35.2605 1 33.2647 1 25.2579V11.0025C1 2.99576 2.9957 1 11.0023 1H36.0198C44.0264 1 46.0221 2.99576 46.0221 11.0025" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M20.0078 45.9988V35.2598" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path opacity="0.4" d="M1 25.7559H20.0067" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M12.2734 45.9961H20.0187" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M48.5226 25.4018V38.9682C48.5226 44.5991 47.1209 46.0009 41.4901 46.0009H33.0559C27.4252 46.0009 26.0234 44.5991 26.0234 38.9682V25.4018C26.0234 19.7709 27.4252 18.3691 33.0559 18.3691H41.4901C47.1209 18.3691 48.5226 19.7709 48.5226 25.4018Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path opacity="0.4" d="M37.2139 38.352H37.2353" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   </svg>
                                                </span>
                                                <p>Fully responsive <br /> layouts</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".2">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M46.6667 0H3.3333C1.49238 0 0 1.62009 0 3.61854V21.7115C0 23.7099 1.49238 25.33 3.3333 25.33H46.6666C48.5076 25.33 49.9999 23.7099 49.9999 21.7115V3.61854C50 1.62009 48.5077 0 46.6667 0ZM48.3333 21.7115C48.3333 22.7107 47.5871 23.5208 46.6666 23.5208H3.3333C2.41279 23.5208 1.6666 22.7107 1.6666 21.7115V3.61854C1.6666 2.61926 2.41279 1.80922 3.3333 1.80922H46.6666C47.5871 1.80922 48.3333 2.61926 48.3333 3.61854V21.7115Z" fill="white" fillOpacity="0.1"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M6.42288 9.40999C6.09749 9.08469 5.56995 9.08469 5.24456 9.40999L3.57795 11.0766C3.25266 11.402 3.25266 11.9295 3.57795 12.2549L5.24456 13.9216C5.45384 14.1382 5.7636 14.2251 6.05501 14.1489C6.34641 14.0726 6.57386 13.845 6.65012 13.5537C6.72639 13.2624 6.63948 12.9526 6.42288 12.7433L5.34534 11.6657L6.42288 10.5883C6.74827 10.2628 6.74827 9.73538 6.42288 9.40999Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M44.755 9.41168C44.4281 9.09586 43.9082 9.10035 43.5868 9.42183C43.2654 9.74332 43.2609 10.263 43.5767 10.59L44.6542 11.6675L43.5767 12.7451C43.3601 12.9544 43.2732 13.2641 43.3494 13.5555C43.4257 13.8469 43.6533 14.0744 43.9446 14.1506C44.2359 14.2269 44.5457 14.14 44.755 13.9234L46.4217 12.2567C46.747 11.9313 46.747 11.4038 46.4217 11.0784L44.755 9.41168Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M19.1673 19.1666C19.6275 19.1666 20.0006 18.7935 20.0006 18.3333C20.0006 17.8731 19.6275 17.5 19.1673 17.5C18.7071 17.5 18.334 17.8731 18.334 18.3333C18.334 18.7935 18.7071 19.1666 19.1673 19.1666Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M24.9993 19.1666C25.4595 19.1666 25.8326 18.7935 25.8326 18.3333C25.8326 17.8731 25.4595 17.5 24.9993 17.5C24.5391 17.5 24.166 17.8731 24.166 18.3333C24.166 18.7935 24.5391 19.1666 24.9993 19.1666Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M30.8333 19.1666C31.2935 19.1666 31.6666 18.7935 31.6666 18.3333C31.6666 17.8731 31.2935 17.5 30.8333 17.5C30.3731 17.5 30 17.8731 30 18.3333C30 18.7935 30.3731 19.1666 30.8333 19.1666Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M46.6668 28H3.33331C1.49239 28 0 29.0233 0 30.2857V41.7143C0 42.9766 1.49239 44 3.33331 44H46.6667C48.5076 44 50 42.9766 50 41.7143V30.2857C50.0001 29.0233 48.5077 28 46.6668 28ZM48.3334 41.7143C48.3334 42.3455 47.5872 42.8572 46.6667 42.8572H3.33331C2.4128 42.8572 1.6666 42.3455 1.6666 41.7143V30.2857C1.6666 29.6545 2.4128 29.1428 3.33331 29.1428H46.6667C47.5872 29.1428 48.3334 29.6545 48.3334 30.2857V41.7143Z" fill="white" fillOpacity="0.1"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M15.9829 34.4983C15.9829 34.2231 15.7598 34 15.4846 34H11.4983C11.2231 34 11 34.2231 11 34.4983C11 34.7735 11.2231 34.9965 11.4983 34.9965H15.4846C15.7598 34.9965 15.9829 34.7735 15.9829 34.4983Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M12.4866 37.0039C12.2113 37.0039 11.9883 37.227 11.9883 37.5022C11.9883 37.7774 12.2114 38.0005 12.4866 38.0005H14.4797C14.7549 38.0005 14.978 37.7774 14.978 37.5022C14.978 37.227 14.7549 37.0039 14.4797 37.0039H12.4866Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M23.9614 34.4983C23.9614 34.2231 23.7383 34 23.4631 34H19.4768C19.2016 34 18.9785 34.2231 18.9785 34.4983C18.9785 34.7735 19.2016 34.9965 19.4768 34.9965H23.4631C23.7383 34.9965 23.9614 34.7735 23.9614 34.4983Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.4651 37.0039C20.1899 37.0039 19.9668 37.227 19.9668 37.5022C19.9668 37.7774 20.1899 38.0005 20.4651 38.0005H22.4582C22.7334 38.0005 22.9565 37.7774 22.9565 37.5022C22.9565 37.227 22.7334 37.0039 22.4582 37.0039H20.4651Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M31.9282 34.4983C31.9282 34.2231 31.7051 34 31.4299 34H27.4436C27.1684 34 26.9453 34.2231 26.9453 34.4983C26.9453 34.7735 27.1684 34.9965 27.4436 34.9965H31.4299C31.7051 34.9965 31.9282 34.7735 31.9282 34.4983Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M28.4436 37.0039C28.1684 37.0039 27.9453 37.227 27.9453 37.5022C27.9453 37.7774 28.1684 38.0005 28.4436 38.0005H30.4367C30.7119 38.0005 30.935 37.7774 30.935 37.5022C30.935 37.227 30.7119 37.0039 30.4367 37.0039H28.4436Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M39.9009 34.4983C39.9009 34.2231 39.6777 34 39.4026 34H35.4162C35.141 34 34.918 34.2231 34.918 34.4983C34.918 34.7735 35.141 34.9965 35.4162 34.9965H39.4026C39.6777 34.9965 39.9009 34.7735 39.9009 34.4983Z" fill="white" fillOpacity="0.6"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M36.4143 37.0039C36.1391 37.0039 35.916 37.227 35.916 37.5022C35.916 37.7774 36.1391 38.0005 36.4143 38.0005H38.4074C38.6826 38.0005 38.9057 37.7774 38.9057 37.5022C38.9057 37.227 38.6826 37.0039 38.4074 37.0039H36.4143Z" fill="white" fillOpacity="0.6"></path>
                                                   </svg>
                                                </span>
                                                <p>Header and <br /> Footer</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".4">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M43.2559 0.982422H6.74439C3.02547 0.982422 0 4.00789 0 7.72681V44.2383C0 47.957 3.02547 50.9824 6.74439 50.9824H43.2559C46.9748 50.9824 50.0003 47.957 50.0003 44.2383V7.72681C50 4.00789 46.9745 0.982422 43.2559 0.982422ZM47.7531 44.238C47.7531 46.7178 45.7356 48.7352 43.2556 48.7352H6.74439C4.26436 48.7352 2.24691 46.7178 2.24691 44.238V7.72681C2.24691 5.24678 4.26436 3.22934 6.74439 3.22934H43.2559C45.7359 3.22934 47.7534 5.24678 47.7534 7.72681L47.7531 44.238Z" fill="white" fillOpacity="0.1"></path>
                                                      <path d="M37.0774 32.4141H12.9223C12.3019 32.4141 11.7988 32.9171 11.7988 33.5375C11.7988 34.1579 12.3019 34.661 12.9223 34.661H37.0774C37.6979 34.661 38.2009 34.1579 38.2009 33.5375C38.2009 32.9171 37.6979 32.4141 37.0774 32.4141Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M37.0774 24.8594H12.9223C12.3019 24.8594 11.7988 25.3624 11.7988 25.9828C11.7988 26.6033 12.3019 27.1063 12.9223 27.1063H37.0774C37.6979 27.1063 38.2009 26.6033 38.2009 25.9828C38.2009 25.3624 37.6979 24.8594 37.0774 24.8594Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M37.0774 17.3047H12.9223C12.3019 17.3047 11.7988 17.8077 11.7988 18.4281C11.7988 19.0486 12.3019 19.5516 12.9223 19.5516H37.0774C37.6979 19.5516 38.2009 19.0486 38.2009 18.4281C38.2009 17.8077 37.6979 17.3047 37.0774 17.3047Z" fill="white" fillOpacity="0.6"></path>
                                                   </svg>
                                                </span>
                                                <p>Pre Built<br /> Offcanvas</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".6">
                                                <span className="d-inline-block mb-30">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                                      <g opacity="0.5">
                                                         <path d="M40.7109 33.9082V31.7988" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         <path d="M40.7109 33.9082V31.7988" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         <path d="M28.0547 25.4707V31.0489V33.9082" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         <path d="M28.0547 25.4707V31.0489V33.9082" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         <mask id="mask0_7231_2841" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
                                                            <path d="M0 0H54V54H0V0Z" fill="white"></path>
                                                         </mask>
                                                         <g mask="url(#mask0_7231_2841)">
                                                            <path d="M47.0391 31.8681V38.707C47.0391 42.2012 45.6226 46.42 43.3318 48.7107C41.0421 51.0015 37.878 52.418 34.3828 52.418H29.3794C21.6579 52.418 15.3984 45.1038 15.3984 37.3823C15.3984 33.8874 18.2316 31.0542 21.7266 31.0542V15.9838C21.7266 15.1105 22.0809 14.3195 22.6536 13.7468C23.2428 13.1576 24.063 12.7996 24.9661 12.8207C26.6946 12.861 28.0547 14.3189 28.0547 16.0478V25.476C28.0547 24.6027 28.4091 23.8117 28.9818 23.239C29.5545 22.6663 30.3455 22.3119 31.2188 22.3119C32.092 22.3119 32.8831 22.6663 33.4557 23.239C34.0284 23.8117 34.3828 24.6027 34.3828 25.476V28.64C34.3828 27.7668 34.7372 26.9757 35.3099 26.403C35.8826 25.8303 36.6736 25.476 37.5469 25.476C38.4202 25.476 39.2112 25.8303 39.7839 26.403C40.3566 26.9757 40.7109 27.7668 40.7109 28.64V31.8041C40.7109 30.9308 41.0653 30.1398 41.638 29.5671C42.2272 28.978 43.0474 28.6199 43.9505 28.641C45.6789 28.6813 47.0391 30.1392 47.0391 31.8681Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M34.3828 28.6348V33.9082" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M21.7266 31.0551V36.6094" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M27.1709 13.8145C29.5397 12.9 31.2188 10.6019 31.2188 7.91031C31.2188 4.41508 28.3859 1.58219 24.8906 1.58219C21.3954 1.58219 18.5625 4.41508 18.5625 7.91031C18.5625 10.5955 20.2342 12.8895 22.5946 13.8092" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M18.5508 7.91016H1.57031L5.36719 4.11328" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M1.57031 7.91016L5.36719 11.707" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M31.2188 7.91016H52.418L48.6211 4.11328" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M52.4297 7.91016L48.6328 11.707" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         </g>
                                                      </g>
                                                   </svg>
                                                </span>
                                                <p>Creative <br /> sliders</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".8">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M38.7607 33.6738C39.7234 33.6736 40.6667 33.9466 41.4805 34.4609C42.1926 34.9111 42.78 35.5303 43.1924 36.2607L43.3584 36.5801C43.7196 37.3411 43.8856 38.178 43.8438 39.0156L43.8125 39.375C43.711 40.2111 43.4039 41.0069 42.9209 41.6924L42.7031 41.9795C42.1704 42.632 41.4856 43.1407 40.7109 43.4619L40.374 43.5879C39.5751 43.8547 38.7238 43.9189 37.8975 43.7764L37.5449 43.7021C36.727 43.5006 35.9738 43.0994 35.3516 42.5371L35.0928 42.2861C34.426 41.5918 33.9699 40.7225 33.7773 39.7793L33.7529 39.6592H30.3809C30.1725 39.6592 29.9713 39.587 29.8115 39.4561L29.7461 39.3965C29.5778 39.2282 29.4834 38.9998 29.4834 38.7617C29.4834 38.5535 29.5557 38.353 29.6865 38.1934L29.7461 38.127C29.9144 37.9588 30.1429 37.8643 30.3809 37.8643H33.7529L33.7773 37.7441C33.9972 36.6672 34.5594 35.6926 35.377 34.9639L35.5439 34.8213C36.3954 34.1259 37.4476 33.7261 38.542 33.6787L38.7607 33.6738ZM40.0215 35.7197C39.4951 35.5017 38.9222 35.4249 38.3594 35.4941L38.1191 35.5322C37.4804 35.6593 36.8931 35.9731 36.4326 36.4336C36.0297 36.8366 35.7393 37.3363 35.5879 37.8828L35.5312 38.1191C35.4201 38.6781 35.4561 39.2554 35.6338 39.7939L35.7188 40.0225C35.968 40.624 36.3902 41.1382 36.9316 41.5C37.473 41.8618 38.1096 42.0546 38.7607 42.0547C39.5793 42.0547 40.3667 41.7499 40.9707 41.2031L41.0898 41.0898C41.7071 40.4724 42.0537 39.6348 42.0537 38.7617C42.0537 38.1919 41.9063 37.6331 41.627 37.1396L41.499 36.9326C41.1824 36.4587 40.7487 36.0764 40.2422 35.8213L40.0215 35.7197ZM38.7607 4.34082H42.9512C43.1596 4.34082 43.3607 4.41294 43.5205 4.54395L43.5859 4.60352C43.7543 4.77185 43.8486 5.00021 43.8486 5.23828C43.8486 5.44648 43.7763 5.64698 43.6455 5.80664L43.5859 5.87305C43.4176 6.04126 43.1891 6.13574 42.9512 6.13574H38.7607C36.5551 6.1286 34.389 6.70068 32.4775 7.79102L32.0986 8.01562C30.2218 9.17506 28.6846 10.8061 27.6377 12.7422L27.4346 13.1328L18.1699 31.665V31.666C17.0512 33.923 15.3606 35.8438 13.2705 37.2393L12.8477 37.5107C10.5622 38.9236 7.9261 39.6679 5.23926 39.6592H1.04883C0.840424 39.6592 0.639252 39.5871 0.479492 39.4561L0.414062 39.3965C0.245736 39.2282 0.151367 38.9998 0.151367 38.7617C0.15141 38.5535 0.223717 38.353 0.354492 38.1934L0.414062 38.127C0.582372 37.9587 0.810869 37.8643 1.04883 37.8643H5.23926V37.8633C7.44489 37.8704 9.61102 37.2993 11.5225 36.209L11.9014 35.9844C13.9033 34.7476 15.5182 32.974 16.5645 30.8662L16.5654 30.8672L25.8301 12.335V12.334C26.9486 10.0769 28.6394 8.15622 30.7295 6.76074L31.1523 6.48828C33.2951 5.16363 35.7458 4.42717 38.2578 4.34766L38.7607 4.34082ZM19.9053 37.8643H24.0947C24.303 37.8643 24.5043 37.9365 24.6641 38.0674L24.7295 38.127C24.8978 38.2952 24.9931 38.5237 24.9932 38.7617C24.9932 38.9702 24.9201 39.1713 24.7891 39.3311L24.7295 39.3965C24.5612 39.5648 24.3327 39.6592 24.0947 39.6592H19.9053C19.6969 39.6592 19.4957 39.587 19.3359 39.4561L19.2705 39.3965C19.1022 39.2282 19.0068 38.9998 19.0068 38.7617C19.0069 38.5535 19.0801 38.353 19.2109 38.1934L19.2705 38.127C19.4388 37.9588 19.6674 37.8643 19.9053 37.8643ZM3.62598 0.412109C4.42489 0.14533 5.27618 0.0811184 6.10254 0.223633L6.45508 0.297852C7.27297 0.499428 8.02615 0.900645 8.64844 1.46289L8.90723 1.71387C9.57402 2.40819 10.0301 3.27747 10.2227 4.2207L10.2471 4.34082H13.6191C13.8275 4.34082 14.0287 4.41296 14.1885 4.54395L14.2539 4.60352C14.4222 4.77185 14.5166 5.00022 14.5166 5.23828C14.5166 5.44649 14.4443 5.64697 14.3135 5.80664L14.2539 5.87305C14.0856 6.04124 13.8571 6.13574 13.6191 6.13574H10.2471L10.2227 6.25586C10.0028 7.33279 9.44062 8.30739 8.62305 9.03613L8.45605 9.17871C7.54797 9.92034 6.41167 10.3258 5.23926 10.3262L4.87891 10.3135C4.04242 10.2543 3.23152 9.9891 2.51953 9.53906C1.80741 9.08889 1.21995 8.46969 0.807617 7.73926L0.641602 7.41992C0.280399 6.65894 0.114428 5.82198 0.15625 4.98438L0.1875 4.625C0.288995 3.78886 0.596112 2.9931 1.0791 2.30762L1.29688 2.02051C1.82956 1.368 2.51443 0.859301 3.28906 0.538086L3.62598 0.412109ZM5.23926 1.94531C4.36597 1.94531 3.52766 2.29262 2.91016 2.91016C2.29293 3.52764 1.94629 4.36517 1.94629 5.23828C1.94632 5.80808 2.09372 6.36687 2.37305 6.86035L2.50098 7.06738C2.81761 7.54129 3.25125 7.92356 3.75781 8.17871L3.97852 8.28027C4.50494 8.49833 5.07782 8.57506 5.64062 8.50586L5.88086 8.46777C6.43969 8.35661 6.95917 8.10264 7.38867 7.73242L7.56738 7.56641C7.9703 7.16342 8.26071 6.66374 8.41211 6.11719L8.46875 5.88086C8.57992 5.32193 8.54393 4.74462 8.36621 4.20605L8.28125 3.97754C8.06316 3.45113 7.71254 2.99159 7.26562 2.64258L7.06836 2.5C6.52698 2.13825 5.89036 1.94539 5.23926 1.94531ZM19.9053 4.34082H24.0947C24.3031 4.34082 24.5043 4.413 24.6641 4.54395L24.7295 4.60352C24.8978 4.77185 24.9932 5.00021 24.9932 5.23828C24.9931 5.44652 24.9199 5.64696 24.7891 5.80664L24.7295 5.87305C24.5612 6.04121 24.3326 6.13574 24.0947 6.13574H19.9053C19.697 6.13574 19.4956 6.06347 19.3359 5.93262L19.2705 5.87305C19.1022 5.70476 19.0069 5.47628 19.0068 5.23828C19.0068 5.02982 19.0799 4.82873 19.2109 4.66895L19.2705 4.60352C19.4388 4.43524 19.6673 4.34082 19.9053 4.34082Z" fill="white" fillOpacity="0.6" stroke="black" strokeWidth="0.3"></path>
                                                   </svg>
                                                </span>
                                                <p>Animation Builder (GSAP)</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".9">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M45.0009 15.173V6.04079C45.0009 2.44668 43.5542 1 39.9601 1H30.8279C27.2338 1 25.7871 2.44668 25.7871 6.04079V15.173C25.7871 18.7671 27.2338 20.2138 30.8279 20.2138H39.9601C43.5542 20.2138 45.0009 18.7671 45.0009 15.173Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M20.2138 15.7381V5.47568C20.2138 2.28845 18.7671 1 15.173 1H6.04079C2.44668 1 1 2.28845 1 5.47568V15.7155C1 18.9253 2.44668 20.1912 6.04079 20.1912H15.173C18.7671 20.2138 20.2138 18.9253 20.2138 15.7381Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M20.2138 39.9601V30.8279C20.2138 27.2338 18.7671 25.7871 15.173 25.7871H6.04079C2.44668 25.7871 1 27.2338 1 30.8279V39.9601C1 43.5542 2.44668 45.0009 6.04079 45.0009H15.173C18.7671 45.0009 20.2138 43.5542 20.2138 39.9601Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <g opacity="0.4">
                                                         <path d="M28.6465 35.4277H42.2091" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"></path>
                                                         <path d="M35.4277 42.2091V28.6465" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"></path>
                                                      </g>
                                                   </svg>
                                                </span>
                                                <p>CSS with <br /> superpowers</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".2">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M24.3805 41H8.99999C4.58171 41 1 37.4183 1 33V9C1 4.58172 4.58172 1 9 1H55C59.4183 1 63 4.58172 63 9V33C63 37.4183 59.4183 41 55 41H37.314" stroke="white" strokeOpacity="0.1" strokeLinecap="round"></path>
                                                      <rect x="7" y="11" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="7" y="15" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="7" y="19" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="7" y="23" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="7" y="27" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="7" y="31" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="11" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="15" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="19" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="23" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="27" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="24" y="31" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="11" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="15" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="19" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="23" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="27" width="10" height="1" fill="white" fillOpacity="0.7"></rect>
                                                      <rect x="43" y="31" width="6" height="1" fill="white" fillOpacity="0.7"></rect>
                                                   </svg>
                                                </span>
                                                <p>Unique <br /> Mega Menu</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".4">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M30.491 49H11.1693C5.5529 49 1 44.447 1 38.8305V11.1695C1 5.55298 5.5529 1 11.1693 1H38.8298C44.4462 1 48.9991 5.55298 48.9991 11.1695V30.6441" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M20.2207 11.7793H38.8305" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M11.1699 19.918H38.8304" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M11.1699 28.0547H18.4918" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M9.13867 11.5748C9.13867 12.9789 10.2769 14.1172 11.681 14.1172C13.0851 14.1172 14.2233 12.9789 14.2233 11.5748C14.2233 10.1706 13.0851 9.03244 11.681 9.03244C10.2769 9.03244 9.13867 10.1706 9.13867 11.5748Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M47.4229 47.4213C49.5278 45.3165 49.5278 41.9039 47.4229 39.799L40.2933 32.6693C38.5236 30.8994 36.2694 29.6932 33.8151 29.2027L28.0527 28.0508L29.2045 33.8133C29.6951 36.2675 30.9014 38.5217 32.6711 40.2916L39.8007 47.4213C41.9056 49.5262 45.3181 49.5262 47.4229 47.4213Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   </svg>
                                                </span>
                                                <p> Unique blog <br /> styles</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".6">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="73" height="50" viewBox="0 0 73 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M39 39.6211H58.4595" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M35 34.6211H60.9459" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <rect x="31.75" y="10.75" width="33.5" height="18.5" rx="3.25" stroke="white" strokeOpacity="0.6" strokeWidth="1.5"></rect>
                                                      <rect x="13.75" y="0.75" width="58.5" height="48.5" rx="7.25" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"></rect>
                                                      <path d="M11.2598 13.4141C11.2599 11.2566 13.7862 10.1427 15.376 11.5068L15.5273 11.6465L21.7881 17.9072L21.96 18.0967C22.7074 19.0131 22.7073 20.3364 21.96 21.2529L21.7881 21.4424L15.5273 27.7031C13.9524 29.278 11.2598 28.1628 11.2598 25.9355V22.2598H4C2.61942 22.2598 1.50021 21.1403 1.5 19.7598V19.5908C1.5 18.2101 2.61929 17.0908 4 17.0908H11.2598V13.4141Z" fill="#9D9C9F" stroke="#09080E" strokeWidth="3"></path>
                                                   </svg>
                                                </span>
                                                <p>Unique <br /> Archive Page</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".8">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M43.169 0H14.4604C10.6407 0 7.52829 3.11237 7.52829 6.93209V7.42724H6.93209C3.11237 7.42724 0 10.5396 0 14.3593V43.0679C0 46.8876 3.11237 50 6.93209 50H35.6407C39.4604 50 42.5728 46.8876 42.5728 43.0679V42.5728H43.169C46.9887 42.5728 50.1011 39.4604 50.1011 35.6407V6.93209C50.0909 3.11237 46.9887 0 43.169 0ZM41.35 43.0679C41.35 46.2106 38.7935 48.7773 35.6407 48.7773H6.93209C3.7793 48.7773 1.22272 46.2207 1.22272 43.0679V14.3593C1.22272 11.2065 3.7793 8.64996 6.93209 8.64996H35.6407C38.7833 8.64996 41.35 11.2065 41.35 14.3593V43.0679ZM48.8783 35.6407C48.8783 38.7833 46.3217 41.35 43.169 41.35H42.5728V14.3593C42.5728 10.5396 39.4604 7.42724 35.6407 7.42724H8.75101V6.93209C8.75101 3.7793 11.3076 1.22272 14.4604 1.22272H43.169C46.3217 1.22272 48.8783 3.7793 48.8783 6.93209V35.6407Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M29.8511 26.2936C29.4873 25.6974 28.8608 25.3337 28.1635 25.3337C27.4663 25.3337 26.8296 25.6873 26.476 26.2936L23.3333 31.5281L18.1595 22.9792C17.7957 22.383 17.1692 22.0293 16.4719 22.0293C15.7747 22.0293 15.138 22.383 14.7844 22.9792L4.30539 40.3296C4.19423 40.5216 4.18413 40.754 4.29528 40.946C4.40644 41.138 4.60854 41.2593 4.83085 41.2593H37.7533C37.9756 41.2593 38.1777 41.138 38.2888 40.946C38.4 40.754 38.3899 40.5216 38.2787 40.3296L29.8511 26.2936ZM5.90199 40.0366L15.8151 23.6158C15.9566 23.3834 16.189 23.252 16.4618 23.252C16.7347 23.252 16.9671 23.3834 17.1085 23.6158L27.0216 40.0366C19.554 40.0366 13.9052 40.0366 5.90199 40.0366ZM28.4566 40.0366L24.0305 32.7104L27.5067 26.9202C27.6482 26.6877 27.8806 26.5564 28.1534 26.5564C28.4262 26.5564 28.6587 26.6877 28.8001 26.9202L36.672 40.0366H28.4566Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M24.6466 23.8478C26.7585 23.8478 28.4865 22.13 28.4865 20.0079C28.4865 17.8858 26.7686 16.168 24.6466 16.168C22.5245 16.168 20.8066 17.8858 20.8066 20.0079C20.8066 22.13 22.5245 23.8478 24.6466 23.8478ZM24.6466 17.3907C26.0916 17.3907 27.2638 18.5629 27.2638 20.0079C27.2638 21.4529 26.0916 22.6251 24.6466 22.6251C23.2015 22.6251 22.0294 21.4529 22.0294 20.0079C22.0294 18.5629 23.2015 17.3907 24.6466 17.3907Z" fill="white" fillOpacity="0.6"></path>
                                                   </svg>
                                                </span>
                                                <p>Powerful marketing <br /> popup</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".9">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M19.0031 24.1438H1.294C1.03332 24.1438 0.805666 23.9674 0.74064 23.7148C0.346364 22.1831 0.146484 20.5972 0.146484 19.0011C0.146484 18.6855 0.402363 18.4297 0.717898 18.4297H19.0031C19.3188 18.4297 19.5745 18.6855 19.5745 19.0011V23.5724C19.5745 23.8881 19.3188 24.1438 19.0031 24.1438ZM1.74267 23.001H18.4317V19.5725H1.29845C1.33525 20.7308 1.48428 21.88 1.74267 23.001Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9994 14.9955H1.29025C1.11357 14.9955 0.946949 14.9138 0.838609 14.7741C0.730269 14.6345 0.692785 14.4527 0.736784 14.2816C1.16123 12.6325 1.81036 11.0461 2.66622 9.5665C2.76839 9.38993 2.95684 9.28125 3.16083 9.28125H18.9994C19.315 9.28125 19.5708 9.53713 19.5708 9.85266V14.424C19.5708 14.7396 19.315 14.9955 18.9994 14.9955ZM2.04349 13.8527H18.428V10.4242H3.49408C2.88987 11.5147 2.40371 12.664 2.04349 13.8527Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9945 5.86062H6.90156C6.66397 5.86062 6.45117 5.71353 6.36706 5.49137C6.28295 5.2692 6.34535 5.01801 6.5234 4.86076C9.96833 1.82073 14.3972 0.146484 18.9945 0.146484C19.3101 0.146484 19.5659 0.402363 19.5659 0.717898V5.2892C19.5659 5.60474 19.3101 5.86062 18.9945 5.86062ZM8.52083 4.71779H18.4231V1.29857C14.8423 1.41365 11.3941 2.60916 8.52083 4.71779Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9997 10.4231H3.16126C2.95703 10.4231 2.76835 10.3141 2.6663 10.1372C2.56424 9.96027 2.56436 9.74234 2.66664 9.56554C3.6905 7.79564 4.98989 6.20974 6.5286 4.85195C6.63305 4.75984 6.76745 4.70898 6.90664 4.70898H18.9997C19.3153 4.70898 19.5711 4.96486 19.5711 5.2804V9.8517C19.5711 10.1672 19.3153 10.4231 18.9997 10.4231ZM4.185 9.28029H18.4283V5.85181H7.12469C5.99878 6.8695 5.01344 8.01895 4.185 9.28029Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M19.0031 19.5716H0.717898C0.402363 19.5716 0.146484 19.3158 0.146484 19.0001C0.146484 17.4041 0.346364 15.8182 0.74064 14.2864C0.805666 14.034 1.03332 13.8574 1.294 13.8574H19.0031C19.3188 13.8574 19.5745 14.1133 19.5745 14.4288V19.0001C19.5745 19.3158 19.3188 19.5716 19.0031 19.5716ZM1.29845 18.4287H18.4317V15.0002H1.74267C1.48416 16.1212 1.33525 17.2704 1.29845 18.4287Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9945 37.8548C14.3973 37.8548 9.96836 36.1806 6.52342 33.1405C6.34525 32.9832 6.28297 32.7323 6.36708 32.5099C6.45108 32.2877 6.66399 32.1406 6.90158 32.1406H18.9945C19.3102 32.1406 19.5659 32.3964 19.5659 32.712V37.2833C19.5659 37.599 19.3102 37.8548 18.9945 37.8548ZM8.52085 33.2835C11.3941 35.3921 14.8423 36.5876 18.4231 36.7028V33.2835H8.52085Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9993 28.7162H3.16083C2.95684 28.7162 2.76839 28.6075 2.66622 28.431C1.81036 26.9514 1.16123 25.3651 0.736784 23.7159C0.692785 23.5448 0.730269 23.363 0.838609 23.2233C0.946949 23.0837 1.11357 23.002 1.29025 23.002H18.9993C19.3149 23.002 19.5707 23.2577 19.5707 23.5734V28.1447C19.5707 28.4604 19.3149 28.7162 18.9993 28.7162ZM3.49397 27.5734H18.4279V24.1449H2.04338C2.4036 25.3335 2.88975 26.4829 3.49397 27.5734Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M18.9996 33.2786H6.90664C6.76745 33.2786 6.63294 33.2277 6.5286 33.1356C4.98978 31.7776 3.6905 30.1918 2.66664 28.422C2.56436 28.2452 2.56424 28.0273 2.6663 27.8504C2.76835 27.6735 2.95703 27.5645 3.16126 27.5645H18.9996C19.3152 27.5645 19.571 27.8202 19.571 28.1359V32.7072C19.571 33.0228 19.3152 33.2786 18.9996 33.2786ZM7.12458 32.1358H18.4282V28.7073H4.18489C5.01321 29.9684 5.99867 31.1181 7.12458 32.1358Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M19.0011 37.8598C18.6855 37.8598 18.4297 37.604 18.4297 37.2883V0.717898C18.4297 0.402363 18.6855 0.146484 19.0011 0.146484C29.3987 0.146484 37.8577 8.60557 37.8577 19.0031C37.8577 29.4007 29.3987 37.8598 19.0011 37.8598ZM19.5725 1.29845V36.7079C29.0763 36.4049 36.7149 28.5792 36.7149 19.0031C36.7149 9.42704 29.0763 1.6013 19.5725 1.29845Z" fill="white" fillOpacity="0.6"></path>
                                                   </svg>
                                                </span>
                                                <p>Dark and<br /> Light Version</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".2">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M13.6634 46C21.1974 46 27.3267 39.8704 27.3267 32.337V13.6611C27.3253 11.8655 26.9701 10.0877 26.2816 8.42938C25.5931 6.77102 24.5846 5.26455 23.3138 3.99598C22.0431 2.72741 20.5349 1.7216 18.8754 1.03598C17.2159 0.350366 15.4376 -0.00162698 13.6421 0.000105432C6.18812 -0.0293102 0 6.10029 0 13.6611V32.3349C0 39.8684 6.12929 46 13.6634 46ZM25.8053 13.6631V21.1692C23.2266 18.849 20.0355 17.3189 16.6119 16.7609V14.7454C16.6111 14.0959 16.3962 13.4648 16.0005 12.9497C15.6048 12.4346 15.0504 12.0644 14.4231 11.8962C14.4231 11.8911 14.4231 11.887 14.4231 11.882V1.5429C17.5043 1.73995 20.3951 3.10193 22.509 5.35245C24.6228 7.60297 25.8013 10.5735 25.8053 13.6611V13.6631ZM13.6634 13.3193C14.0419 13.3198 14.4047 13.4705 14.6722 13.7382C14.9398 14.006 15.0902 14.3689 15.0905 14.7475V21.2006C15.0955 21.3913 15.0624 21.5811 14.9929 21.7587C14.9235 21.9364 14.8191 22.0983 14.686 22.235C14.553 22.3717 14.3939 22.4803 14.2182 22.5545C14.0424 22.6287 13.8536 22.6669 13.6629 22.6669C13.4721 22.6669 13.2833 22.6287 13.1076 22.5545C12.9318 22.4803 12.7727 22.3717 12.6397 22.235C12.5066 22.0983 12.4023 21.9364 12.3328 21.7587C12.2633 21.5811 12.2302 21.3913 12.2353 21.2006V14.7454C12.2358 14.3668 12.3864 14.0039 12.6541 13.7361C12.9218 13.4684 13.2848 13.3178 13.6634 13.3173V13.3193ZM12.9027 1.54493V11.882C12.9022 11.8867 12.9022 11.8915 12.9027 11.8962C12.2751 12.0642 11.7205 12.4344 11.3246 12.9495C10.9287 13.4645 10.7137 14.0958 10.7128 14.7454V16.7629C7.2899 17.3211 4.09948 18.8513 1.52142 21.1712V13.6652C1.52414 10.5769 2.70196 7.60541 4.81574 5.354C6.92953 3.10259 9.82084 1.74001 12.9027 1.5429V1.54493ZM1.52142 23.3003C3.96688 20.6883 7.19148 18.9373 10.7138 18.3088V21.2016C10.7066 21.5935 10.7775 21.9829 10.9224 22.3471C11.0674 22.7113 11.2834 23.0429 11.558 23.3226C11.8325 23.6024 12.1601 23.8245 12.5215 23.9762C12.8829 24.1279 13.2709 24.206 13.6629 24.206C14.0548 24.206 14.4428 24.1279 14.8042 23.9762C15.1656 23.8245 15.4932 23.6024 15.7677 23.3226C16.0423 23.0429 16.2584 22.7113 16.4033 22.3471C16.5482 21.9829 16.6191 21.5935 16.6119 21.2016V18.3088C20.135 18.9379 23.3601 20.69 25.8053 23.3033V32.338C25.8053 35.5584 24.5261 38.6469 22.249 40.9241C19.972 43.2012 16.8836 44.4805 13.6634 44.4805C10.4431 44.4805 7.35477 43.2012 5.07771 40.9241C2.80066 38.6469 1.52142 35.5584 1.52142 32.338V23.3003Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M32.6538 31.6821C32.3895 31.9459 32.1799 32.2592 32.0369 32.6041C31.8939 32.949 31.8203 33.3187 31.8203 33.692C31.8203 34.0654 31.8939 34.4351 32.0369 34.78C32.1799 35.1248 32.3895 35.4381 32.6538 35.7019L39.204 42.2575C39.7376 42.7894 40.4603 43.0881 41.2138 43.0881C41.9672 43.0881 42.6899 42.7894 43.2236 42.2575L49.7778 35.7019C50.3109 35.1689 50.6103 34.4459 50.6103 33.692C50.6103 32.9382 50.3109 32.2152 49.7778 31.6821C49.2448 31.1491 48.5219 30.8496 47.768 30.8496C47.0142 30.8496 46.2913 31.1491 45.7582 31.6821L41.2133 36.2274L36.6693 31.6821C36.1367 31.1498 35.4145 30.8507 34.6615 30.8507C33.9085 30.8507 33.1863 31.1498 32.6538 31.6821ZM41.2173 38.0633C41.4191 38.0632 41.6127 37.9834 41.7559 37.8412L46.8385 32.7583C46.9611 32.6357 47.1068 32.5383 47.267 32.472C47.4273 32.4056 47.5991 32.3714 47.7726 32.3714C47.9461 32.3714 48.1179 32.4056 48.2782 32.472C48.4384 32.5383 48.5841 32.6357 48.7068 32.7583C48.8294 32.881 48.9267 33.0267 48.9931 33.187C49.0595 33.3472 49.0937 33.519 49.0937 33.6925C49.0937 33.866 49.0595 34.0378 48.9931 34.1981C48.9267 34.3584 48.8294 34.5041 48.7068 34.6267L42.1515 41.1813C42.029 41.3043 41.8834 41.4019 41.7231 41.4685C41.5628 41.5351 41.3909 41.5693 41.2173 41.5693C41.0437 41.5693 40.8719 41.5351 40.7116 41.4685C40.5512 41.4019 40.4057 41.3043 40.2832 41.1813L33.7269 34.6267C33.6039 34.5042 33.5063 34.3586 33.4397 34.1983C33.3731 34.038 33.3389 33.8661 33.3389 33.6925C33.3389 33.5189 33.3731 33.3471 33.4397 33.1868C33.5063 33.0264 33.6039 32.8809 33.7269 32.7583C33.8494 32.6354 33.9949 32.5378 34.1552 32.4712C34.3156 32.4046 34.4874 32.3703 34.661 32.3703C34.8346 32.3703 35.0065 32.4046 35.1668 32.4712C35.3271 32.5378 35.4727 32.6354 35.5952 32.7583L40.6777 37.8412C40.821 37.9838 41.0151 38.0637 41.2173 38.0633Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M49.7833 10.2878L43.229 3.73316C42.7006 3.20208 41.983 2.90254 41.2339 2.90039H41.2237C40.4673 2.90036 39.7417 3.19976 39.2053 3.73316L32.6551 10.2878C32.1219 10.8208 31.8224 11.5439 31.8223 12.2978C31.8222 13.0518 32.1216 13.7749 32.6546 14.3081C33.1876 14.8413 33.9106 15.1409 34.6645 15.1409C35.4185 15.141 36.1415 14.8416 36.6747 14.3086L41.2187 9.76335L45.7637 14.3086C46.2968 14.8416 47.0199 15.141 47.7738 15.1409C48.5277 15.1409 49.2507 14.8413 49.7838 14.3081C50.3168 13.7749 50.6162 13.0518 50.6161 12.2978C50.616 11.5439 50.3164 10.8208 49.7833 10.2878ZM48.7081 13.2293C48.5856 13.3523 48.44 13.4499 48.2797 13.5165C48.1194 13.5831 47.9476 13.6173 47.774 13.6173C47.6004 13.6173 47.4285 13.5831 47.2682 13.5165C47.1079 13.4499 46.9623 13.3523 46.8398 13.2293L41.7573 8.14651C41.6866 8.07582 41.6027 8.01974 41.5104 7.98147C41.4181 7.94321 41.3191 7.92352 41.2192 7.92352C41.1192 7.92352 41.0203 7.94321 40.928 7.98147C40.8356 8.01974 40.7518 8.07582 40.6811 8.14651L35.5985 13.2293C35.4761 13.3521 35.3306 13.4496 35.1705 13.5162C35.0103 13.5828 34.8386 13.6172 34.6652 13.6174C34.3149 13.6179 33.9788 13.4792 33.7308 13.2319C33.6079 13.1094 33.5105 12.9639 33.4439 12.8037C33.3773 12.6436 33.3429 12.4719 33.3427 12.2984C33.3422 11.9481 33.4809 11.612 33.7282 11.364L40.2825 4.80936C40.5308 4.5623 40.8664 4.42307 41.2166 4.42189C41.5654 4.42309 41.8995 4.56241 42.1457 4.80936L48.701 11.364C48.824 11.4865 48.9216 11.6321 48.9882 11.7924C49.0547 11.9527 49.089 12.1246 49.089 12.2982C49.089 12.4718 49.0547 12.6436 48.9882 12.804C48.9216 12.9643 48.824 13.1099 48.701 13.2324L48.7081 13.2293Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M41.1795 13.6426C40.9777 13.6426 40.7842 13.7227 40.6416 13.8654C40.4989 14.0081 40.4188 14.2016 40.4188 14.4033V21.1405C39.5487 21.3237 38.768 21.8006 38.2078 22.4911C37.6476 23.1817 37.3418 24.0439 37.3418 24.9331C37.3418 25.8223 37.6476 26.6845 38.2078 27.375C38.768 28.0656 39.5487 28.5424 40.4188 28.7257V30.5312C40.4188 30.7329 40.4989 30.9264 40.6416 31.0691C40.7842 31.2118 40.9777 31.2919 41.1795 31.2919C41.3812 31.2919 41.5747 31.2118 41.7174 31.0691C41.86 30.9264 41.9402 30.7329 41.9402 30.5312V28.7389C42.8232 28.5674 43.619 28.0942 44.1912 27.4001C44.7635 26.7061 45.0764 25.8346 45.0764 24.9351C45.0764 24.0356 44.7635 23.1641 44.1912 22.4701C43.619 21.7761 42.8232 21.3028 41.9402 21.1314V14.4033C41.9402 14.2016 41.86 14.0081 41.7174 13.8654C41.5747 13.7227 41.3812 13.6426 41.1795 13.6426ZM43.5691 24.9331C43.5691 25.3987 43.4311 25.8539 43.1724 26.241C42.9137 26.6282 42.546 26.93 42.1159 27.1081C41.6857 27.2863 41.2124 27.333 40.7557 27.2421C40.299 27.1513 39.8796 26.9271 39.5503 26.5978C39.2211 26.2686 38.9969 25.8491 38.9061 25.3924C38.8152 24.9357 38.8619 24.4623 39.04 24.0322C39.2182 23.602 39.5199 23.2343 39.9071 22.9756C40.2942 22.7169 40.7494 22.5788 41.215 22.5788C41.8392 22.5794 42.4376 22.8276 42.879 23.269C43.3204 23.7104 43.5686 24.3089 43.5691 24.9331Z" fill="white" fillOpacity="0.2"></path>
                                                   </svg>
                                                </span>
                                                <p>Smooth<br /> Scrolling</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".6">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M25.6662 14.8438H25.6563C25.337 14.8438 25.0497 15.0383 24.9307 15.3351L19.9308 27.8351C19.8346 28.0754 19.864 28.3485 20.0094 28.5629C20.1547 28.7773 20.3969 28.9062 20.6563 28.9062H30.2972C30.5528 28.9062 30.7924 28.7811 30.9388 28.5713C31.0846 28.3607 31.1189 28.093 31.0296 27.8534L26.3887 15.3534C26.2761 15.0505 25.9889 14.8476 25.6662 14.8438ZM21.8103 27.3438L25.6292 17.7963L29.1742 27.3438H21.8103Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M10.0312 43.75H14.7187C15.038 43.75 15.3252 43.5555 15.4443 43.2587L19.3104 33.5938H31.4957L35.08 43.2411C35.1937 43.5471 35.4859 43.75 35.8124 43.75H38.0074C38.4392 43.75 38.7887 43.4006 38.7887 42.9688C38.7887 42.5369 38.4392 42.1875 38.0074 42.1875H36.3557L32.7714 32.5401C32.6577 32.2342 32.3655 32.0312 32.0389 32.0312H18.7814C18.4621 32.0312 18.1748 32.2258 18.0558 32.5226L14.1896 42.1875H11.1562L24.5503 6.25H26.6774L35.1899 28.9543C35.3417 29.3587 35.7918 29.5616 36.1962 29.4113C36.5998 29.2595 36.8043 28.8094 36.6532 28.405L27.9504 5.19409C27.8359 4.88968 27.5445 4.6875 27.2187 4.6875H24.0079C23.6817 4.6875 23.3899 4.89044 23.2758 5.19562L9.29916 42.6956C9.20989 42.9359 9.24346 43.2045 9.38957 43.4143C9.53567 43.6249 9.77523 43.75 10.0312 43.75Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M6.90625 1.5625C7.33769 1.5625 7.6875 1.21307 7.6875 0.78125C7.6875 0.349426 7.33769 0 6.90625 0H3.78125C3.34981 0 3 0.349426 3 0.78125C3 1.21307 3.34981 1.5625 3.78125 1.5625H4.5625V42.1875H3.78125C3.34981 42.1875 3 42.5369 3 42.9688C3 43.4006 3.34981 43.75 3.78125 43.75H6.90625C7.33769 43.75 7.6875 43.4006 7.6875 42.9688C7.6875 42.5369 7.33769 42.1875 6.90625 42.1875H6.125V1.5625H6.90625Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M56.9643 47C56.3918 47 55.9286 47.3727 55.9286 47.8333V48.6667H2.07143V47.8333C2.07143 47.3727 1.60768 47 1.03571 47C0.463745 47 0 47.3727 0 47.8333V51.1667C0 51.6273 0.463745 52 1.03571 52C1.60768 52 2.07143 51.6273 2.07143 51.1667V50.3333H55.9286V51.1667C55.9286 51.6273 56.3918 52 56.9643 52C57.5368 52 58 51.6273 58 51.1667V47.8333C58 47.3727 57.5368 47 56.9643 47Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M49.0941 23.4375H47.5316C41.7851 23.4375 36.9252 27.5444 35.9753 33.2016C35.5344 35.8238 36.2134 38.5033 37.8377 40.551C39.3445 42.4522 41.4822 43.5822 43.8557 43.7325C45.1314 43.8133 46.3834 43.6119 47.5522 43.1496C47.6338 43.4937 47.9436 43.75 48.3128 43.75H52.2191C52.6509 43.75 53.0003 43.4006 53.0003 42.9688V27.3438C53.0003 25.19 51.2479 23.4375 49.0941 23.4375ZM51.4378 42.1875H49.0941V41.9151C49.0941 41.6359 48.9453 41.378 48.7027 41.2384C48.4616 41.0995 48.1625 41.0988 47.9214 41.2392C46.7145 41.938 45.3366 42.2585 43.9549 42.173C42.0285 42.0509 40.2905 41.1301 39.0614 39.5805C37.7118 37.8784 37.1487 35.6476 37.5165 33.461C38.3397 28.5583 42.5511 25 47.5316 25H49.0941C50.3865 25 51.4378 26.0513 51.4378 27.3438V42.1875Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M48.3125 27.3438H47.5312C43.2237 27.3438 39.7188 30.8487 39.7188 35.1562C39.7188 37.7411 41.8214 39.8438 44.4062 39.8438C46.9911 39.8438 49.0938 37.7411 49.0938 35.1562V28.125C49.0938 27.6932 48.7443 27.3438 48.3125 27.3438ZM47.5312 35.1562C47.5312 36.8797 46.1297 38.2812 44.4062 38.2812C42.6828 38.2812 41.2812 36.8797 41.2812 35.1562C41.2812 31.7101 44.0851 28.9062 47.5312 28.9062V35.1562Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M52.2188 14.0625H47.5312C47.0994 14.0625 46.75 14.4119 46.75 14.8438C46.75 15.2756 47.0994 15.625 47.5312 15.625H52.2188C52.6506 15.625 53 15.2756 53 14.8438C53 14.4119 52.6506 14.0625 52.2188 14.0625Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M52.2188 9.375H49.875C49.4432 9.375 49.0938 9.72443 49.0938 10.1562C49.0938 10.5881 49.4432 10.9375 49.875 10.9375H52.2188C52.6506 10.9375 53 10.5881 53 10.1562C53 9.72443 52.6506 9.375 52.2188 9.375Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M49.875 1.5625H52.2188C52.6506 1.5625 53 1.21307 53 0.78125C53 0.349426 52.6506 0 52.2188 0H49.875C49.4432 0 49.0938 0.349426 49.0938 0.78125C49.0938 1.21307 49.4432 1.5625 49.875 1.5625Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M52.2188 4.6875H47.5312C47.0994 4.6875 46.75 5.03693 46.75 5.46875C46.75 5.90057 47.0994 6.25 47.5312 6.25H52.2188C52.6506 6.25 53 5.90057 53 5.46875C53 5.03693 52.6506 4.6875 52.2188 4.6875Z" fill="white" fillOpacity="0.2"></path>
                                                   </svg>
                                                </span>
                                                <p>Advanced<br /> Typography</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".8">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="53" height="49" viewBox="0 0 53 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <rect opacity="0.4" x="2.25391" y="46.4727" width="48" height="2.52653" rx="1.26327" fill="white" fillOpacity="0.2"></rect>
                                                      <rect x="1" y="1" width="50.5263" height="40.4245" rx="4" stroke="white" strokeOpacity="0.2" strokeWidth="2"></rect>
                                                      <path d="M14.8906 14.8906H18.6801" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M14.8906 27.5273H22.4696" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M33.8359 27.5273L37.6254 27.5273" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M30.0547 14.8906L37.6336 14.8906" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M18.6914 14.8992C18.6914 13.722 18.6914 13.1333 18.8837 12.669C19.1401 12.05 19.6319 11.5581 20.2509 11.3017C20.7152 11.1094 21.3038 11.1094 22.4809 11.1094C23.658 11.1094 24.2466 11.1094 24.7108 11.3017C25.3298 11.5581 25.8216 12.05 26.078 12.669C26.2704 13.1333 26.2704 13.722 26.2704 14.8992C26.2704 16.0764 26.2704 16.665 26.078 17.1293C25.8216 17.7484 25.3298 18.2402 24.7108 18.4966C24.2466 18.689 23.658 18.689 22.4809 18.689C21.3038 18.689 20.7152 18.689 20.2509 18.4966C19.6319 18.2402 19.1401 17.7484 18.8837 17.1293C18.6914 16.665 18.6914 16.0764 18.6914 14.8992Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5"></path>
                                                      <path d="M26.2539 27.5359C26.2539 26.3587 26.2539 25.7701 26.4462 25.3058C26.7026 24.6867 27.1944 24.1948 27.8134 23.9384C28.2777 23.7461 28.8663 23.7461 30.0434 23.7461C31.2205 23.7461 31.8091 23.7461 32.2733 23.9384C32.8923 24.1948 33.3841 24.6867 33.6405 25.3058C33.8329 25.7701 33.8329 26.3587 33.8329 27.5359C33.8329 28.7131 33.8329 29.3017 33.6405 29.766C33.3841 30.3851 32.8923 30.8769 32.2733 31.1334C31.8091 31.3257 31.2205 31.3257 30.0434 31.3257C28.8663 31.3257 28.2777 31.3257 27.8134 31.1334C27.1944 30.8769 26.7026 30.3851 26.4462 29.766C26.2539 29.3017 26.2539 28.7131 26.2539 27.5359Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.5"></path>
                                                   </svg>
                                                </span>
                                                <p>Browser Friendly <br /> Code</p>
                                             </div>
                                          </div>
                                          <div className="col">
                                             <div className="tp-feature-include-item text-center tp-fade-anim mb-25" data-delay=".9">
                                                <span className="d-inline-block mb-30">
                                                   <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M44.3846 28.7061C45.1536 27.0173 46.9677 26.0396 48.7987 26.3296C50.7154 26.6384 52.1814 28.2628 52.2852 30.1962L53.2619 47.8982C53.3856 51.8669 51.5405 55.6331 48.3274 57.9678L46.946 58.9767C44.024 61.1007 40.4497 61.9607 36.8819 61.3971C35.6513 61.2021 34.4716 60.8471 33.3675 60.3443C31.2714 59.3897 29.447 57.9052 28.0559 55.9917L21.4355 46.889C20.1906 45.1813 20.4448 42.8478 22.0147 41.5777C22.6899 41.03 23.5048 40.7364 24.3543 40.7267C23.5704 39.1145 23.9307 37.1653 25.3086 36.0394C25.9845 35.4902 26.8009 35.1973 27.6527 35.1887C26.8638 33.5733 27.2256 31.6248 28.6108 30.505C29.2646 29.9741 30.0513 29.6823 30.8729 29.6554L26.8492 24.1213C25.6036 22.4132 25.8589 20.0793 27.4285 18.81C28.2449 18.1471 29.2673 17.8564 30.307 17.992C31.3384 18.1257 32.2798 18.6844 32.8924 19.5246L43.3981 33.9766L44.0595 29.7859C44.1149 29.421 44.2202 29.067 44.3846 28.7061ZM31.5446 20.5058C31.1938 20.0256 30.6778 19.7192 30.0911 19.6443C29.5085 19.5686 28.9349 19.7322 28.4757 20.1054C27.6106 20.8047 27.4833 22.1659 28.1936 23.1394L38.2958 37.0341C38.5662 37.4054 38.4841 37.9274 38.1121 38.1975C37.8603 38.3804 37.5408 38.4025 37.2761 38.2819C37.1495 38.2243 37.0358 38.1341 36.9487 38.0138L32.7186 32.1971C32.7186 32.1971 32.7178 32.1949 32.7174 32.1938C32.3731 31.7193 31.8609 31.4146 31.2767 31.3381C30.6937 31.2612 30.1187 31.4242 29.6587 31.7989C28.7929 32.4979 28.6664 33.8594 29.3771 34.8341L33.5069 40.5172C33.7773 40.8885 33.6952 41.4105 33.3232 41.6806C33.0714 41.8635 32.7519 41.8856 32.4872 41.765C32.3606 41.7074 32.2469 41.6172 32.1598 41.4969L29.4228 37.7335C29.4228 37.7335 29.4207 37.728 29.4184 37.7251C29.0678 37.2505 28.5548 36.9473 27.9727 36.8726C27.39 36.7969 26.8165 36.9605 26.3605 37.3306C25.4989 38.0342 25.3717 39.3973 26.0756 40.3689L28.7161 44.0004C28.9865 44.3716 28.9044 44.8937 28.5324 45.1638C28.2806 45.3467 27.9611 45.3687 27.6964 45.2482C27.5698 45.1905 27.4561 45.1003 27.369 44.9801L26.1251 43.27C26.1251 43.27 26.1243 43.2678 26.1239 43.2667C25.7792 42.7911 25.2666 42.4872 24.6832 42.4111C24.1002 42.3342 23.5252 42.4972 23.0652 42.8719C22.2002 43.5712 22.0736 44.9327 22.7836 45.907L29.4044 55.0108C31.267 57.5739 34.0148 59.2565 37.1431 59.7499C40.2717 60.2444 43.4054 59.4914 45.9663 57.6297L47.3477 56.6207C50.1146 54.6084 51.7043 51.3668 51.5987 47.9695L50.6231 30.2872C50.5732 29.3534 49.9921 28.5403 49.1678 28.165C48.9706 28.0752 48.7602 28.0105 48.5393 27.9749C47.4471 27.8016 46.3631 28.3866 45.9035 29.3959C45.8044 29.6136 45.7403 29.8225 45.7079 30.0384L44.7327 36.2233C44.6799 36.5564 44.432 36.8253 44.1041 36.9039C43.7755 36.9823 43.433 36.8556 43.2356 36.5835L31.5468 20.505L31.5446 20.5058Z" fill="white" fillOpacity="0.6"></path>
                                                      <path d="M25.5591 12.5306C25.3649 12.4422 25.2047 12.2795 25.1241 12.0643L23.1277 6.7291C22.9662 6.29756 23.1844 5.81829 23.616 5.6568C24.0475 5.49532 24.5268 5.71357 24.6883 6.14511L26.6847 11.4803C26.8462 11.9118 26.628 12.3911 26.1964 12.5526C25.9812 12.6331 25.7532 12.619 25.5591 12.5306Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M36.5542 17.5374C36.36 17.449 36.1998 17.2863 36.1192 17.071C35.9577 16.6395 36.176 16.1602 36.6075 15.9987L41.9419 14.0019C42.3735 13.8405 42.8528 14.0587 43.0142 14.4903C43.1757 14.9218 42.9575 15.4011 42.5259 15.5625L37.1915 17.5593C36.9763 17.6399 36.7483 17.6258 36.5542 17.5374Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M21.188 23.5469L15.8532 25.5426C15.638 25.6232 15.41 25.6091 15.2159 25.5207C15.0217 25.4323 14.8614 25.2695 14.7809 25.0543C14.6194 24.6228 14.8377 24.1435 15.2692 23.982L20.6041 21.9863C21.0356 21.8248 21.5149 22.0431 21.6763 22.4746C21.8378 22.9062 21.6196 23.3854 21.188 23.5469Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M31.6269 11.9366L34.0442 6.62821C34.2352 6.20885 34.7285 6.02424 35.1479 6.21521C35.5673 6.40618 35.7519 6.89953 35.5609 7.31889L33.1436 12.6273C32.9526 13.0466 32.4592 13.2312 32.0399 13.0403C31.6205 12.8493 31.4359 12.356 31.6269 11.9366Z" fill="white" fillOpacity="0.2"></path>
                                                      <path d="M16.3864 13.2353L21.6948 15.6527C22.1141 15.8437 22.2988 16.337 22.1078 16.7564C21.9168 17.1757 21.4235 17.3604 21.0041 17.1694L15.6957 14.752C15.2764 14.5611 15.0918 14.0677 15.2827 13.6484C15.4737 13.229 15.967 13.0444 16.3864 13.2353Z" fill="white" fillOpacity="0.2"></path>
                                                   </svg>
                                                </span>
                                                <p>Animated <br /> particles</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* tp-feature-area-end */}


                        {/* tp-build-area-start */}
                        <div className="tp-build-area tp-sm-pt tp-bg-black-2 section-meinus pt-70">
                           <div className="container container-1230">
                              <div className="row align-items-end">
                                 <div className="col-lg-8">
                                    <div className="tp-build-title-wrap mb-85">
                                       <span className="tp-responsive-layout-subtitle mb-25 tp-fade-anim" data-delay=".3">Build
                                          Beautiful Website</span>
                                       <h2 className="tp-section-title tp-section-title-120 tp-section-title-white tp-fade-anim" data-delay=".5">All the tools you need.</h2>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-top-shape mb-85">
                                       <img data-speed="1.1" src="images/thumb.png" alt="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg_1.png" alt="" />
                                       </div>
                                       <div className="tp-build-content">
                                          <h3 className="tp-build-main-title mb-50">Theme’s Figma<br /> design source files</h3>
                                          <span className="tp-build-icon">
                                             <svg width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3203 20.0079C13.3203 16.3265 16.3089 13.3379 19.9903 13.3379C23.6716 13.3379 26.6603 16.3265 26.6603 20.0079C26.6603 23.6892 23.6716 26.6779 19.9903 26.6779C16.3089 26.6779 13.3203 23.6892 13.3203 20.0079Z" fill="#1ABCFE"></path>
                                                <path d="M0 33.3301C0 29.6488 2.98863 26.6602 6.66998 26.6602H13.34V33.3301C13.34 37.0115 10.3513 40.0001 6.66998 40.0001C2.98863 40.0001 0 37.0115 0 33.3301Z" fill="#0ACF83"></path>
                                                <path d="M13.3203 0.0197934V13.34H19.9903C23.6716 13.34 26.6603 10.3513 26.6603 6.66998C26.6603 2.98863 23.6716 0 19.9903 0H13.3203V0.0197934Z" fill="#FF7262"></path>
                                                <path d="M0 6.68935C0 10.3707 2.98863 13.3593 6.66998 13.3593H13.34V0.0391602H6.66998C2.98863 0.019368 0 3.00799 0 6.68935Z" fill="#F24E1E"></path>
                                                <path d="M0 20.0097C0 23.691 2.98863 26.6796 6.66998 26.6796H13.34V13.3595H6.66998C2.98863 13.3397 0 16.3283 0 20.0097Z" fill="#A259FF"></path>
                                             </svg>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg-2_1.png" alt="" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg-3.png" alt="" />
                                       </div>
                                       <div className="tp-build-content">
                                          <span className="tp-build-subtitle d-inline-block mb-10">Language</span>
                                          <h3 className="tp-build-main-title mb-10">RTL Supported <br /> Ready</h3>
                                          <img className="tp-build-langguage" src="images/langguag.png" alt="" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25 text-center">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg-4.png" alt="" />
                                       </div>
                                       <div className="tp-build-content text-center">
                                          <span className="tp-build-subtitle d-inline-block mb-10">text animations</span>
                                          <h3 className="tp-build-main-title mb-30">Smooth and elegant<br /> text motions</h3>
                                          <img src="images/shape_3.png" alt="" />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25 text-center">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg-5.png" alt="" />
                                       </div>
                                       <div className="tp-build-content text-center">
                                          <span className="tp-build-subtitle d-inline-block mb-10">popup</span>
                                          <h3 className="tp-build-main-title mb-30">Powerful marketing<br /> popup</h3>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                    <div className="tp-build-item anim-zoomin-wrap p-relative mb-25">
                                       <div className="tp-build-thumb anim-zoomin">
                                          <img src="images/bg-6.png" alt="" />
                                       </div>
                                       <div className="tp-build-content text-center">
                                          <h3 className="tp-build-main-title mb-10">Premium<br /> help and support</h3>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* tp-build-area-end */}

                        {/* tp-faq-area-start */}
                        <div className="tp-faq-area tp-sm-pt pt-130 tp-bg-black-2 section-meinus">
                           <div className="container container-1230">
                              <div className="row justify-content-center">
                                 <div className="col-lg-4">
                                    <div className="tp-faq-title-wrap mb-55">
                                       <span className="tp-responsive-layout-subtitle mb-15 tp-fade-anim" data-delay=".3">Support
                                          included.</span>
                                       <h2 className="tp-section-title tp-section-title-60 text-lts tp-section-title-white tp-fade-anim" data-delay=".5">First class<br /> support.</h2>
                                    </div>
                                 </div>
                                 <div className="col-lg-8">
                                    <div className="tp-faq-wrapper">
                                       <div className="accordion" id="general_faqaccordion">
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_one">
                                                <button className="accordion-button tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_one" aria-expanded="true" aria-controls="order__collapse_one">
                                                   Why should I choose aleric?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_one" className="accordion-collapse collapse show" aria-labelledby="order_one" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>The aleric built with modern agency like HTML5, Bootstrap, SASS, GSAP etc. You can use it to build your dream website. So, don't waste your valuable time. <br /> Just <a href="#" target="_blank">click here</a> and buy the template. </p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_two">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_two" aria-expanded="false" aria-controls="order__collapse_two">
                                                   Can I get free support?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_two" className="accordion-collapse collapse" aria-labelledby="order_two" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Yes. You can get free support after purchase this template.</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_three">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_three" aria-expanded="false" aria-controls="order__collapse_three">
                                                   Can I get regular Updates?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_three" className="accordion-collapse collapse" aria-labelledby="order_three" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Yes. You can get lifetime free regular updates.</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_four">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_four" aria-expanded="false" aria-controls="order__collapse_four">
                                                   Is it cross browser compatibility?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_four" className="accordion-collapse collapse" aria-labelledby="order_four" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Yes. This template is fully responsive and cross browser compatibility.</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_five">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_five" aria-expanded="false" aria-controls="order__collapse_five">
                                                   Can I change content ?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_five" className="accordion-collapse collapse" aria-labelledby="order_five" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Yes. You can change any content as you like. You can modify and content or design.</p>
                                                </div>
                                             </div>
                                          </div>
                                          <span>
                                             <i style={{ color: "#EC6FD5" }}></i>
                                          </span>

                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_six">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_six" aria-expanded="false" aria-controls="order__collapse_six">
                                                   Am I allowed to customize the elements?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_six" className="accordion-collapse collapse" aria-labelledby="order_six" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Absolutely! All components and elements can be edited or styled as per your project requirements.</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="accordion-item mb-5">
                                             <h2 className="accordion-header" id="order_saven">
                                                <button className="accordion-button collapsed tp-faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_saven" aria-expanded="false" aria-controls="order__collapse_saven">
                                                   Can I create a full-fledged project using this template?
                                                   <span className="accordion-btn">
                                                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                                      </svg>
                                                   </span>
                                                </button>
                                             </h2>
                                             <div id="order__collapse_saven" className="accordion-collapse collapse" aria-labelledby="order_saven" data-bs-parent="#general_faqaccordion">
                                                <div className="accordion-body tp-faq-details-para">
                                                   <p>Yes, the template is develope to be used for complete projects and includes everything
                                                      necessary to build a full website.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* tp-faq-area-end */}

                        {/* tp-review-area-start */}
                        <div className="tp-review-area tp-sm-pt pt-180 tp-bg-black-2 section-meinus p-relative">
                           <span className="tp-review-overly"></span>
                           <div className="container container-1620">
                              <div className="row">
                                 <div className="col-xl-12">
                                    <div className="tp-review-title-wrap text-center mb-35">
                                       <span className="tp-responsive-layout-subtitle mb-15 tp-fade-anim" data-delay=".3">Customers
                                          Review</span>
                                       <h2 className="tp-section-title tp-section-title-60 text-lts tp-section-title-white tp-fade-anim" data-delay=".5">500+ Trusted customers</h2>
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-review-wrapper-main p-relative">
                                 <div className="tp-review-wrapper">
                                    <div className="row gx-20">
                                       <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="tp-review-scrool-item">
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Cool template, cool team!<br /> Thanks a lot for the template
                                                   and<br /> quick resolving the issue.<br /> BR, Eduard</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Feature Availability</span>
                                                <p className="tp-review-dec mb-20">Really well designed templates.<br /> Well documented.
                                                   Looking forward for WordPress theme.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customizability</span>
                                                <p className="tp-review-dec mb-20">5 star on from design to support</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Cool theme, cool team!<br /> Thanks a lot for the theme
                                                   and<br /> quick resolving the issue.<br /> BR, Eduard</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Feature Availability</span>
                                                <p className="tp-review-dec mb-20">Really well designed templates.<br /> Well documented.
                                                   Looking forward for WordPress theme.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="tp-review-scrool-item">
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customer Support</span>
                                                <p className="tp-review-dec mb-20">Great customer support,<br /> very quick and efficient.
                                                   10/10 would recommend!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">juandeveloper03</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Grate template and grate code I love the modern
                                                   designs with many deferent styles to choose. I recommend this template any one
                                                   who wants to display advanced features and user friendly code.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">luigik99</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customizability</span>
                                                <p className="tp-review-dec mb-20">5 star on from design to support</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customer Support</span>
                                                <p className="tp-review-dec mb-20">Great customer support,<br /> very quick and efficient.
                                                   10/10 would recommend!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">juandeveloper03</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Grate template and grate code I love the modern
                                                   designs with many deferent styles to choose. I recommend this template any one
                                                   who wants to display advanced features and user friendly code.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">luigik99</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-3 col-lg-4 d-none d-lg-block">
                                          <div className="tp-review-scrool-item">
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Feature Availability</span>
                                                <p className="tp-review-dec mb-20">This theme is amazing just need to learn
                                                   customization properly. Their support team is very cooperative.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">masoodhusain007</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customer Support</span>
                                                <p className="tp-review-dec mb-20">Very helpful and quick supoort!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">luigik99</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customizability</span>
                                                <p className="tp-review-dec mb-20">5 star on from design to support</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">edosik1312</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Feature Availability</span>
                                                <p className="tp-review-dec mb-20">This theme is amazing just need to learn
                                                   customization properly. Their support team is very cooperative.</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">masoodhusain007</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Customer Support</span>
                                                <p className="tp-review-dec mb-20">Very helpful and quick supoort!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">luigik99</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-3 d-none d-xl-block">
                                          <div className="tp-review-scrool-item">
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Thank you very much! I<br /> appreciate, you have a 5
                                                   star theme. It's really worth it!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">masoodhusain007</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Design Quality</span>
                                                <p className="tp-review-dec mb-20">Thank you very much! I<br /> appreciate, you have a 5
                                                   star theme. It's really worth it!</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">masoodhusain007</span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                             <div className="tp-review-item mb-20">
                                                <div className="tp-review-ratings">
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                   <span>
                                                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                                                      </svg>
                                                   </span>
                                                </div>
                                                <span className="tp-review-status d-inline-block mb-25">Documentation Quality</span>
                                                <p className="tp-review-dec mb-20">easy to use and a very great<br /> customer service</p>
                                                <div className="tp-review-customer">
                                                   <span className="icons">
                                                      <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M8.00379 19.9993C8.49878 19.9993 8.90014 19.5989 8.90014 19.1051C8.90014 18.6113 8.49878 18.2109 8.00379 18.2109C7.50873 18.2109 7.10742 18.6113 7.10742 19.1051C7.10742 19.5989 7.50873 19.9993 8.00379 19.9993Z" fill="#87E64B"></path>
                                                         <path d="M13.1518 13.013L8.10168 13.5528C8.0093 13.563 7.96155 13.445 8.03513 13.388L12.9772 9.54851C13.2982 9.28682 13.5025 8.87904 13.4148 8.44237C13.3271 7.7729 12.7729 7.33621 12.073 7.4237L6.70351 8.20801C6.60879 8.22207 6.5579 8.10099 6.63384 8.04318L11.9564 3.98809C13.0069 3.17332 13.0938 1.5719 12.1317 0.640744C11.2565 -0.232612 9.85602 -0.203707 8.9808 0.669648L0.404007 9.37353C0.0830428 9.72271 -0.0625647 10.1883 0.0251132 10.6836C0.170721 11.4694 0.958257 11.9936 1.74658 11.8483L6.37002 10.907C6.47022 10.8867 6.52502 11.0202 6.43813 11.0749L1.30819 14.3512C0.666258 14.759 0.375042 15.4862 0.57858 16.2143C0.782901 17.1751 1.74579 17.7282 2.67894 17.4954L10.3469 15.6104C10.433 15.5893 10.4964 15.6893 10.4408 15.7581L9.24305 17.2329C8.92209 17.6407 9.44738 18.1938 9.88498 17.8735L13.8234 14.6426C14.5233 14.0606 14.0567 12.9248 13.1525 13.0122L13.1518 13.013Z" fill="#87E64B"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="emails">shykeys </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-review-img text-center">
                                 <img src="images/review.png" alt="" />
                              </div>
                           </div>
                        </div>
                        {/* tp-review-area-end */}

                        {/* tp documentation area start */}
                        <div className="tp-documentation-area tp-sm-pt tp-sm-pb tp-bg-black-2 section-meinus pb-125 pt-180">
                           <div className="container container-1230">
                              <div className="row">
                                 <div className="col-lg-4 col-md-6 tp-fade-anim" data-delay=".3">
                                    <div className="tp-documentation-item d-flex">
                                       <div className="tp-documentation-icon">
                                          <span>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 33 38" fill="none">
                                                <path d="M1 15.4C1 8.61177 1 5.21766 3.24063 3.10883C5.48127 1 9.08751 1 16.3 1H17.6909C23.5611 1 26.4962 1 28.5345 2.4361C29.1185 2.84757 29.637 3.33554 30.0741 3.8852C31.6 5.80361 31.6 8.56604 31.6 14.0909V18.6727C31.6 24.0064 31.6 26.6733 30.7559 28.8032C29.3989 32.2274 26.5292 34.9284 22.891 36.2056C20.6279 37 17.7943 37 12.1273 37C8.88895 37 7.26979 37 5.9766 36.546C3.89763 35.8162 2.25775 34.2728 1.48233 32.3161C1 31.099 1 29.5751 1 26.5273V15.4Z" stroke="#161613" strokeWidth="1.5" strokeLinejoin="round"></path>
                                                <path d="M31.6016 18.999C31.6016 22.3127 28.9153 24.999 25.6016 24.999C24.4032 24.999 22.9903 24.789 21.8251 25.1012C20.7898 25.3786 19.9812 26.1873 19.7038 27.2226C19.3916 28.3878 19.6016 29.8006 19.6016 30.999C19.6016 34.3127 16.9153 36.999 13.6016 36.999" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9.10156 10H21.7016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9.10156 17.1992H14.5016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                             </svg>
                                          </span>
                                       </div>
                                       <div className="tp-documentation-content">
                                          <h4>Online <br />
                                             documentation</h4>
                                          <p>Well organized and up to date</p>
                                          <a target="_blank" href="https://html.aqlova.com/docs/aleric-html-docs/">View Documentation</a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 tp-fade-anim" data-delay=".5">
                                    <div className="tp-documentation-item d-flex bg-2">
                                       <div className="tp-documentation-icon">
                                          <span><svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 33 38" fill="none">
                                             <path d="M1 15.4C1 8.61177 1 5.21766 3.24063 3.10883C5.48127 1 9.08751 1 16.3 1H17.6909C23.5611 1 26.4962 1 28.5345 2.4361C29.1185 2.84757 29.637 3.33554 30.0741 3.8852C31.6 5.80361 31.6 8.56604 31.6 14.0909V18.6727C31.6 24.0064 31.6 26.6733 30.7559 28.8032C29.3989 32.2274 26.5292 34.9284 22.891 36.2056C20.6279 37 17.7943 37 12.1273 37C8.88895 37 7.26979 37 5.9766 36.546C3.89763 35.8162 2.25775 34.2728 1.48233 32.3161C1 31.099 1 29.5751 1 26.5273V15.4Z" stroke="#161613" strokeWidth="1.5" strokeLinejoin="round"></path>
                                             <path d="M31.6016 18.999C31.6016 22.3127 28.9153 24.999 25.6016 24.999C24.4032 24.999 22.9903 24.789 21.8251 25.1012C20.7898 25.3786 19.9812 26.1873 19.7038 27.2226C19.3916 28.3878 19.6016 29.8006 19.6016 30.999C19.6016 34.3127 16.9153 36.999 13.6016 36.999" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                             <path d="M9.10156 10H21.7016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                             <path d="M9.10156 17.1992H14.5016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg></span>
                                       </div>
                                       <div className="tp-documentation-content">
                                          <h4>Videos and <br />
                                             Documentation</h4>
                                          <p>Well organized and up to date</p>
                                          <a href="#" target="_blank">Watch
                                             Videos</a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 tp-fade-anim" data-delay=".7">
                                    <div className="tp-documentation-item d-flex bg-3">
                                       <div className="tp-documentation-icon">
                                          <span><svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 33 38" fill="none">
                                             <path d="M1 15.4C1 8.61177 1 5.21766 3.24063 3.10883C5.48127 1 9.08751 1 16.3 1H17.6909C23.5611 1 26.4962 1 28.5345 2.4361C29.1185 2.84757 29.637 3.33554 30.0741 3.8852C31.6 5.80361 31.6 8.56604 31.6 14.0909V18.6727C31.6 24.0064 31.6 26.6733 30.7559 28.8032C29.3989 32.2274 26.5292 34.9284 22.891 36.2056C20.6279 37 17.7943 37 12.1273 37C8.88895 37 7.26979 37 5.9766 36.546C3.89763 35.8162 2.25775 34.2728 1.48233 32.3161C1 31.099 1 29.5751 1 26.5273V15.4Z" stroke="#161613" strokeWidth="1.5" strokeLinejoin="round"></path>
                                             <path d="M31.6016 18.999C31.6016 22.3127 28.9153 24.999 25.6016 24.999C24.4032 24.999 22.9903 24.789 21.8251 25.1012C20.7898 25.3786 19.9812 26.1873 19.7038 27.2226C19.3916 28.3878 19.6016 29.8006 19.6016 30.999C19.6016 34.3127 16.9153 36.999 13.6016 36.999" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                             <path d="M9.10156 10H21.7016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                             <path d="M9.10156 17.1992H14.5016" stroke="#161613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg></span>
                                       </div>
                                       <div className="tp-documentation-content">
                                          <h4>Dedicated <br />
                                             Customer Support</h4>
                                          <p>Well organized and up to date</p>
                                          <a target="_blank" href="https://help.aqlova.com/login">Open Ticket</a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-12">
                                    <div className="tp-documentation-para text-center pt-40">
                                       <p>( <span>Note:</span> Our response time is typically within <span>8</span> hours.)</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* tp documentation area end */}

                     </main>

                     <footer>

                        {/* footer area start */}
                        <div className="tp-bg-black-2">
                           <div className="tp-footer-area include-bg tp-sm-pt pt-110" data-background="assets/img/footer/footer.png">
                              <div className="container-fluid">
                                 <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                       <div className="tp-footer-content-wrap text-center pb-130">
                                          <h3 className="tp-section-title ff-100 tp-section-title-white-2 mb-30 tp-fade-anim" data-delay=".3">Let’s Build a Creative<br /> Website Today!</h3>
                                          <p>One-time payment and get all Features, options, templates & demos!</p>
                                          <div className="tp-fade-anim" data-delay=".5" data-duration="1.2" data-fade-from="top" data-ease="bounce">
                                             <a className="tp-btn-yellow tp-footer-btn btn-bdr d-inline-flex align-items-center" href="https://themeforest.net/checkout/from_item/59505968?license=regular" target="_blank">
                                                <i>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                                      <path d="M3.1 1.01953L1 3.82034V13.6232C1 13.9946 1.1475 14.3508 1.41005 14.6134C1.6726 14.8761 2.0287 15.0236 2.4 15.0236H12.2C12.5713 15.0236 12.9274 14.8761 13.1899 14.6134C13.4525 14.3508 13.6 13.9946 13.6 13.6232V3.82034L11.5 1.01953H3.1Z" stroke="#0B0606" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M1 3.82227H13.6" stroke="#0B0606" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                      <path d="M10.1 6.62012C10.1 7.36272 9.805 8.07491 9.2799 8.60002C8.7548 9.12512 8.04261 9.42012 7.3 9.42012C6.55739 9.42012 5.8452 9.12512 5.3201 8.60002C4.795 8.07491 4.5 7.36272 4.5 6.62012" stroke="#0B0606" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                   </svg>
                                                </i>
                                                <span>
                                                   <span className="text-1">Purchase Now</span>
                                                   <span className="text-2">Purchase Now</span>
                                                </span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-footer-slide-wrap pt-30 pb-30">
                                 <div className="swiper-container tp-footer-slide-active">
                                    <div className="swiper-wrapper slide-transtion">
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility that works for you</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Custom-fit flexibility</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility without limits</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility that works for you</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Custom-fit flexibility</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility without limits</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility that works for you</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Custom-fit flexibility</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Flexibility without limits</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                       <div className="swiper-slide">
                                          <div className="tp-footer-slide-content d-flex align-items-center">
                                             <span>Freedom to work your way</span>
                                             <i>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M21.5795 10.6109C21.9426 10.6109 21.953 10.9676 21.5905 10.9885C21.4581 10.9961 21.3247 11 21.1903 11H18.2381C14.4555 11 11.3891 14.0664 11.3891 17.8488V21.5795C11.3891 21.9425 11.0324 21.9529 11.0115 21.5906C11.0039 21.4581 11 21.3247 11 21.1903V18.2381C11 14.4555 7.93365 11.3891 4.1511 11.3891H0.420563C0.0575488 11.3891 0.0470628 11.0324 0.409476 11.0115C0.541911 11.0039 0.675356 11 0.809704 11H3.76195C7.54451 11 10.6109 7.93363 10.6109 4.1511V0.420557C10.6109 0.057443 10.9676 0.046981 10.9885 0.409493C10.9961 0.541923 11 0.675362 11 0.809704V3.76195C11 7.54451 14.0664 10.6109 17.849 10.6109H21.5795Z" fill="white"></path>
                                                </svg>
                                             </i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* footer area start */}

                     </footer>

                  </div>
               </div>





               <Script src="js/jquery.js" strategy="beforeInteractive" />
               <Script src="js/bootstrap-bundle.js" strategy="afterInteractive" />
               <Script src="js/swiper-bundle.js" strategy="afterInteractive" />
               <Script src="js/plugin.js" strategy="afterInteractive" />
               <Script src="js/Observer.min.js" strategy="afterInteractive" />
               <Script src="js/vertical-beforeafter.js" strategy="afterInteractive" />
               <Script src="js/isotope-pkgd.js" strategy="afterInteractive" />
               <Script src="js/imagesloaded-pkgd.js" strategy="afterInteractive" />
               <Script src="js/purecounter.js" strategy="afterInteractive" />
               <Script src="js/magnific-popup.js" strategy="afterInteractive" />
               <Script src="js/slider-init.js" strategy="afterInteractive" onLoad={() => { (window as any).initSlider && (window as any).initSlider() }} />
               <Script src="js/main.js" strategy="afterInteractive" onLoad={() => { (window as any).initMain && (window as any).initMain() }} />
            </div>
         </div>
      </>
   );
}
