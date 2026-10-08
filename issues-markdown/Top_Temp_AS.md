# WCAG Violations Report for Top Temp AS

**Timestamp:** 2026-10-08T10:44:00.925Z
**URL:** [https://www.toptemp.no/](https://www.toptemp.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;"> Avvis alle </button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#hs_cos_wrapper_module_17864422845865 > .image__cards > .image__cards-text > .image__cards-title`
  - **HTML:** `<h2 class="image__cards-title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#hs_cos_wrapper_module_17864423932173 > .image__cards > .image__cards-text > .image__cards-title`
  - **HTML:** `<h2 class="image__cards-title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#hs_cos_wrapper_module_17864422914544 > .image__cards > .image__cards-text > .image__cards-title`
  - **HTML:** `<h2 class="image__cards-title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.menu--desktop > .menu__wrapper.no-list > .menu__item--depth-1.menu__item.hs-skip-lang-url-rewrite:nth-child(1) > .menu__link[href=""]`
  - **HTML:** `<a class="menu__link " href=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 24

#### Affected Elements:

- **Target:** `.row-number-1`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-1 dnd_area-row-0-force-full-width-section dnd-section dnd_area-row-0-padding">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864422762677 > .simple-heading.montserrat.center`
  - **HTML:** `<div class="simple-heading montserrat center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-5`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-5 dnd-row">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-6`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864422845864 > .simple-heading.montserrat.center`
  - **HTML:** `<div class="simple-heading montserrat center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864422845865 > .image__cards`
  - **HTML:** `<div class="image__cards">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864423932173 > .image__cards`
  - **HTML:** `<div class="image__cards">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864422914543 > .simple-heading.montserrat.center`
  - **HTML:** `<div class="simple-heading montserrat center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864422914544 > .image__cards`
  - **HTML:** `<div class="image__cards">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(1) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
  - **HTML:** `<h3 data-aos="fade-up" data-aos-delay="600" class="aos-init">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(1) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
  - **HTML:** `<p data-aos="fade-up" data-aos-delay="900" class="aos-init">Sterke fagmiljøer innen elektro, industri og tekniske fag.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(2) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
  - **HTML:** `<h3 data-aos="fade-up" data-aos-delay="600" class="aos-init">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(2) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
  - **HTML:** `<p data-aos="fade-up" data-aos-delay="900" class="aos-init">ISO-sertifiserte prosesser, solid HMS-arbeid og tariffbaserte arbeidsforhold gir forutsigbarhet og kvalitet.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(3) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
  - **HTML:** `<h3 data-aos="fade-up" data-aos-delay="600" class="aos-init">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(3) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
  - **HTML:** `<p data-aos="fade-up" data-aos-delay="900" class="aos-init">Effektiv mobilisering og evne til å skalere i takt med prosjektets behov.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(4) > .aos-init[data-aos-delay="600"][data-aos="fade-up"]`
  - **HTML:** `<h3 data-aos="fade-up" data-aos-delay="600" class="aos-init">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.box.no-space:nth-child(4) > .aos-init[data-aos-delay="900"][data-aos="fade-up"]`
  - **HTML:** `<p data-aos="fade-up" data-aos-delay="900" class="aos-init">Fra enkeltressurser til team og tekniske leveranser.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-17`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-17 dnd_area-row-6-padding dnd_area-row-6-vertical-alignment dnd-section dnd_area-row-6-max-width-section-centering dnd_area-row-6-background-layers dnd_area-row-6-background-color">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-21`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-21 dnd_area-row-7-background-color dnd_area-row-7-background-layers dnd_area-row-7-vertical-alignment dnd-section dnd_area-row-7-max-width-section-centering dnd_area-row-7-padding">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-25`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-25 dnd_area-row-8-max-width-section-centering dnd-section dnd_area-row-8-background-layers dnd_area-row-8-padding dnd_area-row-8-vertical-alignment dnd_area-row-8-background-color">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-29`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-29 dnd_area-row-9-max-width-section-centering dnd-section dnd_area-row-9-padding dnd_area-row-9-background-color dnd_area-row-9-vertical-alignment dnd_area-row-9-background-layers">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#hs_cos_wrapper_module_17864423373587 > .simple-heading.montserrat.center`
  - **HTML:** `<div class="simple-heading montserrat center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-35`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-35 dnd-row">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row-number-36`
  - **HTML:** `<div class="row-fluid-wrapper row-depth-1 row-number-36 dnd-row">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

