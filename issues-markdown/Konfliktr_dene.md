# WCAG Violations Report for Konfliktrådene

**Timestamp:** 2026-11-20T06:17:35.983Z
**URL:** [https://konfliktraadet.no/](https://konfliktraadet.no/)
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

- **Target:** `img[alt="Norsk (bokmål)"]`
  - **HTML:** `<img src="https://konfliktraadet.no/content/plugins/sitepress-multilingual-cms/res/flags/no.png" alt="Norsk (bokmål)">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link sr-only sr-only-focusable" href="#content">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.column:nth-child(1)`
  - **HTML:** `<div class="column">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#topmenu > .menu-item:nth-child(1)`
  - **HTML:** `<li class="menu-item"> <a class="press" href="/finn-ditt-konfliktrad/">Kontakt oss</a> </li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.dropdown-toggle`
  - **HTML:** `<a class="nav-link dropdown-toggle current-language" href="https://konfliktraadet.no/" title="Norsk (bokmål)" data-toggle="dropdown"><img src="https://konfliktraadet.no/content/plugins/sitepress-multilingual-cms/res/flags/no.png" alt="Nors…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.insert-page > .wpb-content-wrapper`
  - **HTML:** `<div class="wpb-content-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

