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

export const metadata: Metadata = {
  title: "Vivek Patil - Software Developer",
  description: "Portfolio of Vivek Patil - Full Stack Developer specializing in React, Next.js, and Cloud Technologies",
  metadataBase: new URL("https://vivekpatil.me"),
  openGraph: {
    title: "Vivek Patil - Software Developer",
    description: "Portfolio of Vivek Patil - Full Stack Developer specializing in React, Next.js, and Cloud Technologies",
    url: "https://vivekpatil.me",
    siteName: "Vivek Patil Portfolio",
    images: [
      {
        url: "/me.png",
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
    description: "Portfolio of Vivek Patil - Full Stack Developer specializing in React, Next.js, and Cloud Technologies",
    images: ["/me.png"],
  },
  icons: {
    icon: "/me.png",
    shortcut: "/me.png",
    apple: "/me.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
