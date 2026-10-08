# WCAG Violations Report for Connect Bus AS

**Timestamp:** 2026-10-08T10:18:45.099Z
**URL:** [https://www.connectbus.no/](https://www.connectbus.no/)
**Total Violations:** 4

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#\31 622979881007`
  - **HTML:** `<iframe width="1" height="1" src="about:blank" id="1622979881007" scrolling="no" marginwidth="0" marginheight="0" noresize="0" border="0" frameborder="0" framespacing="0" background="transparent" allowtransparency="allowTransparency" style…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#\31 622979881007, html`
  - **HTML:** `<html><head></head><body marginwidth="0" marginheight="0"></body></html>`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#\31 622979881007, html`
  - **HTML:** `<html><head></head><body marginwidth="0" marginheight="0"></body></html>`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `article`
  - **HTML:** `<article class="block-list">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

