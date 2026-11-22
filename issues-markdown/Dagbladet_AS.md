# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-11-22T05:48:32.032Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.text-red > .kicker-content`
  - **HTML:** `<div class="kicker-content">RUSSISK SKIP ANGREPET:</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.85 (foreground color: #d60000, background color: #000000, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-listener="" id="200_287_express_html_inpage_0.if" src="https://s0.2mdn.net/sadbundle/13865007100982064435/index.html?ev=01_262" width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.row_header_text`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 align-center mobile_text_align_align-center"><span class="lab-row-header-title">MASKORAMA 🎭</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .img`
  - **HTML:** `<img class="img" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate3d(0px, 0px, 0px) scale(1.1877, 1.1877);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx1`
  - **HTML:** `<img class="tx tx1" src="tx1.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0; top: 0px;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx2`
  - **HTML:** `<img class="tx tx2" src="tx2.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx3`
  - **HTML:** `<img class="tx tx3" src="tx3.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx4a`
  - **HTML:** `<img class="tx tx4a" src="tx4a.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx4b`
  - **HTML:** `<img class="tx tx4b" src="tx4b.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .imgLoop`
  - **HTML:** `<img class="imgLoop" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .logo`
  - **HTML:** `<img class="logo" src="logo.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `._topnav_hsgxc_45`
  - **HTML:** `<nav class="_topnav_hsgxc_45">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, a`
  - **HTML:** `<a href="javascript:window.open(window.clickTag)">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `._skiplink_hsgxc_13`
  - **HTML:** `<div class="_skiplink_hsgxc_13"><a href="#main" aria-label="Hopp til hovedinnholdet">Hopp til hovedinnholdet</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#am-branding > p`
  - **HTML:** `<p> Dagbladet er en del av Aller Media. Aller Media er ansvarlig for dine data på denne nettsiden. &nbsp;<a href="https://personvern.aller.no/personvern">Les mer</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

