import type { ReactNode } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bell,
  CircleCheck,
  Disc,
  Droplet,
  MapPin,
  Navigation,
  Truck,
  Wrench,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { appShowcasePanels, type AppShowcaseVariant } from "@/data/appShowcase";

const panelClasses: Record<AppShowcaseVariant, string> = {
  customer: "bg-customer-teal text-white",
  provider: "bg-provider-yellow text-neutral-900",
};

const eyebrowClasses: Record<AppShowcaseVariant, string> = {
  customer: "text-xs font-bold uppercase tracking-[0.16em] text-white/80",
  provider: "text-xs font-bold uppercase tracking-[0.16em] text-neutral-800/70",
};

const headingClasses: Record<AppShowcaseVariant, string> = {
  customer: "mt-3 max-w-sm text-balance text-3xl font-bold leading-tight text-white sm:text-4xl",
  provider: "mt-3 max-w-sm text-balance text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl",
};

const descriptionClasses: Record<AppShowcaseVariant, string> = {
  customer: "text-white/85",
  provider: "text-neutral-900/80",
};

const checkBadgeClasses: Record<AppShowcaseVariant, string> = {
  customer: "bg-white/20 text-white",
  provider: "bg-white/70 text-neutral-900",
};

const ctaClasses: Record<AppShowcaseVariant, string> = {
  customer: "bg-white text-customer-teal-dark hover:bg-white/90",
  provider: "bg-neutral-900 text-provider-yellow hover:bg-neutral-900/90",
};

type PhoneScreens = { left: ReactNode; center: ReactNode; right: ReactNode };

function customerScreens(): PhoneScreens {
  return {
    left: (
      <div className="flex h-full flex-col gap-2 p-3">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/60">
          Recent Services
        </span>
        <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customer-teal/40 text-customer-teal-dark">
            <Droplet className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-medium">Oil Change</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customer-teal/40 text-customer-teal-dark">
            <Disc className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-medium">Tire Change</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customer-teal/40 text-customer-teal-dark">
            <Truck className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-medium">Towing</span>
        </div>
      </div>
    ),
    center: (
      <div className="flex h-full flex-col gap-2 p-3">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/60">
          Where are you going?
        </span>
        <div className="rounded-lg bg-white/10 px-2.5 py-2 text-[10px] text-white/70">
          Search your location
        </div>
        <div className="mt-0.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 rounded-lg bg-white/10 p-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customer-teal/40 text-customer-teal-dark">
              <Truck className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="text-[10px] font-medium">Towing</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/10 p-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customer-teal/40 text-customer-teal-dark">
              <BatteryCharging className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="text-[10px] font-medium">Battery Jump</span>
          </div>
        </div>
        <div className="mt-auto rounded-lg bg-customer-teal-dark py-2 text-center text-[10px] font-semibold">
          Request Service
        </div>
      </div>
    ),
    right: (
      <div className="flex h-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-wide text-white/60">
          <span>Live Tracking</span>
          <Navigation className="h-3 w-3 text-customer-teal" aria-hidden="true" />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-xl bg-customer-teal/15">
          <MapPin
            className="absolute left-[30%] top-[35%] h-4 w-4 -translate-x-1/2 -translate-y-full text-customer-teal-dark"
            fill="currentColor"
            aria-hidden="true"
          />
          <MapPin
            className="absolute left-[68%] top-[62%] h-5 w-5 -translate-x-1/2 -translate-y-full text-customer-teal-dark"
            fill="currentColor"
            aria-hidden="true"
          />
        </div>
        <div className="rounded-lg bg-white/10 p-2">
          <p className="text-[10px] font-semibold">Provider is on the way</p>
          <p className="mt-0.5 text-[9px] text-white/60">Current request in progress</p>
        </div>
      </div>
    ),
  };
}

