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
        <header className="flex items-center justify-between h-20 px-6 bg-[#000000] border-b border-white/10">
            <div className="flex items-center">
                {/* Breadcrumb or Title placeholder */}
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
