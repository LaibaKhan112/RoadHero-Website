import Image from "next/image";
import { Smartphone } from "lucide-react";
import Button from "@/components/ui/Button";

const badgeFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate w-full min-h-180 overflow-hidden"
    >
      {/* Background photo — full-bleed, no max-width/centering wrapper */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Image
          src="/images/hero/hero.png"
          alt="RoadHero customer and provider apps guiding a driver on a city road at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Strongest on the left so text stays readable; fades out so the car and phones stay visible on the right */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/55 to-black/5" />

      <div className="relative z-10 mx-auto flex min-h-165 w-full max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col items-start gap-6 text-left text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block">Fast, Reliable</span>
              <span className="block text-customer-teal">Roadside Assistance</span>
              <span className="block">Whenever You Need It</span>
            </h1>
            <p className="max-w-xl text-lg text-neutral-300">
              RoadHero connects drivers with nearby roadside service providers
              for fast, convenient, and dependable roadside support.
            </p>

            {/*
              The Customer/Provider apps aren't live yet, so these are styled
              as muted "coming soon" badges rather than real App Store / Google
              Play links — clicking either takes the visitor to #download.
            */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className={`flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-left backdrop-blur-sm transition-colors hover:bg-white/10 ${badgeFocusRing}`}
              >
                <Smartphone className="h-6 w-6 shrink-0 text-customer-teal" aria-hidden="true" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] uppercase tracking-wide text-neutral-400">
                    Coming Soon
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Customer App
                  </span>
                </span>
              </a>
              <a
                href="#download"
                className={`flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-left backdrop-blur-sm transition-colors hover:bg-white/10 ${badgeFocusRing}`}
              >
                <Smartphone className="h-6 w-6 shrink-0 text-provider-yellow" aria-hidden="true" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] uppercase tracking-wide text-neutral-400">
                    Coming Soon
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Provider App
                  </span>
                </span>
              </a>
            </div>

            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
