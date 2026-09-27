# public/ — where you put generated images

This skill never calls an image-generation API. When an image is needed, the
agent writes a complete prompt, you generate the image with any tool you like,
and you save the file here.

| Folder | Put here | Expected filename |
|--------|----------|-------------------|
| `logos/` | Brand logos (white background) | `<brand>-logo.png` |
| `cip/` | Corporate identity mockups | `cip-<deliverable>.png` |
| `banners/` | Banner / cover / header art | `<platform>-<type>.png` |
| `social/` | Social post images and photos | `<platform>-<name>.png` |
| `icons/` | Raster icons only — SVG icons are written by the agent | `<name>.png` |

## How it goes

1. The agent shows you a prompt (style, colors, exact text, pixel size).
2. You generate the image wherever you want and drop it in the right folder.
3. The agent picks it up and continues.

If a file is missing, the agent re-sends the prompt and waits — it will not
fabricate an asset.

> When this skill runs inside one of your projects, the same layout is used at
> **that project's root** (`my-app/public/...`). This copy is here so you have
> somewhere to drop images while trying the skill out.
