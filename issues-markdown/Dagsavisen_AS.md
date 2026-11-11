# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-11T05:02:35.476Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 9

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
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

- **Target:** `#offer_0cfaa4c18ebe058946bc-0`
  - **HTML:** `<iframe id="offer_0cfaa4c18ebe05..." name="offer_0cfaa4c18ebe05..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_59dc168a95d88c084eeb-0`
  - **HTML:** `<iframe id="offer_59dc168a95d88c..." name="offer_59dc168a95d88c..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `iframe[data-testid="embed-iframe"]`
  - **HTML:** `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify..." width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-..." loading="lazy">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_59dc168a95d88c084eeb-1`
  - **HTML:** `<iframe id="offer_59dc168a95d88c..." name="offer_59dc168a95d88c..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…

- **Target:** `#offer_0cfaa4c18ebe058946bc-1`
  - **HTML:** `<iframe id="offer_0cfaa4c18ebe05..." name="offer_0cfaa4c18ebe05..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
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

- **Target:** `#offer_0cfaa4c18ebe058946bc-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10603678&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_59dc168a95d88c084eeb-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_59dc168a95d88c084eeb-1, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_0cfaa4c18ebe058946bc-1, img`
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
- **Count:** 5

#### Affected Elements:

- **Target:** `#offer_0cfaa4c18ebe058946bc-0, a`
  - **HTML:** `<a href="https://www.facebook..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner PP - desktop" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_59dc168a95d88c084eeb-0, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_59dc168a95d88c084eeb-1, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_0cfaa4c18ebe058946bc-1, a`
  - **HTML:** `<a href="https://www.facebook..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner PP - desktop" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.singleline.font-PTSans.tm17 > a[href$="dagsavisen"][target="_blank"]`
  - **HTML:** `<a href="https://nuu.no/dagsavisen" target="_blank"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 128

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading"> Dagsavisen – Nyheter, politikk, kultur, kommentarer og debatt fra Norge og verden </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="SAS legger ned rute"] > h2`
  - **HTML:** `<h2> <a href="/notice/10627459">SAS legger ned rute</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-10T20:08:34.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-10T20:08:34.000Z" title="10.11.2026 21:08">8 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10627430 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10627430">Spionmistenkt amerikansk soldat pågrepet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-10T19:13:07.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-10T19:13:07.000Z" title="10.11.2026 20:13">9 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10627414 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10627414">Flere kvinner har anmeldt Russell Brand</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-10T18:51:46.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-10T18:51:46.000Z" title="10.11.2026 19:51">10 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10627359 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10627359">Kristersson får en uke til å danne regjering</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-10T17:25:25.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-10T17:25:25.000Z" title="10.11.2026 18:25">11 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Ny byutviklingsbyråd i Oslo"] > h2`
  - **HTML:** `<h2> <a href="/notice/10626622">Ny byutviklingsbyråd i Oslo</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Ny byutviklingsbyråd i Oslo"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T14:52:28.000Z" title="10.11.2026 15:52">14 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Nvidia saksøkt av aksjeeiere"] > h2`
  - **HTML:** `<h2> <a href="/notice/10626343">Nvidia saksøkt av aksjeeiere</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-10T12:22:43.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-10T12:22:43.000Z" title="10.11.2026 13:22">16 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10626297 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10626297">Borg Høiby må fortsatt sitte i varetekt</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10626297 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T11:23:29.000Z" title="10.11.2026 12:23">17 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Nå kommer snøen til Østlandet"] > h2`
  - **HTML:** `<h2> <a href="/notice/10625998">Nå kommer snøen til Østlandet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Nå kommer snøen til Østlandet"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T12:21:05.000Z" title="10.11.2026 13:21">16 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625455 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625455">Strømprisene trakk opp prisveksten</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625455 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T07:36:53.000Z" title="10.11.2026 08:36">21 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625442 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625442">Problemene med ID-porten er rettet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625442 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T08:40:26.000Z" title="10.11.2026 09:40">20 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625439 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625439">Velgerne i California sa nei til riking-skatt</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625439 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T06:09:43.000Z" title="10.11.2026 07:09">22 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Australia skjerper KI-regler"] > h2`
  - **HTML:** `<h2> <a href="/notice/10625438">Australia skjerper KI-regler</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Australia skjerper KI-regler"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T06:08:53.000Z" title="10.11.2026 07:08">22 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Oljeprisen falt kraftig"] > h2`
  - **HTML:** `<h2> <a href="/notice/10625437">Oljeprisen falt kraftig</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Oljeprisen falt kraftig"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T06:08:27.000Z" title="10.11.2026 07:08">22 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625436 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625436">Stubb forsvarer samtalen med Putin</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625436 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-10T06:05:02.000Z" title="10.11.2026 07:05">22 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625327 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625327"> Riksrettsforslag mot Pete Hegseth</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T19:49:39.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T19:49:39.000Z" title="09.11.2026 20:49">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Marius Borg Høiby er avhørt"] > h2`
  - **HTML:** `<h2> <a href="/notice/10625252">Marius Borg Høiby er avhørt</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T17:56:02.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T17:56:02.000Z" title="09.11.2026 18:56">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625215 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625215">Haaland fikk plass på verdenslaget</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T16:37:21.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T16:37:21.000Z" title="09.11.2026 17:37">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10625122 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10625122">Dataselskap klager på NVE-pålegg</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T15:28:12.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T15:28:12.000Z" title="09.11.2026 16:28">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Russell Brand dømt til fengsel"] > h2`
  - **HTML:** `<h2> <a href="/notice/10625040">Russell Brand dømt til fengsel</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T14:50:58.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T14:50:58.000Z" title="09.11.2026 15:50">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10624773 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10624773">Høyere minstelønn i ni bransjer</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-09T13:36:35.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-09T13:36:35.000Z" title="09.11.2026 14:36">1 dag siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(2)`
  - **HTML:** `<div data-element-guid="f55e73fc-3794-4c6a-b194-5abb5d949e11" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(3)`
  - **HTML:** `<div data-element-guid="dd86410f-d4b3-464f-a0c3-12d2d9c3296f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(4)`
  - **HTML:** `<div data-element-guid="5b9dbe66-9ff9-410c-88a3-64884d4c135b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(5)`
  - **HTML:** `<div data-element-guid="00eb9a90-880b-46f7-adf2-f16e0b355b9f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(7)`
  - **HTML:** `<div data-element-guid="0bf7b69f-64e4-4361-8a77-55748a7052ce" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(8)`
  - **HTML:** `<div data-element-guid="564a716c-187a-426c-b045-933e74e7a426" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header`
  - **HTML:** `<div data-element-guid="15015844-16c6-40c1-9154-bfb325ceff48" class="row small-12 large-12 bg-white color_mobile_bg-white hasContentPadding mobile-hasContentPadding has-row-header" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(10)`
  - **HTML:** `<div data-element-guid="44fbe3d3-f61a-4fbe-a54b-6dc8df81a1cc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_0cfaa4c18ebe058946bc-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(13)`
  - **HTML:** `<div data-element-guid="c7fb860e-66d2-4091-a7e2-c8722d8224c0" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(14)`
  - **HTML:** `<div data-element-guid="56238856-81f2-427c-b63b-a5a824d5d3dd" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(15)`
  - **HTML:** `<div data-element-guid="e2b8c466-4b62-4257-8ba3-661f5518165c" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_59dc168a95d88c084eeb-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.page-content > .border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder`
  - **HTML:** `<div data-element-guid="292de22b-f8d6-4dde-8c8e-70692b0d3f59" class="row small-12 large-12 border-bg-quinary-light mobile_border-bg-quinary-light border-side-top mobile_border-side-top hasBorder mobile-hasBorder" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Portrett</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(21)`
  - **HTML:** `<div data-element-guid="275abeca-8f29-44c4-ad60-c1c6131232cc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.hasContentPadding:nth-child(22)`
  - **HTML:** `<div data-element-guid="5b577787-8e32-4c2b-a023-4127c63bf911" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.articlescroller-header.t25.tm18`
  - **HTML:** `<h2 class="articlescroller-header t25 tm18 font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left font-InterTight" style="">Verden</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(25)`
  - **HTML:** `<div data-element-guid="b12cc05e-97a8-4b52-bcdb-6bda03e4b042" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(26)`
  - **HTML:** `<div data-element-guid="d7fb9e13-d51a-4483-950b-756626df99d0" class="row small-12 large-12 color_mobile_no_bg_color mobile_no_border_color" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.t25.tm18`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 tm18 font-weight-bold m-font-weight-bold font-InterTight" style="">Byhistorie</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(28)`
  - **HTML:** `<div data-element-guid="409f5bd2-415b-4e28-aac6-a137a595c835" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Folkevalgt</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(31)`
  - **HTML:** `<div data-element-guid="b41226fd-91a2-473a-961f-a31bd690a741" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(32)`
  - **HTML:** `<div data-element-guid="91fafe38-32fb-4191-8e49-aedca1ac66bf" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(33)`
  - **HTML:** `<div data-element-guid="6b5eab63-1288-427b-b6f6-850a52c469d2" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t28.lab-scrollbox-headline.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t28 font-weight-bold m-font-weight-bold font-InterTight" style="">Video</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614273 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614272"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614251 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614250"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Tidligere Trump-topp om …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614253 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614252"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Kamzy på politisk pub </…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614255 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614254"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Arbeidersang i Politisk …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614257 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614256"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Dieselbrøl under åpninga…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614259 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614258"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile" style="">Slik unngår du å ta dem med hjem </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614261 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614260"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 color_mobile_no_bg_color tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile"> Rekordmange har fått studieplass…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614263 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614262"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 color_mobile_no_bg_color tertiary color_mobile_tertiary align-center mobile_text_align_align-center hasTextColor hasTextColorMobile"> Trump vil ha Infantino som ny FN…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614265 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.color_mobile_no_bg_color.align-center.mobile_text_align_align-center > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 tertiary color_mobile_tertiary hasTextColor hasTextColorMobile"> Torsnes Arbeiderlag synger gamle arbeidersanger </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614267 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614266"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614269 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614268"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614271 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614270"] > .align-center.mobile_text_align_align-center.content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <div style="" class="kicker floating t18 tm15 tertiary color_mobile_tertiary hasTextColor hasTextColorMobile"> Indias statsminister Narendra Modi på pressekonferanse </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(35)`
  - **HTML:** `<div data-element-guid="bca81586-fd10-4f84-9241-5a6b83171f33" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(37)`
  - **HTML:** `<div data-element-guid="cb5339eb-02e3-4e05-b732-c3db811afc74" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(38)`
  - **HTML:** `<div data-element-guid="a918275e-d027-4b8f-a21b-26f8744b5896" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(39)`
  - **HTML:** `<div data-element-guid="f0105914-4b21-4591-8ab6-42043e273cdb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(40)`
  - **HTML:** `<div data-element-guid="b6ae934f-25f2-4725-a2d3-3f3d93b1ee6c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(41)`
  - **HTML:** `<div data-element-guid="0034d3bd-288b-427e-b30c-d45e0b9e8998" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_59dc168a95d88c084eeb-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(44)`
  - **HTML:** `<div data-element-guid="953d784f-cfe8-4d52-bf11-515b81799fad" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(45)`
  - **HTML:** `<div data-element-guid="de3343f0-6ec5-42b6-b0c4-01e684691c17" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(46)`
  - **HTML:** `<div data-element-guid="dc0cf683-d2fa-41f7-9900-0f7651baa71e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(47)`
  - **HTML:** `<div data-element-guid="acae6445-e464-48b6-aa7d-555df49e9f53" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(49)`
  - **HTML:** `<div data-element-guid="6f06af2d-23d4-4544-b2b1-b5c3da2966d7" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(50)`
  - **HTML:** `<div data-element-guid="5484f719-f96d-4b51-ba22-98740c92556a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(51)`
  - **HTML:** `<div data-element-guid="c706b7f2-945a-4173-8729-50484e33b130" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(52)`
  - **HTML:** `<div data-element-guid="efca85c7-a04d-413f-9d43-155c03f2c8c7" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(53)`
  - **HTML:** `<div data-element-guid="4f83a8f7-3102-4b1b-8e1f-e514303ae41f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(55)`
  - **HTML:** `<div data-element-guid="45a57270-0b6f-4ca2-abb5-8f3c1ea47c08" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(56)`
  - **HTML:** `<div data-element-guid="40886ef8-5972-4219-957a-7d3924bd59eb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(57)`
  - **HTML:** `<div data-element-guid="5c5264b3-10a2-46fe-85b0-a85bc8200eaa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(58)`
  - **HTML:** `<div data-element-guid="1a618efd-3d28-4eab-b977-0e4acd749cbe" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(59)`
  - **HTML:** `<div data-element-guid="fc1b73dc-c099-4a62-bf9e-48924bbe69cb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 class="articlescroller-header font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left" style="">Statsbudsjettet 2027</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(62)`
  - **HTML:** `<div data-element-guid="e64f12f6-1b2f-4697-9f10-09de6e737116" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.page-content > .bg-black.color_mobile_bg-black.hasContentPadding`
  - **HTML:** `<div data-element-guid="c2c74c3d-99f8-491d-adfc-e5ded925e3c9" class="row small-12 large-12 bg-black color_mobile_bg-black hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_0cfaa4c18ebe058946bc-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.italic.m-italic`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline align-center mobile_text_align_align-center italic m-italic" style="">Siri Dokken</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10291490 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20`
  - **HTML:** `<h2 class="articlescroller-header t25 tm20 font-weight-normal m-font-weight-normal align-center mobile_text_align_align-center font-PTSans" style="">Quiz</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_9904930 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4 ">`
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

- **Target:** `#article_list_10614247 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

