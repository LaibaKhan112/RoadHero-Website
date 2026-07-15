import {
  CircleCheck,
  Navigation,
  Smartphone,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import {
  howItWorksSteps,
  type HowItWorksIconName,
} from "@/data/howItWorks";

const iconMap: Record<HowItWorksIconName, LucideIcon> = {
  "open-roadhero": Smartphone,
  "choose-service": Wrench,
  "provider-accepts": UserCheck,
  "track-live": Navigation,
  "job-completed": CircleCheck,
};

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-slate-50 py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          heading="Simple Steps. Fast Solutions."
        />

        <div className="mt-6 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-8">
          {/* Steps */}
          <div className="relative min-w-0">
            {/* Mobile vertical connector */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-1/2 top-7 hidden -translate-x-1/2 border-l-2 border-dashed border-customer-teal/35 max-sm:block"
            />

            <ol className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-7 lg:grid-cols-5 lg:gap-3">
              {/* Desktop horizontal connector */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden border-t-2 border-dashed border-customer-teal/45 lg:block"
              />

              {howItWorksSteps.map((step) => {
                const Icon = iconMap[step.icon];

                return (
                  <li
                    key={step.step}
                    className="relative z-10 flex min-w-0 flex-col items-center text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-customer-teal text-white shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <div className="bg-slate-50 px-1.5">
                      <span className="mt-2.5 block text-xs font-bold text-customer-teal">
                        {String(step.step).padStart(2, "0")}
                      </span>

                      <h3 className="mt-1 text-xs font-semibold leading-4 text-neutral-900 xl:text-sm">
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-1 max-w-31.25 text-[11px] leading-4 text-neutral-600 xl:max-w-35 xl:text-xs">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Phone / live tracking visual */}
          <div className="relative mx-auto aspect-square w-full max-w-55 lg:mx-0 lg:justify-self-end">
            <Image
              src="/images/how-it-works/service-in-progress-app-mockup.png"
              alt="RoadHero customer app showing live tracking with a Service in Progress status card"
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
