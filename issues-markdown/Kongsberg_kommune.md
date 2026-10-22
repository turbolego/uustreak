# WCAG Violations Report for Kongsberg kommune

**Timestamp:** 2026-10-22T03:51:34.080Z
**URL:** [https://www.kongsberg.kommune.no/](https://www.kongsberg.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `.campaign__item[target="_blank"]:nth-child(1)`
  - **HTML:** `<a class="campaign__item" href="https://kongsbergregionen.no/informasjon-til-innbyggere-og-parorende/" aria-label="Bli kjent med Mitt Aidn (Åpner i nytt vindu)" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign__item[target="_blank"]:nth-child(2)`
  - **HTML:** `<a class="campaign__item" href="https://kongsbergkommune.easycruit.com/" aria-label="Vil du jobbe hos oss? (Åpner i nytt vindu)" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign__item[target="_blank"]:nth-child(3)`
  - **HTML:** `<a class="campaign__item" href="https://kartportal-kongsbergkommune.hub.arcgis.com/" aria-label="Kartportal (Åpner i nytt vindu)" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.navbar`
  - **HTML:** `<nav class="navbar navbar-default navbar-fixed-top header__nav header header__shadow">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

