# WCAG Violations Report for Hjartdal kommune

**Timestamp:** 2026-11-19T06:43:22.231Z
**URL:** [https://hjartdal.kommune.no/](https://hjartdal.kommune.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.campaign__item[target="_blank"]`
  - **HTML:** `<a class="campaign__item" href="https://www.hjartdal.kommune.no/nav/brann_og_beredskap/beredskap" aria-label="Beredskap (Opnar i nytt vindauge)" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

