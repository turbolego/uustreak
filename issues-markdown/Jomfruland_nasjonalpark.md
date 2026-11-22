# WCAG Violations Report for Jomfruland nasjonalpark

**Timestamp:** 2026-11-22T06:22:12.796Z
**URL:** [https://jomfrulandnasjonalpark.no/](https://jomfrulandnasjonalpark.no/)
**Total Violations:** 9

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#brxe-abktgh`
  - **HTML:** `<div id="brxe-abktgh" class="brxe-text-basic" data-interactions="[{"id":"bseggj","tri..." data-interaction-id="90a9b2" data-brx-toggle-offc...="true" tabindex="0" aria-expanded="false" aria-label="Åpne">`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#brxe-abktgh`
  - **HTML:** `<div id="brxe-abktgh" class="brxe-text-basic" data-interactions="[{"id":"bseggj","tri..." data-interaction-id="90a9b2" data-brx-toggle-offc...="true" tabindex="0" aria-expanded="false" aria-label="Åpne">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #ffffff, background color: #089191, font size: 14.7pt (19.572px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#brxe-elxjkq > .lang-item-4.lang-item-nb.current-lang > a[hreflang$="nb-NO"][aria-current="true"][lang="nb-NO"]`
  - **HTML:** `<a lang="nb-NO" hreflang="nb-NO" href="https://jomfrulandnasjonalpark.no/" aria-current="true">NO</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #ffffff, background color: #089191, font size: 14.7pt (19.572px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#brxe-elxjkq > .lang-item-7.lang-item-en.lang-item > a[lang="en-US"][hreflang$="en-US"]`
  - **HTML:** `<a lang="en-US" hreflang="en-US" href="https://jomfrulandnasjonalpark.no/en/home/">EN</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #ffffff, background color: #089191, font size: 14.7pt (19.572px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#brxe-dtzdij > p`
  - **HTML:** `<p>Her kan du oppleve, lære, drive aktiviteter eller bare slappe av i vakkert landskap og rik natur.</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #ffffff, background color: #089191, font size: 16.6pt (22.108px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe`
  - **HTML:** `<iframe data-src="https://www.google.com/maps/d/embed?mid=1Tx6SRK71Ljp5fw24coAyBabsjE5tgH4&amp;ehbc=2E312F" width="100%" height="100%" style="border:0;" allowfullscreen=""> </iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.brxe-psygoq.brxe-block:nth-child(1) > .brxe-mbrzzs.brxe-div > h4`
  - **HTML:** `<h4 class="brxe-ohteyn brxe-heading clickable-parent bricks-color-primary"><a href="https://jomfrulandnasjonalpark.no/nyheter/vil-du-bli-naturveileder-hos-oss/">Vil du bli naturveileder hos oss?</a></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#brxe-qxbxpk`
  - **HTML:** `<button id="brxe-qxbxpk" class="brxe-back-to-top visible" aria-label="back-to-top">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#brxe-qxbxpk`
  - **HTML:** `<button id="brxe-qxbxpk" class="brxe-back-to-top visible" aria-label="back-to-top">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants. Move them outside of the element, or remove them.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#brx-new-tab-link-description`
  - **HTML:** `<span id="brx-new-tab-link-description" class="screen-reader-text">Åpnes i en ny fane</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### [role="img"] and [role="image"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] and [role="image"] elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.swiper-slide-duplicate[data-swiper-slide-index="4"][aria-label="5 / 5"] > .image.css-filter[role="img"]`
  - **HTML:** `<div class="image css-filter" role="img" style="background-image: url(&quot;https://jomfrulandnasjonalpark.no/wp-content/uploads/2026/06/P1010019-scaled.jpg&quot;)"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `.swiper-slide-prev > .image.css-filter[role="img"]`
  - **HTML:** `<div class="image css-filter" role="img" style="background-image: url(&quot;https://jomfrulandnasjonalpark.no/wp-content/uploads/2026/03/20241002_184016.jpg&quot;)"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute

- **Target:** `.swiper-slide[data-swiper-slide-index="4"][aria-label="5 / 5"]:nth-child(6) > .image.css-filter[role="img"]`
  - **HTML:** `<div class="image css-filter" role="img" style="background-image: url(&quot;https://jomfrulandnasjonalpark.no/wp-content/uploads/2026/06/P1010019-scaled.jpg&quot;)"></div>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `#brxe-wkcibc`
  - **HTML:** `<svg role="img" class="brxe-icon footer-logo" id="brxe-wkcibc" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 330.21 236.89">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

