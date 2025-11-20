# WCAG Violations Report for SEB - Skandinaviska Enskilda Banken NUF

**Timestamp:** 2025-11-20T00:40:59.286Z
**URL:** [https://sebgroup.com/#](https://sebgroup.com/#)
**Total Violations:** 3

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `pwng-mobile-menu`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#picture-5296d1ef-9099-4ce5-8137-21a1d37e262f > img[height="209"][width="372"][loading="lazy"]`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `iframe[title="Video: Our purpose"], button`
