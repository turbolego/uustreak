# WCAG Violations Report for Universitetet i Sørøst-Norge

**Timestamp:** 2026-04-05T01:00:49.253Z
**URL:** [https://www.usn.no/](https://www.usn.no/)
**Total Violations:** 2

## Violation Details

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- `#cookie_cat_functional`
- `#cookie_cat_statistic`
- `#cookie_cat_marketing`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `#uuid-ba1e5380-be1b-46d5-b9e5-d8338af60190`
- `.sticky-info-text`
- `.button-tabs-tile__title`
- `.tabs`
