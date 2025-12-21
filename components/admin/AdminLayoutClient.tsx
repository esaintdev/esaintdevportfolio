"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-[#010103] overflow-hidden">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            <div
                className="flex flex-col flex-1 overflow-hidden"
                style={{
                    marginLeft: isSidebarCollapsed ? '80px' : '280px',
                    transition: 'margin-left 0.3s ease',
                    width: `calc(100% - ${isSidebarCollapsed ? '80px' : '280px'})`
                }}
            >
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#010103] p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
