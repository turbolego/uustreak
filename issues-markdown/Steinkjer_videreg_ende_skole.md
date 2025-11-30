# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-11-30T00:35:21.647Z
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

- `iframe[name="f4e379bc66819bd34"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f4e379bc66819bd34"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f4e379bc66819bd34"], abbr[data-utime="1764345826"] > .timestampContent`

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
- **Count:** 10

#### Affected Elements:

- `iframe[name="f4e379bc66819bd34"], #u_0_1_ZK`
- `iframe[name="f4e379bc66819bd34"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_6_Zj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_9_D5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_8_Pq > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_8_Pq > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_7_c4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_5_73 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f4e379bc66819bd34"], #u_1_5_73 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

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
- `iframe[name="f4e379bc66819bd34"], ._2lqh`
- `iframe[name="f4e379bc66819bd34"], #u_1_6_Zj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f4e379bc66819bd34"], ._1nb_`
- `iframe[name="f4e379bc66819bd34"], ._1atc`
- `iframe[name="f4e379bc66819bd34"], .z_c3pyo1brp`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430baa05760283509 > p:nth-child(1)`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430baa05760283509 > p:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430baa05760283509 > p:nth-child(3)`
- `iframe[name="f4e379bc66819bd34"], .text_exposed_hide:nth-child(4)`
- `iframe[name="f4e379bc66819bd34"], #u_1_d_pt > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #u_1_d_pt > table > tbody > tr > ._51mw`
- `iframe[name="f4e379bc66819bd34"], #u_1_9_D5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f4e379bc66819bd34"], #u_1_9_D5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f4e379bc66819bd34"], #u_1_v_TE > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_10_yO > .uiScaledImageContainer`
- `iframe[name="f4e379bc66819bd34"], #u_1_12_3p > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_x_MZ > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_y_jQ > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_p_n4 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #u_1_p_n4 > table > tbody > tr > ._51mw`
- `iframe[name="f4e379bc66819bd34"], #u_1_8_Pq > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430c0901874509678 > p:nth-child(1)`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430c0901874509678 > p:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430c0901874509678 > p:nth-child(3)`
- `iframe[name="f4e379bc66819bd34"], #id_692b91430c0901874509678 > .text_exposed_hide`
- `iframe[name="f4e379bc66819bd34"], #u_1_j_v7 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #u_1_j_v7 > table > tbody > tr > ._51mw`
- `iframe[name="f4e379bc66819bd34"], #u_1_7_c4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f4e379bc66819bd34"], #u_1_7_c4 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f4e379bc66819bd34"], #u_1_z_AJ > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_11_QO > .uiScaledImageContainer`
- `iframe[name="f4e379bc66819bd34"], #u_1_w_N9 > ._46-h`
- `iframe[name="f4e379bc66819bd34"], #u_1_m_mK > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #u_1_m_mK > table > tbody > tr > ._51mw`
- `iframe[name="f4e379bc66819bd34"], #u_1_5_73 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f4e379bc66819bd34"], #u_1_5_73 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f4e379bc66819bd34"], #u_1_g_X0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f4e379bc66819bd34"], #u_1_g_X0 > table > tbody > tr > ._51mw`
- `iframe[name="f4e379bc66819bd34"], #u_1_16_cb`
- `iframe[name="f4e379bc66819bd34"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
