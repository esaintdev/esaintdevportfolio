"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Skill {
    id: string;
    name: string;
    proficiency: number;
    category?: string;
}

export default function SkillsAdminPage() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const res = await fetch("/api/skills");
            if (res.ok) {
                const data = await res.json();
                setSkills(data || []);
            }
        } catch (error) {
            console.error("Failed to fetch skills", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        const formData = new FormData(e.currentTarget);
        const newSkill = {
            name: formData.get("name"),
            proficiency: parseInt(formData.get("proficiency") as string),
            category: formData.get("category"),
        };

        try {
            const res = await fetch("/api/skills", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newSkill),
            });

            if (res.ok) {
                fetchSkills();
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Failed to save skill");
            }
        } catch (error) {
            console.error("Error saving skill", error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-4">
                    <h3>Manage Skills</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Add New Skill</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Skill Name</label>
                                    <input type="text" name="name" className="form-control" required placeholder="e.g. React.js" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Proficiency (0-100)</label>
                                    <input type="number" name="proficiency" className="form-control" required min="0" max="100" placeholder="85" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category (Optional)</label>
                                    <input type="text" name="category" className="form-control" placeholder="e.g. Frontend" />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSaving}>
                                    {isSaving ? "Saving..." : "Add Skill"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Existing Skills</h5>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="list-group">
                                    {skills.map((skill) => (
                                        <div key={skill.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="mb-1">{skill.name}</h5>
                                                <small className="text-muted">{skill.category}</small>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">{skill.proficiency}%</span>
                                        </div>
                                    ))}
                                    {skills.length === 0 && <p className="text-muted">No skills found.</p>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
