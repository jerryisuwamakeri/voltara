import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const AVATAR_TONES = ["bg-[#0a1a33]", "bg-gold-dark", "bg-[#1f3a63]"];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="shell container-px">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Customer stories</span>
          <h2 className="display display-lg mt-4">Real savings, real people</h2>
          <p className="lead mt-4">
            Homes and businesses across Nigeria that swapped unreliable grid power for clean, dependable solar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card card-hover flex h-full flex-col p-8">
                <Quote className="h-7 w-7 text-gold/40" />
                <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-[#3f4a59]">
                  {t.quote}
                </blockquote>

                <div className="mt-6 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-[#eef1f5] pt-5">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_TONES[i % AVATAR_TONES.length]}`}
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-[#94a3b8]">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-[#eef1f5] pt-8">
          {["25-Year panel warranty", "Certified installation", "Dedicated support", "Flexible financing"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#5b6675]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
