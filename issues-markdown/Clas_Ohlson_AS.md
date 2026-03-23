# WCAG Violations Report for Clas Ohlson AS

**Timestamp:** 2026-03-23T00:46:47.314Z
**URL:** [https://www.clasohlson.com/no/#](https://www.clasohlson.com/no/#)
**Total Violations:** 5

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `.carousel__component.carousel-component-parent.right-shadow:nth-child(5) > .carousel__component--headline:nth-child(1) > .title-two`
- `.carousel__component.carousel-component-parent.right-shadow:nth-child(7) > .carousel__component--headline:nth-child(1) > .title-two`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#cx-livechat-host,iframe[name="cx-webChatButton"]`
- `#cx-livechat-host,iframe[name="cx-webChatWindow"]`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.skip-nav`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 12

#### Affected Elements:

- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(6) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(9) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(6) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.header`
