# WCAG Violations Report for Drammens Tidende AS

**Timestamp:** 2026-11-05T09:13:00.149Z
**URL:** [https://www.dt.no/](https://www.dt.no/)
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

- **Target:** `#google_ads_iframe_\/56257416\/www\.dt\.no\/takeover_0, #cbb`
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
  - **HTML:** `<span class="ad-text_location">Lier</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Lier</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Drammen</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dt\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske`
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
- **Count:** 41

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dt\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=5605962190426414" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .avis-logo`
  - **HTML:** `<img class="avis-logo" src="//r.api.no/local/v3/publications/www.dt.no/gfx/small-positive.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712717_24887.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10939378 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/0f/6a/0f6a51fbe60bbaf74be2bfb86261c064" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10939378 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1603735669_55403.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712869_30679.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10944450 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/d4/12/d412c0d546d4c335f47bf883ef28a68b" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10944450 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1583493411_55512.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793792797_99744.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10946833 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/96/54/9654245b93b2049f3979484dadcd9882" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10946833 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1540456339_26132.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793808431_60604.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947327 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/4a/00/4a0046f452cd4802cda19eb35803662f" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947327 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712560_70522.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938019 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/03/e3/03e30a28565593c9cea8854d1a610bc3" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938019 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1603735669_55403.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722165_22864.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945634 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/2f/a1/2fa1047b4a12093b34c354252c14fdc7" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945634 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722083_79837.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945591 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/7d/bf/7dbf573ec68292cbd51986d71465b332" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945591 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1519112045_11776.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722164_13222.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945632 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/8a/1e/8a1eb30d73c944a1da6f3d9338aa2367" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945632 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712863_88822.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10942955 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/b2/b9/b2b9957bd8d8fa4db57e4740ce683066" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10942955 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793808224_72851.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947053 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/0f/5a/0f5ab3b4b149dea38e3924f481643c10" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947053 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1583493411_55512.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793808429_70872.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947325 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/2a/57/2a57ab0430745cc2777b30fbffe8fa27" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10947325 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/11/1793712868_34129.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10944438 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/89/a9/89a906dee9295fa0266681bdd1c1e329" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10944438 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1603735669_55403.jpg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/11/1793722166_42332.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945635 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/2c/77/2c7792f39a92ca2fa834d8e395a15e92" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10945635 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1667390900_33144.png">`
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
  - **HTML:** `<a href="https://www.dt.no/vis/stillingledig/4583784?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Key Account Manager" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.dt.no/vis/stillingledig/4583786?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Teknisk selger e-mobility" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div[data-swiper-slide-index="3"] > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.dt.no/vis/stillingledig/4584246?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Avdelingsleder Åskollen bo- og servicesenter " target="_blank">`
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
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.dt.no/gfx/small-positive.svg" alt="" loading="eager" height="80" width="auto">`
  - **Failure summary:** Fix all of the following: Element is not focusable.


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.dt\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, .layer-uidgbmj61x`
  - **HTML:** `<div class="layer layer-uidgbmj61x" data-layer-id="uidgbmj61x">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#google_ads_iframe_\/56257416\/www\.dt\.no\/takeover_0, #cmvtcjwl700111aadaxtfnske, img[border="0"]`
  - **HTML:** `<img src="https://track.adform.net/adfserve/?bn=91008425;1x1inv=1;srctype=3;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_50};ord=5605962190426414" border="0" width="1" height="1">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.takeover-close`
  - **HTML:** `<div class="takeover-close">Lukk annonsen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `amedia-username`
  - **HTML:** `<amedia-username orderpage="//www.dt.no/tilbud" publication="www.dt.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nb-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.d…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

