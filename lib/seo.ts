/* ------------------------------------------------------------------ */
/* Central SEO configuration (SEO.md §2, §9, §25)                       */
/*                                                                      */
/* One source of truth for the production domain, metadata copy and     */
/* deployment detection. Canonical / OG / sitemap / robots all read     */
/* from here so they can never drift apart.                             */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://vivekpatil.me";

export const siteConfig = {
  name: "Vivek Patil",
  url: SITE_URL,
  title: "Vivek Patil - Software Developer",
  description:
    "Vivek Patil is a software developer and Software Developer Intern at Veltos AI, Pune, working on NestJS, Next.js, AWS, DynamoDB and Redis for real-time platforms.",
  author: "Vivek Patil",
  jobTitle: "Software Developer",
  /* Real profiles only — mirrors LINKS in app/page.tsx. */
  sameAs: [
    "https://github.com/vivekjpatil1357",
    "https://linkedin.com/in/vivekjpatil1357",
  ],
  /* public/me.JPG — declared at its true intrinsic size (2077x2542). */
  image: {
    url: "/me.JPG",
    width: 2077,
    height: 2542,
    alt: "Vivek Patil - Software Developer",
  },
} as const;

/**
 * Vercel sets VERCEL_ENV to "production" | "preview" | "development".
 * Locally it is unset, so we default to production — a local `npm run build`
 * then matches what ships. Previews get noindex + a disallowed robots.
 */
export const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

/* ------------------------------------------------------------------ */
/* JSON-LD (SEO.md §12 Person, §13 WebSite)                             */
/* Server-rendered into <body>; no client JS, no invented information.  */
/* ------------------------------------------------------------------ */

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.jobTitle,
  sameAs: siteConfig.sameAs,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

/** Both graphs as one script payload. */
export const jsonLd = [personJsonLd, websiteJsonLd];
