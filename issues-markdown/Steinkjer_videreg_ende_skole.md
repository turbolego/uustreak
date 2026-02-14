# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-02-14T00:30:36.676Z
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

- `iframe[name="fc74fe9a8334fe06b"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc74fe9a8334fe06b"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="fc74fe9a8334fe06b"], abbr[data-utime="1770996848"] > .timestampContent`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1517215850405994\:4\:0 > ._1atc.fsm.fwn > .fcg`

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

- `iframe[name="fc74fe9a8334fe06b"], #u_0_1_Or`
- `iframe[name="fc74fe9a8334fe06b"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_5_In > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_p_eC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_8_rx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_7_D3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_6_lK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc74fe9a8334fe06b"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 62

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fc74fe9a8334fe06b"], ._2lqh`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_5_In > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_x_FH > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_w_be > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_11_nq > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_10_tq > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_14_tW > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_14_tW > ._52d9`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_5_In > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1517215850405994\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1517215850405994\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250e9290251481255 > p`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_g_2s > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_g_2s > table > tbody > tr > ._51mw`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_p_eC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_p_eC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_p_eC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_s_ER > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_s_ER > table > tbody > tr > ._51mw`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_8_rx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_16_Yw > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_1h_\/z > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_8_rx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1465801735554988\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1465801735554988\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250ed106387278350 > p`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_j_rz > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_j_rz > table > tbody > tr > ._51mw`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_7_D3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250eedb9468676953 > p:nth-child(1)`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250eedb9468676953 > p:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250eedb9468676953 > .text_exposed_hide:nth-child(3)`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250eedb9468676953 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_17_\/u > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_1b_Be > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_18_Kf > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_1a_ak > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_19_pS > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_m_dq > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_m_dq > table > tbody > tr > ._51mw`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_6_lK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_y_nf > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_13_cs > .uiScaledImageContainer`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_12_ZG > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_1f_y7 > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_z_yd > ._46-h`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_z_yd > ._52d9`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_6_lK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1510783451049234\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fc74fe9a8334fe06b"], #feed_subtitle_1510783451049234\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250f1d97021473417 > p:nth-child(1)`
- `iframe[name="fc74fe9a8334fe06b"], #id_698fc2250f1d97021473417 > p:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_d_pT > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_d_pT > table > tbody > tr > ._51mw`
- `iframe[name="fc74fe9a8334fe06b"], #u_1_1k_BM`
- `iframe[name="fc74fe9a8334fe06b"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
