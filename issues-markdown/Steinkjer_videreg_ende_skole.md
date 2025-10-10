# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-10T00:22:02.965Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f831dd2a29bef9984"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f831dd2a29bef9984"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f831dd2a29bef9984"], abbr[data-utime="1759662595"] > .timestampContent`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 8

#### Affected Elements:

- `iframe[name="f831dd2a29bef9984"], #u_0_1_V\+`
- `iframe[name="f831dd2a29bef9984"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_8_qw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_7_Ky > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], ._2l7q > a[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_6_ZV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_c_F4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 70

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f831dd2a29bef9984"], ._2lqh`
- `iframe[name="f831dd2a29bef9984"], #u_1_8_qw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f831dd2a29bef9984"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f831dd2a29bef9984"], #u_1_1d_N7 > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_1e_nB > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_1g_u\+ > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_19_Ew > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_1c_t7 > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_8_qw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1212509087579941\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1212509087579941\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f831dd2a29bef9984"], #u_1_8_qw > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_l_O0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_l_O0 > table > tbody > tr > ._51mw`
- `iframe[name="f831dd2a29bef9984"], #u_1_7_Ky > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f831dd2a29bef9984"], #u_1_14_H2 > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_y_iM > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_17_jY > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_w_fO > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_15_tH > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_15_tH > ._52d9`
- `iframe[name="f831dd2a29bef9984"], #u_1_7_Ky > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1400058018788445\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1400058018788445\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a509bcf9d83278706 > p`
- `iframe[name="f831dd2a29bef9984"], #u_1_e_ty > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_e_ty > table > tbody > tr > ._51mw`
- `iframe[name="f831dd2a29bef9984"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a509ec30584570371 > p:nth-child(1)`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a509ec30584570371 > p:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a509ec30584570371 > .text_exposed_hide:nth-child(3)`
- `iframe[name="f831dd2a29bef9984"], .text_exposed_hide:nth-child(5)`
- `iframe[name="f831dd2a29bef9984"], #u_1_h_X7 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_h_X7 > table > tbody > tr > ._51mw`
- `iframe[name="f831dd2a29bef9984"], #u_1_6_ZV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f831dd2a29bef9984"], #u_1_s_Vw > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_v_Qq > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_t_bN > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_u_zs > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_r_Pj > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_r_Pj > ._52d9`
- `iframe[name="f831dd2a29bef9984"], #u_1_6_ZV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1298032712121319\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1298032712121319\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f831dd2a29bef9984"], #u_1_6_ZV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f831dd2a29bef9984"], #u_1_o_Q7 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_o_Q7 > table > tbody > tr > ._51mw`
- `iframe[name="f831dd2a29bef9984"], #u_1_c_F4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f831dd2a29bef9984"], #u_1_18_qv > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_13_c6 > .uiScaledImageContainer`
- `iframe[name="f831dd2a29bef9984"], #u_1_x_05 > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_12_Xp > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_16_vU > ._46-h`
- `iframe[name="f831dd2a29bef9984"], #u_1_16_vU > ._52d9`
- `iframe[name="f831dd2a29bef9984"], #u_1_c_F4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1393172972810283\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f831dd2a29bef9984"], #feed_subtitle_1393172972810283\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a50a4c89593871084 > p:nth-child(1)`
- `iframe[name="f831dd2a29bef9984"], #id_68e851a50a4c89593871084 > p:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_z_pT > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f831dd2a29bef9984"], #u_1_z_pT > table > tbody > tr > ._51mw`
- `iframe[name="f831dd2a29bef9984"], #u_1_1j_z1`
- `iframe[name="f831dd2a29bef9984"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
