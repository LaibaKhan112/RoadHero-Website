import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import FAQDownloadSection from "@/components/sections/FAQDownloadSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProviderRecruitmentBanner from "@/components/sections/ProviderRecruitmentBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsStripSection from "@/components/sections/StatsStripSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseRoadHeroSection from "@/components/sections/WhyChooseRoadHeroSection";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AppShowcaseSection />
      <WhyChooseRoadHeroSection />
      {/* <StatsStripSection /> */}
      <ProviderRecruitmentBanner />
      <TestimonialsSection />
      <FAQDownloadSection />
      <ContactInfoSection />
    </main>
  );
}
