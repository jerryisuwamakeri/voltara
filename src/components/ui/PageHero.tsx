import { type ReactNode } from "react";

/**
 * Shared inner-page hero band: navy, dot-grid, eyebrow + display title + lead,
 * with a white wave divider into the page body below.
 */
export default function PageHero({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative bg-navy dot-grid pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="shell container-px">
        <span className="eyebrow text-gold">{kicker}</span>
        <h1 className="display display-xl mt-4 max-w-3xl text-white">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/65">{intro}</p>}
        {children}
      </div>
      <svg className="wave absolute bottom-0 left-0 translate-y-px" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
        <path fill="#ffffff" d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,56 L1440,90 L0,90 Z" />
      </svg>
    </header>
  );
}
