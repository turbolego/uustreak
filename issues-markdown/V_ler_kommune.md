# WCAG Violations Report for Våler kommune

**Timestamp:** 2026-11-23T06:45:34.676Z
**URL:** [https://www.valer.kommune.no/](https://www.valer.kommune.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.72 (foreground color: #999999, background color: #fafafa, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.front-featured__featuredBox--two-links > .front-featured__inner > .front-featured__small-heading > h3`
  - **HTML:** `<h3></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.clearfix.grid-wrap:nth-child(3) > .front-feature.front-featured__featuredBox.front-block > .front-featured__inner > .front-featured__small-heading > h3`
  - **HTML:** `<h3></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#nav__item--form > .global-search__form-input[type="search"][name="q"]`
  - **HTML:** `<input class="global-search__form-input" type="search" name="q" value="">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.front-featured__link.article__link:nth-child(2) > .front-featured__main-link`
  - **HTML:** `<a class="front-featured__main-link" href="https://www.valer.kommune.no/politikk/lokaldemokrati"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="height: 100%;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#ppms-dca8db8c-7aa0-4afd-bbac-75270ff8cde2`
  - **HTML:** `<span class="ppms_cm_header1" id="ppms-dca8db8c-7aa0-4afd-bbac-75270ff8cde2">Ditt personvern</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms-9e3d7680-e7b5-4ca7-8e9b-71c980481f28`
  - **HTML:** `<div class="ppms_cm_description_wrapper" id="ppms-9e3d7680-e7b5-4ca7-8e9b-71c980481f28">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#popup-link`
  - **HTML:** `<a class="ppms_cm_link" id="popup-link" target="_self" href="https://www.valer.kommune.no/kommunen-var/personvernerklaering">Mer informasjon om ditt personvern</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ppms_cm_footer__powered_by`
  - **HTML:** `<span class="ppms_cm_footer__powered_by" data-disable-select="true" id="ppms_cm_footer__powered_by">Powered by</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

