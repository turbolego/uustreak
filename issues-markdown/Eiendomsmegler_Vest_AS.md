# WCAG Violations Report for Eiendomsmegler Vest AS

**Timestamp:** 2026-10-02T17:10:44.625Z
**URL:** [https://www.eiendomsmeglernorge.no/](https://www.eiendomsmeglernorge.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#menu-item-1064875 > .suki-menu-item-link > .suki-menu-item-title`
  - **HTML:** `<span class="suki-menu-item-title">Selge</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#menu-item-1064874 > .suki-menu-item-link > .suki-menu-item-title`
  - **HTML:** `<span class="suki-menu-item-title">Kjøpe</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#menu-item-1064876 > .suki-menu-item-link > .suki-menu-item-title`
  - **HTML:** `<span class="suki-menu-item-title">Finn megler</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h6`
  - **HTML:** `<h6>Gjør et boligsøk</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `img`
  - **HTML:** `<img src="https://d3gck1or7m1j2s.cloudfront.net/wp-content/uploads/2025/04/25180941/EM-Norge-hovedlogo-original-rips-RGB.svg" style="max-width: 220px; margin: 1rem 0;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" class="coi-banner-properties" role="banner" data-testid="coi-banner__overlay" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" class="coi-banner-properties" role="banner" data-testid="coi-banner__overlay" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.suki-header-logo > .site-title.h1.menu-item > .suki-menu-item-link[rel="home"]`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/" rel="home" class="suki-menu-item-link">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.sm-2col:nth-child(1) > .sm-2col-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/hvordan-velge-riktig-megler/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.sm-2col:nth-child(2) > .sm-2col-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/hvor-er-boligmarkedet-sterkest-akkurat-na/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.sm-2col:nth-child(3) > .sm-2col-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/hvor-lang-tid-tar-det-a-selge-hytte-ved-sjoen/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.sm-2col:nth-child(4) > .sm-2col-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/selge-hytte-boplikt-og-utleie-endrer-fritidsmarkedet/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boligreise`
  - **HTML:** `<div id="boligreise" class="sm-wrapper section-boligreise bg-white width-normal ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boliglan`
  - **HTML:** `<div id="boliglan" class="sm-wrapper section-boliglan bg-light width-full img-left">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mer-om-bolig`
  - **HTML:** `<div id="mer-om-bolig" class="sm-wrapper section-mer-om-bolig bg-white width-full ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h6`
  - **HTML:** `<h6>Gjør et boligsøk</h6>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boligsok > .sm-section > h2`
  - **HTML:** `<h2>Finn ditt neste hjem</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vi-gjor-boligen-din-synlig`
  - **HTML:** `<div id="vi-gjor-boligen-din-synlig" class="sm-wrapper section-vi-gjor-boligen-din-synlig bg-white width-normal ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

