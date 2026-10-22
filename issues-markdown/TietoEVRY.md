# WCAG Violations Report for TietoEVRY

**Timestamp:** 2026-10-22T04:03:35.722Z
**URL:** [https://www.tieto.com/no/](https://www.tieto.com/no/)
**Total Violations:** 3

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 9

#### Affected Elements:

- **Target:** `.ml-4`
  - **HTML:** `<button class="language-menu-btn text-body-14 ml-4 flex items-center text-white capitalize outline-white before:h-4 before:w-4 sm:ml-12 md:ml-18 xl:ml-24 2xl:ml-32" data-action="additional-open-language" aria-label="Velg lokalt nettsted">N…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.static-col.content-start.outline-0:nth-child(1)`
  - **HTML:** `<a class="group relative grid ..." href="https://www.tietoevr..." aria-label="Les mer: Hvordan Hel...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.static-col.content-start.outline-0:nth-child(2)`
  - **HTML:** `<a class="group relative grid static-col flex-shrink-0 grid-cols-1 content-start outline-0 -outline-offset-2 hover:no-underline" href="https://www.tietoevry.com/no/suksesshistorier/2024/slik-ble-sarpsborg-mer-effektive-med-public-360/" ari…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.static-col.content-start.outline-0:nth-child(3)`
  - **HTML:** `<a class="group relative grid ..." href="https://www.tietoevr..." aria-label="Les mer: Sparebanken...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.news-item.border-t.border-grey-300:nth-child(1) > .align-center.gap-8.border-r-4`
  - **HTML:** `<a class="group align-center o..." href="/no/nyhetsrom/presse..." aria-label="Les mer: KapitalKont...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.news-item.border-t.border-grey-300:nth-child(2) > .align-center.gap-8.border-r-4`
  - **HTML:** `<a class="group align-center o..." href="/no/nyhetsrom/presse..." aria-label="Les mer: Köping komm...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.news-item.border-t.border-grey-300:nth-child(3) > .align-center.gap-8.border-r-4`
  - **HTML:** `<a class="group align-center o..." href="/no/nyhetsrom/presse..." aria-label="Les mer: Tieto og GN...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.news-item.border-t.border-grey-300:nth-child(4) > .align-center.gap-8.border-r-4`
  - **HTML:** `<a class="group align-center o..." href="/no/nyhetsrom/presse..." aria-label="Les mer: Kvinner fry...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.btn-blue-600.outline-white.before\:h-4`
  - **HTML:** `<button class="btn btn-blue-600 language-menu-btn text-body-14 flex items-center text-white capitalize outline-white before:h-4 before:w-4" data-action="additional-open-language" aria-label="Velg lokalt nettsted">Norge (norsk)</button>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.md\:gap-6.gap-4.h-full > .md\:gap-6.gap-4`
  - **HTML:** `<nav class="flex h-full items-center gap-4 md:gap-6">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from OneTrust
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otCenterRounded default vertical-align-content" tabindex="0" aria-label="We use cookies" aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

