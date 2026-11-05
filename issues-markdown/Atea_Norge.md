# WCAG Violations Report for Atea Norge

**Timestamp:** 2026-11-05T09:01:11.541Z
**URL:** [https://www.atea.no/](https://www.atea.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#menuTarget, .nav__search--input`
  - **HTML:** `<input _ngcontent-ng-c4183246691="" role="search" type="search" autocomplete="off" class="nav__search--input" name="q" placeholder="Søk">`
  - **Failure summary:** Fix any of the following: ARIA role search is not allowed for given element


### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#menuTarget, .nav__primary--icon`
  - **HTML:** `<span _ngcontent-ng-c4232304864="" role="button" tabindex="0" class="nav__primary--icon online ng-star-inserted">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `#widget2, html`
  - **HTML:** `<html lang="no" dir="ltr" data-cast-api-enabled="true">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.ot-cookie-policy-link`
  - **HTML:** `<a class="ot-cookie-policy-link" href="https://www.atea.com/data-privacy-policy/" target="_blank" aria-label="More information about your privacy, opens in a new tab" rel="noopener noreferrer">Read more about that here</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#menuTarget, .ad__skip`
  - **HTML:** `<nav class="ad__skip ng-tns-c1965232523-0 ng-star-inserted"><a class="ng-tns-c1965232523-0 ng-star-inserted" href="#skiptocontent">Hopp til innhold</a><!----><!----><!----></nav>`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

