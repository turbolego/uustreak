# WCAG Violations Report for Firda Media AS

**Timestamp:** 2026-11-01T03:43:11.833Z
**URL:** [https://www.firda.no/](https://www.firda.no/)
**Total Violations:** 9

## Violation Details

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

- **Target:** `a[aria-label="Ledig stilling: Journalist"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Førde</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Sogndal</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ledig stilling: Seniorrådgivar"] > .jobad-wrapper > .ad-text > .ad-text_location`
  - **HTML:** `<span class="ad-text_location">Førde</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.54 (foreground color: #888888, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #adn-sup-0\.06761524008599618`
  - **HTML:** `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="980" height="300" id="adn-sup-0.06761524008599618"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #adn-sup-0\.06761524008599618, iframe`
  - **HTML:** `<iframe style="display: block;margi..." scrolling="no" width="980" height="300" frameborder="0" srcdoc="<!DOCTYPE html> <htm...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#eaframe`
  - **HTML:** `<iframe frameborder="no" id="eaframe" name="eaframe" width="980" height="350" scrolling="no" src="javascript:window[&quot;contents&quot;]" style="width: 100%;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 46

#### Affected Elements:

- **Target:** `#eaframe, .avis-logo`
  - **HTML:** `<img class="avis-logo" src="//r.api.no/local/v3/publications/www.firda.no/gfx/small-positive.svg">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(1) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/9/1788361567_12289.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10933261 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/85/36/85362e52ba70b9c63e4fa3e2f47cee53" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10933261 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(2) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376386_18038.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938281 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/66/a5/66a590b17d2541eb77372b81d8a990e3" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938281 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1601466663_57163.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(3) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376400_68064.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938297 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/af/9a/af9a0197a650887da6290c238f6da50b" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938297 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(4) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1792076762_70224.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937589 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/46/97/46978cb58f0dd929eab2264423cf5577" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937589 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(5) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376369_18361.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938268 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/b2/b4/b2b4a792fb43d23385d94f109b20024f" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938268 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1746168513_18377.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(6) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376399_62846.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938295 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/14/e6/14e6146e7010e73d485f174c81883ec4" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938295 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(7) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376398_76864.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938294 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/05/2d/052db98faaa29aa24ea202b4453a8d07" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938294 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(8) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/9/1790089824_86826.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10933263 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/e0/08/e0081518422335f24e240b6ac520fb1f" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10933263 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(9) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1792159689_13424.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937591 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/5e/ca/5eca2d346f7242ce967cc3d77dfdbf77" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937591 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(10) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793073918_41806.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10930738 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/ec/19/ec19a11313062e9541d1007fd909a5e2" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10930738 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1746168513_18377.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(11) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793100548_60714.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10931255 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/ae/7a/ae7a06a42f46f7de1101a4c6c425186a" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10931255 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(12) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376396_94993.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938292 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/3a/11/3a1126d5526a74d2d1f06de567495307" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938292 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(13) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/2026/10/1793371776_53530.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937685 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/47/26/47269d14030dc54f2dac7075901d3c3b" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10937685 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1730365338_13597.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(14) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376388_65466.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938282 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/ba/42/ba42557b04708a2efe854286e80d9727" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938282 > .brokerinfo-container > .brokerlogo`
  - **HTML:** `<img class="brokerlogo" src="https://cdn.easy-ads.com/subscriber/upload/groups/1601466663_57163.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, .ad-container.swiper-slide:nth-child(15) > .shoutimage-container > .shoutimage[loading="lazy"]`
  - **HTML:** `<img class="shoutimage" src="https://cdn.easy-ads.com/subscriber/upload/data/images/2026/10/1793376368_18219.webp" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938266 > .brokerimage[loading="lazy"]`
  - **HTML:** `<img class="brokerimage" src="https://g.api.no/obscura/API/image/r1/zett/708x708r/1510165749000/e3/0f/e30f60b5e96e0c7003be2799b97c47e6" loading="lazy">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#eaframe, #brokerimage-container-10938266 > .brokerinfo-container > .brokerlogo`
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

- **Target:** `a[aria-label="Ledig stilling: Journalist"]`
  - **HTML:** `<a href="https://www.firda.no/vis/stillingledig/4582734?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Journalist" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.swiper-slide-next > .tivoli-job-ad.fokus[target="_blank"]`
  - **HTML:** `<a href="https://www.firda.no/vis/stillingledig/4583551?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Kommunikasjonsrådgjevar" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Ledig stilling: Seniorrådgivar"]`
  - **HTML:** `<a href="https://www.firda.no/vis/stillingledig/4583603?ref=jobcarousel" class="tivoli-job-ad fokus" tabindex="0" aria-label="Ledig stilling: Seniorrådgivar" target="_blank">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.navigation > .carousel[role="region"][aria-label="Innhaldskarusell"]`
  - **HTML:** `<section data-static="" role="region" class="carousel" aria-label="Innhaldskarusell" aria-describedby="carousel-title-5bb53d8b-7b6f-4a66-b508-0628861416fe">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/56257416\/www\.firda\.no\/toppbanner_0, #adn-sup-0\.06761524008599618, iframe, a`
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
  - **HTML:** `<img tabindex="-1" src="//assets.acdn.no/local/v3/publications/www.firda.no/gfx/small-positive.svg" alt="" loading="eager" height="80" width="auto">`
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
  - **HTML:** `<amedia-username orderpage="//www.firda.no/tilbud" publication="www.firda.no" subscription-text="Bli abonnent" subscription-link="true" links="" locale="nn-NO" theme="alfa">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#toppbanner-1`
  - **HTML:** `<bazaar-ad data-component-layou...="commercial" position="toppbanner" class="am-bazaar-ad lp_topp..." labeled="true" display-config="" aria-labelledby="toppbanner-1-label" ad-index="1" id="toppbanner-1" data-id="toppbanner-1" tag-id="www.f…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

