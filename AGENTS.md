# AGENTS.md

Single-package Next.js 15 portfolio site (App Router, React 19, TypeScript strict, Tailwind v4). Not a monorepo; no tests, no lint script, no CI.

## Commands

```bash
npm run dev      # next dev --turbopack  -> http://localhost:3000
npm run build    # next build --turbopack
npx tsc --noEmit # the only typecheck; there is no `lint`/`test`/`typecheck` script
```

Verify changes with `npx tsc --noEmit` then `npm run build`. Do not invent lint/test commands — ESLint is not installed (existing `eslint-disable` comments are leftovers).

## Design system

The site follows **`DESIGN.md`** (root): monochrome dark, zero accent colors, flat (no shadows / gradients / blurs), uppercase display type with positive tracking, 1px `#3a3a3f` hairlines, ghost-outline pill CTAs, and **no decorative motion**. Tokens and the type scale live in `app/globals.css` (`@theme inline` + component classes `.display-xxl` / `.display-xl` / `.display-lg` / `.display-md` / `.body-lg` / `.body-md` / `.button-cap` / `.micro-cap` / `.caption`, plus `.btn-ghost`, `.link`, `.surface`, `.chip`, `.band`, `.wrap`). Read `DESIGN.md` before adding any color, radius, shadow, or animation.

## Structure

- `app/page.tsx` — the entire site as a **server component**: all content arrays (experience, projects, skills, education, achievements, certifications) and all section markup. No GSAP, no `useEffect`, no client state.
- `components/site-nav.tsx` — the only client component: fixed overlay top nav + hamburger menu below 768px.
- `app/layout.tsx` — metadata (site is `https://vivekpatil.me`) and the Inter font (`--font-inter`), the DESIGN.md-sanctioned substitute for D-DIN.
- `lib/utils.ts` (`cn()`), `components.json` — shadcn leftovers, currently unused but kept so `npx shadcn@latest add <component>` still works. Path alias `@/*` maps to the repo root (tsconfig `paths`).

## Gotchas

- **The site is intentionally static.** No animation library is installed (gsap, motion, lucide-react, ogl were removed). Do not add one — and do not add CSS keyframes, marquees, or transitions longer than ~150ms — without a request that overrides `DESIGN.md`.
- **Section ids are shared contract:** `app/page.tsx` sections must match the ids in `components/site-nav.tsx` (`NAV_ITEMS` / `ALL_ITEMS`) or the nav silently scrolls nowhere: `home`, `experience`, `projects`, `skills`, `education`, `achievements`, `positions`, `certifications`, `contact`.
- **Fixed nav clearance:** nav height is ~72px; `scroll-padding-top: 7rem` in `globals.css` keeps anchors from hiding under it. The hero band carries its own `pt-32`+ for the same reason.
- **Tailwind v4 has no `tailwind.config`.** Theme tokens live in `app/globals.css` under `@theme inline` (`--color-background`, `--color-foreground`, `--color-mute`, `--color-hairline`, `--color-soft`, `--font-sans`).
- **Display sizes stair-step** in `globals.css` media queries (80 → 60 → 48 → 40). Changing a tier class changes every heading on the site.
- Resume is `public/VivekPatilResume.pdf`, linked as `/VivekPatilResume.pdf` in `app/page.tsx`; renaming the file breaks the Download CV button.
- `gsapdocs.md` at the repo root is a reference cheat sheet only — GSAP is **not** installed.
- `.opencode/skills/ui-ux/` contains a design skill (logo/icon/banner/mockup generation) available to sessions.

## Deploy

Vercel, no deploy config beyond defaults (`next.config.ts` is empty). `.env*` is gitignored; the app currently reads no env vars.
