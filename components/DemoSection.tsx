"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Portfolio {
   id: number;
   title: string;
   image: string;
   link_light?: string;
   link_dark?: string;
   link_rtl?: string;
   isNew: boolean;
   category?: string;
}

const getValidUrl = (url?: string) => {
   if (!url) return "#";
   if (url.startsWith("http://") || url.startsWith("https://")) return url;
   return `https://${url}`;
};

interface DemoSectionProps {
   limit?: number;
   showViewMore?: boolean;
   hideTitle?: boolean;
}

export default function DemoSection({ limit, showViewMore, hideTitle }: DemoSectionProps) {
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

   const displayedPortfolios = limit ? portfolios.slice(0, limit) : portfolios;

   return (
      <div id="portfolio" className={`tp-demo-area tp-sm-pb tp-demo-spacing ${hideTitle ? 'pt-100' : 'pt-200'} pb-120`}>
         <div id="demo-2" className="container container-1830">
            {!hideTitle && (
               <div className="row justify-content-center">
                  <div className="col-xl-8">
                     <div className="tp-demo-title-box mb-60 p-relative text-center">
                        <div className="tp-demo-shape-box">
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
            )}

            <div className="tp-demo-item-box">
               <div className="row gx-40 row-cols-lg-3 row-cols-md-2 row-cols-1">
                  {displayedPortfolios.map((portfolio) => (
                     <div className="col" key={portfolio.id}>
                        <div className="tp-demo-item anim-zoomin-wrap mb-40">
                           {portfolio.isNew && <span className="tp-demo-new">NEW</span>}
                           <div className="tp-demo-thumb anim-zoomin p-relative">
                              <a href={getValidUrl(portfolio.link_light)} target="_blank">
                                 <Image
                                    src={
                                       portfolio.image.startsWith('http')
                                          ? portfolio.image
                                          : portfolio.image.startsWith('/')
                                             ? portfolio.image
                                             : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${portfolio.image}`
                                    }
                                    alt={portfolio.title}
                                    width={600}
                                    height={400}
                                    className="object-cover"
                                    style={{ width: '100%', height: 'auto' }}
                                 />
                              </a>
                              {/* Optional Figma badge if needed, kept from original static if desired, or conditional */}

                              <div className="tp-demo-btn-wrap">
                                 {/* Only showing simple 'Visit' button for portfolio context */}
                                 {portfolio.link_light && (
                                    <a
                                       className="tp-demo-btn"
                                       target="_blank"
                                       href={getValidUrl(portfolio.link_light)}
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
                                    {/* <a
                                       href={getValidUrl(portfolio.link_light)}
                                       target="_blank"
                                    > */}
                                    {portfolio.title}

                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {showViewMore && (
                  <div className="row justify-content-center mt-50">
                     <div className="col-auto">
                        <a href="/portfolio" className="tp-btn-yellow" style={{ borderRadius: '50px', padding: '15px 40px' }}>
                           View More Portfolio
                        </a>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
