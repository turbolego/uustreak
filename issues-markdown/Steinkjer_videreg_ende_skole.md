# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-04-13T20:03:36.105Z
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

- `iframe[name="ffa58e734d5f327d8"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ffa58e734d5f327d8"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ffa58e734d5f327d8"], abbr[data-utime="1775977684"] > .timestampContent`

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

- `iframe[name="ffa58e734d5f327d8"], #u_0_1_dZ`
- `iframe[name="ffa58e734d5f327d8"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_5_ja > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_7_2l > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_6_Tz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_n_ke > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_m_Uj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="ffa58e734d5f327d8"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 53

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid--single`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="ffa58e734d5f327d8"], ._2lqh`
- `iframe[name="ffa58e734d5f327d8"], #u_1_5_ja > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffa58e734d5f327d8"], #u_1_5_ja > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="ffa58e734d5f327d8"], #u_1_y_71 > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_x_Fc > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_10_kj > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_w_\+r > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_z_vz > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_5_ja > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="ffa58e734d5f327d8"], #feed_subtitle_1367625992068249\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="ffa58e734d5f327d8"], #feed_subtitle_1367625992068249\:4\:0 > .z_c3pyo1brp`
- `iframe[name="ffa58e734d5f327d8"], #id_69dd4c102d5970847979257 > p:nth-child(1)`
- `iframe[name="ffa58e734d5f327d8"], #id_69dd4c102d5970847979257 > p:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_c_lJ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_c_lJ > table > tbody > tr > ._51mw`
- `iframe[name="ffa58e734d5f327d8"], #u_1_7_2l > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffa58e734d5f327d8"], #u_1_12_vJ > .uiScaledImageContainer`
- `iframe[name="ffa58e734d5f327d8"], #u_1_11_2r > .uiScaledImageContainer`
- `iframe[name="ffa58e734d5f327d8"], #u_1_14_Ef > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_13_hf > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], #u_1_15_z7 > ._46-h`
- `iframe[name="ffa58e734d5f327d8"], ._52d9`
- `iframe[name="ffa58e734d5f327d8"], #u_1_7_2l > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="ffa58e734d5f327d8"], #feed_subtitle_1567160728744839\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="ffa58e734d5f327d8"], #feed_subtitle_1567160728744839\:4\:0 > .z_c3pyo1brp`
- `iframe[name="ffa58e734d5f327d8"], #id_69dd4c102d9f54455789574 > p:nth-child(1)`
- `iframe[name="ffa58e734d5f327d8"], #id_69dd4c102d9f54455789574 > p:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_j_yS > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_j_yS > table > tbody > tr > ._51mw`
- `iframe[name="ffa58e734d5f327d8"], #u_1_6_Tz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffa58e734d5f327d8"], #u_1_6_Tz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="ffa58e734d5f327d8"], #u_1_6_Tz > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_f_wD > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_f_wD > table > tbody > tr > ._51mw`
- `iframe[name="ffa58e734d5f327d8"], #u_1_n_ke > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffa58e734d5f327d8"], #u_1_n_ke > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="ffa58e734d5f327d8"], #u_1_n_ke > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_t_O\/ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_t_O\/ > table > tbody > tr > ._51mw`
- `iframe[name="ffa58e734d5f327d8"], #u_1_m_Uj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="ffa58e734d5f327d8"], #u_1_m_Uj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="ffa58e734d5f327d8"], #u_1_m_Uj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="ffa58e734d5f327d8"], #u_1_q_JZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="ffa58e734d5f327d8"], #u_1_q_JZ > table > tbody > tr > ._51mw`
- `iframe[name="ffa58e734d5f327d8"], #u_1_1d_FY`
- `iframe[name="ffa58e734d5f327d8"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
