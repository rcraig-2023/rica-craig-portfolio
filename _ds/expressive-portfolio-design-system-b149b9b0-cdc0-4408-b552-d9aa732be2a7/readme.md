# Expressive Portfolio Design System

A warm, expressive canvas for personal-portfolio and case-study sites, drawn from the visual language of designer-portfolio references (Ram Ramachandran, Steph Parrott, Lauren Lang, Leah Lee, M. Chiu, W. Hepworth's Unmind DS). The system intentionally breaks away from sterile SaaS defaults — warm cream backgrounds, bold display type with mixed-fill treatments, pill tags, and vibrant tinted project cards on top of quiet, editorial case-study reading layouts.

## Sources
Provided as reference screenshots only:
- `uploads/screencapture-whyramachandran-design-2026-08-03-23_58_16.png` — home
- `uploads/screencapture-whyramachandran-design-About-2026-08-04-00_11_54.png` — about
- `uploads/screencapture-whyramachandran-design-Case-study-1-*.png` — case-study layouts
- `uploads/screencapture-laurenlangdesign-supplierone-*.png`
- `uploads/screencapture-leah-lee-*.png`
- `uploads/screencapture-mchiu-co-uk-*.png`
- `uploads/screencapture-stephparrott-plantd-*.png`
- `uploads/screencapture-whepworth-co-work-unmind-*.png`

No codebase or Figma was attached — this system was authored from the reference screenshots and the brief.

## Index

- `styles.css` — the single stylesheet consumers import
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `guidelines/` — foundation specimen cards
- `components/actions/Button` — primary pill CTA
- `components/content/Pill` — skill/tech tag
- `components/content/DisplayHero` — mixed-fill display heading
- `components/content/ProjectCard` — featured-work card (tint hero + info panel)
- `components/content/TimelineRow` — year · project · action row
- `components/navigation/TopNav` — airy portfolio nav
- `ui_kits/portfolio/` — Home + About screens
- `thumbnail.html` — the DS tile
- `SKILL.md` — cross-compatible Agent Skill entry

## Content fundamentals

- **Voice**: first-person, warm, plainspoken. "Hi, I am Ram, practicing design since 2020." Never corporate; never marketing-ese.
- **Casing**: sentence case in body; UPPER + tracked-out for nav labels and eyebrows.
- **Emoji**: allowed as inline accents in hero paragraphs (👋, ✽, ⭐). Never as UI icons or in nav.
- **Titles**: expressive, sometimes cheeky ("Creative PRODUCT DESIGNER", "part-time Illustrator"). Mix outline + solid fills on a single word for signature look.
- **Metadata**: dot-separated, uppercase, mono (`CASE STUDY 01 · MOBILE · 1M MAU`).

## Visual foundations

- **Canvas**: `#FFFDF6` warm cream everywhere. White (`#FFFFFF`) only inside cards to make them lift.
- **Text**: `#111111` primary (never pure black), `#595959` secondary, `#8A8A85` tertiary.
- **Accent tints**: only used as *interior* fills of project cards (`#A8B2FF`, `#FFD166`, `#06D6A0`, `#FF6B2C`, `#B9E3FF`, `#C9B8FF`). Never on buttons, chrome, or borders.
- **Type**: Clash Display (700) for headings, Inter for body. Hero fs 80px+, tracking -0.04em, line-height 1.05. Optional `-webkit-text-stroke: 2px #111; color: transparent;` outline treatment on selected words.
- **Radii**: 8 (media in body), 12 (small gallery), 16 (portraits), 24 (project cards), 999 (pills + buttons).
- **Borders**: 1px `#E5E2D9` hairlines for card outlines and dividers; `1px solid #111` for outline pills.
- **Shadows**: minimal. `0 4px 20px rgba(17,17,17,.05)` on media inside case-study body; `0 4px 12px rgba(17,17,17,.15)` on button hover lift only.
- **Motion**: `translateY(-2px)` + soft shadow lift on primary hover, 140ms `cubic-bezier(.2,.7,.2,1)`. Never bounce; never scale; never fade-in-on-scroll.
- **Backgrounds**: solid cream. No gradients on chrome, no patterns, no textures. Full-bleed imagery reserved for case-study heroes.
- **Layout**: max page width 1240px; case-study text column strictly 720px; media may break out to 1100px. 32px gutter.
- **No blur, no transparency** except mono placeholder captions in the specimen cards.

## Iconography

The reference sites use very few icons — text-first is the vibe. Where an icon is truly needed (arrows, external link, social), use the **Lucide** icon set at 16–20px, `stroke-width: 1.5`, `currentColor`. No emoji as UI icons.

Lucide via CDN:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

Inline decorative emoji is fine in hero paragraphs (✽, 👋, ✌️, ✨). Not part of a formal icon token set.

## Intentional additions

None beyond what the references implied — Button, Pill, DisplayHero, ProjectCard, TimelineRow, TopNav.

## Caveats & known substitutions

- **Fonts** loaded from Fontshare (Clash Display) + Google Fonts (Inter). If you have the real .otf/.woff2 files, drop them into `assets/fonts/` and update `tokens/fonts.css` — flagged as a substitution.
- **No logo** was provided. The word "Ramachandran" is used as a wordmark in the UI kit; do not treat it as a real brand mark.
- **Case-study page** and **Slides** kit are not built yet — the brief provided source only for Home + About; case-study layouts sketched in prose only. Ask if you'd like a full editorial case-study screen added.
