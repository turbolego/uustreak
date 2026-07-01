# WCAG Violations Report for Color Line AS

**Timestamp:** 2026-06-27T01:08:17.668Z
**URL:** [https://www.colorline.no/#](https://www.colorline.no/#)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.wrapper.bg-white > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .gap-10.sm\:gap-24[data-controller="deviation-status"] > nav`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `.cl-skip-links`
- `.wrapper.bg-white > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .logo[href="/"]`
- `.lg\:justify-start`
- `.md\:flex-row-reverse > div:nth-child(2)`
- `.button-pill`
