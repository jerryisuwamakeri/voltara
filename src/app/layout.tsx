import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppChat from "@/components/ui/WhatsAppChat";

export const metadata: Metadata = {
  title: "VOLTARA – Powering the Future Sustainably",
  description:
    "Transform your energy consumption with VOLTARA's cutting-edge solar solutions. Clean, reliable, and cost-effective power for homes and businesses across Nigeria.",
  keywords: "solar energy Nigeria, solar panels Lagos, inverter installation, clean energy, VOLTARA",
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
