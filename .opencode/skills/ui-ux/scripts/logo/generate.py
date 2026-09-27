#!/usr/bin/env python3
"""Compose a logo image prompt for the user to generate with their own tool.

No API key, no third-party packages, no network access: the script prints a
complete prompt (style + industry + brand + aspect ratio) together with the
path to save the result to. The user generates the image with any tool they
like and drops it into ``public/logos/``.

Usage:
    python generate.py --brand "TechFlow" --industry tech --style minimalist
    python generate.py --brand "Unikorn" --batch 9      # 9 variant prompts
    python generate.py --prompt "coffee shop vintage badge" --style vintage
    python generate.py --list-styles
    python generate.py --list-industries
"""

import argparse

# Supported aspect ratios
ASPECT_RATIOS = ["1:1", "16:9", "9:16", "4:3", "3:4"]
DEFAULT_ASPECT_RATIO = "1:1"  # Square is ideal for logos
# Suggested pixel sizes so the user exports at the right shape
ASPECT_RATIO_PIXELS = {
    "1:1": "1024x1024",
    "16:9": "1536x864",
    "9:16": "864x1536",
    "4:3": "1365x1024",
    "3:4": "1024x1365",
}

# Logo-specific prompt template
LOGO_PROMPT_TEMPLATE = """Generate a professional logo image: {prompt}

Style requirements:
- Clean vector-style illustration suitable for a logo
- Simple, scalable design that works at any size
- Clear silhouette and recognizable shape
- Professional quality suitable for business use
- Centered composition on plain white or transparent background
- No text unless specifically requested
- High contrast and clear edges
- Square format, perfectly centered
- Output as a clean, high-quality logo image
"""

STYLE_MODIFIERS = {
    "minimalist": "minimalist, simple geometric shapes, clean lines, lots of white space, single color or limited palette",
    "vintage": "vintage, retro, badge style, distressed texture, heritage feel, warm earth tones",
    "modern": "modern, sleek, gradient colors, tech-forward, innovative feel",
    "luxury": "luxury, elegant, gold accents, refined, premium feel, serif typography",
    "playful": "playful, fun, colorful, friendly, approachable, rounded shapes",
    "corporate": "corporate, professional, trustworthy, stable, conservative colors",
    "organic": "organic, natural, flowing lines, earth tones, sustainable feel",
    "geometric": "geometric, abstract, mathematical precision, symmetrical",
    "hand-drawn": "hand-drawn, artisan, sketch-like, authentic, imperfect lines",
    "3d": "3D, dimensional, depth, shadows, isometric perspective",
    "abstract": "abstract mark, conceptual, symbolic, non-literal representation, artistic interpretation",
    "lettermark": "lettermark, single letter or initials, typographic, monogram style, distinctive character",
    "wordmark": "wordmark, logotype, custom typography, brand name as logo, distinctive lettering",
    "emblem": "emblem, badge, crest style, enclosed design, traditional, authoritative feel",
    "mascot": "mascot, character, friendly face, personified, memorable figure",
    "gradient": "gradient, color transition, vibrant, modern digital feel, smooth color flow",
    "lineart": "line art, single stroke, continuous line, elegant simplicity, wire-frame style",
    "negative-space": "negative space, clever use of white space, hidden meaning, dual imagery, optical illusion",
}

INDUSTRY_PROMPTS = {
    "tech": "technology company, digital, innovative, modern, circuit-like elements",
    "healthcare": "healthcare, medical, caring, trust, cross or heart symbol",
    "finance": "financial services, stable, trustworthy, growth, upward elements",
    "food": "food and beverage, appetizing, warm colors, welcoming",
    "fashion": "fashion brand, elegant, stylish, refined, artistic",
    "fitness": "fitness and sports, dynamic, energetic, powerful, movement",
    "eco": "eco-friendly, sustainable, natural, green, leaf or earth elements",
    "education": "education, knowledge, growth, learning, book or cap symbol",
    "real-estate": "real estate, property, home, roof or building silhouette",
    "creative": "creative agency, artistic, unique, expressive, colorful",
}

# Variant recipes for --batch
BATCH_STYLES = [
    ("minimalist", "Clean, simple geometric shape with minimal details"),
    ("modern", "Sleek gradient with tech-forward aesthetic"),
    ("geometric", "Abstract geometric patterns, mathematical precision"),
    ("gradient", "Vibrant color transitions, modern digital feel"),
    ("abstract", "Conceptual symbolic representation"),
    ("lettermark", "Stylized letter 'U' as monogram"),
    ("negative-space", "Clever use of negative space, hidden meaning"),
    ("lineart", "Single stroke continuous line design"),
    ("3d", "Dimensional design with depth and shadows"),
]

