# WCAG Violations Report for Vestlia Resort AS

**Timestamp:** 2026-01-17T00:41:45.826Z
**URL:** [https://vestlia.no/#](https://vestlia.no/#)
**Total Violations:** 10

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.q-btn--flat`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 13

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
- `#widgetContainer,div[aria-label="Choose date"] > .min-w-0.pr-3.flex-col > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
- `#widgetContainer,div[aria-label="Accommodations and guests"] > .min-w-0.pr-3.flex-col > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
- `#widgetContainer,.visible`
- `.fusion-title-6 > h2`
- `.fusion-title-11 > h2`
- `.button-11 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `.fusion-title-13 > h2`
- `.button-12 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `#f_26d5cba1-095d-436b-bb55-1ef43eff125d`
- `.button-14 > .fusion-button-text.awb-button__text.awb-button__text--default`
- `#f_b182aa95-82ea-4a8f-9dd9-626926d35a71`

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

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `div[formid="79"] > .q-page-container.full-width > .q-page`
- `.q-mt-md.q-page`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#main`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#main`

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
- **Count:** 14

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
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(1)`
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(3)`
- `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text > span`
- `div:nth-child(27)`
- `div:nth-child(28)`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.q-img`
