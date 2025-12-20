"use client";

import React, { useEffect } from 'react';
import PublicHeader from '@/components/PublicHeader';
import ContactArea from '@/components/ContactArea';

export default function ContactPage() {
    useEffect(() => {
        document.body.classList.remove('loaded');
    }, []);
    return (
        <>
            <PublicHeader />
            <main>
                <ContactArea />
            </main>
        </>
    );
}
