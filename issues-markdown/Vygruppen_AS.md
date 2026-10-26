# WCAG Violations Report for Vygruppen AS

**Timestamp:** 2026-10-26T03:52:45.468Z
**URL:** [https://www.vy.no/](https://www.vy.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 12

#### Affected Elements:

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

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- `.css-g2hmy8[href$="leie-buss"][data-discover="true"]`
- `.css-g2hmy8[href$="gruppereise"][data-discover="true"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.css-d7200m > .css-79elbk > .css-jdcmw5[role="region"]`
- `.css-34w79r[data-scope="toast"][data-part="group"]:nth-child(10)`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.css-1f5s02f > ul`
