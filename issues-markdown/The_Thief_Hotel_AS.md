# WCAG Violations Report for The Thief Hotel AS

**Timestamp:** 2026-10-03T04:23:44.439Z
**URL:** [https://thethief.com/](https://thethief.com/)
**Total Violations:** 4

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#container > .block-container__inner.container-fluid.block-block__inner > .gallery__controls > .gallery__controls__next[aria-title="Next"][role="button"]`
  - **HTML:** `<span aria-title="Next" role="button" class="gallery__controls__next">›</span>`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-title

- **Target:** `#container-6 > .block-container__inner.container-fluid.block-block__inner > .gallery__controls > .gallery__controls__next[aria-title="Next"][role="button"]`
  - **HTML:** `<span aria-title="Next" role="button" class="gallery__controls__next">›</span>`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-title


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `gh-newsletter, .btn__label`
  - **HTML:** `<span _ngcontent-ng-c4056494200="" data-qa="button-label" class="btn__label"> Abonner </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.33 (foreground color: #fdfdfd, background color: #de393f, font size: 14.4pt (19.2px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#heading-572 > .block-module__inner.block-block__inner > h4`
  - **HTML:** `<h4 class=""> Book </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#image-145 > a[target="_blank"][rel="noopener"]`
  - **HTML:** `<a href="https://travellermade.com/hotel-partners-europe/the-thief-norway/" target="_blank" rel="noopener" class="block-block__inner block-module__inner">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

