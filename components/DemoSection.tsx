"use client";

import React, { useEffect, useState } from "react";

interface Portfolio {
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
   const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("/api/portfolios")
         .then((res) => res.json())
         .then((data) => {
            setPortfolios(data);
            setLoading(false);
         })
         .catch((err) => {
            console.error("Failed to fetch portfolios", err);
            setLoading(false);
         });
   }, []);

   if (loading) return <div className="text-center py-20 text-white">Loading Portfolios...</div>;

   return (
      <div id="portfolio" className="tp-demo-area tp-sm-pb tp-demo-spacing pt-200 pb-120">
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
                        {portfolios.length}+
                     </span>
                     <span className="tp-demo-subtitle mb-35 tp-fade-anim" data-delay=".5">
                        My Portfolio Collection
                     </span>
                     <h4 className="tp-section-title mb-30 tp-fade-anim" data-delay=".7">
                        Explore {portfolios.length}+ <br />
                        Completed <i>Projects</i>
                     </h4>
                     <p className="mb-30 tp-fade-anim">
                        Discover {portfolios.length}+ beautifully crafted projects. Fully responsive and
                        functional.
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
                  {portfolios.map((portfolio) => (
                     <div className="col" key={portfolio.id}>
                        <div className="tp-demo-item anim-zoomin-wrap mb-40">
                           {portfolio.isNew && <span className="tp-demo-new">NEW</span>}
                           <div className="tp-demo-thumb anim-zoomin p-relative">
                              <a href={portfolio.linkLight || "#"} target="_blank">
                                 <img
                                    src={
                                       portfolio.image.startsWith('http')
                                          ? portfolio.image
                                          : portfolio.image.startsWith('/')
                                             ? portfolio.image
                                             : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${portfolio.image}`
                                    }
                                    alt={portfolio.title}
                                 />
                              </a>
                              {/* Optional Figma badge if needed, kept from original static if desired, or conditional */}

                              <div className="tp-demo-btn-wrap">
                                 {/* Only showing simple 'Visit' button for portfolio context */}
                                 {portfolio.linkLight && (
                                    <a
                                       className="tp-demo-btn"
                                       target="_blank"
                                       href={portfolio.linkLight}
                                    >
                                       <span>
                                          <span className="text-1">View Project</span>
                                          <span className="text-2">View Project</span>
                                       </span>
                                    </a>
                                 )}
                              </div>
                           </div>
                           <div className="tp-demo-content-wrap text-center">
                              <div className="tp-demo-content">
                                 <h4 className="tp-demo-title">
                                    <a
                                       href={portfolio.linkLight || "#"}
                                       target="_blank"
                                    >
                                       {portfolio.title}
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
