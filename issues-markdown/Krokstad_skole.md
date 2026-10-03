# WCAG Violations Report for Krokstad skole

**Timestamp:** 2026-10-03T04:14:15.978Z
**URL:** [https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/](https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/)
**Total Violations:** 10

## Violation Details

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f55570e9a3c83fcec"], ._55yn`
  - **HTML:** `<span class="img _55ym _55yn _55yo" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Laster inn …"></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f55570e9a3c83fcec"], div[role="feed"]`
  - **HTML:** `<div role="feed">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: table, a, img, [role=button], a[aria-label], a[aria-describedby], div[tabindex]


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `iframe[name="f55570e9a3c83fcec"], .x1ypdohk.xe35lr7:nth-child(2) > ._eg_[role="button"] > ._eh3`
  - **HTML:** `<div class="_eh3">Arrangementer</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.82 (foreground color: #8d949e, background color: #f5f6f7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], .x1ypdohk.xe35lr7._51mw > ._eg_[role="button"] > ._eh3`
  - **HTML:** `<div class="_eh3">Meldinger</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.82 (foreground color: #8d949e, background color: #f5f6f7, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], abbr[data-utime="1790848575"] > .timestampContent`
  - **HTML:** `<span class="timestampContent">på torsdag</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #90949c, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], #feed_subtitle_1681398620662434\:4\:0 > ._1atc.fsm.fwn > .fcg`
  - **HTML:** `<span class="fcg">63&nbsp;455 følgere</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #90949c, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_d_Il > ._2165._2pi4[title="Liker"]`
  - **HTML:** `<div class="_2pi4 _36iq _4lk2 _3xre _2165" title="Liker"><i class="_3-8_ _2yf7 _5jp _2166 img sp_0dpO6AyRzTf sx_d956c1"></i><i class="_3-8_ _2yf7 _3wdt _2166 img sp_0dpO6AyRzTf sx_9bd4b5"></i>Liker</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #7f7f7f, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_c_zc > table > tbody > tr > ._435r.prl:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Kommenter"]`
  - **HTML:** `<div class="_2pi4 _36iq _4lk2 _3xre _1p4p" title="Kommenter"><i class="_3-8_ _2yf7 _5jp _4mlr img sp_0dpO6AyRzTf sx_4e040d"></i><i class="_3-8_ _2yf7 _3wdt _4mlr img sp_0dpO6AyRzTf sx_46439e"></i>Kommenter</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #7f7f7f, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_e_KZ > ._50sk._2pi4[title="Del"]`
  - **HTML:** `<div class="_2pi4 _36iq _4lk2 _3xre _50sk" title="Del"><i class="_3-8_ _2yf7 _5jp _2167 img sp_0dpO6AyRzTf sx_bc2013"></i><i class="_3-8_ _2yf7 _3wdt _2167 img sp_0dpO6AyRzTf sx_067bd3"></i>Del</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #7f7f7f, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#cookie_cat_functional`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_functional" id="cookie_cat_functional" type="checkbox" title="Funksjonelle" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_functional')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element

- **Target:** `#cookie_cat_statistic`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_statistic" id="cookie_cat_statistic" type="checkbox" title="Statistiske" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_statistic')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element

- **Target:** `#cookie_cat_marketing`
  - **HTML:** `<input class="coi__checkbox" tabindex="0" data-index="0" name="cookie_cat_marketing" id="cookie_cat_marketing" type="checkbox" title="Markedsføring" onclick="CookieInformation.changeCategoryConsentDecision('cookie_cat_marketing')">`
  - **Failure summary:** Fix all of the following: Only title used to generate label for form element


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_0_1_TQ`
  - **HTML:** `<a href="https://www.facebook.com/krokstadskole?ref=embed_page" target="_blank" id="u_0_1_TQ"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], .lfloat._3-8_[target="_blank"]`
  - **HTML:** `<a class="_3-8_ lfloat" href="https://www.facebook.com/1037451556341512?ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_6_YE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/krokstadskole/posts/pfbid02oLk2V3xpNBMUarurVUAoyYLA9Fs61UfTK6YcYqYJ4j89yosBZhoki3BG823UGTUdl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_8_Gh > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/krokstadskole/posts/pfbid02CFPmihKzW1s68d9P2mfza5QKcMuUvt6twy4p66AvSgQbokKLBF9qdBX5sDEgF6uql?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_1q_vy > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/krokstadskole/posts/pfbid0351omWpjiH1GR9bj4nALTDb7gEtRKx2MDAgUZFMAi1Ro7QE331X8jhRXSQxb12CYTl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_5_BN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/krokstadskole/posts/pfbid0QFwJ9mZpv8uRVwx1Rk5RoFDXSaGDihZ61PYKBmqJykXvRi9NNeWvcbUJmc9eCFUVl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], ._2l7q > a[target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1425103622767942&set=a.522613493016964&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f55570e9a3c83fcec"], #u_1_7_Y4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/krokstadskole/posts/pfbid036n2ZpXAmEJCsYh2esEZXzGa9sxK1KxFbC6jMabpMit5Jrs547vQDsQ32FtJep4XTl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.mainMenuTrigger`
  - **HTML:** `<div class="mainMenuTrigger _jsMainMenuTrigger" tabindex="0" role="button">`
  - **Failure summary:** Fix any of the following: Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f55570e9a3c83fcec"], img[width="255"]`
  - **HTML:** `<img class="scaledImageFitWidth ..." src="https://external-arn..." data-src="https://external-arn..." style="top:0px;" alt="" width="255" height="134" caption="" aria-label="Kan være et bilde av...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skipLink`
  - **HTML:** `<p class="skipLink"> <a href="#mainContentContainer">Hopp til innhold</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

