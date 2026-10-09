# WCAG Violations Report for Telenor ASA

**Timestamp:** 2026-10-09T05:13:56.190Z
**URL:** [https://www.telenor.no/privat/](https://www.telenor.no/privat/)
**Total Violations:** 4

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.image`
  - **HTML:** `<div class="image main image" style="background-image:url('/binaries/om/sikkerhet/sikkerhetspuls-q2-26/sikkerhetspuls_andrekvartal_banner_kvadrat.png');" aria-label="ikoner for digital sikkerhet og svindel" data-v-4c77f218="" data-v-bf1c1c…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `div[data-v-cbfd614d=""] > h4`
  - **HTML:** `<h4><a target="_blank" rel="noopener noreferrer nofollow" class="html-input-link" href="https://www.telenor.no/om/presse-og-media/statusmelding-8okt-26/" tabindex="-1">Les mer om siste status her</a></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.dropdown-category.footer.dark:nth-child(1) > .dropdown-link[data-v-515173b3=""] > .dropdown-header.hidden-mobile[data-v-515173b3=""] > h6`
  - **HTML:** `<h6 class="tn-heading title-xs left" data-v-5b5257ef="" data-v-515173b3=""><!--[-->Hjelp<!--]--></h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#privacy_prompt_text2 > h4`
  - **HTML:** `<h4>Vil du godta alle informasjonskapsler, avslå eller endre innstillinger?</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.swiper-slide-active > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.swiper-slide-next > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(3) > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(4) > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(5) > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(6) > .spotlight-product-card.border[ondragstart="return false"] > .main-stock.stock[size="14px"]`
  - **HTML:** `<li data-v-add167ed="" data-v-d4e53f6a="" class="main-stock stock" size="14px">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#privacy_prompt_text`
  - **HTML:** `<div class="privacy_prompt_content_freetext" id="privacy_prompt_text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#privacy_prompt_text2`
  - **HTML:** `<div class="privacy_prompt_content_h4" id="privacy_prompt_text2" aria-describedby="privacy_prompt_text2"> <h4>Vil du godta alle informasjonskapsler, avslå eller endre innstillinger?</h4> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#freetext-top > .two-buttons`
  - **HTML:** `<div class="two-buttons">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.showConsentPreferences`
  - **HTML:** `<div class="showConsentPreferences">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#privacy_prompt_bottom`
  - **HTML:** `<div class="freetext bottom-info" id="privacy_prompt_bottom">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

