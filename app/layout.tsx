import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { jsonLd, siteConfig, SITE_URL, isProduction } from "@/lib/seo";
import "./globals.css";

/* D-DIN substitute per DESIGN.md §Note on Font Substitutes:
   Inter at 700 with positive tracking + uppercase for display tiers. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/* SEO.md §3 (copy) · §6 (canonical) · §9 (preview noindex)
   §10 (Open Graph) · §11 (Twitter/X) — all driven from lib/seo.ts. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: "%s | Vivek Patil",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  /* Production indexes; Vercel preview deployments do not (§9). */
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vivek Patil Portfolio",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image.url,
        width: siteConfig.image.width,
        height: siteConfig.image.height,
        alt: siteConfig.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.image.url, alt: siteConfig.image.alt }],
  },
  icons: {
    icon: "/me.JPG",
    shortcut: "/me.JPG",
    apple: "/me.JPG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* SEO.md §12 Person · §13 WebSite — server-rendered JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
