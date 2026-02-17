# WCAG Violations Report for If Skadeforsikring NUF

**Timestamp:** 2026-02-17T00:41:53.974Z
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
- `#\39 2300c9d5c9e4e7fb54a0f4ecec00790 > .split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `#viking > .reverse.split.small > .gap-0.section-content.op > .image > .size-100p.object-cover[loading="lazy"]`
- `img[alt="Hvorfor velge oss?"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\37 974b9e2f8474a7ebe7cc1c11ac72dbd > .weight-medium`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#\37 974b9e2f8474a7ebe7cc1c11ac72dbd`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.op-quicklinks`
