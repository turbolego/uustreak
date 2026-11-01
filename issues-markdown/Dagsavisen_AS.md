# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-01T03:35:27.451Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(6) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(12) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(18) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(24) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(30) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(36) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(42) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(48) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(54) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.55 (foreground color: #808080, background color: #f4f3ef, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.text_singleline.large-8.large-abs-8 > .singleline`
  - **HTML:** `<h2 class="content singleline" style=""> </h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Ekstern iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 5

#### Affected Elements:

- **Target:** `#offer_e64a1fe71b6292cd3ab0-0`
  - **HTML:** `<iframe id="offer_e64a1fe71b6292..." name="offer_e64a1fe71b6292..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_4992f7477e94a7ea214a-0`
  - **HTML:** `<iframe id="offer_4992f7477e94a7..." name="offer_4992f7477e94a7..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `iframe[data-testid="embed-iframe"]`
  - **HTML:** `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify..." width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-..." loading="lazy">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_4992f7477e94a7ea214a-1`
  - **HTML:** `<iframe id="offer_4992f7477e94a7..." name="offer_4992f7477e94a7..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_e64a1fe71b6292cd3ab0-1`
  - **HTML:** `<iframe id="offer_e64a1fe71b6292..." name="offer_e64a1fe71b6292..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t25 font-weight-bold m-font-weight-bold font-InterTight "><span class="lab-row-header-title">Meninger</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 4

#### Affected Elements:

- **Target:** `#offer_e64a1fe71b6292cd3ab0-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10603678&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_4992f7477e94a7ea214a-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_4992f7477e94a7ea214a-1, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_e64a1fe71b6292cd3ab0-1, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10603678&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.customMenu2`
  - **HTML:** `<nav class="navigation customMenu2">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/38586112\/dagsavisen\/toppbanner_0, #aw0`
  - **HTML:** `<a id="aw0" target="_blank" href="https://googleads.g...." onfocus="ss('aw0')" onmousedown="st('aw0')" onmouseover="ss('aw0')" onclick="ha('aw0')">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_e64a1fe71b6292cd3ab0-0, a`
  - **HTML:** `<a href="https://www.facebook..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner PP - desktop" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_4992f7477e94a7ea214a-0, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_4992f7477e94a7ea214a-1, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_e64a1fe71b6292cd3ab0-1, a`
  - **HTML:** `<a href="https://www.facebook..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner PP - desktop" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.singleline.font-PTSans.t14 > a[href$="dagsavisen"][target="_blank"]`
  - **HTML:** `<a href="https://nuu.no/dagsavisen" target="_blank"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 161

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading"> Dagsavisen – Nyheter, politikk, kultur, kommentarer og debatt fra Norge og verden </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Mann døde på treningsseenter"] > h2`
  - **HTML:** `<h2> <a href="/notice/10610937">Mann døde på treningsseenter</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Mann døde på treningsseenter"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-31T18:26:18.000Z" title="31.10.2026 19:26">8 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610920 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610920">USA har advart Russland om terrorplaner</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610920 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-31T15:48:33.000Z" title="31.10.2026 16:48">11 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610891 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610891">Evakuerte fra Olesjky framme i Ukraina</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610891 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-31T13:57:04.000Z" title="31.10.2026 14:57">13 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610876 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610876">Skutt mann siktet for våpenbruk</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610876 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-31T13:28:36.000Z" title="31.10.2026 14:28">13 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610783 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610783">Kontroll på kvinne med kniv i Trøndelag</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T10:48:49.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T10:48:49.000Z" title="31.10.2026 11:48">16 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610755 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610755">Egypt frykter ny runde av Iran-krigen</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T09:51:09.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T09:51:09.000Z" title="31.10.2026 10:51">17 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610752 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610752">Canada håper på avtale om tettere tilknytning til EU</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T09:11:54.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T09:11:54.000Z" title="31.10.2026 10:11">18 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610732 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610732">Savnet person fra september funnet død</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T08:45:44.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T08:45:44.000Z" title="31.10.2026 09:45">18 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610698 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610698">Over 5000 døde av ebola i Kongo</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T07:52:00.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T07:52:00.000Z" title="31.10.2026 08:52">19 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610680 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610680">Trump vil deportere afghanere til Afghanistan</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T07:13:56.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T07:13:56.000Z" title="31.10.2026 08:13">20 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610679 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610679">Storbritannia nekter svensk forsker innreise</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T07:13:12.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T07:13:12.000Z" title="31.10.2026 08:13">20 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610678 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610678">46 prosent bruker KI til helseråd</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-31T08:51:55.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-31T08:51:55.000Z" title="31.10.2026 09:51">18 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Blodrød dag på Wall Street"] > h2`
  - **HTML:** `<h2> <a href="/notice/10610677">Blodrød dag på Wall Street</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Blodrød dag på Wall Street"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T20:58:21.000Z" title="30.10.2026 21:58">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Mann skutt i Innlandet"] > h2`
  - **HTML:** `<h2> <a href="/notice/10610611">Mann skutt i Innlandet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Mann skutt i Innlandet"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T18:47:03.000Z" title="30.10.2026 19:47">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Meta granskes i Storbritannia"] > h2`
  - **HTML:** `<h2> <a href="/notice/10610608">Meta granskes i Storbritannia</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Meta granskes i Storbritannia"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T18:27:16.000Z" title="30.10.2026 19:27">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610607 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610607">Alvorlig MC-ulykke ved Tønsberg</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610607 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T18:26:28.000Z" title="30.10.2026 19:26">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610603 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610603">Store demonstrasjoner mot Meloni</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610603 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T17:19:03.000Z" title="30.10.2026 18:19">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610389 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10610389">Dataangrep ved Universitetet i Tromsø </a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10610389 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T14:09:33.000Z" title="30.10.2026 15:09">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Langrennssjef beklager"] > h2`
  - **HTML:** `<h2> <a href="/notice/10610362">Langrennssjef beklager</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Langrennssjef beklager"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-10-30T13:54:20.000Z" title="30.10.2026 14:54">1 dag siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10608980 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10608980">Novaja Gazeta legger ned driften</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-10-30T11:20:01.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-10-30T11:20:01.000Z" title="30.10.2026 12:20">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(2)`
  - **HTML:** `<div data-element-guid="66a3b6cd-4673-49c6-9425-f2fe7611e4a3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(3)`
  - **HTML:** `<div data-element-guid="604489ed-537b-48fa-9aa6-f0b6461e102a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(4)`
  - **HTML:** `<div data-element-guid="c9f87c51-e00f-4579-b63e-c923e2879cdb" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header`
  - **HTML:** `<div data-element-guid="15015844-16c6-40c1-9154-bfb325ceff48" class="row small-12 large-12 bg-white color_mobile_bg-white hasContentPadding mobile-hasContentPadding has-row-header" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(6) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(7)`
  - **HTML:** `<div data-element-guid="275abeca-8f29-44c4-ad60-c1c6131232cc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(8)`
  - **HTML:** `<div data-element-guid="1a618efd-3d28-4eab-b977-0e4acd749cbe" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_e64a1fe71b6292cd3ab0-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(10)`
  - **HTML:** `<div data-element-guid="7fee0b56-c633-4c44-8dd2-0fa228d50b0a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(11)`
  - **HTML:** `<div data-element-guid="7788f1cf-a9c3-47fe-a21b-57c1b00042d8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(12) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_4992f7477e94a7ea214a-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-bg-quinary-light.mobile_border-bg-quinary-light.border-side-top`
  - **HTML:** `<div data-element-guid="292de22b-f8d6-4dde-8c8e-70692b0d3f59" class="row small-12 large-12 border-bg-quinary-light mobile_border-bg-quinary-light border-side-top mobile_border-side-top hasBorder mobile-hasBorder" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(16)`
  - **HTML:** `<div data-element-guid="9d3d88e0-9151-4913-ba0c-5994510329cf" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Portrett</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(18) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(19)`
  - **HTML:** `<div data-element-guid="6902abb1-b00f-40b6-b3fe-83bd0eaf4605" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.articlescroller-header.t25.tm18`
  - **HTML:** `<h2 class="articlescroller-header t25 tm18 font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left font-InterTight" style="">Verden</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(21)`
  - **HTML:** `<div data-element-guid="7ece605d-1690-4410-85b9-0f62416ec362" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(22)`
  - **HTML:** `<div data-element-guid="d7fb9e13-d51a-4483-950b-756626df99d0" class="row small-12 large-12 color_mobile_no_bg_color mobile_no_border_color" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(23)`
  - **HTML:** `<div data-element-guid="cfacebce-e268-46ec-8d51-f2264f201487" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(24) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.t25.tm18`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 tm18 font-weight-bold m-font-weight-bold font-InterTight" style="">Byhistorie</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(26)`
  - **HTML:** `<div data-element-guid="3e7fbedb-f665-42fe-a287-aafb077a6538" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Folkevalgt</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(28)`
  - **HTML:** `<div data-element-guid="62d7e02d-23d9-414a-b0b3-452cead2a10f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29)`
  - **HTML:** `<div data-element-guid="84fefcd6-d8bd-4902-b3c1-071564f053f9" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(30) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(31)`
  - **HTML:** `<div data-element-guid="974c21ee-9c6c-436c-a404-08cc55459114" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.t28.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t28 font-weight-bold m-font-weight-bold font-InterTight" style="">Video</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10603102 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10603099"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Tidligere Trump-topp om …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10603074 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10603073"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Kamzy på politisk pub </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10602266 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10602265"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Arbeidersang i Politisk …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10603093 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10603092"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Dieselbrøl under åpninga…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10478983 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10478981"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile" style="">Slik unngår du å ta dem med hjem </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10453098 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10453097"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 color_mobile_no_bg_color tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile"> Rekordmange har fått studieplass…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10453072 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10453073"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 color_mobile_no_bg_color tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile"> Trump vil ha Infantino som ny FN…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10440435 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 tertiary color_mobile_tertiary hasTextColor hasTextColorMobile"> Torsnes Arbeiderlag synger gamle arbeidersanger </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10440421 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10440420"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10440430 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10440429"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10440438 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10440437"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 tertiary color_mobile_tertiary hasTextColor hasTextColorMobile"> Indias statsminister Narendra Modi på pressekonferanse </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(33)`
  - **HTML:** `<div data-element-guid="5aa7a564-ab9e-4cf0-8ba5-a24e3def2064" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(34)`
  - **HTML:** `<div data-element-guid="4d71c888-0158-4450-a14a-14b7c57e4517" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(35)`
  - **HTML:** `<div data-element-guid="9b904f08-3a87-4ef6-a676-28146c9f3e0d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(36) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(37)`
  - **HTML:** `<div data-element-guid="18cd8713-64e9-4a80-aa81-78bec13b1589" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(38)`
  - **HTML:** `<div data-element-guid="1df36a39-64d3-4bb2-bbd5-9cd115b7e719" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(39)`
  - **HTML:** `<div data-element-guid="7ae8de5c-3cd0-4e9b-ad7b-3f14c6b335bb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_4992f7477e94a7ea214a-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(41)`
  - **HTML:** `<div data-element-guid="42751b37-cbb3-4ae1-8183-5f6c3a3024d2" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(42) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(43)`
  - **HTML:** `<div data-element-guid="a0881f2c-84e4-4923-bdbe-e91fbd16cf2b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(44)`
  - **HTML:** `<div data-element-guid="6e8415a0-6204-4c27-a76e-8e5d3956486e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(45)`
  - **HTML:** `<div data-element-guid="64f1e6cb-f821-4814-990e-379b89ff28dc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(46)`
  - **HTML:** `<div data-element-guid="f495232a-9e61-4824-ac13-418bb6247cc1" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(47)`
  - **HTML:** `<div data-element-guid="ce59bd70-795a-4777-8ba0-cb6edc6a11d3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(48) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(49)`
  - **HTML:** `<div data-element-guid="0198c8ec-cab2-4aa1-b693-6432057630fa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(50)`
  - **HTML:** `<div data-element-guid="4aa7f756-cab2-4850-b74d-4098e4dde1da" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(51)`
  - **HTML:** `<div data-element-guid="47b9fb55-d095-40a7-84bb-c01571556b24" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(52)`
  - **HTML:** `<div data-element-guid="94d6ae6a-5db6-4ea6-bf36-21edad3063cf" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(53)`
  - **HTML:** `<div data-element-guid="61a796c2-9b84-4608-87b1-72df55394063" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(54) > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(55)`
  - **HTML:** `<div data-element-guid="fc1b73dc-c099-4a62-bf9e-48924bbe69cb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(56)`
  - **HTML:** `<div data-element-guid="de21e698-c95c-463f-a6f6-e176a154d133" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(57)`
  - **HTML:** `<div data-element-guid="10e6cc8e-dd30-4b77-887b-92e0043a8994" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(58)`
  - **HTML:** `<div data-element-guid="6c2882ea-e5e8-4770-8530-9f9f56c24561" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(59)`
  - **HTML:** `<div data-element-guid="a4c4ad1e-d418-4565-b8c5-13a302efdd49" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(61)`
  - **HTML:** `<div data-element-guid="0a9b4fda-cffb-4446-a26b-cb355238beb1" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(62)`
  - **HTML:** `<div data-element-guid="e45e664c-dc44-49df-b325-518cc1709ada" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(63)`
  - **HTML:** `<div data-element-guid="99434498-abf1-44f2-88f7-b2a335ae0b80" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(64)`
  - **HTML:** `<div data-element-guid="fdb13ed7-20f8-4a67-8bcf-43d46199f571" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(65)`
  - **HTML:** `<div data-element-guid="1ae290d2-ff21-4025-a789-c1f42d1104d6" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(66)`
  - **HTML:** `<div data-element-guid="2a9cb837-47d6-4081-8642-d4d50beeb601" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(67)`
  - **HTML:** `<div data-element-guid="5f5ec4f0-04df-4263-90e7-4695d8adc119" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(68)`
  - **HTML:** `<div data-element-guid="48ef2c4f-c9c6-4c78-9b31-d90feedef5bc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(69)`
  - **HTML:** `<div data-element-guid="a6b0e21d-aa16-4842-a769-cb4cf54e2756" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(70)`
  - **HTML:** `<div data-element-guid="1b5d6366-de04-4ee7-9c9f-e33defc7ecd3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(71)`
  - **HTML:** `<div data-element-guid="9fd013b4-4d62-4ae1-81d5-749f336059ca" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(72)`
  - **HTML:** `<div data-element-guid="da5ca5f3-e035-42d0-bda9-70eb1f4f9495" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(73)`
  - **HTML:** `<div data-element-guid="615bf3e0-f216-459a-8b60-4020d4aad0f0" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(74)`
  - **HTML:** `<div data-element-guid="fde61eaf-f65c-4cb3-b8ff-cc0250853978" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(75)`
  - **HTML:** `<div data-element-guid="ecfe60a5-7049-4493-8fb1-d1cfd4a89925" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(76)`
  - **HTML:** `<div data-element-guid="ac9297e5-5575-4104-9aa7-472a5b5c857d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(77)`
  - **HTML:** `<div data-element-guid="88fe7a63-77c8-4535-86a3-9bfe494d685c" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20`
  - **HTML:** `<h2 class="articlescroller-header t25 tm20 font-weight-normal m-font-weight-normal align-center mobile_text_align_align-center font-PTSans" style="">Quiz</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(79)`
  - **HTML:** `<div data-element-guid="9e309e66-7606-4bef-b73c-d4049431cdd2" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(80)`
  - **HTML:** `<div data-element-guid="4617b9f7-a187-4d13-b650-3744826f5c8c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(81)`
  - **HTML:** `<div data-element-guid="3728a3b3-4c0a-4e84-88a7-d68dc4f061b1" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(82)`
  - **HTML:** `<div data-element-guid="5d1ee021-3a47-4bbd-b03f-38556ad3edbd" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(83)`
  - **HTML:** `<div data-element-guid="b7ae6e2a-5af8-41e7-a4c2-87aa663fe15c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 class="articlescroller-header font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left" style="">Statsbudsjettet 2027</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(85)`
  - **HTML:** `<div data-element-guid="54244cf4-e21d-4e47-b7a0-91ffa4461d69" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.italic.m-italic`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline align-center mobile_text_align_align-center italic m-italic" style="">Siri Dokken</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(87)`
  - **HTML:** `<div data-element-guid="6e74ffc2-2595-4408-96dd-3af38accb324" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(88)`
  - **HTML:** `<div data-element-guid="e64f12f6-1b2f-4697-9f10-09de6e737116" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
  - **HTML:** `<div data-element-guid="c2c74c3d-99f8-491d-adfc-e5ded925e3c9" class="row small-12 large-12 bg-black color_mobile_bg-black hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(90)`
  - **HTML:** `<div data-element-guid="b5b684a4-d0a3-4829-94b5-16a44d806225" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_e64a1fe71b6292cd3ab0-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(92)`
  - **HTML:** `<div data-element-guid="d4c44f57-b530-451b-995c-599f6d3d33fa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.powered-by`
  - **HTML:** `<div class="powered-by "><a href="https://labradorcms.com/" target="_blank">Powered by Labrador CMS</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `#article_list_10440424 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

