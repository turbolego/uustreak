# WCAG Violations Report for Årvoll skole

**Timestamp:** 2026-03-27T00:51:19.337Z
**URL:** [https://arvoll.osloskolen.no/#](https://arvoll.osloskolen.no/#)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `#silktide-banner > .mb-4`
- `#silktide-banner > p:nth-child(2)`
- `#silktide-banner > p:nth-child(3)`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `a[href$="#secMain"]`
