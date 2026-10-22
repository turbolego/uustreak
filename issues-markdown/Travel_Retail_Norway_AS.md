# WCAG Violations Report for Travel Retail Norway AS

**Timestamp:** 2026-10-22T04:04:39.763Z
**URL:** [https://www.tax-free.no/no/](https://www.tax-free.no/no/)
**Total Violations:** 10

## Violation Details

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#trn-popover-10`
  - **HTML:** `<div _ngcontent-ng-c3514474910="" class="trn-floating trn-popover-frame" data-placement="bottom" id="trn-popover-10" tabindex="-1" role="dialog" style="position: absolute; max-height: 684px; max-width: 1280px; transform: translate3d(953.24…`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle`
  - **HTML:** `<h4 _ngcontent-ng-c2539610980="" class="subtitle size_LARGE">Nyhet! Kylie Mood Stones</h4>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.86 (foreground color: #000000, background color: #63534a, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle`
  - **HTML:** `<h4 _ngcontent-ng-c2539610980="" class="subtitle size_LARGE">Nyhet! Kylie Mood Stones</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.message-heading`
  - **HTML:** `<h4 _ngcontent-ng-c3016555927="" class="message-heading"> Vi har valgt Oslo (OSL) for deg </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 53

#### Affected Elements:

- **Target:** `.header.ab-version_1[aria-label="Butikkvelger"]`
  - **HTML:** `<button _ngcontent-ng-c1743065153="" type="button" class="button header ab-version_1" aria-label="Butikkvelger" aria-expanded="false">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.page-header > .FavoriteProductsSlot.has-components[position="FavoriteProductsSlot"] > trn-wish-list-icon > .wishlist-icon-button[aria-label="Se mine favoritter"][href$="wishlists"]`
  - **HTML:** `<a _ngcontent-ng-c817857935="" class="trn-tooltip-host wishlist-icon-button ab-version_1" aria-label="Se mine favoritter" href="/no/wishlists">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner-grid_width-2.media-banner-grid_height-4.media-banner-grid_item:nth-child(2) > trn-media-banner-item > .media-banner_wrapper_rounded.media-banner_wrapper[_ngcontent-ng-c2539610980=""] > .media-banner_link[aria-label="Se årets julekalendere"][title="KJØP NÅ"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Se årets julekalendere" title="KJØP NÅ" href="/no/category1001/gaveideer/gaver-etter-anledning/julegaver" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Se alle tilbuder"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Se alle tilbuder" title="KJØP NÅ" href="/no/tilbud" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Miu Miu Miutine Intense Eau de Parfum 50 ml Miu Miu 1 279,00 NOK" ...>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(10) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(11) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(12) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Chloé Signature Le Nectar Parfum Intense 100 ml Chloé 1 599,00 NOK" ...>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(13) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Chloé Atelier des Fleurs Eau de Parfum 50 ml Chloé 1 299,00 NOK" title="Legg i handlekurven Chloé Atel…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(14) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(15) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Estée Lauder Glimmer Eau de Parfum 50 ml Estée Lauder 1 299,00 NOK" ...>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(16) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.Section2A > trn-click-and-collect-card > section > .card > .card__content[_ngcontent-ng-c1426933823=""] > .card__steps-block[_ngcontent-ng-c1426933823=""] > .card__steps[_ngcontent-ng-c1426933823=""] > trn-airport-pill > .pill[aria-label="Butikkvelger"][_ngcontent-ng-c2052881801=""]`
  - **HTML:** `<button _ngcontent-ng-c2052881801="" type="button" class="pill" aria-label="Butikkvelger">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Dior Sauvage Extrait Parfum 50 ml Dior 1 799,00 NOK" title="Legg i handlekurven Dior Sauvage Extrait P…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Prada Paradigme Le Parfum 100 ml Prada 1 799,00 NOK" title="Legg i handlekurven Prada Paradigme Le Par…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Kilian The Smoking Hot Eau de Parfum 50 ml Kilian 2 459,00 NOK" title="Legg i handlekurven Kilian The …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Gisada Prestige Uomo Eau de Parfum 100 ml Gisada 1 079,00 NOK" title="Legg i handlekurven Gisada Prest…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_49 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Kinder Chocolate Kinder 99,90 NOK" title="Legg i handlekurven Kinder Chocolate Kinder 99,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Smash! XXL Smash 79,90 NOK" title="Legg i handlekurven Smash! XXL Smash 79,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven M&M'S Peanuts 800g M&M 159,90 NOK" title="Legg i handlekurven M&M'S Peanuts 800g M&M 159,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia I love Norway Melkehjerter Freia 59,90 NOK" title="Legg i handlekurven Freia I love Norway Melke…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven From Norway with Love From Norway with Love 99,90 NOK" title="Legg i handlekurven From Norway with Lov…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Kvikk Lunsj Freia 45,00 NOK" title="Legg i handlekurven Freia Kvikk Lunsj Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Kvikk Lunsj Freia 89,90 NOK" title="Legg i handlekurven Freia Kvikk Lunsj Freia 89,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Nidar Norske Favoritter Favoritter 79,90 NOK" title="Legg i handlekurven Nidar Norske Favoritter Favor…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Melkesjokolade Freia 45,00 NOK" title="Legg i handlekurven Freia Melkesjokolade Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(10) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Firkløver Freia 45,00 NOK" title="Legg i handlekurven Freia Firkløver Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(11) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Daim Freia 45,00 NOK" title="Legg i handlekurven Freia Daim Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_53 > trn-product-card:nth-child(12) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Fruktnøtt Freia 45,00 NOK" title="Legg i handlekurven Freia Fruktnøtt Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(1) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Discover the new fragrances from Kylie Mood Stones." title="KJØP NÅ" href="/no/merker/9349/kylie-cosmetics" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(2) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Utforsk populære Tax free Favoritter" title="KJØP NÅ" href="/no/category940/beauty?favorite=true" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Les artikkel Vinguide"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Vinguide" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/laer-om-vin/vinguide" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Les artikkel Ginbølgen"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Ginbølgen" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/laer-om-drinker/kast-deg-pa-den-store-ginbolgen" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-article:nth-child(3) > .primary > div[_ngcontent-ng-c1098918959=""] > .article-link[_ngcontent-ng-c1098918959=""] > trn-link[icon="arrow_forward"][iconplacement="icon-right"][_ngcontent-ng-c1098918959=""] > .primary-dark[title="Les artikkelen"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Alt du trenger å vite om solkrem til barn og baby" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/solbeskyttelse/solkrem-barn" target="…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.footer[aria-label="Butikkvelger"][_ngcontent-ng-c1743065153=""]`
  - **HTML:** `<button _ngcontent-ng-c1743065153="" type="button" class="button footer" aria-label="Butikkvelger" aria-expanded="false">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cx-header`
  - **HTML:** `<header _ngcontent-ng-c172432603="" class="cx-header">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.cx-header`
  - **HTML:** `<header _ngcontent-ng-c172432603="" class="cx-header">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `trn-footer-links-navigation > nav[aria-label="Navigasjon i bunntekst"]`
  - **HTML:** `<nav _ngcontent-ng-c21544931="" class="navigation" aria-label="Navigasjon i bunntekst">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 43

#### Affected Elements:

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1769598"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1769598" href="/no/product1769598/valentino-vendetta-donna-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783610"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783610" href="/no/product1783610/prada-paradoxe-sweet-chemistry-eau-de-parfum-90-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777717"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1777717" href="/no/product1777717/kylie-cosmetics-mood-stones-eau-de-parfum-blush-wood-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1780559"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1780559" href="/no/product1780559/lancome-la-vie-est-belle-elixir-cherry-eau-de-parfum-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1746146"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1746146" href="/no/product1746146/burberry-goddess-amber-vanilla-eau-de-parfum-intense-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783569"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783569" href="/no/product1783569/miu-miu-miutine-intense-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783399"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783399" href="/no/product1783399/sol-de-janeiro-le-mists-leite-nectar-perfumed-mist-90-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783405"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783405" href="/no/product1783405/sol-de-janeiro-le-mists-leite-cafe-mist-90-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1640316"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1640316" href="/no/product1640316/narciso-rodriguez-les-transparences-wild-tuberose-eau-de-parfum-intense-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1184600"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1184600" href="/no/product1184600/narciso-rodriguez-les-luminances-rose-musc-eau-de-parfum-intense-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1771581"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1771581" href="/no/product1771581/kilian-the-cocktails-sparkling-royal-eau-de-parfum-75-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777754"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1777754" href="/no/product1777754/chloe-signature-le-nectar-parfum-intense-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777731"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1777731" href="/no/product1777731/chloe-atelier-des-fleurs-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783177"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783177" href="/no/product1783177/yves-saint-laurent-libre-santal-couture-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1772028"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1772028" href="/no/product1772028/estee-lauder-glimmer-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783640"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783640" href="/no/product1783640/yves-saint-laurent-black-opium-pink-glaze-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783335"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783335" href="/no/product1783335/giorgio-armani-i-will-eau-de-parfum-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783468"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783468" href="/no/product1783468/dior-sauvage-extrait-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1777589"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1777589" href="/no/product1777589/gucci-guilty-pour-homme-eau-de-toilette-intense-90-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1780558"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1780558" href="/no/product1780558/prada-paradigme-le-parfum-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1772037"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1772037" href="/no/product1772037/tom-ford-private-blend-tobacco-chocolat-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1584510"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1584510" href="/no/product1584510/kilian-the-smoking-hot-eau-de-parfum-50-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1610977"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1610977" href="/no/product1610977/gisada-prestige-uomo-eau-de-parfum-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1778029"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1778029" href="/no/product1778029/givenchy-linterdit-elixir-eau-de-parfum-80-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1783172"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1783172" href="/no/product1783172/giorgio-armani-stronger-with-you-spices-eau-de-toilette-100-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773579"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773579" href="/no/product1773579/summer-fridays-jet-lag-multitasking-moisturizer-mask-for-deep-hydration-mini-28-g">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773594"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773594" href="/no/product1773594/summer-fridays-sweet-pink-duo-lipstick-set">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773770"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773770" href="/no/product1773770/summer-fridays-blush-butter-balm-no-03-sweet-rose">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773588"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773588" href="/no/product1773588/summer-fridays-gentle-reset-30-gentle-daily-exfoliating-pads">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773784"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773784" href="/no/product1773784/summer-fridays-lip-butter-balm-no-06-pink-sugar">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773593"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773593" href="/no/product1773593/summer-fridays-sunlit-vanilla-eau-de-parfum-10-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="850593"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="850593" href="/no/product850593/kinder-chocolate">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1620594"][href$="smash-xxl"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1620594" href="/no/product1620594/smash-xxl">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1687774"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1687774" href="/no/product1687774/mms-peanuts-800g">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625512"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625512" href="/no/product1625512/freia-i-love-norway-melkehjerter">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1694087"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1694087" href="/no/product1694087/from-norway-with-love">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625510"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625510" href="/no/product1625510/freia-kvikk-lunsj">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1374037"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1374037" href="/no/product1374037/freia-kvikk-lunsj">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1723423"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1723423" href="/no/product1723423/nidar-norske-favoritter">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625509"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625509" href="/no/product1625509/freia-melkesjokolade">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625507"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625507" href="/no/product1625507/freia-firklover">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625508"][href$="freia-daim"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625508" href="/no/product1625508/freia-daim">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625511"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625511" href="/no/product1625511/freia-fruktnott">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `bam-playlist, .player-container`
  - **HTML:** `<ul class="player-container" style="justify-content: start;">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `bam-playlist, bam-player[video-id="puv_wcjPeir9SacUpcig1WckEf"], .has-preview.wrapper[role="button"]`
  - **HTML:** `<div class="wrapper has-preview" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `trn-skip-content`
  - **HTML:** `<trn-skip-content _ngcontent-ng-c172432603="" tag="main-content" _nghost-ng-c3643981190=""><a _ngcontent-ng-c3643981190="" class="skip-content" href="/no/#main-content">Hopp til innhold</a><!----></trn-skip-content>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

