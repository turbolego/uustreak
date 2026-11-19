# WCAG Violations Report for Delecto kompetanse AS

**Timestamp:** 2026-11-19T06:36:33.160Z
**URL:** [https://delectokragero.no/](https://delectokragero.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#tile-3119 > .tile-content > .bottomlink.justify-content-center.d-flex > .btn-outline-primary.btn[target="_self"]`
  - **HTML:** `<a href="https://delectokragero.no/aktuelt/" target="_self" class="btn btn-outline-primary">Flere nyheter</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.42 (foreground color: #e9500e, background color: #f5f5f5, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#tile-3125 > .tile-content > .bottomlink.justify-content-center.d-flex > .btn-outline-primary.btn[target="_self"]`
  - **HTML:** `<a href="https://delectokragero.no/kurs-aktiviteter/" target="_self" class="btn btn-outline-primary">Kurs/aktiviteter</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.42 (foreground color: #e9500e, background color: #f5f5f5, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `article[data-articleid="6942"] > a[target="_self"] > .card-body > h3[itemprop="headline"]`
  - **HTML:** `<h3 itemprop="headline">Systemsvikt, milliardsluk og Kåring av Norges beste inkluderingsløsninger: Slik blir siste dag av Arbeidsuka på Arendalsuka</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `h3[itemprop="name"]`
  - **HTML:** `<h3 itemprop="name">Jobbklubb</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.navbar-nav`
  - **HTML:** `<nav class="tile-common standard-menu d-print-none nav-inline navbar-nav d-none d-lg-block quick-mode" aria-label="Hovedmeny">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#coretrek-footer`
  - **HTML:** `<div id="coretrek-footer" class="d-print-none">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

