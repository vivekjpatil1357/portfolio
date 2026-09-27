#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Icon reference data and ready-to-paste icon prompts.

No API key, no third-party packages: SVG is XML text, so the agent authors the
``.svg`` file directly (see ``references/icon-design.md``). This script prints
the reference tables (``--list-styles`` / ``--list-categories``) and, when
asked for a prompt, a prompt you can paste into an AI chat to produce a more
complex icon into ``public/icons/``.

Usage:
    python generate.py --list-styles
    python generate.py --list-categories
    python generate.py --prompt "settings gear" --style outlined
    python generate.py --name "dashboard" --category navigation --style duotone
"""

import argparse
import re

# Icon styles with SVG-specific instructions
ICON_STYLES = {
    "outlined": "outlined stroke icons, 2px stroke width, no fill, clean open paths",
    "filled": "solid filled icons, no stroke, flat color fills, bold shapes",
    "duotone": "duotone style with primary color at full opacity and secondary color at 30% opacity, layered shapes",
    "thin": "thin line icons, 1px or 1.5px stroke width, delicate minimalist lines",
    "bold": "bold thick line icons, 3px stroke width, heavy weight, impactful",
    "rounded": "rounded icons with round line caps and joins, soft corners, friendly feel",
    "sharp": "sharp angular icons, square line caps and mitered joins, precise edges",
    "flat": "flat design icons, solid fills, no gradients or shadows, geometric simplicity",
    "gradient": "linear or radial gradient fills, modern vibrant color transitions",
    "glassmorphism": "glassmorphism style with semi-transparent fills, blur backdrop effect simulation, frosted glass",
    "pixel": "pixel art style icons on a grid, retro 8-bit aesthetic, crisp edges",
    "hand-drawn": "hand-drawn sketch style, slightly irregular strokes, organic feel, imperfect lines",
    "isometric": "isometric 3D projection, 30-degree angles, dimensional depth",
    "glyph": "simple glyph style, single solid shape, minimal detail, pictogram",
    "animated-ready": "animated-ready SVG with named groups and IDs for CSS/JS animation targets",
}

ICON_CATEGORIES = {
    "navigation": "arrows, menus, hamburger, chevrons, home, back, forward, breadcrumb",
    "action": "edit, delete, save, download, upload, share, copy, paste, print, search",
    "communication": "email, chat, phone, video call, notification, bell, message bubble",
    "media": "play, pause, stop, skip, volume, microphone, camera, image, gallery",
    "file": "document, folder, archive, attachment, cloud, database, storage",
    "user": "person, group, avatar, profile, settings, lock, key, shield",
    "commerce": "cart, bag, wallet, credit card, receipt, tag, gift, store",
    "data": "chart, graph, analytics, dashboard, table, filter, sort, calendar",
    "development": "code, terminal, bug, git, API, server, database, deploy",
    "social": "heart, star, thumbs up, bookmark, flag, trophy, badge, crown",
    "weather": "sun, moon, cloud, rain, snow, wind, thunder, temperature",
    "map": "pin, location, compass, globe, route, directions, map marker",
}

# SVG generation prompt template
SVG_PROMPT_TEMPLATE = """Generate a clean, production-ready SVG icon.

Requirements:
- Output ONLY valid SVG code, nothing else
- ViewBox: "0 0 {viewbox} {viewbox}"
- Use currentColor for strokes/fills (inherits CSS color)
- No embedded fonts or text elements unless specifically requested
- No raster images or external references
- Optimized paths with minimal nodes
- Accessible: include <title> element with icon description
{style_instructions}
{color_instructions}
{size_instructions}

Icon to generate: {prompt}

Output the SVG code only, wrapped in ```svg``` code block."""


def build_icon_prompt(prompt, style=None, category=None, name=None,
                      color=None, size=24, viewbox=24):
    """Build the prompt for one icon."""
    style_instructions = ""
    if style and style in ICON_STYLES:
        style_instructions = f"- Style: {ICON_STYLES[style]}"

    color_instructions = "- Use currentColor for all strokes and fills"
    if color:
        color_instructions = f"- Use color: {color} for primary elements, currentColor for secondary"

    size_instructions = f"- Design for {size}px display size, optimize detail level accordingly"

    icon_prompt = prompt
    if category and category in ICON_CATEGORIES:
        icon_prompt = f"{prompt} (category: {ICON_CATEGORIES[category]})"
    if name:
        icon_prompt = f"'{name}' icon: {icon_prompt}"

    return SVG_PROMPT_TEMPLATE.format(
        prompt=icon_prompt,
        viewbox=viewbox,
        style_instructions=style_instructions,
        color_instructions=color_instructions,
        size_instructions=size_instructions,
    )


def icon_slug(name, prompt):
    base = name or (prompt.split()[0] if prompt else "icon")
    return re.sub(r'[^a-zA-Z0-9_-]', '_', base.lower())


def print_prompt_for_user(full_prompt, output_hint):
    """Print a prompt the user can paste into an AI chat."""
    print("\n--- Prompt (paste into your AI chat) ---")
    print(full_prompt.strip())
    print("-----------------------------------------")
    print(f"Save the generated SVG to: {output_hint}")
    print("")


def main():
    parser = argparse.ArgumentParser(
        description="List icon styles/categories, or print an icon prompt (no API key needed)"
    )
    parser.add_argument("--prompt", "-p", type=str, help="Icon description")
    parser.add_argument("--name", "-n", type=str, help="Icon name (for filename)")
    parser.add_argument("--style", "-s", choices=list(ICON_STYLES.keys()),
                        help="Icon style")
    parser.add_argument("--category", "-c", choices=list(ICON_CATEGORIES.keys()),
                        help="Icon category for context")
    parser.add_argument("--color", type=str,
                        help="Primary color (hex, e.g. #6366F1). Default: currentColor")
    parser.add_argument("--size", type=int, default=24,
                        help="Icon size in px (default: 24)")
    parser.add_argument("--viewbox", type=int, default=24,
                        help="SVG viewBox size (default: 24)")
    parser.add_argument("--output", "-o", type=str,
                        help="Where to save the SVG (default: public/icons/<name>.svg)")
    parser.add_argument("--list-styles", action="store_true",
                        help="List available icon styles")
    parser.add_argument("--list-categories", action="store_true",
                        help="List available icon categories")

    args = parser.parse_args()

    if args.list_styles:
        print("Available icon styles:")
        for style, desc in ICON_STYLES.items():
            print(f"  {style}: {desc[:70]}...")
        return

    if args.list_categories:
        print("Available icon categories:")
        for cat, desc in ICON_CATEGORIES.items():
            print(f"  {cat}: {desc}")
        return

    if not args.prompt and not args.name:
        parser.error("Either --prompt or --name is required")

    prompt = args.prompt or args.name
    style_suffix = f"_{args.style}" if args.style else ""
    output_hint = args.output or f"public/icons/{icon_slug(args.name, prompt)}{style_suffix}.svg"

    print_prompt_for_user(
        build_icon_prompt(
            prompt=prompt,
            style=args.style,
            category=args.category,
            name=args.name,
            color=args.color,
            size=args.size,
            viewbox=args.viewbox,
        ),
        output_hint,
    )


if __name__ == "__main__":
    main()
