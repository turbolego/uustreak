# WCAG Violations Report for Dagsavisen AS

**Timestamp:** 2026-11-20T06:07:12.418Z
**URL:** [https://www.dagsavisen.no/](https://www.dagsavisen.no/)
**Total Violations:** 8

## Violation Details

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

- **Target:** `#offer_00c7379d983c39c932ac-0`
  - **HTML:** `<iframe id="offer_00c7379d983c39..." name="offer_00c7379d983c39..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
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

- **Target:** `#offer_00c7379d983c39c932ac-1`
  - **HTML:** `<iframe id="offer_00c7379d983c39..." name="offer_00c7379d983c39..." scrolling="no" allowtransparency="true" allow="payment" allowfullscreen="true" src="https://buy.piano.io..." frameborder="0" style="overflow: hidden; ba...">`
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

- **Target:** `#offer_00c7379d983c39c932ac-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10418750&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_59dc168a95d88c084eeb-0, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_59dc168a95d88c084eeb-1, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10355539&amp;compression=50&amp;width=2000">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `#offer_00c7379d983c39c932ac-1, img`
  - **HTML:** `<img class="picture_pic" src="https://mentormedier.labrador.media/_img/img.webp?imageId=10418750&amp;compression=50&amp;width=2000">`
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

- **Target:** `#offer_00c7379d983c39c932ac-0, a`
  - **HTML:** `<a href="https://www.dagsavis..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner - folkevalgt" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_59dc168a95d88c084eeb-0, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_59dc168a95d88c084eeb-1, a`
  - **HTML:** `<a href="https://nyhetsbrev.d..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Meld deg på ukentlig..." external-event-data="{"aid":"tOpq1vicpu",..." external-ev…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#offer_00c7379d983c39c932ac-1, a`
  - **HTML:** `<a href="https://www.dagsavis..." external-event="paywall" external-event-track...="Banner - Clicked" external-event-categ...="Banner" external-event-label="Banner - folkevalgt" external-event-data="{"aid":"tOpq1vicpu",..." external-event-…`
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
- **Count:** 150

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading"> Dagsavisen – Nyheter, politikk, kultur, kommentarer og debatt fra Norge og verden </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .google-ad.display-label.large-abs-12 > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="To henrettet i USA"] > h2`
  - **HTML:** `<h2> <a href="/notice/10643440">To henrettet i USA</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-20T06:03:01.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-20T06:03:01.000Z" title="20.11.2026 07:03">nå</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643439 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10643439">Lufthansa kutter 1000 stillinger</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-20T05:57:52.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-20T05:57:52.000Z" title="20.11.2026 06:57">5 minutter siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643275 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10643275">Ambassader i Kyiv rammet i russiske angrep</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643275 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T19:43:21.000Z" title="19.11.2026 20:43">10 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643185 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10643185">Historisk børsdebut for Anthropic</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643185 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T17:26:41.000Z" title="19.11.2026 18:26">12 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643167 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10643167">Trump kjøpte Nvidia-aksjer i september</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643167 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T16:50:20.000Z" title="19.11.2026 17:50">13 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643125 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10643125">Høyesterett opphever dom mot Hamse Ali</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10643125 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T15:42:30.000Z" title="19.11.2026 16:42">14 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10642781 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10642781">Zelenskyj framme på Berlin-toppmøtet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10642781 > .content > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T13:34:28.000Z" title="19.11.2026 14:34">16 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="DNB-trøbbel løst"] > h2`
  - **HTML:** `<h2> <a href="/notice/10642770">DNB-trøbbel løst</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="DNB-trøbbel løst"] > .meta`
  - **HTML:** `<div class="meta"> <time class="fi-clock" datetime="2026-11-19T14:42:46.000Z" title="19.11.2026 15:42">15 timer siden</time> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Dataangrep mot EU-kommisjonen"] > h2`
  - **HTML:** `<h2> <a href="/notice/10642507">Dataangrep mot EU-kommisjonen</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T12:27:16.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T12:27:16.000Z" title="19.11.2026 13:27">17 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10642497 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10642497">Luksusbrekket: Stjal for 2 mill.</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T12:22:36.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T12:22:36.000Z" title="19.11.2026 13:22">17 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10642496 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10642496">Equinor-angrepet pågår fremdeles</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T12:21:23.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T12:21:23.000Z" title="19.11.2026 13:21">17 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Diesel over 30 prosent dyrere "] > h2`
  - **HTML:** `<h2> <a href="/notice/10642181">Diesel over 30 prosent dyrere </a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T10:45:30.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T10:45:30.000Z" title="19.11.2026 11:45">19 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10642049 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10642049">Utsetter åpning av Vestfoldbanen</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T10:06:31.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T10:06:31.000Z" title="19.11.2026 11:06">19 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10641410 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10641410">Skoleelever tiltalt for overgrep</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T10:04:53.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T10:04:53.000Z" title="19.11.2026 11:04">19 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10641384 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10641384">GTA 6 økte norsk internetttrafikk </a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T08:12:31.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T08:12:31.000Z" title="19.11.2026 09:12">21 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#notice-10641287 > .content > h2`
  - **HTML:** `<h2> <a href="/notice/10641287">Fredsprisvinners hus satt i brann</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T08:01:05.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T08:01:05.000Z" title="19.11.2026 09:01">22 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="SkyShowtime legger ned"] > h2`
  - **HTML:** `<h2> <a href="/notice/10641280">SkyShowtime legger ned</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T07:59:52.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T07:59:52.000Z" title="19.11.2026 08:59">22 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Vy: Mange tog ute av drift"] > h2`
  - **HTML:** `<h2> <a href="/notice/10641239">Vy: Mange tog ute av drift</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T07:54:32.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T07:54:32.000Z" title="19.11.2026 08:54">22 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Oslo lufthavn i toppsjiktet"] > h2`
  - **HTML:** `<h2> <a href="/notice/10641126">Oslo lufthavn i toppsjiktet</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T06:52:35.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T06:52:35.000Z" title="19.11.2026 07:52">23 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[title="Stadig færre får ta doktorgrad"] > h2`
  - **HTML:** `<h2> <a href="/notice/10641112">Stadig færre får ta doktorgrad</a> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `time[datetime="2026-11-19T06:29:48.000Z"]`
  - **HTML:** `<time class="fi-clock" datetime="2026-11-19T06:29:48.000Z" title="19.11.2026 07:29">23 timer siden</time>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(2)`
  - **HTML:** `<div data-element-guid="a31e50fa-afd5-489b-adb3-42cbb20922bb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(3)`
  - **HTML:** `<div data-element-guid="3181da25-43cd-4370-9938-09a6ee80d252" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(4)`
  - **HTML:** `<div data-element-guid="14f321ac-0978-4a11-a276-98ea6c35577c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(5)`
  - **HTML:** `<div data-element-guid="d2a42c9a-228a-4496-b4ba-46a804c4759c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(7)`
  - **HTML:** `<div data-element-guid="87687d37-13a5-4358-ae5d-544615e8e09c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(8)`
  - **HTML:** `<div data-element-guid="28a41320-c823-474f-8103-09ef544c0994" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(9)`
  - **HTML:** `<div data-element-guid="72193c9b-ee39-40db-89c0-e4efee67a85f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_00c7379d983c39c932ac-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(11)`
  - **HTML:** `<div data-element-guid="711f587f-c1fd-4300-b0d8-43a58a0f972a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.articlescroller-header.t34.font-InterTight`
  - **HTML:** `<h2 class="articlescroller-header t34 font-weight-bold m-font-weight-bold font-InterTight" style="">Debatt</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10643235 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(14)`
  - **HTML:** `<div data-element-guid="275abeca-8f29-44c4-ad60-c1c6131232cc" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_59dc168a95d88c084eeb-0, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.color_mobile_bg-quaternary`
  - **HTML:** `<h3 itemprop="headline" class="t26 font-weight-bold m-font-weight-bold bg-quaternary color_mobile_bg-quaternary font-InterTight hasTextPadding mobile-hasTextPadding" style="">Siste nytt:</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-bg-quinary-light.mobile_border-bg-quinary-light.hasBorder > .columns.large-4.large-abs-4`
  - **HTML:** `<div data-element-guid="2c0c7a23-47de-452e-a521-02d604c2968c" class="columns small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_9880678`
  - **HTML:** `<div data-element-guid="baa06924-66f7-4a09-874d-c7bc7bcde7c8" id="markup_9880678" class="markupbox column small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.mobile-hasContentPadding > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Portrett</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.mobile-hasContentPadding > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(20)`
  - **HTML:** `<div data-element-guid="947aa7c1-770d-48e5-8e7a-91f6e8ce9bba" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header`
  - **HTML:** `<div data-element-guid="15015844-16c6-40c1-9154-bfb325ceff48" class="row small-12 large-12 bg-white color_mobile_bg-white hasContentPadding mobile-hasContentPadding has-row-header" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.articlescroller-header.t25.tm18`
  - **HTML:** `<h2 class="articlescroller-header t25 tm18 font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left font-InterTight" style="">Verden</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10188193 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(23)`
  - **HTML:** `<div data-element-guid="5423d5c6-d09d-4200-8eeb-8d0fe7e02be3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mobile_no_border_color.color_mobile_no_bg_color.row:nth-child(25)`
  - **HTML:** `<div data-element-guid="d7fb9e13-d51a-4483-950b-756626df99d0" class="row small-12 large-12 color_mobile_no_bg_color mobile_no_border_color" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.t25.tm18`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 tm18 font-weight-bold m-font-weight-bold font-InterTight" style="">Byhistorie</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10184114 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(27)`
  - **HTML:** `<div data-element-guid="3b98dbb4-03af-4dea-b8b2-911a65cc948b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .lab-scrollbox-headline.t25.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t25 font-weight-bold m-font-weight-bold font-InterTight" style="">Folkevalgt</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10372156 > .content > .scroll-container.swipehelper.snap-container-x`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29)`
  - **HTML:** `<div data-element-guid="8dff902c-110f-4a4b-bfdf-7b1eb6f4ff4f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(31)`
  - **HTML:** `<div data-element-guid="6bde633d-8531-490a-8c84-c0675e4b8b54" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(32)`
  - **HTML:** `<div data-element-guid="777b8c17-8d6d-41b8-bda0-5a8139aac06e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline.t28.font-InterTight`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t28 font-weight-bold m-font-weight-bold font-InterTight" style="">Video</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_10614273 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614272"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText">`
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

