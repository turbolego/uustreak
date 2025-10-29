# WCAG Violations Report for JAG Assistanse AS

**Timestamp:** 2025-10-29T00:37:58.307Z
**URL:** [https://jagassistanse.no/#](https://jagassistanse.no/#)
**Total Violations:** 8

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 21

#### Affected Elements:

- `.pre-heading`
- `.col-half:nth-child(1) > .ng-post-wrapper-2.custom > .ng-post-text-wrapper-2 > .ingress-post`
- `.col-half:nth-child(2) > .ng-post-wrapper-2.custom > .ng-post-text-wrapper-2 > .ingress-post`
- `.col-half:nth-child(3) > .ng-post-wrapper-2.custom > .ng-post-text-wrapper-2 > .ingress-post`
- `.ng-hero-3-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(1)`
- `.ng-hero-3-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(2)`
- `.ng-hero-3-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(3)`
- `.ng-ul-li:nth-child(4)`
- `.ng-ul-li:nth-child(5)`
- `.jobb-right-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(1)`
- `.jobb-right-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(2)`
- `.jobb-right-inner > .left-align.banneromrade.section-heading-wrapper > ul > .ng-ul-li:nth-child(3)`
- `.w-col-4.w-col:nth-child(1) > .ng-footer-text:nth-child(2) > p`
- `.w-col-4.w-col:nth-child(1) > .ng-footer-text:nth-child(4) > p`
- `.w-col-4.w-col:nth-child(2) > .ng-footer-text:nth-child(2) > p`
- `.w-col-4.w-col:nth-child(2) > .ng-footer-text:nth-child(4) > p`
- `#menu-item-1 > a`
- `#menu-item-2 > a`
- `#menu-item-3 > a`
- `.sub-footer > .subfooter-text:nth-child(1)`
- `.subfooter-text:nth-child(2)`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `h4:nth-child(3)`
- `.col-half:nth-child(1) > .ng-post-wrapper-2.custom > .ng-post-text-wrapper-2 > .ng-post-heading`
- `.jobb-right-inner > .left-align.banneromrade.section-heading-wrapper > h5`
- `.banner-3 > .ng-hero-3-left > .ng-hero-3-inner > .left-align.banneromrade.section-heading-wrapper > h5`
- `.w-col-4.w-col:nth-child(1) > .ng-footer-text:nth-child(1) > .wp-block-heading`

### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `.ng-footer-logo > img`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 8

#### Affected Elements:

- `.brand`
- `.search-box`
- `.col-half:nth-child(1) > .ng-post-wrapper-2.custom > .ng-post-thumb.w-inline-block`
- `.col-half:nth-child(2) > .ng-post-wrapper-2.custom > .ng-post-thumb.w-inline-block`
- `.col-half:nth-child(3) > .ng-post-wrapper-2.custom > .ng-post-thumb.w-inline-block`
- `li:nth-child(1) > .ng-some-icon[target="_blank"]`
- `li:nth-child(2) > .ng-some-icon[target="_blank"]`
- `li:nth-child(3) > .ng-some-icon[target="_blank"]`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 3

#### Affected Elements:

- `#menu-item-1`
- `#menu-item-2`
- `#menu-item-3`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 7

#### Affected Elements:

- `section`
- `.section`
- `.news-section`
- `.ng-hero-3:nth-child(5)`
- `.jobb`
- `.banner-3`
- `.ng-footer`
