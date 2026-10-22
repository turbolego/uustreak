# WCAG Violations Report for Deloitte Norge

**Timestamp:** 2026-10-22T03:42:46.389Z
**URL:** [https://www.deloitte.com/no/no.html](https://www.deloitte.com/no/no.html)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 8

#### Affected Elements:

- **Target:** `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
  - **HTML:** `<li id="-target-1-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-2-1`
  - **HTML:** `<li id="-target-2-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-3-1`
  - **HTML:** `<li id="-target-3-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-4-1`
  - **HTML:** `<li id="-target-4-1" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper > .swiper-slide.cmp-dual-slider__slide-item[role="group"]:nth-child(1)`
  - **HTML:** `<li id="-target-1-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-2-2`
  - **HTML:** `<li id="-target-2-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-3-2`
  - **HTML:** `<li id="-target-3-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element

- **Target:** `#-target-4-2`
  - **HTML:** `<li id="-target-4-2" class="swiper-slide cmp-dual-slider__slide-item" role="group">`
  - **Failure summary:** Fix any of the following: ARIA role group is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#title-v2-24efabdc > .cmp-title__text`
  - **HTML:** `<h3 class="cmp-title__text"><span>Aktuelt</span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `h5`
  - **HTML:** `<h5 class="cmp-title__text"> Følg oss </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 11

#### Affected Elements:

- **Target:** `#search-button`
  - **HTML:** `<button _ngcontent-ng-c1781588593="" aria-label="Search" type="button" id="search-button" role="button">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[aria-label="nettstedvelger"]`
  - **HTML:** `<button type="button" aria-expanded="false" aria-controls="cmp-site-selector-dialog" aria-label="nettstedvelger">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-407835d3`
  - **HTML:** `<a class="cmp-promo-tracking cmp-promo-curated" target="_self" data-promo-category="curated" aria-label="Eventer" data-promo-name="Eventer" data-cq-id="199cde92" href="/no/no/events.html" data-bs-target="#promo-modal-407835d3" id="promo-v3…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-e979ba3f`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="Slik jobber vi med f..." data-promo-name="Slik jobber vi med f..." data-cq-id="a3e31ea3" href="/no/no/Industries/de..." data-bs-target="#promo-moda…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-9fb14ab0`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="The Future of Consum..." data-promo-content-t...="Industry" data-promo-name="The Future of Consum..." data-cq-id="a1fcea96" href="/no/no/Industries…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-9cb7c0aa`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="State of AI in the N..." data-promo-content-t...="Research" data-promo-name="State of AI in the N..." data-cq-id="f1ab7601" href="/no/no/Industries…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-d834fa12`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="AI Customer Agent Se..." data-promo-content-t...="Collection" data-promo-name="AI Customer Agent Se..." data-cq-id="b3d2f3c7" href="/no/no/services…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-bc2d42bf`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="Års- og bærekraftsra..." data-promo-name="Års- og bærekraftsra..." data-cq-id="43e4fa5" href="/no/no/about/governa..." data-bs-target="#promo-modal…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-f907d0d6`
  - **HTML:** `<a class="cmp-promo-tracking c..." target="_self" data-promo-category="curated" aria-label="A Nordic outlook on ..." data-promo-name="A Nordic outlook on ..." data-cq-id="72a317f6" href="/no/no/services/cons..." data-bs-target="#promo-moda…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#promo-v3-70dfe81c`
  - **HTML:** `<a class="cmp-promo-tracking c..." rel="noopener" target="_blank" data-promo-category="curated" aria-label="Meld deg på vårt nyh..." data-promo-name="Meld deg på vårt nyh..." href="https://nor.deloitte..." data-bs-target="#promo-modal-70df…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.ot-cookie-policy-link`
  - **HTML:** `<a class="ot-cookie-policy-link" href="https://www.deloitte.com/no/no/legal/Cookies.html?hidebanner=true" target="_blank" aria-label="More information about your privacy, opens in a new tab" rel="noopener">Deloitte’s online cookie notice.<…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cmp-dual-slider__left-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
  - **HTML:** `<ul class="swiper-wrapper cmp-dual-slider__slide-wrapper">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]

- **Target:** `.cmp-dual-slider__right-wrapper > .cmp-dual-slider__slide > .swiper-wrapper.cmp-dual-slider__slide-wrapper`
  - **HTML:** `<ul class="swiper-wrapper cmp-dual-slider__slide-wrapper">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=group]


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.cmp-header__welcome`
  - **HTML:** `<div class="cmp-header__welcome">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

