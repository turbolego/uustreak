# WCAG Violations Report for NITO - Norges ingeniør- og teknologiorganisasjon

**Timestamp:** 2026-10-02T17:17:18.330Z
**URL:** [https://www.nito.no/](https://www.nito.no/)
**Total Violations:** 2

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.default-header__menu`
  - **HTML:** `<nav class="default-header__menu" data-vanilla-component="main-menu">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.privacy_prompt_content > h1`
  - **HTML:** `<h1 class="hyphenate">Vi bru­­ker in­­for­­ma­­sjons­­kaps­­­ler (cookies)</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.privacy_prompt_content > p:nth-child(3)`
  - **HTML:** `<p> Nødvendige informasjonskapsler (cookies) sørger for at denne nettsiden fungerer som den skal. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.privacy_prompt_content > p:nth-child(4)`
  - **HTML:** `<p> I tillegg ber vi om samtykke til å bruke cookies til personalisering og tilpasset markedsføring. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.privacy_prompt_content > p:nth-child(5)`
  - **HTML:** `<p> Godta alle eller velg hvilke cookies du samtykker til ved å se detaljer. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.option_set`
  - **HTML:** `<div class="option_set visually-hidden">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

