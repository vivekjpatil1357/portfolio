#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Compose CIP mockup prompts for the user to generate with their own tool.

No API key, no third-party packages, no network access: one prompt per
deliverable is printed together with the path to save the result to. Save the
images to ``public/cip/cip-<deliverable>.png`` and ``render-html.py`` builds
the presentation locally.
"""

import argparse
import json
import sys
from pathlib import Path

# Add parent directory for imports
sys.path.insert(0, str(Path(__file__).parent))
from core import search

DEFAULT_DELIVERABLES = ["business card", "letterhead", "office signage", "vehicle", "polo shirt"]


def build_cip_prompt(deliverable, brand_name, style=None, industry=None, mockup=None, use_logo=False):
    """Build an optimized prompt for one CIP mockup

    Args:
        deliverable: Type of deliverable (business card, letterhead, etc.)
        brand_name: Name of the brand
        style: Design style preference
        industry: Industry for style recommendations
        mockup: Mockup context override
        use_logo: If True, instruct the tool to reuse the supplied logo exactly
    """

    # Get deliverable details. Prefer an exact name match: BM25 can rank a row
    # that merely mentions the term (e.g. "letterhead") above the row named after it.
    deliverable_info = search(deliverable, "deliverable", 5)
    deliverable_results = deliverable_info.get("results") or []
    wanted = str(deliverable).strip().lower()
    exact = [
        r for r in deliverable_results
        if str(r.get("Deliverable", "")).strip().lower() == wanted
    ]
    deliverable_data = exact[0] if exact else (deliverable_results[0] if deliverable_results else {})

    # Get style details
    style_info = search(style or "corporate minimal", "style", 1) if style else {}
    style_data = style_info.get("results", [{}])[0] if style_info.get("results") else {}

    # Get industry details
    industry_info = search(industry or "technology", "industry", 1) if industry else {}
    industry_data = industry_info.get("results", [{}])[0] if industry_info.get("results") else {}

    # Get mockup context
    mockup_context = deliverable_data.get("Mockup Context", "clean professional")
    if mockup:
        mockup_info = search(mockup, "mockup", 1)
        if mockup_info.get("results"):
            mockup_data = mockup_info["results"][0]
            mockup_context = mockup_data.get("Scene Description", mockup_context)

    # Build prompt components
    deliverable_name = deliverable_data.get("Deliverable", deliverable)
    description = deliverable_data.get("Description", "")
    dimensions = deliverable_data.get("Dimensions", "")
    logo_placement = deliverable_data.get("Logo Placement", "center")

    style_name = style_data.get("Style Name", style or "corporate")
    primary_colors = style_data.get("Primary Colors", industry_data.get("Primary Colors", "#0F172A #FFFFFF"))
    typography = style_data.get("Typography", industry_data.get("Typography", "clean sans-serif"))
    materials = style_data.get("Materials", "premium quality")
    finishes = style_data.get("Finishes", "professional")

    mood = style_data.get("Mood", industry_data.get("Mood", "professional"))

    # Construct the prompt - different when a logo is supplied as reference
    if use_logo:
        prompt_parts = [
            "Create a professional corporate identity mockup photograph of a " + deliverable_name,
            "Use the EXACT logo image supplied with this prompt - do NOT modify or recreate the logo",
            "The logo MUST appear exactly as supplied",
            f"Place the logo on the {deliverable_name} at: {logo_placement}",
            f"Brand name: '{brand_name}'",
            f"{description}" if description else "",
            f"exact size: {dimensions}" if dimensions else "",
            f"Design style: {style_name}",
            "Color scheme matching the logo colors",
            f"Materials: {materials} with {finishes} finish",
            f"Setting: {mockup_context}",
            f"Mood: {mood}",
            "Photorealistic product photography",
            "Soft natural lighting, professional studio quality",
            "8K resolution, sharp details"
        ]
    else:
        prompt_parts = [
            "Professional corporate identity mockup photograph",
            f"showing {deliverable_name} for brand '{brand_name}'",
            f"{description}" if description else "",
            f"exact size: {dimensions}" if dimensions else "",
            f"{style_name} design style",
            f"using colors {primary_colors}",
            f"{typography} typography",
            f"logo placement: {logo_placement}",
            f"{materials} materials with {finishes} finish",
            f"{mockup_context} setting",
            f"{mood} mood",
            "photorealistic product photography",
            "soft natural lighting",
            "high quality professional shot",
            "8k resolution detailed"
        ]

    prompt = ", ".join([p for p in prompt_parts if p])

    return {
        "prompt": prompt,
        "deliverable": deliverable_name,
        "style": style_name,
        "brand": brand_name,
        "colors": primary_colors,
        "mockup_context": mockup_context,
        "logo_placement": logo_placement
    }


def _cip_output_path(deliverable):
    """Project-relative path where the user saves the mockup they generate."""
    slug = "".join(c if c.isalnum() else "-" for c in str(deliverable).lower())
    slug = "-".join(part for part in slug.split("-") if part)
    return f"public/cip/cip-{slug}.png"


def _apply_ratio(prompt_data, ratio):
    """State the requested aspect ratio so the user exports the right shape."""
    if ratio:
        prompt_data["prompt"] = f"{prompt_data['prompt']}, {ratio} aspect ratio"
        prompt_data["aspect_ratio"] = ratio
    return prompt_data


def _print_prompt(prompt_data):
    print(
        f"\n{prompt_data['deliverable']}\n"
        f"Save the generated image to: {_cip_output_path(prompt_data['deliverable'])}\n"
        f"{prompt_data['prompt']}"
    )


def main():
    parser = argparse.ArgumentParser(
        description="Print ready-to-paste CIP mockup prompts (no API key needed)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Prompts are printed for you to generate the images yourself; save them to
public/cip/cip-<deliverable>.png.

Examples:
  # One deliverable
  python generate.py --brand "TopGroup" --industry "consulting" --deliverable "business card"

  # Full CIP set as machine-readable JSON
  python generate.py --brand "TopGroup" --industry "consulting" --set --json

  # Landscape deliverables
  python generate.py --brand "GreenLeaf" --industry "organic food" --deliverables "vehicle,signage" --ratio 16:9
        """
    )

    parser.add_argument("--brand", "-b", required=True, help="Brand name")
    parser.add_argument("--logo", "-l", help="Path to the brand logo (the prompts then instruct the tool to reuse it exactly)")
    parser.add_argument("--deliverable", "-d", help="Single deliverable to prompt for")
    parser.add_argument("--deliverables", help="Comma-separated list of deliverables")
    parser.add_argument("--industry", "-i", default="technology", help="Industry type")
    parser.add_argument("--style", "-s", help="Design style")
    parser.add_argument("--mockup", "-m", help="Mockup context")
    parser.add_argument("--set", action="store_true", help="Prompt for the full CIP set")
    parser.add_argument("--ratio", default=None, help="Aspect ratio to state in the prompt (1:1, 16:9, 4:3, etc.)")
    parser.add_argument("--json", "-j", action="store_true", help="Output as JSON")

    args = parser.parse_args()

    if args.logo and not Path(args.logo).exists():
        print(f"Warning: logo not found at {args.logo} - prompts will not reference it.")
        args.logo = None

    use_logo = bool(args.logo)

    if args.set or args.deliverables:
        deliverables = args.deliverables.split(",") if args.deliverables else DEFAULT_DELIVERABLES
        results = [
            _apply_ratio(
                build_cip_prompt(d, args.brand, args.style, args.industry, args.mockup, use_logo=use_logo),
                args.ratio,
            )
            for d in deliverables
        ]
        if args.json:
            for r in results:
                r["output"] = _cip_output_path(r["deliverable"])
            print(json.dumps(results, indent=2))
        else:
            for r in results:
                _print_prompt(r)
    else:
        deliverable = args.deliverable or "business card"
        prompt_data = _apply_ratio(
            build_cip_prompt(deliverable, args.brand, args.style, args.industry, args.mockup, use_logo=use_logo),
            args.ratio,
        )
        if args.json:
            prompt_data["output"] = _cip_output_path(prompt_data["deliverable"])
            print(json.dumps(prompt_data, indent=2))
        else:
            _print_prompt(prompt_data)


if __name__ == "__main__":
    main()
