# WCAG Violations Report for Hægebostad og åseral renovasjonsselskap-hår IKS

**Timestamp:** 2026-11-23T06:17:02.301Z
**URL:** [https://har-renovasjon.no/](https://har-renovasjon.no/)
**Total Violations:** 6

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.post-item.col:nth-child(1) > .col-inner > .box.box-normal.box-text-bottom > .box-text.text-center > .box-text-inner.blog-post-inner > h5`
  - **HTML:** `<h5 class="post-title is-large "> <a href="https://har-renovasjon.no/2026/10/30/viktig-informasjon-om-tomming-ved-arsskiftet/" class="plain">Viktig informasjon om tømming ved årsskiftet!</a> </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#text-347659192 > h3`
  - **HTML:** `<h3 class="uppercase">Torsland avfallsplass</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#content`
  - **HTML:** `<div id="content" role="main" class="content-area">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main" class="">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#main`
  - **HTML:** `<main id="main" class="">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.cookie-statement[data-relative_url=""][href$="har-renovasjon.no/"]`
  - **HTML:** `<a class="cmplz-link cookie-statement" href="https://har-renovasjon.no/" data-relative_url=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p:nth-child(1) > a`
  - **HTML:** `<a href="https://haegebostad.kommune.no/"><img class="alignnone wp-image-479" src="https://www.har-renovasjon.no/wp-content/uploads/2026/08/Stor_74311c0f-0854-41c8-893f-5cda67ce5cff.png" alt="" width="140" height="59"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="aseral.kommune.no/"]`
  - **HTML:** `<a href="https://www.aseral.kommune.no/"><img class="alignnone wp-image-472" src="https://har-renovasjon.no/wp-content/uploads/2026/08/aseral.jpg" alt="" width="140" height="74"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p:nth-child(3) > a`
  - **HTML:** `<a href="https://www.facebook.com/p/H%C3%A6gebostad-og-%C3%85seral-Renovasjonsselskap-100057264437251/"><img class="alignnone wp-image-488 " src="https://www.har-renovasjon.no/wp-content/uploads/2026/08/fb.png" alt="" width="80" height="80…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#main">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

