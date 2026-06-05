import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/voltara-energies/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/voltara_energies/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@voltaraenergies",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Packages", path: "/packages" },
  { label: "Voltara Loan", path: "/finance" },
  { label: "Voltara AI", path: "/voltara-ai" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SERVICES_LINKS = [
  { label: "Residential Solar", path: "/packages" },
  { label: "Commercial Systems", path: "/packages" },
  { label: "Industrial Power", path: "/packages" },
  { label: "Solar Products", path: "/products" },
  { label: "Voltara Loan", path: "/finance" },
  { label: "Maintenance", path: "/contact" },
];

const OFFICES = [
  { city: "Lagos", address: "New road Ibeju Lekki, Lagos" },
  { city: "Oyo / Ibadan", address: "Suite 10 Nikem plaza opp. NNPC Apata, Ibadan" },
  { city: "Abuja", address: "No 11 Prince Ebosele Crescent, Dutse, Abuja" },
  { city: "Ondo / Akure", address: "Zion City Estate, Beside FUTA Northgate, Akure" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/voltara-logo.png"
                alt="VOLTARA"
                width={45}
                height={30}
                style={{ height: "auto", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              The perfect fusion of solar energy and electrical expertise,
              powering Nigeria&apos;s future sustainably since 2018.
            </p>
            <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Mon – Sat: 8am – 6pm
            </p>

            {/* Lonegroup attribution */}
            <a
              href="https://lonegroup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col gap-0.5 rounded-xl px-4 py-3 mb-5 transition-colors duration-200"
              style={{
                backgroundColor: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.25)",
              }}
            >
              <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                A product of
              </span>
              <span className="text-sm font-bold" style={{ color: "#F59E0B" }}>
                Lonegroup
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                LONE INT&apos;L LIMITED · RC2001247
              </span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Contact Us
            </h4>
            <ul className="space-y-4 mb-5">
              <li>
                <a
                  href="mailto:voltaraenergies@gmail.com"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
                  voltaraenergies@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349131797237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
                  09131797237
                </a>
              </li>
            </ul>

            <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Offices
            </p>
            {OFFICES.map((o) => (
              <div key={o.city} className="flex items-start gap-3 mb-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400" />
                <div>
                  <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>{o.city}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{o.address}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} VOLTARA Solar &amp; Electrical Solutions. All rights reserved.
            {" "}A product of{" "}
            <a
              href="https://lonegroup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              style={{ color: "#F59E0B" }}
            >
              Lonegroup
            </a>{" "}
            (LONE INT&apos;L LIMITED · RC2001247).
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Privacy Policy", "Terms of Service", "Warranty Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
