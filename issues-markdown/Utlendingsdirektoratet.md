# WCAG Violations Report for Utlendingsdirektoratet

**Timestamp:** 2026-10-03T04:24:26.909Z
**URL:** [https://www.udi.no/](https://www.udi.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#login-link`
  - **HTML:** `<a id="login-link" href="/min-side/" role="img" aria-label="Logg inn"><span class="material-symbols-outlined login-icon" aria-hidden="true">login</span>Logg inn</a>`
  - **Failure summary:** Fix any of the following: ARIA role img is not allowed for given element


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#search`
  - **HTML:** `<input accesskey="4" id="search" name="searchQuery" type="search" class="searchField" data-lang="nb" title="Skriv inn hva du vil søke på" placeholder="Søk">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class=" js csscolumns svg inlinesvg svgclippaths" lang="nb">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

