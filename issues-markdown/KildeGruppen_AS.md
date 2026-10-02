# WCAG Violations Report for KildeGruppen AS

**Timestamp:** 2026-10-02T17:15:03.560Z
**URL:** [https://www.kilde.no/](https://www.kilde.no/)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#__next > div:nth-child(1)`
  - **HTML:** `<div style="z-index:0"><canvas id="rdlgrdanim" style="position:fixed" width="1280" height="820"></canvas></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

