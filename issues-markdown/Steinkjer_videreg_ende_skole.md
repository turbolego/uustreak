# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-11-21T00:22:55.704Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 7

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

- `iframe[name="fbff2c5b5716f705f"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fbff2c5b5716f705f"], div[role="feed"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#header`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `iframe[name="fbff2c5b5716f705f"], #u_0_1_H\+`
- `iframe[name="fbff2c5b5716f705f"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], ._2l7q > a[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_5_Dd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_6_96 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_7_SG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_8_PL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_p_8h > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 47

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fbff2c5b5716f705f"], ._2lqh`
- `iframe[name="fbff2c5b5716f705f"], #u_1_5_Dd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fbff2c5b5716f705f"], #u_1_5_Dd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fbff2c5b5716f705f"], #u_1_l_RK > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fbff2c5b5716f705f"], #u_1_l_RK > table > tbody > tr > ._51mw`
- `iframe[name="fbff2c5b5716f705f"], #u_1_6_96 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fbff2c5b5716f705f"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fbff2c5b5716f705f"], #u_1_11_\/B > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_12_vg > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_f_sf > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fbff2c5b5716f705f"], #u_1_f_sf > table > tbody > tr > ._51mw`
- `iframe[name="fbff2c5b5716f705f"], #u_1_7_SG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fbff2c5b5716f705f"], #u_1_v_l6 > .uiScaledImageContainer`
- `iframe[name="fbff2c5b5716f705f"], #u_1_u_sJ > .uiScaledImageContainer`
- `iframe[name="fbff2c5b5716f705f"], #u_1_w_C2 > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_10_fB > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_x_\/u > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], ._52d9`
- `iframe[name="fbff2c5b5716f705f"], #u_1_7_SG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fbff2c5b5716f705f"], #feed_subtitle_1441124821348431\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fbff2c5b5716f705f"], #feed_subtitle_1441124821348431\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fbff2c5b5716f705f"], #id_691fb0d71a8600069302849 > p`
- `iframe[name="fbff2c5b5716f705f"], #u_1_c_US > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fbff2c5b5716f705f"], #u_1_c_US > table > tbody > tr > ._51mw`
- `iframe[name="fbff2c5b5716f705f"], #u_1_8_PL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fbff2c5b5716f705f"], #u_1_1g_Vs > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_1f_\/P > ._46-h`
- `iframe[name="fbff2c5b5716f705f"], #u_1_8_PL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fbff2c5b5716f705f"], #feed_subtitle_1431273839009853\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fbff2c5b5716f705f"], #feed_subtitle_1431273839009853\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fbff2c5b5716f705f"], #u_1_8_PL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fbff2c5b5716f705f"], #u_1_i_lE > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fbff2c5b5716f705f"], #u_1_i_lE > table > tbody > tr > ._51mw`
- `iframe[name="fbff2c5b5716f705f"], #u_1_16_Vm`
- `iframe[name="fbff2c5b5716f705f"], #u_1_p_8h > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fbff2c5b5716f705f"], #u_1_p_8h > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fbff2c5b5716f705f"], #u_1_r_N0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fbff2c5b5716f705f"], #u_1_r_N0 > table > tbody > tr > ._51mw`
- `iframe[name="fbff2c5b5716f705f"], #u_1_1j_Iw`
- `iframe[name="fbff2c5b5716f705f"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
