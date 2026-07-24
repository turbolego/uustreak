# WCAG Violations Report for Elkjøp AS

**Timestamp:** 2026-07-24T12:52:06.873Z
**URL:** [https://www.elkjop.no/](https://www.elkjop.no/)
**Total Violations:** 2

## Violation Details

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `button:nth-child(1) > .xl\:flex-col.text-\(--header-text\).px-4`
- `div[data-component="AccountPopoverMenu"] > .xl\:flex-col.text-\(--header-text\).px-4`
- `li[data-testid="cart"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#kindly-chat-api > div,.sc-iUlCMS`
