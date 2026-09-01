# WCAG Violations Report for Manpower AS

**Timestamp:** 2026-09-01T04:02:26.768Z
**URL:** [https://www.manpower.no/nb](https://www.manpower.no/nb)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-attr?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `a[aria-label="LES MER OM MANPOWER ACADEMY"]`
- `#hs-form-iframe-0, .hs-button`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 5

#### Affected Elements:

- `#hs-form-iframe-0, ul`
- `#hs-form-iframe-0, li:nth-child(1)`
- `#hs-form-iframe-0, li:nth-child(2)`
- `#hs-form-iframe-0, li:nth-child(3)`
- `#hs-form-iframe-0, li:nth-child(4)`
