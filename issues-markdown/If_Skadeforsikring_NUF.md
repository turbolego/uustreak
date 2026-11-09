# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-11-09T05:04:40.421Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 6

#### Affected Elements:

- `img[alt="Bilforsikring"]`
- `img[alt="Møbler i en stue"]`
- `img[alt="Best i test på skadeoppgjør!"]`
- `img[alt="Mer enn bare forsikring"]`
- `img[alt="Vi forsikrer bedriften din"]`
- `#\31 833fb37d5e142d28daee8e6d2241e20 > .split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#ccba35a3b9924a238b60bc4eceda71d1 > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#ccba35a3b9924a238b60bc4eceda71d1`
