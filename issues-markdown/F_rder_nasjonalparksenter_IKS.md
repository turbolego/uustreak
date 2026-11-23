# WCAG Violations Report for Færder nasjonalparksenter IKS

**Timestamp:** 2026-11-23T06:12:09.232Z
**URL:** [https://ferdernasjonalpark.no/](https://ferdernasjonalpark.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `.post-67343`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-67343 post type-post status-publish format-standard hentry category-faerder-nasjonalpark" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-66679`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-66679 post type-post status-publish format-standard has-post-thumbnail hentry category-ukategorisert" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element

- **Target:** `.post-66656`
  - **HTML:** `<article class="elementor-post elementor-grid-item post-66656 post type-post status-publish format-standard has-post-thumbnail hentry category-faerder-nasjonalpark" role="listitem">`
  - **Failure summary:** Fix any of the following: ARIA role listitem is not allowed for given element


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `#gt-wrapper-35368499 > a[title="English"][data-gt-lang="en"][aria-label="English"]`
  - **HTML:** `<a href="#" title="English" data-gt-lang="en" aria-label="English" class="glink nturl notranslate">EN</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `#gt-wrapper-35368499 > .gt-current-lang[title="Norwegian"][data-gt-lang="no"]`
  - **HTML:** `<a href="#" title="Norwegian" data-gt-lang="no" aria-label="Norwegian" class="glink nturl notranslate gt-current-lang">NO</a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.banner-2 > .cmplz-documents.cmplz-links > .impressum.cmplz-link[data-relative_url=""]`
  - **HTML:** `<a class="cmplz-link impressum" href="https://ferdernasjonalpark.no/sikkerhet-for-barna-i-strandkanten-paa-faerder-2/" data-relative_url=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-563e00d > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.facebook.com/ferdernasjonalpark"> <i aria-hidden="true" class="fab fa-facebook"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-e045563 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.instagram.com/ferdernasjonalpark"> <i aria-hidden="true" class="fab fa-instagram"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-a6a9bd2 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.youtube.com/@ferdernasjonalpark"> <i aria-hidden="true" class="fab fa-youtube"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-ef2ca0e > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.facebook.com/BesokssenterFaerderNasjonalpark"> <i aria-hidden="true" class="fab fa-facebook"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-605db45 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.instagram.com/bsfaerdernasjonalpark/"> <i aria-hidden="true" class="fab fa-instagram"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.elementor-element-354b737 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
  - **HTML:** `<a class="elementor-icon" href="https://www.youtube.com/@beskssenterfrdernasjonalpa1453"> <i aria-hidden="true" class="fab fa-youtube"></i> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 17

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#content">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-2ba7a77`
  - **HTML:** `<div class="elementor-element elementor-element-2ba7a77 e-con-full e-flex e-con e-child" data-id="2ba7a77" data-element_type="container" data-e-type="container" data-settings="{"jet_parallax_layout_list":[]}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-cacca9e`
  - **HTML:** `<div class="elementor-element elementor-element-cacca9e elementor-widget elementor-widget-heading" data-id="cacca9e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-cf7a2ce`
  - **HTML:** `<div class="elementor-element elementor-element-cf7a2ce elementor-widget elementor-widget-text-editor" data-id="cf7a2ce" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-7d1d393`
  - **HTML:** `<div class="elementor-element elementor-element-7d1d393 elementor-widget elementor-widget-heading" data-id="7d1d393" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-ff90a70`
  - **HTML:** `<div class="elementor-element elementor-element-ff90a70 elementor-widget elementor-widget-text-editor" data-id="ff90a70" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-165c239`
  - **HTML:** `<div class="elementor-element elementor-element-165c239 e-con-full e-flex e-con e-child" data-id="165c239" data-element_type="container" data-e-type="container" data-settings="{"jet_parallax_layout_list":[]}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-22f1621`
  - **HTML:** `<div class="elementor-element elementor-element-22f1621 e-con-full e-flex e-con e-child" data-id="22f1621" data-element_type="container" data-e-type="container" data-settings="{"jet_parallax_layout_list":[]}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-fd1dd29`
  - **HTML:** `<div class="elementor-element elementor-element-fd1dd29 elementor-widget elementor-widget-heading" data-id="fd1dd29" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-2e07185`
  - **HTML:** `<div class="elementor-element elementor-element-2e07185 elementor-widget elementor-widget-text-editor" data-id="2e07185" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-82ba27e`
  - **HTML:** `<div class="elementor-element elementor-element-82ba27e elementor-widget elementor-widget-heading" data-id="82ba27e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-1b625a1`
  - **HTML:** `<div class="elementor-element elementor-element-1b625a1 elementor-widget elementor-widget-text-editor" data-id="1b625a1" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-b98673b`
  - **HTML:** `<div class="elementor-element elementor-element-b98673b e-con-full e-flex e-con e-child" data-id="b98673b" data-element_type="container" data-e-type="container" data-settings="{"jet_parallax_layout_list":[]}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-c48cf73`
  - **HTML:** `<div class="elementor-element elementor-element-c48cf73 e-con-full e-flex e-con e-child" data-id="c48cf73" data-element_type="container" data-e-type="container" data-settings="{"jet_parallax_layout_list":[]}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-791ec04`
  - **HTML:** `<div class="elementor-element elementor-element-791ec04 elementor-widget elementor-widget-heading" data-id="791ec04" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-feafe8a`
  - **HTML:** `<div class="elementor-element elementor-element-feafe8a elementor-widget elementor-widget-text-editor" data-id="feafe8a" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-aef3e25`
  - **HTML:** `<div class="elementor-element elementor-element-aef3e25 e-flex e-con-boxed e-con e-parent" data-id="aef3e25" data-element_type="container" data-e-type="container" data-settings="{"background_background":"classic","jet_parallax_layout_list"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

