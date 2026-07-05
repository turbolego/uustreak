# WCAG Violations Report for Stiftelsen Bymuseet i Bergen

**Timestamp:** 2026-07-05T00:48:05.483Z
**URL:** [https://bymuseet.no/](https://bymuseet.no/)
**Total Violations:** 9

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `#vimeo-video-banner, .OverlayBase_module_overlayWrapper__321515a7`
- `#slick-slide00 > .vimeo-wrapper > iframe, .OverlayBase_module_overlayWrapper__321515a7`

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 2

#### Affected Elements:

- `#vimeo-video-banner, body`
- `#slick-slide00 > .vimeo-wrapper > iframe, body`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 30

#### Affected Elements:

- `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(1) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(2) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(3) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(4) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(5) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(5) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(5) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(6) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(6) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(6) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(7) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(7) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(7) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.col-lg-3.event.load-more__item:nth-child(8) > .event-cover > .location.event-tags-row > .event-tags-left > span`
- `.col-lg-3.event.load-more__item:nth-child(8) > .event-cover > .location.event-tags-row > .event-tags-right > .event-type-tag`
- `.col-lg-3.event.load-more__item:nth-child(8) > .event-cover > .event-date-row > .event-date-column > .date-range`
- `.instagram-gallery__button`
- `#mce-FNAME`
- `#mce-LNAME`
- `#mce-EMAIL`
- `a[data-bs-target="#privacyModal"]`
- `a[data-bs-target="#tcModal"]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#vimeo-video-banner`
- `#slick-slide00 > .vimeo-wrapper > iframe`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.info-banner-headline`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `.container > .search-form[role="search"][method="get"] > .search-input-holder > .search-field[type="search"][placeholder="Søk i Bymuseet..."]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 22

#### Affected Elements:

- `.header-holder > .d-inline-block.logo-holder[href$="bymuseet.no"]`
- `div[data-feed-item-index="9"][aria-label="10 / 12"][data-swiper-slide-index="9"]:nth-child(1) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="10"][aria-label="11 / 12"][data-swiper-slide-index="10"]:nth-child(2) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-prev > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-active > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-next > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="2"][aria-label="3 / 12"][data-swiper-slide-index="2"]:nth-child(6) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="3"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="4"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="5"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="6"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="7"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="8"] > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="9"][aria-label="10 / 12"][data-swiper-slide-index="9"]:nth-child(13) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="10"][aria-label="11 / 12"][data-swiper-slide-index="10"]:nth-child(14) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-duplicate-prev > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-duplicate-active > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.swiper-slide-duplicate-next > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `div[data-feed-item-index="2"][aria-label="3 / 12"][data-swiper-slide-index="2"]:nth-child(18) > .instagram-gallery-item__wrap > .instagram-gallery-item__media-wrap > .instagram-gallery-item__icon--link.qligg-icon-instagram[rel="noreferrer"]`
- `.col-sm-6 > .d-inline-block.logo-holder[href$="bymuseet.no"]`
- `.social-icons > ul > li:nth-child(1) > a`
- `.social-icons > ul > li:nth-child(2) > a`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- `.front-page-content-block`
- `.events`
- `.cta[target="_self"] > span`
- `.info-banner`
- `.culture-for-all`
- `.call-to-actions > .container`
- `.museums`
- `.justify-content-between`
- `.instagram-gallery__actions`
- `.mc-field-group`
- `#mce-FNAME`
- `#mce-LNAME`
- `#mce-EMAIL`
