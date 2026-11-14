# WCAG Violations Report for Bergensavisen AS

**Timestamp:** 2026-11-14T08:39:10.155Z
**URL:** [https://www.ba.no/](https://www.ba.no/)
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

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#eaframe, #topTextRight`
  - **HTML:** `<a id="topTextRight" class="shoutlink" href="javascript:void(0)" onclick="doEAClick('/vis/eiendomtilsalgs', '', '', 'classified.property.carousel.see_all')">Eiendommer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.88 (foreground color: #f76d53, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Eidfjord</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Høyanger</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Askvoll omsorgssenter</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
  - **HTML:** `<iframe data-creative-load-listener="" id="200_287_express_html_inpage_0.if" src="https://s0.2mdn.net/sadbundle/11939261635189183217/index.html?ev=01_262" width="980" height="300" frameborder="0" scrolling="no" allowfullscreen="true" style…`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="height: 350px; width: 100%;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .img`
  - **HTML:** `<img class="img" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate3d(0px, 0px, 0px) scale(1.1718, 1.1718);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx1`
  - **HTML:** `<img class="tx tx1" src="tx1.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0; top: 0px;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx2`
  - **HTML:** `<img class="tx tx2" src="tx2.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx3`
  - **HTML:** `<img class="tx tx3" src="tx3.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx4a`
  - **HTML:** `<img class="tx tx4a" src="tx4a.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .tx4b`
  - **HTML:** `<img class="tx tx4b" src="tx4b.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px); opacity: 0.592;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .imgLoop`
  - **HTML:** `<img class="imgLoop" src="img.jpg" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, .logo`
  - **HTML:** `<img class="logo" src="logo.png" style="translate: none; rotate: none; scale: none; transform-origin: 60% 40%; transform: translate(0px, 0px);">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 8

#### Affected Elements:

- **Target:** `a[aria-labelledby="titleId-ixzzdrza169"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-111087" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-ixzzdrza169" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-i0ulmkvx60a"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-111543" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-i0ulmkvx60a" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-n25e78wa7t"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-109329" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-n25e78wa7t" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-ks7h1oj10q"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-109032" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-ks7h1oj10q" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-xylh7jhd0t"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-107274" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-xylh7jhd0t" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4584385?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Fagarbeider på Drift og Forvaltning" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4584491?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Spesialpedagog/ lærar" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div[data-swiper-slide-index="4"] > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4585206?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Einingsleiar ved bu- og miljøtenesta - 100% fast stilling" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/toppbanner_0, #\32 00_287_express_html_inpage_0\.if, a`
  - **HTML:** `<a href="javascript:window.open(window.clickTag)">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `img[height="80"]`
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.ba.no/gfx/small.svg" alt="" loading="eager" height="80" width="auto">`
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
  - **HTML:** `<amedia-username orderpage="//www.ba.no/tilbud" publication="www.ba.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.b…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

