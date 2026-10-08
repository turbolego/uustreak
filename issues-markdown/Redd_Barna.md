# WCAG Violations Report for Redd Barna

**Timestamp:** 2026-10-08T10:28:13.455Z
**URL:** [https://www.reddbarna.no/](https://www.reddbarna.no/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content" role="navigation" title="Hopp til hovedinnhold">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: ARIA role navigation is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h6`
  - **HTML:** `<h6 class="lib-link__tagline">Les også</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.lib-link__link[rel=""] > .lib-link__img-wrap > .lib-link__featured-image[decoding="async"]`
  - **HTML:** `<img decoding="async" class="lib-link__featured-image" src="https://www.reddbarna.no/content/uploads/2023/05/TVA_mobil.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" class="" style="--rb-theme-header-height: 116px;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 8

#### Affected Elements:

- **Target:** `#give-amount`
  - **HTML:** `<input class="give-text-input give-amount-top" id="give-amount" name="give-amount" type="text" inputmode="numeric" placeholder="" value="275" autocomplete="off" tabindex="10">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.give-btn-level-0`
  - **HTML:** `<button type="button" data-price-id="0" class="give-donation-level-btn give-btn give-btn-level-0 " value="200" data-default="0" tabindex="3">200 kr.</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.give-btn-level-1`
  - **HTML:** `<button type="button" data-price-id="1" class="give-donation-level-btn give-btn give-btn-level-1 give-default-level" value="275" data-default="1" tabindex="4" aria-pressed="true">275 kr.</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.give-btn-level-2`
  - **HTML:** `<button type="button" data-price-id="2" class="give-donation-level-btn give-btn give-btn-level-2 " value="350" data-default="0" tabindex="5">350 kr.</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.give-btn-level-custom`
  - **HTML:** `<button type="button" data-price-id="custom" class="give-donation-level-btn give-btn give-btn-level-custom" value="custom" tabindex="9">Velg selv</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#frequency-single`
  - **HTML:** `<input name="dekode_give_donation_frequency" id="frequency-single" type="radio" value="single" tabindex="2">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `#frequency-recurring`
  - **HTML:** `<input name="dekode_give_donation_frequency" id="frequency-recurring" type="radio" value="recurring" checked="checked" tabindex="2">`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.give-step-one-buttons > .give-submit.advance-btn.give-btn`
  - **HTML:** `<button class="give-btn give-submit advance-btn" tabindex="11">Gi med avtalegiro</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

