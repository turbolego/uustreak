# WCAG Violations Report for Skagen AS

**Timestamp:** 2025-10-29T00:39:45.740Z
**URL:** [https://www.skagenfondene.no/#](https://www.skagenfondene.no/#)
**Total Violations:** 6

## Violation Details

### ARIA input fields must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA input field has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.carousel-inner`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `.carousel-inner`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.linkArea.col-md-3.col-sm-6:nth-child(1) > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 5

#### Affected Elements:

- `.footer__logo`
- `.social-media__link__twitter`
- `.social-media__link__fb`
- `.social-media__link__linkedin`
- `a[title="SKAGEN på Instagram"] > img`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `.OfficeArea > a[href="/"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- `.disclaimerArea`
- `.skagen-consent-container > h2`
- `.text--gdpr`
