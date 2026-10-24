# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-10-24T03:44:05.374Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- `#hs-form-iframe-0, ul`
- `#hs-form-iframe-0, li:nth-child(1)`
- `#hs-form-iframe-0, li:nth-child(2)`
- `#hs-form-iframe-0, li:nth-child(3)`
- `#hs-form-iframe-0, li:nth-child(4)`

### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- `#hs-form-iframe-0, ul`
- `#hs-form-iframe-0, li:nth-child(1)`
- `#hs-form-iframe-0, li:nth-child(2)`
- `#hs-form-iframe-0, li:nth-child(3)`
- `#hs-form-iframe-0, li:nth-child(4)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `a[aria-label="LES MER OM MANPOWER ACADEMY"]`
- `#hs-form-iframe-0, .hs-button`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 5

#### Affected Elements:

- `.col > .country-links > .lang-nav > .language-wrapper > .country[role="button"][aria-label="(Manpower-Global) pop up opens"]`
- `a[aria-label="User Login"]`
- `button[aria-label="Slide1"]`
- `button[aria-label="Slide2"]`
- `.sub-footer-disclaimer-inner > .country-links > .lang-nav > .language-wrapper > .country[role="button"][aria-label="(Manpower-Global) pop up opens"]`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- `#hs-form-iframe-0, ul`
- `#hs-form-iframe-0, li:nth-child(1)`
- `#hs-form-iframe-0, li:nth-child(2)`
- `#hs-form-iframe-0, li:nth-child(3)`
- `#hs-form-iframe-0, li:nth-child(4)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#onetrust-banner-sdk`
