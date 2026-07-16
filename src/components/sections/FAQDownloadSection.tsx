"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Apple, Minus, Plus, PlayCircle } from "lucide-react";
import ComingSoonModal from "@/components/ui/ComingSoonModal";
import { faqs } from "@/data/faqs";

const storeBadgeFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

export default function FAQDownloadSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const reactId = useId();

  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.4fr]">
          <div id="faq" className="scroll-mt-20">
            <h2 className="text-xl font-bold uppercase tracking-wide text-neutral-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-2 divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-header-${reactId}-${index}`;
                const panelId = `faq-panel-${reactId}-${index}`;

                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-2 py-2 text-left text-sm font-semibold text-neutral-900 transition-colors hover:text-customer-teal-dark sm:text-base"
                    >
                      {faq.question}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="pb-4 pr-10 text-sm leading-6 text-neutral-600"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="download"
            className="relative aspect-3/1 w-full scroll-mt-20 overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/download/roadhero-download-banner.png"
              alt="Download the RoadHero app today — reliable, fast, and safe roadside assistance for the customer and provider apps"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain"
            />

            <div className="absolute bottom-3 left-3 flex gap-2 sm:bottom-6 sm:left-6 sm:gap-3 lg:bottom-8 lg:left-8">
              {/* Apps aren't live yet, so these badges open a "Coming Soon" popup instead of a real store URL. */}
              <button
                type="button"
                onClick={() => setIsComingSoonOpen(true)}
                aria-label="App Store download — coming soon"
                className={`flex items-center gap-1.5 rounded-md bg-black px-2 py-1.5 text-white transition-colors hover:bg-neutral-800 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-2 ${storeBadgeFocusRing}`}
              >
                <Apple className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[6px] sm:text-[9px]">Download on the</span>
                  <span className="text-[9px] font-semibold sm:text-xs">App Store</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setIsComingSoonOpen(true)}
                aria-label="Google Play download — coming soon"
                className={`flex items-center gap-1.5 rounded-md bg-black px-2 py-1.5 text-white transition-colors hover:bg-neutral-800 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-2 ${storeBadgeFocusRing}`}
              >
                <PlayCircle className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[6px] sm:text-[9px]">GET IT ON</span>
                  <span className="text-[9px] font-semibold sm:text-xs">Google Play</span>
                </span>
              </button>
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
