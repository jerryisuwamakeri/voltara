"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // solid = white bg + dark text; transparent = dark hero
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header
        style={solid ? { backgroundColor: "#ffffff", borderBottom: "1px solid #f1f5f9" } : { backgroundColor: "transparent" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/voltara-logo.png"
                alt="VOLTARA"
                width={42}
                height={28}
                style={{ height: "auto", filter: solid ? "none" : "brightness(0) invert(1)" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={
                      active
                        ? { color: "#F59E0B", backgroundColor: solid ? "#fffbeb" : "rgba(245,158,11,0.15)" }
                        : solid
                        ? { color: "#374151" }
                        : { color: "rgba(255,255,255,0.9)" }
                    }
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = solid ? "#F59E0B" : "#ffffff";
                        if (solid) (e.currentTarget as HTMLElement).style.backgroundColor = "#fffbeb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = solid ? "#374151" : "rgba(255,255,255,0.9)";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/2349131797237"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: solid ? "#6b7280" : "rgba(255,255,255,0.75)" }}
              >
                <Phone className="w-3.5 h-3.5" />
                09131797237
              </a>
              <Link
                href="/packages"
                className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-200"
                style={{ backgroundColor: "#F59E0B" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d97706"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F59E0B"; }}
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={openMenu}
              aria-label="Open menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
              style={{ color: solid ? "#374151" : "#ffffff" }}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay — no CSS transitions, just mount/unmount */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            backgroundColor: "#0c1f3f",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header row */}
          <div
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            className="flex items-center justify-between px-5 py-4"
          >
            <Image
              src="/voltara-logo.png"
              alt="VOLTARA"
              width={38}
              height={25}
              style={{ height: "auto", filter: "brightness(0) invert(1)" }}
            />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className="block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors"
                  style={
                    active
                      ? { backgroundColor: "rgba(245,158,11,0.15)", color: "#F59E0B" }
                      : { color: "rgba(255,255,255,0.8)" }
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom CTA */}
          <div className="p-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Link
              href="/packages"
              onClick={closeMenu}
              className="block w-full text-center py-3.5 text-sm font-semibold rounded-xl text-white mb-3"
              style={{ backgroundColor: "#F59E0B" }}
            >
              View Solar Packages
            </Link>
            <a
              href="https://wa.me/2349131797237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}
            >
              <Phone className="w-4 h-4" />
              WhatsApp: 09131797237
            </a>
            <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              Mon – Sat &middot; 8am – 6pm
            </p>
          </div>
        </div>
      )}
    </>
  );
}
