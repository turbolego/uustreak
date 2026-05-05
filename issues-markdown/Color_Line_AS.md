# WCAG Violations Report for Color Line AS

**Timestamp:** 2026-05-05T20:15:52.547Z
**URL:** [https://www.colorline.no/#](https://www.colorline.no/#)
**Total Violations:** 4

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

- `.bg-white.wrapper > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .gap-10.sm\:gap-24[data-controller="deviation-status"] > nav`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.button-pill`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.cl-skip-links`
- `.bg-white.wrapper > .h-\(--navbar-mobile-height\).md\:h-\(--navbar-desktop-height\).py-24 > .flex-wrap.gap-12.justify-between > .logo[href="/"] > .sr-only`
- `.lg\:justify-start`
- `.md\:flex-row-reverse > div:nth-child(2)`
