# WCAG Violations Report for Norges grønne fagskole - Vea

**Timestamp:** 2026-11-23T06:29:16.563Z
**URL:** [https://www.vea-fs.no/](https://www.vea-fs.no/)
**Total Violations:** 8

## Violation Details

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-loop-container`
  - **HTML:** `<div class="elementor-loop-container elementor-grid" role="list">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: img, h2, h3, a


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.elementor-element-1001e533 > .elementor-widget-container > h3`
  - **HTML:** `<h3 class="elementor-heading-title elementor-size-default">© Designet og utviklet av <a href="https://www.dialecta.no/" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">Dialecta Kommunikasjon AS</a> </h3>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.87 (foreground color: #886d57, background color: #4a2200, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="dialecta.no/"]`
  - **HTML:** `<a href="https://www.dialecta.no/" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">Dialecta Kommunikasjon AS</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.87 (foreground color: #886d57, background color: #4a2200, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.sbi_header_link`
  - **HTML:** `<a class="sbi_header_link" target="_blank" aria-label="veafagskole on Instagram" rel="nofollow noopener external noreferrer" href="https://www.instagram.com/veafagskole/" title="@veafagskole" data-wpel-link="external">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-element-8c7e535`
  - **HTML:** `<header class="elementor-element elementor-element-8c7e535 elementor-hidden-mobile e-con-full e-flex e-con e-parent e-lazyloaded is-mac" data-id="8c7e535" data-element_type="container" data-e-type="container" data-settings="{"background_ba…`
  - **Failure summary:** Fix any of the following: The banner landmark is contained in another landmark.


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-6357`
  - **HTML:** `<header data-elementor-type="header" data-elementor-id="6357" class="elementor elementor-6357 elementor-location-header" data-elementor-post-type="elementor_library">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.elementor-6357`
  - **HTML:** `<header data-elementor-type="header" data-elementor-id="6357" class="elementor elementor-6357 elementor-location-header" data-elementor-post-type="elementor_library">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="miljofyrtarn.no/"]`
  - **HTML:** `<a href="https://www.miljofyrtarn.no/" target="_blank" data-wpel-link="external" rel="external noopener noreferrer">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="screen-reader-text skip-link" href="#content" title="Hopp til innhold">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-wid="c9f5e7f"]`
  - **HTML:** `<div data-pid="34187" data-wid="c9f5e7f" data-source="post" class="ae-post-widget-wrapper ae-masonry- ae-hpos- ae-vpos-">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-f12bd2e`
  - **HTML:** `<div class="elementor-element el..." data-id="f12bd2e" data-element_type="widget" data-e-type="widget" data-settings="{"columns":2,"column..." data-widget_type="ae-post-blocks.defau...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.elementor-element-bf03930`
  - **HTML:** `<div class="elementor-element elementor-element-bf03930 elementor-widget elementor-widget-heading is-mac" data-id="bf03930" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-51371`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-51389`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-51303`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-51219`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-51254`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.e-loop-item-50997`
  - **HTML:** `<div data-elementor-type="loop-item" data-elementor-id="49136" class="elementor elementor-..." data-elementor-post-...="elementor_library" data-custom-edit-han...="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

