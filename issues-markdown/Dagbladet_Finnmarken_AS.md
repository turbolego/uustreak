# WCAG Violations Report for Dagbladet Finnmarken AS

**Timestamp:** 2026-11-05T09:08:53.702Z
**URL:** [https://www.ifinnmark.no/](https://www.ifinnmark.no/)
**Total Violations:** 6

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#eaframe, #topTextRight`
  - **HTML:** `<a id="topTextRight" class="shoutlink" href="javascript:void(0)" onclick="doEAClick('/vis/eiendomtilsalgs', '', '', 'classified.property.carousel.see_all')">Eiendommer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.88 (foreground color: #f76d53, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ledig stilling: Miljødirektør"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Tromsø | Vadsø</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Alta</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-l...="" id="200_287_express_html..." src="https://s0.2mdn.net/..." width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style="width: 980px; height...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, iframe[scrolling="no"]`
  - **HTML:** `<iframe scrolling="no" src="about:blank" style="height: 1px; width: ...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.ifinnmark\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, body > iframe`
  - **HTML:** `<iframe style="position: absolute; pointer-events: none; left: 0px; top: 0px; opacity: 0; height: 0px; width: 0px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="height: 350px; width: 100%;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 2

#### Affected Elements:

- **Target:** `a[aria-label="Ledig stilling: Miljødirektør"]`
  - **HTML:** `<a href="https://www.ifinnmark.no/vis/stillingledig/4584227?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Miljødirektør" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ifinnmark.no/vis/stillingledig/4584427?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Rådgiver/seniorrådgiver ved Altakontoret " target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `img[height="80"]`
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.ifinnmark.no/gfx/small.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="" publication="www.ifinnmark.no" subscription-text="" subscription-link="" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.i…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

