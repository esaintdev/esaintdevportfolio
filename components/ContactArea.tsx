"use client";
import React from 'react';
import SocialConnection from './SocialConnection';

const ContactArea = () => {
    return (
        <div className="tp-contact-area pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="tp-contact-wrapper">
                            <div className="tp-section-title-wrapper mb-50 text-center">
                                <h3 className="tp-section-title">Get in Touch</h3>
                            </div>
                            <div className="tp-contact-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tp-contact-input mb-30">
                                                <input type="text" placeholder="Your Name" style={{ width: '100%', height: '60px', borderRadius: '30px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0 30px', color: '#fff' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tp-contact-input mb-30">
                                                <input type="email" placeholder="Your Email" style={{ width: '100%', height: '60px', borderRadius: '30px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0 30px', color: '#fff' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="tp-contact-input mb-30">
                                                <textarea placeholder="Your Message" style={{ width: '100%', height: '150px', borderRadius: '30px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '20px 30px', color: '#fff', resize: 'none' }}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="tp-contact-btn text-center">
                                                <button type="submit" className="tp-btn-yellow" style={{ cursor: 'pointer' }}>Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-80">
                    <SocialConnection />
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
