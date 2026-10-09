# WCAG Violations Report for Capgemini Norge

**Timestamp:** 2026-10-09T04:55:20.062Z
**URL:** [https://www.capgemini.com/no-no/](https://www.capgemini.com/no-no/)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#darkModeLabel`
  - **HTML:** `<label for="darkModeCheckboxDesktop" id="darkModeLabel" class="toggle-label" tabindex="0" role="switch" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); document.getElementById('darkModeCheckboxDesktop').…`
  - **Failure summary:** Fix any of the following: ARIA role switch is not allowed for given element


### Required ARIA attributes must be provided

- **Impact:** critical
- **Description:** Ensure elements with ARIA roles have all required ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#darkModeLabel`
  - **HTML:** `<label for="darkModeCheckboxDesktop" id="darkModeLabel" class="toggle-label" tabindex="0" role="switch" onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); document.getElementById('darkModeCheckboxDesktop').…`
  - **Failure summary:** Fix any of the following: Required ARIA attribute not present: aria-checked


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-topbar-wrapper`
  - **HTML:** `<div class="header-topbar-wrapper dark-gradient" role="banner" style="--header-nav-position: relative; --header-nav-menu-text-color: #FFFFFF; --header-nav-menu-background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(255, 255, 255, 0))…`
  - **Failure summary:** Fix any of the following: The banner landmark is contained in another landmark.


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header`
  - **HTML:** `<header class="wp-block-template-part">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header`
  - **HTML:** `<header class="wp-block-template-part">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.analytics-hero-banner-title:nth-child(2)`
  - **HTML:** `<a href="https://www.capgemini.com/insights/research-library/technovision-2026-guide-for-ctos-and-cios/" class="analytics-hero-banner-title"><br></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[rel="noreferrer noopener"]`
  - **HTML:** `<a href="https://www.linkedin.com/shareArticle?url=https://www.capgemini.com/insights/research-library/technovision-2026-guide-for-ctos-and-cios/" target="_blank" rel="noreferrer noopener" class="analytics-hero-banner-title"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from TrustArc
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#truste-consent-text`
  - **HTML:** `<div id="truste-consent-text" class="truste-messageColumn">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `.header_lang_menu > .header-lang-inner > .lang-list`
  - **HTML:** `<div class="lang-list">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

