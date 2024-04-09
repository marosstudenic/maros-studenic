import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Tac+One&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(inter.className, "dark", "w-full overflow-x-hidden")}>{children}</body>
    </html>
  );
}
