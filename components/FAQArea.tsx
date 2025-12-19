"use client";
import React, { useState } from 'react';

const faqData = [
    {
        id: "one",
        question: "What services do you offer?",
        answer: "I provide comprehensive web and mobile development, automation scripts, and custom software solutions designed to meet your business needs."
    },
    {
        id: "two",
        question: "Do you work with startups?",
        answer: "Absolutely! I specialize in helping startups turn ideas into MVPs and scalable products."
    },
    {
        id: "three",
        question: "What is your tech stack?",
        answer: "I work with Next.js, React, Node.js, Python, Supabase, and cloud technologies."
    },
    {
        id: "four",
        question: "Do you offer maintenance?",
        answer: "Yes, I offer ongoing maintenance and support packages to ensure your software runs smoothly."
    },
    {
        id: "five",
        question: "How do we communicate?",
        answer: "We use Slack, Email, or Video calls for regular updates and sprint planning."
    },
    {
        id: "six",
        question: "Can you help with UI/UX?",
        answer: "Yes, I collaborate with top designers to deliver stunning and functional interfaces."
    },
    {
        id: "seven",
        question: "How do I hire you?",
        answer: "Simply click the \"Contact Me\" button or send an email to discuss your project."
    }
];

// Custom Styles to bypass Bootstrap conflicts
const itemStyle = {
    marginBottom: '15px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.02)',
    overflow: 'hidden'
};

const triggerStyle = {
    width: '100%',
    padding: '20px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    textAlign: 'left' as const,
    transition: 'background 0.3s ease'
};

const contentStyle = {
    padding: '0 25px 25px 25px',
    color: '#b0b0b0',
    lineHeight: '1.6',
    fontSize: '16px'
};

export default function FAQArea() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="tp-faq-area tp-sm-pt pt-130 tp-bg-black-2 section-meinus">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="tp-faq-title-wrap mb-55">
                            <span className="tp-responsive-layout-subtitle mb-15 tp-fade-anim" data-delay=".3">Common Questions</span>
                            <h2 className="tp-section-title tp-section-title-60 text-lts tp-section-title-white tp-fade-anim" data-delay=".5">Frequently Asked<br /> Questions.</h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="custom-faq-wrapper">
                            {faqData.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <div style={itemStyle}>
                                        <button
                                            onClick={() => toggle(index)}
                                            style={{
                                                ...triggerStyle,
                                                background: activeIndex === index ? 'rgba(255,255,255,0.05)' : 'transparent'
                                            }}
                                        >
                                            {item.question}
                                            <span style={{
                                                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 12L0 6H12L6 12Z" fill="white" />
                                                </svg>
                                            </span>
                                        </button>

                                        {activeIndex === index && (
                                            <div style={contentStyle}>
                                                <p style={{ margin: 0, color: '#b0b0b0' }}>{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                    {index === 4 && <div style={{ height: '30px' }}></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
