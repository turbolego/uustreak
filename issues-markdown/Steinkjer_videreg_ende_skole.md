# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-04-16T11:45:42.776Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 9

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

- `iframe[name="fcacfdd8bd3ec61c5"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fcacfdd8bd3ec61c5"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `iframe[name="fcacfdd8bd3ec61c5"], abbr[data-utime="1776330983"] > .timestampContent`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_d_nn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > div > ._6l4._59ap._1-9r > ._3z2._3z3._2v9b > div > ._fwr._3ekx._29_4 > div > ._4dhn._opx._6m3 > ._oq1._59tj._2iau > ._6lz._6mb._1t62 > div`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_m_3N > ._2165._2pi4[title="Like"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_l_lR > table > tbody > tr > ._435r:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Comment"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_n_4Z > ._50sk._2pi4[title="Share"]`

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
- **Count:** 7

#### Affected Elements:

- `iframe[name="fcacfdd8bd3ec61c5"], #u_0_1_70`
- `iframe[name="fcacfdd8bd3ec61c5"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_d_nn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_c_FN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_5_xc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_b_3o > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_a_ON > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fcacfdd8bd3ec61c5"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 53

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid--single`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fcacfdd8bd3ec61c5"], ._2lqh`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_d_nn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_d_nn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_d_nn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_l_lR > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_l_lR > table > tbody > tr > ._51mw`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_c_FN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_c_FN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_1a_l7 > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_17_6k > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_18_vB > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_16_R9 > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_19_w2 > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_c_FN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #feed_subtitle_1367625992068249\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fcacfdd8bd3ec61c5"], #feed_subtitle_1367625992068249\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fcacfdd8bd3ec61c5"], #id_69e0cbde25f008200456429 > p:nth-child(1)`
- `iframe[name="fcacfdd8bd3ec61c5"], #id_69e0cbde25f008200456429 > p:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_i_jF > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_i_jF > table > tbody > tr > ._51mw`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_5_xc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_10_lM > .uiScaledImageContainer`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_11_6c > .uiScaledImageContainer`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_z_\/E > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_12_5m > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_y_UV > ._46-h`
- `iframe[name="fcacfdd8bd3ec61c5"], ._52d9`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_5_xc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #feed_subtitle_1567160728744839\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fcacfdd8bd3ec61c5"], #feed_subtitle_1567160728744839\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fcacfdd8bd3ec61c5"], #id_69e0cbde265242035744586 > p:nth-child(1)`
- `iframe[name="fcacfdd8bd3ec61c5"], #id_69e0cbde265242035744586 > p:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_7_81 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_7_81 > table > tbody > tr > ._51mw`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_b_3o > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_b_3o > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_b_3o > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_r_L8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_r_L8 > table > tbody > tr > ._51mw`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_a_ON > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_a_ON > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_a_ON > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_o_is > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_o_is > table > tbody > tr > ._51mw`
- `iframe[name="fcacfdd8bd3ec61c5"], #u_1_1d_Vn`
- `iframe[name="fcacfdd8bd3ec61c5"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
