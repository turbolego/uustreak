# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-05-23T20:40:46.426Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `img[alt="Best i test på skadeoppgjør!"]`
- `#\39 5c41805143d47c5bde2c8fcc38cb4f8 > .reverse.split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `img[alt="Mer enn bare forsikring"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.content.op > h3`
- `#\30 aacf03875104917a5d2f83ce75c1577 > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\30 aacf03875104917a5d2f83ce75c1577`
