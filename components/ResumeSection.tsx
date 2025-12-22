"use client";
import React from "react";

interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
}

interface Skill {
    id: string;
    name: string;
    proficiency: number;
    category?: string;
    icon_url?: string;
}

interface ResumeSectionProps {
    experiences: Experience[];
    skills: Skill[];
}

export default function ResumeSection({ experiences, skills }: ResumeSectionProps) {
    return (
        <div className="tp-resume-area pt-120 pb-120" style={{ backgroundColor: '#010103', color: '#fff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrapper text-center mb-60">
                            <h3 className="tp-section-title text-white">My Resume</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Experience Column */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="tp-resume-wrapper mb-30">
                            <div className="tp-resume-title-wrapper mb-40">
                                <h4 className="tp-resume-title text-white">Experience</h4>
                            </div>
                            <div className="tp-resume-item-wrapper">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="tp-resume-item mb-30" style={{ borderLeft: '2px solid #c0e81b', paddingLeft: '20px' }}>
                                        <div className="tp-resume-date mb-10">
                                            <span style={{ color: '#c0e81b', fontWeight: 600 }}>{exp.duration}</span>
                                        </div>
                                        <div className="tp-resume-content">
                                            <h5 className="tp-resume-subtitle text-white">{exp.role}</h5>
                                            <span className="tp-resume-meta mb-10 d-block" style={{ color: '#b0b0b0' }}>{exp.company}</span>
                                            <p style={{ color: '#999' }}>{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                                {experiences.length === 0 && (
                                    <p className="text-muted">No experience entries found. Add them in the admin panel.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="tp-resume-wrapper mb-30">
                            <div className="tp-resume-title-wrapper mb-40">
                                <h4 className="tp-resume-title text-white">Skills</h4>
                            </div>
                            <div className="tp-skill-wrapper">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="tp-skill-item mb-30">
                                        <div className="tp-skill-content d-flex justify-content-between align-items-center mb-10">
                                            <div className="flex items-center gap-2">
                                                {skill.icon_url && (
                                                    <img
                                                        src={skill.icon_url}
                                                        alt={skill.name}
                                                        style={{ width: '24px', height: '24px', objectFit: 'contain', marginRight: '10px' }}
                                                    />
                                                )}
                                                <h5 className="tp-skill-title mb-0 text-white">{skill.name}</h5>
                                            </div>
                                            <span className="tp-skill-percent" style={{ color: '#c0e81b' }}>{skill.proficiency}%</span>
                                        </div>
                                        <div className="tp-skill-bar" style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div
                                                className="tp-skill-progress"
                                                style={{ width: `${skill.proficiency}%`, height: '100%', background: '#c0e81b' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                                {skills.length === 0 && (
                                    <p className="text-muted">No skills found. Add them in the admin panel.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
