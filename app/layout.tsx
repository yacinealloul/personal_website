import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yacine.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yacine A. — Builder & Product Engineer",
    template: "%s — Yacine A.",
  },
  description:
    "Product Engineer shipping end-to-end, from research to production. Based between SF and Dubai, building across startups since 2022.",
  authors: [{ name: "Yacine A." }],
  creator: "Yacine A.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Yacine A.",
    title: "Yacine A. — Builder & Product Engineer",
    description:
      "Product Engineer shipping end-to-end, from research to production. Based between SF and Dubai, building across startups since 2022.",
  },
  twitter: {
    card: "summary",
    creator: "@seryacine",
    title: "Yacine A. — Builder & Product Engineer",
    description:
      "Product Engineer shipping end-to-end, from research to production. Based between SF and Dubai, building across startups since 2022.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#FAF9F7]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-[#FAF9F7] font-[family-name:var(--font-geist-sans)] selection:bg-stone-900 selection:text-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
