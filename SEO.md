````md
# SEO.md — Portfolio SEO Instructions

## Context

This is Vivek Patil's personal software developer portfolio.

Stack:
- Next.js
- TypeScript
- Vercel
- Personal portfolio
- Developer projects, experience, skills, education and contact information

Primary SEO goals:
1. Rank for "Vivek Patil"
2. Rank for "Vivek Patil software developer"
3. Make projects and experience discoverable
4. Make the site technically excellent for Google
5. Improve social sharing previews
6. Keep the implementation simple, fast and free

Do NOT add paid SEO tools/services.

Do NOT change the visual design unless required for SEO/accessibility.

Do NOT invent information, achievements, metrics, skills, companies or experience.

---

# 1. First Audit

Before changing anything, inspect:

- `app/` routes
- `layout.tsx`
- all `page.tsx`
- dynamic routes
- existing metadata
- existing `robots.txt`
- existing sitemap
- images
- fonts
- `"use client"`
- middleware
- redirects
- existing JSON-LD
- existing analytics

Reuse existing implementation where possible.

Do not create duplicate SEO files.

---

# 2. Central SEO Config

Create/use one SEO configuration.

Example:

```ts
export const siteConfig = {
  name: "Vivek Patil",
  url: process.env.NEXT_PUBLIC_SITE_URL!,
  description:
    "Vivek Patil is a software developer focused on backend engineering, full-stack development, cloud infrastructure and scalable applications.",
  author: "Vivek Patil",
};
````

Add:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com
```

Use the real production domain.

Never use the Vercel preview URL as the canonical domain.

---

# 3. Homepage Metadata

Set meaningful global metadata.

Target:

```text
Title:
Vivek Patil — Software Developer

Description:
Vivek Patil is a software developer focused on backend engineering, full-stack development, cloud infrastructure and scalable applications.
```

Use the actual portfolio content to improve the wording.

Do not keyword stuff.

---

# 4. Homepage H1

Ensure the homepage has exactly one primary H1.

Preferred:

```text
Vivek Patil — Software Developer
```

The H1 must be visible HTML, not only rendered inside Canvas/WebGL.

---

# 5. Page-Specific Metadata

Every important page must have a unique title and description.

Use:

```text
/about
→ About Vivek Patil — Software Developer

/experience
→ Software Development Experience — Vivek Patil

/projects
→ Software Projects — Vivek Patil

/projects/[slug]
→ [Project Name] — Vivek Patil

/blog
→ Software Engineering Blog — Vivek Patil

/blog/[slug]
→ [Article Title] — Vivek Patil
```

Do not use the same title/description on every page.

For dynamic routes use `generateMetadata()`.

---

# 6. Canonical URLs

Every indexable page must have a canonical URL.

Use the production domain.

Examples:

```text
https://YOUR-DOMAIN.com/
https://YOUR-DOMAIN.com/projects
https://YOUR-DOMAIN.com/projects/project-name
```

Do not canonicalize to Vercel preview URLs.

Do not include tracking query parameters in canonicals.

---

# 7. Robots.txt

Create/use:

```text
app/robots.ts
```

Production should effectively contain:

