import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-navy relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero-solar.jpg"
        alt="Solar installation in Nigeria"
        fill
        priority
        quality={85}
        className="object-cover object-center -z-10"
      />
      {/* Tonal gradient — heavier on the left for text legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,18,40,0.94) 0%, rgba(8,18,40,0.82) 42%, rgba(8,18,40,0.45) 100%)",
        }}
      />

      <div className="shell container-px pt-28 pb-28">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="display display-xl text-white">
            Powering the future,{" "}
            <span className="text-gold">sustainably.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75">
            VOLTARA fuses solar engineering with electrical expertise to deliver
            clean, reliable, cost-effective power for homes and businesses across
            Nigeria — backed by certified installation and flexible payment plans.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/packages" className="btn btn-primary">
              Explore Packages <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/2349131797237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              <Phone className="h-5 w-5" /> Talk to an expert
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> 5-year system warranty
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" /> Rated 5.0 by customers
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Since 2018
            </span>
          </div>
        </div>
      </div>

      {/* Wave divider into the white section below */}
      <svg
        className="wave absolute bottom-0 left-0"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  );
}
