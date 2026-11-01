# WCAG Violations Report for Mediehuset Nettavisen AS

**Timestamp:** 2026-11-01T03:22:10.636Z
**URL:** [https://www.nettavisen.no/](https://www.nettavisen.no/)
**Total Violations:** 6

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe`
  - **HTML:** `<iframe src="https://ad.amediakre..." frameborder="0" style="width: 980px; height..." scrolling="no">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.miniheader`
  - **HTML:** `<header class="jubilee miniheader">`
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
  - **HTML:** `<header id="page-header" class="jubilee">`
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
  - **HTML:** `<header id="page-header" class="jubilee">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.miniheader > .logo-nav-wrap > .logo-nav-wrapper > .nav-wrap > nav`
  - **HTML:** `<nav data-adp-clicklabel="brandheader-toplinks" class="nav lp_nav">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" data-sitekey="nettav" data-paywall="false" data-pagemodel="rodimus" data-isfrontpage="true">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, html`
  - **HTML:** `<html>`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `#google_ads_iframe_\/56257416\/www\.nettavisen\.no\/toppbanner_0, iframe, html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


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

