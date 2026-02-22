# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-02-22T00:30:37.774Z
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

- `iframe[name="f23a3c32134510294"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f23a3c32134510294"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f23a3c32134510294"], abbr[data-utime="1771419674"] > .timestampContent`
- `iframe[name="f23a3c32134510294"], #u_1_j_Uy > ._2165._2pi4[title="Like"]`

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

- `iframe[name="f23a3c32134510294"], #u_0_1_U5`
- `iframe[name="f23a3c32134510294"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_6_li > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_6_li > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_g_mw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_g_mw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_7_Rs > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_h_bf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f23a3c32134510294"], #u_1_5_hV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f23a3c32134510294"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 44

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f23a3c32134510294"], ._2lqh`
- `iframe[name="f23a3c32134510294"], #u_1_6_li > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f23a3c32134510294"], #u_1_6_li > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f23a3c32134510294"], #u_1_i_iU > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f23a3c32134510294"], #u_1_i_iU > table > tbody > tr > ._51mw`
- `iframe[name="f23a3c32134510294"], #u_1_g_mw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f23a3c32134510294"], #u_1_g_mw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f23a3c32134510294"], #u_1_s_S1 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f23a3c32134510294"], #u_1_s_S1 > table > tbody > tr > ._51mw`
- `iframe[name="f23a3c32134510294"], #u_1_7_Rs > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f23a3c32134510294"], #u_1_z_CJ > .uiScaledImageContainer`
- `iframe[name="f23a3c32134510294"], #u_1_10_VX > .uiScaledImageContainer`
- `iframe[name="f23a3c32134510294"], #u_1_w_S0 > ._46-h`
- `iframe[name="f23a3c32134510294"], #u_1_x_Yj > ._46-h`
- `iframe[name="f23a3c32134510294"], #u_1_y_3z > ._46-h`
- `iframe[name="f23a3c32134510294"], ._52d9`
- `iframe[name="f23a3c32134510294"], #u_1_7_Rs > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f23a3c32134510294"], #feed_subtitle_1517215850405994\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f23a3c32134510294"], #feed_subtitle_1517215850405994\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f23a3c32134510294"], #id_699a4e26dc4443235108100 > p`
- `iframe[name="f23a3c32134510294"], #u_1_a_Yc > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f23a3c32134510294"], #u_1_a_Yc > table > tbody > tr > ._51mw`
- `iframe[name="f23a3c32134510294"], #u_1_h_bf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f23a3c32134510294"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f23a3c32134510294"], #u_1_h_bf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f23a3c32134510294"], #u_1_o_d\+ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f23a3c32134510294"], #u_1_o_d\+ > table > tbody > tr > ._51mw`
- `iframe[name="f23a3c32134510294"], #u_1_5_hV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f23a3c32134510294"], #u_1_11_8M > .uiScaledImageContainer`
- `iframe[name="f23a3c32134510294"], #u_1_15_QF > ._46-h`
- `iframe[name="f23a3c32134510294"], #u_1_5_hV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f23a3c32134510294"], #feed_subtitle_1465801735554988\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f23a3c32134510294"], #feed_subtitle_1465801735554988\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f23a3c32134510294"], #id_699a4e26dcc0a3074263051 > p`
- `iframe[name="f23a3c32134510294"], #u_1_d_NB > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f23a3c32134510294"], #u_1_d_NB > table > tbody > tr > ._51mw`
- `iframe[name="f23a3c32134510294"], #u_1_18_yR`
- `iframe[name="f23a3c32134510294"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
