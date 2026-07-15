import {
  CircleCheck,
  MapPin,
  Navigation,
  Smartphone,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionHeading from "@/components/ui/SectionHeading";
import { howItWorksSteps, type HowItWorksIconName } from "@/data/howItWorks";

const iconMap: Record<HowItWorksIconName, LucideIcon> = {
  "open-roadhero": Smartphone,
  "choose-service": Wrench,
  "provider-accepts": UserCheck,
  "track-live": Navigation,
  "job-completed": CircleCheck,
};

const mapPins = [
  { left: "18%", top: "82%", size: "h-5 w-5" },
  { left: "38%", top: "48%", size: "h-5 w-5" },
  { left: "62%", top: "60%", size: "h-5 w-5" },
  { left: "78%", top: "22%", size: "h-6 w-6" },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          heading="Simple Steps. Fast Solutions."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(240px,1fr)]">
          {/* Steps */}
          <div className="relative">
            {/* Vertical connector — mobile only */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-8 bottom-8 hidden w-0 border-l-2 border-dashed border-customer-teal/40 max-sm:block"
            />

            <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-5">
              {/* Horizontal connector — desktop only, centered through the icon circles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[10%] top-8.5 hidden border-t-2 border-dashed border-customer-teal/50 lg:block"
              />

              {howItWorksSteps.map((step) => {
                const Icon = iconMap[step.icon];
                return (
                  <li
                    key={step.step}
                    className="relative z-10 flex min-w-0 flex-col items-center text-center"
                  >
                    <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-full bg-customer-teal text-white shadow-sm">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    {/* Opaque background masks the mobile vertical connector so it never shows through the text */}
                    <div className="bg-slate-50 px-2">
                      <span className="mt-4 block text-sm font-bold text-customer-teal">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold leading-tight text-neutral-900 sm:text-base">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-neutral-600 xl:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Phone / live tracking visual */}
          <div className="relative mx-auto w-full max-w-57.5 pb-8 lg:mx-0">
            <PhoneMockup variant="customer">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between px-4 pt-4 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                  <span>Live Tracking</span>
                  <Navigation
                    className="h-3.5 w-3.5 text-customer-teal"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative mx-3 mt-3 mb-3 flex-1 overflow-hidden rounded-2xl bg-customer-teal/10">
                  <svg
                    viewBox="0 0 200 320"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect width="200" height="320" fill="#e6f8fb" />
                    <path d="M0 70 H200" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                    <path d="M0 150 H200" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                    <path d="M0 230 H200" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                    <path d="M60 0 V320" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                    <path d="M140 0 V320" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                    <path
                      d="M36 262 C 70 220, 90 200, 76 154 S 130 130, 124 92 S 156 60, 156 40"
                      fill="none"
                      stroke="#00b8d4"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="2 8"
                    />
                  </svg>

                  {mapPins.map((pin, index) => (
                    <MapPin
                      key={index}
                      className={`absolute -translate-x-1/2 -translate-y-full text-customer-teal-dark drop-shadow ${pin.size}`}
                      style={{ left: pin.left, top: pin.top }}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </PhoneMockup>

            {/* Floating status card */}
            <div className="absolute inset-x-4 bottom-0 z-10 rounded-xl bg-white p-3 shadow-lg ring-1 ring-neutral-200 sm:inset-x-auto sm:left-1/2 sm:w-56 sm:-translate-x-1/2">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-customer-teal/10 text-customer-teal">
                  <CircleCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-neutral-900">
                    Service in Progress
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Provider arriving soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
