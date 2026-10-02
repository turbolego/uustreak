# WCAG Violations Report for Vygruppen AS

**Timestamp:** 2026-10-02T17:28:23.521Z
**URL:** [https://www.vy.no/](https://www.vy.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 13

#### Affected Elements:

- `.css-1auyt0q > .css-1dc70b0[role="listitem"][data-discover="true"]`
- `.css-1096yyu`
- `.css-43gtu1 > .css-1dc70b0[role="listitem"][data-discover="true"]`
- `.css-1o36ap5 > .css-1dc70b0[role="listitem"][data-discover="true"]`
- `.css-nans3h > .css-1dc70b0[role="listitem"][data-discover="true"]`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(1)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(2)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(3)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(4)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(5)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(6)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(7)`
- `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(8)`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.css-d7200m > .css-79elbk > .css-1kme415[role="region"]`
- `.css-34w79r[data-scope="toast"][data-part="group"]:nth-child(10)`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.css-1f5s02f > ul`
