# WCAG Violations Report for Norsk Rikskringkasting AS

**Timestamp:** 2026-11-14T08:37:08.635Z
**URL:** [https://www.nrk.no/](https://www.nrk.no/)
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

- **Target:** `.pme-banner`
  - **HTML:** `<a class="pme-banner" aria-label="Gå til Maskorama" data-ec-id="maskorama" data-ec-name="Maskorama banner" href="https://delta.nrk.no/maskorama/?utm_source=nrkno&utm_medium=banner&utm_campaign=maskorama">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

