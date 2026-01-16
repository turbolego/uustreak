# WCAG Violations Report for The Thief Hotel AS

**Timestamp:** 2026-01-16T00:43:14.025Z
**URL:** [https://thethief.com/](https://thethief.com/)
**Total Violations:** 4

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `#container > .block-container__inner.container-fluid.block-block__inner > .gallery__controls > .gallery__controls__next[aria-title="Next"][role="button"]`
- `#container-6 > .block-container__inner.container-fluid.block-block__inner > .gallery__controls > .gallery__controls__next[aria-title="Next"][role="button"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.strawberry-chat-widget__toggle`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 3

#### Affected Elements:

- `#revinate_contact_api_form_no > .form__inner > .form__fields > .two-columns > .form-group:nth-child(1) > .long[name="firstName"][type="text"]`
- `#revinate_contact_api_form_no > .form__inner > .form__fields > .two-columns > .form-group:nth-child(2) > .long[name="lastName"][type="text"]`
- `#revinate_contact_api_form_no > .form__inner > .form__fields > .form-group:nth-child(2) > .long[required=""][type="email"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `.nav-logo`
- `.social-icons > a[target="_blank"][rel="noopener"]:nth-child(1)`
- `a[target="_blank"][rel="noopener"]:nth-child(2)`
- `a[target="_blank"][rel="noopener"]:nth-child(3)`
