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
                <button
                    onClick={handleLogout}
                    className="flex items-center bg-[#c0e81b] hover:bg-[#b0d618] text-black text-sm font-bold py-2 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-[0_0_15px_rgba(192,232,27,0.1)] hover:shadow-[0_0_20px_rgba(192,232,27,0.3)]"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Logout
                </button>
            </div>
            <div className="flex items-center space-x-4">

            </div>
        </header>
    );
}
