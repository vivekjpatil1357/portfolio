import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* D-DIN substitute per DESIGN.md §Note on Font Substitutes:
   Inter at 700 with positive tracking + uppercase for display tiers. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Patil - Software Developer",
  description:
    "Portfolio of Vivek Patil - Software Developer intern at Veltos AI, specializing in NestJS, Next.js, AWS and real-time platforms.",
  metadataBase: new URL("https://vivekpatil.me"),
  openGraph: {
    title: "Vivek Patil - Software Developer",
    description:
      "Portfolio of Vivek Patil - Software Developer intern at Veltos AI, specializing in NestJS, Next.js, AWS and real-time platforms.",
    url: "https://vivekpatil.me",
    siteName: "Vivek Patil Portfolio",
    images: [
      {
        url: "/me.JPG",
        width: 800,
        height: 800,
        alt: "Vivek Patil",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Patil - Software Developer",
    description:
      "Portfolio of Vivek Patil - Software Developer intern at Veltos AI, specializing in NestJS, Next.js, AWS and real-time platforms.",
    images: ["/me.JPG"],
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
