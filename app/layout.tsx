import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esaint Mjay - Digital Agency & Creative Portfolio",
  description: "Esaint Mjay - Digital Agency & Creative Portfolio HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/custom-animation.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/spacing.css" />
        <link rel="stylesheet" href="/css/before-after.css" />
        <link rel="stylesheet" href="/css/core.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased loaded`}
      >
        {children}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap-bundle.js" />
        <Script src="/js/swiper-bundle.js" />
        <Script src="/js/isotope-pkgd.js" />
        <Script src="/js/imagesloaded-pkgd.js" />
        <Script src="/js/purecounter.js" />
        <Script src="/js/magnific-popup.js" />
      </body>
    </html>
  );
}
