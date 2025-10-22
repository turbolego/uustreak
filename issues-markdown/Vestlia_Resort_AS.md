# WCAG Violations Report for Vestlia Resort AS

**Timestamp:** 2025-10-22T00:36:24.499Z
**URL:** [https://vestlia.no/#](https://vestlia.no/#)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 12

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `#widgetContainer,.box-border.flex-1.flex-col:nth-child(1) > .min-h-\[20px\].pb-\[10px\].whitespace-nowrap`
- `#widgetContainer,.box-border.flex-1.flex-col:nth-child(2) > .min-h-\[20px\].pb-\[10px\].whitespace-nowrap`
- `#widgetContainer,.visible`
- `.fusion-title-6 > h2`
- `.fusion-title-11 > h2`
- `.button-9 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `#mc-embedded-subscribe`
- `.button-11 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `.button-12 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `.button-13 > .fusion-button-text.awb-button__text.awb-button__text--default`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.fusion-title-2 > h5`
- `.fusion-title-7 > h6`
- `.fusion-title-10 > h6`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `div:nth-child(21) > img`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.awb-oc-menu-item-link`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2
- **Count:** 2

#### Affected Elements:

- `#widgetContainer,button[aria-controls="radix-P0-2"]`
- `#widgetContainer,button[aria-controls="radix-P0-3"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 11

#### Affected Elements:

- `.skip-link`
- `.fusion-builder-column-1`
- `.fusion-flex-justify-content-center.fusion-content-layout-column.fusion-column-wrapper > .sm-text-align-center.fusion-image-element`
- `.fusion-builder-column-25`
- `.fusion-builder-column-26`
- `.fusion-builder-column-27`
- `.fusion-builder-row-13`
- `.fusion-builder-row-15`
- `.fusion-builder-row-16`
- `body > div:nth-child(19)`
- `body > div:nth-child(21)`