- **Target:** `#markup_10614251 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="10614250"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t18 tm15 tertiary color_mobile_tertiary align-center mobile_text_align_align-center no_italic m-no_italic hasTextColor hasTextColorMobile" style="">Tidligere Trump-topp om …`
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

- **Target:** `.row.large-12.small-12:nth-child(34)`
  - **HTML:** `<div data-element-guid="cb7cbcba-b5f0-4037-824c-796b1c928699" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(35)`
  - **HTML:** `<div data-element-guid="1cb4d019-d43d-4a39-b055-31b96ed6c5aa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(37)`
  - **HTML:** `<div data-element-guid="6b45cd21-eeb1-433d-a2ef-02ae5cc52a07" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(38)`
  - **HTML:** `<div data-element-guid="97d5b12c-02b5-4b3c-8131-e9957753c6e7" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(39)`
  - **HTML:** `<div data-element-guid="b148c449-b964-4087-8da4-8c95846bfea2" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(40)`
  - **HTML:** `<div data-element-guid="8464eebc-2757-46b7-bd40-bba1ea5db3de" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_59dc168a95d88c084eeb-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(43)`
  - **HTML:** `<div data-element-guid="e027dbee-d43d-4c0f-8714-da8a394e23bb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(44)`
  - **HTML:** `<div data-element-guid="323c4fdc-0300-49f4-b537-2f17d540e18f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(45)`
  - **HTML:** `<div data-element-guid="4e618a03-d7da-4c32-baa4-39435afa19cb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(46)`
  - **HTML:** `<div data-element-guid="faccb5b2-4b2f-4d97-ab0e-a177bbc44233" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.color_mobile_no_bg_color.row.large-12:nth-child(47)`
  - **HTML:** `<div data-element-guid="32f97ebd-99dc-40f4-9400-cbf8267d4a98" class="row small-12 large-12 color_mobile_no_bg_color" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(49)`
  - **HTML:** `<div data-element-guid="bd37e2a8-bddb-4d58-a279-ee0db4cb5548" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.mobile-hasContentPadding:nth-child(50)`
  - **HTML:** `<div data-element-guid="ab697921-3b1c-47d5-bb7a-d940cb580be3" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(51)`
  - **HTML:** `<div data-element-guid="d323cd20-438c-4e26-9b97-5b1e26b2b441" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(52)`
  - **HTML:** `<div data-element-guid="0001352d-773d-4e0f-a698-459b3030a721" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(53)`
  - **HTML:** `<div data-element-guid="5144aa95-8dba-46e9-a86e-bc3025288423" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.mobile-hasContentPadding:nth-child(55)`
  - **HTML:** `<div data-element-guid="999dc505-8f33-4153-85ea-044f193d2bf8" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(56)`
  - **HTML:** `<div data-element-guid="3010b219-cd80-4388-bf09-7728d5ed559e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(57)`
  - **HTML:** `<div data-element-guid="8db2e2c9-74a8-4c6c-9a30-3f000353a4f3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(58)`
  - **HTML:** `<div data-element-guid="520e9c29-9301-4a3d-997b-98b68c020a29" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(59)`
  - **HTML:** `<div data-element-guid="610e9529-91bb-4a63-8558-78043e653ad5" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(61)`
  - **HTML:** `<div data-element-guid="f497e065-4b0d-473b-84a5-6d71a62868c4" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(62)`
  - **HTML:** `<div data-element-guid="be564289-4837-4cdc-a7b2-76d2fbc7448e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(63)`
  - **HTML:** `<div data-element-guid="a46ec362-0015-44ba-baec-0679ec28ae07" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-quinary.color_mobile_bg-quinary.mobile-hasContentPadding:nth-child(64)`
  - **HTML:** `<div data-element-guid="2c4b4ec4-32ae-47a4-8219-75e1df2ef089" class="row small-12 large-12 bg-quinary color_mobile_bg-quinary hasContentPadding mobile-hasContentPadding" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(65)`
  - **HTML:** `<div data-element-guid="4f481064-2337-4210-a4d8-f819c96d519e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(66)`
  - **HTML:** `<div data-element-guid="224ca779-4a53-45e0-a430-d5162a0d12ec" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(67)`
  - **HTML:** `<div data-element-guid="f1a24cd1-2433-4af9-954a-4ed7ec204a16" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(68)`
  - **HTML:** `<div data-element-guid="4241a2f3-9d6c-47ae-bda5-9e4d6da678f0" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(69)`
  - **HTML:** `<div data-element-guid="3e7c8762-8b91-475a-9658-beb5600eff45" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(70)`
  - **HTML:** `<div data-element-guid="c21b015b-070c-4a13-8b9d-4d0d41c11361" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(71)`
  - **HTML:** `<div data-element-guid="5cad4edf-06d8-4f3d-805b-1a807c65b7c4" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(72)`
  - **HTML:** `<div data-element-guid="052daa06-2e63-4d3e-adc2-9047b7ea7fc6" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(73)`
  - **HTML:** `<div data-element-guid="1718fc23-4c84-4804-8431-a3fae466e945" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(74)`
  - **HTML:** `<div data-element-guid="ce0956d9-5a58-4b4f-be1a-a692c02bd357" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(75)`
  - **HTML:** `<div data-element-guid="5b9dbe66-9ff9-410c-88a3-64884d4c135b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(76)`
  - **HTML:** `<div data-element-guid="a918275e-d027-4b8f-a21b-26f8744b5896" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(77)`
  - **HTML:** `<div data-element-guid="8cc659a4-6f31-490c-b015-23565a5b2ce9" class="row small-12 large-12" style="">`
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
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(80)`
  - **HTML:** `<div data-element-guid="b6ae934f-25f2-4725-a2d3-3f3d93b1ee6c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(81)`
  - **HTML:** `<div data-element-guid="0034d3bd-288b-427e-b30c-d45e0b9e8998" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articlescroller-header.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 class="articlescroller-header font-weight-bold m-font-weight-bold align-left mobile_text_align_align-left" style="">Statsbudsjettet 2027</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#article_list_10569463 > .inner.fullwidthTarget.content > .articles.count_4.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start articles count_4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(83)`
  - **HTML:** `<div data-element-guid="e64f12f6-1b2f-4697-9f10-09de6e737116" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#offer_00c7379d983c39c932ac-1, div[ng-show="!terminalError"]`
  - **HTML:** `<div ng-show="!terminalError" class="">`
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

