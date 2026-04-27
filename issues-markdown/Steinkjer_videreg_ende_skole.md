# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-04-27T08:03:30.879Z
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

- `iframe[name="f18d2ed34c7dce67d"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f18d2ed34c7dce67d"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f18d2ed34c7dce67d"], abbr[data-utime="1777045947"] > .timestampContent`

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

- `iframe[name="f18d2ed34c7dce67d"], #u_0_1_Ti`
- `iframe[name="f18d2ed34c7dce67d"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_5_P3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_f_3w > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_i_hv > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_6_z1 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f18d2ed34c7dce67d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

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
- `iframe[name="f18d2ed34c7dce67d"], ._2lqh`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_5_P3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_1a_78 > .uiScaledImageContainer`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_17_ib > .uiScaledImageContainer`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_1b_JE > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_19_fG > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_18_CR > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_18_CR > ._52d9`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_5_P3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f18d2ed34c7dce67d"], #feed_subtitle_1579269280867317\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f18d2ed34c7dce67d"], #feed_subtitle_1579269280867317\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2cd039f67002975 > p:nth-child(1)`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2cd039f67002975 > p:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_9_1b > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_9_1b > table > tbody > tr > ._51mw`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_f_3w > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2d0223d60724493 > p`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2d0223d60724493 > .text_exposed_hide`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_14_GU > .uiScaledImageContainer`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_10_Bd > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_x_I4 > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_13_0i > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_v_gr > .uiScaledImageContainer`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_v_gr > ._52d9`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_j_00 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_j_00 > table > tbody > tr > ._51mw`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_i_hv > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2d2f84e35630889 > p:nth-child(1)`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2d2f84e35630889 > p:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #id_69ef184b2d2f84e35630889 > .text_exposed_hide`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_w_Zc > .uiScaledImageContainer`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_z_De > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_y_we > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_12_O5 > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_11_IP > ._46-h`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_11_IP > ._52d9`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_s_jt > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_s_jt > table > tbody > tr > ._51mw`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_6_z1 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_6_z1 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f18d2ed34c7dce67d"], #feed_subtitle_976988681943999\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f18d2ed34c7dce67d"], #feed_subtitle_976988681943999\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_c_KD > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_c_KD > table > tbody > tr > ._51mw`
- `iframe[name="f18d2ed34c7dce67d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f18d2ed34c7dce67d"], div:nth-child(2) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_m_Wq > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_m_Wq > table > tbody > tr > ._51mw`
- `iframe[name="f18d2ed34c7dce67d"], #u_1_1e_qF`
- `iframe[name="f18d2ed34c7dce67d"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
