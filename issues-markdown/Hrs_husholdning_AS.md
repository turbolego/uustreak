# WCAG Violations Report for Hrs husholdning AS

**Timestamp:** 2026-11-19T06:44:22.148Z
**URL:** [https://www.hrs.no/](https://www.hrs.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 22

#### Affected Elements:

- `.feature--color-green > .feature__content > .feature__list > li:nth-child(1) > a > span`
- `.feature--color-green > .feature__content > .feature__list > li:nth-child(4) > a > span`
- `.feature--color-green > .feature__content > .feature__list > li:nth-child(5) > a > span`
- `.feature--color-green > .feature__content > .feature__list > li:nth-child(6) > a > span`
- `.feature--color-green > .feature__content > .feature__list > li:nth-child(7) > a > span`
- `.calendar-search__button > span`
- `article:nth-child(1) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(1) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(2) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(2) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(3) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(3) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(4) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(4) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(5) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(5) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(6) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(6) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(7) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(7) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`
- `article:nth-child(8) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(1)`
- `article:nth-child(8) > .post-grid__content > .post-grid__categories > .post-grid__categories__item:nth-child(2)`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.feature--color-green > .feature__content > h3`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `.nav__logo__link`
- `.footer__header__logo > a[href$="www.hrs.no"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.cookies`
