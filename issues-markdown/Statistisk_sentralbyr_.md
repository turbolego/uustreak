# WCAG Violations Report for Statistisk sentralbyrå

**Timestamp:** 2026-11-05T09:13:13.786Z
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
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/arbeid-og-lonn/sysselsetting/artikler/faerre-unge-innvandrere-star-utenfor-arbeid-og-utdanning" aria-label="Færre unge innvandrere står utenfor arbeid og utdanning" …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Utslipp av klimagasser går ned"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/natur-og-miljo/forurensning-og-klima/statistikk/utslipp-til-luft/artikler/norge-har-kuttet-14-prosent-i-klimagasser-siden-1990" aria-label="Utslipp av klimagasser gå…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="SSBs historie"]`
  - **HTML:** `<a class="ssb-picture-card vertical w-100 group" href="https://www.ssb.no/omssb/ssbs-virksomhet/statistisk-sentralbyra-feirer-150-ar/tidslinje" aria-label="SSBs historie" aria-describedby="2-text">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

