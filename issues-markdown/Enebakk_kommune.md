# WCAG Violations Report for Enebakk kommune

**Timestamp:** 2026-11-20T06:08:51.986Z
**URL:** [https://www.enebakk.kommune.no/](https://www.enebakk.kommune.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `img`
  - **HTML:** `<img alt="Enebakk kommune" src="/handlers/bv.ashx/i361f84a6-a9b4-48c0-8c08-89213d2964ea/498fdenebakk-logo-sekundar-mork.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #546356; --bc-primary-color-400: #657266; --bc-primary-color-300: #838E84; --bc-primary-color-200: #A8AFA8; --bc-primary-color-100: #CACFCA;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

