import {
  BadgeCheck,
  Headphones,
  LocateFixed,
  ShieldCheck,
  Timer,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustFeatures, type TrustFeatureIconName } from "@/data/whyChooseRoadHero";

const iconMap: Record<TrustFeatureIconName, LucideIcon> = {
  "fast-response": Timer,
  "trusted-providers": BadgeCheck,
  "real-time-tracking": LocateFixed,
  "secure-payments": ShieldCheck,
  support: Headphones,
};

export default function WhyChooseRoadHeroSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose RoadHero?"
          heading="Your Safety. Our Priority."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {trustFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-customer-teal/30 text-customer-teal">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">
                  {feature.title}
                </h3>
                <p className="max-w-[200px] text-xs leading-5 text-neutral-500 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
