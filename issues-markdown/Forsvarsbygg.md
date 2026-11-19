# WCAG Violations Report for Forsvarsbygg

**Timestamp:** 2026-11-19T06:41:03.621Z
**URL:** [https://www.forsvarsbygg.no/](https://www.forsvarsbygg.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.startBubble-0-0-1`
  - **HTML:** `<button class="startBubble-0-0-1 is-icon is-outline-focused" aria-label="Start samtale">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


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
  - **HTML:** `<p class="cookie-panel-banner__description">Forsvarsbygg.no bruker informasjonskapsler (cookies) for å forbedre brukeropplevelsen, opprettholde nettsidens funksjonalitet og til markedsføring.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

