# WCAG Violations Report for Aberia AS

**Timestamp:** 2026-10-09T04:50:53.286Z
**URL:** [https://www.aberia.no/](https://www.aberia.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#col-524952537 > .dark.col-inner > p`
  - **HTML:** `<p>Aberia Ung er et landsdekkende, ideelt aksjeselskap som tilbyr tiltak i institusjon.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.15 (foreground color: #f1f1f1, background color: #529389, font size: 12.6pt (16.8px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#col-1231143879 > .dark.col-inner > p`
  - **HTML:** `<p>Vi har drevet omsorgs- og avlastningstjenester siden 1981 og tilbyr våre tjenester til brukere i alle aldersgrupper.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.08 (foreground color: #f1f1f1, background color: #1094c1, font size: 12.6pt (16.8px), font weight: normal). Expected contrast ratio of 4.5:1


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#content`
  - **HTML:** `<div id="content" role="main" class="content-area">`
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
  - **HTML:** `<main id="main" class="">`
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
  - **HTML:** `<main id="main" class="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.cli-bar-message`
  - **HTML:** `<div class="cli-bar-message">Denne nettsiden benytter informasjonskapsler (cookies).</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `.slider`
  - **HTML:** `<div class="slider slider-type-f..." data-flickity-option...="{ "cellA...">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

