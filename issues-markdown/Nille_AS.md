# WCAG Violations Report for Nille AS

**Timestamp:** 2026-11-01T03:23:18.916Z
**URL:** [https://www.nille.no/](https://www.nille.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;">Avvis alle</button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 11

#### Affected Elements:

- **Target:** `.swiper-slide-active.swiper-slide > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide-next.swiper-slide > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(3) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(4) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(5) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(6) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(7) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(8) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(9) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(10) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.swiper-slide:nth-child(11) > .itemCard--fAqEIsz > .imageBlock--Q5L3lW0 > .buttons--EimVulj > .primary--BWNWw5X.sizeSmall--WWaw80h[type="button"]:nth-child(2)`
  - **HTML:** `<button class="button--BYZIOh3 primary--BWNWw5X sizeSmall--WWaw80h shapeCircle--kmXa7Wq" type="button" aria-label=""><i class="fa-regular fa-bag-shopping"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `a[title="Nøtteknekker ledlys H38cm"][data-discover="true"][aria-label=""]:nth-child(2) > .h5.htmlDrawerWrapper--rQ6eisE:nth-child(2)`
  - **HTML:** `<h3 class="htmlDrawerWrapper--rQ6eisE h5"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.swiper-slide-prev > a[title=""][data-discover="true"][aria-label=""]`
  - **HTML:** `<a class="" title="" aria-label="" href="/produkter/lamper-og-belysning/" data-discover="true">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="baderom/"]`
  - **HTML:** `<a class="" title="" aria-label="" href="/produkter/baderom/" data-discover="true">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.topBar--hOWYROG`
  - **HTML:** `<div class="topBar--hOWYROG" style="background: rgba(105, 140, 151, 0.2); color: rgb(0, 0, 0);">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.content--QC6mDoR`
  - **HTML:** `<div class="htmlDrawerWrapper--rQ6eisE content--QC6mDoR"><p style="text-align: center;"><span style="color: #ecf0f1;" data-teams="true">JULEN ER I GANG🎄<a style="color: #ecf0f1;" title="Kundeavis" href="/avis/">SE VÅR NYE KUNDEAVIS HER</a…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

