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
    const [editingExperience, setEditingExperience] = useState<Experience | null>(null);

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

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this experience?")) return;

        try {
            const res = await fetch(`/api/experience/${id}`, { method: "DELETE" });
            if (res.ok) {
                setExperiences(experiences.filter(e => e.id !== id));
            } else {
                alert("Failed to delete experience");
            }
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        const formData = new FormData(e.currentTarget);
        const expData = {
            role: formData.get("role"),
            company: formData.get("company"),
            duration: formData.get("duration"),
            description: formData.get("description"),
        };

        const url = editingExperience ? `/api/experience/${editingExperience.id}` : "/api/experience";
        const method = editingExperience ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(expData),
            });

            if (res.ok) {
                fetchExperiences();
                (e.target as HTMLFormElement).reset();
                setEditingExperience(null);
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
        <div className="max-w-6xl mx-auto py-8 text-white">
            <div className="tp-section-title-wrapper mb-50">
                <h3 className="tp-section-title text-white">Manage Experience</h3>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div style={{
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '30px'
                    }}>
                        <h5 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">
                            {editingExperience ? "Edit Experience" : "Add New Experience"}
                        </h5>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    required
                                    defaultValue={editingExperience?.role}
                                    placeholder="e.g. Senior Developer"
                                    style={{
                                        width: '100%',
                                        height: '50px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '25px',
                                        padding: '0 20px',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    defaultValue={editingExperience?.company}
                                    placeholder="e.g. Google"
                                    style={{
                                        width: '100%',
                                        height: '50px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '25px',
                                        padding: '0 20px',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    required
                                    defaultValue={editingExperience?.duration}
                                    placeholder="e.g. 2020 - Present"
                                    style={{
                                        width: '100%',
                                        height: '50px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '25px',
                                        padding: '0 20px',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Description</label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    defaultValue={editingExperience?.description}
                                    placeholder="Brief description..."
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px',
                                        padding: '15px 20px',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'none'
                                    }}
                                ></textarea>
                            </div>
                            <div className="flex gap-2 mt-2">
                                {editingExperience && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingExperience(null);
                                            const form = document.querySelector('form') as HTMLFormElement;
                                            if (form) form.reset();
                                        }}
                                        className="btn btn-secondary"
                                        style={{
                                            height: '50px',
                                            borderRadius: '25px',
                                            padding: '0 20px',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            border: 'none'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="tp-btn-yellow flex-grow"
                                    style={{
                                        height: '50px',
                                        borderRadius: '25px',
                                        border: 'none',
                                        fontWeight: 600,
                                        cursor: isSaving ? 'not-allowed' : 'pointer',
                                        opacity: isSaving ? 0.7 : 1
                                    }}
                                >
                                    {isSaving ? "Saving..." : (editingExperience ? "Update Experience" : "Add Experience")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div style={{
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '30px',
                        minHeight: '200px'
                    }}>
                        <h5 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Existing Experiences</h5>
                        {isLoading ? (
                            <p className="text-gray-400">Loading...</p>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {experiences.map((exp) => (
                                    <div key={exp.id} style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '20px',
                                        padding: '20px',
                                        position: 'relative'
                                    }}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="text-lg font-medium text-[#fff]">{exp.role}</h5>
                                            <div className="flex items-center gap-3">
                                                <span style={{ color: '#c0e81b', fontSize: '14px' }}>{exp.duration}</span>
                                                <div className="flex gap-2 ml-2">
                                                    <button
                                                        onClick={() => setEditingExperience(exp)}
                                                        className="p-1 hover:text-white text-gray-400 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(exp.id)}
                                                        className="p-1 hover:text-red-500 text-gray-400 transition-colors"
                                                        title="Delete"
                                                    >
                                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">{exp.company}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed opacity-80">{exp.description}</p>
                                    </div>
                                ))}
                                {experiences.length === 0 && <p className="text-gray-500 text-center py-8">No experience entries yet.</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
