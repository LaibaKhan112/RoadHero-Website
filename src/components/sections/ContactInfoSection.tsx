import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

const linkFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

// Values below come from the wireframe. Phone, address, email, and social
// profile URLs are all provisional and must be confirmed by the client
// before production launch.
type ContactDetail = {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  ariaLabel?: string;
};

const contactDetails: ContactDetail[] = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (845) 746-8828",
    // Opens a WhatsApp chat rather than starting a phone call.
    href: "https://wa.me/18457468828",
    ariaLabel: "Chat with RoadHero on WhatsApp: +1 (845) 746-8828",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@roadhero.com",
    href: "mailto:info@roadherosapp.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "479 Golf Ct, Valley Stream, NY 11581, USA",
  },
];

// Minimal brand marks — lucide-react no longer ships social/brand icons.
// Swap `href="#contact"` for the real profile URL once each account is live,
// e.g. href: "https://facebook.com/roadhero".
const socialLinks: { name: string; path: string }[] = [
  {
    name: "Facebook",
    path: "M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.35C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.45-4 4.1V10.5H7.5v3H10V21h3.5Z",
  },
  {
    name: "Instagram",
    path: "M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm0 5.75A2.25 2.25 0 1 1 12 9.75a2.25 2.25 0 0 1 0 4.5ZM16.1 6.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM12 4.7c2.14 0 2.39.01 3.24.05.78.03 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.27 1.48.04.85.05 1.1.05 3.24s-.01 2.39-.05 3.24c-.03.78-.16 1.2-.27 1.48a2.47 2.47 0 0 1-.6.92 2.47 2.47 0 0 1-.92.6c-.28.11-.7.24-1.48.27-.85.04-1.1.05-3.24.05s-2.39-.01-3.24-.05c-.78-.03-1.2-.16-1.48-.27a2.47 2.47 0 0 1-.92-.6 2.47 2.47 0 0 1-.6-.92c-.11-.28-.24-.7-.27-1.48C4.71 14.39 4.7 14.14 4.7 12s.01-2.39.05-3.24c.03-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.48-.27C9.61 4.71 9.86 4.7 12 4.7ZM12 3c-2.17 0-2.45.01-3.3.05-.85.04-1.43.17-1.94.37-.53.2-.98.48-1.42.92-.44.44-.72.89-.92 1.42-.2.51-.33 1.09-.37 1.94C3.01 8.55 3 8.83 3 11s.01 2.45.05 3.3c.04.85.17 1.43.37 1.94.2.53.48.98.92 1.42.44.44.89.72 1.42.92.51.2 1.09.33 1.94.37.85.04 1.13.05 3.3.05s2.45-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37.53-.2.98-.48 1.42-.92.44-.44.72-.89.92-1.42.2-.51.33-1.09.37-1.94.04-.85.05-1.13.05-3.3s-.01-2.45-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.92-1.42 3.9 3.9 0 0 0-1.42-.92c-.51-.2-1.09-.33-1.94-.37C14.45 3.01 14.17 3 12 3Z",
  },
  {
    name: "X / Twitter",
    path: "M20 6.6c-.55.25-1.14.42-1.76.5a3.05 3.05 0 0 0 1.35-1.7c-.6.35-1.26.6-1.96.75A3.08 3.08 0 0 0 12.14 9a8.75 8.75 0 0 1-6.35-3.2 3.06 3.06 0 0 0 .96 4.1 3.03 3.03 0 0 1-1.4-.38v.04c0 1.5 1.07 2.75 2.5 3.03-.45.12-.92.14-1.38.05.39 1.22 1.52 2.1 2.87 2.13A6.18 6.18 0 0 1 4 16.4a8.72 8.72 0 0 0 4.72 1.38c5.66 0 8.76-4.69 8.76-8.76l-.01-.4c.6-.43 1.12-.98 1.53-1.6Z",
  },
  {
    name: "LinkedIn",
    path: "M6.94 8.5H4.06V19h2.88V8.5ZM5.5 4.2A1.67 1.67 0 1 0 5.5 7.53 1.67 1.67 0 0 0 5.5 4.2ZM19.94 19h-2.87v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H10.2V8.5h2.75v1.43h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.92 3.45 4.4V19Z",
  },
  {
    name: "YouTube",
    path: "M21.5 8.2s-.2-1.5-.83-2.15c-.79-.85-1.68-.85-2.08-.9C15.8 5 12 5 12 5h-.01s-3.8 0-6.59.15c-.4.05-1.29.05-2.08.9C2.7 6.7 2.5 8.2 2.5 8.2S2.3 9.94 2.3 11.68v1.63c0 1.74.2 3.48.2 3.48s.2 1.5.83 2.15c.79.85 1.83.83 2.29.92 1.66.17 7.05.22 7.05.22s3.8-.01 6.6-.16c.4-.05 1.29-.05 2.08-.9.63-.65.83-2.15.83-2.15s.2-1.74.2-3.48v-1.63c0-1.74-.2-3.48-.2-3.48ZM9.9 14.98V8.9l5.4 3.05-5.4 3.03Z",
  },
];

const iconCircle =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-customer-teal/40 text-customer-teal-dark";

export default function ContactInfoSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-neutral-200 bg-white py-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-xs font-bold uppercase tracking-[0.16em] text-neutral-900">
          Contact Us
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.title} className="flex min-w-0 items-start gap-3">
                <span className={iconCircle}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-900">
                    {detail.title}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      aria-label={detail.ariaLabel}
                      {...(detail.href.startsWith("https://")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`text-sm text-neutral-500 transition-colors hover:text-roadhero-orange ${linkFocusRing}`}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-500">{detail.value}</p>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex min-w-0 items-start gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-900">Follow Us</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#contact"
                    aria-label={`${social.name} — coming soon`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-customer-teal/40 text-customer-teal-dark transition-colors hover:bg-customer-teal/10 ${linkFocusRing}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
