# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-13T00:26:20.180Z
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

- `iframe[name="f64c0e1caa4c394cd"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f64c0e1caa4c394cd"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f64c0e1caa4c394cd"], abbr[data-utime="1759662595"] > .timestampContent`

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

- `iframe[name="f64c0e1caa4c394cd"], #u_0_1_UC`
- `iframe[name="f64c0e1caa4c394cd"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_5_YM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_6_ph > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], ._2l7q > a[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_7_Yx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_8_\+r > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

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
- `iframe[name="f64c0e1caa4c394cd"], ._2lqh`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_5_YM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f64c0e1caa4c394cd"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_u_O\/ > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_y_GF > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_x_dQ > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_v_Um > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_w_py > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_5_YM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1212509087579941\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1212509087579941\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_5_YM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_e_JZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_e_JZ > table > tbody > tr > ._51mw`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_6_ph > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1b_cd > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1a_kd > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_19_jT > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_15_\+c > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_16_Qo > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_16_Qo > ._52d9`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_6_ph > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1400058018788445\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1400058018788445\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722db1526e97484702 > p`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_q_AT > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_q_AT > table > tbody > tr > ._51mw`
- `iframe[name="f64c0e1caa4c394cd"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722db5960595299560 > p:nth-child(1)`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722db5960595299560 > p:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722db5960595299560 > .text_exposed_hide:nth-child(3)`
- `iframe[name="f64c0e1caa4c394cd"], .text_exposed_hide:nth-child(5)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_h_g0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_h_g0 > table > tbody > tr > ._51mw`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_7_Yx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_10_o1 > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_14_qG > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_11_bF > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_12_rI > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_13_E9 > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_13_E9 > ._52d9`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_7_Yx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1298032712121319\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1298032712121319\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_7_Yx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_n_MA > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_n_MA > table > tbody > tr > ._51mw`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_8_\+r > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1c_eY > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1d_5h > .uiScaledImageContainer`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_18_Xz > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_17_SC > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1e_P9 > ._46-h`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1e_P9 > ._52d9`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_8_\+r > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1393172972810283\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f64c0e1caa4c394cd"], #feed_subtitle_1393172972810283\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722dbe9e9e15547185 > p:nth-child(1)`
- `iframe[name="f64c0e1caa4c394cd"], #id_68ec4722dbe9e9e15547185 > p:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_k_Ew > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_k_Ew > table > tbody > tr > ._51mw`
- `iframe[name="f64c0e1caa4c394cd"], #u_1_1j_PR`
- `iframe[name="f64c0e1caa4c394cd"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
