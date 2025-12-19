"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
    const pathname = usePathname();

    useEffect(() => {
        // Only run on client
        if (typeof window === "undefined") return;

        // Helper to initialize or refresh smoother
        const initSmoother = () => {
            // Check if GSAP and plugins are loaded
            const gsap = (window as any).gsap;
            const ScrollSmoother = (window as any).ScrollSmoother;
            const ScrollTrigger = (window as any).ScrollTrigger;

            if (gsap && ScrollSmoother && ScrollTrigger) {
                // Register plugins if not already registered (though main.js implies they might be)
                gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

                // Check if smoother already exists
                const existingSmoother = ScrollSmoother.get();
                if (existingSmoother) {
                    // Kill old instance to prevent duplicates/memory leaks on navigation
                    existingSmoother.kill();
                }

                // Initialize new smoother
                ScrollSmoother.create({
                    wrapper: "#smooth-wrapper",
                    content: "#smooth-content",
                    smooth: 2,
                    effects: true,
                    smoothTouch: 0.1,
                    normalizeScroll: false,
                    ignoreMobileResize: true,
                });
            }
        };

        // Run initialization with a small delay to ensure DOM is ready
        const timer = setTimeout(initSmoother, 100);

        return () => {
            clearTimeout(timer);
            const ScrollSmoother = (window as any).ScrollSmoother;
            if (ScrollSmoother) {
                const smoother = ScrollSmoother.get();
                if (smoother) smoother.kill();
            }
        };
    }, [pathname]); // Re-run when route changes

    return null;
}
