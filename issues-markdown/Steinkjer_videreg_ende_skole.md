# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-03-16T00:36:14.884Z
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

- `iframe[name="f3dade2a8ac1d8083"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f3dade2a8ac1d8083"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f3dade2a8ac1d8083"], abbr[data-utime="1773406565"] > .timestampContent`
- `iframe[name="f3dade2a8ac1d8083"], ._1atc > .fcg`

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

- `iframe[name="f3dade2a8ac1d8083"], #u_0_1_BD`
- `iframe[name="f3dade2a8ac1d8083"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_6_2\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], ._2l7q > a[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_8_MO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_p_8V > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_5_ve > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f3dade2a8ac1d8083"], img[height="181"]`

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
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f3dade2a8ac1d8083"], ._2lqh`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_6_2\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_10_rT > .uiScaledImageContainer`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_y_Gm > .uiScaledImageContainer`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_x_\/B > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_z_N\/ > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_w_Gt > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_w_Gt > ._52d9`
- `iframe[name="f3dade2a8ac1d8083"], ._1nb_`
- `iframe[name="f3dade2a8ac1d8083"], ._1atc`
- `iframe[name="f3dade2a8ac1d8083"], .z_c3pyo1brp`
- `iframe[name="f3dade2a8ac1d8083"], #id_69b750782f6111885616481 > p:nth-child(1)`
- `iframe[name="f3dade2a8ac1d8083"], #id_69b750782f6111885616481 > p:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_f_g1 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_f_g1 > table > tbody > tr > ._51mw`
- `iframe[name="f3dade2a8ac1d8083"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f3dade2a8ac1d8083"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_l_5O > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_l_5O > table > tbody > tr > ._51mw`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_8_MO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_8_MO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_17_Wg > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_13_vq > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_15_\+E > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_19_WN > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_16_GT > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_16_GT > ._52d9`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_i_2B > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_i_2B > table > tbody > tr > ._51mw`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_p_8V > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_p_8V > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_p_8V > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_s_p5 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_s_p5 > table > tbody > tr > ._51mw`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_5_ve > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_5_ve > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_12_BM > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_18_uR > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_1a_Os > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_14_Ra > ._46-h`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_c_hy > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_c_hy > table > tbody > tr > ._51mw`
- `iframe[name="f3dade2a8ac1d8083"], #u_1_1g_ss`
- `iframe[name="f3dade2a8ac1d8083"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
