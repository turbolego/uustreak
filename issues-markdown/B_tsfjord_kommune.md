# WCAG Violations Report for Båtsfjord kommune

**Timestamp:** 2026-11-22T05:46:21.438Z
**URL:** [https://www.batsfjord.kommune.no/](https://www.batsfjord.kommune.no/)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

