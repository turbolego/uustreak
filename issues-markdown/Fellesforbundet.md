# WCAG Violations Report for Fellesforbundet

**Timestamp:** 2026-11-11T05:05:12.186Z
**URL:** [https://www.fellesforbundet.no/](https://www.fellesforbundet.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.wp-elements-23`
  - **HTML:** `<h4 class="wp-block-heading has-white-color has-text-color has-link-color has-small-title-font-size wp-elements-23">Kontakt oss</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- **Target:** `.text-col`
  - **HTML:** `<div class="wp-block-column text-col is-layout-flow wp-block-column-is-layout-flow">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `video`
  - **HTML:** `<video class="wp-block-cover__video-background intrinsic-ignore" autoplay="" muted="" loop="" playsinline="" src="https://www.fellesforbundet.no/wp-content/uploads/2026/01/herofilm-fellesforbundet.mov" data-object-fit="cover"></video>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.wp-container-core-group-is-layout-2518a440`
  - **HTML:** `<div class="wp-block-group align..." style="margin-top:var(--wp-...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.max-1160 > .wp-block-heading`
  - **HTML:** `<h2 class="wp-block-heading alignwide" style="font-style:normal;font-weight:700">Andre nyheter</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16956 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .wp-container-core-group-is-layout-3fc47171.is-vertical.wp-block-group-is-layout-flex`
  - **HTML:** `<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-3fc47171 wp-block-group-is-layout-flex">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16956 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .taxonomy-category.wp-block-post-terms > a[rel="tag"]:nth-child(1)`
  - **HTML:** `<a href="https://www.fellesforbundet.no/aktuelt/category/allmenngjoring/" rel="tag">Allmenngjøring</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16956 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .taxonomy-category.wp-block-post-terms > a[rel="tag"]:nth-child(3)`
  - **HTML:** `<a href="https://www.fellesforbundet.no/aktuelt/category/nyheter/" rel="tag">Nyheter</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16940 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .wp-container-core-group-is-layout-3fc47171.is-vertical.wp-block-group-is-layout-flex`
  - **HTML:** `<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-is-layout-3fc47171 wp-block-group-is-layout-flex">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16940 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .taxonomy-category.wp-block-post-terms > a[rel="tag"]:nth-child(1)`
  - **HTML:** `<a href="https://www.fellesforbundet.no/aktuelt/category/luftfart/" rel="tag">Luftfart</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16940 > .wp-container-core-group-is-layout-13fec421.has-white-background-color.is-content-justification-left > .taxonomy-category.wp-block-post-terms > a[rel="tag"]:nth-child(3)`
  - **HTML:** `<a href="https://www.fellesforbundet.no/aktuelt/category/nyheter/" rel="tag">Nyheter</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[rel="tag"]:nth-child(5)`
  - **HTML:** `<a href="https://www.fellesforbundet.no/aktuelt/category/tariffoppgjoret-2026/" rel="tag">Tariffoppgjøret 2026</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.post-16882`
  - **HTML:** `<li class="wp-block-post post-16882 post type-post status-publish format-standard has-post-thumbnail hentry category-nyheter">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.max-1160 > .wp-container-core-buttons-is-layout-89ff3872.is-content-justification-left.wp-block-buttons`
  - **HTML:** `<div class="wp-block-buttons alignwide is-content-justification-left is-layout-flex wp-container-core-buttons-is-layout-89ff3872 wp-block-buttons-is-layout-flex" style="margin-top:var(--wp--preset--spacing--40)">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-dots`
  - **HTML:** `<div class="wp-block-group align..." style="margin-top:var(--wp-...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.alignwide.wp-block-group-is-layout-constrained.has-global-padding:nth-child(5)`
  - **HTML:** `<div class="wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

