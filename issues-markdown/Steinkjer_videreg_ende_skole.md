# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-11-22T00:21:55.427Z
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

- `iframe[name="f5f4e6cf0de3912f5"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f5f4e6cf0de3912f5"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f5f4e6cf0de3912f5"], abbr[data-utime="1763755356"] > .timestampContent`
- `iframe[name="f5f4e6cf0de3912f5"], #feed_subtitle_1447148030746110\:4\:0 > ._1atc.fsm.fwn > .fcg`

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

- `iframe[name="f5f4e6cf0de3912f5"], #u_0_1_Vg`
- `iframe[name="f5f4e6cf0de3912f5"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_9_T\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_8_KD > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], ._2l7q > a[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_7_Hy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_6_GK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 55

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f5f4e6cf0de3912f5"], ._2lqh`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_9_T\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_1a_7L > .uiScaledImageContainer`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_y_PM > .uiScaledImageContainer`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_11_A5 > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_u_4z > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_w_V1 > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_w_V1 > ._52d9`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_9_T\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f5f4e6cf0de3912f5"], #feed_subtitle_1447148030746110\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f5f4e6cf0de3912f5"], #feed_subtitle_1447148030746110\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f5f4e6cf0de3912f5"], #id_6921021ad16fe1c52139870 > p:nth-child(1)`
- `iframe[name="f5f4e6cf0de3912f5"], #id_6921021ad16fe1c52139870 > p:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_h_0o > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_h_0o > table > tbody > tr > ._51mw`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_8_KD > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_8_KD > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_16_uj > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_15_Et > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_12_1Q > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_14_6l > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_k_7e > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_k_7e > table > tbody > tr > ._51mw`
- `iframe[name="f5f4e6cf0de3912f5"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5f4e6cf0de3912f5"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_q_sD > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_q_sD > table > tbody > tr > ._51mw`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_7_Hy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_7_Hy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_13_os > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_17_s\+ > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_e_p0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_e_p0 > table > tbody > tr > ._51mw`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_6_GK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_x_EO > .uiScaledImageContainer`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_10_\+s > .uiScaledImageContainer`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_z_xX > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_1b_Ta > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_v_3u > ._46-h`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_v_3u > ._52d9`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_6_GK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f5f4e6cf0de3912f5"], #feed_subtitle_1441124821348431\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f5f4e6cf0de3912f5"], #feed_subtitle_1441124821348431\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f5f4e6cf0de3912f5"], #id_6921021ad1d6c7867279869 > p`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_n_Nm > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_n_Nm > table > tbody > tr > ._51mw`
- `iframe[name="f5f4e6cf0de3912f5"], #u_1_1f_jB`
- `iframe[name="f5f4e6cf0de3912f5"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
