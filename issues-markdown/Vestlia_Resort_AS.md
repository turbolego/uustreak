# WCAG Violations Report for Vestlia Resort AS

**Timestamp:** 2026-10-08T10:50:30.450Z
**URL:** [https://vestlia.no/](https://vestlia.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.q-btn--round`
  - **HTML:** `<button data-v-6f602ff7="" class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round text-#000000 q-btn--actionable q-focusable q-hoverable popup-sticker-close-btn" tabindex="0" type="button" style="background-color: trans…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 11

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogNavDeclaration`
  - **HTML:** `<a id="CybotCookiebotDialogNavDeclaration" class="CybotCookiebotDialogNavItemLink CybotCookiebotDialogActive" href="#" data-target="CybotCookiebotDialogBody" tabindex="0" role="tab" aria-selected="true" aria-controls="CybotCookiebotDialogB…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.61 (foreground color: #a87f50, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<button id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="en">Allow all</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.61 (foreground color: #ffffff, background color: #a87f50, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#widgetContainer, div[aria-label="Choose date"] > .min-w-0.pr-3.flex-col > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
  - **HTML:** `<p class="overflow-hidden text-ellipsis whitespace-nowrap text-bv_smallFontSize text-bv_inputColor">8 Oct 2026</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #b68e58, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#widgetContainer, div[aria-label="Accommodations and guests"] > .min-w-0.pr-3.flex-col > .flex-row.gap-2.justify-between > .text-bv_smallFontSize.text-ellipsis.text-bv_inputColor`
  - **HTML:** `<p class="overflow-hidden text-ellipsis whitespace-nowrap text-bv_smallFontSize text-bv_inputColor">1 accommodation, 2 guests</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #b68e58, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#widgetContainer, .relative.z-\[1\]`
  - **HTML:** `<span class="relative z-[1]">Search</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #ffffff, background color: #b68e58, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.fusion-title-6 > h2`
  - **HTML:** `<h2 class="fusion-title-heading title-heading-center" style="margin:0;">Vestlia Resort</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.45 (foreground color: #a07b4d, background color: #f4c3b6, font size: 30.0pt (40px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.fusion-title-11 > h2`
  - **HTML:** `<h2 class="fusion-title-heading title-heading-center" style="margin:0;">Book en Penthouse</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.45 (foreground color: #a07b4d, background color: #f4c3b6, font size: 30.0pt (40px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.button-10 > .fusion-button-text.awb-button__text.awb-button__text--default`
  - **HTML:** `<span class="fusion-button-text awb-button__text awb-button__text--default">Les mer</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #ffffff, background color: #b68e58, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.fusion-title-13 > h2`
  - **HTML:** `<h2 class="fusion-title-heading title-heading-center" style="margin:0;">Drømmebryllup på fjellet</h2>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.45 (foreground color: #a07b4d, background color: #f4c3b6, font size: 30.0pt (40px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.button-11 > .fusion-button-text.awb-button__text.awb-button__text--default`
  - **HTML:** `<span class="fusion-button-text awb-button__text awb-button__text--default">Les mer</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #ffffff, background color: #b68e58, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.button-13 > .fusion-button-text.awb-button__text.awb-button__text--default`
  - **HTML:** `<span class="fusion-button-text awb-button__text awb-button__text--default">Les mer</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #ffffff, background color: #b68e58, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `.fusion-title-4 > h5`
  - **HTML:** `<h5 class="fusion-title-heading title-heading-center" style="margin:0;">Book et opphold</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.fusion-title-7 > h6`
  - **HTML:** `<h6 class="fusion-title-heading title-heading-center" style="margin:0;text-transform:uppercase;">Høsten på Vestlia Resort</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.fusion-title-10 > h6`
  - **HTML:** `<h6 class="fusion-title-heading title-heading-center" style="margin:0;text-transform:uppercase;">Ta med vennegjengen</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.fusion-title-12 > h6`
  - **HTML:** `<h6 class="fusion-title-heading title-heading-center" style="margin:0;text-transform:uppercase;">Arranger ditt</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div[formid="79"] > .q-page-container.full-width > .q-page`
  - **HTML:** `<main class="q-page column items-center" style="">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main" class="clearfix width-100">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main" class="clearfix width-100">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.awb-oc-menu-item-link`
  - **HTML:** `<a href="#awb-oc__10025" class="awb-menu__main-a awb-menu__main-a_regular awb-oc-menu-item-link awb-menu__main-a_icon-only fusion-flex-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#widgetContainer, button[aria-controls="radix-P0-2"]`
  - **HTML:** `<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-P0-2" data-state="closed">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants

- **Target:** `#widgetContainer, button[aria-controls="radix-P0-3"]`
  - **HTML:** `<button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-P0-3" data-state="closed">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-column-1`
  - **HTML:** `<div class="fusion-layout-column..." style="--awb-padding-top:10...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-flex-justify-content-center.fusion-content-layout-column.fusion-column-wrapper > .sm-text-align-center.fusion-image-element`
  - **HTML:** `<div class="fusion-image-element..." style="--awb-margin-bottom:...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-column-28`
  - **HTML:** `<div class="fusion-layout-column..." style="--awb-bg-size:cover;...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-column-29`
  - **HTML:** `<div class="fusion-layout-column..." style="--awb-bg-size:cover;...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-column-30`
  - **HTML:** `<div class="fusion-layout-column..." style="--awb-bg-size:cover;...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-row-16`
  - **HTML:** `<div class="fusion-fullwidth ful..." style="--awb-border-radius-...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-row-18`
  - **HTML:** `<div class="fusion-fullwidth ful..." style="--awb-border-sizes-t...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fusion-builder-row-19`
  - **HTML:** `<div class="fusion-fullwidth ful..." style="--link_hover_color: ...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(28)`
  - **HTML:** `<div style="position: fixed; wid...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div:nth-child(29)`
  - **HTML:** `<div style="position: fixed; lef...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[title="reCAPTCHA"], .rc-anchor-invisible-text`
  - **HTML:** `<div class="rc-anchor-invisible-text"><span>beskyttet av <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

