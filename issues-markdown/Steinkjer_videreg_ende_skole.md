# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-10-02T17:21:57.368Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button type="button" tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Avvis alle" id="declineButton" class="coi-banner__decline" role="alert" aria-atomic="true" style="display: flex;"> Avvis alle </button>`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f1390adb47b75ddde"], ._55yn`
  - **HTML:** `<span class="img _55ym _55yn _55yo" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading..."></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f1390adb47b75ddde"], div[role="feed"]`
  - **HTML:** `<div role="feed">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: table, a[aria-label], a, img, a[aria-describedby]


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
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.top-menu`
  - **HTML:** `<nav class="top-menu top-menu--school u-hide-tablet-landscape-down">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 10

#### Affected Elements:

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_0_1_MG`
  - **HTML:** `<a href="https://www.facebook.com/steinkjervgs?ref=embed_page" target="_blank" id="u_0_1_MG"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], .lfloat._3-8_`
  - **HTML:** `<a class="_3-8_ lfloat" href="https://www.facebook.com/289355574674?ref=embed_page" target="_blank"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1906338626996502&set=a.687974088832968&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid06wRRgPshvwy1R2QK4hHXndcTNJvnAktv65UNNqspHSz6vY1ek6vmNmpvZzRcQYnXl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1900569997573365&set=a.687974088832968&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid03392vEy2Bcn8s11Ndn98cJgW1g4HKix4WMaAGhVRA7JEcxRhidSUNY4MBe6ySRUygl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_d_ZM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid02g8gjg1CSjF3jotELsaGYachXxmq9KLmryn8dUUzbZeAgLyBJD6PPv76m1v3pJmnEl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid0eab4tnoSQwqib6trppjrMFfqgJH9iz6WDoGEsjXft4EhsyaUFScudYmFEuaWHVval?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid02Lf1uwcDhg5a8yUzhd7HpPFzrJZaZnsJwAb5GJR1ARparZgz3hSw9ns5xMUuY7ddpl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f1390adb47b75ddde"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1844374343535224&set=a.783989402907062&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 7

#### Affected Elements:

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_0_3_op > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent.xx...." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_u_FB > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent-arn..." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_w_mw > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent-arn..." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_15_01 > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent-arn..." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], .scaledImageFitWidth`
  - **HTML:** `<img class="scaledImageFitWidth ..." src="https://external-arn..." data-src="https://external-arn..." alt="" width="158" height="158" caption="" aria-label="May be an image of r...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_12_\+A > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent-arn..." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_y_Dm > ._38vo > div > ._s0._4ooo._6y97`
  - **HTML:** `<img class="_s0 _4ooo _6y97 _6_u..." src="https://scontent-arn..." alt="" aria-label="Steinkjer videregåen..." role="img">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 37

#### Affected Elements:

- **Target:** `.hero-image`
  - **HTML:** `<figure class="hero-image" data-object-fit=""> <img src="/globalassets/bilder/steinkjervideregaendeskole/fellesbilde-alle_steinkjer_2024_2.jpg?width=1280" alt="Fellesbilde elever og ansatte 2024 Steinkjer videregående skole Foto: Reed Foto…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `section`
  - **HTML:** `<section class="featured-section u-mg-bottom-base u-mg-bottom-xl@tablet-landscape-up">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(3)`
  - **HTML:** `<div class="card-grid card-grid--equal-height">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(4)`
  - **HTML:** `<div class="card-grid card-grid--equal-height">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
  - **HTML:** `<div class="card-grid__item">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
  - **HTML:** `<div class="card__tag"> Se oss på Facebook </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._2lqh`
  - **HTML:** `<div class="_2lqh" style="max-height: 70px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
  - **HTML:** `<div class="_1dwg _1w_m _q7o" data-visualcompletion="ignore-dynamic">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_l_2O > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_l_2O > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l`
  - **HTML:** `<div class="clearfix l_c3pyo2v0u _5eit _4d-l">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > p:nth-child(1)`
  - **HTML:** `<p>Takk for innsatsen, Hilde! <span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/t71/1/16/1f339.png&quot;)">🌹</span></span…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > p:nth-child(2)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], p:nth-child(3)`
  - **HTML:** `<p> Gjennom disse årene har Hilde vært en viktig støtte for elever, medarbeidere og skolens ledelse. Med klokskap, omso<span class="text_exposed_hide">...</span><span class="text_exposed_show">rg, ro og evne til å finne gode løsninger har …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > .text_exposed_hide`
  - **HTML:** `<span class="text_exposed_hide">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_o_KC > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_o_KC > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_d_ZM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
  - **HTML:** `<div class="_1dwg _1w_m _q7o" data-visualcompletion="ignore-dynamic">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_g_AZ > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_g_AZ > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
  - **HTML:** `<div class="clearfix l_c3pyo2v0u _5eit _4d-l">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
  - **HTML:** `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{"tn":"K"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_11_Tl > .uiScaledImageContainer`
  - **HTML:** `<div class="uiScaledImageContainer" style="width:172px;height:173px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._46-h`
  - **HTML:** `<div class="_46-h" style="width:171px;height:173px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_r_BJ > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_r_BJ > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
  - **HTML:** `<div class="clearfix l_c3pyo2v0u _5eit _4d-l">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
  - **HTML:** `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{"tn":"K"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._1nb_`
  - **HTML:** `<span class="_1nb_" data-ft="{"tn":"C"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._1atc`
  - **HTML:** `<div class="_1atc fsm fwn fcg"><span class="fcg">6,566 followers</span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], .z_c3pyo1brp`
  - **HTML:** `<span class="z_c3pyo1brp">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._5pco`
  - **HTML:** `<div data-testid="post_message" class="mtm _5pco" data-ft="{"tn":"K"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_7_sU > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_7_sU > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], #u_1_18_\/8`
  - **HTML:** `<div class="_2f7y" id="u_1_18_/8"><span class="img _55ym _55yn _55yo" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading..."></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f1390adb47b75ddde"], ._1_lj`
  - **HTML:** `<a class="_1_lj" href="https://www.facebook.com/289355574674?ref=embed_page" target="_blank"><div class="_h7n _3-8x _2ph-"><span class="_50f3 _50f7">Find us on Facebook</span><i class="_h7o img sp_0dpO6AyRzTf sx_4b733c"></i></div></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid__item:nth-child(3)`
  - **HTML:** `<div class="card-grid__item">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

