# WCAG Violations Report for Høgskulen på Vestlandet

**Timestamp:** 2026-10-10T08:31:13.227Z
**URL:** [https://www.hvl.no/](https://www.hvl.no/)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `li:nth-child(1) > .teaser-new.teaser-new--img-small > .teaser-new__body > .teaser-new__body-inner > .teaser-new__header > h4`
  - **HTML:** `<h4 class="teaser-new__heading"> <a href="/aktuelt/kan-vi-produsere-hydrogen-av-sjovatn/">Kan vi produsere hydrogen av sjøvatn?</a> </h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#primary-nav`
  - **HTML:** `<nav id="primary-nav" class="header__main-navigation">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.jump-to-content-link`
  - **HTML:** `<a href="#content" class="jump-to-content-link"><span>Hopp til innhald</span></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

