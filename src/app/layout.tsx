import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppChat from "@/components/ui/WhatsAppChat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLTARA – Powering the Future Sustainably",
  description:
    "Transform your energy consumption with VOLTARA's cutting-edge solar solutions. Clean, reliable, and cost-effective power for homes and businesses across Nigeria.",
  keywords: "solar energy Nigeria, solar panels Lagos, inverter installation, clean energy, VOLTARA",
  icons: {
    icon: "/voltara-logo.png",
    shortcut: "/voltara-logo.png",
    apple: "/voltara-logo.png",
  },
  openGraph: {
    title: "VOLTARA – Powering the Future Sustainably",
    description:
      "Nigeria's premier solar energy and electrical solutions provider. Expert installation, 25-year warranty, flexible financing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
