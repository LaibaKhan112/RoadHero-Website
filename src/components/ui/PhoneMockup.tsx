import type { ReactNode } from "react";

export type PhoneMockupVariant = "customer" | "provider";

const accentClasses: Record<PhoneMockupVariant, string> = {
  customer: "ring-customer-teal/50",
  provider: "ring-provider-yellow/50",
};

const buttonAccentClasses: Record<PhoneMockupVariant, string> = {
  customer: "bg-customer-teal-dark",
  provider: "bg-provider-yellow-deep",
};

export type PhoneMockupProps = {
  variant: PhoneMockupVariant;
  children?: ReactNode;
  className?: string;
};

export default function PhoneMockup({
  variant,
  children,
  className = "",
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19.5] w-full max-w-[300px] ${className}`}
    >
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-sm bg-neutral-700" />
      <div className="absolute -left-[3px] top-36 h-14 w-[3px] rounded-l-sm bg-neutral-700" />
      <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-neutral-700" />

      {/* Frame */}
      <div
        className={`relative flex h-full w-full flex-col rounded-[2.5rem] bg-neutral-900 p-3 shadow-2xl ring-4 ${accentClasses[variant]}`}
      >
        {/* Screen */}
        <div className="relative flex-1 overflow-hidden rounded-[1.75rem] bg-app-dark">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
          <div className="h-full w-full overflow-y-auto text-white">{children}</div>
        </div>

        {/* Home indicator */}
        <div
          className={`mx-auto mt-2 h-1 w-24 rounded-full ${buttonAccentClasses[variant]}`}
        />
      </div>
    </div>
  );
}
