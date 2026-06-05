import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section bg-white">
      <div className="shell container-px">
        <div className="dot-grid relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 text-center sm:px-14 sm:py-20">
          {/* soft amber glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18), transparent 65%)" }}
          />
          <span className="eyebrow eyebrow-center text-gold">Get started today</span>
          <h2 className="display mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-5xl">
            Ready to go solar with <span className="text-gold">VOLTARA?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            Join the homes and businesses already powered by clean, reliable energy across Nigeria. Get a free consultation and a system sized to your needs.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/packages" className="btn btn-primary">
              Explore packages <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/2349131797237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              <Phone className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
