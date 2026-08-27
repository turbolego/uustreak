# WCAG Violations Report for SEB - Skandinaviska Enskilda Banken NUF

**Timestamp:** 2026-08-27T07:55:03.918Z
**URL:** [https://sebgroup.com/](https://sebgroup.com/)
**Total Violations:** 2

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `pwng-mobile-menu`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `gds-card-pattern-01-pw:nth-child(1),gds-img-13e09d,img[loading="lazy"][decoding="auto"]`
- `gds-card-pattern-01-pw:nth-child(2),gds-img-13e09d,img[loading="lazy"][decoding="auto"]`
- `gds-card-pattern-01-pw:nth-child(3),gds-img-13e09d,img[loading="lazy"][decoding="auto"]`
