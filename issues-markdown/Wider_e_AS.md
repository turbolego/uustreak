# WCAG Violations Report for Widerøe AS

**Timestamp:** 2026-10-24T03:56:25.651Z
**URL:** [https://www.wideroe.no/](https://www.wideroe.no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"]`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"]`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"]`

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.ToggleGroup-module__8OuBQG__active`
- `.ToggleGroup-module__8OuBQG__button.Button-module__xaXzvq__ghost[role="radio"]:nth-child(3)`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__tabList`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__active`
- `button[aria-controls="flight-search-1"]`
- `button[aria-controls="flight-search-2"]`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `#origin-airport`
- `#destination-airport`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- `.ot-cookie-policy-link`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `nav`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 20

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__listItem:nth-child(1)`
- `.SearchTabs-module__3-nUmG__listItem:nth-child(2)`
- `.SearchTabs-module__3-nUmG__listItem:nth-child(3)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
- `.Footer-module__q7ZRWa__column:nth-child(1) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(6)`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
- `.Footer-module__q7ZRWa__column:nth-child(2) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(1)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(2)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(3)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(4)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(5)`
- `.Footer-module__q7ZRWa__column:nth-child(3) > .Footer-module__q7ZRWa__columnList[role="navigation"] > li:nth-child(6)`
