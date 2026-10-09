# WCAG Violations Report for Fana Sparebank

**Timestamp:** 2026-10-09T04:59:23.978Z
**URL:** [https://www.fanasparebank.no/](https://www.fanasparebank.no/)
**Total Violations:** 4

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- `#cookie_cat_functional`
- `#cookie_cat_statistic`
- `#cookie_cat_marketing`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.skip-link`
- `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047,.question-header`
- `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047,.rating-text`
- `.PostHogSurvey-019d1ac3-348c-0000-c7e4-af9588574047,.bottom-section`
