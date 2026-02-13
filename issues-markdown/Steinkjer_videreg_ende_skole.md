# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-02-13T00:37:23.409Z
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

- `iframe[name="feb826c70929c4c9b"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="feb826c70929c4c9b"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- `iframe[name="feb826c70929c4c9b"], abbr[data-utime="1770751861"] > .timestampContent`
- `iframe[name="feb826c70929c4c9b"], #feed_subtitle_1465801735554988\:4\:0 > ._1atc.fsm.fwn > .fcg`
- `iframe[name="feb826c70929c4c9b"], #u_1_g_kb > ._2165._2pi4[title="Like"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_f_ZE > table > tbody > tr > ._435r:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Comment"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_h_1N > ._50sk._2pi4[title="Share"]`

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
- **Count:** 8

#### Affected Elements:

- `iframe[name="feb826c70929c4c9b"], #u_0_1_ul`
- `iframe[name="feb826c70929c4c9b"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_5_HX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_p_km > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_6_uo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], #u_1_7_ih > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], ._2l7q > a[target="_blank"]`
- `iframe[name="feb826c70929c4c9b"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 54

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="feb826c70929c4c9b"], ._2lqh`
- `iframe[name="feb826c70929c4c9b"], #u_1_5_HX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feb826c70929c4c9b"], #u_1_u_ce > .uiScaledImageContainer`
- `iframe[name="feb826c70929c4c9b"], #u_1_17_Vm > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_5_HX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="feb826c70929c4c9b"], #feed_subtitle_1465801735554988\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="feb826c70929c4c9b"], #feed_subtitle_1465801735554988\:4\:0 > .z_c3pyo1brp`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abd68b1d66805250 > p`
- `iframe[name="feb826c70929c4c9b"], #u_1_f_ZE > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_f_ZE > table > tbody > tr > ._51mw`
- `iframe[name="feb826c70929c4c9b"], #u_1_p_km > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abdb7d9404432764 > p:nth-child(1)`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abdb7d9404432764 > p:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], .text_exposed_hide:nth-child(3)`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abdb7d9404432764 > .text_exposed_hide:nth-child(5)`
- `iframe[name="feb826c70929c4c9b"], #u_1_z_hu > .uiScaledImageContainer`
- `iframe[name="feb826c70929c4c9b"], #u_1_y_sU > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_10_c\/ > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_x_pb > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_w_bb > .uiScaledImageContainer`
- `iframe[name="feb826c70929c4c9b"], #u_1_r_N7 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_r_N7 > table > tbody > tr > ._51mw`
- `iframe[name="feb826c70929c4c9b"], #u_1_6_uo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feb826c70929c4c9b"], #u_1_15_pT > .uiScaledImageContainer`
- `iframe[name="feb826c70929c4c9b"], #u_1_16_H9 > .uiScaledImageContainer`
- `iframe[name="feb826c70929c4c9b"], #u_1_13_sZ > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_1a_2\+ > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_14_p0 > ._46-h`
- `iframe[name="feb826c70929c4c9b"], ._52d9`
- `iframe[name="feb826c70929c4c9b"], #u_1_6_uo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="feb826c70929c4c9b"], #feed_subtitle_1510783451049234\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="feb826c70929c4c9b"], #feed_subtitle_1510783451049234\:4\:0 > .z_c3pyo1brp`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abe6bc1820263929 > p:nth-child(1)`
- `iframe[name="feb826c70929c4c9b"], #id_698e723abe6bc1820263929 > p:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_m_8T > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_m_8T > table > tbody > tr > ._51mw`
- `iframe[name="feb826c70929c4c9b"], #u_1_7_ih > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feb826c70929c4c9b"], #u_1_7_ih > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="feb826c70929c4c9b"], #u_1_v_qp > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_11_Qf > ._46-h`
- `iframe[name="feb826c70929c4c9b"], #u_1_c_\/C > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_c_\/C > table > tbody > tr > ._51mw`
- `iframe[name="feb826c70929c4c9b"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feb826c70929c4c9b"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="feb826c70929c4c9b"], #u_1_i_k\+ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feb826c70929c4c9b"], #u_1_i_k\+ > table > tbody > tr > ._51mw`
- `iframe[name="feb826c70929c4c9b"], #u_1_1d_Ae`
- `iframe[name="feb826c70929c4c9b"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
