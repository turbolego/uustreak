# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-10-29T07:25:51.417Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- `svg[viewBox="0 0 90 45"]`
