# WCAG Violations Report for Unicare BAB AS

**Timestamp:** 2026-10-03T04:23:51.607Z
**URL:** [https://unicare.no/](https://unicare.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element

- **Target:** `iframe[width="100%"], body`
  - **HTML:** `<body role="presentation">`
  - **Failure summary:** Fix any of the following: ARIA role presentation is not allowed for given element

- **Target:** `#splide01-slide01`
  - **HTML:** `<li class="splide__slide is-active is-visible" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 5" style="width: calc(100%);">`
  - **Failure summary:** Fix any of the following: ARIA role tabpanel is not allowed for given element


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from player.vimeo.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[width="100%"]`
  - **HTML:** `<iframe src="//player.vimeo.com/video/857076555?app_id=122963&amp;loop=1&amp;mute=1&amp;background=1&amp;autoplay=1&amp;responsive=0&amp;controls=0&amp;api=1" width="100%" height="100%" allow="fullscreen" allowfullscreen=""> </iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.inner-content.odd > h3`
  - **HTML:** `<h3><a href="https://unicare.no/forskning-og-utvikling/om-fou/" target="_self">Forskning og utvikling</a></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `article[data-articleid="3024"] > a[target="_self"] > .card-body > h3[itemprop="headline"]`
  - **HTML:** `<h3 itemprop="headline">Nye ESC-retningslinjer styrker hjerterehabiliteringen</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `article[data-articleid="2334"] > a[target="_self"] > .card-body > h3`
  - **HTML:** `<h3>Evaluering av AI-teknologi for journalføring i spesialisthelsetjenesten</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.nav-inline`
  - **HTML:** `<nav class="tile-common standard-menu d-print-none nav-inline navbar-nav d-none d-lg-block single-mode">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.pause-button`
  - **HTML:** `<a href="#" class="pause-button">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#content-link`
  - **HTML:** `<div id="content-link" class="d-print-none"><a class="sr-only sr-only-focusable" href="#main-content">Til innhold</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#coretrek-footer`
  - **HTML:** `<div id="coretrek-footer" class="d-print-none">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

