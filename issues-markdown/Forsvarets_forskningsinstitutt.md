# WCAG Violations Report for Forsvarets forskningsinstitutt

**Timestamp:** 2026-11-23T06:15:23.805Z
**URL:** [https://www.ffi.no/](https://www.ffi.no/)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cookie-panel-banner__title`
  - **HTML:** `<h2 class="cookie-panel-banner__title">Denne siden bruker informasjonskapsler (cookies)</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-panel-banner__description`
  - **HTML:** `<p class="cookie-panel-banner__description">På ffi.no bruker vi informasjonskapsler (cookies) for å forbedre brukeropplevelsen, optimalisere vår nettside og til markedsføring. Ved å klikke godkjenn, godtar du vår bruk av disse informasjons…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

