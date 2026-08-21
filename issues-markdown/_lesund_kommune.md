# WCAG Violations Report for Ålesund kommune

**Timestamp:** 2026-08-21T01:23:26.066Z
**URL:** [https://alesund.kommune.no/](https://alesund.kommune.no/)
**Total Violations:** 3

## Violation Details

### ARIA hidden element must not be focusable or contain focusable elements

- **Impact:** serious
- **Description:** Ensure aria-hidden elements are not focusable nor contain focusable elements
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-hidden-focus?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-10.8.1
- **Count:** 1

#### Affected Elements:

- `#mainMenuContainer`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- `img[alt="Ålesund kommune"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`
