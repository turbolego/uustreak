# WCAG Violations Report for Bompengeselskap nord AS

**Timestamp:** 2026-11-23T06:06:57.755Z
**URL:** [https://bpsnord.no/](https://bpsnord.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__content > h4`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__content`
- `.card-v3.bg-contrast-lower.col\@sm:nth-child(1) > .card-v3__link[target=""] > .card-v3__footer > span`
- `a[href$="faktura-2/"] > .card-v3__content`
- `a[href$="faktura-2/"] > .card-v3__footer > span`
- `a[href$="fritak/"] > .card-v3__content`
- `a[href$="fritak/"] > .card-v3__footer > span`
