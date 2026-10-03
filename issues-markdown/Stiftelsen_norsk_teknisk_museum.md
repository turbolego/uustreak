# WCAG Violations Report for Stiftelsen norsk teknisk museum

**Timestamp:** 2026-10-03T04:22:54.457Z
**URL:** [https://www.tekniskmuseum.no/](https://www.tekniskmuseum.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `button[data-cky-tag="accept-button"]`
  - **HTML:** `<button class="cky-btn cky-btn-accept" aria-label="Godta" data-cky-tag="accept-button" style="color: #fafafa; border-color: #28A745; background-color: #28A745;">Godta</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #fafafa, background color: #28a745, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `input[aria-owns="awesomplete_list_2"]`
  - **HTML:** `<input name="q" class="js-finder-search-query uk-search-input" placeholder="Søk" required="" aria-label="Søk" type="search" autocomplete="off" aria-autocomplete="list" aria-expanded="false" aria-owns="awesomplete_list_2" role="combobox">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.07 (foreground color: #faecec, background color: #e35c5c, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#module-165 > .linguise_switcher.linguise_switcher_not_menu.linguise_switcher_popup > .linguise_lang_name`
  - **HTML:** `<span class="linguise_lang_name">Norwegian</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.98 (foreground color: #b8b8b8, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cky-title`
  - **HTML:** `<p class="cky-title" data-cky-tag="title" aria-level="2" role="heading" style="color: #212121;"></p>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from CookieYes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cky-consent-container`
  - **HTML:** `<div class="cky-consent-container cky-box-bottom-left" role="region" aria-label="" tabindex="-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.fs-teaser-item-1`
  - **HTML:** `<a class="el-item fs-teaser-item-1 uk-card uk-card-hover uk-card-small uk-flex uk-link-toggle" href="/robotferie-26">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.fs-teaser-item-2`
  - **HTML:** `<a class="el-item fs-teaser-item-2 uk-card uk-card-hover uk-card-small uk-flex uk-link-toggle" href="/program/foredrag-fred-haise">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.fs-teaser-item-3`
  - **HTML:** `<a class="el-item fs-teaser-item-3 uk-card uk-card-hover uk-card-small uk-flex uk-link-toggle" href="/romfartshelg-26">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.uk-first-column.el-item > .uk-icon-button.el-link`
  - **HTML:** `<a class="el-link uk-icon-button" href="https://www.instagram.com/tekniskmuseum/?hl=en">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.el-item:nth-child(2) > .uk-icon-button.el-link`
  - **HTML:** `<a class="el-link uk-icon-button" href="https://www.facebook.com/Tekniskmuseum/?locale=nb_NO">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.el-item:nth-child(3) > .uk-icon-button.el-link`
  - **HTML:** `<a class="el-link uk-icon-button" href="https://www.youtube.com/user/norsktekniskmuseum">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.uk-margin > .el-link[href$="miljofyrtarn"]`
  - **HTML:** `<a class="el-link" href="/miljofyrtarn">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- **Target:** `.uk-hidden-visually`
  - **HTML:** `<div class="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto"><div class="uk-notification-message"> <a href="#tm-main" class="uk-link-reset">Skip to main content</a> </div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-grid-medium.uk-child-width-auto[uk-grid="margin: uk-margin-small-top"] > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-2-5\@m`
  - **HTML:** `<div class="uk-width-1-1@s uk-width-2-5@m uk-first-column">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > h3`
  - **HTML:** `<h3> Museet </h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(1)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/ansatte" class="el-link uk-margin-remove-last-child">Kontakt oss</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(2)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/stillingledig" class="el-link uk-margin-remove-last-child">Ledige stillinger</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(3)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/rapporter" class="el-link uk-margin-remove-last-child">Årsrapporter</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(4)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/miljofyrtarn" class="el-link uk-margin-remove-last-child">Miljøfyrtårn</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(5) > .uk-link-toggle[target="_blank"] > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
  - **HTML:** `<div><div class="el-content uk-panel"><span class="uk-link uk-margin-remove-last-child">Presse</span></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(3) > h3`
  - **HTML:** `<h3> Snarveier </h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(3) > .uk-list:nth-child(2)`
  - **HTML:** `<ul class="uk-list">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.el-item > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
  - **HTML:** `<div><div class="el-content uk-panel"><p><a href="/images/Dokumenter/fotografering-og-filming-teknisk-museum-26.pdf">Fotografering og filming på museet</a></p></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > h3`
  - **HTML:** `<h3> Samarbeid </h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(1)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/lokaler" class="el-link uk-margin-remove-last-child">Leie av lokaler</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(2)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/samarbeidspartnere" class="el-link uk-margin-remove-last-child">Samarbeidspartnere</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(3)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="https://www.tekniskmuseum.no/profil-og-logo" class="el-link uk-margin-remove-last-child">Logo og profil</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(4)`
  - **HTML:** `<li class="el-item"><div class="el-content uk-panel"><a href="/samarbeidspartnere" class="el-link uk-margin-remove-last-child">Museumsnettverkene</a></div></li>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="www.tekniskvenner.no"] > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
  - **HTML:** `<div><div class="el-content uk-panel"><span class="uk-link uk-margin-remove-last-child">Venneforeningen</span></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-3-5\@m > h3`
  - **HTML:** `<h3> Følg oss </h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-child-width-1-1.uk-grid-margin.tm-grid-expand:nth-child(4)`
  - **HTML:** `<div class="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-width-4-5`
  - **HTML:** `<div class="uk-width-4-5 uk-width-4-5@m uk-first-column"><h4 class="uk-h6 uk-text-center"> <a class="el-link uk-link-reset" href="/logginn"> Logg inn </a> </h4></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.uk-flex-first`
  - **HTML:** `<div class="uk-flex-first uk-width-auto uk-first-column"><div class="el-title">Til toppen</div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

