# Icon Design Reference

SVG icon design with 15 styles, 12 categories, multi-size guidance. **Icons are
plain SVG text — the agent authors the `.svg` file directly.** No API, no image
generation. See `SKILL.md → Image Requests (No API Keys)`.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/icon/generate.py` | Icon style/category reference data; compose icon prompts |

## Commands

### List Styles/Categories

```bash
python3 scripts/icon/generate.py --list-styles
python3 scripts/icon/generate.py --list-categories
```

### Author the SVG Yourself

1. Pick a style + category from the tables below
2. Write the file: `viewBox="0 0 24 24"`, `currentColor`, `<title>`,
   `stroke-linecap="round" stroke-linejoin="round"` for outlined styles
3. Save to `public/icons/<name>.svg`
4. Check it at 16px, 24px and 48px before reporting done

### Compose an Icon Prompt (complex SVG only)

For an icon too intricate to author by hand, the script prints a prompt to
paste into an AI chat, which returns the SVG code to save:

```bash
python3 scripts/icon/generate.py --prompt "settings gear" --style outlined
python3 scripts/icon/generate.py --prompt "shopping cart" --style filled --color "#6366F1"
python3 scripts/icon/generate.py --name "dashboard" --category navigation --style duotone
```

## CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `--prompt, -p` | Icon description | required* |
| `--name, -n` | Icon name (for filename) | - |
| `--style, -s` | Icon style (15 options) | - |
| `--category, -c` | Icon category for context | - |
| `--color` | Primary hex color | currentColor |
| `--size` | Display size in px | 24 |
| `--viewbox` | SVG viewBox size | 24 |
| `--output, -o` | Where to save the SVG | `public/icons/<name>.svg` |
| `--list-styles` | Print the style table | - |
| `--list-categories` | Print the category table | - |

\* `--prompt` or `--name` is required.

## Available Styles

| Style | Stroke | Fill | Best For |
|-------|--------|------|----------|
| outlined | 2px | none | UI interfaces, web apps |
| filled | 0 | solid | Mobile apps, nav bars |
| duotone | 0 | dual | Marketing, landing pages |
| thin | 1-1.5px | none | Luxury brands, editorial |
| bold | 3px | none | Headers, hero sections |
| rounded | 2px | none | Friendly apps, health |
| sharp | 2px | none | Tech, fintech, enterprise |
| flat | 0 | solid | Material design, Google-style |
| gradient | 0 | gradient | Modern brands, SaaS |
| glassmorphism | 1px | semi | Modern UI, overlays |
| pixel | 0 | solid | Gaming, retro |
| hand-drawn | varies | none | Artisan, creative |
| isometric | 1-2px | partial | Tech docs, infographics |
| glyph | 0 | solid | System UI, compact |
| animated-ready | 2px | varies | Interactive UI, onboarding |

## Icon Categories

| Category | Icons |
|----------|-------|
| navigation | arrows, menus, home, chevrons |
| action | edit, delete, save, download, upload |
| communication | email, chat, phone, notification |
| media | play, pause, volume, camera |
| file | document, folder, archive, cloud |
| user | person, group, profile, settings |
| commerce | cart, bag, wallet, credit card |
| data | chart, graph, analytics, dashboard |
| development | code, terminal, bug, git, API |
| social | heart, star, bookmark, trophy |
| weather | sun, moon, cloud, rain |
| map | pin, location, compass, globe |

## SVG Best Practices

- **ViewBox**: Use `0 0 24 24` (standard) or `0 0 16 16` (compact)
- **Colors**: Use `currentColor` for CSS inheritance, avoid hardcoded colors
- **Accessibility**: Always include `<title>` element
- **Optimization**: Minimal path nodes, no embedded fonts or raster images
- **Sizing**: Design at 24px, test at 16px and 48px for clarity
- **Stroke**: Use `stroke-linecap="round"` and `stroke-linejoin="round"` for outlined styles

## Why No Model Is Needed

- SVG is XML **text** — it can be written directly, no image API
- The style table above is the spec: stroke width, fill, caps
- Reserve `public/icons/` for raster art only (mascots, illustrations)

## Workflow

1. Choose style → `--style outlined` semantics (see table)
2. Author the SVG → `viewBox="0 0 24 24"`, `currentColor`, `<title>`
3. Save → `public/icons/<name>.svg`
4. Verify → open at 16px, 24px and 48px; simplify if it turns to mush
5. Batch → repeat the pattern on a shared `viewBox` and naming scheme

Fallback for complex illustration: write a prompt, hand it to the user, wait
for `public/icons/<name>.png`.

## Setup

```bash
# Nothing to install: every command here uses only the Python standard library.
```
