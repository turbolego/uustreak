# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-10-10T20:58:08.555Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 9

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f74149af8b80272f4"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f74149af8b80272f4"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `iframe[name="f74149af8b80272f4"], abbr[data-utime="1791184206"] > .timestampContent`
- `iframe[name="f74149af8b80272f4"], #feed_subtitle_1522783309885849\:4\:0 > ._1atc.fsm.fwn > .fcg`
- `iframe[name="f74149af8b80272f4"], #u_1_9_gW > table > tbody > tr > ._435r:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Comment"]`
- `iframe[name="f74149af8b80272f4"], #u_1_b_nY > ._50sk._2pi4[title="Share"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 10

#### Affected Elements:

- `iframe[name="f74149af8b80272f4"], #u_0_1_Dc`
- `iframe[name="f74149af8b80272f4"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_6_SO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_5_HK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_h_X2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_h_X2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_g_k4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_g_k4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f74149af8b80272f4"], #u_1_f_fe > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 7

#### Affected Elements:

- `iframe[name="f74149af8b80272f4"], #u_0_3_Tu > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], #u_1_y_K\+ > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], #u_1_16_4I > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], #u_1_u_9V > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], #u_1_w_mf > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], #u_1_18_O1 > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f74149af8b80272f4"], .scaledImageFitWidth`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 44

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f74149af8b80272f4"], ._2lqh`
- `iframe[name="f74149af8b80272f4"], #u_1_6_SO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f74149af8b80272f4"], #u_1_6_SO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f74149af8b80272f4"], #feed_subtitle_1522783309885849\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f74149af8b80272f4"], #feed_subtitle_1522783309885849\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68c5f69300034698 > p:nth-child(1)`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68c5f69300034698 > p:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_9_gW > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_9_gW > table > tbody > tr > ._51mw`
- `iframe[name="f74149af8b80272f4"], #u_1_5_HK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f74149af8b80272f4"], #u_1_14_gO > ._46-h`
- `iframe[name="f74149af8b80272f4"], #u_1_12_Li > .uiScaledImageContainer`
- `iframe[name="f74149af8b80272f4"], #u_1_13_o9 > ._46-h`
- `iframe[name="f74149af8b80272f4"], #u_1_11_zS > ._46-h`
- `iframe[name="f74149af8b80272f4"], #u_1_10_p5 > ._46-h`
- `iframe[name="f74149af8b80272f4"], #u_1_5_HK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f74149af8b80272f4"], #feed_subtitle_1606152297967838\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f74149af8b80272f4"], #feed_subtitle_1606152297967838\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68c8829d61621300 > p:nth-child(1)`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68c8829d61621300 > p:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_c_Gm > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_c_Gm > table > tbody > tr > ._51mw`
- `iframe[name="f74149af8b80272f4"], #u_1_h_X2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
- `iframe[name="f74149af8b80272f4"], #u_1_r_sN > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_r_sN > table > tbody > tr > ._51mw`
- `iframe[name="f74149af8b80272f4"], #u_1_g_k4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68ce2d6277094461 > p:nth-child(1)`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68ce2d6277094461 > p:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68ce2d6277094461 > p:nth-child(3)`
- `iframe[name="f74149af8b80272f4"], #id_6acaa6d68ce2d6277094461 > .text_exposed_hide`
- `iframe[name="f74149af8b80272f4"], #u_1_o_lG > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_o_lG > table > tbody > tr > ._51mw`
- `iframe[name="f74149af8b80272f4"], #u_1_f_fe > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
- `iframe[name="f74149af8b80272f4"], #u_1_l_qu > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f74149af8b80272f4"], #u_1_l_qu > table > tbody > tr > ._51mw`
- `iframe[name="f74149af8b80272f4"], #u_1_1b_wt`
- `iframe[name="f74149af8b80272f4"], ._1_lj`
- `.card-grid__item:nth-child(3)`
