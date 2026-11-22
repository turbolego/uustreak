# WCAG Violations Report for Birkenes kommune

**Timestamp:** 2026-11-22T05:43:31.662Z
**URL:** [https://birkenes.kommune.no/](https://birkenes.kommune.no/)
**Total Violations:** 6

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#search-now`
  - **HTML:** `<button class="btn btn-search" id="search-now" type="button"><i class="bi_interface-search"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js">`
  - **Failure summary:** Fix any of the following: The <html> element does not have a lang attribute


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.slogan > img`
  - **HTML:** `<img src="https://prokomresources.prokomcdn.no/client-grunt/04-common/img/birkenes-slogan-hvit.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.front-search > .container > .row > .text-center`
  - **HTML:** `<h2 class="text-center">Hva leter du etter?</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#appendedInputButtons`
  - **HTML:** `<input type="text" class="form-control" id="appendedInputButtons" placeholder="Skriv inn søkeord...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wrapper`
  - **HTML:** `<div class="wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

