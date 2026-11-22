# WCAG Violations Report for Bladet Nordlys AS

**Timestamp:** 2026-11-22T05:43:48.461Z
**URL:** [https://www.nordlys.no/](https://www.nordlys.no/)
**Total Violations:** 10

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #cbb`
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
- **Count:** 3

#### Affected Elements:

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Glomfjord</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ledig stilling: Daglig leder"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Bardufoss</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Levanger/Bodø</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.rodimus-complex-front[data-group="ghost"]:nth-child(37) > brick-teaser-group-v1[data-color-skin="custom-one"][data-layout="block"] > header > h2`
  - **HTML:** `<h2> </h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-listener="" id="200_287_express_html_inpage_0.if" src="https://s0.2mdn.net/sadbundle/9837841471767865145/index.html?ev=01_262" width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style=…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`
  - **HTML:** `<iframe id="banner" style="width: 100%; height: 100%; opacity: 1;" src="https://static.zuuvicdn.com/creative/498df257-8000-4a76-93b3-d1c28d51de19/16f61575-f2a8-4410-8c49-3bf5714218ea/86298583-a900-444c-b085-64fda7365f26/creative/index.html…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, iframe[sandbox="allow-scripts"]`
  - **HTML:** `<iframe scrolling="no" sandbox="allow-scripts" srcdoc="<!doctype html><html..." src="https://visitanalyti..." style="display: block; widt...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="width: 100%; height: 350px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser and Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner, #layer_ba003110_ca86_4560_a459_5a507c88c029`
  - **HTML:** `<img id="layer_ba003110_ca86_..." src="images/i_c1d6d2f1-e5..." style="object-position:cent...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.nordlys\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner, #layer_6ec7744a_4311_434c_88b1_dd18e360762f`
  - **HTML:** `<img id="layer_6ec7744a_4311_..." src="images/i_c47a067e-17..." style="object-position:cent...">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .avis-logo`
  - **HTML:** `<img class="avis-logo" src="//r.api.no/local/v3/publications/www.nordlys.no/gfx/small-positive.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794888488_42962.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11341078 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.prod.website-files.com/6512c7f760362ffc987779ee/6512d062138bb9c7c2b0c282_SP-Hvit.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794974592_23514.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342373 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/a5/3e/a53ea8700ef03451ef307ac4e5ba3772" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342373 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1746168513_18377.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .property-image-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1794974591_18573.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342372 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/c3/e5/c3e53f6d0b8fe974131ebcec10460223" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-11342372 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1746168513_18377.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 3

#### Affected Elements:

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.nordlys.no/vis/stillingledig/4583926?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Elektroingeniør, Vedlikehold" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Ledig stilling: Daglig leder"]`
  - **HTML:** `<a href="https://www.nordlys.no/vis/stillingledig/4585745?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Daglig leder" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.nordlys.no/vis/stillingledig/4585741?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Førstekonsulent innen regnskap" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `brick-teaser-group-v1[data-color-skin="sport"] > div > brick-carousel-v3[data-slides="5"][data-version="carousel"] > .carousel[role="region"][aria-label="Innholdskarusell"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innholdskarusell" aria-describedby="carousel-title-39dab6a8-2191-4625-bb39-f07c2dab293b">`
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
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.nordlys.no/gfx/small.svg" alt="" loading="eager" height="80" width="auto">`
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
  - **HTML:** `<amedia-username orderpage="//www.nordlys.no/tilbud" subscription-platform="amedia" publication="www.nordlys.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.n…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

