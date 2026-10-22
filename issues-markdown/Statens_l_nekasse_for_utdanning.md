# WCAG Violations Report for Statens lånekasse for utdanning

**Timestamp:** 2026-10-22T03:59:48.537Z
**URL:** [https://lanekassen.no/#samtykke-banner](https://lanekassen.no/#samtykke-banner)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.c-aksjonsfelt:nth-child(1) > .c-aksjonsfelt-kolonne:nth-child(3) > .c-aksjonsfelt__h3`
  - **HTML:** `<h3 class="c-aksjonsfelt__h3"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `.c-flis.c-flis--klikkbar.c-flis--forside:nth-child(1)`
  - **HTML:** `<a class="c-flis c-flis--klikkbar c-flis--forside c-flis--forside-lilac" href="/nb-NO/gjeld-og-betaling/sletting-av-gjeld-i-utvalgte-kommuner/" aria-label="Sletting av studielån i utvalgte kommuner">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.c-flis.c-flis--klikkbar.c-flis--forside:nth-child(2)`
  - **HTML:** `<a class="c-flis c-flis--klikkbar c-flis--forside c-flis--forside-lilac" href="/nb-NO/hjelp-og-kontakt/behandlingstid2/" aria-label="Sjekk hva som er behandlingstiden hvis du søker nå. ">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.MuiCardContent-root > div:nth-child(1)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.MuiCardContent-root > div:nth-child(3)`
  - **HTML:** `<div><p class="MuiTypography-root MuiTypography-body-s css-1vnlz3b"><a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways lk-link css-lcifyj" title="Les mer om informasjonskapsler" href="https://lanekassen…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

