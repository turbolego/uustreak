# WCAG Violations Report for Lofotr Vikingmuseum AS

**Timestamp:** 2026-10-08T10:42:57.069Z
**URL:** [https://www.museumnord.no/.well-known/sgcaptcha/?r=%2Fvare-museer%2Flofotr-vikingmuseum%2F&y=ipc:172.185.55.177:1791456172.000](https://www.museumnord.no/.well-known/sgcaptcha/?r=%2Fvare-museer%2Flofotr-vikingmuseum%2F&y=ipc:172.185.55.177:1791456172.000)
**Total Violations:** 2

## Violation Details

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `section`
  - **HTML:** `<section>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

