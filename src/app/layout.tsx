import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });
const display = DM_Sans({ subsets: ["latin"], variable: "--font-display" });


// Set NEXT_PUBLIC_SITE_URL to the production domain so Open Graph image URLs resolve absolutely.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Maroš Studenič | Fullstack Developer | Portfolio',
  description: 'Are you looking for a fullstack developer? I am a fullstack developer with experience in React, Nextjs, TypeScript, and more. Check out my portfolio!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={cn(inter.className, display.variable, "overflow-x-hidden", "font-sans")}>{children}</body>
    </html>
  );
}
