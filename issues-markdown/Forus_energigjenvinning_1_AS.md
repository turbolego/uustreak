# WCAG Violations Report for Forus energigjenvinning 1 AS

**Timestamp:** 2026-11-19T06:40:21.831Z
**URL:** [https://www.forusenergi.no/](https://www.forusenergi.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#w-dropdown-toggle-0`
  - **HTML:** `<div class="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#w-dropdown-toggle-1`
  - **HTML:** `<div class="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.

- **Target:** `#w-dropdown-toggle-2`
  - **HTML:** `<div class="dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.top`
  - **HTML:** `<div class="section top">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.site.container > .w-dyn-list`
  - **HTML:** `<div class="w-dyn-list">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.grey.section:nth-child(4) > .site.container > .centerbutton`
  - **HTML:** `<div class="centerbutton"><a href="/kunde/aktuelt" class="button green w-button">Se flere saker</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.driftwrap > .w-dyn-list`
  - **HTML:** `<div class="w-dyn-list">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.grey.section:nth-child(5) > .site.container > .centerbutton`
  - **HTML:** `<div class="centerbutton"><a href="/kunde/driftsmeldinger" class="button green w-button">Gå til driftsmeldinger</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.laer`
  - **HTML:** `<div class="section laer maxwid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

