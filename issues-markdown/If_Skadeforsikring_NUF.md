# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-11-19T05:41:19.816Z
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
- `#b1ef3a3544b84059b9feb086fedc65b5 > .split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\31 a3d67a974704cc1a779dbee2b39b1d5 > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\31 a3d67a974704cc1a779dbee2b39b1d5`
