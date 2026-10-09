# WCAG Violations Report for Skagen AS

**Timestamp:** 2026-10-09T05:09:29.845Z
**URL:** [https://www.skagenfondene.no/](https://www.skagenfondene.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.linkArea.col-md-3.col-sm-6:nth-child(1) > h4`
  - **HTML:** `<h4>Våre produkter</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.footer__logo`
  - **HTML:** `<img src="/globalassets/skagen-funds/logos/skagen-logos/skagen_pos.svg?v=8decac4e6eece80" class="footer__logo">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.social-media__link__twitter`
  - **HTML:** `<img src="/Static/img/icons/X.svg" class="social-media__link__twitter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.social-media__link__fb`
  - **HTML:** `<img src="/Static/img/icons/fb-svg.svg" class="social-media__link__fb">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.social-media__link__linkedin`
  - **HTML:** `<img src="/Static/img/icons/linkedin-svg.svg" class="social-media__link__linkedin">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[title="SKAGEN på Instagram"] > img`
  - **HTML:** `<img src="/Static/img/icons/insta-svg.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.OfficeArea > a[href="/"]`
  - **HTML:** `<a href="/"> <img src="/globalassets/skagen-funds/logos/skagen-logos/skagen_pos.svg?v=8decac4e6eece80" class="footer__logo"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="mailto:"]`
  - **HTML:** `<a href="mailto:"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.footer__part-of-storebrand > a`
  - **HTML:** `<a href="https://www.storebrandam.com/no-NO/"> <img src="/globalassets/storebrand-asset-management/pictures/logos/part-of-storebrand_pos_rgb.svg?v=8decac50e459b80" alt=""> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.disclaimerArea`
  - **HTML:** `<div class="disclaimerArea">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h2[data-v-058a8992=""]`
  - **HTML:** `<h2 data-v-058a8992="">Vi bruker cookies</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text--gdpr`
  - **HTML:** `<div data-v-058a8992="" class="text--gdpr">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

