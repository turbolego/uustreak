# WCAG Violations Report for Statistisk sentralbyrå

**Timestamp:** 2026-11-23T06:37:13.839Z
**URL:** [https://www.ssb.no/](https://www.ssb.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#popup-title`
  - **HTML:** `<h4 class="header-text" id="popup-title">Hvordan opplever du ssb.no?</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `a[aria-describedby="0-text"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/utenriksokonomi/utenrikshandel/statistikk/utenrikshandel-med-varer/artikler/hoyeste-handelsoverskudd-siden-2022" aria-label="121,4 milliarder i overskudd i oktober" …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-describedby="1-text"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/arbeid-og-lonn/sysselsetting/statistikk/antall-arbeidsforhold-og-lonn/artikler/hvor-mange-jobber-er-det-i-norge" aria-label="Over 3,2 millioner jobber i Norge" aria-…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="15 prosent hadde bil i 1960"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/befolkning/artikler-og-publikasjoner/grunnlaget-for-et-sentralt-personregister" aria-label="15 prosent hadde bil i 1960" aria-describedby="2-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

