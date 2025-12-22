"use client";

import { useEffect } from "react";

export default function AboutPageEffects() {
    useEffect(() => {
        document.body.classList.remove('loaded');
    }, []);

    return null;
}
