# WCAG Violations Report for De nett AS

**Timestamp:** 2026-11-20T06:06:26.047Z
**URL:** [https://denett.no/](https://denett.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 7

#### Affected Elements:

- **Target:** `.bot-cta > a[target="_blank"]`
  - **HTML:** `<a aria-label="Gå til https://quantinsight.net/outage/index.html#7080010003614" href="https://quantinsight.net/outage/index.html#7080010003614" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.arrow-link-external.bot-cta.home-entry > a`
  - **HTML:** `<a aria-label="Gå til https://powercatch-drangedal.atlassian.net/servicedesk/customer/portals" href="https://powercatch-drangedal.atlassian.net/servicedesk/customer/portals"> Kundeportal </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bot-cta.home-entry > a[href$="norgespris-2"]`
  - **HTML:** `<a aria-label="Gå til https://denett.no/norgespris-2" href="https://denett.no/norgespris-2"> Les mer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(1) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://denett.no/kompensasjon-ved-langvarige-strømbrudd" href="https://denett.no/kompensasjon-ved-langvarige-strømbrudd" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(2) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://denett.no/vi-takker-for-innsatsen" href="https://denett.no/vi-takker-for-innsatsen" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.article-card._s6._l4:nth-child(3) > .article-card-in`
  - **HTML:** `<a aria-label="Gå til https://denett.no/arbeid-på-nakksjø-linja-2-2" href="https://denett.no/arbeid-på-nakksjø-linja-2-2" class="article-card-in">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `._xl4.ql:nth-child(3) > a[target="_blank"]`
  - **HTML:** `<a aria-label="Gå til https://www.facebook.com/denett2022" href="https://www.facebook.com/denett2022" target="_blank"> DE Nett på Facebook </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `div[data-cm-view="default"] > .cm__content:nth-child(1)`
  - **HTML:** `<div class="cm__content "> <h3>Denne nettsiden benytter seg av tredjeparts cookies</h3> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-cm-view="default"] > .cm__content:nth-child(2)`
  - **HTML:** `<div class="cm__content " style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

