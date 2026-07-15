import type { ReactNode } from "react";

export type SectionHeadingProps = {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-roadhero-orange">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {heading}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
