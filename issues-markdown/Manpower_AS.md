# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-01-03T00:41:12.710Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- `#hs-form-iframe-0, .multi-container`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(1)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(2)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(3)`

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `#hs-form-iframe-0, .multi-container`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(1)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(2)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(3)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `#hs-form-iframe-0, .hs-button`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.featurette-section.white.standard:nth-child(3) > .container > .row > .col-lg-7 > .featurette-body > .name`
- `.featurette-section.white.standard:nth-child(5) > .container > .row > .col-lg-7 > .featurette-body > .name`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.main-nav-item[aria-label="main nav item"][role="navigation"]:nth-child(1)`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `#hs-form-iframe-0, .multi-container`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(1)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(2)`
- `#hs-form-iframe-0, .hs-form-checkbox:nth-child(3)`
