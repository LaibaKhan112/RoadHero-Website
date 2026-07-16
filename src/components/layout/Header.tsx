"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navHref, navItems } from "@/data/navigation";

const HEADER_HEIGHT_PX = 80;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("home");
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const intersecting = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });

        const current = navItems.find((item) => intersecting.get(item.id));
        setActiveId(current ? current.id : null);
      },
      { rootMargin: `-${HEADER_HEIGHT_PX}px 0px -60% 0px`, threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const linkFocusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roadhero-orange";

  // On the homepage, hijack the click for an in-page smooth scroll instead of
  // a full navigation. On any other route, let Link do a real navigation to
  // "/" (or "/#id"), since these section ids don't exist on the current page.
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(event) => handleNavClick(event, "home")}
          className={`flex h-16 w-30 shrink-0 items-center justify-start overflow-hidden ${linkFocusRing}`}
        >
          <Image
            src="/images/logo/roadhero-logo.png"
            alt="RoadHero"
            width={120}
            height={64}
            priority
            className="max-h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) =>
            item.variant === "button" ? (
              <Link
                key={item.id}
                href={navHref(item.id)}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`rounded-full bg-roadhero-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-roadhero-orange/90 ${linkFocusRing}`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.id}
                href={navHref(item.id)}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`relative py-1 text-sm font-medium transition-colors ${linkFocusRing} ${
                  activeId === item.id
                    ? "text-roadhero-orange after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-roadhero-orange"
                    : "text-neutral-200 hover:text-roadhero-orange"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className={`relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${linkFocusRing}`}
        >
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 motion-reduce:transition-none ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 motion-reduce:transition-none ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col gap-2 overflow-y-auto bg-neutral-900 px-6 py-8 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) =>
          item.variant === "button" ? (
            <Link
              key={item.id}
              href={navHref(item.id)}
              onClick={(event) => {
                handleNavClick(event, item.id);
                closeMobileMenu();
              }}
              tabIndex={mobileOpen ? 0 : -1}
              className={`mt-4 rounded-full bg-roadhero-orange px-5 py-3 text-center text-base font-semibold text-white ${linkFocusRing}`}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              key={item.id}
              href={navHref(item.id)}
              onClick={(event) => {
                handleNavClick(event, item.id);
                closeMobileMenu();
              }}
              tabIndex={mobileOpen ? 0 : -1}
              className={`rounded-md px-3 py-3 text-lg font-medium ${linkFocusRing} ${
                activeId === item.id
                  ? "text-roadhero-orange"
                  : "text-neutral-200 hover:text-roadhero-orange"
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </header>
  );
}
