# WCAG Violations Report for Vestlia Resort AS

**Timestamp:** 2025-12-09T00:37:06.986Z
**URL:** [https://vestlia.no/#](https://vestlia.no/#)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 13

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `#widgetContainer,div[aria-label="Choose date"] > .min-w-0.items-start.pr-3 > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
- `#widgetContainer,div[aria-label="Accommodations and guests"] > .min-w-0.items-start.pr-3 > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
- `#widgetContainer,.visible`
- `.fusion-title-6 > h2`
- `.fusion-title-11 > h2`
- `.button-9 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `.fusion-title-13 > h2`
- `.button-10 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `#mc-embedded-subscribe`
- `.fusion-title-16 > h3`
- `.button-12 > .fusion-button-text.awb-button__text.awb-button__text--default`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.fusion-title-4 > h5`
- `.fusion-title-7 > h6`
- `.fusion-title-10 > h6`
- `.fusion-title-12 > h6`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.awb-oc-menu-item-link`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `#widgetContainer,button[aria-controls="radix-P0-2"]`
- `#widgetContainer,button[aria-controls="radix-P0-3"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 11

#### Affected Elements:

- `.skip-link`
- `.fusion-builder-column-1`
- `.fusion-flex-justify-content-center.fusion-content-layout-column.fusion-column-wrapper > .sm-text-align-center.fusion-image-element`
- `.fusion-builder-column-27`
- `.fusion-builder-column-28`
- `.fusion-builder-column-29`
- `.fusion-builder-row-15`
- `.fusion-builder-row-17`
- `.fusion-builder-row-18`
- `div:nth-child(21)`
- `div:nth-child(22)`
