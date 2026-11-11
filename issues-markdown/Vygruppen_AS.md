# WCAG Violations Report for Vygruppen AS

**Timestamp:** 2026-11-11T05:22:24.678Z
**URL:** [https://www.vy.no/](https://www.vy.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 12

#### Affected Elements:

- **Target:** `.css-1096yyu`
  - **HTML:** `<a aria-label="Bergensbanen, Tog" role="listitem" class="css-1096yyu" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-1dc70b0[aria-label="Göteborg, Tog"][role="listitem"]`
  - **HTML:** `<a aria-label="Göteborg, Tog" role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-1dc70b0[aria-label="Kristiansand, Buss"][role="listitem"]`
  - **HTML:** `<a aria-label="Kristiansand, Buss" role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-1dc70b0[aria-label="Geilo, Tog"][role="listitem"]`
  - **HTML:** `<a aria-label="Geilo, Tog" role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(1)`
  - **HTML:** `<a href="https://www.instagram.com/p/DfkXcqGNplp/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(2)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DfaY5nqOijv/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(3)`
  - **HTML:** `<a href="https://www.instagram.com/p/DfZtGNHjVur/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(4)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DfVWmaINSKA/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(5)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DfSjDc5t8oi/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(6)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DfQIyrpNGgs/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(7)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DfDTPCRt0OP/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h.group[target="_blank"]:nth-child(8)`
  - **HTML:** `<a href="https://www.instagram.com/reel/De9e5vvNRPB/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `.css-g2hmy8[href$="leie-buss"][data-discover="true"]`
  - **HTML:** `<a aria-label="Du kan bestille turbuss med Vy. Bussene våre byr på høy komfort, fleksibilitet og har alltid sikkerhet i fokus. Uansett hvor dere skal, hjelper vi dere med en behagelig reise." class="css-g2hmy8" href="/reis-med-vy/leie-buss…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.css-g2hmy8[href$="gruppereise"][data-discover="true"]`
  - **HTML:** `<a aria-label="Du kan bestille gruppereiser med Vy. Enten dere skal på firmatur, er på vei til turnering eller er en stor vennegjeng – gruppereiser med tog eller buss fra Vy er enkelt og komfortabelt." class="css-g2hmy8" href="/reis-med-vy…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.css-d7200m > .css-79elbk > .css-jdcmw5[role="region"]`
  - **HTML:** `<div role="region" class="css-jdcmw5">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.css-34w79r[data-scope="toast"][data-part="group"]:nth-child(10)`
  - **HTML:** `<div data-scope="toast" data-part="group" dir="ltr" tabindex="-1" aria-label="bottom Notifications..." id="toast-group:bottom" data-placement="bottom" data-side="bottom" data-align="center" aria-live="polite" role="region" class="css-34w79…`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.css-1f5s02f > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div

