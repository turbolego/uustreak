# WCAG Violations Report for Statistisk sentralbyrå

**Timestamp:** 2026-10-22T04:00:41.706Z
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
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/inntekt-og-forbruk/inntekt-og-formue/artikler/4-av-10-har-rentebaerende-forbruksgjeld" aria-label="4 av 10 har rentebærende forbruksgjeld" aria-describedby="0-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Økt overskudd for norsk handel"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/utenriksokonomi/utenrikshandel/statistikk/utenrikshandel-med-varer/artikler/konflikten-i-midtosten-bidro-til-hoyere-handelsoverskudd-for-norge" aria-label="Økt overs…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Husmødrene var mange"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/befolkning/artikler-og-publikasjoner/nordmenns-arbeidsmengde-skulle-maales" aria-label="Husmødrene var mange" aria-describedby="2-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

