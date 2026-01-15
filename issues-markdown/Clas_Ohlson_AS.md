# WCAG Violations Report for Clas Ohlson AS

**Timestamp:** 2026-01-15T06:56:17.114Z
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
- `.carousel__component.carousel-component-parent.right-shadow:nth-child(12) > .carousel__component--headline:nth-child(1) > .title-two`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="cx-webChatButton"], img`

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
- **Count:** 9

#### Affected Elements:

- `.content:nth-child(2) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(2) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(2) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(2) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.cot-se-inspiration__item:nth-child(5) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(11) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(1) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(11) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(2) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(11) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(3) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`
- `.content:nth-child(11) > .cot-se-wrapper > .cot-se-inspiration > .cot-se-inspiration__grid > .cot-se-inspiration__item:nth-child(4) > .cot-se-inspiration__item-content > .cot-se-inspiration__item-button.cot-se-inspiration__item-button--black`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="cx-webChatButton"], .go4199366604`
