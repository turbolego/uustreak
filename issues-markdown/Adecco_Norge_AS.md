# WCAG Violations Report for Adecco Norge AS

**Timestamp:** 2026-04-22T00:38:16.892Z
**URL:** [https://www.adecco.com/nb-no](https://www.adecco.com/nb-no)
**Total Violations:** 3

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `.LocationSearchFilter_job-title__yLOb_`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 9

#### Affected Elements:

- `.SWPImage_swp-nextimage__raKqc`
- `img[width="1600"][height="1067"][aria-label=""]`
- `img[width="5472"]`
- `img[width="7704"]`
- `img[width="2048"][height="1366"][aria-label=""]`
- `img[width="8192"]`
- `img[width="5700"]`
- `.tile-solutions-icon.icon-accent[aria-label=""]`
- `.SWPImage_islhh-image__Hi_E2`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.SkipLink_skip-btn__YhgD8`
