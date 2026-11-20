# WCAG Violations Report for Advokattilsynet

**Timestamp:** 2026-11-20T05:58:36.329Z
**URL:** [https://tilsynet.no/](https://tilsynet.no/)
**Total Violations:** 1

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 6

#### Affected Elements:

- **Target:** `.articleItem:nth-child(1)`
  - **HTML:** `<a class="articleItem" href="/aktuelt/byter-advokatverksemda-organisasjonsnummer" aria-label="Byter advokatverksemda organisasjonsnummer? Hugs å melde frå i god tid!">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.articleItem:nth-child(2)`
  - **HTML:** `<a class="articleItem" href="/aktuelt/sands-advokatfirma-ilegges-1-9-millioner-kroner-i-overtredelsesgebyr" aria-label="SANDS Advokatfirma ilegges 1,9 millioner kroner i overtredelsesgebyr">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.articleItem:nth-child(3)`
  - **HTML:** `<a class="articleItem" href="/aktuelt/oppdatert-liste-over-hoyrisikoland" aria-label="Oppdatert liste over høyrisikoland ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.articleItem:nth-child(4)`
  - **HTML:** `<a class="articleItem" href="/aktuelt/advokater-sokes-til-forvalteroppdrag" aria-label="Advokater søkes til forvalteroppdrag">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="ny-forskrift-pep"]`
  - **HTML:** `<a class="articleItem" href="/aktuelt/ny-forskrift-pep" aria-label="Ny forskrift om politisk eksponerte personer (PEP): frist 1. januar 2027">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.articleItem:nth-child(6)`
  - **HTML:** `<a class="articleItem" href="/aktuelt/risikovurdering-advokatbransjen" aria-label="Ny risikovurdering gir advokatbransjen et bedre verktøy mot hvitvasking">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

