"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_WORDS = ["Sustainably", "Efficiently", "Reliably", "Affordably"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % HERO_WORDS.length);
        setWordVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background photo */}
      <Image
        src="/hero-solar.jpg"
        alt="Solar panels in Nigeria"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Dark overlay — solid, no blur */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(8, 20, 45, 0.80)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
          style={{ backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#FCD34D" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#F59E0B" }}
          />
          Nigeria&apos;s Premier Solar Solutions Provider
        </div>

        {/* Headline */}
        <h1
          className="font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.4rem, 6.5vw, 4.5rem)" }}
        >
          Powering the Future
          <br />
          <span
            className="text-gradient"
            style={{
              display: "inline-block",
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {HERO_WORDS[wordIndex]}
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-white max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", opacity: 0.75 }}
        >
          Transform your energy consumption with VOLTARA&apos;s cutting-edge solar
          solutions. Clean, reliable, and cost-effective power for your home or
          business across Nigeria.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/packages"
            className="flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl text-white transition-all duration-200 w-full sm:w-auto justify-center"
            style={{ backgroundColor: "#F59E0B" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d97706"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F59E0B"; }}
          >
            Explore Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/packages"
            className="flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl text-white w-full sm:w-auto justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.3)" }}
          >
            Explore Packages
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {[
            { label: "Happy Customers", value: "50+"    },
            { label: "kVA Installed",   value: "250"   },
            { label: "System Uptime",   value: "99.9%" },
            { label: "Office Locations",value: "6"     },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif", color: "#F59E0B" }}
              >
                {item.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
