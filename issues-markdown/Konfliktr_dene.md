# WCAG Violations Report for Konfliktrådene

**Timestamp:** 2026-11-18T12:56:28.205Z
**URL:** [https://konfliktraadet.no/](https://konfliktraadet.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Norsk (bokmål)"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `.skip-link`
- `.column:nth-child(1)`
- `#topmenu > .menu-item:nth-child(1)`
- `.dropdown-toggle`
- `.insert-page > .wpb-content-wrapper`
