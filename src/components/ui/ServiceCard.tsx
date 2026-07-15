import type { ReactNode } from "react";
import Button, { type ButtonVariant } from "./Button";

export type ServiceCardVariant = "default" | "compact";
export type ServiceCardIconAccent = "teal" | "orange";

export type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  href?: string;
  variant?: ServiceCardVariant;
  iconAccent?: ServiceCardIconAccent;
  button?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: ButtonVariant;
  };
  className?: string;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  variant = "default",
  iconAccent = "teal",
  button,
  className = "",
}: ServiceCardProps) {
  const isCompact = variant === "compact";

  const cardClasses = isCompact
    ? `group flex min-h-[145px] flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-roadhero-orange/40 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`
    : `group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-roadhero-orange/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`;

  const iconAccentClasses =
    iconAccent === "orange" ? "bg-roadhero-orange/10 text-roadhero-orange" : "bg-customer-teal/10 text-customer-teal";

  const iconWrapperClasses = isCompact
    ? `flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconAccentClasses} transition-colors duration-200 group-hover:bg-roadhero-orange/10 group-hover:text-roadhero-orange`
    : "flex h-12 w-12 items-center justify-center rounded-xl bg-roadhero-orange/10 text-roadhero-orange";

  const titleClasses = isCompact
    ? "mt-4 line-clamp-2 text-base font-semibold leading-tight text-neutral-900"
    : "text-xl font-semibold text-neutral-900";

  const descriptionClasses = "text-sm text-neutral-600";

  const content = (
    <>
      <div className={iconWrapperClasses}>{icon}</div>
      <h3 className={titleClasses}>{title}</h3>
      {description ? (
        isCompact ? (
          <span className="sr-only">{description}</span>
        ) : (
          <p className={descriptionClasses}>{description}</p>
        )
      ) : null}
      {!isCompact && button ? (
        button.href ? (
          <Button
            href={button.href}
            variant={button.variant ?? "ghost"}
            className="mt-2 self-start px-4 py-2"
          >
            {button.label}
          </Button>
        ) : (
          <Button
            onClick={button.onClick}
            variant={button.variant ?? "ghost"}
            className="mt-2 self-start px-4 py-2"
          >
            {button.label}
          </Button>
        )
      ) : null}
    </>
  );

  if (isCompact && href) {
    return (
      <a href={href} className={`${cardClasses} ${focusRing}`}>
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
