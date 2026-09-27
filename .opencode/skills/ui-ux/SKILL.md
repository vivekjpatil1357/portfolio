---
name: design
description: "Comprehensive design skill: brand identity, design tokens, UI styling, logo design (55 styles), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.js), banner design (22 styles, social/ads/web/print), icon design (15 styles, SVG authored directly), social photos (HTML→screenshot, multi-platform). No image API is called: when a raster image is needed the agent writes a ready-to-paste prompt, the user generates it with their own tool and drops the file into the project's public/ folder. Actions: design logo, create CIP, generate mockups, build slides, design banner, generate icon, create social photos, social media images, brand identity, design system. Platforms: Facebook, Twitter, LinkedIn, YouTube, Instagram, Pinterest, TikTok, Threads, Google Ads."
argument-hint: "[design-type] [context]"
license: MIT
metadata:
  author: claudekit
  version: "2.1.0"
---

# Design

Unified design skill: brand, tokens, UI, logo, CIP, slides, banners, social photos, icons.

No image-generation API is used. The agent writes the prompt, the user makes the image.

## When to Use

- Brand identity, voice, assets
- Design system tokens and specs
- UI styling with shadcn/ui + Tailwind
- Logo design (agent writes the prompt, you make the image)
- Corporate identity program (CIP) deliverables
- Presentations and pitch decks
- Banner design for social media, ads, web, print
- Social photos for Instagram, Facebook, LinkedIn, Twitter, Pinterest, TikTok

## Sub-skill Routing

| Task | Sub-skill | Details |
|------|-----------|---------|
| Brand identity, voice, assets | `brand` | Not bundled — work directly in the project |
| Tokens, specs, CSS vars | `design-system` | Not bundled — work directly in the project |
| shadcn/ui, Tailwind, code | `ui-styling` | Not bundled — work directly in the project |
| Logo creation, image prompt | Logo (built-in) | `references/logo-design.md` |
| CIP mockups, deliverables | CIP (built-in) | `references/cip-design.md` |
| Presentations, pitch decks | Slides (built-in) | `references/slides.md` |
| Banners, covers, headers | Banner (built-in) | `references/banner-sizes-and-styles.md` |
| Social media images/photos | Social Photos (built-in) | `references/social-photos-design.md` |
| SVG icons, icon sets | Icon (built-in) | `references/icon-design.md` |

`brand`, `design-system`, `ui-styling` and `ui-ux-pro-max` are referenced by
older versions of this skill but are **not present in this folder**. Do not try
to load them — use the tables and references bundled here instead.

## Script Paths

Script paths in this skill and its `references/` are relative to the directory that contains this SKILL.md, not to the project: `scripts/<file>` is this skill's own `scripts/` folder — there are no sibling sub-skills to reach with `../`. Build the full path from that directory (Claude Code reports it as the skill's base directory when the skill loads) and keep the working directory at the project root — the scripts read and write project files such as `docs/brand-guidelines.md`, `assets/design-tokens.json` or `src/` relative to it.

## Image Requests (No API Keys)

**This skill contains no image-generation code at all** — no API call, no SDK,
no key. When a raster image is required (logo, CIP mockup, banner art, social
photo), the agent writes a complete prompt and hands it to the user. The user
generates the image with whatever tool they like and saves it into the
project's `public/` folder. Only then does work continue.

### Image Requests: Folder Convention

All paths are relative to the **project root** (the working directory), never
to the skill directory:

```text
public/
├── logos/      brand-logo.png
├── cip/        cip-business-card.png, cip-letterhead.png ...
├── banners/    banner-twitter-header.png ...
├── social/     ig-post-01.png, yt-thumb-01.png ...
└── icons/      only for icons too complex to author as SVG
```

Create missing folders (`mkdir -p public/logos`) before asking for an image.

### Image Requests: Prompt Template

Build every prompt from this skill's own data — the style/color/industry
tables, `scripts/*/search.py` briefs, and the keyword banks in
`references/logo-prompt-engineering.md` and `references/cip-prompt-engineering.md`:

```text
[Asset type] for [brand]:
[Subject and composition]
Style: [style keywords]
Colors: [palette]
Text to include: "[exact wording]" or "no text"
Size: [exact px from the size tables in this skill]
Background: white
Avoid: [negative prompt]
```

Requirements: always state exact pixel dimensions, always state the exact text
that must appear, and always demand a **white background** for logos.

### Image Requests: Workflow

1. **Plan** — gather requirements; run `scripts/*/search.py` for briefs and
   style/industry guidance (fully local, no key).
