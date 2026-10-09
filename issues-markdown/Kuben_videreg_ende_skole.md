# WCAG Violations Report for Kuben videregående skole

**Timestamp:** 2026-10-09T05:05:06.257Z
**URL:** [https://kuben.vgs.no/](https://kuben.vgs.no/)
**Total Violations:** 5

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, .ytmVideoInfoVideoTitle`
  - **HTML:** `<a class="ytmVideoInfoVideoTitle" aria-level="2" href="https://www.youtube.com/watch?v=rlV0VVE5Tp4"><span class="ytAttributedStringHost ytmVideoInfoLink ytAttributedStringWhiteSpaceNoWrap" style="">Kuben vgs - velkommen!</span></a>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-level="2"

- **Target:** `iframe[title="YouTube-video"], .ytmVideoInfoVideoTitle`
  - **HTML:** `<a class="ytmVideoInfoVideoTitle" aria-level="2" href="https://www.youtube.com/watch?v=gSjCPs5EFDA"><span class="ytAttributedStringHost ytmVideoInfoLink ytAttributedStringWhiteSpaceNoWrap" style="">Introvideo av Skolens ressursteam</span><…`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-level="2"


### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, #movie_player`
  - **HTML:** `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/5203c085/player_embed_es6.vflset/nb…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

- **Target:** `iframe[title="YouTube-video"], #movie_player`
  - **HTML:** `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/5203c085/player_embed_es6.vflset/nb…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe, .ytmVideoInfoChannelAvatar`
  - **HTML:** `<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill" alt="thumbnail-image" style="backg…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `iframe[title="YouTube-video"], .ytmVideoInfoChannelAvatar`
  - **HTML:** `<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill" alt="thumbnail-image" style="backg…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from youtube.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.col-lg-4.col-md-6.col-12:nth-child(1) > .factbox.factbox--white > .factbox__content.text-break > p:nth-child(1) > iframe`
  - **HTML:** `<iframe src="//www.youtube.com/embed/rlV0VVE5Tp4?t=5s" width="560" height="314" allowfullscreen="allowfullscreen"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#silktide-banner > .mb-4`
  - **HTML:** `<h2 class="mb-4"> Osloskolen bruker informasjonskapsler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#silktide-banner > p:nth-child(2)`
  - **HTML:** `<p> For at nettstedet skal fungere og være trygt, bruker Osloskolen informasjonskapsler. Noen er teknisk nødvendige, mens andre sikrer ulik funksjonalitet. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#silktide-banner > p:nth-child(3)`
  - **HTML:** `<p> Godtar du alle informasjonskapsler, tillater du også at vi samler inn data om statistikk og brukeradferd. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

