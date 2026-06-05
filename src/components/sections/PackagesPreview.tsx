import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Star } from "lucide-react";
import { PACKAGES, WHATSAPP, type Package } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function buildWhatsAppURL(pkg: Package): string {
  const msg = `Hello Voltara Energies!

I'm interested in the *${pkg.title}* — ₦${pkg.price}

Payment options:
• Deposit (30%): ₦${pkg.deposit}
• Monthly: ₦${pkg.monthly}/month × 10 months

Powers: ${pkg.appliances.slice(0, 4).join(", ")} & more

Please contact me to proceed. Thank you!`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export default function PackagesPreview() {
  const preview = PACKAGES.filter((p) => p.category === "residential").slice(0, 3);

  return (
    <section className="section bg-cream">
      <div className="shell container-px">
        <SectionHeading
          kicker="Residential packages"
          title="Pick the right system for your home"
          intro="Transparent pricing, flexible payment plans, and certified installation included on every package."
          link={{ label: "See all 11 packages", href: "/packages" }}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {preview.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 90}>
              <div
                className={`card relative h-full overflow-hidden ${
                  pkg.popular ? "ring-2 ring-gold" : "card-hover"
                }`}
              >
                {pkg.popular && (
                  <div className="flex items-center justify-center gap-1.5 bg-gold py-2 text-xs font-bold uppercase tracking-widest text-[#1a1205]">
                    <Star className="h-3.5 w-3.5 fill-current" /> Most popular
                  </div>
                )}

                <div className="p-7">
                  <span className="pill">{pkg.badge}</span>
                  <h3 className="display mt-3 text-xl text-ink">{pkg.title}</h3>

                  <div className="mt-5 border-b border-[#eef1f5] pb-5">
                    <div className="text-[0.7rem] uppercase tracking-wide text-[#94a3b8]">
                      Total price
                    </div>
                    <div className="display text-4xl text-ink">₦{pkg.price}</div>
                    <p className="mt-1 text-xs text-[#94a3b8]">
                      From ₦{pkg.deposit} deposit (30% upfront)
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#fde6c3] bg-gold-soft p-3 text-center">
                      <div className="text-[0.65rem] font-bold uppercase text-gold-dark">Monthly</div>
                      <div className="text-sm font-bold text-ink">₦{pkg.monthly}</div>
                      <div className="text-[0.65rem] text-[#94a3b8]">× 10 mo.</div>
                    </div>
                    <div className="rounded-xl border border-[#eef1f5] bg-[#f7f8fa] p-3 text-center">
                      <div className="text-[0.65rem] font-bold uppercase text-[#94a3b8]">Weekly</div>
                      <div className="text-sm font-bold text-ink">₦{pkg.weekly}</div>
                      <div className="text-[0.65rem] text-[#94a3b8]">× 40 wks</div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {pkg.whatsInside.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.85rem] text-[#5b6675]">
                        <Check className="h-4 w-4 shrink-0 text-gold-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsAppURL(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-6 w-full ${pkg.popular ? "btn-primary" : "btn-dark"}`}
                  >
                    <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Commercial strip */}
        <div className="dot-grid mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-navy p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="eyebrow text-gold">Business &amp; industrial</span>
            <h3 className="display mt-3 text-2xl text-white">Need a larger or custom system?</h3>
            <p className="mt-2 max-w-md text-[0.95rem] text-white/60">
              11 residential packages plus bespoke commercial and industrial solutions — grid-tie or fully off-grid.
            </p>
          </div>
          <Link href="/packages" className="btn btn-primary shrink-0">
            View all packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