2. **Prompt** — write the complete prompt with the template above.
3. **Hand off** — show the prompt and ask the user to generate the image (use
   the runtime's question tool when available, otherwise ask in plain text).
4. **Wait** — expected file: `public/<type>/<name>.png`. If it is missing,
   re-send the prompt and stop. **Never fabricate, stub, placeholder or fake an
   asset, and never claim an image was generated.**
5. **Continue** — once the file exists, consume it (CIP `--logo`, deck
   embedding, banner/social compositing) and open it to verify before reporting
   done.

### Image Requests: Who Does What

| The agent produces locally | The user supplies |
|---|---|
| `scripts/*/search.py`, `scripts/*/core.py` (briefs, BM25 search) | Logos → `public/logos/` |
| `scripts/*/generate.py` (prompt builders) / `--list-*` | CIP mockups → `public/cip/` |
| `scripts/cip/render-html.py` (reads local images) | Banner/social photography → `public/banners/`, `public/social/` |
| All HTML/CSS output: slides, banners, social photos, previews | Complex illustrative icons → `public/icons/` |
| SVG icons authored directly by the agent | |

Nothing here needs a key, a package or a network call.

## Logo Design (Built-in)

55+ styles, 30 color palettes, 25 industry guides. Images are produced by the
user from a prompt written here — see `## Image Requests (No API Keys)`.

### Logo: Generate Design Brief

```bash
python3 scripts/logo/search.py "tech startup modern" --design-brief -p "BrandName"
```

### Logo: Search Styles/Colors/Industries

```bash
python3 scripts/logo/search.py "minimalist clean" --domain style
python3 scripts/logo/search.py "tech professional" --domain color
python3 scripts/logo/search.py "healthcare medical" --domain industry
```

### Logo: Request Image From User

**ALWAYS** produce logo images on a white background.

No image API is used. Write the prompt, hand it over, wait for the file:

1. Brief → `python3 scripts/logo/search.py "tech startup modern" --design-brief -p "BrandName"`
2. Compose the prompt — either with the script below, or from the keyword banks
   in `references/logo-prompt-engineering.md`. It must carry style, palette,
   exact wordmark text, `white background`, and
   `avoid: gradients in text, mockup, business card scene`.
3. Show the prompt and ask the user to generate it (question tool if available).
4. Expected file: `public/logos/<brand>-logo.png`. Missing → re-send the prompt
   and wait. **Never fabricate a logo.**
5. Open the file to verify legibility at small sizes before moving on.

Prompt composer (no key needed):

```bash
python3 scripts/logo/generate.py --brand "TechFlow" --style minimalist --industry tech
python3 scripts/logo/generate.py --prompt "coffee shop vintage badge" --style vintage
python3 scripts/logo/generate.py --brand "TechFlow" --batch 9   # 9 variant prompts
```

After the logo lands, **ALWAYS** ask the user whether they want an HTML preview
gallery; if yes, build it with plain HTML/CSS in the project.

## CIP Design (Built-in)

50+ deliverables, 20 styles, 20 industries. Mockup images are produced by the
user from prompts written here — see `## Image Requests (No API Keys)`.

### CIP: Generate Brief

```bash
python3 scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
```

### CIP: Search Domains

```bash
python3 scripts/cip/search.py "business card letterhead" --domain deliverable
python3 scripts/cip/search.py "luxury premium elegant" --domain style
python3 scripts/cip/search.py "hospitality hotel" --domain industry
python3 scripts/cip/search.py "office reception" --domain mockup
```

### CIP: Request Mockup Images From User

One prompt per deliverable, handed over as a single batch, files into `public/cip/`:

1. Brief → `python3 scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"`
2. Pick deliverables → `python3 scripts/cip/search.py "business card letterhead" --domain deliverable`
3. Emit prompts (no key needed):
   `python3 scripts/cip/generate.py --brand "TopGroup" --industry "consulting" --deliverables "business card,letterhead,vehicle"`
   or add `--json` for machine-readable output.
4. Hand the full list to the user at once — not one at a time. Each prompt must
   carry the exact text, brand, style and aspect ratio.
5. Expected files: `public/cip/cip-<deliverable>.png`. Any missing → re-send
   that prompt and wait. **Never fabricate a mockup.**

**Logo:** tell the user to place the real logo from `public/logos/` on the
item. If no logo exists yet, run the Logo section first.

State the export shape for landscape items:

```bash
python3 scripts/cip/generate.py --brand "TopGroup" --industry "consulting" --deliverables "vehicle,signage" --ratio 16:9
```

### CIP: Render HTML Presentation

Runs fully locally against the images already in `public/cip/`:

```bash
python3 scripts/cip/render-html.py --brand "TopGroup" --industry "consulting" --images public/cip
```

**Tip:** If no logo exists, use the Logo Design section above first.

## Slides (Built-in)

Strategic HTML presentations with Chart.js, design tokens, copywriting formulas.

Load `references/slides-create.md` for the creation workflow.

### Slides: Knowledge Base

| Topic | File |
|-------|------|
| Creation Guide | `references/slides-create.md` |
| Layout Patterns | `references/slides-layout-patterns.md` |
| HTML Template | `references/slides-html-template.md` |
| Copywriting | `references/slides-copywriting-formulas.md` |
| Strategies | `references/slides-strategies.md` |

## Banner Design (Built-in)

22 art direction styles across social, ads, web, print. Everything lives in
this bundle: `references/banner-sizes-and-styles.md` for sizes, styles, safe
zones and palette guidance. Banners are built as HTML/CSS first; photographic
or illustrative art is requested from the user into `public/banners/`.

Load `references/banner-sizes-and-styles.md` for complete sizes and styles reference.

### Banner: Workflow

1. **Gather requirements** — purpose, platform, content, brand, style, quantity (ask via the runtime's question tool when available)
2. **Research** — Read `references/banner-sizes-and-styles.md`; pick a style, palette and exact dimensions from its tables
3. **Design** — Build the HTML/CSS banner at exact platform dimensions. Prefer CSS-built visuals (gradients, shapes, type). If the banner needs a photo or illustration, write a prompt per `## Image Requests (No API Keys)`, hand it to the user, and wait for `public/banners/<name>.png`
4. **Export** — Capture the PNG at exact dimensions with the runtime's browser/screenshot capability; if unavailable, deliver the HTML/CSS source and mark PNG export as pending
5. **Present** — Show all options side-by-side, iterate on feedback

### Banner: Quick Size Reference

| Platform | Type | Size (px) |
|----------|------|-----------|
| Facebook | Cover | 820 x 312 |
| Twitter/X | Header | 1500 x 500 |
| LinkedIn | Personal | 1584 x 396 |
| YouTube | Channel art | 2560 x 1440 |
| Instagram | Story | 1080 x 1920 |
| Instagram | Post | 1080 x 1080 |
| Google Ads | Med Rectangle | 300 x 250 |
| Website | Hero | 1920 x 600-1080 |

### Banner: Top Art Styles

| Style | Best For |
|-------|----------|
| Minimalist | SaaS, tech |
| Bold Typography | Announcements |
| Gradient | Modern brands |
| Photo-Based | Lifestyle, e-com |
| Geometric | Tech, fintech |
| Glassmorphism | SaaS, apps |
| Neon/Cyberpunk | Gaming, events |

### Banner: Design Rules

- Safe zones: critical content in central 70-80%
- One CTA per banner, bottom-right, min 44px height
- Max 2 fonts, min 16px body, ≥32px headline
- Text under 20% for ads (Meta penalizes)
- Print: 300 DPI, CMYK, 3-5mm bleed

## Icon Design (Built-in)

15 styles, 12 categories. **Icons are SVG text — author the `.svg` file
yourself.** No API, no prompt hand-off, no waiting.

### Icon: Author the SVG Directly

1. Pick style + category from the tables in `references/icon-design.md`
2. Write the file: `viewBox="0 0 24 24"`, `currentColor` for strokes/fills,
   a `<title>` element for accessibility, and
   `stroke-linecap="round" stroke-linejoin="round"` for outlined styles
3. Save to `public/icons/<name>.svg` (or the project's icon directory)
4. Check it at 16px, 24px and 48px before reporting done

Reference data (local, no key):

```bash
python3 scripts/icon/generate.py --list-styles
python3 scripts/icon/generate.py --list-categories
```

### Icon: Fallback for Complex Art Only

For a mascot or illustration that SVG can't carry, write an image prompt, hand
it to the user, and wait for `public/icons/<name>.png` — see
`## Image Requests (No API Keys)`.

For a complex *SVG*, let the script compose the prompt to paste into an AI chat
(it returns SVG code you then save):

```bash
python3 scripts/icon/generate.py --prompt "settings gear" --style outlined
python3 scripts/icon/generate.py --name "dashboard" --category navigation --style duotone
```

### Icon: Top Styles

| Style | Best For |
|-------|----------|
| outlined | UI interfaces, web apps |
| filled | Mobile apps, nav bars |
| duotone | Marketing, landing pages |
| rounded | Friendly apps, health |
| sharp | Tech, fintech, enterprise |
| flat | Material design, Google-style |
| gradient | Modern brands, SaaS |

**No model required:** SVG is XML text, so the agent writes it. The style and
category tables in `references/icon-design.md` are the spec.

## Social Photos (Built-in)

Multi-platform social image design: HTML/CSS → screenshot export. Screenshot
export runs through Chrome headless, Playwright, or Puppeteer (see the
reference). Any photographic background or illustration is requested from the
user into `public/social/`.

Load `references/social-photos-design.md` for sizes, templates, best practices.

### Social Photos: Workflow

1. **Orchestrate** — Track the steps below with the runtime's native task list; parallel subagents for independent work
2. **Analyze** — Parse prompt: subject, platforms, style, brand context, content elements
3. **Ideate** — 3-5 concepts, present via the runtime's question tool
4. **Design** — Build the HTML per idea × size using brand colors, typography and CSS-built visuals; if a photo or illustration is needed, write a prompt per `## Image Requests (No API Keys)` and wait for `public/social/`
5. **Export** — Chrome headless, Playwright, or Puppeteer screenshot at exact px (2x device scale factor where the tool supports it; see the reference)
6. **Verify** — Open the exported PNGs in an available browser or image viewer and inspect them; fix layout/styling issues and re-export
7. **Report** — Summary to `plans/reports/` with design decisions
8. **Organize** — Sort output files and reports into the project's asset directories

### Social Photos: Key Sizes

| Platform | Size (px) | Platform | Size (px) |
|----------|-----------|----------|-----------|
| IG Post | 1080×1080 | FB Post | 1200×630 |
| IG Story | 1080×1920 | X Post | 1200×675 |
| IG Carousel | 1080×1350 | LinkedIn | 1200×627 |
| YT Thumb | 1280×720 | Pinterest | 1000×1500 |

## Workflows

### Complete Brand Package

1. **Logo** → brief → prompt → user → `public/logos/`
2. **CIP** → `scripts/cip/generate.py` → prompts → user → `public/cip/` → `render-html.py`
3. **Presentation** → Load `references/slides-create.md` → Build pitch deck (embed the real images)

### New Design System

1. **Brand** → Define colors, typography, voice (write `docs/brand-guidelines.md`)
2. **Tokens** → Create semantic token layers (`assets/design-tokens.json`, CSS vars)
3. **Implement** → Configure Tailwind, shadcn/ui in the project code

## References

| Topic | File |
|-------|------|
| Design Routing | `references/design-routing.md` |
| Logo Design Guide | `references/logo-design.md` |
| Logo Styles | `references/logo-style-guide.md` |
| Logo Colors | `references/logo-color-psychology.md` |
| Logo Prompts | `references/logo-prompt-engineering.md` |
| CIP Design Guide | `references/cip-design.md` |
| CIP Deliverables | `references/cip-deliverable-guide.md` |
| CIP Styles | `references/cip-style-guide.md` |
| CIP Prompts | `references/cip-prompt-engineering.md` |
| Slides Create | `references/slides-create.md` |
| Slides Layouts | `references/slides-layout-patterns.md` |
| Slides Template | `references/slides-html-template.md` |
| Slides Copy | `references/slides-copywriting-formulas.md` |
| Slides Strategy | `references/slides-strategies.md` |
| Banner Sizes & Styles | `references/banner-sizes-and-styles.md` |
| Social Photos Guide | `references/social-photos-design.md` |
| Icon Design Guide | `references/icon-design.md` |

## Scripts

All of these are standard-library Python: no key, no package, no network.

| Script | Purpose |
|--------|---------|
| `scripts/logo/search.py` | Search logo styles, colors, industries; build briefs |
| `scripts/logo/generate.py` | Compose the logo prompt to hand to the user |
| `scripts/logo/core.py` | BM25 search engine for logo data |
| `scripts/cip/search.py` | Search CIP deliverables, styles, industries; build briefs |
| `scripts/cip/generate.py` | Compose one mockup prompt per deliverable |
| `scripts/cip/render-html.py` | Render HTML presentation from local CIP images |
| `scripts/cip/core.py` | BM25 search engine for CIP data |
| `scripts/icon/generate.py` | Icon style/category reference data; compose icon prompts |

## Prerequisites

**Python:** This skill uses Python scripts. On Windows, use `python` instead of `python3` (e.g., `python scripts/logo/search.py` instead of `python3 scripts/logo/search.py`).

Check if Python is installed:
```bash
python3 --version || python --version
```

**No API keys.** Never ask the user for an image-generation key, and never
install an image-generation SDK — nothing in this skill can use one. Images are
supplied by the user into `public/` — see `## Image Requests (No API Keys)`.

## Setup

```bash
# Nothing to install: Python + the standard library is all these scripts use.
```

## Integration

**Bundled sub-skills:** none — `brand`, `design-system`, `ui-styling` and
`ui-ux-pro-max` are not part of this folder. Handle those tasks directly with
the references here.

**Image assets:** always `public/` at the project root, per
`## Image Requests (No API Keys)`.
