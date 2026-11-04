# WCAG Violations Report for Stortinget

**Timestamp:** 2026-11-04T05:33:05.767Z
**URL:** [https://www.stortinget.no/](https://www.stortinget.no/)
**Total Violations:** 2

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `img[alt="Terje Aasland"]`
  - **HTML:** `<img src="/Personimages/PersonImages_Small/TELA_lite.jpg" alt="Terje Aasland" title="Terje Aasland">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Kari Nessa Nordtun"]`
  - **HTML:** `<img src="/Personimages/PersonImages_Small/KARNOR_lite.jpg" alt="Kari Nessa Nordtun" title="Kari Nessa Nordtun">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.site-layout__visually-hidden-h1`
  - **HTML:** `<h1 class="site-layout__visually-hidden-h1">Stortinget.no</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

