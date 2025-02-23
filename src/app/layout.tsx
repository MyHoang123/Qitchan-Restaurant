// 'use client'
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/app.navBar'
import "./globals.css";
import 'swiper/css';
export const metadata: Metadata = {
  title: "Qitchen - Restaurant",
  description: "Advertising Restaurant Website",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
