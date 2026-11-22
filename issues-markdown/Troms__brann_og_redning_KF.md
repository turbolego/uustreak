# WCAG Violations Report for Tromsø brann og redning KF

**Timestamp:** 2026-11-22T06:17:05.030Z
**URL:** [https://www.tromsobrannogredning.no/](https://www.tromsobrannogredning.no/)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 7

#### Affected Elements:

- **Target:** `iframe, li:nth-child(1)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(2)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(3)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(4)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(5)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(6)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element

- **Target:** `iframe, li:nth-child(7)`
  - **HTML:** `<li role="button" class="FeedItem__Container-sc-bfdm7q-3 eHAlfv">`
  - **Failure summary:** Fix any of the following: ARIA role button is not allowed for given element


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from embed.acast.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe`
  - **HTML:** `<iframe loading="lazy" src="https://embed.acast.com/65005f30e154e80011154cf2?feed=true" frameborder="0" width="100%" height="280px"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 8

#### Affected Elements:

- **Target:** `a[aria-label="Read more about Beredskap"]`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/tjenester/beredskap/" target="_self" data-type="url" aria-label="Read more about Beredskap">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(2) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/tjenester/forebyggende/forebyggende-bolig/" target="_self" data-type="url" aria-label="Read more about …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(3) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/tjenester/forebyggende/forebyggende-virksomheter/" target="_self" data-type="url" aria-label="Read more…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-106 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(4) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/tjenester/tromso-110-sentral/" target="_self" data-type="url" aria-label="Read more about Tromsø 110-se…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(1) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/na-er-balforbudet-i-gang/" target="_self" data-type="url" aria-label="Read more about Nå er bålforbudet…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(2) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link button-atom button-atom--text bde-loop-item__button ee-post-button" href="https://www.tromsobrannogredning.no/brannovelse-pa-sandneshamn/" target="_self" data-type="url" aria-label="Read more about Brannøvelse på …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(3) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link butt..." href="https://www.tromsobr..." target="_self" data-type="url" aria-label="Read more about Tilb...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.bde-post-list-25-129 > .bde-loop.bde-loop-grid.ee-posts > article:nth-child(4) > .bde-loop-item__wrap.ee-post-wrap > .button-atom--text.bde-loop-item__button.ee-post-button`
  - **HTML:** `<a class="breakdance-link butt..." href="https://www.tromsobr..." target="_self" data-type="url" aria-label="Read more about Sama...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe, ul`
  - **HTML:** `<ul data-test-id="Feed" class="Feed__Container-sc-t7v7m-0 dOlSBp">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- **Target:** `.section-background-video`
  - **HTML:** `<div class="section-background-video"> <video autoplay="" muted="" loop=""> <source src="https://www.tromsobrannogredning.no/wp-content/uploads/2026/03/Nettsted-1366-×-768-px-7.mp4" type="video/mp4"> </video> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h4`
  - **HTML:** `<h4 class="bde-heading-25-101 bde-heading"> Etablert 1870 </h4>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `h1`
  - **HTML:** `<h1 class="bde-heading-25-102 bde-heading"> Tromsø brann og redning </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-section-25-104`
  - **HTML:** `<section class="bde-section-25-104 bde-section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-grid-25-109`
  - **HTML:** `<div class="bde-grid-25-109 bde-grid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-heading-25-118`
  - **HTML:** `<h2 class="bde-heading-25-118 bde-heading"> Hjelp oss å forebygge brann! </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-text-25-119`
  - **HTML:** `<div class="bde-text-25-119 bde-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-section-25-121`
  - **HTML:** `<section class="bde-section-25-121 bde-section">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-heading-79-114`
  - **HTML:** `<h2 class="bde-heading-79-114 bde-heading"> Treff oss<br> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-text-79-115`
  - **HTML:** `<div class="bde-text-79-115 bde-text"> Mandag – Fredag<br>09.00-14.00 </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-heading-79-118`
  - **HTML:** `<h2 class="bde-heading-79-118 bde-heading"> Ring oss </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-text-79-119`
  - **HTML:** `<div class="bde-text-79-119 bde-text"> 415 24 110 </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-heading-79-122`
  - **HTML:** `<h2 class="bde-heading-79-122 bde-heading"> Skriv til oss </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-text-79-123`
  - **HTML:** `<div class="bde-text-79-123 bde-text"> Forsøket 9, 9010 Tromsø<br><a href="mailto:brannstasjonen@tromso.kommune.no">brannstasjonen@tromso.kommune.no</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-div-79-110`
  - **HTML:** `<div class="bde-div-79-110 bde-div">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bde-text-79-125`
  - **HTML:** `<div class="bde-text-79-125 bde-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `iframe, .ShareControl__ShareIcon-sc-1pwe6vd-0`
  - **HTML:** `<div role="img" class="ShareControl__ShareIcon-sc-1pwe6vd-0 dtOXQU">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `iframe, .SubscribeLink__PlusIcon-sc-q4x3v7-0`
  - **HTML:** `<div role="img" class="SubscribeLink__PlusIcon-sc-q4x3v7-0 hFQxFV">`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe, ul`
  - **HTML:** `<ul data-test-id="Feed" class="Feed__Container-sc-t7v7m-0 dOlSBp">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