```text
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

Replace the domain dynamically from `NEXT_PUBLIC_SITE_URL`.

Do not accidentally block the entire website.

---

# 8. Sitemap

Create/use:

```text
app/sitemap.ts
```

Include:

* Homepage
* About
* Experience
* Projects
* Public project detail pages
* Blog
* Public blog articles

Do NOT include:

* 404
* admin
* login
* dashboard
* private pages
* API routes
* drafts
* nonexistent pages

For dynamic projects/articles, generate sitemap entries from the actual data source.

Only include publicly accessible, indexable URLs.

---

# 9. Preview Deployment SEO

Production:

```text
index: true
follow: true
```

Vercel preview deployments:

```text
index: false
follow: false
```

Do not allow preview deployments to compete with the real portfolio.

Use environment/deployment detection instead of hardcoding URLs.

---

# 10. Open Graph

Add Open Graph metadata.

Default image:

```text
public/og-image.png
```

Recommended:

```text
1200x630
```

Include:

```text
og:title
og:description
og:url
og:image
og:type
og:site_name
```

For project/article pages, use their own title, description and image when available.

---

# 11. Twitter/X

Add:

```text
twitter: {
  card: "summary_large_image",
  title: "...",
  description: "...",
  images: ["..."],
}
```

Use the same appropriate OG image when suitable.

---

# 12. Person JSON-LD

Add a `Person` JSON-LD schema to the portfolio.

Use only real information.

Example:

```ts
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vivek Patil",
  "url": siteUrl,
  "jobTitle": "Software Developer",
  "sameAs": [
    "REAL_GITHUB_URL",
    "REAL_LINKEDIN_URL"
  ]
}
```

Only add social URLs that actually belong to Vivek.

Do not invent profiles.

---

# 13. WebSite JSON-LD

Add a simple `WebSite` schema where appropriate:

```ts
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vivek Patil",
  "url": siteUrl
}
```

Avoid unnecessary schema.

---

# 14. Project Pages

Every important project should have a real URL if the existing application supports it.

Example:

```text
/projects/veltos
/projects/project-name
```

A project page should contain useful real information:

* Project name
* What it does
* Problem
* Solution
* Technologies
* Architecture
* Vivek's contribution
* Results, only if truthful
* GitHub link, if public
* Live demo, if available

Do not create separate SEO pages with duplicate content.

---

# 15. Project Metadata

Dynamic project pages must generate metadata from project data.

Example:

```text
Title:
Veltos.ai — AI Game Generation Platform | Vivek Patil

Description:
Veltos.ai is an AI-powered game generation platform built with modern web technologies and cloud infrastructure.
```

Use the actual project details.

Do not make unsupported claims such as:

```text
Best
#1
World's leading
Most scalable
```

---

# 16. Blog SEO

If the portfolio has a blog:

Each article needs:

* Unique title
* Unique description
* Canonical URL
* Author
* Published date
* Modified date when actually updated
* Open Graph image
* Article JSON-LD where appropriate

Use:

```text
/blog/[slug]
```

Do not create AI-generated thin articles just for SEO.

Prefer genuine technical content based on actual development experience.

---

# 17. Internal Linking

Ensure important pages are connected.

At minimum:

```text
Home
 ├── About
 ├── Experience
 ├── Projects
 │    └── Project details
 └── Blog
      └── Articles
```

Add relevant links between:

* Projects ↔ Experience
* Projects ↔ Blog
* Blog ↔ Related projects
* Homepage ↔ Important projects

Use normal Next.js `<Link>` for internal navigation.

Avoid JavaScript-only navigation when a normal link is appropriate.

---

# 18. Semantic HTML

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

where appropriate.

Use headings semantically:

```text
H1
H2
H3
```

Do not use headings purely for styling.

---

# 19. Images

Audit all portfolio images.

Use `next/image` where appropriate.

Every meaningful image needs useful alt text.

Examples:

```text
Vivek Patil — Software Developer
Veltos.ai game generation dashboard
Project architecture diagram
```

Decorative images:

```text
alt=""
```

Do not keyword-stuff alt text.

---

# 20. Performance SEO

Audit the site for:

* Large images
* Unnecessary JavaScript
* Excessive `"use client"`
* Large dependencies
* Unnecessary third-party scripts
* Blocking fonts
* Layout shifts

For every `"use client"` component, determine whether it actually requires:

* state
* effects
* browser APIs
* event handlers

If not, consider making it a Server Component.

Do not break functionality while doing this.

---

# 21. Server-Rendered Content

Important SEO content should be available in server-rendered HTML where practical.

Especially:

* Name
* H1
* About
* Experience
* Projects
* Project descriptions
* Blog content

Avoid unnecessary:

```text
useEffect()
→ fetch API
→ render SEO content
```

when the same data can be rendered on the server.

---

# 22. 404

Ensure nonexistent pages return an actual 404.

For example:

```text
/projects/does-not-exist
```

must not return a normal 200 project page.

Use Next.js `not-found.tsx` / `notFound()` where appropriate.

---

# 23. Private Routes

Identify any:

```text
/admin
/dashboard
/login
/settings
/internal
```

or similar routes.

They must not be included in the sitemap.

Use appropriate authentication and `noindex` behavior where necessary.

Do not rely on robots.txt for security.

---

# 24. Middleware Audit

If middleware exists, make sure it does not accidentally block:

```text
/
robots.txt
sitemap.xml
public projects
public blog
```

Do not require authentication for public portfolio pages.

---

# 25. URL Consistency

Choose one canonical domain:

```text
https://YOUR-DOMAIN.com
```

Ensure:

* HTTP → HTTPS
* www/non-www is consistent
* Canonicals use the same domain
* Sitemap uses the same domain
* OG URLs use the same domain

Avoid redirect chains.

---

# 26. SEO-Friendly Content

The homepage should naturally explain:

```text
Who is Vivek?
What does Vivek do?
What technologies does he work with?
What has he built?
What experience does he have?
How can someone contact him?
```

Use actual information from the portfolio.

Do not add artificial paragraphs solely for search engines.

---

# 27. Developer-Specific SEO

Naturally mention technologies that are actually demonstrated by the portfolio.

Examples, only if present:

```text
TypeScript
JavaScript
Next.js
React
Node.js
NestJS
AWS
DynamoDB
PostgreSQL
Redis
Python
Java
Docker
CI/CD
```

Do not add a technology to SEO metadata just because it is a popular keyword.

The website content must support the claim.

---

# 28. Accessibility

Fix obvious SEO/accessibility problems:

* Missing image alt text
* Incorrect heading hierarchy
* Unlabeled inputs
* Unclear buttons
* Non-semantic clickable divs
* Missing navigation labels
* Poor keyboard accessibility

Do not add unnecessary ARIA.

---

# 29. Things NOT to Implement

Do NOT add:

* Paid SEO services
* Paid SEO APIs
* SEO subscription tools
* Keyword stuffing
* Hidden keywords
* Invisible text
* Fake reviews
* Fake ratings
* Fake backlinks
* Fake achievements
* Hundreds of location pages
* Duplicate pages
* AI-generated SEO spam
* Unnecessary schema
* Unnecessary dependencies

Use the existing Next.js/Vercel capabilities wherever possible.

---

# 30. Validation

After implementation run the project's existing:

```bash
npm run lint
npm run build
```

and typecheck if available.

Then verify:

```text
/
 /robots.txt
 /sitemap.xml
