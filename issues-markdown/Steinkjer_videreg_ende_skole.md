# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-04-21T01:20:12.401Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f16c0ba2b30fcedad"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f16c0ba2b30fcedad"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `iframe[name="f16c0ba2b30fcedad"], abbr[data-utime="1776716992"] > .timestampContent`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_m_9h > table > tbody > tr > ._435r:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Comment"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_o_aa > ._50sk._2pi4[title="Share"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- `iframe[name="f16c0ba2b30fcedad"], #u_0_1_pX`
- `iframe[name="f16c0ba2b30fcedad"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_b_GV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_b_GV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_c_wE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_c_wE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_a_qS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_d_ns > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_5_gL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 51

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f16c0ba2b30fcedad"], ._2lqh`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_b_GV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_b_GV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_m_9h > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_m_9h > table > tbody > tr > ._51mw`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_c_wE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_c_wE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_p_ZY > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_p_ZY > table > tbody > tr > ._51mw`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_a_qS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_a_qS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_a_qS > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_g_Tu > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_g_Tu > table > tbody > tr > ._51mw`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_d_ns > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_d_ns > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_y_HG > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_z_o2 > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_x_XQ > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_w_Rm > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_v_20 > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_d_ns > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f16c0ba2b30fcedad"], #feed_subtitle_1367625992068249\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f16c0ba2b30fcedad"], #feed_subtitle_1367625992068249\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f16c0ba2b30fcedad"], #id_69e6d0c5e2cdb7b74994594 > p:nth-child(1)`
- `iframe[name="f16c0ba2b30fcedad"], #id_69e6d0c5e2cdb7b74994594 > p:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_j_gH > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_j_gH > table > tbody > tr > ._51mw`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_5_gL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_12_tL > .uiScaledImageContainer`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_14_Q0 > .uiScaledImageContainer`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_10_gR > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_13_lf > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_11_W0 > ._46-h`
- `iframe[name="f16c0ba2b30fcedad"], ._52d9`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_5_gL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f16c0ba2b30fcedad"], #feed_subtitle_1567160728744839\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f16c0ba2b30fcedad"], #feed_subtitle_1567160728744839\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f16c0ba2b30fcedad"], #id_69e6d0c5e30c31684712050 > p:nth-child(1)`
- `iframe[name="f16c0ba2b30fcedad"], #id_69e6d0c5e30c31684712050 > p:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_7_Th > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_7_Th > table > tbody > tr > ._51mw`
- `iframe[name="f16c0ba2b30fcedad"], #u_1_18_Q\/`
- `iframe[name="f16c0ba2b30fcedad"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
