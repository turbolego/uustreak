# WCAG Violations Report for Varanger museum IKS

**Timestamp:** 2026-11-22T06:23:41.701Z
**URL:** [https://www.varangermuseum.no/](https://www.varangermuseum.no/)
**Total Violations:** 5

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `img[alt="Besøkssteder"]`
  - **HTML:** `<img src="https://www.varanger..." class="attachment-shortcuts..." alt="Besøkssteder" title="Besøkssteder" decoding="async" loading="lazy" srcset="https://www.varanger..." sizes="(max-width: 287px) 1...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Utstillinger"]`
  - **HTML:** `<img src="https://www.varanger..." class="attachment-shortcuts..." alt="Utstillinger" title="Utstillinger" decoding="async" loading="lazy" srcset="https://www.varanger..." sizes="(max-width: 287px) 1...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.column-3[itemscope="itemscope"][itemtype="http://schema.org/Article"] > .idium-linked-post > .attachment-shortcuts.size-shortcuts.wp-post-image`
  - **HTML:** `<img src="https://www.varanger..." class="attachment-shortcuts..." alt="Barn, familier, skol..." title="Barn, familier, skol..." decoding="async" loading="lazy" srcset="https://www.varanger..." sizes="(max-width: 287px) 1...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="no-js" lang="nb-NO">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.accessibility-top`
  - **HTML:** `<nav class="accessibility-top clearfix">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.btn-next`
  - **HTML:** `<a href="" class="btn-next "></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.btn-prev`
  - **HTML:** `<a href="" class="btn-prev "></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- **Target:** `#slider > .idium-section-header.screenreader-container`
  - **HTML:** `<header class="idium-section-header screenreader-container"> <h1 tabindex="0" class="idium-section-title screenreader focusable"> slider </h1> </header>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="#skip-slider"]`
  - **HTML:** `<a href="#skip-slider" class="screenreader focusable">Skip Karusell.</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cycle-slide-active`
  - **HTML:** `<div class="slide cycle-slide cycle-slide-active" style="position: absolute; top: 0px; left: 0px; z-index: 99; visibility: visible; opacity: 1; display: block;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#D6546F2D-CE65-45C1-AFE4-28DF670BDD9B`
  - **HTML:** `<button draggable="false" aria-label="Vis gatekart" title="Vis gatekart" type="button" role="menuitemradio" aria-checked="true" aria-haspopup="true" style="background: padding-..." id="D6546F2D-CE65-45C1-A...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#\31 894A5C3-CA08-4144-A728-D5C3ED6D18B7`
  - **HTML:** `<button draggable="false" aria-label="Vis satellittbilder" title="Vis satellittbilder" type="button" role="menuitemradio" aria-checked="false" aria-haspopup="true" style="background: padding-..." id="1894A5C3-CA08-4144-A...">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gm-style > div:nth-child(14)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gmnoprint:nth-child(2) > .gm-style-cc[draggable="false"] > div:nth-child(2) > span`
  - **HTML:** `<span style="">Kartdata ©2026 Google</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gm-style-cc.gmnoprint[draggable="false"]`
  - **HTML:** `<div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; position: relative; height: 14px; line-height: 14px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#shortcut`
  - **HTML:** `<section id="shortcut" class="idium-section shortcut">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#event`
  - **HTML:** `<section id="event" class="idium-section event">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#news`
  - **HTML:** `<section id="news" class="idium-section news">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#idium-cookies-notification-show`
  - **HTML:** `<a class="idium-cookies-link" id="idium-cookies-notification-show" href="javascript:void(0)"> Privacy policy and cookies</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

