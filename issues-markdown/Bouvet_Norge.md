# WCAG Violations Report for Bouvet Norge

**Timestamp:** 2026-10-22T03:39:49.396Z
**URL:** [https://www.bouvet.no/](https://www.bouvet.no/)
**Total Violations:** 5

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from youtube-nocookie.com
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#widget2`
  - **HTML:** `<iframe type="text/html" src="https://www.youtube-nocookie.com/embed/jUW1mDPe1I0?rel=0" loading="lazy" allowfullscreen="" enablejsapi="true" id="widget2"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#js-header-navigation`
  - **HTML:** `<header class="main-header" id="js-header-navigation">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#js-header-navigation`
  - **HTML:** `<header class="main-header" id="js-header-navigation">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.main-header-mobile`
  - **HTML:** `<nav class="main-header-mobile">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.main-header-small-item.main-header-link:nth-child(8) > a[href$="www.bouvet.se"]`
  - **HTML:** `<a href="https://www.bouvet.se"> <svg style="width:20px; height:20px; border-radius:50%;"> <use xlink:href="/_/asset/no.bouvet.bouvet:0000019fcbc7d190/images/svg-sprites.svg#flag-swedish"></use> </svg> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.main-header-small-item.main-header-link:nth-child(9) > a[href$="en.bouvet.no"]`
  - **HTML:** `<a href="https://en.bouvet.no"> <svg style="width:20px; height:20px; border-radius:50%;"> <use xlink:href="/_/asset/no.bouvet.bouvet:0000019fcbc7d190/images/svg-sprites.svg#flag-british"></use> </svg> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `span > a[href="/"]`
  - **HTML:** `<a href="/"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 27

#### Affected Elements:

- **Target:** `.cookie-panel-banner__title`
  - **HTML:** `<h2 class="cookie-panel-banner__title">Denne siden bruker informasjonskapsler (cookies)</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-panel-banner__description`
  - **HTML:** `<p class="cookie-panel-banner__description">På våre nettsider bruker vi informasjonskapsler (cookies) for å forbedre brukeropplevelsen, optimalisere vår nettside og til markedsføring. Ved å klikke godkjenn, godtar du vår bruk av disse info…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(1)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/vi-jobber-med">Vi jobber med</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(2)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/bli-en-av-oss">Bli en av oss</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(3)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/bouvet-deler">Bouvet deler</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(4)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/investor">Investor</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(5)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/kurs">Kurs</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(6)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a href="/om-bouvet">Om oss</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-header-small-item.main-header-link:nth-child(7)`
  - **HTML:** `<div class="main-header-small-item main-header-link"> <a title="min side" href="https://minside.bouvet.no" target="_self">Min Side</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#main-container > .part-container[data-portal-component-type="part"]:nth-child(1)`
  - **HTML:** `<div data-portal-component-type="part" class="part-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.part-container[data-portal-component-type="part"]:nth-child(2)`
  - **HTML:** `<div data-portal-component-type="part" class="part-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.layout-container__bottom-margin-large`
  - **HTML:** `<div data-portal-component-type="layout" class="layout-container layout-container__bottom-margin-large">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.layout-container__no-gap`
  - **HTML:** `<div data-portal-component-type="layout" class="layout-container layout-container__no-gap">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `section`
  - **HTML:** `<section data-portal-component-type="part">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.section-bottom-space.container-flex-justify-center.util-flex-row`
  - **HTML:** `<div class="container-flex-justify-center util-flex-row section-bottom-space">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.part-container[data-portal-component-type="part"]:nth-child(7) > .util-flex-column-large.util-flex-row-small.collapsible__button`
  - **HTML:** `<div class="util-flex-column-large util-flex-row-small container-flex-justify-center collapsible__button"> <a aria-label="Besøk bloggen vår" class="button-style button-primary" href="/bouvet-deler"> <span>Besøk bloggen vår</span> </a> </di…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.part-container[data-portal-component-type="part"]:nth-child(9)`
  - **HTML:** `<div data-portal-component-type="part" class="part-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.related-courses-inner > .h3-styling`
  - **HTML:** `<h2 class="h3-styling">Lyst til å lære noe nytt? Se våre kurs:</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.related-courses-ingress`
  - **HTML:** `<div class="related-courses-ingress"> <p>Verden kan se annerledes ut fra skolebenken enn fra kontorpulten. Vi gir deg det beste av begge verdener. Hos Bouvet Kurs blir du faglig oppdatert av dyktige instruktører med lang praktisk og teoret…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row\.is-head`
  - **HTML:** `<div class="course-calendar-wrap-row.is-head">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-name`
  - **HTML:** `<span class="course-calendar-name">Online kurs: SQL Grunnkurs</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(2) > .course-calendar-row.util-flex-row > .course-calendar-date`
  - **HTML:** `<span class="course-calendar-date">26. okt.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-name`
  - **HTML:** `<span class="course-calendar-name">AZ-104 Microsoft Azure Administrator</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(3) > .course-calendar-row.util-flex-row > .course-calendar-date`
  - **HTML:** `<span class="course-calendar-date">26. okt.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-name`
  - **HTML:** `<span class="course-calendar-name">Live Virtual Course: Certified Tester AI Testing (CT-AI)</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.course-calendar-wrap-row:nth-child(4) > .course-calendar-row.util-flex-row > .course-calendar-date`
  - **HTML:** `<span class="course-calendar-date">26. okt.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.layout-container[data-portal-component-type="layout"]:nth-child(11)`
  - **HTML:** `<div data-portal-component-type="layout" class="layout-container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

