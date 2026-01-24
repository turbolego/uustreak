# WCAG Violations Report for Skranevatnet skole

**Timestamp:** 2026-01-24T00:39:18.203Z
**URL:** [https://www.bergen.kommune.no/omkommunen/avdelinger/skranevatnet-skole/#](https://www.bergen.kommune.no/omkommunen/avdelinger/skranevatnet-skole/#)
**Total Violations:** 2

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe, #toaster`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.js_main_nav`
- `#innhold`
