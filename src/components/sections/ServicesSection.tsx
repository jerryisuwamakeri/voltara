import { Sun, Zap, Home, Building2, Factory, Shield } from "lucide-react";
import { SERVICES } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS = { sun: Sun, zap: Zap, home: Home, building2: Building2, factory: Factory, shield: Shield };

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="shell container-px">
        <SectionHeading
          kicker="What we do"
          title="Complete solar & electrical solutions"
          intro="From a single inverter to full off-grid infrastructure — we design, install, and maintain systems sized exactly to your needs."
          link={{ label: "View all packages", href: "/packages" }}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Zap;
            return (
              <Reveal key={service.title} delay={i * 60}>
                <div className="card card-hover h-full p-7">
                  <span className="chip">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="display mt-5 text-lg text-ink">{service.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5b6675]">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
