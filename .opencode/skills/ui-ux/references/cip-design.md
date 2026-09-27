# CIP Design Reference

Corporate Identity Program design with 50+ deliverables, 20 styles, 20 industries. **No image API is called** — the agent writes one prompt per deliverable, the user makes the images and saves them to `public/cip/`. See `SKILL.md → Image Requests (No API Keys)`.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/cip/search.py` | Search deliverables, styles, industries; generate CIP briefs |
| `scripts/cip/generate.py` | Compose one mockup prompt per deliverable |
| `scripts/cip/render-html.py` | Render HTML presentation from local mockup images |
| `scripts/cip/core.py` | BM25 search engine for CIP data |

## Commands

### CIP Brief (Start Here)

```bash
python3 scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
```

### Search Domains

```bash
# Deliverables
python3 scripts/cip/search.py "business card letterhead" --domain deliverable

# Design styles
python3 scripts/cip/search.py "luxury premium elegant" --domain style

# Industry guidelines
python3 scripts/cip/search.py "hospitality hotel" --domain industry

# Mockup contexts
python3 scripts/cip/search.py "office reception" --domain mockup
```

### Compose the Mockup Prompts

Print the prompts, then hand the whole batch to the user:

```bash
# Single deliverable
python3 scripts/cip/generate.py --brand "TopGroup" --industry "consulting" --deliverable "business card"

# Full CIP set as machine-readable JSON
python3 scripts/cip/generate.py --brand "TopGroup" --industry "consulting" --set --json

# Landscape deliverables
python3 scripts/cip/generate.py --brand "GreenLeaf" --industry "organic food" --deliverables "vehicle,signage" --ratio 16:9
```

Tell the user to include the real logo from `public/logos/` on each item and to
save the results as `public/cip/cip-<deliverable>.png`. Any file still missing
→ re-send that prompt. **Never fabricate a mockup.**

### Reference the Real Logo

With `--logo` pointing at an existing file, every prompt instructs the tool to
reuse that logo exactly instead of inventing one:

```bash
python3 scripts/cip/generate.py --brand "TopGroup" --logo public/logos/topgroup-logo.png --set
```

### Render HTML Presentation

Runs locally against the images already in `public/cip/`:

```bash
python3 scripts/cip/render-html.py --brand "TopGroup" --industry "consulting" --images public/cip
python3 scripts/cip/render-html.py --brand "TopGroup" --industry "consulting" --images public/cip --output presentation.html
```

## Aspect Ratios

Every prompt already carries the deliverable's real size (A4, 3.5 x 2 in, …)
from the deliverable table. Pass `--ratio` to also state the export shape —
`16:9` for signage, vehicles and backdrops, `4:3`, `3:4` or `1:1` otherwise.

## Deliverable Categories

| Category | Items |
|----------|-------|
| Core Identity | Logo, Logo Variations |
| Stationery | Business Card, Letterhead, Envelope, Folder, Notebook, Pen |
| Security/Access | ID Badge, Lanyard, Access Card |
| Office Environment | Reception Signage, Wayfinding, Meeting Room Signs, Wall Graphics |
| Apparel | Polo Shirt, T-Shirt, Cap, Jacket, Apron |
| Promotional | Tote Bag, Gift Box, USB Drive, Water Bottle, Mug, Umbrella |
| Vehicle | Car Sedan, Van, Truck |
| Digital | Social Media, Email Signature, PowerPoint, Document Templates |
| Product | Packaging Box, Labels, Tags, Retail Display |
| Events | Trade Show Booth, Banner Stand, Table Cover, Backdrop |

## Design Styles

| Style | Colors | Best For |
|-------|--------|----------|
| Corporate Minimal | Navy, White, Blue | Finance, Legal, Consulting |
| Modern Tech | Purple, Cyan, Green | Tech, Startups, SaaS |
| Luxury Premium | Black, Gold, White | Fashion, Jewelry, Hotels |
| Warm Organic | Brown, Green, Cream | Food, Organic, Artisan |
| Bold Dynamic | Red, Orange, Black | Sports, Entertainment |

## HTML Presentation Features

- Hero section with brand name, industry, style, mood
- Deliverable cards with mockup images
- Descriptions: concept, purpose, specifications
- Responsive desktop/mobile, dark theme
- Images embedded as base64 (single-file portable)

## Workflow

1. Generate CIP brief → `scripts/cip/search.py --cip-brief`
2. Compose prompts → `scripts/cip/generate.py --brand --industry --set`
3. Hand the batch to the user → wait for `public/cip/*.png`
4. Render HTML presentation → `scripts/cip/render-html.py --brand --industry --images public/cip`

**Tip:** If no logo exists, use Logo Design (built-in) to get one into `public/logos/` first.

## Detailed References

- `references/cip-deliverable-guide.md` - Deliverable specifications
- `references/cip-style-guide.md` - Design style descriptions
- `references/cip-prompt-engineering.md` - Prompt building blocks to hand to the user

## Setup

```bash
# Nothing to install: every script here uses only the Python standard library.
```
