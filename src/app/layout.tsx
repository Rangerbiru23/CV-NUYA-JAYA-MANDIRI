import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV NUYA JAYA MANDIRI - Konstruksi Gedung Terpercaya di Padang",
  description: "CV NUYA JAYA MANDIRI adalah perusahaan konstruksi terpercaya di Padang yang menyediakan jasa pembangunan gedung, renovasi, dan konsultasi konstruksi profesional.",
  keywords: ["CV NUYA JAYA MANDIRI", "Konstruksi Gedung", "Bangunan Padang", "Kontraktor Padang", "Renovasi Bangunan", "Konstruksi Sumatera Barat"],
  authors: [{ name: "CV NUYA JAYA MANDIRI" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV NUYA JAYA MANDIRI - Konstruksi Gedung Terpercaya",
    description: "Perusahaan konstruksi profesional di Padang untuk kebutuhan pembangunan gedung Anda",
    url: "https://nuyajayamandiri.com",
    siteName: "CV NUYA JAYA MANDIRI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV NUYA JAYA MANDIRI - Konstruksi Gedung Terpercaya",
    description: "Perusahaan konstruksi profesional di Padang untuk kebutuhan pembangunan gedung Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
