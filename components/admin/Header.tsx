"use client";

import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/login");
        router.refresh();
    };

    return (
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
            <div className="flex items-center">
                {/* Breadcrumb or Title placeholder */}
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-red-600 hover:text-red-800"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
