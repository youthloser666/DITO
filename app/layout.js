import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DTO — Andy Javier Bravo Castaño | Visual Artist & Photographer",
  description:
    "Artistic identity of Cuban photographer and visual artist Andy Javier Bravo Castaño (DITO). Working between documentary photography and painterly intervention in Belgrade and Havana.",
  keywords: [
    "Andy Javier Bravo Castaño",
    "DITO",
    "DTO",
    "Cuban Photographer",
    "Belgrade Visual Artist",
    "Documentary Photography",
    "Painterly Intervention",
    "Overpainting Photography",
    "Contemporary Art",
    "Art for Sale",
  ],
  authors: [{ name: "Andy Javier Bravo Castaño (DITO)" }],
  openGraph: {
    title: "DTO — Andy Javier Bravo Castaño | Visual Artist & Photographer",
    description:
      "A documented reality. A transformed memory. An altered perception. Working between Cuba and Belgrade.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[#C0C0C0] selection:text-[#0a0a0a]">
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
