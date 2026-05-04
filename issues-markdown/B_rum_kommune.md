# WCAG Violations Report for Bærum kommune

**Timestamp:** 2026-05-04T00:53:46.321Z
**URL:** [https://www.baerum.kommune.no/#](https://www.baerum.kommune.no/#)
**Total Violations:** 2

## Violation Details

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.is-peach > .pageBoundary > .article-teasers > .article-teaser > .article-teaser__image > img`
- `.is-petroleum > .pageBoundary > .article-teasers > .article-teaser > .article-teaser__image > img`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `#cookiescript_readmore`