DEFAULT_OUTPUT_HINT = "public/logos/<brand>-logo.png"


def enhance_prompt(base_prompt, style=None, industry=None, brand_name=None):
    """Enhance the logo prompt with style and industry modifiers"""
    prompt_parts = [base_prompt]

    if style and style in STYLE_MODIFIERS:
        prompt_parts.append(STYLE_MODIFIERS[style])

    if industry and industry in INDUSTRY_PROMPTS:
        prompt_parts.append(INDUSTRY_PROMPTS[industry])

    combined = ", ".join(prompt_parts)
    if brand_name:
        combined = f"Logo for '{brand_name}': {combined}"
    return LOGO_PROMPT_TEMPLATE.format(prompt=combined)


def variant_prompts(prompt, count, brand_context=None):
    """One raw prompt per batch variant."""
    variants = []
    for style_key, style_desc in BATCH_STYLES[:count]:
        variant = f"{prompt}, {style_desc}"
        if brand_context:
            variant = f"{brand_context}, {variant}"
        variants.append((style_key, variant))
    return variants


def print_prompt_for_user(full_prompt, aspect_ratio=None, output_hint=None):
    """Print a prompt the user can paste into their own image tool."""
    print("\n--- Prompt (paste into your image tool) ---")
    print(full_prompt.strip())
    print("-------------------------------------------")
    if aspect_ratio:
        pixels = ASPECT_RATIO_PIXELS.get(aspect_ratio)
        if pixels:
            print(f"Size: {pixels} px (aspect ratio {aspect_ratio})")
        else:
            print(f"Aspect ratio: {aspect_ratio}")
    if output_hint:
        print(f"Save the generated image to: {output_hint}")
    print("")


def main():
    parser = argparse.ArgumentParser(
        description="Print a ready-to-paste logo prompt (no API key needed)"
    )
    parser.add_argument("--prompt", "-p", type=str, help="Logo description prompt")
    parser.add_argument("--brand", "-b", type=str, help="Brand name")
    parser.add_argument(
        "--style", "-s", choices=list(STYLE_MODIFIERS.keys()), help="Logo style"
    )
    parser.add_argument(
        "--industry", "-i", choices=list(INDUSTRY_PROMPTS.keys()), help="Industry type"
    )
    parser.add_argument(
        "--output", "-o", type=str, help=f"Where to save the image (default: {DEFAULT_OUTPUT_HINT})"
    )
    parser.add_argument(
        "--batch", type=int, help="Print N variant prompts instead of one"
    )
    parser.add_argument(
        "--brand-context", type=str, help="Additional brand context for prompts"
    )
    parser.add_argument(
        "--aspect-ratio",
        "-r",
        choices=ASPECT_RATIOS,
        default=DEFAULT_ASPECT_RATIO,
        help=f"Image aspect ratio (default: {DEFAULT_ASPECT_RATIO} for logos)",
    )
    parser.add_argument(
        "--list-styles", action="store_true", help="List available styles"
    )
    parser.add_argument(
        "--list-industries", action="store_true", help="List available industries"
    )

    args = parser.parse_args()

    if args.list_styles:
        print("Available styles:")
        for style, desc in STYLE_MODIFIERS.items():
            print(f"  {style}: {desc[:60]}...")
        return

    if args.list_industries:
        print("Available industries:")
        for industry, desc in INDUSTRY_PROMPTS.items():
            print(f"  {industry}: {desc[:60]}...")
        return

    if not args.prompt and not args.brand:
        parser.error("Either --prompt or --brand is required")

    prompt = args.prompt or "professional logo"

    if args.batch:
        for style_key, variant in variant_prompts(prompt, args.batch, args.brand_context):
            print(f"\n[{style_key}]")
            print_prompt_for_user(
                enhance_prompt(variant, style_key, "tech", args.brand),
                args.aspect_ratio,
            )
    else:
        print_prompt_for_user(
            enhance_prompt(prompt, args.style, args.industry, args.brand),
            args.aspect_ratio,
            args.output or DEFAULT_OUTPUT_HINT,
        )


if __name__ == "__main__":
    main()
