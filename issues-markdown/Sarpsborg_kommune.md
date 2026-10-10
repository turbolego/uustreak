# WCAG Violations Report for Sarpsborg kommune

**Timestamp:** 2026-10-10T08:15:01.600Z
**URL:** [https://www.sarpsborg.com/](https://www.sarpsborg.com/)
**Total Violations:** 6

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.f-menu`
  - **HTML:** `<ul class="f-menu" role="menu">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: button


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#aapne-kommunekari > h2`
  - **HTML:** `<h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#appendedInputButtons`
  - **HTML:** `<input class="form-control ess-searchbox" id="appendedInputButtons" type="text" style="float: left;" placeholder="Hva kan vi hjelpe deg med?" title="Hva kan vi hjelpe deg med?">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.main-set`
  - **HTML:** `<div class="main-set" style="background: transparent url(/link/6c7e100857f44c8bafbc6e624b841c98.aspx) no-repeat center center; background-size:cover;" role="navigation">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `body > h1`
  - **HTML:** `<h1 class="sr-only">Forside www.sarpsborg.com</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row4`
  - **HTML:** `<div class="row4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row6`
  - **HTML:** `<div class="clearfix container row6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-header-container`
  - **HTML:** `<div class="cc-header-container"> <p class="cc-title">Vi bruker informasjonskapsler (cookies)</p> <div class="language-dropdown"><select><option value="no">Norsk</option><option value="en">English</option></select></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-text`
  - **HTML:** `<p class="cc-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.language-dropdown > select`
  - **HTML:** `<select><option value="no">Norsk</option><option value="en">English</option></select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

