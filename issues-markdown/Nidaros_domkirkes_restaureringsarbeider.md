# WCAG Violations Report for Nidaros domkirkes restaureringsarbeider

**Timestamp:** 2026-11-22T05:37:43.420Z
**URL:** [https://www.pilegrimsleden.no/](https://www.pilegrimsleden.no/)
**Total Violations:** 3

## Violation Details

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.entry__main`
  - **HTML:** `<main class="entry__main homepage__main ">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.main`
  - **HTML:** `<main class="main">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.main`
  - **HTML:** `<main class="main">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

