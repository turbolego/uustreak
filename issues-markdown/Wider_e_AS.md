# WCAG Violations Report for Widerøe AS

**Timestamp:** 2025-10-30T12:05:04.082Z
**URL:** [https://www.wideroe.no/#](https://www.wideroe.no/#)
**Total Violations:** 9

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- `.col-sm-12.col-md-6.col-xs-12:nth-child(1) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"]`
- `.col-sm-6.col-md-6.col-xs-12:nth-child(2) > ul[role="navigation"]`
- `.col-sm-12.col-md-6.col-xs-12:nth-child(2) > .row > .col-sm-6.col-md-6.col-xs-12:nth-child(1) > ul[role="navigation"]`

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 2

#### Affected Elements:

- `#departureAirport`
- `#arrivalAirport`

### ARIA roles used must conform to valid values

- **Impact:** critical
- **Description:** Ensure all elements with a role attribute use a valid value
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-roles?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `div[role="header"]`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.footer-container`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `footer`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.col-sm-5`
- `footer`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 18

#### Affected Elements:

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

### Zooming and scaling must not be disabled

- **Impact:** critical
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.book-your-flight-label`
- `.new-booking-widget-elements-desktop`
