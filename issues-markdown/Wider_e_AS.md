# WCAG Violations Report for Widerøe AS

**Timestamp:** 2026-08-29T06:20:22.734Z
**URL:** [https://www.wideroe.no/](https://www.wideroe.no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"]`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"]`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"]`

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.ToggleGroup-module__8OuBQG__active`
- `.Button-module__xaXzvq__ghost.ToggleGroup-module__8OuBQG__button[role="radio"]:nth-child(3)`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__tabList`

### Certain ARIA roles must be contained by particular parents

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require parent roles are contained by them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-parent?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__active`
- `button[aria-controls="flight-search-1"]`
- `button[aria-controls="flight-search-2"]`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `#origin-airport`
- `#destination-airport`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.CardComponent-module__OwdT0a__cardLink.CardComponent-module__OwdT0a__cardComponent:nth-child(1) > .CardComponent-module__OwdT0a__cardTextContent > .CardComponent-module__OwdT0a__cardHeading`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.col-sm-5`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 21

#### Affected Elements:

- `.SearchTabs-module__3-nUmG__listItem:nth-child(1)`
- `.SearchTabs-module__3-nUmG__listItem:nth-child(2)`
- `.SearchTabs-module__3-nUmG__listItem:nth-child(3)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(1)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(2)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(3)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(4)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(5)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(6)`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"] > .list-link-footer:nth-child(1)`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"] > .list-link-footer:nth-child(2)`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"] > .list-link-footer:nth-child(3)`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"] > .list-link-footer:nth-child(4)`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"] > .list-link-footer:nth-child(5)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(1)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(2)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(3)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(4)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(5)`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"] > .list-link-footer:nth-child(6)`
- `.list-link-footer:nth-child(7)`
