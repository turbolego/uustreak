# WCAG Violations Report for Helgeland havn IKS

**Timestamp:** 2026-11-23T06:17:07.116Z
**URL:** [https://www.helgelandhavn.no/](https://www.helgelandhavn.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.juicer-feed`
  - **HTML:** `<ul class="juicer-feed j-initialized j-modern j-desktop modern j-overlay-enabled loaded" data-feed-id="helgeland-havn" data-per="6" data-pages="1" data-filter="Facebook" interval="0" data-style="modern" data-columns="3" role="region" aria-…`
  - **Failure summary:** Fix any of the following: ARIA role region is not allowed for given element


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Innhold i iframe and marinetraffic.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#marinetraffic`
  - **HTML:** `<iframe name="marinetraffic" id="marinetraffic" width="100%" height="400" scrolling="no" frameborder="0" src="https://www.marinetraffic.com/en/ais/embed/zoom:9/centery:65.95/centerx:12.6/maptype:0/shownames:false/mmsi:0/shipid:0/fleet:/fle…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#marinetraffic, .chilipiper-frame`
  - **HTML:** `<iframe class="chilipiper-frame" src="https://kpler.chilip..." style="border: 0px; overflo...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `article[data-articleid="499"] > .col-print-12.text-content.col-md-6 > .inner-content.odd > h3`
  - **HTML:** `<h3><a href="mailto:post@helgelandhavn.no" target="_self">Våre logistikkpartnere</a></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.feed-content > h3`
  - **HTML:** `<h3><svg shape-rendering="auto" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#juicer-svg-facebook"></use></svg>Facebook</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#marinetraffic, #countDownSecs`
  - **HTML:** `<button class="MuiButtonBase-root css-1yvrar6" tabindex="0" type="button" id="countDownSecs" aria-label="Click to refresh map">9m</button>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.quick-mode`
  - **HTML:** `<nav class="tile-common standard-menu d-print-none nav-inline navbar-nav d-none d-lg-block quick-mode">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `#main-content`
  - **HTML:** `<main id="main-content">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 6

#### Affected Elements:

- **Target:** `.image-post`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg image-post 139871870039450 j-username is-not-youTube" data-id="509298228" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `li[data-id="508977327"]`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg j-gallery 139871870039450 j-username is-not-youTube" data-id="508977327" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `li[data-id="509206016"]`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg j-gallery 139871870039450 j-username is-not-youTube" data-id="509206016" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `li[data-id="508977328"]`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg j-gallery 139871870039450 j-username is-not-youTube" data-id="508977328" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `.j-video`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg j-video 139871870039450 j-username is-not-youTube" data-id="509009811" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `.words`
  - **HTML:** `<li class="feed-item j-facebook j-facebook-bg words 139871870039450 j-username is-not-youTube" data-id="508977330" data-source="facebook" tabindex="0" style="margin-bottom: 20px; zoom: 1; opacity: 1;">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

