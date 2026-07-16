import {
  BatteryCharging,
  Disc,
  Droplet,
  Ellipsis,
  Fuel,
  LockKeyhole,
  SprayCan,
  Truck,
  type LucideIcon,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, type ServiceIconName } from "@/data/services";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  "car-wash": SprayCan,
  "oil-change": Droplet,
  "tire-change": Disc,
  "battery-jump-start": BatteryCharging,
  "fuel-delivery": Fuel,
  "lockout-assistance": LockKeyhole,
  towing: Truck,
  "more-services": Ellipsis,
};

const availableServices = new Set<ServiceIconName>([
  "car-wash",
  "oil-change",
]);

const orangeAccentIcons = new Set<ServiceIconName>([
  "battery-jump-start",
  "fuel-delivery",
]);

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          heading="We've Got You Covered"
          description="RoadHero currently provides professional Car Wash and Oil Change services. Additional roadside services are coming soon."
        />

        <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const isAvailable = availableServices.has(service.icon);

            return (
              <div
                key={service.title}
                className={`relative min-w-0 ${
                  isAvailable ? "" : "opacity-75"
                }`}
              >
                <ServiceCard
                  variant="compact"
                  href={isAvailable ? service.href : undefined}
                  iconAccent={
                    orangeAccentIcons.has(service.icon)
                      ? "orange"
                      : "teal"
                  }
                  icon={
                    <Icon
                      className="h-7 w-7"
                      aria-hidden="true"
                    />
                  }
                  title={service.title}
                  description={service.description}
                />

                {!isAvailable && (
                  <span className="pointer-events-none absolute right-2 top-2 z-10 rounded-full bg-[#FF6A00] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm sm:text-[10px]">
                    Coming Soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}