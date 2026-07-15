import Image from "next/image";
import {
  BellRing,
  Clock3,
  HandCoins,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";
import {
  providerBenefits,
  type ProviderBenefitIconName,
} from "@/data/providerBenefits";

const iconMap: Record<ProviderBenefitIconName, LucideIcon> = {
  "flexible-hours": Clock3,
  "instant-notifications": BellRing,
  "weekly-payouts": HandCoins,
  "grow-business": TrendingUp,
};

export default function BecomeProviderSection() {
  return (
    <section
      id="providers"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF8EE]"
    >
      <div className="mx-auto w-full max-w-375 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1fr_1.3fr_0.75fr] lg:gap-8 lg:py-16 xl:gap-12">
          {/* Provider image */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative aspect-3/2 w-full max-w-sm sm:max-w-md lg:max-w-none">
              <Image
                src="/images/providers/provider-recruitment-v2.png"
                alt="RoadHero roadside service provider standing beside a yellow tow truck"
                fill
                sizes="(max-width: 1024px) 400px, 30vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Become a RoadHero Provider
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg lg:mx-0">
              Join RoadHero as a roadside service provider and connect with
              drivers who need reliable vehicle assistance.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:gap-x-8">
              {providerBenefits.map((benefit) => {
                const Icon = iconMap[benefit.icon];

                return (
                  <div
                    key={benefit.title}
                    className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-provider-yellow-deep/30 bg-white text-provider-yellow-deep shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="mt-2 max-w-37.5 text-xs font-medium leading-5 text-neutral-900">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="order-3 flex flex-col items-center justify-center self-center text-center">
            <Button
              href="#contact"
              variant="primary"
              className="min-h-12 min-w-45 justify-center px-8 text-base font-semibold"
            >
              Join RoadHero
            </Button>

            <p className="mt-4 max-w-52.5 text-sm leading-5 text-neutral-500">
              Provider registration details coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
