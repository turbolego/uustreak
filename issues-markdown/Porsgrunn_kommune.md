# WCAG Violations Report for Porsgrunn kommune

**Timestamp:** 2026-10-22T03:58:33.826Z
**URL:** [https://www.porsgrunn.kommune.no/](https://www.porsgrunn.kommune.no/)
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

- **Target:** `#siteSearchBarToggle`
  - **HTML:** `<a class="site-tool site-tool-search collapsed" id="siteSearchBarToggle" href="#siteSearchBar" data-bs-toggle="collapse" aria-expanded="false" aria-controls="siteSearchBar" role="button" aria-label="Åpne Lukke søkelinje">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

