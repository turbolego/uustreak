# WCAG Violations Report for Travel Retail Norway AS

**Timestamp:** 2026-11-05T09:23:08.246Z
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
  - **HTML:** `<div _ngcontent-ng-c3514474910="" class="trn-floating trn-popover-frame" data-placement="bottom" id="trn-popover-10" tabindex="-1" role="dialog" style="position: absolute; max-height: 684px; max-width: 1280px; transform: translate3d(953.21…`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle.size_LARGE`
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

- **Target:** `.media-banner_container_text-position_BOTTOM_RIGHT.media-banner_container_content-alignment_LEFT.media-banner_container_text-theme_LIGHT > .subtitle.size_LARGE`
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
- **Count:** 43

#### Affected Elements:

- **Target:** `.header.ab-version_1[aria-label="Butikkvelger"]`
  - **HTML:** `<button _ngcontent-ng-c1743065153="" type="button" class="button header ab-version_1" aria-label="Butikkvelger" aria-expanded="false">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.page-header > .FavoriteProductsSlot.has-components[position="FavoriteProductsSlot"] > trn-wish-list-icon > .wishlist-icon-button[aria-label="Se mine favoritter"][href$="wishlists"]`
  - **HTML:** `<a _ngcontent-ng-c817857935="" class="trn-tooltip-host wishlist-icon-button ab-version_1" aria-label="Se mine favoritter" href="/no/wishlists">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner_wrapper_section-LEFT > .media-banner_link[title="KJØP NÅ"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="To adventskalendere i et snødekt vinterlandskap.png" title="KJØP NÅ" href="/no/category1001/gift-ideas/by-occasion/holiday-special" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(1) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Smash! XXL Smash 79,90 NOK" title="Legg i handlekurven Smash! XXL Smash 79,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(2) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Kvikk Lunsj Freia 89,90 NOK" title="Legg i handlekurven Freia Kvikk Lunsj Freia 89,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(3) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Biotherm Oil Therapy Body Lotion Biotherm 235,00 NOK" title="Legg i handlekurven Biotherm Oil Therapy …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(4) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven M&M's Cookie Dough M&M 129,90 NOK" title="Legg i handlekurven M&M's Cookie Dough M&M 129,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(5) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia Melkesjokolade Freia 45,00 NOK" title="Legg i handlekurven Freia Melkesjokolade Freia 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(6) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Freia I love Norway Melkehjerter Freia 59,90 NOK" title="Legg i handlekurven Freia I love Norway Melke…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Clinique Lash Power Mascara No 1 Black Onyx Clinique 249,00 NOK" title="Legg i handlekurven Clinique L…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(8) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Nidar Norske Favoritter Favoritter 79,90 NOK" title="Legg i handlekurven Nidar Norske Favoritter Favor…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_35 > trn-product-card:nth-child(9) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven M XXL Bag Freia 99,90 NOK" title="Legg i handlekurven M XXL Bag Freia 99,90 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(10) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Wrigley's Extra White Sweet Mint Wrigley's 199,90 NOK" title="Legg i handlekurven Wrigley's Extra Whit…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(11) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Stratos melkeglede Stratos 45,00 NOK" title="Legg i handlekurven Stratos melkeglede Stratos 45,00 NOK">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(12) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(13) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Anthon Berg Raspberry in Orange Liqueur Anthon Berg 199,90 NOK" title="Legg i handlekurven Anthon Berg…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(14) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven American Crew Classic Forming Cream American Crew 179,00 NOK" title="Legg i handlekurven American Crew…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(15) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c31249...="" class="button small solid-p..." type="button" aria-label="Legg i handlekurven ..." title="Legg i handlekurven ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(16) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Paco Rabanne 1 Million Deodorant Stick Paco Rabanne 219,00 NOK" title="Legg i handlekurven Paco Rabann…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-product-card:nth-child(17) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
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
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Summer Fridays Lip Care Set Summer Fridays 519,00 NOK" title="Legg i handlekurven Summer Fridays Lip C…`
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
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Summer Fridays Vanilla Mist 90 ml Summer Fridays 269,00 NOK" title="Legg i handlekurven Summer Fridays…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#scrollable_viewport_51 > trn-product-card:nth-child(7) > .product[_ngcontent-ng-c2309777751=""] > .product-controls[_ngcontent-ng-c2309777751=""] > trn-button > .solid-primary-dark.fill.has-icon`
  - **HTML:** `<button _ngcontent-ng-c3124947742="" class="button small solid-primary-dark fill has-icon" type="button" aria-label="Legg i handlekurven Summer Fridays Jet lag Set Summer Fridays 379,00 NOK" title="Legg i handlekurven Summer Fridays Jet la…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(1) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Discover the new fragrances from Kylie Mood Stones." title="KJØP NÅ" href="/no/merker/9349/kylie-cosmetics" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.media-banner-grid_width-3.media-banner-grid_height-3.media-banner-grid_item:nth-child(2) > trn-media-banner-item > .media-banner_wrapper_section-BOTTOM.media-banner_wrapper_rounded.media-banner_wrapper > .media-banner_link[title="KJØP NÅ"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c2539610980="" class="media-banner_link" aria-label="Utforsk populære Tax free Favoritter" title="KJØP NÅ" href="/no/category940/beauty?favorite=true" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `trn-article:nth-child(1) > .primary > div[_ngcontent-ng-c1098918959=""] > .article-link[_ngcontent-ng-c1098918959=""] > trn-link[icon="arrow_forward"][iconplacement="icon-right"][_ngcontent-ng-c1098918959=""] > .primary-dark[title="Les artikkelen"][target="_self"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Ølguide – Hvordan finne riktig øl?" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/laer-om-ol/olguide-hvordan-finne-riktig-ol" target="…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Les artikkel Drikke til lam"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Drikke til lam" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/mat-drikke/drikke-til-lam" target="_self">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Les artikkel Vilt på menyen"]`
  - **HTML:** `<a _ngcontent-ng-c3610329873="" role="link" aria-label="Les artikkel Vilt på menyen" title="Les artikkelen" class="link medium primary-dark" href="/no/tips-og-trender/mat-drikke/vilt-pa-menyen" target="_self">`
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
- **Count:** 33

#### Affected Elements:

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1620594"][href$="smash-xxl"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1620594" href="/no/product1620594/smash-xxl">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1374037"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1374037" href="/no/product1374037/freia-kvikk-lunsj">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1580999"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1580999" href="/no/product1580999/biotherm-oil-therapy-body-lotion">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1755099"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1755099" href="/no/product1755099/mms-cookie-dough">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625509"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625509" href="/no/product1625509/freia-melkesjokolade">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1625512"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1625512" href="/no/product1625512/freia-i-love-norway-melkehjerter">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1333020"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1333020" href="/no/product1333020/clinique-lash-power-mascara-no-1-black-onyx">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1723423"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1723423" href="/no/product1723423/nidar-norske-favoritter">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1001913"][href$="m-xxl-bag"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1001913" href="/no/product1001913/m-xxl-bag">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1026523"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1026523" href="/no/product1026523/wrigleys-extra-white-sweet-mint">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1756224"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1756224" href="/no/product1756224/stratos-melkeglede">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1128400"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1128400" href="/no/product1128400/fishermans-friend-original-menthol-eucalyptus">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1187276"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1187276" href="/no/product1187276/anthon-berg-raspberry-in-orange-liqueur">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1302384"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1302384" href="/no/product1302384/american-crew-classic-forming-cream">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1528001"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1528001" href="/no/product1528001/kerastase-blond-absolu-bain-lumiere-shampoo-250-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="984712"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="984712" href="/no/product984712/paco-rabanne-1-million-deodorant-stick">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1741187"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1741187" href="/no/product1741187/elizabeth-arden-prevage-multi-restorative-day-cream-spf-30-50-ml">`
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

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795418"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1795418" href="/no/product1795418/summer-fridays-lip-care-set">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773594"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773594" href="/no/product1773594/summer-fridays-sweet-pink-duo-lipstick-set">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795413"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1795413" href="/no/product1795413/summer-fridays-mist-pink-guava-mist-240-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773784"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773784" href="/no/product1773784/summer-fridays-lip-butter-balm-no-06-pink-sugar">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795318"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1795318" href="/no/product1795318/summer-fridays-wiith-a-hint-of-pistachio-body-butter-balm-200-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1795415"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1795415" href="/no/product1795415/summer-fridays-vanilla-mist-90-ml">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.image-wrapper[_ngcontent-ng-c2309777751=""] > a[data-scarabitem="1773585"]`
  - **HTML:** `<a _ngcontent-ng-c2309777751="" tabindex="-1" data-scarabitem="1773585" href="/no/product1773585/summer-fridays-jet-lag-set">`
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

