# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-04-28T04:34:14.351Z
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

- `iframe[name="ffdb18ddc981cdbfa"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ffdb18ddc981cdbfa"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ffdb18ddc981cdbfa"], abbr[data-utime="1777279082"] > .timestampContent`

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

- `iframe[name="ffdb18ddc981cdbfa"], #u_0_1_Q6`
- `iframe[name="ffdb18ddc981cdbfa"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_9_44 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_8_n5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_5_Mi > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_7_vH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffdb18ddc981cdbfa"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`

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
- `iframe[name="ffdb18ddc981cdbfa"], ._2lqh`
- `iframe[name="ffdb18ddc981cdbfa"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffdb18ddc981cdbfa"], div:nth-child(2) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_n_EL > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_n_EL > table > tbody > tr > ._51mw`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_9_44 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_w_I\/ > .uiScaledImageContainer`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_x_gk > .uiScaledImageContainer`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_v_GV > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_y_mA > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_z_MM > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_z_MM > ._52d9`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_9_44 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="ffdb18ddc981cdbfa"], #feed_subtitle_1579269280867317\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="ffdb18ddc981cdbfa"], #feed_subtitle_1579269280867317\:4\:0 > .z_c3pyo1brp`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10b1c98f84775023 > p:nth-child(1)`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10b1c98f84775023 > p:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_f_Y3 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_f_Y3 > table > tbody > tr > ._51mw`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_8_n5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10ba0b9970975115 > p`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10ba0b9970975115 > .text_exposed_hide`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_14_sS > .uiScaledImageContainer`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_1a_wc > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_13_85 > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_16_L\/ > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_15_V0 > .uiScaledImageContainer`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_15_V0 > ._52d9`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_k_LR > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_k_LR > table > tbody > tr > ._51mw`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_5_Mi > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10c05d2c58154803 > p:nth-child(1)`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10c05d2c58154803 > p:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #id_69f038c10c05d2c58154803 > .text_exposed_hide`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_11_Kv > .uiScaledImageContainer`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_18_ci > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_17_Bu > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_19_P3 > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_12_\+c > ._46-h`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_12_\+c > ._52d9`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_q_qi > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_q_qi > table > tbody > tr > ._51mw`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_7_vH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_7_vH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="ffdb18ddc981cdbfa"], #feed_subtitle_976988681943999\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="ffdb18ddc981cdbfa"], #feed_subtitle_976988681943999\:4\:0 > .z_c3pyo1brp`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_c_qB > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_c_qB > table > tbody > tr > ._51mw`
- `iframe[name="ffdb18ddc981cdbfa"], #u_1_1e_lF`
- `iframe[name="ffdb18ddc981cdbfa"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
