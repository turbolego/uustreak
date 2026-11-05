# WCAG Violations Report for Bergensavisen AS

**Timestamp:** 2026-11-05T09:04:02.521Z
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

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/takeover_0, #cbb`
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
  - **HTML:** `<span class="ad-text_location">Bergen</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ledig stilling: Faglært Tømrer"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Indre Arna</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Odda</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske`
  - **HTML:** `<iframe name="cmvtcjwl700111aadaxt..." id="cmvtcjwl700111aadaxt..." srcdoc="<!DOCTYPE html> <htm..." style="width: 100vw; height...">`
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
- **Count:** 20

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=715138056732115" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .avis-logo`
  - **HTML:** `<img class="avis-logo" src="//r.api.no/local/v3/publications/www.ba.no/gfx/small-positive.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793785808_12329.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945596 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/a1/85/a18540c4f097d77d0dc4b55cad1d7406" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945596 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722131_48103.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945607 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/ed/27/ed27f182f212a8cad5978c63a310ba24" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945607 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1677573007_73935.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712602_90680.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938252 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/02/b7/02b7918c80eb290028084ae2edd5ac8e" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938252 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793808391_70289.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947300 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/1b/da/1bda9819db401501c8125cb066f935e1" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947300 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1677573007_73935.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722130_12266.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945606 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/bb/82/bb82920d52c6d9b17232013d5b5ba136" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945606 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1677573007_73935.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722128_92214.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945604 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/3d/14/3d14e838e88f9d2c50feeabbd2da026b" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945604 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1677573007_73935.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 8

#### Affected Elements:

- **Target:** `a[aria-labelledby="titleId-0ijsfh3sue4"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-97969" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-0ijsfh3sue4" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-00bor4xlwwt3"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-97165" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-00bor4xlwwt3" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-hqntpwm09cc"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-96034" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-hqntpwm09cc" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-1c9l3rldfev"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-94212" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-1c9l3rldfev" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-labelledby="titleId-28sbay6j03h"]`
  - **HTML:** `<a href="/vis/reels/nyhet?selected=80-8-94470" class="brick-c-dUQsZp reels-teaser" aria-labelledby="titleId-28sbay6j03h" data-adp-clicklabel="brick-teaser-reels" data-adp-clickvalue="open-reel">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-active > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4583537?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Ingeniør – produktutvikling og service" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Ledig stilling: Faglært Tømrer"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4582009?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Faglært Tømrer" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.ba.no/vis/stillingledig/4581592?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Rådgjevar med sals- og kontoransvar" target="_blank">`
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
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.ba.no/gfx/small.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, .layer-uidgbmj61x`
  - **HTML:** `<div class="layer layer-uidgbmj61x" data-layer-id="uidgbmj61x">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#google_ads_iframe_\/56257416\/www\.ba\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=715138056732115" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.takeover-close`
  - **HTML:** `<div class="takeover-close">Lukk annonsen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.ba.no/tilbud" publication="www.ba.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.b…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

