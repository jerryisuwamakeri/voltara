import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Standard section header: kicker eyebrow + display title (+ optional link).
 * Keeps every section's heading rhythm consistent.
 */
export default function SectionHeading({
  kicker,
  title,
  intro,
  link,
  center = false,
  tone = "light",
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  link?: { label: string; href: string };
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "";
  const introColor = tone === "dark" ? "text-white/60" : "lead";

  return (
    <div className={`mb-10 sm:mb-14 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
      <span className={`eyebrow ${center ? "eyebrow-center" : ""}`}>{kicker}</span>
      <div
        className={`mt-4 ${
          link && !center ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" : ""
        }`}
      >
        <h2 className={`display display-lg max-w-2xl ${titleColor}`}>{title}</h2>
        {link && (
          <Link href={link.href} className="link-arrow shrink-0">
            {link.label} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      {intro && <p className={`mt-4 max-w-xl ${center ? "mx-auto" : ""} ${introColor}`}>{intro}</p>}
    </div>
  );
}
