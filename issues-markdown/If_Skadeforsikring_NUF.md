# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-10-22T12:01:46.137Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- `img[alt="Bilforsikring"]`
- `img[alt="Møbler i en stue"]`
- `img[alt="Best i test på skadeoppgjør!"]`
- `img[alt="Mer enn bare forsikring"]`
- `img[alt="Vi forsikrer bedriften din"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#fa6e4d3d8139402c9be905d06283e68c`
