# WCAG Violations Report for BN Bank ASA

**Timestamp:** 2026-09-24T03:33:50.001Z
**URL:** [https://www.bnbank.no/](https://www.bnbank.no/)
**Total Violations:** 6

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.background--light-wine-red > .content-card--image-above.content-card__content-wrapper > .content-card__content > .content-card__upper-content > .h3`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#heading-toggle-hvordan-bytter-jeg-til-bn-bank > h5`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.banner-with-everything__graphic`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 7

#### Affected Elements:

- `#heading-hvordan-bytter-jeg-til-bn-bank`
- `#heading-er-virkelig-bankkortet-helt-gebyrfritt-i-bruk`
- `#heading-hvor-mye-kan-jeg-lane-til-bolig`
- `#heading-hvor-mye-egenkapital-ma-jeg-ha-for-a-kjope-se`
- `#heading-hvordan-laste-ned-mobilbank`
- `#heading-hvordan-aktivere-mobilbanken`
- `#heading-hvordan-fa-bankid-pa-mobil`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `#cookie-banner0 > .c-head`
- `.c-body`
- `.navigation__logo`
- `.navigation__actions`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- `a[href$="lan/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
- `a[href$="sparing/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
- `a[aria-label="Kort"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
- `a[aria-label="Bytte bank"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
- `a[href$="kalkulatorer/"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
- `a[aria-label="Kundefavoritt"] > .link-icon__content > .link-icon__left > .link-icon__icon[aria-label=""][role="img"]`
