# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-11-28T00:34:43.460Z
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

- `iframe[name="f8dc29ef1c6c59b68"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f8dc29ef1c6c59b68"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f8dc29ef1c6c59b68"], abbr[data-utime="1764187399"] > .timestampContent`

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
- **Count:** 9

#### Affected Elements:

- `iframe[name="f8dc29ef1c6c59b68"], #u_0_1_VA`
- `iframe[name="f8dc29ef1c6c59b68"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_5_fh > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_5_fh > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_7_OX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_8_jU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_8_jU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_6_S3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_9_Bn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 50

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f8dc29ef1c6c59b68"], ._2lqh`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_5_fh > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a86a3f8932074519 > p:nth-child(1)`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a86a3f8932074519 > p:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a86a3f8932074519 > p:nth-child(3)`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a86a3f8932074519 > .text_exposed_hide`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_j_DO > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_j_DO > table > tbody > tr > ._51mw`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_7_OX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_7_OX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_12_Zb > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_y_u7 > .uiScaledImageContainer`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_x_gZ > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_q_Y\/ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_q_Y\/ > table > tbody > tr > ._51mw`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_8_jU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_8_jU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_d_It > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_d_It > table > tbody > tr > ._51mw`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_6_S3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_16_1b > .uiScaledImageContainer`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_u_5A > .uiScaledImageContainer`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_v_I9 > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_w_dq > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_17_kQ > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], ._52d9`
- `iframe[name="f8dc29ef1c6c59b68"], ._1nb_`
- `iframe[name="f8dc29ef1c6c59b68"], ._1atc`
- `iframe[name="f8dc29ef1c6c59b68"], .z_c3pyo1brp`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a877102684223810 > p:nth-child(1)`
- `iframe[name="f8dc29ef1c6c59b68"], #id_6928ee1a877102684223810 > p:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_n_bY > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_n_bY > table > tbody > tr > ._51mw`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_9_Bn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_9_Bn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_11_yv > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_z_4V > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_10_nY > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_14_F9 > ._46-h`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_g_hT > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_g_hT > table > tbody > tr > ._51mw`
- `iframe[name="f8dc29ef1c6c59b68"], #u_1_1a_pX`
- `iframe[name="f8dc29ef1c6c59b68"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
