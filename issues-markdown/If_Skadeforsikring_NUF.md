# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-02-19T00:40:52.740Z
**URL:** [https://www.if.no/privat](https://www.if.no/privat)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- `img[alt="Reise i vinter?"]`
- `#\38 3a75cca2eb6489c86009af300b4bfe3 > .split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `#viking > .reverse.split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `img[alt="Hvorfor velge oss?"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\33 cd8b0e359044b228876cbf2241c257a > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\33 cd8b0e359044b228876cbf2241c257a`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.op-quicklinks`
