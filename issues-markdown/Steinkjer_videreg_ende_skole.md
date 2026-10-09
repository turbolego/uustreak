# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-10-09T05:11:44.186Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 9

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

- **Target:** `iframe[name="f3518c170fbb5a7e4"], ._55yn`
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

- **Target:** `iframe[name="f3518c170fbb5a7e4"], div[role="feed"]`
  - **HTML:** `<div role="feed">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: table, a, a[aria-describedby], [role=button], img


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `iframe[name="f3518c170fbb5a7e4"], abbr[data-utime="1791184206"] > .timestampContent`
  - **HTML:** `<span class="timestampContent">on Monday</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #90949c, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #feed_subtitle_1522783309885849\:4\:0 > ._1atc.fsm.fwn > .fcg`
  - **HTML:** `<span class="fcg">23,799 followers</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #90949c, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


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

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_0_1_0D`
  - **HTML:** `<a href="https://www.facebook.com/steinkjervgs?ref=embed_page" target="_blank" id="u_0_1_0D"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], .lfloat._3-8_[target="_blank"]`
  - **HTML:** `<a class="_3-8_ lfloat" href="https://www.facebook.com/289355574674?ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_5_jS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid0L8Yw6AfYomsc1YNohJoCbugMMmvTpKqcdY9Stv4xjvvLVJA2SbwCbgfiaqtnhVivl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1522783296552517&set=a.289241709906688&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_6_z2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid0DTqaaX9bSwotksN7iAduyBc4sLm1sPJD1MygRHFWHRRnqQN4d7Cx7QjMDABbXo9Jl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_x_ny > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1906338626996502&set=a.687974088832968&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_x_ny > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid06tuwMcdhJ9URdNVCrwuPyppLpsaqsrJReKLiqLegsdzWKqM6JpFWJAeDpVPXDBKYl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_f_fG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1900569997573365&set=a.687974088832968&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_f_fG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid0yYtF129p8frEhgSckjxGJFpjSgmrsTEjL5NFLf7J4BQPsZTVqE5u8UUV6GUar46hl?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_q_yz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
  - **HTML:** `<a href="/steinkjervgs/posts/pfbid02g6BFMDxS6FVggFmMLynC3QfCMtTevcF3vFZSjGPDgR7uUBHf3dBUeggz11SvGc73l?ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f3518c170fbb5a7e4"], .scaledImageFitWidth`
  - **HTML:** `<img class="scaledImageFitWidth ..." src="https://external-cph..." data-src="https://external-cph..." alt="" width="158" height="158" caption="" aria-label="May be an image of r...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 47

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

- **Target:** `iframe[name="f3518c170fbb5a7e4"], ._2lqh`
  - **HTML:** `<div class="_2lqh" style="max-height: 70px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_5_jS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
  - **HTML:** `<div class="_3dp _29k">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_5_jS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
  - **HTML:** `<span class="_1nb_" data-ft="{"tn":"C"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #feed_subtitle_1522783309885849\:4\:0 > ._1atc.fsm.fwn`
  - **HTML:** `<div class="_1atc fsm fwn fcg"><span class="fcg">23,799 followers</span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #feed_subtitle_1522783309885849\:4\:0 > .z_c3pyo1brp`
  - **HTML:** `<span class="z_c3pyo1brp">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d3ace0642597406 > p:nth-child(1)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d3ace0642597406 > p:nth-child(2)`
  - **HTML:** `<p> Gratulerer med dagen til alle lærere i barnehager, skoler og på universiteter. En spesiell hilsen til alle våre dyktige <span class="text_exposed_hide">...</span><span class="text_exposed_show">lærere i Trøndelag fylkeskommune. </span>…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_9_F6 > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_9_F6 > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_6_z2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
  - **HTML:** `<div class="_3dp _29k">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_l_v\/ > ._46-h`
  - **HTML:** `<div class="_46-h" style="width:172px;height:172px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_p_gL > .uiScaledImageContainer`
  - **HTML:** `<div class="uiScaledImageContainer" style="width:171px;height:172px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_n_li > ._46-h`
  - **HTML:** `<div class="_46-h" style="width:114px;height:114px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_m_JK > ._46-h`
  - **HTML:** `<div class="_46-h" style="width:113px;height:114px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_o_c1 > ._46-h`
  - **HTML:** `<div class="_46-h" style="width:114px;height:114px;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_6_z2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
  - **HTML:** `<span class="_1nb_" data-ft="{"tn":"C"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #feed_subtitle_1606152297967838\:4\:0 > ._1atc.fsm.fwn`
  - **HTML:** `<div class="_1atc fsm fwn fcg"><span class="fcg">2,779 followers</span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #feed_subtitle_1606152297967838\:4\:0 > .z_c3pyo1brp`
  - **HTML:** `<span class="z_c3pyo1brp">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d3e407041506961 > p:nth-child(1)`
  - **HTML:** `<p>Til elevene på yrkesfag Vg2 ved Steinkjer vgs: Vi trenger dere!</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d3e407041506961 > p:nth-child(2)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_c_rf > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_c_rf > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_x_ny > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
  - **HTML:** `<div class="_3dp _29k">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_x_ny > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
  - **HTML:** `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{"tn":"K"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_y_BI > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_y_BI > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_f_fG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
  - **HTML:** `<div class="_3dp _29k">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d41a60d57271917 > p:nth-child(1)`
  - **HTML:** `<p>Takk for innsatsen, Hilde! <span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/t71/1/16/1f339.png&quot;)">🌹</span></span…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d41a60d57271917 > p:nth-child(2)`
  - **HTML:** `<p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d41a60d57271917 > p:nth-child(3)`
  - **HTML:** `<p> Gjennom disse årene har Hilde vært en viktig støtte for elever, medarbeidere og skolens ledelse. Med klokskap, omso<span class="text_exposed_hide">...</span><span class="text_exposed_show">rg, ro og evne til å finne gode løsninger har …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #id_6ac87787d41a60d57271917 > .text_exposed_hide`
  - **HTML:** `<span class="text_exposed_hide">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_g_6N > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_g_6N > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_q_yz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
  - **HTML:** `<div class="_3dp _29k">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], div:nth-child(3) > ._5pbx._3576.userContent`
  - **HTML:** `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{&quot;tn&quot;:&quot;K&quot;}"><p>Vil du bidra til å utvikle framtidens fagarbeidere innen IT, elektronikk og smart teknologi? Da har vi en ledig undervisningstillin…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_q_yz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
  - **HTML:** `<div class="_3x-2" data-ft="{"tn":"H"}">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_t_os > table > tbody > tr > ._435r:nth-child(2)`
  - **HTML:** `<td class="_51m- prl _435r">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_t_os > table > tbody > tr > ._51mw`
  - **HTML:** `<td class="_51m- prl _51mw">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], #u_1_16_ku`
  - **HTML:** `<div class="_2f7y" id="u_1_16_ku"><span class="img _55ym _55yn _55yo" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading..."></span></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe[name="f3518c170fbb5a7e4"], ._1_lj`
  - **HTML:** `<a class="_1_lj" href="https://www.facebook.com/289355574674?ref=embed_page" target="_blank"><div class="_h7n _3-8x _2ph-"><span class="_50f3 _50f7">Find us on Facebook</span><i class="_h7o img sp_0dpO6AyRzTf sx_4b733c"></i></div></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.card-grid__item:nth-child(3)`
  - **HTML:** `<div class="card-grid__item">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

