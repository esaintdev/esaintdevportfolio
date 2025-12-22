"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
}

export default function ExperienceAdminPage() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        try {
            const res = await fetch("/api/experience");
            if (res.ok) {
                const data = await res.json();
                setExperiences(data || []);
            }
        } catch (error) {
            console.error("Failed to fetch experiences", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        const formData = new FormData(e.currentTarget);
        const newExp = {
            role: formData.get("role"),
            company: formData.get("company"),
            duration: formData.get("duration"),
            description: formData.get("description"),
        };

        try {
            const res = await fetch("/api/experience", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newExp),
            });

            if (res.ok) {
                fetchExperiences();
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Failed to save experience");
            }
        } catch (error) {
            console.error("Error saving experience", error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-4">
                    <h3>Manage Experience</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Add New Experience</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <input type="text" name="role" className="form-control" required placeholder="e.g. Senior Developer" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Company</label>
                                    <input type="text" name="company" className="form-control" required placeholder="e.g. Google" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Duration</label>
                                    <input type="text" name="duration" className="form-control" required placeholder="e.g. 2020 - Present" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea name="description" className="form-control" rows={3} placeholder="Brief description of responsibilities..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSaving}>
                                    {isSaving ? "Saving..." : "Add Experience"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Existing Experiences</h5>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="list-group">
                                    {experiences.map((exp) => (
                                        <div key={exp.id} className="list-group-item">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{exp.role}</h5>
                                                <small>{exp.duration}</small>
                                            </div>
                                            <p className="mb-1">{exp.company}</p>
                                            <small className="text-muted">{exp.description}</small>
                                        </div>
                                    ))}
                                    {experiences.length === 0 && <p className="text-muted">No experience entries yet.</p>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
