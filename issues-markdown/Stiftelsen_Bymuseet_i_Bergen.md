# WCAG Violations Report for Stiftelsen Bymuseet i Bergen

**Timestamp:** 2026-10-09T05:12:13.009Z
**URL:** [https://bymuseet.no/](https://bymuseet.no/)
**Total Violations:** 9

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#vimeo-video-banner, body`
  - **HTML:** `<body role="presentation" class="vp-center">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `#slick-slide00 > .vimeo-wrapper > iframe, body`
  - **HTML:** `<body role="presentation" class="vp-center">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .location.event-tags-row > .event-tags-left > span`
  - **HTML:** `<span>Gamle Bergen </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.57 (foreground color: #72808a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
  - **HTML:** `<span class="event-type-tag">TEATERVANDRING</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .event-date-row > .event-date-column > .date-range`
  - **HTML:** `<div class="date-range">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .location.event-tags-row > .event-tags-left > span`
  - **HTML:** `<span>Rosenkrantztårnet </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.57 (foreground color: #72808a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
  - **HTML:** `<span class="event-type-tag">BARNAS BYMUSEUM</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .event-date-row > .event-date-column > .date-range`
  - **HTML:** `<div class="date-range">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .location.event-tags-row > .event-tags-left > span`
  - **HTML:** `<span>Bergen sentrum </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.57 (foreground color: #72808a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
  - **HTML:** `<span class="event-type-tag">VANDRING</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .event-date-row > .event-date-column > .date-range`
  - **HTML:** `<div class="date-range">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .location.event-tags-row > .event-tags-left > span`
  - **HTML:** `<span>Bryggens Museum </span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.57 (foreground color: #72808a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
  - **HTML:** `<span class="event-type-tag">MANDAGSFOREDRAG</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .event-date-row > .event-date-column > .date-range`
  - **HTML:** `<div class="date-range">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #817e7a, background color: #f5f0e7, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.instagram-gallery__button`
  - **HTML:** `<a href="https://www.instagram.com/bymuseetibergen" target="blank" class="instagram-gallery__button instagram-gallery__button--follow"><i class="qligg-icon-instagram "></i>View on Instagram</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.16 (foreground color: #ffffff, background color: #0095f6, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#mce-FNAME`
  - **HTML:** `<input type="text" placeholder="Fornavn" value="" name="FNAME" class="required email" id="mce-FNAME" required="">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #72808a, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#mce-LNAME`
  - **HTML:** `<input type="text" placeholder="Etternavn" value="" name="LNAME" class="required email" id="mce-LNAME" required="">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #72808a, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#mce-EMAIL`
  - **HTML:** `<input type="email" placeholder="Din epost" value="" name="EMAIL" class="required email" id="mce-EMAIL" required="">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.06 (foreground color: #72808a, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-bs-target="#privacyModal"]`
  - **HTML:** `<a class="modal-trigger" data-bs-toggle="modal" data-bs-target="#privacyModal"> Personvern </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.35 (foreground color: #0c0c0c, background color: #1c2b39, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[data-bs-target="#tcModal"]`
  - **HTML:** `<a class="modal-trigger" data-bs-toggle="modal" data-bs-target="#tcModal"> Terms &amp; Conditions </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.35 (foreground color: #0c0c0c, background color: #1c2b39, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from player.vimeo.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#vimeo-video-banner`
  - **HTML:** `<iframe id="vimeo-video-banner" style="border: 0;" src="https://player.vimeo.com/video/1203445087?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;quality=480p" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" data…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#slick-slide00 > .vimeo-wrapper > iframe`
  - **HTML:** `<iframe style="border: 0;" src="https://player.vimeo.com/video/1101177840?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;quality=720p" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" data-ready…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.container > .search-form[role="search"][method="get"] > .search-input-holder > .search-field[type="search"][placeholder="Søk i Bymuseet..."]`
  - **HTML:** `<input type="search" class="search-field" placeholder="Søk i Bymuseet..." value="" name="s" title="Søk i Bymuseet...">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" prefix="og: https://ogp.me/ns#" class=" js">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#vimeo-video-banner, html`
  - **HTML:** `<html lang="en">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `#slick-slide00 > .vimeo-wrapper > iframe, html`
  - **HTML:** `<html lang="en">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 22

#### Affected Elements:

- **Target:** `.header-holder > .d-inline-block.logo-holder[href$="bymuseet.no"]`
  - **HTML:** `<a href="https://bymuseet.no" class="d-inline-block logo-holder">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="9"][aria-label="10 / 12"][data-swiper-slide-index="9"]:nth-child(1) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdjYdQVoJa3/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="10"][aria-label="11 / 12"][data-swiper-slide-index="10"]:nth-child(2) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdcBalUDKb-/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-prev > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DdW_JWKjJXS/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-active > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DeC3kzIid5d/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-next > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DeCws7sDR8C/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="2"][aria-label="3 / 12"][data-swiper-slide-index="2"]:nth-child(6) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd-ymIIDbgn/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="3"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd9nEfFGwgT/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="4"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd4TKQ8lI5Y/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="5"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DduRNnUjEOc/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="6"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DdtkhkYidmz/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="7"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/Ddrll21ARjC/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="8"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DdoAQZTDaGX/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="9"][aria-label="10 / 12"][data-swiper-slide-index="9"]:nth-child(13) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdjYdQVoJa3/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="10"][aria-label="11 / 12"][data-swiper-slide-index="10"]:nth-child(14) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdcBalUDKb-/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-duplicate-prev > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DdW_JWKjJXS/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-duplicate-active > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DeC3kzIid5d/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.swiper-slide-duplicate-next > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/DeCws7sDR8C/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `div[data-feed-item-index="2"][aria-label="3 / 12"][data-swiper-slide-index="2"]:nth-child(18) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd-ymIIDbgn/" target="_blank" rel="noreferrer" class="instagram-gallery-item__icon qligg-icon-instagram instagram-gallery-item__icon--link"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.col-sm-6 > .d-inline-block.logo-holder[href$="bymuseet.no"]`
  - **HTML:** `<a href="https://bymuseet.no" class="d-inline-block logo-holder">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.social-icons > ul > li:nth-child(1) > a`
  - **HTML:** `<a href="https://www.facebook.com/bymuseet">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.social-icons > ul > li:nth-child(2) > a`
  - **HTML:** `<a href="https://www.instagram.com/bymuseetibergen/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">`
  - **Failure summary:** Fix any of the following: user-scalable on <meta> tag disables zooming on mobile devices


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" prefix="og: https://ogp.me/ns#" class=" js">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#vimeo-video-banner, html`
  - **HTML:** `<html lang="en">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#slick-slide00 > .vimeo-wrapper > iframe, html`
  - **HTML:** `<html lang="en">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- **Target:** `.front-page-content-block`
  - **HTML:** `<section class="front-page-content-block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.events`
  - **HTML:** `<section class="events events-mixitup">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cta[target="_self"] > span`
  - **HTML:** `<span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.info-banner`
  - **HTML:** `<section class="info-banner">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.culture-for-all`
  - **HTML:** `<section class="culture-for-all">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.call-to-actions > .container`
  - **HTML:** `<div class="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.museums`
  - **HTML:** `<section class="museums related v-2">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.justify-content-between`
  - **HTML:** `<div class="d-flex justify-content-between section-title-link align-items-center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.instagram-gallery__actions`
  - **HTML:** `<div class="instagram-gallery__actions"><a href="https://www.instagram.com/bymuseetibergen" target="blank" class="instagram-gallery__button instagram-gallery__button--follow"><i class="qligg-icon-instagram "></i>View on Instagram</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mc-field-group`
  - **HTML:** `<div class="mc-field-group">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mce-FNAME`
  - **HTML:** `<input type="text" placeholder="Fornavn" value="" name="FNAME" class="required email" id="mce-FNAME" required="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mce-LNAME`
  - **HTML:** `<input type="text" placeholder="Etternavn" value="" name="LNAME" class="required email" id="mce-LNAME" required="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mce-EMAIL`
  - **HTML:** `<input type="email" placeholder="Din epost" value="" name="EMAIL" class="required email" id="mce-EMAIL" required="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

