"use client";

import React, { useEffect, useState } from "react";

interface Demo {
   id: number;
   title: string;
   image: string;
   linkLight?: string;
   linkDark?: string;
   linkRTL?: string;
   isNew: boolean;
   category?: string;
}

export default function DemoSection() {
   const [demos, setDemos] = useState<Demo[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("/api/demos")
         .then((res) => res.json())
         .then((data) => {
            setDemos(data);
            setLoading(false);
         })
         .catch((err) => {
            console.error("Failed to fetch demos", err);
            setLoading(false);
         });
   }, []);

   if (loading) return <div className="text-center py-20 text-white">Loading Demos...</div>;

   return (
      <div id="demo" className="tp-demo-area tp-sm-pb tp-demo-spacing pt-200 pb-120">
         <div id="demo-2" className="container container-1830">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="tp-demo-title-box mb-60 p-relative text-center">
                     <div className="tp-demo-shape-box">
                        <div className="shape-1">
                           <img data-speed="1.1" src="/images/shape-1.png" alt="" />
                        </div>
                        <div className="shape-2">
                           <img data-speed=".8" src="/images/shape-2.png" alt="" />
                        </div>
                     </div>
                     <span className="tp-demo-stroke-text tp-fade-anim" data-delay=".3">
                        {demos.length}+
                     </span>
                     <span className="tp-demo-subtitle mb-35 tp-fade-anim" data-delay=".5">
                        Award-Winning Design Collection
                     </span>
                     <h4 className="tp-section-title mb-30 tp-fade-anim" data-delay=".7">
                        Start building with {demos.length}+ <br />
                        complete demo <i>websites</i>
                     </h4>
                     <p className="mb-30 tp-fade-anim">
                        Discover {demos.length}+ beautifully crafted home demos. Fully flexible and
                        customizable — combine
                        <br /> sections to design your site the way you want.
                     </p>
                     <div className="tp-demo-cetagories tp-fade-anim" data-delay=".9">
                        <span>Exclusive Feature</span>
                        <span>Multiple Layouts</span>
                        <span>Dedicated Support</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-demo-item-box">
               <div className="row gx-40 row-cols-xxl-3 row-cols-md-2 row-cols-1">
                  {demos.map((demo) => (
                     <div className="col" key={demo.id}>
                        <div className="tp-demo-item anim-zoomin-wrap mb-40">
                           {demo.isNew && <span className="tp-demo-new">NEW</span>}
                           <div className="tp-demo-thumb anim-zoomin p-relative">
                              <img src={`/${demo.image}`} alt={demo.title} />
                              {/* Optional Figma badge if needed, kept from original static if desired, or conditional */}
                              <div className="tp-demo-figma d-inline-flex align-items-center justify-content-center">
                                 <span><img src="/images/figma.png" alt="" /></span>
                                 <span>Free Figma File</span>
                              </div>

                              <div className="tp-demo-btn-wrap">
                                 {demo.linkLight && (
                                    <a
                                       className="tp-demo-btn"
                                       target="_blank"
                                       href={demo.linkLight}
                                    >
                                       <span>
                                          <span className="text-1">Demo Light</span>
                                          <span className="text-2">Demo Light</span>
                                       </span>
                                    </a>
                                 )}
                                 {demo.linkDark && (
                                    <a
                                       className="tp-demo-btn"
                                       target="_blank"
                                       href={demo.linkDark}
                                    >
                                       <span>
                                          <span className="text-1">Demo Dark</span>
                                          <span className="text-2">Demo Dark</span>
                                       </span>
                                    </a>
                                 )}
                                 {demo.linkRTL && (
                                    <a
                                       className="tp-demo-btn"
                                       target="_blank"
                                       href={demo.linkRTL}
                                    >
                                       <span>
                                          <span className="text-1">RTL Demo</span>
                                          <span className="text-2">RTL Demo</span>
                                       </span>
                                    </a>
                                 )}
                              </div>
                           </div>
                           <div className="tp-demo-content-wrap text-center">
                              <div className="tp-demo-content">
                                 <h4 className="tp-demo-title">
                                    <a
                                       href={demo.linkLight || "#"}
                                       target="_blank"
                                    >
                                       {demo.title}
                                    </a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
