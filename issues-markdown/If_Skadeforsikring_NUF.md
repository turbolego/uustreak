# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-07-30T01:02:12.304Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `img[alt="Best i test på skadeoppgjør!"]`
- `#e9e4fc19c89c479388f05ae26606bc04 > .reverse.split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `img[alt="Mer enn bare forsikring"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.content.op > h3`
- `#\34 5108678b636468f84adeb7af3c1689a > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\34 5108678b636468f84adeb7af3c1689a`
