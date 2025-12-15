# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-12-15T00:26:19.757Z
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

- `iframe[name="f541049b86de4850e"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f541049b86de4850e"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f541049b86de4850e"], abbr[data-utime="1765548696"] > .timestampContent`

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

- `iframe[name="f541049b86de4850e"], #u_0_1_rH`
- `iframe[name="f541049b86de4850e"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f541049b86de4850e"], #u_1_b_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f541049b86de4850e"], #u_1_5_HF > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f541049b86de4850e"], #u_1_p_Rd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f541049b86de4850e"], #u_1_a_Bf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f541049b86de4850e"], #u_1_c_2I > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 49

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f541049b86de4850e"], ._2lqh`
- `iframe[name="f541049b86de4850e"], #u_1_b_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f541049b86de4850e"], #u_1_b_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="f541049b86de4850e"], #u_1_16_w5 > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_18_Yf > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_19_5W > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_17_Cd > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_g_m9 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #u_1_g_m9 > table > tbody > tr > ._51mw`
- `iframe[name="f541049b86de4850e"], #u_1_5_HF > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f541049b86de4850e"], #u_1_y_Z4 > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_z_3N > .uiScaledImageContainer`
- `iframe[name="f541049b86de4850e"], #u_1_w_tD > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_v_6\/ > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_x_qV > ._46-h`
- `iframe[name="f541049b86de4850e"], ._52d9`
- `iframe[name="f541049b86de4850e"], ._1nb_`
- `iframe[name="f541049b86de4850e"], ._1atc`
- `iframe[name="f541049b86de4850e"], .z_c3pyo1brp`
- `iframe[name="f541049b86de4850e"], #id_693f55a4a0e140609960702 > p`
- `iframe[name="f541049b86de4850e"], #u_1_7_iL > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #u_1_7_iL > table > tbody > tr > ._51mw`
- `iframe[name="f541049b86de4850e"], #u_1_p_Rd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f541049b86de4850e"], #u_1_p_Rd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f541049b86de4850e"], #u_1_r_p9 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #u_1_r_p9 > table > tbody > tr > ._51mw`
- `iframe[name="f541049b86de4850e"], #u_1_a_Bf > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f541049b86de4850e"], #id_693f55a4a112e3524493222 > p:nth-child(1)`
- `iframe[name="f541049b86de4850e"], #id_693f55a4a112e3524493222 > p:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #id_693f55a4a112e3524493222 > .text_exposed_hide:nth-child(3)`
- `iframe[name="f541049b86de4850e"], .text_exposed_hide:nth-child(5)`
- `iframe[name="f541049b86de4850e"], #u_1_15_hd > .uiScaledImageContainer`
- `iframe[name="f541049b86de4850e"], #u_1_13_St > .uiScaledImageContainer`
- `iframe[name="f541049b86de4850e"], #u_1_14_QI > ._46-h`
- `iframe[name="f541049b86de4850e"], #u_1_m_Nd > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #u_1_m_Nd > table > tbody > tr > ._51mw`
- `iframe[name="f541049b86de4850e"], #u_1_c_2I > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f541049b86de4850e"], #u_1_c_2I > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f541049b86de4850e"], #u_1_j_Qt > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f541049b86de4850e"], #u_1_j_Qt > table > tbody > tr > ._51mw`
- `iframe[name="f541049b86de4850e"], #u_1_1d_Wy`
- `iframe[name="f541049b86de4850e"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
