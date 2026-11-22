# WCAG Violations Report for Fredriksstad Blad AS

**Timestamp:** 2026-11-22T06:07:03.471Z
**URL:** [https://www.f-b.no/](https://www.f-b.no/)
**Total Violations:** 9

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#eaframe, button`
  - **HTML:** `<button class="swiper-button-autoplay"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Gamle Fredrikstad</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-listener="" id="200_287_express_html_inpage_0.if" src="https://s0.2mdn.net/sadbundle/2987208804717617187/index.html?ev=01_262" width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style=…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`
  - **HTML:** `<iframe id="banner" style="width: 100%; height: 100%; opacity: 1;" src="https://static.zuuvicdn.com/creative/498df257-8000-4a76-93b3-d1c28d51de19/266d2a7d-3c51-46a6-9dad-b89a6dae85d0/30445df7-1a7b-48aa-88f6-9d83bb612b00/creative/index.html…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.f-b\.no\/toppbanner_0, iframe[sandbox="allow-scripts"]`
  - **HTML:** `<iframe scrolling="no" sandbox="allow-scripts" srcdoc="<!doctype html><html..." src="https://visitanalyti..." style="display: block; widt...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="width: 100%; height: 350px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 34

#### Affected Elements:

- **Target:** `#eaframe, .avis-logo`
  - **HTML:** `<img class="avis-logo" src="//r.api.no/local/v3/publications/www.f-b.no/gfx/small-positive.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794942236_48945.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342230 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/a7/e0/a7e04f6dd99e9e00f5f08127b943bdf5" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342230 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1674057976_45843.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794845356_90787.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11340332 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/f6/44/f644d298402fd993ef95d1bae6a376ee" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11340332 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795190906_23334.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11355820 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/34/d5/34d55919606bc5df8c67792a99916cd9" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11355820 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1517400455_16105.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795234120_46083.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11357025 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/16/f5/16f593ddd3eddf88a4b4eaf897f2f10f" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11357025 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1677573007_73935.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795018122_34827.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11343455 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/b7/07/b707fcb4f96ae4c40f8e64d27b9a4b63" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11343455 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/data/groups/51/1789683930_20556.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794942544_23203.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342250 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/53/b9/53b94003f19ada5c0cdb9e79e628116b" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342250 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1517400455_16105.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1795186443_31231.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11343459 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/2e/95/2e95d485819b2710f7570b936107b502" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11343459 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1517400455_16105.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795234135_68355.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11357026 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/4b/92/4b929e6d37ac9e203c03d8e41e88f22e" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11357026 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794974913_75895.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342578 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/ae/88/ae88be89054265efd8fb7b12d460fe68" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342578 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795104514_54726.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11345088 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/bb/ac/bbac0eeddf69902f6e4eab8fe24278b5" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11345088 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1795115020_17707.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11345388 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/8e/e6/8ee6f11ee81a0af89be0a6b574aec865" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11345388 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1674057976_45843.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.f-b.no/vis/stillingledig/4583729?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Assisterende driftssjef - avløpsrensing og biogass" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-teaser-group-v1[data-color-skin="sport"] > div > brick-carousel-v3 > .carousel[role="region"][aria-label="Innholdskarusell"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innholdskarusell" aria-describedby="carousel-title-dbbc4949-f957-4aeb-9655-89bfe01ad82c">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `img[height="80"]`
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.f-b.no/gfx/small-positive.svg" alt="" loading="eager" height="80" width="auto">`
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
  - **HTML:** `<amedia-username orderpage="//www.f-b.no/tilbud" subscription-platform="amedia" publication="www.f-b.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.f…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

