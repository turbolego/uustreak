# WCAG Violations Report for Halden kommune

**Timestamp:** 2026-11-22T06:09:36.894Z
**URL:** [https://www.halden.kommune.no/](https://www.halden.kommune.no/)
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

- **Target:** `img[alt="Halden kommune"]`
  - **HTML:** `<img alt="Halden kommune" src="/handlers/bv.ashx/i6d84485d-3564-4e48-a674-b70ad5dea0f5/f6b25logohalden.png">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


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

