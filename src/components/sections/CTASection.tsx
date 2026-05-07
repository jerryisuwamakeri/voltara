"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-navy rounded-2xl overflow-hidden">
          {/* Gold top bar */}
          <div className="h-1.5 w-full" style={{ backgroundColor: "#F59E0B" }} />

          <div className="px-8 sm:px-14 py-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#F59E0B" }}>
              Get Started Today
            </p>
            <h2
              className="text-3xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Ready to go solar with VOLTARA?
            </h2>
            <p className="max-w-xl mx-auto text-base mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Join 2,500+ homes and businesses already powered by clean, reliable solar energy across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/packages"
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors duration-200 w-full sm:w-auto justify-center"
                style={{ backgroundColor: "#F59E0B" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d97706"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F59E0B"; }}
              >
                Explore Packages <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/2349131921437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors duration-200 w-full sm:w-auto justify-center"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)", backgroundColor: "transparent" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                <Phone className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
