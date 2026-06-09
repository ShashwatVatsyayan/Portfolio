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
  title: "Shashwat Vatsyayan | Creative Technologist & Designer",
  description:
    "Portfolio of Shashwat Vatsyayan — Social Media & Graphic Designer Executive, Creative Technologist, and Cybersecurity Enthusiast.",
  keywords: ["portfolio", "designer", "developer", "cybersecurity", "creative"],
  authors: [{ name: "Shashwat Vatsyayan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
