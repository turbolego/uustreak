# WCAG Violations Report for Fevik skole

**Timestamp:** 2025-10-18T00:23:16.632Z
**URL:** [https://www.grimstad.kommune.no/tjenester/barn-unge-og-familie/skole/skoler-i-grimstad/fevik-skole/#](https://www.grimstad.kommune.no/tjenester/barn-unge-og-familie/skole/skoler-i-grimstad/fevik-skole/#)
**Total Violations:** 3

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.bc-content-modal`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.global-top-container`
- `.fantDuLabel`
