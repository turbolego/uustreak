# WCAG Violations Report for Statistisk sentralbyrå

**Timestamp:** 2026-11-01T03:36:19.639Z
**URL:** [https://www.ssb.no/](https://www.ssb.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `a[aria-describedby="0-text"]`
  - **HTML:** `<a class="ssb-picture-card ver..." href="https://www.ssb.no/s..." aria-label="Unge voksne er mindr..." aria-describedby="0-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Flere går på kino"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/kultur-og-fritid/kultur/artikler/kinobesok-i-norge" aria-label="Flere går på kino" aria-describedby="1-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="SSBs historie"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/omssb/ssbs-virksomhet/statistisk-sentralbyra-feirer-150-ar/tidslinje" aria-label="SSBs historie" aria-describedby="2-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

