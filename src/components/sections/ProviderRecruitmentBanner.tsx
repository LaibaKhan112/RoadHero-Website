"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BellRing,
  Clock3,
  HandCoins,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";
import ComingSoonModal from "@/components/ui/ComingSoonModal";
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

function ProviderBenefitsGrid({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div
      className={
        mobile
          ? "grid w-full grid-cols-2 gap-x-5 gap-y-4"
          : "grid w-full grid-cols-4 gap-x-3 lg:gap-x-5"
      }
    >
      {providerBenefits.map((benefit) => {
        const Icon = iconMap[benefit.icon];

        return (
          <div
            key={benefit.title}
            className="flex min-w-0 flex-col items-center text-center"
          >
            <span
              className={
                mobile
                  ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FF6A00] bg-black/40 text-[#FF6A00]"
                  : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6A00] bg-black/30 text-[#FF6A00] lg:h-10 lg:w-10"
              }
            >
              <Icon
                className={mobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5"}
                aria-hidden="true"
              />
            </span>

            <span
              className={
                mobile
                  ? "mt-2 max-w-[120px] text-xs font-medium leading-4 text-white"
                  : "mt-1.5 max-w-[105px] text-[10px] font-medium leading-tight text-white lg:max-w-[125px] lg:text-xs"
              }
            >
              {benefit.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ProviderHeading({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <h2
      className={
        mobile
          ? "font-bold uppercase leading-[1.05] tracking-tight text-white"
          : "font-bold uppercase leading-[1.05] tracking-tight text-white"
      }
    >
      <span
        className={
          mobile
            ? "block text-2xl sm:text-3xl"
            : "block text-base sm:text-xl lg:text-3xl xl:text-4xl"
        }
      >
        Become a
      </span>

      <span
        className={
          mobile
            ? "mt-1 block text-2xl sm:text-3xl"
            : "mt-1 block text-base sm:text-xl lg:text-3xl xl:text-4xl"
        }
      >
        <span className="text-[#FF6A00]">RoadHero</span>{" "}
        <span>Provider</span>
      </span>
    </h2>
  );
}

export default function ProviderRecruitmentBanner() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  return (
    <section
      id="providers"
      className="relative w-full scroll-mt-20 overflow-hidden bg-black"
    >
      {/* Desktop and tablet */}
      <div className="relative hidden aspect-[1933/814] w-full md:block">
        <Image
          src="/images/provider-banner/provider-banner-desktop.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        <div className="absolute inset-y-0 left-[29%] right-[29%] z-10 flex min-w-0 flex-col items-center justify-center gap-2 px-3 text-center lg:gap-3 xl:left-[30%] xl:right-[30%]">
          <Image
            src="/images/logo/roadhero-logo.png"
            alt="RoadHero"
            width={220}
            height={120}
            className="h-10 w-auto object-contain sm:h-12 lg:h-20 xl:h-24"
          />

          <ProviderHeading />

          <div className="h-0.5 w-16 rounded-full bg-[#FF6A00] lg:w-20" />

          <p className="hidden max-w-md text-[10px] leading-snug text-white/85 sm:block sm:text-xs lg:text-sm">
            Join RoadHero as a service provider and connect with drivers who
            need reliable roadside assistance.
          </p>

          <div className="w-full max-w-xl">
            <ProviderBenefitsGrid />
          </div>

          <Button
            onClick={() => setIsComingSoonOpen(true)}
            variant="primary"
            className="min-h-8 min-w-28 justify-center rounded-lg bg-[#FF6A00] px-4 text-xs font-semibold uppercase text-white hover:bg-[#E85F00] sm:min-h-9 sm:min-w-32 sm:text-sm lg:min-h-11 lg:min-w-44 lg:px-7 lg:text-base"
          >
            Join RoadHero
          </Button>
        </div>
      </div>

      {/* Mobile */}
<div className="relative w-full bg-black md:hidden">
  <div className="relative aspect-[1091/1441] w-full overflow-hidden">
    <Image
      src="/images/provider-banner/provider-banner-mobile.png"
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-top"
      aria-hidden="true"
    />

    {/* Content overlay */}
    <div className="absolute inset-0 z-10">
      <div className="absolute left-1/2 top-[10%] flex w-[88%] max-w-sm -translate-x-1/2 flex-col items-center text-center">
        <Image
          src="/images/logo/roadhero-logo.png"
          alt="RoadHero"
          width={220}
          height={120}
          className="h-20 w-auto object-contain sm:h-12"
        />

        <div className="mt-3">
          <ProviderHeading mobile />
        </div>

        <div className="mt-3 h-0.5 w-20 rounded-full bg-[#FF6A00]" />

        <p className="mt-3 max-w-xs text-[11px] leading-5 text-white/90 sm:text-sm">
          Join RoadHero as a service provider and connect with drivers who need
          reliable roadside assistance.
        </p>

        <div className="mt-4 w-full">
          <ProviderBenefitsGrid  />
        </div>

        <Button
          onClick={() => setIsComingSoonOpen(true)}
          variant="primary"
          className="mt-5 min-h-10 w-full max-w-[260px] justify-center rounded-xl bg-[#FF6A00] px-6 text-sm font-bold uppercase text-white hover:bg-[#E85F00]"
        >
          Join RoadHero
        </Button>
      </div>
    </div>
  </div>
</div>

      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
      />
    </section>
  );
}