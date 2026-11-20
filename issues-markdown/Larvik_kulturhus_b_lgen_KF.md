# WCAG Violations Report for Larvik kulturhus bølgen KF

**Timestamp:** 2026-11-20T06:20:15.180Z
**URL:** [https://www.bolgenkulturhus.no/](https://www.bolgenkulturhus.no/)
**Total Violations:** 6

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4:nth-child(2)`
  - **HTML:** `<h4>Gavekort</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-element-d4a85af`
  - **HTML:** `<footer class="elementor-section el..." data-id="d4a85af" data-element_type="section" data-e-type="section" data-settings="{"_ob_glider_is_slid...">`
  - **Failure summary:** Fix any of the following: The contentinfo landmark is contained in another landmark.


### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-77`
  - **HTML:** `<footer data-elementor-type="footer" data-elementor-id="77" class="elementor elementor-77 elementor-location-footer" data-elementor-post-type="elementor_library">`
  - **Failure summary:** Fix any of the following: Document has more than one contentinfo landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.elementor-slides-wrapper`
  - **HTML:** `<div class="elementor-slides-wrapper elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" role="region" aria-roledescription="carousel" aria-label="Slides" dir="ltr" data-animation…`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.elementor-77`
  - **HTML:** `<footer data-elementor-type="footer" data-elementor-id="77" class="elementor elementor-77 elementor-location-footer" data-elementor-post-type="elementor_library">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 14

#### Affected Elements:

- **Target:** `.elementor-element-8dbd8bb.menybg.elementor-sticky--active > .e-con-inner > .elementor-element-4c2e129.elementor-view-default.elementor-widget-icon > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.bolgenkulturhus.no/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-855590 > .elementor-element-4824038.elementor-top-section[data-id="4824038"] > .elementor-column-gap-no.elementor-container > .elementor-element-3b12fe9.elementor-col-100[data-id="3b12fe9"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-74e17a0.elementor-inner-section[data-id="74e17a0"] > .elementor-column-gap-default.elementor-container > .elementor-element-22a3bed.elementor-col-50[data-id="22a3bed"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-a713e3c.elementor-widget-theme-post-featured-image[data-id="a713e3c"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/jula-er-her-alexandra-rotan-venner/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-850763 > .elementor-element-4824038.elementor-top-section[data-id="4824038"] > .elementor-column-gap-no.elementor-container > .elementor-element-3b12fe9.elementor-col-100[data-id="3b12fe9"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-74e17a0.elementor-inner-section[data-id="74e17a0"] > .elementor-column-gap-default.elementor-container > .elementor-element-22a3bed.elementor-col-50[data-id="22a3bed"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-a713e3c.elementor-widget-theme-post-featured-image[data-id="a713e3c"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/var-jul/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-857151 > .elementor-element-4824038.elementor-top-section[data-id="4824038"] > .elementor-column-gap-no.elementor-container > .elementor-element-3b12fe9.elementor-col-100[data-id="3b12fe9"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-74e17a0.elementor-inner-section[data-id="74e17a0"] > .elementor-column-gap-default.elementor-container > .elementor-element-22a3bed.elementor-col-50[data-id="22a3bed"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-a713e3c.elementor-widget-theme-post-featured-image[data-id="a713e3c"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/notteknekkeren-klassisk-juleballett-med-strykekvartett/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-856713 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/larvik-jazzklubb-wako-feat-alexandra-ridout/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-863614 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/lordagsopera-i-galleriet-silvia-moi-melis-jaatinen-og-lina-braaten/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-863767 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/afterwork-med-andreas-geir-musikk-og-musikkbingo/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-860926 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/matineklubben/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-861469 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/studio-nille-mellom-linjene/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.post-851316 > .elementor-element-6bb2467a.elementor-top-section[data-id="6bb2467a"] > .elementor-column-gap-default.elementor-container > .elementor-element-771cde29.elementor-col-100[data-id="771cde29"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-4c7e804d.elementor-inner-section[data-id="4c7e804d"] > .elementor-column-gap-default.elementor-container > .elementor-element-2a8e4c60.elementor-inner-column[data-id="2a8e4c60"] > .elementor-widget-wrap.elementor-element-populated > .elementor-element-2e52474a.elementor-widget-theme-post-featured-image[data-id="2e52474a"] > .elementor-widget-container > a`
  - **HTML:** `<a href="https://www.bolgenkulturhus.no/program/christmas-with-nordic-tenors/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="nasta.no/"]`
  - **HTML:** `<a href="https://www.nasta.no/" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="op.no/"]`
  - **HTML:** `<a href="https://www.op.no/" target="_blank"> <img width="572" height="131" src="https://www.bolgenkulturhus.no/wp-content/uploads/2021/12/op-web-sponsor-bolgenkulturhus.png" class="attachment-medium_large size-medium_large wp-image-2057" …`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-repeater-item-e3fc30c`
  - **HTML:** `<a class="elementor-icon elementor-social-icon elementor-social-icon- elementor-animation-grow elementor-repeater-item-e3fc30c" href="https://www.facebook.com/bolgenkulturhus" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-repeater-item-f4393ba`
  - **HTML:** `<a class="elementor-icon elementor-social-icon elementor-social-icon- elementor-animation-grow elementor-repeater-item-f4393ba" href="https://www.instagram.com/bolgenkulturhus" target="_blank">`
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
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

