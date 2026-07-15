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

const orangeAccentIcons = new Set<ServiceIconName>(["battery-jump-start", "fuel-delivery"]);

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-14 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          heading="We've Got You Covered"
          description="RoadHero connects drivers with trusted roadside service providers for everyday vehicle assistance and emergency support."
        />

        <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <ServiceCard
                key={service.title}
                variant="compact"
                href={service.href}
                iconAccent={orangeAccentIcons.has(service.icon) ? "orange" : "teal"}
                icon={<Icon className="h-7 w-7" aria-hidden="true" />}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
