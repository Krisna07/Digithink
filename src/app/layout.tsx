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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className}>
        <Navbar />
        <div className="relative min-h-[100vh] z-[20]">{children}</div>
        <div className="w-full grid place-items-center relative bottom-0 z-[40] bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
