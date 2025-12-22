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
}

interface ResumeSectionProps {
    experiences: Experience[];
    skills: Skill[];
}

export default function ResumeSection({ experiences, skills }: ResumeSectionProps) {
    return (
        <div className="tp-resume-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrapper text-center mb-60">
                            <h3 className="tp-section-title">My Resume</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Experience Column */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="tp-resume-wrapper mb-30">
                            <div className="tp-resume-title-wrapper mb-40">
                                <h4 className="tp-resume-title">Experience</h4>
                            </div>
                            <div className="tp-resume-item-wrapper">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="tp-resume-item mb-30" style={{ borderLeft: '2px solid #3A96E8', paddingLeft: '20px' }}>
                                        <div className="tp-resume-date mb-10">
                                            <span style={{ color: '#3A96E8', fontWeight: 600 }}>{exp.duration}</span>
                                        </div>
                                        <div className="tp-resume-content">
                                            <h5 className="tp-resume-subtitle">{exp.role}</h5>
                                            <span className="tp-resume-meta mb-10 d-block" style={{ color: '#888' }}>{exp.company}</span>
                                            <p>{exp.description}</p>
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
                                <h4 className="tp-resume-title">Skills</h4>
                            </div>
                            <div className="tp-skill-wrapper">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="tp-skill-item mb-30">
                                        <div className="tp-skill-content d-flex justify-content-between align-items-center mb-10">
                                            <h5 className="tp-skill-title mb-0">{skill.name}</h5>
                                            <span className="tp-skill-percent">{skill.proficiency}%</span>
                                        </div>
                                        <div className="tp-skill-bar" style={{ height: '6px', background: '#f0f0f0', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div
                                                className="tp-skill-progress"
                                                style={{ width: `${skill.proficiency}%`, height: '100%', background: '#3A96E8' }}
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
