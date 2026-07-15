import Image from "next/image";
import {
  BadgeCheck,
  Headphones,
  HeartHandshake,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { stats, type StatIconName } from "@/data/stats";

const iconMap: Record<StatIconName, LucideIcon> = {
  providers: UsersRound,
  customers: HeartHandshake,
  "success-rate": BadgeCheck,
  support: Headphones,
};

export default function StatsStripSection() {
  return (
    <section
      aria-label="RoadHero statistics"
      className="relative overflow-hidden bg-customer-teal"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:pr-[320px] xl:pr-[370px]">
        <div className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 sm:gap-y-0 sm:py-9">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />

                <span className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  {stat.value}
                </span>

                <span className="text-sm font-medium text-white sm:text-base">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Image
  src="/images/vehicles/roadhero-car.png"
  alt=""
  width={700}
  height={360}
  aria-hidden="true"
  className="pointer-events-none absolute right-4 top-1/2 z-20 hidden h-auto w-[380px] -translate-y-1/2 select-none object-contain lg:block xl:right-8 xl:w-[450px] 2xl:right-12 2xl:w-[520px]"
/>
    </section>
  );
}