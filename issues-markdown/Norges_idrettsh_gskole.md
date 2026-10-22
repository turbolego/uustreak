# WCAG Violations Report for Norges idrettshøgskole

**Timestamp:** 2026-10-22T03:55:24.073Z
**URL:** [https://www.nih.no/](https://www.nih.no/)
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

- **Target:** `.lang-secondary`
  - **HTML:** `<a class="lang-secondary" lang="en" aria-label="english" href="https://www.nih.no/english/">en</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

