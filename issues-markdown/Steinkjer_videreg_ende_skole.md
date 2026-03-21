# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-03-21T00:29:09.476Z
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

- `iframe[name="fc3d5ed42c5d83a31"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc3d5ed42c5d83a31"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc3d5ed42c5d83a31"], abbr[data-utime="1774023452"] > .timestampContent`

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

- `iframe[name="fc3d5ed42c5d83a31"], #u_0_1_Qb`
- `iframe[name="fc3d5ed42c5d83a31"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_7_PN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_6_iA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_8_YG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], ._2l7q > a[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_5_JQ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_p_eb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 60

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fc3d5ed42c5d83a31"], ._2lqh`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_7_PN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_16_\+X > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_19_mf > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_17_Fo > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_18_M3 > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_15_o6 > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_15_o6 > ._52d9`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_7_PN > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fc3d5ed42c5d83a31"], #feed_subtitle_929155543207543\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fc3d5ed42c5d83a31"], #feed_subtitle_929155543207543\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce20f51931566558 > p:nth-child(1)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce20f51931566558 > p:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_j_dg > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_j_dg > table > tbody > tr > ._51mw`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_6_iA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce24742518132852 > p:nth-child(1)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce24742518132852 > p:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce24742518132852 > .text_exposed_hide`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_10_kt > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_14_Vj > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_z_2i > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_11_9i > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_12_pF > .uiScaledImageContainer`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_12_pF > ._52d9`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_d_yO > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_d_yO > table > tbody > tr > ._51mw`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_8_YG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_8_YG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_8_YG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fc3d5ed42c5d83a31"], #feed_subtitle_1570425561369089\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fc3d5ed42c5d83a31"], #feed_subtitle_1570425561369089\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2ac54f15813484 > p:nth-child(1)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2ac54f15813484 > p:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2ac54f15813484 > p:nth-child(3)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_g_hP > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_g_hP > table > tbody > tr > ._51mw`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_5_JQ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2faa7432764517 > p:nth-child(1)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2faa7432764517 > p:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], .text_exposed_hide:nth-child(3)`
- `iframe[name="fc3d5ed42c5d83a31"], #id_69bde64ce2faa7432764517 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_13_14 > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_y_gl > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_x_rt > ._46-h`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_m_63 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_m_63 > table > tbody > tr > ._51mw`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_p_eb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_p_eb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_p_eb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_s_UO > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_s_UO > table > tbody > tr > ._51mw`
- `iframe[name="fc3d5ed42c5d83a31"], #u_1_1e_RO`
- `iframe[name="fc3d5ed42c5d83a31"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
