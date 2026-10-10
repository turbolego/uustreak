# WCAG Violations Report for Vy Buss AS

**Timestamp:** 2026-10-10T08:35:41.818Z
**URL:** [https://www.vybuss.no/#!/](https://www.vybuss.no/#!/)
**Total Violations:** 3

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#3b53f8d96d994f9ca756b846accc2f54">Billettkjøp <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#f9794ed736b646b18247b147dad5b52d">Reiseinformasjon <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#be94b3d2cfee42eeb82f09ee91652a05">Endring og avbestilling <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"

- **Target:** `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#9de2559cf066442dae247071690c4bbd">Kundeservice <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]:nth-child(23)`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`
  - **Failure summary:** Fix any of the following: user-scalable on <meta> tag disables zooming on mobile devices


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `.slick-current`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-slick-index="1"]`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-slick-index="2"]`
  - **HTML:** `<div class="slide__item slide__item--headline slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style="width: 352px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.block__wrapper:nth-child(3) > .block__header`
  - **HTML:** `<div class="block__header"> <h2>Nyttig informasjon</h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#3b53f8d96d994f9ca756b846accc2f54">Billettkjøp <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#f9794ed736b646b18247b147dad5b52d">Reiseinformasjon <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#be94b3d2cfee42eeb82f09ee91652a05">Endring og avbestilling <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
  - **HTML:** `<div class="expand-block__header" aria-expanded="false" data-toggle="expand" data-target="#9de2559cf066442dae247071690c4bbd">Kundeservice <span class="icon-plus"></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-group-block.block__wrapper:nth-child(4)`
  - **HTML:** `<div class="block__wrapper js-group-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.js-group-block.block__wrapper:nth-child(5)`
  - **HTML:** `<div class="block__wrapper js-group-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1791621337181, .captcha__human`
  - **HTML:** `<div class="captcha__human" style="padding: 0;" data-dd-captcha-human="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1791621337181, .sliderText`
  - **HTML:** `<div class="sliderText"><p class="no-margin">Skyv til høyre for å sikre tilgangen din</p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1791621337181, .captcha__robot__warning`
  - **HTML:** `<div class="captcha__robot__warning" data-dd-captcha-robot-warning="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1791621337181, .captcha__robot__contact_support`
  - **HTML:** `<div class="captcha__robot__contact_support" data-dd-captcha-robot-contact-support="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