```

Also verify:

```text
Homepage
About
Experience
Projects
At least one project detail page
Blog/article if present
Nonexistent URL
```

Check:

* HTTP status
* `<title>`
* meta description
* canonical
* H1
* OG metadata
* Twitter metadata
* JSON-LD
* internal links
* images

---

# 31. Final SEO Checklist

Before finishing:

```text
[ ] Correct production domain configured
[ ] Homepage title
[ ] Homepage description
[ ] Homepage H1
[ ] Unique metadata for important pages
[ ] Canonical URLs
[ ] robots.txt
[ ] sitemap.xml
[ ] Preview deployments noindex
[ ] Open Graph
[ ] Twitter metadata
[ ] OG image
[ ] Person JSON-LD
[ ] WebSite JSON-LD
[ ] Project metadata
[ ] Article metadata if blog exists
[ ] Internal linking
[ ] Semantic HTML
[ ] Image alt text
[ ] next/image where appropriate
[ ] Unnecessary "use client" audited
[ ] Important content server-rendered
[ ] Correct 404 behavior
[ ] Private routes excluded/protected
[ ] No broken internal links
[ ] No duplicate metadata
[ ] No keyword stuffing
[ ] npm run build passes
[ ] lint/typecheck passes
```

---

# 32. Important: Do Not Stop at Metadata

SEO implementation is NOT considered complete just because these exist:

```text
<title>
description
robots
sitemap
```

The agent must also check:

```text
crawlability
indexability
canonical URLs
server-rendered content
internal linking
semantic HTML
image optimization
performance
mobile usability
404 handling
duplicate content
```

The objective is a technically clean, fast and genuinely useful developer portfolio.

# 33. Agent Behavior

When executing this file:

1. Inspect first.
2. Make a plan.
3. Reuse existing architecture.
4. Implement only useful changes.
5. Keep dependencies minimal.
6. Do not change the visual design unnecessarily.
7. Do not invent personal information.
8. Run validation.
9. Report exactly what was changed.
10. Report anything that requires manual action.

For manual post-deployment work, mention:

```text
- Add/verify the domain in Google Search Console
- Submit /sitemap.xml
- Inspect the homepage and important project pages
- Check Core Web Vitals
```

Do not claim these manual steps were completed unless they actually were.

```
```
