# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-11-14T08:32:21.468Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 9

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > h1`
  - **HTML:** `<h1 data-adp-clicklabel="brandheader-logo" class="na-logo-header"> <a href="/" tabindex="-1" aria-hidden="true">*Nettavisen.*</a> </h1>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-listener="" id="200_287_express_html_inpage_0.if" src="https://s0.2mdn.net/sadbundle/11939261635189183217/index.html?ev=01_262" width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .img`
  - **HTML:** `<img class="img" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate3d(0px, 0px, 0px) scale(1.1912, 1.1912);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx1`
  - **HTML:** `<img class="tx tx1" src="tx1.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0; top: 0px;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx2`
  - **HTML:** `<img class="tx tx2" src="tx2.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx3`
  - **HTML:** `<img class="tx tx3" src="tx3.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx4a`
  - **HTML:** `<img class="tx tx4a" src="tx4a.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx4b`
  - **HTML:** `<img class="tx tx4b" src="tx4b.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .imgLoop`
  - **HTML:** `<img class="imgLoop" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .logo`
  - **HTML:** `<img class="logo" src="logo.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.miniheader`
  - **HTML:** `<header class="miniheader">`
  - **Failure summary:** Fix any of the following: The banner landmark is contained in another landmark.


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#page-header`
  - **HTML:** `<header id="page-header" class="">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#page-header`
  - **HTML:** `<header id="page-header" class="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`
  - **HTML:** `<nav data-adp-clicklabel="brandheader-toplinks" class="nav lp_nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, a`
  - **HTML:** `<a href="javascript:window.open(window.clickTag)">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.nettavisen.no/tilbud" publication="www.nettavisen.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="nettavisen">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.n…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

