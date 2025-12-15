# WCAG Violations Report for Læringsverkstedet AS

**Timestamp:** 2025-12-15T01:02:27.262Z
**URL:** [https://laringsverkstedet.no/#](https://laringsverkstedet.no/#)
**Total Violations:** 8

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.mr-3.js-searchToggle.dropdown-toggle`

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `#play-pause`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 32

#### Affected Elements:

- `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
- `.language__selector_large > .text-right.btn-link[data-toggle="dropdown"] > span`
- `.nav-item:nth-child(1) > .nav-link`
- `.nav-item:nth-child(2) > .nav-link`
- `.nav-item:nth-child(3) > .nav-link`
- `.nav-item:nth-child(4) > .nav-link`
- `.nav-item:nth-child(5) > .nav-link`
- `.nav-item:nth-child(6) > .nav-link`
- `.nav-item:nth-child(7) > .nav-link`
- `.align-middle`
- `.form-inline > .btn-outline-light.btn`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(1) > p:nth-child(3)`
- `p:nth-child(6)`
- `a:nth-child(8)`
- `a[href="tel:639 46 250"]`
- `a[href$="kontakt"]`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(2) > a`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(3) > a`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(4) > a`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(5) > a`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(6) > a`
- `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(7) > a`
- `li:nth-child(8) > a`
- `li:nth-child(9) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(1) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(2) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(3) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(4) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(5) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(6) > a`
- `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(7) > a`
- `.mt-4.col-12 > p`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.container:nth-child(3) > .mb-5.justify-content-center.row > .col-md-4.my-3.col-lg-4:nth-child(1) > .card.w-100 > .card-body > .card-title > a > h5`
- `.container:nth-child(5) > .mb-5.justify-content-center.row > .col-md-4.my-3.col-lg-4:nth-child(1) > .card.w-100 > .card-body > .card-title > a > h5`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#mainMenu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `.navbar-brand`
- `p:nth-child(3) > a`
- `.mt-5 > a[href$="laringsverkstedet.no/"]`
- `.mt-3.col-12 > a[target="_BLANK"]:nth-child(1)`
- `.mt-3.col-12 > a[target="_BLANK"]:nth-child(2)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#skipnavigation`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#play-pause`
