"use client";

import { useState } from "react";

/* nav-bar-overlay — fixed top nav, transparent over the black canvas.
   Background {colors.canvas-night}, text {colors.on-primary},
   items {typography.button-cap} / {typography.micro-cap} (uppercase).
   Collapses to a hamburger below 768px (menu keeps the dark treatment). */

const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const ALL_ITEMS = [
  ...NAV_ITEMS.slice(0, 4),
  { id: "achievements", label: "Achievements" },
  { id: "positions", label: "Responsibility" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function SiteNav({ resumeHref }: { resumeHref: string }) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          className="button-cap text-[15px] text-white"
          aria-label="Back to top"
        >
          Vivek Patil
        </button>

        {/* Desktop nav items */}
        <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="micro-cap text-mute transition-colors duration-150 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={resumeHref}
            download
            className="btn-ghost hidden min-h-[44px] px-6 py-3 text-[12px] lg:inline-flex"
          >
            Download CV
          </a>

          {/* Hamburger — below 768px */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-hairline bg-background lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-transform duration-150 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-5 bg-white ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-white transition-transform duration-150 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu — dark overlay treatment */}
      {open && (
        <nav
          aria-label="Sections"
          className="border-b border-hairline bg-background px-6 pb-6 pt-2 lg:hidden"
        >
          {ALL_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="micro-cap block w-full border-b border-hairline py-3 text-left text-mute transition-colors duration-150 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href={resumeHref}
            download
            className="btn-ghost mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
