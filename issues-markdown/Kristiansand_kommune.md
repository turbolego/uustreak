# WCAG Violations Report for Kristiansand kommune

**Timestamp:** 2026-10-09T05:03:53.918Z
**URL:** [https://www.kristiansand.kommune.no/](https://www.kristiansand.kommune.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#accept-all-cookies`
  - **HTML:** `<button id="accept-all-cookies" class="btn accept-all">Godta alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.77 (foreground color: #ffffff, background color: #4caf50, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#accept-cookies`
  - **HTML:** `<button id="accept-cookies" class="btn accept">Godta valgte</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.97 (foreground color: #ffffff, background color: #007bff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#reject-cookies`
  - **HTML:** `<button id="reject-cookies" class="btn reject">Avslå</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.68 (foreground color: #ffffff, background color: #f44336, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.learn-more`
  - **HTML:** `<a href="https://www.kristiansand.kommune.no/personvern" target="_blank" class="learn-more">Les mer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.61 (foreground color: #007bff, background color: #f4f4f4, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js hydrated" lang="no" version="2025">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.cookie-content > h3`
  - **HTML:** `<h3>Vi bruker informasjonskapsler</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-content > p`
  - **HTML:** `<p>Vi bruker nødvendige informasjonskapsler for at nettstedet skal fungere optimalt. Med ditt samtykke bruker vi også informasjonskapsler for analyse og for å forbedre brukeropplevelsen.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-options`
  - **HTML:** `<div class="cookie-options">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.learn-more`
  - **HTML:** `<a href="https://www.kristiansand.kommune.no/personvern" target="_blank" class="learn-more">Les mer</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

