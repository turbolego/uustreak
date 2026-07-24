# WCAG Violations Report for Thon Hotels AS

**Timestamp:** 2026-07-24T12:59:11.612Z
**URL:** [https://www.thonhotels.no/#](https://www.thonhotels.no/#)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.story-teaser--big-campaign > .story-teaser__content > .story-teaser__heading.font-h2`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `img[sizes="50vw"]`
- `.teaser-section-bg > section > .story-teaser-wrapper > .story-teaser > .story-teaser__media > img[loading="lazy"]`
- `.story-teaser:nth-child(1) > .story-teaser__media > img[sizes="100vw"][title=""][loading="lazy"]`
- `.story-teaser-wrapper > .story-teaser:nth-child(2) > .story-teaser__media > img[sizes="100vw"][title=""][loading="lazy"]`
- `.story-teaser-slider > .story-teaser:nth-child(2) > .story-teaser__media > img[sizes="100vw"][title=""][loading="lazy"]`
- `.story-teaser:nth-child(3) > .story-teaser__media > img[sizes="100vw"][title=""][loading="lazy"]`
- `.story-teaser:nth-child(4) > .story-teaser__media > img[sizes="100vw"][title=""][loading="lazy"]`
- `.story-teaser-odd-even-wrapper > .story-teaser > .story-teaser__media > img[title=""][loading="lazy"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`
