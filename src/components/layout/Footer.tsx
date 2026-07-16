"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { footerColumns, navHref } from "@/data/navigation";

const linkFocusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // On the homepage, hijack the click for an in-page smooth scroll instead of
  // a full navigation (also covers the case where the hash already matches
  // the current URL, which browsers otherwise treat as a no-op). On any
  // other route, let Link do a real navigation to "/" (or "/#id").
  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== "/") return;

    event.preventDefault();

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) window.history.pushState(null, "", "/");
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            onClick={(event) => handleAnchorClick(event, "home")}
            className={`flex w-fit items-center ${linkFocusRing}`}
          >
            <Image
              src="/images/logo/roadhero-logo.png"
              alt="RoadHero"
              width={1600}
              height={1600}
              className="h-20 w-20 rounded-md"
            />
          </Link>
          <p className="max-w-sm text-sm text-neutral-400">
            RoadHero connects drivers with nearby, trusted roadside
            assistance providers for towing, jump starts, flat tires, fuel
            delivery and lockout help.
          </p>
          <a
            href="mailto:info@roadherosapp.com"
            className={`inline-flex w-fit items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-roadhero-orange ${linkFocusRing}`}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            info@roadherosapp.com
          </a>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
              {column.title}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={navHref(link.id)}
                    onClick={(event) => handleAnchorClick(event, link.id)}
                    className={`text-sm text-neutral-300 transition-colors hover:text-roadhero-orange ${linkFocusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
            Legal
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link
                href="/privacy-policy"
                className={`text-sm text-neutral-300 transition-colors hover:text-roadhero-orange ${linkFocusRing}`}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className={`text-sm text-neutral-300 transition-colors hover:text-roadhero-orange ${linkFocusRing}`}
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-neutral-800 px-6 py-6">
        <p className="mx-auto max-w-6xl text-sm text-neutral-500">
          © {year} RoadHero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
