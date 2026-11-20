# WCAG Violations Report for Åmot kommune

**Timestamp:** 2026-11-20T06:00:12.532Z
**URL:** [https://www.amot.kommune.no/](https://www.amot.kommune.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_615_WebpartId_615_rptItems_ctl01_ucDisplayControl_hlLinkAlle`
  - **HTML:** `<a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_615_WebpartId_615_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #00863d, background color: #ededed, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logo`
  - **HTML:** `<img class="logo" src="/design/SATE/Amot/v2025/assets/images/logo-Amot.svg" alt="Åmot kommune">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #000000; --bc-primary-color-400: #191919; --bc-primary-color-300: #474747; --bc-primary-color-200: #7E7E7E; --bc-primary-color-100: #B1B1B1;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #000000; --bc-primary-color-400: #191919; --bc-primary-color-300: #474747; --bc-primary-color-200: #7E7E7E; --bc-primary-color-100: #B1B1B1;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `.global-area-message`
  - **HTML:** `<div class="global-area-message">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ac-banner-field--search-box > .ac-banner-field-header`
  - **HTML:** `<div class="ac-banner-field-header"><h2 class="ac-banner-field-title"><span class="ac-banner-field-title-text">Hva kan vi hjelpe med?</span></h2></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ac-banner-field--search-box > .ac-banner-field-footer`
  - **HTML:** `<div class="ac-banner-field-footer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-top`
  - **HTML:** `<div class="section frontpage-top">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-focus-field`
  - **HTML:** `<div class="section frontpage-focus-field">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_615_WebpartId_615_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-politics`
  - **HTML:** `<div class="section frontpage-politics">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

