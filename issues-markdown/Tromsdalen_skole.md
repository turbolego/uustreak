# WCAG Violations Report for Tromsdalen skole

**Timestamp:** 2026-10-09T05:14:53.163Z
**URL:** [https://tromsdalen.tromsoskolen.no/](https://tromsdalen.tromsoskolen.no/)
**Total Violations:** 10

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[allow="autoplay; encrypted-media"], .ytmVideoInfoVideoTitle`
  - **HTML:** `<a class="ytmVideoInfoVideoTitle" aria-level="2" href="https://www.youtube.com/watch?v=IIs9tR9ZIx4"><span class="ytAttributedStringHost ytmVideoInfoLink ytAttributedStringWhiteSpaceNoWrap" style="">Tenk Tromsø - Skolevei</span></a>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-level="2"


### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f3abeebd9b808cac3"], ._55yn`
  - **HTML:** `<span class="img _55ym _55yn _55yo" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading..."></span>`
  - **Failure summary:** Fix any of the following: aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no title attribute


### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[allow="autoplay; encrypted-media"], #movie_player`
  - **HTML:** `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/5203c085/player_embed_es6.vflset/nb…`
  - **Failure summary:** Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.


### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[name="f3abeebd9b808cac3"], div[role="feed"]`
  - **HTML:** `<div role="feed">`
  - **Failure summary:** Fix any of the following: Element has children which are not allowed: table, a, img


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[allow="autoplay; encrypted-media"], .ytmVideoInfoChannelAvatar`
  - **HTML:** `<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill" alt="thumbnail-image" style="backg…`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 18

#### Affected Elements:

- **Target:** `.dropdown:nth-child(2) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Elever <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(3) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Skolestarter <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(4) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Skole <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(5) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">SFO <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(6) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Helse <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(7) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Råd og utvalg <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(8) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Praktisk info <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.dropdown:nth-child(9) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
  - **HTML:** `<a href="#" class="dropdown-toggle" data-toggle="dropdown">Om oss <strong class="caret"></strong></a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="index.php?pageID=312"]`
  - **HTML:** `<a href="index.php?pageID=312">Kontakt oss</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.text-center > a`
  - **HTML:** `<a href="?show=field&amp;showfrom=10&amp;showcount=15&amp;fid=1011&amp;navB=1" style="clear: none;">Arkiv »</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.17 (foreground color: #337ab7, background color: #f5f5f5, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#bl1776 > .panel-body > .row > .tablefix1.table.table-striped > tbody > tr > td > a`
  - **HTML:** `<a href="https://www.udir.no/eksamen-og-prover/prover/eksempeloppgaver-kp/1.-trinn/">Første lesing og regning</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.32 (foreground color: #337ab7, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="arcade.makecode.com/"]`
  - **HTML:** `<a href="https://arcade.makecode.com/" target="linkwindow1692">Kodebygger Arcade</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.32 (foreground color: #337ab7, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `td > a[href$="login"]`
  - **HTML:** `<a href="https://brettboka.no/login" target="linkwindow1692">Brettboka</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.32 (foreground color: #337ab7, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `tr:nth-child(5) > td > a[target="linkwindow1692"]`
  - **HTML:** `<a href="https://tromkom.sharepoint.com/sites/tromsdalenskole/SitePages/Hjemmeside.aspx" target="linkwindow1692">SharePoint - ansatte</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.32 (foreground color: #337ab7, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `tr:nth-child(7) > td > a[target="linkwindow1692"]`
  - **HTML:** `<a href="https://youtu.be/xYkjrYXG9tg?si=fyT1t1ijE752abI0" target="linkwindow1692">Om Lingdys og bruk</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.32 (foreground color: #337ab7, background color: #f9f9f9, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f3abeebd9b808cac3"], abbr[data-utime="1789309174"] > .timestampContent`
  - **HTML:** `<span class="timestampContent">about a month ago</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.04 (foreground color: #90949c, background color: #ffffff, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_k_v8 > ._2165._2pi4[title="Like"]`
  - **HTML:** `<div class="_2pi4 _36iq _4lk2 _3xre _2165" title="Like"><i class="_3-8_ _2yf7 _5jp _2166 img sp_0dpO6AyRzTf sx_d956c1"></i><i class="_3-8_ _2yf7 _3wdt _2166 img sp_0dpO6AyRzTf sx_9bd4b5"></i>Like</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #7f7f7f, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_l_Iw > ._50sk._2pi4[title="Share"]`
  - **HTML:** `<div class="_2pi4 _36iq _4lk2 _3xre _50sk" title="Share"><i class="_3-8_ _2yf7 _5jp _2167 img sp_0dpO6AyRzTf sx_bc2013"></i><i class="_3-8_ _2yf7 _3wdt _2167 img sp_0dpO6AyRzTf sx_067bd3"></i>Share</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4 (foreground color: #7f7f7f, background color: #ffffff, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe[allow="autoplay; encrypted-media"], html`
  - **HTML:** `<html lang="no" dir="ltr" data-cast-api-enabled="true">`
  - **Failure summary:** Fix any of the following: Element has focusable descendants


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#kommunevaapen > img`
  - **HTML:** `<img src="https://www.tromsoskolen.no/grafikk/kommune.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(2) > a:nth-child(15)`
  - **HTML:** `<a href="http://tromso.kommune.no/finn-skjema">Søknad</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.77:1 with the surrounding text. (Minimum contrast is 3:1, link text: #337ab7, surrounding text: #333333) The link has no styling (such as underline) to distinguish it …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 23

#### Affected Elements:

- **Target:** `#articleID_406 > .boxTextBody > p > a[href$="tromso"]`
  - **HTML:** `<a href="https://vigilo.no/tromso"><img alt="" src="https://tromsoskolen.no/files/2026/07/s-vigilo.jpg" style="width: 160px; height: 160px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href="intranett.tromso.kommune.no"]`
  - **HTML:** `<a href="intranett.tromso.kommune.no" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2022/09/l-intranett.png" style="width: 160px; height: 40px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#articleID_406 > .boxTextBody > p > a:nth-child(9)`
  - **HTML:** `<a href="https://www.individplan.no/samspill/nb/login"><img alt="" src="https://tromsoskolen.no/files/2022/09/l-visma_flyt_samspill.png" style="width: 160px; height: 115px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="kartleggeren.no/"]`
  - **HTML:** `<a href="https://kartleggeren.no/" style="line-height: 1.6em;" target="_blank"><img alt="" height="82" src="https://tromsoskolen.no/files/2013/02/m-kartleggeren_tile.jpg" style="border-width: 0px; border-style: solid;" title="Kartleggeren …`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="app.mpluss.no/"]`
  - **HTML:** `<a href="http://app.mpluss.no/" style="line-height: 1.6em;" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2013/09/s-weblogo.gif" style="width: 80px; height: 80px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="bibliotek.info/"]`
  - **HTML:** `<a href="http://www.bibliotek.info/" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2013/01/s-folders-os-libraries-metro-icon_1.png" style="border-width: 0px; border-style: solid; width: 80px; height: 80px; line-height: 1.6…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(17)`
  - **HTML:** `<a href="https://tromkom.sharepoint.com/sites/Skolebibliotek" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2019/02/m-books_lenkebilde_redigert_160x80.jpg" style="width: 160px; height: 80px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="dkstromso.no/"]`
  - **HTML:** `<a href="http://www.dkstromso.no/" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2017/08/l-dks.png" style="width: 160px; height: 79px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `#articleID_324 > .boxTextBody > p:nth-child(2) > a[target="_blank"]`
  - **HTML:** `<a href="https://tromkom.sharepoint.com/sites/zokrates/sider/startside-elev.aspx?wa=wsignin1.0" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2018/06/m-elev_o365_feide.png" style="width: 160px; height: 90px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="tromso"][target="_blank"]`
  - **HTML:** `<a href="https://vigilo.no/tromso" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2026/07/m-vigilo.jpg" style="width: 160px; height: 160px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p:nth-child(3) > a:nth-child(3)`
  - **HTML:** `<a href="https://ext-idp.skolon.com/a/feide?callbackUrl=https%3A%2F%2Fapp.skolon.com%2Flogin%3Flang%3Dno%26iframe%3D1%26origin%3Dhttps%253A%252F%252Fskolon.com%252F"><img alt="" src="https://tromsoskolen.no/files/2023/10/l-skolon.png" styl…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p:nth-child(3) > a:nth-child(5)`
  - **HTML:** `<a href="https://tromsoskolen.no/index.php?artID=752"><img alt="" src="https://tromsoskolen.no/files/2021/02/l-mv_nordic_intowords.png" style="width: 160px; height: 100px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a:nth-child(7)`
  - **HTML:** `<a href="https://www.udir.no/nullmobbing/"><img alt="" src="https://tromsoskolen.no/files/2021/02/l-nullmobbing.png" style="width: 160px; height: 64px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(9)`
  - **HTML:** `<a href="http://tromsoskolen.no/index.php?artID=674&amp;navB=1" target="_blank"><img alt="" src="https://tromsoskolen.no/files/2018/08/m-kontrakt_elev-pc.png" style="width: 160px; height: 89px;"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_0_1_cr`
  - **HTML:** `<a href="https://www.facebook.com/people/FAU-Tromsdalen-skole-informasjonsside/100064823536942/?ref=embed_page" target="_blank" id="u_0_1_cr"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], .lfloat:nth-child(1)`
  - **HTML:** `<a class="_3-8_ lfloat" href="https://www.facebook.com/905299739564918?ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_8_Ky > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/permalink.php?story_fbid=pfbid032hhauq3GxGN41xmZUc2TmR6pZYh9ZtxEknVtoCfPTSCZi5wctQ9UUJzUCyApN5HMl&amp;id=100064823536942&amp;ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_7_uJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1426886999482071&set=a.453753226795458&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_7_uJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/permalink.php?story_fbid=pfbid0bYKuxoR6aiB75yYr6aqnveGc7GxLHCoWgMjhayJqPQpn6YhSbVFbW8kJ7gs1LujVl&amp;id=100064823536942&amp;ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_9_JC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/permalink.php?story_fbid=pfbid02nmYcA61328RBQbpSxb1Ba6VKxvkgvV5AKxcufPV93iDKM5F36jPCrcX1gWgdRRwcl&amp;id=100064823536942&amp;ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_6_jL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/permalink.php?story_fbid=pfbid0hunTzRgfFueaL3HNuVuDYAThDPZhM5342Di8AmycVj6yENwNctW86QEn5GnQRRLpl&amp;id=100064823536942&amp;ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_5_mW > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
  - **HTML:** `<a href="https://www.facebook.com/photo.php?fbid=1413354170835354&set=a.453753226795458&type=3&ref=embed_page" target="_blank">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `iframe[name="f3abeebd9b808cac3"], #u_1_5_mW > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
  - **HTML:** `<a href="/permalink.php?story_fbid=pfbid026229Vx2ZFA7opimyb9SHvu8o5NesqSLPhDs3s88rwv1Rxkgg5pvsaJMBT2Pes2Ykl&amp;id=100064823536942&amp;ref=embed_page" target="_blank"><i class="img sp_0dpO6AyRzTf sx_8033cd"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

