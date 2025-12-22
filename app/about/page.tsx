import React from "react";
import PublicHeader from "@/components/PublicHeader";
import ResumeSection from "@/components/ResumeSection";
import AboutPageEffects from "@/components/AboutPageEffects";
import { createClient } from "@/utils/supabase/server";

async function getResumeData() {
    const supabase = await createClient();
    const { data: experiences } = await supabase.from('experiences').select('*').order('created_at', { ascending: false });
    const { data: skills } = await supabase.from('skills').select('*').order('proficiency', { ascending: false });
    const { data: settings } = await supabase.from('site_settings').select('*').eq('id', 1).single();

    return {
        experiences: experiences || [],
        skills: skills || [],
        settings: settings || {}
    };
}

export default async function AboutPage() {
    const { experiences, skills, settings } = await getResumeData();

    return (
        <>
            <AboutPageEffects />
            <PublicHeader settings={settings} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* Hero Section */}
                        <div className="tp-template-area tp-template-content-wrap tp-template-bg p-relative fix" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#010103' }}>
                            <div className="tp-template-inner" style={{ width: '100%' }}>
                                <img className="images w-100" src="/images/bg_3.png" alt="" style={{ position: 'absolute', top: 0, left: 0, height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.2 }} />
                                <div className="tp-template-content" style={{ marginTop: '50px', position: 'relative', zIndex: 1 }}>
                                    <div className="tp-template-header">
                                        <div className="tp-template-section-title-wrapper text-center">
                                            <div className="tp-template-subtitle-wrapper">
                                                <span className="tp-template-subtitle d-inline-block mb-20">About Us</span>
                                            </div>
                                            <div className="tp-template-title-wrapper mb-35">
                                                <h2 className="tp-section-title tp-section-title-white">
                                                    Building Digital <br />
                                                    Excellence
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-hero-noise">
                                <img src="/images/noise.png" alt="" style={{ opacity: 0.05 }} />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="tp-about-area pt-120 pb-0" style={{ backgroundColor: '#010103', color: '#fff' }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10">
                                        <div className="tp-about-content-box text-center">
                                            <div className="d-flex align-items-center justify-content-center mb-40">
                                                <div className="tp-about-img">
                                                    <img src="/images/portfolio.png" alt="Esaint Mjay" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.1)' }} />
                                                </div>
                                                <div className="tp-about-info text-start ms-4">
                                                    <h3 className="tp-section-title-sm mb-0 text-white">{settings?.profile_name || "Esaint Mjay"}</h3>
                                                </div>
                                            </div>
                                            <h3 className="tp-section-title-sm mb-40 text-white">Who I Am</h3>
                                            <p className="mb-30" style={{ fontSize: '18px', lineHeight: '1.6', color: '#b0b0b0' }}>
                                                {settings?.profile_bio || "Esaint Mjay is a digital developer dedicated to crafting exceptional web experiences, Mobile Apps, and Software Development."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-120">
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <h4 className="mb-20 text-white">Innovation</h4>
                                            <p style={{ color: '#b0b0b0' }}>Pushing boundaries with the latest technologies to keep you ahead.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <h4 className="mb-20 text-white">Quality</h4>
                                            <p style={{ color: '#b0b0b0' }}>Uncompromising attention to detail in every line of code and pixel.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-40">
                                        <div className="tp-feature-item p-relative z-index-1 text-center" style={{ padding: '40px 30px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                            <h4 className="mb-20 text-white">Support</h4>
                                            <p style={{ color: '#b0b0b0' }}>Dedicated support ensuring your digital assets perform at their best.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resume Section */}
                        <ResumeSection experiences={experiences} skills={skills} />

                    </main>
                </div>
            </div>
        </>
    );
}
