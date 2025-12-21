"use client";

import { useEffect, useState } from "react";
import ConfirmationModal from "@/components/admin/ConfirmationModal";

interface Portfolio {
    id: number;
    title: string;
    image: string;
    link_light?: string;
    link_dark?: string;
    link_rtl?: string;
    isNew: boolean;
    category?: string;
}

export default function AdminPage() {
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingPortfolio, setEditingPortfolio] = useState<Portfolio | null>(null);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean;
        type: 'single' | 'bulk' | null;
        id?: number;
    }>({
        isOpen: false,
        type: null,
    });
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try {
            const res = await fetch("/api/portfolios");
            if (res.ok) {
                const data = await res.json();
                setPortfolios(data);
            }
        } catch (error) {
            console.error("Failed to fetch portfolios", error);
        } finally {
            setIsLoading(false);
        }
    };

    const requestDelete = (id: number) => {
        setConfirmModal({
            isOpen: true,
            type: 'single',
            id,
        });
    };

    const requestBulkDelete = () => {
        setConfirmModal({
            isOpen: true,
            type: 'bulk',
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmModal.type) return;

        setIsDeleting(true);
        try {
            if (confirmModal.type === 'single' && confirmModal.id) {
                const res = await fetch(`/api/portfolios/${confirmModal.id}`, { method: "DELETE" });
                if (res.ok) {
                    setPortfolios(portfolios.filter((p) => p.id !== confirmModal.id));
                    if (selectedIds.includes(confirmModal.id)) {
                        setSelectedIds(selectedIds.filter(id => id !== confirmModal.id));
                    }
                }
            } else if (confirmModal.type === 'bulk') {
                await Promise.all(selectedIds.map(id => fetch(`/api/portfolios/${id}`, { method: "DELETE" })));
                setPortfolios(portfolios.filter(p => !selectedIds.includes(p.id)));
                setSelectedIds([]);
            }
        } catch (error) {
            console.error("Delete failed", error);
            alert("Delete operation failed.");
        } finally {
            setIsDeleting(false);
            setConfirmModal({ isOpen: false, type: null });
        }
    };

    const handleSave = async (formData: FormData) => {
        const method = editingPortfolio ? "PUT" : "POST";
        const url = editingPortfolio ? `/api/portfolios/${editingPortfolio.id}` : "/api/portfolios";

        try {
            const res = await fetch(url, {
                method,
                body: formData,
            });

            if (res.ok) {
                fetchPortfolios();
                setEditingPortfolio(null);
                if (!editingPortfolio) {
                    const form = document.querySelector('form') as HTMLFormElement;
                    if (form) form.reset();
                }
            } else {
                const errorData = await res.json();
                console.error("Save failed:", errorData);
                alert("Failed to save portfolio item. Check console for details.");
            }
        } catch (error) {
            console.error("Failed to save portfolio", error);
        }
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === portfolios.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(portfolios.map(p => p.id));
        }
    };

    const toggleSelect = (id: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(sid => sid !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-8">
            <style>{`
                .tp-contact-input input::placeholder {
                    color: #ffffff !important;
                    opacity: 0.8;
                }
                .file-upload-wrapper input[type="file"]::file-selector-button {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 8px 16px;
                    border-radius: 20px;
                    margin-right: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .file-upload-wrapper input[type="file"]::file-selector-button:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
                .checkbox-custom {
                    accent-color: #FFD700;
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                }
            `}</style>

            <div className="tp-section-title-wrapper mb-50 flex justify-between items-center">
                <h3 className="tp-section-title text-white">Portfolio Management</h3>
                {selectedIds.length > 0 && (
                    <button
                        onClick={requestBulkDelete}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
                        style={{ background: '#ff4d4f', border: 'none' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        Delete Selected ({selectedIds.length})
                    </button>
                )}
            </div>

            <div className="" style={{
                padding: '20px',
                marginBottom: '50px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h2 className="text-xl font-semibold mb-8 text-white border-b border-white/10 pb-4">
                    {editingPortfolio ? "Edit Portfolio" : "Add New Portfolio"}
                </h2>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        if (editingPortfolio) {
                            formData.append('image', editingPortfolio.image);
                        }
                        await handleSave(formData);
                    }}
                    className="grid grid-cols-1 gap-6"
                >
                    <div>
                        <input
                            name="title"
                            type="text"
                            placeholder="Project Title"
                            defaultValue={editingPortfolio?.title}
                            required
                            className="tp-contact-input"
                            style={{
                                width: '100%',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '30px',
                                padding: '0 25px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="file-upload-wrapper">
                        <input
                            name="imageFile"
                            type="file"
                            accept="image/*"
                            className="tp-contact-input"
                            style={{
                                width: '100%',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '30px',
                                padding: '12px 25px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        {editingPortfolio?.image && (
                            <p className="text-xs text-gray-400 mt-1 pl-4">Current: {editingPortfolio.image}</p>
                        )}
                    </div>

                    <div>
                        <input
                            name="link"
                            type="text"
                            placeholder="Project Link (URL)"
                            defaultValue={editingPortfolio?.link_light || ""}
                            className="tp-contact-input"
                            style={{
                                width: '100%',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '30px',
                                padding: '0 25px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="flex justify-start gap-4 mt-4">
                        {editingPortfolio && (
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingPortfolio(null);
                                    const form = document.querySelector('form') as HTMLFormElement;
                                    if (form) form.reset();
                                }}
                                className="px-8 h-[50px] rounded-[30px] border border-white/20 text-white hover:bg-white/10 transition-colors font-semibold text-[15px]"
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            type="submit"
                            className="tp-btn-yellow"
                            style={{ padding: '0 40px', height: '50px', borderRadius: '30px', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {editingPortfolio ? "Update Portfolio" : "Create Portfolio"}
                        </button>
                    </div>
                </form>
            </div>

            <div style={{
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
            }}>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-5 w-[50px]">
                                <input
                                    type="checkbox"
                                    className="checkbox-custom"
                                    checked={portfolios.length > 0 && selectedIds.length === portfolios.length}
                                    onChange={toggleSelectAll}
                                />
                            </th>
                            <th className="p-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Image</th>
                            <th className="p-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Title</th>
                            <th className="p-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Category</th>
                            <th className="p-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Status</th>
                            <th className="p-5 text-gray-400 font-medium text-sm uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {portfolios.map((portfolio) => (
                            <tr key={portfolio.id} className={`hover:bg-white/5 transition-colors text-gray-300 ${selectedIds.includes(portfolio.id) ? 'bg-white/10' : ''}`}>
                                <td className="p-5">
                                    <input
                                        type="checkbox"
                                        className="checkbox-custom"
                                        checked={selectedIds.includes(portfolio.id)}
                                        onChange={() => toggleSelect(portfolio.id)}
                                    />
                                </td>
                                <td className="p-5">
                                    {(() => {
                                        const imgSrc = portfolio.image.startsWith('http')
                                            ? portfolio.image
                                            : portfolio.image.startsWith('/')
                                                ? portfolio.image
                                                : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${portfolio.image}`;
                                        return (
                                            <img
                                                src={imgSrc}
                                                alt={portfolio.title}
                                                className="w-16 h-10 object-cover rounded-md border border-white/10"
                                            />
                                        );
                                    })()}
                                </td>
                                <td className="p-5 font-medium text-white">{portfolio.title}</td>
                                <td className="p-5">{portfolio.category}</td>
                                <td className="p-5">
                                    {portfolio.isNew && (
                                        <span className="bg-[#FFD700]/10 text-[#FFD700] text-xs px-3 py-1 rounded-full border border-[#FFD700]/20">
                                            New
                                        </span>
                                    )}
                                </td>
                                <td className="p-5 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => {
                                                setEditingPortfolio(portfolio);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="hover:bg-white/10 rounded-full p-2 transition-colors"
                                            title="Edit"
                                            style={{ color: '#ffffff5c' }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => requestDelete(portfolio.id)}
                                            className="hover:bg-white/10 rounded-full p-2 transition-colors"
                                            title="Delete"
                                            style={{ color: '#c0e81b' }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {portfolios.length === 0 && !isLoading && (
                    <div className="p-8 text-center text-gray-500">
                        No portfolio items found. Create one above.
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal({ ...confirmModal, isOpen: false })}
                onConfirm={handleConfirmDelete}
                isLoading={isDeleting}
                title={confirmModal.type === 'bulk' ? "Delete Multiple Items?" : "Delete Portfolio Item?"}
                message={confirmModal.type === 'bulk'
                    ? `Are you sure you want to delete these ${selectedIds.length} items? This action cannot be undone.`
                    : "Are you sure you want to delete this item? This action cannot be undone."
                }
            />
        </div>
    );
}
