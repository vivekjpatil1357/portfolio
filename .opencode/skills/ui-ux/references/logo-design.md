# Logo Design Reference

Logo design with 55+ styles, 30 color palettes, 25 industry guides. **No image
API is called** — the agent writes the prompt, the user makes the image and
saves it to `public/logos/`. See `SKILL.md → Image Requests (No API Keys)`.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/logo/search.py` | Search styles, colors, industries; generate design briefs |
| `scripts/logo/core.py` | BM25 search engine for logo data |
| `scripts/logo/generate.py` | Compose the logo prompt to hand to the user |

## Commands

### Design Brief (Start Here)

```bash
python3 scripts/logo/search.py "tech startup modern" --design-brief -p "BrandName"
```

### Search Domains

```bash
# Styles
python3 scripts/logo/search.py "minimalist clean" --domain style

# Color palettes
python3 scripts/logo/search.py "tech professional" --domain color

# Industry guidelines
python3 scripts/logo/search.py "healthcare medical" --domain industry
```

### Compose the Logo Prompt

**ALWAYS** use white background for output logos.

```bash
python3 scripts/logo/generate.py --brand "TechFlow" --style minimalist --industry tech
python3 scripts/logo/generate.py --prompt "coffee shop vintage badge" --style vintage
python3 scripts/logo/generate.py --brand "TechFlow" --batch 9   # 9 variant prompts
```

Then hand the prompt to the user and wait for `public/logos/<brand>-logo.png`.
Never fabricate a logo. Prompt keywords come from
`references/logo-prompt-engineering.md`.

Options: `--brand`, `--prompt`, `--style`, `--industry`, `--aspect-ratio`,
`--brand-context`, `--batch`, `--output`, `--list-styles`, `--list-industries`

## Available Styles

| Category | Styles |
|----------|--------|
| General | Minimalist, Wordmark, Lettermark, Pictorial Mark, Abstract Mark, Mascot, Emblem, Combination Mark |
| Aesthetic | Vintage/Retro, Art Deco, Luxury, Playful, Corporate, Organic, Neon, Grunge, Watercolor |
| Modern | Gradient, Flat Design, 3D/Isometric, Geometric, Line Art, Duotone, Motion-Ready |
| Clever | Negative Space, Monoline, Split/Fragmented, Responsive/Adaptive |

## Color Psychology

| Color | Psychology | Best For |
|-------|------------|----------|
| Blue | Trust, stability | Finance, tech, healthcare |
| Green | Growth, natural | Eco, wellness, organic |
| Red | Energy, passion | Food, sports, entertainment |
| Gold | Luxury, premium | Fashion, jewelry, hotels |
| Purple | Creative, innovative | Beauty, creative, tech |

## Industry Defaults

| Industry | Style | Colors | Typography |
|----------|-------|--------|------------|
| Tech | Minimalist, Abstract | Blues, purples, gradients | Geometric sans |
| Healthcare | Professional, Line Art | Blues, greens, teals | Clean sans |
| Finance | Corporate, Emblem | Navy, gold | Serif or clean sans |
| Food | Vintage Badge, Mascot | Warm reds, oranges | Friendly, script |
| Fashion | Wordmark, Luxury | Black, gold, white | Elegant serif |

## Workflow

1. Generate design brief → `scripts/logo/search.py --design-brief`
2. Compose the prompt → `scripts/logo/generate.py` (or write it from the keyword banks)
3. Hand the prompt to the user → wait for `public/logos/<brand>-logo.png`
4. Open the file and verify it (white background, legible at 16px)
5. Ask the user whether they want an HTML preview gallery; if yes, build it with plain HTML/CSS

## Detailed References

- `references/logo-style-guide.md` - Detailed style descriptions
- `references/logo-color-psychology.md` - Color meanings and combinations
- `references/logo-prompt-engineering.md` - Prompt keywords to hand to the user

## Setup

```bash
# Nothing to install: every script here uses only the Python standard library.
```
