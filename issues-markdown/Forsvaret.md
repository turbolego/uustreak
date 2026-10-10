# WCAG Violations Report for Forsvaret

**Timestamp:** 2026-10-10T08:25:43.913Z
**URL:** [https://www.forsvaret.no/](https://www.forsvaret.no/)
**Total Violations:** 1

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.cookie-panel-banner__title`
  - **HTML:** `<h2 class="cookie-panel-banner__title">Denne siden bruker informasjonskapsler (cookies)</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-panel-banner__description`
  - **HTML:** `<p class="cookie-panel-banner__description">Forsvaret.no bruker informasjonskapsler (cookies) for å forbedre brukeropplevelsen, opprettholde nettsidens funksjonalitet og til markedsføring.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

