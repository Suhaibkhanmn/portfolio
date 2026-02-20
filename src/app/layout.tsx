import type { Metadata } from "next";
import { Quicksand, Inter, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suhaib Khan MN - Portfolio",
  description: "Software & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${playfair.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
