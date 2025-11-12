# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-11-12T00:29:58.780Z
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

- `iframe[name="fc2f6d4ede8650b18"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc2f6d4ede8650b18"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fc2f6d4ede8650b18"], abbr[data-utime="1762875474"] > .timestampContent`

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

- `iframe[name="fc2f6d4ede8650b18"], #u_0_1_tT`
- `iframe[name="fc2f6d4ede8650b18"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_7_Vf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_9_lf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_5_Y0 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_g_zJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_8_2t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 57

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fc2f6d4ede8650b18"], ._2lqh`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_7_Vf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_7_Vf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_11_QW > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_z_3G > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_18_WI > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_16_lK > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_17_Ye > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_17_Ye > ._52d9`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_i_AI > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_i_AI > table > tbody > tr > ._51mw`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_9_lf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_9_lf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1a_DH > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_14_pM > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_19_Kl > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_10_7V > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_15_\+l > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_15_\+l > ._52d9`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_o_7n > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_o_7n > table > tbody > tr > ._51mw`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_5_Y0 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1g_XN > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1e_kg > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1i_tl > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1f_D2 > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1h_9T > ._46-h`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1h_9T > ._52d9`
- `iframe[name="fc2f6d4ede8650b18"], ._1nb_`
- `iframe[name="fc2f6d4ede8650b18"], ._1atc`
- `iframe[name="fc2f6d4ede8650b18"], .z_c3pyo1brp`
- `iframe[name="fc2f6d4ede8650b18"], #id_6913d4fe044370725857910 > p`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_d_YZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_d_YZ > table > tbody > tr > ._51mw`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_g_zJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_g_zJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_r_N0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_r_N0 > table > tbody > tr > ._51mw`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_8_2t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_8_2t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_x_1y > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_w_rN > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_y_Qs > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_13_s4 > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_12_Il > .uiScaledImageContainer`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_12_Il > ._52d9`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_l_ty > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_l_ty > table > tbody > tr > ._51mw`
- `iframe[name="fc2f6d4ede8650b18"], #u_1_1l_NT`
- `iframe[name="fc2f6d4ede8650b18"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
