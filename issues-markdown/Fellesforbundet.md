# WCAG Violations Report for Fellesforbundet

**Timestamp:** 2026-10-22T03:44:43.527Z
**URL:** [https://www.fellesforbundet.no/](https://www.fellesforbundet.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Embedded code from CookieFirst
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `button[data-testid="actionButton-reject"]`
  - **HTML:** `<button data-testid="actionButton-reject" title="Nekt alle cookie" data-cookiefirst-act...="reject" tabindex="0" aria-label="Nekt alle cookie" data-cookiefirst-out...="true" data-cookiefirst-but...="secondary" type="button" class=" cf2Lf6 …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `button[data-testid="actionButton-adjust"]`
  - **HTML:** `<button data-testid="actionButton-adjust" title="Juster innstillingen..." aria-haspopup="dialog" aria-expanded="false" data-cookiefirst-act...="adjust" tabindex="0" aria-label="Juster innstillingen..." data-cookiefirst-out...="true" data-c…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

