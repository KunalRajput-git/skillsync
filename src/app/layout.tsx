import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Navbar from "./navbar";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Skillsync - your growth partner!",
  description:
    "Connect with the perfect partner for personal and professional growth. Discover, connect, and achieve your goals together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
