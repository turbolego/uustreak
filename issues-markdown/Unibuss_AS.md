# WCAG Violations Report for Unibuss AS

**Timestamp:** 2026-10-08T10:47:06.553Z
**URL:** [https://www.unibuss.no/](https://www.unibuss.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.wp-container-core-group-is-layout-3 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
  - **HTML:** `<a class="wp-block-button__link has-base-color has-contrast-3-background-color has-text-color has-background has-link-color has-border-color has-contrast-3-border-color wp-element-button" href="https://www.unibuss.no/jobb-i-unibuss/" style…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.31 (foreground color: #ffffff, background color: #3c8a2e, font size: 16.9pt (22.5024px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.wp-container-core-group-is-layout-4 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
  - **HTML:** `<a class="wp-block-button__link has-base-color has-contrast-3-background-color has-text-color has-background has-link-color has-border-color has-contrast-3-border-color wp-element-button" href="https://www.unibuss.no/om-oss/trafikksikkerhe…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.31 (foreground color: #ffffff, background color: #3c8a2e, font size: 16.9pt (22.5024px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.wp-container-core-group-is-layout-5 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
  - **HTML:** `<a class="wp-block-button__link has-base-color has-contrast-3-background-color has-text-color has-background has-link-color has-border-color has-contrast-3-border-color wp-element-button" href="https://www.unibuss.no/miljo-og-teknologi/" s…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.31 (foreground color: #ffffff, background color: #3c8a2e, font size: 16.9pt (22.5024px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.modal-cacsp-btn-accept`
  - **HTML:** `<a href="#" class="modal-cacsp-btn modal-cacsp-btn-accept"> Godta alle </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.48 (foreground color: #ffffff, background color: #47b973, font size: 16.9pt (22.5024px), font weight: normal). Expected contrast ratio of 4.5:1


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.wp-container-core-navigation-is-layout-2 > .wp-block-navigation__container.is-vertical`
  - **HTML:** `<ul class="wp-block-navigation__container has-text-color has-base-color is-vertical wp-block-navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: ul

- **Target:** `.wp-container-core-navigation-is-layout-3 > .wp-block-navigation__container.is-vertical`
  - **HTML:** `<ul class="wp-block-navigation__container has-text-color has-base-color is-vertical wp-block-navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: ul

- **Target:** `.wp-container-core-navigation-is-layout-4 > .wp-block-navigation__container.is-vertical`
  - **HTML:** `<ul class="wp-block-navigation__container has-text-color has-base-color is-vertical wp-block-navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: ul

- **Target:** `.wp-container-core-navigation-is-layout-5 > .wp-block-navigation__container.is-vertical`
  - **HTML:** `<ul class="wp-block-navigation__container has-text-color has-base-color is-vertical wp-block-navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: ul

- **Target:** `.wp-container-core-navigation-is-layout-6 > .wp-block-navigation__container.is-vertical:nth-child(1)`
  - **HTML:** `<ul class="wp-block-navigation__container has-text-color has-base-color is-vertical wp-block-navigation">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: ul


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" class="modal-cacsp-open-no-backdrop modal-cacsp-open">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.modal-cacsp-box-info > .modal-cacsp-box-content`
  - **HTML:** `<div class="modal-cacsp-box-content">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-info > .modal-cacsp-btns`
  - **HTML:** `<div class="modal-cacsp-btns"> <a href="#" class="modal-cacsp-btn modal-cacsp-btn-settings"> Innstillinger </a> <a href="#" class="modal-cacsp-btn modal-cacsp-btn-accept"> Godta alle </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings > .modal-cacsp-box-header`
  - **HTML:** `<div class="modal-cacsp-box-header"> Informasjonskapsler (Cookies) </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings > .modal-cacsp-box-content`
  - **HTML:** `<div class="modal-cacsp-box-content"> Velg hva slags informasjonskapsler du vil godta. Valget ditt lagres i ett år. <a href="https://www.unibuss.no/personvernerklaering/" target="_blank" rel="noopener noreferrer"> Les vår personvernerklæri…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings-list > ul > li:nth-child(1)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings-list > ul > li:nth-child(3)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings-list > ul > li:nth-child(4)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.modal-cacsp-box-settings > .modal-cacsp-btns`
  - **HTML:** `<div class="modal-cacsp-btns"> <a href="#" class="modal-cacsp-btn modal-cacsp-btn-save"> Lagre </a> <a href="#" class="modal-cacsp-btn modal-cacsp-btn-accept-all"> Godta alle </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

