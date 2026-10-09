# WCAG Violations Report for Vygruppen AS

**Timestamp:** 2026-10-09T05:17:02.950Z
**URL:** [https://www.vy.no/](https://www.vy.no/)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 13

#### Affected Elements:

- **Target:** `.css-1auyt0q > .css-1dc70b0[role="listitem"][data-discover="true"]`
  - **HTML:** `<a aria-label="Malmö, Tog. Fra 566 ..." role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-1096yyu`
  - **HTML:** `<a aria-label="Bergensbanen, Tog. F..." role="listitem" class="css-1096yyu" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-43gtu1 > .css-1dc70b0[role="listitem"][data-discover="true"]`
  - **HTML:** `<a aria-label="Kristiansand, Buss. ..." role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-1o36ap5 > .css-1dc70b0[role="listitem"][data-discover="true"]`
  - **HTML:** `<a aria-label="Bergen, Buss. Fra 24..." role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-nans3h > .css-1dc70b0[role="listitem"][data-discover="true"]`
  - **HTML:** `<a aria-label="Fredrikstad, Tog. Fr..." role="listitem" class="css-1dc70b0" href="/se-reiseforslag?fro..." data-discover="true">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(1)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DeHy-VRNWqT/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(2)`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd9hnmbDda1/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(3)`
  - **HTML:** `<a href="https://www.instagram.com/p/Dd4ar93jWtN/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(4)`
  - **HTML:** `<a href="https://www.instagram.com/reel/Ddrawo3t89n/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(5)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdZTruwNG2h/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(6)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DdHIZBokkbk/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(7)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DcyuSoIlB8g/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.css-rnug4h[target="_blank"][role="listitem"]:nth-child(8)`
  - **HTML:** `<a href="https://www.instagram.com/reel/DcdsdSQjgg1/" role="listitem" class="group css-rnug4h" target="_blank">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.css-1f5s02f > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div

