# WCAG Violations Report for Stortinget

**Timestamp:** 2026-11-11T05:17:57.688Z
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

- **Target:** `img[alt="Astri Aas-Hansen"]`
  - **HTML:** `<img src="/Personimages/PersonImages_Small/ASTAAS_lite.jpg" alt="Astri Aas-Hansen" title="Astri Aas-Hansen">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Kjersti Stenseng"]`
  - **HTML:** `<img src="/Personimages/PersonImages_Small/KJSE_lite.jpg" alt="Kjersti Stenseng" title="Kjersti Stenseng">`
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

