import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="py-[66px] relative ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
