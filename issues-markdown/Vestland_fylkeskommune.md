# WCAG Violations Report for Vestland fylkeskommune

**Timestamp:** 2026-10-09T08:57:40.141Z
**URL:** [https://www.vestlandfylke.no/](https://www.vestlandfylke.no/)
**Total Violations:** 5

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.masthead__menu-container`
  - **HTML:** `<div class="masthead__menu-container" role="menubar">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: a


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#search`
  - **HTML:** `<input class="search-main__input" id="search" type="search" name="searchString" title="Søk i nettsted" placeholder="Søk" autocomplete="off" required="">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a href="#main-content" class="skip-link" tabindex="1"> <div class="l-container--full">Hopp til innhald</div> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.masthead__icon-search`
  - **HTML:** `<span class="masthead__icon-search" role="img"> <span class="u-hidden">Åpne/lukk søk</span> </span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a href="#main-content" class="skip-link" tabindex="1"> <div class="l-container--full">Hopp til innhald</div> </a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

