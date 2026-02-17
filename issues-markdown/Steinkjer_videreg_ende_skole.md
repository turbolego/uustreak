# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-02-17T00:32:04.252Z
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

- `iframe[name="fd2a64c86f8865252"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fd2a64c86f8865252"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fd2a64c86f8865252"], abbr[data-utime="1771228054"] > .timestampContent`

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

- `iframe[name="fd2a64c86f8865252"], #u_0_1_Bj`
- `iframe[name="fd2a64c86f8865252"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], ._2l7q > a[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], #u_1_7_aj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], #u_1_p_nr > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], #u_1_6_CA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fd2a64c86f8865252"], #u_1_8_NX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fd2a64c86f8865252"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 52

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fd2a64c86f8865252"], ._2lqh`
- `iframe[name="fd2a64c86f8865252"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fd2a64c86f8865252"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fd2a64c86f8865252"], #u_1_l_L4 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #u_1_l_L4 > table > tbody > tr > ._51mw`
- `iframe[name="fd2a64c86f8865252"], #u_1_7_aj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fd2a64c86f8865252"], #u_1_x_GG > .uiScaledImageContainer`
- `iframe[name="fd2a64c86f8865252"], #u_1_10_pJ > .uiScaledImageContainer`
- `iframe[name="fd2a64c86f8865252"], #u_1_y_Br > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_z_iq > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_w_04 > ._46-h`
- `iframe[name="fd2a64c86f8865252"], ._52d9`
- `iframe[name="fd2a64c86f8865252"], #u_1_7_aj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fd2a64c86f8865252"], #feed_subtitle_1517215850405994\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fd2a64c86f8865252"], #feed_subtitle_1517215850405994\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fc9f63a6d05897384 > p`
- `iframe[name="fd2a64c86f8865252"], #u_1_f_U3 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #u_1_f_U3 > table > tbody > tr > ._51mw`
- `iframe[name="fd2a64c86f8865252"], #u_1_p_nr > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fd2a64c86f8865252"], #u_1_p_nr > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fd2a64c86f8865252"], #u_1_p_nr > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fd2a64c86f8865252"], #u_1_s_0o > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #u_1_s_0o > table > tbody > tr > ._51mw`
- `iframe[name="fd2a64c86f8865252"], #u_1_6_CA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fd2a64c86f8865252"], #u_1_19_2v > .uiScaledImageContainer`
- `iframe[name="fd2a64c86f8865252"], #u_1_1b_Jd > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_6_CA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fd2a64c86f8865252"], #feed_subtitle_1465801735554988\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fd2a64c86f8865252"], #feed_subtitle_1465801735554988\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fc9fd293359702984 > p`
- `iframe[name="fd2a64c86f8865252"], #u_1_c_XW > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #u_1_c_XW > table > tbody > tr > ._51mw`
- `iframe[name="fd2a64c86f8865252"], #u_1_8_NX > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fca01692d95070247 > p:nth-child(1)`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fca01692d95070247 > p:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fca01692d95070247 > .text_exposed_hide:nth-child(3)`
- `iframe[name="fd2a64c86f8865252"], #id_6993b6fca01692d95070247 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fd2a64c86f8865252"], #u_1_12_Cq > .uiScaledImageContainer`
- `iframe[name="fd2a64c86f8865252"], #u_1_15_Mg > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_16_M6 > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_14_DU > ._46-h`
- `iframe[name="fd2a64c86f8865252"], #u_1_13_Dr > .uiScaledImageContainer`
- `iframe[name="fd2a64c86f8865252"], #u_1_i_TF > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fd2a64c86f8865252"], #u_1_i_TF > table > tbody > tr > ._51mw`
- `iframe[name="fd2a64c86f8865252"], #u_1_1e_Bq`
- `iframe[name="fd2a64c86f8865252"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
