# WCAG Violations Report for Adecco Norge AS

**Timestamp:** 2025-11-22T00:29:56.862Z
**URL:** [https://www.adecco.com/nb-no](https://www.adecco.com/nb-no)
**Total Violations:** 4

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `.LocationSearchFilter_job-title__yLOb_`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `#ecosystem-card-ftr0 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`
- `#ecosystem-card-ftr1 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`
- `#ecosystem-card-ftr2 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`
- `#ecosystem-card-ftr3 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`
- `#ecosystem-card-ftr4 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`
- `#ecosystem-card-ftr5 > .Ecosystem_tiles-external-cardfooter__zFQ_tmaterial-icons-outlined.pl1[href=""]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 3

#### Affected Elements:

- `.SWPImage_swp-nextimage__raKqc`
- `.tile-solutions-icon[aria-label=""][alt=""]`
- `.SWPImage_islhh-image__Hi_E2`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.SkipLink_skip-btn__YhgD8`
