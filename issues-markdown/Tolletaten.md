# WCAG Violations Report for Tolletaten

**Timestamp:** 2025-10-20T00:30:26.917Z
**URL:** [https://www.toll.no/#](https://www.toll.no/#)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.rounded-full.flex-col.flex`

### <svg> elements with an img role must have an alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `.justify-center.gap-2.items-center > svg[role="img"][viewBox="0 0 24 24"][focusable="false"]`
