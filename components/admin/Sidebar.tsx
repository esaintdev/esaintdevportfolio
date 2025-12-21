"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
    const pathname = usePathname();

    const linkStyle = (path: string) => {
        const active = pathname === path;
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            padding: '15px 25px',
            fontSize: '14px',
            borderRadius: '15px',
            marginBottom: '10px',
            textDecoration: 'none',
            color: active ? '#c0e81b' : '#a0a0a0',
            backgroundColor: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            fontWeight: active ? '600' : '400',
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        };
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: isCollapsed ? '80px' : '280px',
            height: '100vh',
            backgroundColor: '#000000',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            position: 'fixed',
            left: 0,
            top: 0,
            transition: 'width 0.3s ease',
            zIndex: 50
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '30px'
            }}>
                {isCollapsed ? (
                    <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                        A<span style={{ color: '#c0e81b' }}>.</span>
                    </span>
                ) : (
                    <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                        ADMIN<span style={{ color: '#c0e81b' }}>.</span>
                    </span>
                )}
            </div>

            <nav style={{ flex: 1, padding: isCollapsed ? '0 10px' : '0 25px' }}>
                <Link href="/admin" style={linkStyle("/admin")}>
                    <svg style={{ marginRight: isCollapsed ? '0' : '15px' }} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {!isCollapsed && "Dashboard"}
                </Link>

                <Link href="/admin/portfolios" style={linkStyle("/admin/portfolios")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: isCollapsed ? '0' : '15px', color: '#c0e81b' }}>
                        <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    {!isCollapsed && "Portfolios"}
                </Link>

                <div style={{
                    marginTop: '40px',
                    padding: '0 10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '10px',
                    textAlign: isCollapsed ? 'center' : 'left',
                    opacity: isCollapsed ? 0.5 : 1
                }}>
                    {isCollapsed ? "..." : "Settings"}
                </div>

                <Link href="/admin/settings" style={linkStyle("/admin/settings")}>
                    <svg style={{ marginRight: isCollapsed ? '0' : '15px' }} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826 3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {!isCollapsed && "General"}
                </Link>
            </nav>

            <button
                onClick={toggleSidebar}
                style={{
                    margin: '20px auto',
                    background: 'rgba(255,255,255,0.05)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </button>
        </div>
    );
}