function providerScreens(): PhoneScreens {
  return {
    left: (
      <div className="flex h-full flex-col gap-2 p-3">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/60">
          Job History
        </span>
        <div className="flex items-center justify-between rounded-lg bg-white/10 p-2">
          <span className="text-[10px] font-medium">Car Wash</span>
          <span className="text-[9px] text-white/50">Completed</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/10 p-2">
          <span className="text-[10px] font-medium">Tire Change</span>
          <span className="text-[9px] text-white/50">Completed</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/10 p-2">
          <span className="text-[10px] font-medium">Fuel Delivery</span>
          <span className="text-[9px] text-white/50">Completed</span>
        </div>
      </div>
    ),
    center: (
      <div className="flex h-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-wide text-white/60">
          <span>New Request</span>
          <Bell className="h-3 w-3 text-provider-yellow" aria-hidden="true" />
        </div>
        <div className="rounded-xl bg-white/10 p-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-provider-yellow/25 text-provider-yellow">
              <Wrench className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="text-[10px] font-semibold">Car Wash Request</p>
          </div>
        </div>
        <div className="mt-auto flex gap-1.5">
          <div className="flex-1 rounded-lg bg-white/10 py-1.5 text-center text-[10px] font-semibold">
            Decline
          </div>
          <div className="flex-1 rounded-lg bg-provider-yellow py-1.5 text-center text-[10px] font-semibold text-neutral-900">
            Accept
          </div>
        </div>
      </div>
    ),
    right: (
      <div className="flex h-full flex-col gap-2 p-3">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-white/60">
          Earnings Overview
        </span>
        <div className="flex flex-1 items-end gap-1.5 rounded-xl bg-white/5 p-2.5">
          {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-provider-yellow"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    ),
  };
}

const screensByVariant: Record<AppShowcaseVariant, () => PhoneScreens> = {
  customer: customerScreens,
  provider: providerScreens,
};

export default function AppShowcaseSection() {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2">
        {appShowcasePanels.map((panel) => {
          const { left, center, right } = screensByVariant[panel.variant]();

          return (
            <div
              key={panel.id}
              id={panel.id}
              className={`scroll-mt-20 grid min-h-117.5 items-center gap-8 px-6 py-12 sm:px-8 lg:px-10 xl:px-12 md:grid-cols-[0.9fr_1.1fr] ${panelClasses[panel.variant]}`}
            >
              <div className="mx-auto flex w-full flex-col md:mx-0">
                <span className={eyebrowClasses[panel.variant]}>{panel.eyebrow}</span>
                <h2 className={headingClasses[panel.variant]}>{panel.heading}</h2>
                <p className={`mt-4 max-w-sm text-base leading-7 ${descriptionClasses[panel.variant]}`}>
                  {panel.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {panel.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium sm:text-base">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${checkBadgeClasses[panel.variant]}`}
                      >
                        <CircleCheck className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#how-it-works"
                  className={`mt-8 inline-flex w-fit min-h-10.5 items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange ${ctaClasses[panel.variant]}`}
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="relative mx-auto h-70 w-full max-w-85 sm:h-80 sm:max-w-92.5 md:h-90 md:max-w-97.5">
                <div className="absolute left-0 top-8 w-30 -rotate-3 scale-90 drop-shadow-2xl sm:top-10 sm:w-33.75 md:top-12 md:w-38.75">
                  <PhoneMockup variant={panel.variant}>{left}</PhoneMockup>
                </div>
                <div className="absolute left-1/2 top-0 z-20 w-37.5 -translate-x-1/2 drop-shadow-2xl sm:w-42.5 md:w-47.5">
                  <PhoneMockup variant={panel.variant}>{center}</PhoneMockup>
                </div>
                <div className="absolute right-0 top-8 w-30 rotate-3 scale-90 drop-shadow-2xl sm:top-10 sm:w-33.75 md:top-12 md:w-38.75">
                  <PhoneMockup variant={panel.variant}>{right}</PhoneMockup>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
