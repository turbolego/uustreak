# WCAG Violations Report for Aktiv Eiendomsmegling AS

**Timestamp:** 2026-10-09T04:51:39.275Z
**URL:** [https://aktiv.no/](https://aktiv.no/)
**Total Violations:** 7

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.slick-next`
  - **HTML:** `<button type="button" data-role="none" class="slick-arrow slick-next" style="display:block" currentslide="0" slidecount="6">`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `a[href$="personvern"][rel="noopener"][target="_blank"]`
  - **HTML:** `<a href="/resources/juridisk/personvern" target="_blank" rel="noopener">personvernerklæring</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cm-purpose:nth-child(1) > .cm-services > .cm-caret > a[href="#"]`
  - **HTML:** `<a href="#"><span>↓</span> 4 tjenester</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#purpose-item-advertising-description > .cm-list-description > span > span > a[rel="noopener noreferrer"][target="_blank"]`
  - **HTML:** `<a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Se hvordan Google bruker disse dataene</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 9.4pt (12.6px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cm-purpose:nth-child(2) > .cm-services > .cm-caret > a[href="#"]`
  - **HTML:** `<a href="#"><span>↓</span> 4 tjenester</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cm-purpose:nth-child(3) > .cm-services > .cm-caret > a[href="#"]`
  - **HTML:** `<a href="#"><span>↓</span> 5 tjenester</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cm-btn-info`
  - **HTML:** `<button class="cm-btn cm-btn-success cm-btn-info cm-btn-accept" type="button">Godtar valgt</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #ffffff, background color: #ff5f0f, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.cm-btn-accept-all`
  - **HTML:** `<button class="cm-btn cm-btn-success cm-btn-accept-all" type="button">Godtar alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #ffffff, background color: #ff5f0f, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="klaro"]`
  - **HTML:** `<a target="_blank" href="https://kiprotect.com/klaro" rel="noopener">Laget med Klaro</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.84 (foreground color: #1a936f, background color: #fffff9, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#summary-4e5afa88-4847-4840-9815-c4e1889467a6 > h2:nth-child(2)`
  - **HTML:** `<h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#summary-0ea42923-3099-4a8f-826a-62d527a86834 > h2:nth-child(2)`
  - **HTML:** `<h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.slick-current > div > .ProjectsSliderContentV2_item__XyMYZ > .ProjectsSliderContentV2_link__jiC_D.ProjectsSliderContentV2_linkInheritsColor__8yyxz > .ProjectsSliderContentV2_contentWrapper__F2Xkp > .ProjectsSliderContentV2_title__Jz1iE.ProjectsSliderContentV2_addressTitle__hh_pM`
  - **HTML:** `<h3 class="ProjectsSliderContentV2_title__Jz1iE ProjectsSliderContentV2_addressTitle__hh_pM">Måsabyveien 3</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.slick-current > div > .ProjectsSliderContentV2_item__XyMYZ`
  - **HTML:** `<li class="ProjectsSliderContentV2_item__XyMYZ">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `div[data-index="1"] > div > .ProjectsSliderContentV2_item__XyMYZ`
  - **HTML:** `<li class="ProjectsSliderContentV2_item__XyMYZ">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element

- **Target:** `div[data-index="2"] > div > .ProjectsSliderContentV2_item__XyMYZ`
  - **HTML:** `<li class="ProjectsSliderContentV2_item__XyMYZ">`
  - **Failure summary:** Fix any of the following: List item does not have a <ul>, <ol> parent element


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 2

#### Affected Elements:

- **Target:** `meta[name="viewport"]:nth-child(9)`
  - **HTML:** `<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">`
  - **Failure summary:** Fix any of the following: user-scalable=no on <meta> tag disables zooming on mobile devices

- **Target:** `meta[name="viewport"]:nth-child(53)`
  - **HTML:** `<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">`
  - **Failure summary:** Fix any of the following: user-scalable=no on <meta> tag disables zooming on mobile devices


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 15

#### Affected Elements:

- **Target:** `.cm-header`
  - **HTML:** `<div class="cm-header">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-functional`
  - **HTML:** `<input id="purpose-item-functional" class="cm-list-input required" aria-describedby="purpose-item-functional-description" disabled="" type="checkbox">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `label[for="purpose-item-functional"]`
  - **HTML:** `<label for="purpose-item-functional" class="cm-list-label" tabindex="0"><span class="cm-list-title">Tjenesteytelse</span><span class="cm-required" title="Denne applikasjonen er alltid påkrevd">(alltid påkrevd)</span><span class="cm-switch"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-functional-description`
  - **HTML:** `<div id="purpose-item-functional-description"><p class="cm-list-description"><span><span>Disse tjenestene er avgjørende for at dette skal fungere korrekt nettsted. Du kan ikke deaktivere dem her siden tjenesten ellers ikke ville fungert ri…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cm-purpose:nth-child(1) > .cm-services > .cm-caret`
  - **HTML:** `<div class="cm-caret"><a href="#"><span>↓</span> 4 tjenester</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-advertising`
  - **HTML:** `<input id="purpose-item-advertising" class="cm-list-input half-checked" aria-describedby="purpose-item-advertising-description" type="checkbox">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `label[for="purpose-item-advertising"]`
  - **HTML:** `<label for="purpose-item-advertising" class="cm-list-label"><span class="cm-list-title">Reklame</span><span class="cm-switch"><div class="slider round active"></div></span></label>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-advertising-description`
  - **HTML:** `<div id="purpose-item-advertising-description">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cm-purpose:nth-child(2) > .cm-services > .cm-caret`
  - **HTML:** `<div class="cm-caret"><a href="#"><span>↓</span> 4 tjenester</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-performance`
  - **HTML:** `<input id="purpose-item-performance" class="cm-list-input only-required" aria-describedby="purpose-item-performance-description" type="checkbox">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `label[for="purpose-item-performance"]`
  - **HTML:** `<label for="purpose-item-performance" class="cm-list-label"><span class="cm-list-title">Ytelsesoptimalisering</span><span class="cm-switch"><div class="slider round active"></div></span></label>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#purpose-item-performance-description`
  - **HTML:** `<div id="purpose-item-performance-description"><p class="cm-list-description"><span><span>Disse tjenestene behandler personlig informasjon for å optimalisere tjenesten som denne nettsiden tilbyr.</span></span></p></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cm-purpose:nth-child(3) > .cm-services > .cm-caret`
  - **HTML:** `<div class="cm-caret"><a href="#"><span>↓</span> 5 tjenester</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cm-toggle-all`
  - **HTML:** `<li class="cm-purpose cm-toggle-all">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cm-powered-by`
  - **HTML:** `<p class="cm-powered-by"><a target="_blank" href="https://kiprotect.com/klaro" rel="noopener">Laget med Klaro</a></p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

