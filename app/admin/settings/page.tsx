"use client";

import { useEffect, useState } from "react";
import ConfirmationModal from "@/components/admin/ConfirmationModal";

interface SiteSettings {
    profile_name?: string;
    profile_role?: string;
    profile_bio?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
    social_github?: string;
    social_linkedin?: string;
    social_dribbble?: string;
    social_behance?: string;
    social_facebook?: string;
    social_instagram?: string;
    cv_url?: string;
}

export default function SettingsPage() {
    const [settings, setSettings] = useState<SiteSettings>({});
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    const [alertModal, setAlertModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        isSuccess: false,
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/settings");
            if (res.ok) {
                const data = await res.json();
                if (data && !data.error) {
                    setSettings(data);
                }
            }
        } catch (error) {
            console.error("Failed to fetch settings", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSaving(true);
        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setAlertModal({
                    isOpen: true,
                    title: "Success",
                    message: "Settings saved successfully!",
                    isSuccess: true
                });
                fetchSettings();
            } else {
                setAlertModal({
                    isOpen: true,
                    title: "Error",
                    message: "Failed to save settings.",
                    isSuccess: false
                });
            }
        } catch (error) {
            console.error("Error saving settings", error);
            setAlertModal({
                isOpen: true,
                title: "Error",
                message: "An unexpected error occurred while saving settings.",
                isSuccess: false
            });
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return <div className="text-white p-10">Loading settings...</div>;
    }

    const inputStyle = {
        width: '100%',
        height: '50px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '0 20px',
        color: 'white',
        outline: 'none'
    };

    const labelStyle = {
        display: 'block',
        color: '#a0a0a0',
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: 500
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '30px',
        padding: '30px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        marginBottom: '30px'
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h3 className="tp-section-title text-white mb-8">General Settings</h3>

            <form onSubmit={handleSave}>
                <div style={sectionStyle}>
                    <h4 className="text-lg text-white mb-6 border-b border-white/10 pb-2">Profile Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label style={labelStyle}>Full Name</label>
                            <input name="profile_name" type="text" defaultValue={settings.profile_name} style={inputStyle} placeholder="e.g. Esaint" />
                        </div>
                        <div>
                            <label style={labelStyle}>Role / Title</label>
                            <input name="profile_role" type="text" defaultValue={settings.profile_role} style={inputStyle} placeholder="e.g. Fullstack Developer" />
                        </div>
                        <div className="md:col-span-2">
                            <label style={labelStyle}>Short Bio</label>
                            <textarea
                                name="profile_bio"
                                defaultValue={settings.profile_bio}
                                style={{ ...inputStyle, height: '100px', paddingTop: '15px', resize: 'none' }}
                                placeholder="Brief intro..."
                            />
                        </div>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h4 className="text-lg text-white mb-6 border-b border-white/10 pb-2">Contact Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label style={labelStyle}>Email Address</label>
                            <input name="email" type="email" defaultValue={settings.email} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Phone Number</label>
                            <input name="phone" type="text" defaultValue={settings.phone} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>WhatsApp Number</label>
                            <input name="whatsapp" type="text" defaultValue={settings.whatsapp} style={inputStyle} placeholder="+234..." />
                        </div>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h4 className="text-lg text-white mb-6 border-b border-white/10 pb-2">Social Links</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label style={labelStyle}>GitHub URL</label>
                            <input name="social_github" type="text" defaultValue={settings.social_github} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>LinkedIn URL</label>
                            <input name="social_linkedin" type="text" defaultValue={settings.social_linkedin} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Dribbble URL</label>
                            <input name="social_dribbble" type="text" defaultValue={settings.social_dribbble} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Behance URL</label>
                            <input name="social_behance" type="text" defaultValue={settings.social_behance} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Facebook URL</label>
                            <input name="social_facebook" type="text" defaultValue={settings.social_facebook} style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Instagram URL</label>
                            <input name="social_instagram" type="text" defaultValue={settings.social_instagram} style={inputStyle} />
                        </div>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h4 className="text-lg text-white mb-6 border-b border-white/10 pb-2">Downloads</h4>
                    <div>
                        <label style={labelStyle}>Upload New CV (PDF)</label>
                        <div className="flex items-center gap-4">
                            <input type="file" name="cvFile" accept=".pdf" className="text-white" />
                            {settings.cv_url && (
                                <a href={settings.cv_url} target="_blank" className="text-[#FFD700] text-sm hover:underline">
                                    View Current CV
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="tp-btn-yellow"
                        style={{
                            padding: '0 40px',
                            height: '50px',
                            borderRadius: '30px',
                            fontSize: '15px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: isSaving ? 0.7 : 1,
                            cursor: isSaving ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </form>

            <ConfirmationModal
                isOpen={alertModal.isOpen}
                onClose={() => setAlertModal({ ...alertModal, isOpen: false })}
                title={alertModal.title}
                message={alertModal.message}
                isAlert={true}
                confirmText="OK"
                onConfirm={() => setAlertModal({ ...alertModal, isOpen: false })}
            />
        </div>
    );
}
