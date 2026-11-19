# WCAG Violations Report for Nordhordland og gulen interkommunale renovasjonsselskap IKS

**Timestamp:** 2026-11-19T06:55:25.359Z
**URL:** [https://www.ngir.no/](https://www.ngir.no/)
**Total Violations:** 6

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.textsearch--button`
  - **HTML:** `<button type="button" class="textsearch--button">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.btn[type="button"]`
  - **HTML:** `<button class="btn " type="button" tabindex="0"><span class="hamburger"><span></span><span></span><span></span></span></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#search-field--source`
  - **HTML:** `<select id="search-field--source" title="Search parameter" required=""><option value="" disabled="">Velg type</option><option value="hushald">hushald</option><option value="hytteeigar">hytteeigar</option></select>`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href="tel:+4756343310"]`
  - **HTML:** `<a class="tlf" href="tel:+4756343310">56 34 33 10</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 1.71:1 with the surrounding text. (Minimum contrast is 3:1, link text: #204b68, surrounding text: #222222) The link has no styling (such as underline) to distinguish it …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[href$="steinsandoggrus"]`
  - **HTML:** `<a class="link-button" href="/steinsandoggrus"><img src="https://www.ngirkart.no/WebServices/generic/Media.asmx/Download?uuid=86409eba-6211-4f4a-9a7a-f0c6258d56ae" alt=""></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `canvas`
  - **HTML:** `<canvas class="ol-unselectable" width="1280" height="536" style="width: 100%; height: 100%; display: block;"></canvas>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ol-scale-line`
  - **HTML:** `<div class="ol-scale-line ol-unselectable"><div class="ol-scale-line-inner" style="width: 84px;">50 km</div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.nav-bar--top-row > .nav-bar--logo`
  - **HTML:** `<div class="nav-bar--logo"><a class="nav-bar--logo-link" href="/"><img class="nav-bar--logo" src="/static/media/ngir_logo.fbd17b82.svg" alt="NGIR - Renovasjon i Nordhordland, Gulen og Solund"></a><p class="nav-bar--header">Renovasjon i Nor…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.btn-warning`
  - **HTML:** `<a class="btn btn-warning" href="/meldingsteneste">MELD AVVIK</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="gjenvinningsstasjonar"]`
  - **HTML:** `<a href="/gjenvinningsstasjonar">Gjenvinningsstasjonar</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="naering"]`
  - **HTML:** `<a href="/naering">For næring</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

