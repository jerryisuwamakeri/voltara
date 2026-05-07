import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PackagesPreview from "@/components/sections/PackagesPreview";
import WhyVoltara from "@/components/sections/WhyVoltara";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PackagesPreview />
      <WhyVoltara />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
