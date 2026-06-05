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

  // transparent only while sitting over the dark hero
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-white/90 backdrop-blur-md border-b border-[#eef1f5]" : "bg-transparent"
        }`}
      >
        <div className="shell container-px">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/voltara-logo.png"
                alt="VOLTARA"
                width={46}
                height={30}
                style={{ height: "auto", filter: solid ? "none" : "brightness(0) invert(1)" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-3.5 py-2 text-[0.9rem] font-medium rounded-full transition-colors duration-200 ${
                      active
                        ? "text-gold-dark"
                        : solid
                        ? "text-[#3a4453] hover:text-gold-dark"
                        : "text-white/85 hover:text-white"
                    }`}
                    style={active ? { color: "#d97706" } : undefined}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/2349131797237"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  solid ? "text-[#6b7280] hover:text-ink" : "text-white/75 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                09131797237
              </a>
              <Link href="/packages" className="btn btn-primary !py-2.5 !px-5 text-sm">
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={openMenu}
              aria-label="Open menu"
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-navy flex flex-col">
          <div className="flex items-center justify-between container-px py-4 border-b border-white/10">
            <Image
              src="/voltara-logo.png"
              alt="VOLTARA"
              width={40}
              height={26}
              style={{ height: "auto", filter: "brightness(0) invert(1)" }}
            />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 container-px flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[0.95rem] font-medium transition-colors ${
                    active ? "bg-white/10 text-gold" : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="container-px pb-6 pt-4 border-t border-white/10 space-y-3">
            <Link
              href="/packages"
              onClick={closeMenu}
              className="btn btn-primary w-full"
            >
              View Solar Packages
            </Link>
            <a
              href="https://wa.me/2349131797237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light w-full"
            >
              <Phone className="w-4 h-4" /> WhatsApp · 09131797237
            </a>
            <p className="text-center text-xs text-white/35">Mon – Sat · 8am – 6pm</p>
          </div>
        </div>
      )}
    </>
  );
}
