import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "800",] });

export const metadata: Metadata = {
  title: "fundfolio",
  description: "Personal finance and note organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="flex min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
