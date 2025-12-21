"use client";

import React from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    isLoading?: boolean;
}

export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    isLoading = false,
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)",
            }}
        >
            <div
                className="tp-fade-anim"
                style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    padding: "30px",
                    maxWidth: "400px",
                    width: "90%",
                    textAlign: "center",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
            >
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 77, 79, 0.1)",
                        color: "#ff4d4f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>
                <h3 style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
                    {title}
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "14px", marginBottom: "30px", lineHeight: "1.5" }}>
                    {message}
                </p>
                <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        style={{
                            padding: "10px 25px",
                            borderRadius: "30px",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "white",
                            cursor: isLoading ? "not-allowed" : "pointer",
                            fontSize: "14px",
                            fontWeight: 600,
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        style={{
                            padding: "10px 25px",
                            borderRadius: "30px",
                            background: "#ff4d4f",
                            border: "none",
                            color: "white",
                            cursor: isLoading ? "not-allowed" : "pointer",
                            fontSize: "14px",
                            fontWeight: 600,
                            boxShadow: "0 4px 15px rgba(255, 77, 79, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        {isLoading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Deleting...
                            </>
                        ) : (
                            "Yes, Delete"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
