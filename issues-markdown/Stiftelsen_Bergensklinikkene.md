# WCAG Violations Report for Stiftelsen Bergensklinikkene

**Timestamp:** 2026-01-04T00:31:39.047Z
**URL:** [https://vipestores.com/no](https://vipestores.com/no)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `.MS-left`
- `.MS-right`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.lrnMore[target="_blank"]:nth-child(2)`
- `.lrnMore[target="_blank"]:nth-child(3)`

### Documents must have <title> element to aid in navigation

- **Impact:** serious
- **Description:** Ensure each HTML document contains a non-empty <title> element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag242, TTv5, TT12.a, EN-301-549, EN-9.2.4.2, ACT, RGAAv4, RGAA-8.5.1
- **Count:** 1

#### Affected Elements:

- `html`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.gifts > .font-weight-bolder.item-card-text-cat`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.is-selected > .first-card.card.card-body > .img-fluid[src$="item_1.png"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 10

#### Affected Elements:

- `.navbar-brand`
- `.itemThirdColor.item:nth-child(1) > .w-100.h-100.d-flex`
- `.itemFirstColor.item:nth-child(2) > .w-100.h-100.d-flex`
- `.itemSecondColor.item:nth-child(3) > .w-100.h-100.d-flex`
- `.itemThirdColor.item:nth-child(4) > .w-100.h-100.d-flex`
- `.itemFirstColor.item:nth-child(5) > .w-100.h-100.d-flex`
- `.itemSecondColor.item:nth-child(6) > .w-100.h-100.d-flex`
- `.itemThirdColor.item:nth-child(7) > .w-100.h-100.d-flex`
- `.itemFirstColor.item:nth-child(8) > .w-100.h-100.d-flex`
- `.itemSecondColor.item:nth-child(9) > .w-100.h-100.d-flex`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.button`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.message`
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(1)`
- `iframe[title="reCAPTCHA"], .rc-anchor-normal-footer > .rc-anchor-pt > a:nth-child(3)`
- `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text > span`
