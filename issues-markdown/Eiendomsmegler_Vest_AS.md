# WCAG Violations Report for Eiendomsmegler Vest AS

**Timestamp:** 2026-10-22T03:44:28.481Z
**URL:** [https://www.eiendomsmeglernorge.no/](https://www.eiendomsmeglernorge.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#menu-item-1064875 > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/selge-bolig/">Selge</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#menu-item-1064874 > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/kjope-bolig/">Kjøpe</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#menu-item-1064876 > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/finn-megler/">Finn megler</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.site-header__toggle-label`
  - **HTML:** `<span class="site-header__toggle-label">Meny</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.44 (foreground color: #ffffff, background color: #ff4238, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h6`
  - **HTML:** `<h6>Gjør et boligsøk</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.image-top-side.emn-two-column:nth-child(1) > .emn-two-column-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/boligmarkedet-holder-seg-sterkere-enn-ventet-store-forskjeller-mellom-byene/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.emn-two-column:nth-child(2) > .emn-two-column-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/selge-hytte-boplikt-og-utleie-endrer-fritidsmarkedet/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.emn-two-column:nth-child(3) > .emn-two-column-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/selge-hytte-pa-fjellet-dette-bor-du-vite-forst/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.image-top-side.emn-two-column:nth-child(4) > .emn-two-column-image-wrapper > a`
  - **HTML:** `<a href="https://www.eiendomsmeglernorge.no/nyheter/nar-lonner-det-seg-a-selge-boligen/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `section`
  - **HTML:** `<section class="page-hero page-hero--front">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boligreise`
  - **HTML:** `<div id="boligreise" class="emn-wrapper section-boligreise bg-white width-normal ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boliglan`
  - **HTML:** `<div id="boliglan" class="emn-wrapper section-boliglan bg-light width-full img-left">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#mer-om-bolig`
  - **HTML:** `<div id="mer-om-bolig" class="emn-wrapper section-mer-om-bolig bg-white width-full ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h6`
  - **HTML:** `<h6>Gjør et boligsøk</h6>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#boligsok > .emn-section > h2`
  - **HTML:** `<h2>Finn ditt neste hjem</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vi-gjor-boligen-din-synlig`
  - **HTML:** `<div id="vi-gjor-boligen-din-synlig" class="emn-wrapper section-vi-gjor-boligen-din-synlig bg-white width-normal ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

