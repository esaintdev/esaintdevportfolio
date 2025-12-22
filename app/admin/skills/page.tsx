"use client";

import React, { useState, useEffect } from "react";
import ConfirmationModal from "@/components/admin/ConfirmationModal";

interface Skill {
    id: string;
    name: string;
    proficiency: number;
    category?: string;
    icon_url?: string;
}

export default function SkillsAdminPage() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

    // Modal State
    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        isAlert: false,
        onConfirm: () => { },
        isLoading: false
    });

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

    const handleDeleteClick = (id: string) => {
        setModal({
            isOpen: true,
            title: "Delete Skill",
            message: "Are you sure you want to delete this skill? This action cannot be undone.",
            isAlert: false,
            isLoading: false,
            onConfirm: () => confirmDelete(id)
        });
    };

    const confirmDelete = async (id: string) => {
        setModal(prev => ({ ...prev, isLoading: true }));
        try {
            const res = await fetch(`/api/skills/${id}`, { method: "DELETE" });
            if (res.ok) {
                setSkills(skills.filter(s => s.id !== id));
                closeModal();
            } else {
                showAlert("Error", "Failed to delete skill", true);
            }
        } catch (error) {
            console.error("Delete failed", error);
            showAlert("Error", "An unexpected error occurred", true);
        }
    };

    const showAlert = (title: string, message: string, isError = false) => {
        setModal({
            isOpen: true,
            title,
            message,
            isAlert: true,
            isLoading: false,
            onConfirm: () => closeModal()
        });
    };

    const closeModal = () => {
        setModal(prev => ({ ...prev, isOpen: false }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        const formData = new FormData(e.currentTarget);

        const url = editingSkill ? `/api/skills/${editingSkill.id}` : "/api/skills";
        const method = editingSkill ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method: method,
                body: formData,
            });

            if (res.ok) {
                fetchSkills();
                (e.target as HTMLFormElement).reset();
                setEditingSkill(null);
                showAlert("Success", "Skill saved successfully!");
            } else {
                showAlert("Error", "Failed to save skill", true);
            }
        } catch (error) {
            console.error("Error saving skill", error);
            showAlert("Error", "An unexpected error occurred", true);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-8 text-white">
            <div className="tp-section-title-wrapper mb-50">
                <h3 className="tp-section-title text-white">Manage Skills</h3>
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
                            {editingSkill ? "Edit Skill" : "Add New Skill"}
                        </h5>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Skill Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    defaultValue={editingSkill?.name}
                                    placeholder="e.g. React.js"
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
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Proficiency (0-100%)</label>
                                <input
                                    type="number"
                                    name="proficiency"
                                    required
                                    min="0"
                                    max="100"
                                    defaultValue={editingSkill?.proficiency}
                                    placeholder="85"
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
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Category (Optional)</label>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={editingSkill?.category}
                                    placeholder="e.g. Frontend"
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
                                <label className="block text-sm text-gray-400 mb-2 pl-4">Icon (Optional)</label>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '25px',
                                    padding: '10px 20px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <input
                                        type="file"
                                        name="icon"
                                        accept="image/*"
                                        className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c0e81b] file:text-black hover:file:bg-[#c0e81b]"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                {editingSkill?.icon_url && (
                                    <div className="mt-2 pl-4 flex items-center gap-2">
                                        <span className="text-xs text-gray-500">Current Icon:</span>
                                        <img src={editingSkill.icon_url} alt="current icon" className="w-6 h-6 object-contain" />
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-2 mt-2">
                                {editingSkill && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingSkill(null);
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
                                    {isSaving ? "Saving..." : (editingSkill ? "Update Skill" : "Add Skill")}
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
                        <h5 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Existing Skills</h5>
                        {isLoading ? (
                            <p className="text-gray-400">Loading...</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <div key={skill.id} style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '20px',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <button
                                                onClick={() => setEditingSkill(skill)}
                                                className="p-1 hover:text-white text-gray-400 transition-colors"
                                                title="Edit"
                                            >
                                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(skill.id)}
                                                className="p-1 hover:text-red-500 text-gray-400 transition-colors"
                                                title="Delete"
                                            >
                                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center mb-2 pr-12">
                                            <div className="flex items-center gap-3">
                                                {skill.icon_url && (
                                                    <img
                                                        src={skill.icon_url}
                                                        alt={skill.name}
                                                        style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                                                    />
                                                )}
                                                <h5 className="text-lg font-medium text-white m-0">{skill.name}</h5>
                                            </div>
                                            <span style={{
                                                color: '#c0e81b',
                                                fontSize: '12px',
                                                background: 'rgba(192, 232, 27, 0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '10px'
                                            }}>{skill.proficiency}%</span>
                                        </div>
                                        {skill.category && <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{skill.category}</p>}

                                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', marginTop: '5px' }}>
                                            <div style={{ width: `${skill.proficiency}%`, height: '100%', background: '#c0e81b' }}></div>
                                        </div>
                                    </div>
                                ))}
                                {skills.length === 0 && <p className="text-gray-500 text-center py-8 col-span-2">No skills found.</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ConfirmationModal
                isOpen={modal.isOpen}
                onClose={closeModal}
                onConfirm={modal.onConfirm}
                title={modal.title}
                message={modal.message}
                isLoading={modal.isLoading}
                isAlert={modal.isAlert}
            />
        </div>
    );
}
