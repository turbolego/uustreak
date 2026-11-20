# WCAG Violations Report for Valle kommune

**Timestamp:** 2026-11-20T06:38:11.188Z
**URL:** [https://www.valle.kommune.no/](https://www.valle.kommune.no/)
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

- **Target:** `img[alt="Valle kommune"]`
  - **HTML:** `<img alt="Valle kommune" src="/handlers/bv.ashx/ie7b31154-68e7-40ce-a3cb-3b92f24c2cce/887e2valle-logo-borte-horisontal_rgb.svg">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_ctl05_WebpartId_376 > .webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktivitetskalender</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_bkaudio`
  - **HTML:** `<audio id="vfact_bkaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

