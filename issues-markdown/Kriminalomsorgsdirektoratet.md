# WCAG Violations Report for Kriminalomsorgsdirektoratet

**Timestamp:** 2026-10-22T03:49:34.129Z
**URL:** [https://www.kriminalomsorgen.no/](https://www.kriminalomsorgen.no/)
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

- **Target:** `.pr-2`
  - **HTML:** `<a class="flex cursor-pointer items-center pr-2" aria-label="Gå til forsiden" href="/">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

