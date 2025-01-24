import { VisualEditing } from "next-sanity";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Figma Config 2024",
  description:
    "A powerful design and prototyping tool for creating user interfaces, with real-time collaboration features and an extensive plugin ecosystem",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <SmoothScroll />
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
