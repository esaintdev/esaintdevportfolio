"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        portfolios: 0,
    });
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { count, error } = await supabase
                    .from('portfolios')
                    .select('*', { count: 'exact', head: true });

                if (!error) {
                    setStats({ portfolios: count || 0 });
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="pt-120 pb-120" style={{ backgroundColor: '#010103', minHeight: '100vh', color: '#fff' }}>
            <div className="container" style={{ padding: '0 40px' }}>
                <div className="tp-section-title-wrapper mb-50">
                    <h3 className="tp-section-title text-white">Dashboard Overview</h3>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-30">
                        <div style={{
                            borderRadius: '30px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '30px',
                            height: '100%'
                        }}>
                            <div className="d-flex align-items-center justify-content-between mb-20">
                                <div>
                                    <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', opacity: 0.7, marginBottom: '5px' }}>Total Portfolios</p>
                                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{loading ? "..." : stats.portfolios}</p>
                                </div>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 215, 0, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <Link href="/admin/portfolios" className="tp-btn-yellow" style={{ padding: '8px 20px', fontSize: '14px', display: 'inline-block', borderRadius: '20px' }}>
                                Manage &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-30">
                        <div style={{
                            borderRadius: '30px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '30px',
                            height: '100%',
                            opacity: 0.5
                        }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', opacity: 0.7, marginBottom: '5px' }}>Users</p>
                                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>-</p>
                                </div>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-30">
                        <div style={{
                            borderRadius: '30px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '30px',
                            height: '100%',
                            opacity: 0.5
                        }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', opacity: 0.7, marginBottom: '5px' }}>Settings</p>
                                    <p style={{ fontSize: '36px', fontWeight: 'bold' }}>-</p>
                                </div>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
