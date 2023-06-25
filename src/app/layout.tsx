"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digithink",
  description: "A Web Solution Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [height, setHeight] = useState<string>(0);

  console.log(height);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="top-[66px] relative ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
