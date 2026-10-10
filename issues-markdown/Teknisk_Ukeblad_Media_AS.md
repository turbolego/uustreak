# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-10-10T08:26:40.450Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 7

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #cbb`
  - **HTML:** `<div id="cbb" class="cbb" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(13) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(24) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(27) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.border-side-bottom > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t44 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-bg-primary > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 font-weight-bold m-font-weight-bold "><span class="lab-row-header-title">Nitos visepresident trekker seg:­</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 7

#### Affected Elements:

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144750"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145065"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=7142466&amp;y=22.94&amp;cropw=66&amp;whRatio=0.67&amp;x=18.58&amp;bbRatio=1&amp;croph=66.01&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144000"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706069"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141083"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="80"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TU-logo-RGB-gul.svg" width="80" height="56">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="128"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TUM-logo-RGB-hvit.svg" width="128" height="28">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.grid-vas-center`
  - **HTML:** `<nav class="navigation mainMenu dac-hidden-desktop-down grid-vas-center grid">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #aw0`
  - **HTML:** `<a id="aw0" target="_blank" href="https://googleads.g...." onfocus="ss('aw0')" onmousedown="st('aw0')" onmouseover="ss('aw0')" onclick="ha('aw0')">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 241

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading">Teknisk Ukeblad - forsiden</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141811"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Skal du ut og fly? Høyden måles trolig med en norsk brikke </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7143928"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Midt i Grønland-kaoset: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7143928"] > .t36.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t36" style="">Bak kulissene forhandlet det danske forsvaret med Palantir </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(2)`
  - **HTML:** `<div data-element-guid="bddb82ac-47aa-4217-b6be-7859a96061fa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(3)`
  - **HTML:** `<div data-element-guid="8dc3720c-b5f4-4f5c-8532-048819d29711" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144774"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144774"] > .t40.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm22" style="">Ruter har ikke informasjonen som trengs for å planlegge evakuering </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145073"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Telenor i beredskap:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm34`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm34" style="">– Vil ta tid å avklare&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143311"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144464"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Vil styrke den digitale handlefriheten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm26.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm26" style="">&nbsp;– Må ha flere bein å stå på </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(9)`
  - **HTML:** `<div data-element-guid="6c323fd3-919c-41d6-ac3c-7b08c8f8795a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141143"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144684"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144684"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nytt gassfunn:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144684"] > .t28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t28" style="">– Lønnsomme fat </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144168"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Streiken fortsetter: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144168"] > .t40.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm22" style="">&nbsp;Lokførerne får støtte fra Japan </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,kunstig intelligens"]`
  - **HTML:** `<article data-element-guid="2747e1cd-7a2b-4ca0-8113-f5a421f845e7" class="column small-12 large-7 small-abs-12 large-abs-7 " data-site-alias="digi" data-section="debatt" data-tag="debatt,kunstig intelligens" data-instance="7143510" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm23" style="">Ble filmet av kinesiske leiebiler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="samferdsel,debatt"]`
  - **HTML:** `<article data-element-guid="edb770e0-69a0-4f35-8cca-aa2847f317da" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="debatt" data-tag="samferdsel,debatt" data-instance="7144727" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(13) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144712"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144712"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Fire år uten svar: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm22" style="">Hvem har ansvaret for busser og sjåfører ved krise og krig? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(15)`
  - **HTML:** `<div data-element-guid="aaf5fb0f-1954-453f-a412-eb3ba734a0fa" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(16)`
  - **HTML:** `<div data-element-guid="033d3d63-4a12-4008-959d-3e4b2faabfb8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.adZone-parallax > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Tidstjeneste får drahjelp: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">– Vi må ta kontroll over vår egen tid </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144014"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Norgespris: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t45.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t45 tm22" style="">Folk velger bort varmepumpe </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144272"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144272"] > .t50.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t50" style="">Droneforsvaret skal styrkes </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143860"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Nye fregatter: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.t37`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 align-left mobile_text_align_align-left" style="">– Ikke enkelt å bli klok på hva regjeringen faktisk skriver </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143593"] > .t38.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 color_mobile_no_bg_color" style="">Vil bruke 192 milliarder på forsvar i 2027 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144301"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144301"] > .t34.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 color_mobile_no_bg_color" style="">Regjeringen åpner for å bygge nye jernbaner uten ERTMS </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nye milliardprosjekter må vente:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .t34.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 color_mobile_no_bg_color" style="">– Må ta bedre vare på det vi har </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7144000"]`
  - **HTML:** `<article data-element-guid="d80f12c5-6587-4ce2-8d02-c3140aded7aa" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7144000" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm25 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">Ny milliardsprekk for Melkøya-elektrifisering </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(24) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143946"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Endring i momsfritak gir elbilrush: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143946"] > .t48.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t48" style="">– Det går mot rekord i år også </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144242"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144242"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Sjefen i Norske Tog:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t67.tm40.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t67 tm40" style="">Slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(26)`
  - **HTML:** `<div data-element-guid="3995e50d-a098-4359-a74c-3fe848c9853a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(27) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142874"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Stor økning til E-tjenesten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm29" style="">&nbsp;– Behovet for etterretning har blitt vesentlig større </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="ntb,energi,utenriks,equinor"]`
  - **HTML:** `<article data-element-guid="e7e337c6-6983-4fb5-83be-5b64861ab09b" class="column small-12 large-12 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="energi" data-tag="ntb,energi,utenriks,equinor" data-instance="7144142" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm27.t29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm27" style="">Regjeringens millioner gir mobildekning i tre tunneler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> To studier gir svar: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t52.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t52" style="">Lønner solceller seg mest med eller uten et batteri? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="gass,eu,energi"]`
  - **HTML:** `<article data-element-guid="1753861a-c0c1-4f9e-b3e8-5f1d704f2f04" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="gass,eu,energi" data-instance="7143974" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(30)`
  - **HTML:** `<div data-element-guid="553eab7a-fdfc-45db-be22-3001816213a0" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5703283"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Frykter for fremtiden til smelteverket: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5703283"] > .t42.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t42" style="">– Det er som lungenes betydning for kroppen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(31) > .columns.large-6.large-abs-6`
  - **HTML:** `<div data-element-guid="1170448d-b94b-4b48-b921-5646a568adc6" class="columns small-12 large-6 small-abs-12 large-abs-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(32)`
  - **HTML:** `<div data-element-guid="794cf678-48ee-4a99-94ab-b46c29341674" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140849"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140849"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Kjernekraftgründer: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t62.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t62 tm30" style="">– Om ti år er alt borte hvis vi ikke får billig energi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7143679 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(33) > .large-3.columns.large-abs-3 > .row.large-12.small-12 > .text_singleline.large-abs-3.large-12`
  - **HTML:** `<div data-element-guid="33e05b0a-011b-4bb3-a5e8-0d5bd7e3015e" class="column text_singleline small-12 large-12 small-abs-12 large-abs-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm22" style="">EU med ny kurs for skips­teknologi: – Mer pragmatisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="gruvedrift,klima,debatt"]`
  - **HTML:** `<article data-element-guid="dba16bf4-fe95-4ead-b172-e3d91ea21bcb" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="gruvedrift,klima,debatt" data-instance="7143426" data-image-fl…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143395"] > .tm24.t36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t36 tm24" style="">USA har evakuert alle bombefly fra flybase i England </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t44.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t44 tm21" style="">Varsler historisk IT-løft i politiet – og drysser 190 mill. på NSM </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142400"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t16`
  - **HTML:** `<div style="" class="kicker below t16"> Øver på helikopter­katastrofe: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t51`
  - **HTML:** `<h2 itemprop="headline" class="headline t51 tm29" style="">&nbsp;– Det vil aldri bli perfekt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142846"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142846"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Uenighet om hvordan jorden oppsto: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142846"] > .t32.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t32" style="">Nå kan mysteriet være løst </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(37)`
  - **HTML:** `<div data-element-guid="1360a177-29a4-441a-881e-40b001229633" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704548"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nordic Mining:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704548"] > .t36.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t36" style="">Har funnet potensiell gullgruve – men kundene mangler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7143309 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(38) > .large-3.columns.large-abs-3 > .row.large-12.small-12 > .text_singleline.large-abs-3.large-12`
  - **HTML:** `<div data-element-guid="5d21feb3-74d6-4fb2-af52-68754d423e14" class="column text_singleline small-12 large-12 small-abs-12 large-abs-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143261"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Miljøaktivister:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143261"] > .t29.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t29" style="">– Nye aksjonister har stanset gruvedrift ved Førdefjorden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="innenriks,samferdsel,jernbane"]`
  - **HTML:** `<article data-element-guid="5ec1c46c-0811-489e-b43c-226883db9011" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="innenriks,samferdsel,jernbane" data-instance="7143284" ite…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm38`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm38" style="">Utelukker ikke å sende datasentre bakerst i strømkøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(40)`
  - **HTML:** `<div data-element-guid="f5b03ffa-7256-4758-b618-07911925a4e2" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > .headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline " style="">Geely kommer med rekordrask lading </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142777"]`
  - **HTML:** `<article data-element-guid="3777d14d-b014-4907-8c7c-4bc5ae66d625" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="digi" data-section="kommentar" data-tag="kommentar" data-instance="7142777" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t58`
  - **HTML:** `<h2 itemprop="headline" class="headline t58" style="">NVE varsler nei til drage-kraftverk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142495"] > .t45.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Datasenterboomen gir milliardinntekter – men få nye arbeidsplasser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(43)`
  - **HTML:** `<div data-element-guid="edafa385-ed5d-418b-b9d7-73fe587afcd3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(44)`
  - **HTML:** `<div data-element-guid="7f6fec14-c58a-4a86-857e-d69c7087a56a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(45)`
  - **HTML:** `<div data-element-guid="76827d2f-113e-471b-a69c-f6e43b232918" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142727"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142291"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm33.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm33" style="">Avis: F-16-situasjonen i Ukraina er kritisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm22" style="">Reaktordrevne skip kan komme til Norge lenge før kjernekraft på land </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(48)`
  - **HTML:** `<div data-element-guid="94239afd-e7bb-4e1b-beb9-7aa5db5accdb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm20" style="">Ett av fem offentlige anbud får kun ett tilbud: – I praksis ingen konkurranse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm28" style="">Norsk fregatt testet ny missiltype </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm28" style="">Advarer: Selvkjørende biler kan gi oss lengre køer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Android-skadevare: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .t29.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm23" style="">Kan stjele bankdataene dine med KI </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142036"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm21.t30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm21" style="">Dansk politi brukte plattform som knyttes til Russland </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142302"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm26" style="">Brua forskjøv seg 40 cm </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142239"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> 200.000 tonn årlig: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm31`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Nytt selskap skal lagre CO<sub>2</sub> i Nordsjøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141830"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Europas dyreste diesel, men: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm22" style="">Vi bruker langt mindre andel av inntekten vår </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="arbeidsliv,nito,kommentar"]`
  - **HTML:** `<article data-element-guid="14642fee-8f94-4c0d-8385-c07676ff7f09" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="arbeidsliv,nito,kommentar" data-instance="7141083" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Boeing: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm29.t38.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm29" style="">Skal bygge nytt kampfly til den amerikanske marinen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7141950"]`
  - **HTML:** `<article data-element-guid="1ad5c3f3-0b7c-4c66-ab56-36a2d48e7c27" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="litium-ion-batterier,industri,faam,sirkulær økonomi,vianode"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Slakter Teknologirådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Som å beskrive norsk oljepolitikk med data fra 1969 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="kunstig intelligens,debatt"]`
  - **HTML:** `<article data-element-guid="2b6f3c2b-770d-4889-b6f8-9de1869c09e5" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="kunstig intelligens,debatt" data-instance="7140962" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t17`
  - **HTML:** `<div style="" class="kicker below t17 tm17"> Davvi vindkraftverk: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm25.t29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm25" style="">Opphever NVEs avslag </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="samferdsel,klima"]`
  - **HTML:** `<article data-element-guid="eaac2f2a-63b8-4626-9f87-c68beaf4ffb8" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,klima" data-instance="5704052" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="eu,industri"]`
  - **HTML:** `<article data-element-guid="99c5bf78-0cf2-4576-9b21-34e5661c64c9" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="eu,industri" data-instance="7141305" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142185"]`
  - **HTML:** `<article data-element-guid="d6c2b445-37c8-4760-9d50-fc88351e8d73" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="industri" data-tag="nordic mining,industri,gruvedrift,førdefjorden" data-instan…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t27" style="">Mener hjemmekontor-grep er kjempeblemme: – Bør få styre selv </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Fersk rapport: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t52.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm29" style="">Alle må ha en exit-strategi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm25" style="">Nordic Mining-sjefen slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(57)`
  - **HTML:** `<div data-element-guid="2ad6d0d6-3708-47d8-96fe-0180b44f306b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">Dette er Equinors omstridte oljeutbygginger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">Årsaken til F-16-styrt er klar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(59)`
  - **HTML:** `<div data-element-guid="e3c3d518-efbd-4027-bc58-9e0061f1deb3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="andøya,romfart"]`
  - **HTML:** `<article data-element-guid="c2bd7281-87d3-4cfb-92df-9b578345cd39" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="andøya,romfart" data-instance="7141870" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Digitalt massebedrageri: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">– Trolig den største saken hittil i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,it"]`
  - **HTML:** `<article data-element-guid="fc67d3c1-54e0-40a5-bcfb-cdd2cacfa5ed" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="it" data-tag="datasenter,it" data-instance="7141819" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="telenor,telekom"]`
  - **HTML:** `<article data-element-guid="24719db7-cbae-4007-85dc-98091575cef0" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="telenor,telekom" data-instance="7141748" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Nitos hovedstyre:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t62.tm36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t62 tm36" style="">Stiller seg bak Lein </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Nasa vil fly som med SR-71 Blackbird igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.below.kicker`
  - **HTML:** `<div style="" class="kicker below t25"> Varsler om tvangsmulkt til Nscale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm30" style="">– Brudd på energiloven </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm37" style="">Bruker 4 mill. i året på å komme seg til skytebanen</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.below.kicker`
  - **HTML:** `<div style="" class="kicker below t18"> Nær alle datasentre eies av utlendinger: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t34.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm32" style="">&nbsp;– Utfordrer nasjonal sikkerhet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.below.kicker`
  - **HTML:** `<div style="" class="kicker below t19"> Corvus-sjef går på dagen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm32" style="">Finansdirektør på vei ut tar over </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Forbrukerrådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Advarer mot Meta Muse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm36" style="">Truet med å trekke seg fra Nito-ledelsen alt i juni</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.below.kicker`
  - **HTML:** `<div style="" class="kicker below t18"> <span data-lab-text_size_desktop="19" class="t19">IT-gigantene sto skolerett:</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">– Det finnes ingen quick fix </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi"]`
  - **HTML:** `<article data-element-guid="2d00a630-310f-458c-9c26-93e10d90de23" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="energi" data-instance="7141100" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141123"] > .t32.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm29" style="">400 millioner mer til E-tjenesten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.desktop-floatRight.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatRight mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705912"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Dansk e-tjeneste advarer: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t23 tm25" style="">Tek-ledere og forsvars­topper er mål for Russland </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-side-bottom > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t44 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141430 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141431 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141432 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `unite-player[muted=""], #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.below.kicker`
  - **HTML:** `<div style="" class="kicker below t30"> Batteristrid: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t86`
  - **HTML:** `<h2 itemprop="headline" class="headline t86" style="">– Kastet bort millioner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(70)`
  - **HTML:** `<div data-element-guid="3e998cd7-8c2c-4db0-9e11-3dded3fb14f3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Danmarkskabel: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t49`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm49" style="">Reparert og satt i drift igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140602"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Sotrasambandet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t32.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm22" style="">Rammen var 17 mrd. – nå har prislappen blitt nær 30 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Kongsberg Gruppen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t55" style="">Får rammeavtale på nær 4 milliarder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Etterforskningen av Telenor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm42`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm42" style="">– Det bør ta mye mer enn ett år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="utenriks,forsvar,ntb"]`
  - **HTML:** `<article data-element-guid="a7a2e2b8-03cc-498f-b25f-c7d102f93fd6" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="utenriks,forsvar,ntb" data-instance="7140806" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140762"] > .t37.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t37" style="">Rivingen er i gang </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705935"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm27" style="">Google skal bygge kunstig intelligens i verdensrommet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5702936"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706021"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706021"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">USA godkjenner salg av flere Seahawk-helikoptre til Danmark </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t28.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t28 tm25" style="">Kasserte telefoner og mobilmaster kan spore ulovlige droner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705849"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705849"] > .t37.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t37" style="">Her tar nytt jagerfly av for første gang </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-bg-primary > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 font-weight-bold m-font-weight-bold "><span class="lab-row-header-title">Nitos visepresident trekker seg:­</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710359"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t48.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm23 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">– Man lærer seg å merke når voksne menn opplever at man tar for mye plass </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711518"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nito-presidenten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711518"] > .t34.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t34" style="">– Uenighet om rolleforståelse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm16`
  - **HTML:** `<div style="" class="kicker below tm16"> Generalsekretæren: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711211"] > .t33.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t33" style="">&nbsp;– Trist og uheldig </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706087"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Norge har kjøpt nye bergings­panservogner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708027"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708027"] > .headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline " style="">Alstom krever 260 millioner fra Bane Nor </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710099"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm17.below`
  - **HTML:** `<div style="" class="kicker below t23 tm17"> Fra toppstilling i Elkem til Fensfeltet-selskap: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t71`
  - **HTML:** `<h2 itemprop="headline" class="headline t71 tm40" style="">– Jeg rømmer ikke </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(80)`
  - **HTML:** `<div data-element-guid="bd328b70-9650-4b3a-9ba2-a7b0fc272508" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706114"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706114"] > .tm19.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm19"> Ekstraregning for KI: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706114"] > .tm24.t36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t36 tm24" style="">– Det du kjøper, er priset kunstig lavt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710212"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710212"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Setter treningsfly på bakken: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm45`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm45" style="">Styrtet ved campingplass </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709650"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709650"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Ny samferdselsminister: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm29" style="">&nbsp;– Vi har sviktet jernbanen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707478"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Kommunen satser: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707478"] > .t31.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">KI-verktøy halverte tiden på journalføring </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="5709799"]`
  - **HTML:** `<article data-element-guid="dbc16a91-ba18-4925-ab23-b335b77aaa46" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="artikler" data-tag="artikler" data-instance="5709799" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708221"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Har meldt inn enorme kjernekraftplaner: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm35`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm35" style="">– Kan løse mye av omdømme­­­­­­­problemet til datasentre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708049"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(84)`
  - **HTML:** `<div data-element-guid="5e6e65db-271d-4436-8137-59f194e61e54" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706297"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706297"] > .t19.below.kicker`
  - **HTML:** `<div style="" class="kicker below t19"> Datasenter-eufori i Fyresdal: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t40.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm36" style="">– Blir som hva Hydro var for Rjukan </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707369"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t28.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t28 tm29" style="">Metas første «KI-dings» </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710238"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,industri,energi,co2"]`
  - **HTML:** `<article data-element-guid="b523b745-78ea-44fe-8267-0fc1f8f94586" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="debatt,industri,energi,co2" data-instance="5710641" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709319"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709319"] > .t40.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm23" style="">Thoresens nærmeste vil ikke ha ham tilbake: – Veldig vanskelig </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.powered-by`
  - **HTML:** `<div class="powered-by "><a href="https://labradorcms.com/" target="_blank">Powered by Labrador CMS</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

