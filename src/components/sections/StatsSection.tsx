import { Users, Zap, Activity, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const ICONS = { users: Users, zap: Zap, activity: Activity, leaf: MapPin };

export default function StatsSection() {
  return (
    <section id="stats" className="bg-white pb-2 pt-6">
      <div className="shell container-px">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-[#eef1f5] py-12 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon as keyof typeof ICONS] ?? Zap;
            return (
              <Reveal key={stat.label} delay={i * 80} className="flex items-center gap-4">
                <span className="chip shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="display text-3xl text-ink">{stat.value}</div>
                  <div className="text-sm text-[#6b7686]">{stat.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
