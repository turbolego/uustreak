# WCAG Violations Report for Utlendingsdirektoratet

**Timestamp:** 2026-10-22T04:08:06.498Z
**URL:** [https://www.udi.no/](https://www.udi.no/)
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

- **Target:** `#login-link`
  - **HTML:** `<a id="login-link" href="https://www.udi.no/min-side/" role="img" aria-label="Logg inn"><span class="material-symbols-outlined login-icon" aria-hidden="true">login</span>Logg inn</a>`
  - **Failure summary:** Fix any of the following: ARIA role img is not allowed for given element


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#navBarMainMenuDropdown`
  - **HTML:** `<button class="menuToggleBtn" id="navBarMainMenuDropdown" aria-label="Megameny knapp" aria-haspopup="true" aria-expanded="false" aria-controls="mainMenu">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### lang attribute must have a valid value

- **Impact:** serious
- **Description:** Ensure lang attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=playwright
- **Tags:** cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2, ACT, RGAAv4, RGAA-8.8.1
- **Count:** 4

#### Affected Elements:

- **Target:** `div:nth-child(1) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
  - **HTML:** `<div lang="System.Func`1[System.String]" class="nav-tile-wrapper grid">`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

- **Target:** `div:nth-child(2) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
  - **HTML:** `<div lang="System.Func`1[System.String]" class="nav-tile-wrapper grid">`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

- **Target:** `div:nth-child(3) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
  - **HTML:** `<div lang="System.Func`1[System.String]" class="nav-tile-wrapper grid">`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

- **Target:** `div:nth-child(4) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
  - **HTML:** `<div lang="System.Func`1[System.String]" class="nav-tile-wrapper grid">`
  - **Failure summary:** Fix all of the following: Value of lang attribute not included in the list of valid languages

