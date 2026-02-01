# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-01-31T00:31:39.822Z
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

- `iframe[name="feda58cde501dac6c"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="feda58cde501dac6c"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="feda58cde501dac6c"], abbr[data-utime="1769781253"] > .timestampContent`

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

- `iframe[name="feda58cde501dac6c"], #u_0_1_L8`
- `iframe[name="feda58cde501dac6c"], .lfloat._3-8_`
- `iframe[name="feda58cde501dac6c"], #u_1_6_j5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="feda58cde501dac6c"], #u_1_7_0x > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="feda58cde501dac6c"], #u_1_8_\/B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="feda58cde501dac6c"], #u_1_5_cE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="feda58cde501dac6c"], #u_1_11_jF > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 43

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="feda58cde501dac6c"], ._2lqh`
- `iframe[name="feda58cde501dac6c"], #u_1_6_j5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feda58cde501dac6c"], #u_1_6_j5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="feda58cde501dac6c"], #u_1_t_OQ > .uiScaledImageContainer`
- `iframe[name="feda58cde501dac6c"], #u_1_u_0O > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_d_Qn > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feda58cde501dac6c"], #u_1_d_Qn > table > tbody > tr > ._51mw`
- `iframe[name="feda58cde501dac6c"], #u_1_7_0x > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feda58cde501dac6c"], #u_1_7_0x > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="feda58cde501dac6c"], #u_1_p_JM > .uiScaledImageContainer`
- `iframe[name="feda58cde501dac6c"], #u_1_q_xs > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_s_W1 > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_y_Tz > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_r_w3 > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_g_4V > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feda58cde501dac6c"], #u_1_g_4V > table > tbody > tr > ._51mw`
- `iframe[name="feda58cde501dac6c"], #u_1_8_\/B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feda58cde501dac6c"], #id_697d4d65260fe1e44384073 > p`
- `iframe[name="feda58cde501dac6c"], #id_697d4d65260fe1e44384073 > .text_exposed_hide`
- `iframe[name="feda58cde501dac6c"], #u_1_10_Wq > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_v_g9 > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_m_6L > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feda58cde501dac6c"], #u_1_m_6L > table > tbody > tr > ._51mw`
- `iframe[name="feda58cde501dac6c"], #u_1_5_cE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feda58cde501dac6c"], #u_1_5_cE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="feda58cde501dac6c"], #u_1_z_N6 > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_w_Hw > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_x_UW > ._46-h`
- `iframe[name="feda58cde501dac6c"], #u_1_j_28 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feda58cde501dac6c"], #u_1_j_28 > table > tbody > tr > ._51mw`
- `iframe[name="feda58cde501dac6c"], #u_1_11_jF > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="feda58cde501dac6c"], #u_1_11_jF > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="feda58cde501dac6c"], #u_1_14_OP > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="feda58cde501dac6c"], #u_1_14_OP > table > tbody > tr > ._51mw`
- `iframe[name="feda58cde501dac6c"], #u_1_1d_Yt`
- `iframe[name="feda58cde501dac6c"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
