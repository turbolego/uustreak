# WCAG Violations Report for Jysk AS

**Timestamp:** 2026-08-19T01:40:25.544Z
**URL:** [https://jysk.no/](https://jysk.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- `img[title="Annonserte varer"]`
- `img[title="FAST LAV PRIS"]`
- `img[title="Gavekort"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- `.bg-brand-500`
- `.px-3\.5.max-w-\[1400px\].mx-auto:nth-child(7)`
- `.text-xl`
- `.max-w-3xl > .mb-8`
- `form > p`
- `.flex-1.group[data-testid="form-group"]`
- `.group.relative[data-testid="form-group"]:nth-child(2)`
- `.hover\:border-gray-500`
- `#_r_kb_`
- `#onetrust-banner-sdk`
