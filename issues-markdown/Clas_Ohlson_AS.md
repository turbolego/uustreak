# WCAG Violations Report for Clas Ohlson AS

**Timestamp:** 2026-11-23T06:09:25.977Z
**URL:** [https://www.clasohlson.com/no/](https://www.clasohlson.com/no/)
**Total Violations:** 6

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.header`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `.cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
- `.cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
- `.cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
- `.cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`
- `.cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > div > .cot-se-inspiration__item-title > span`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#cx-livechat-host,iframe[name="cx-webChatButton"]`
- `#cx-livechat-host,iframe[name="cx-webChatWindow"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 18

#### Affected Elements:

- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(7) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(8) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.cot-se-inspiration__item:nth-child(9) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.cot-se-inspiration__item:nth-child(10) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(7) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(7) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(8) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.active[role="tab"]`
- `li[role="tab"]:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#cx-livechat-host,iframe[name="cx-webChatButton"], #container`
