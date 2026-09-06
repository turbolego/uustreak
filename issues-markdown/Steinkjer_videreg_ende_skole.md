# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-09-06T12:20:52.868Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 9

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f7cf688a5cacf44a6"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f7cf688a5cacf44a6"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f7cf688a5cacf44a6"], abbr[data-utime="1788545793"] > .timestampContent`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1707434458050798\:4\:0 > ._1atc.fsm.fwn > .fcg`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `iframe[name="f7cf688a5cacf44a6"], #u_0_1_lq`
- `iframe[name="f7cf688a5cacf44a6"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_7_MZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_5_Q2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_6_hI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_c_2e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], ._2l7q > a[target="_blank"]`
- `iframe[name="f7cf688a5cacf44a6"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f7cf688a5cacf44a6"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 64

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f7cf688a5cacf44a6"], ._2lqh`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_7_MZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_14_Jf > .uiScaledImageContainer`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_15_8W > .uiScaledImageContainer`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_12_cK > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_w_T\/ > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_y_gz > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_y_gz > ._52d9`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_7_MZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1707434458050798\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1707434458050798\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c28b923b53289612 > p:nth-child(1)`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c28b923b53289612 > p:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_f_u9 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_f_u9 > table > tbody > tr > ._51mw`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_5_Q2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_1c_AJ > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_1b_lR > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_1a_mO > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_18_\+T > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_19_fA > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_19_fA > ._52d9`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_5_Q2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1703271781810056\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1703271781810056\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f7cf688a5cacf44a6"], ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_5_Q2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_j_IC > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_j_IC > table > tbody > tr > ._51mw`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_6_hI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_13_pJ > .uiScaledImageContainer`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_10_su > .uiScaledImageContainer`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_z_Qi > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_x_g\/ > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_11_\+f > ._46-h`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_11_\+f > ._52d9`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_6_hI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1700043608789883\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f7cf688a5cacf44a6"], #feed_subtitle_1700043608789883\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c291a62d59926526 > p`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_s_IR > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_s_IR > table > tbody > tr > ._51mw`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_c_2e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f7cf688a5cacf44a6"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_c_2e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_m_4x > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_m_4x > table > tbody > tr > ._51mw`
- `iframe[name="f7cf688a5cacf44a6"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c294143722279303 > p:nth-child(1)`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c294143722279303 > p:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c294143722279303 > p:nth-child(3)`
- `iframe[name="f7cf688a5cacf44a6"], #id_6a9d5a9c294143722279303 > .text_exposed_hide:nth-child(4)`
- `iframe[name="f7cf688a5cacf44a6"], .text_exposed_hide:nth-child(6)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_p_JQ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_p_JQ > table > tbody > tr > ._51mw`
- `iframe[name="f7cf688a5cacf44a6"], #u_1_1h_kO`
- `iframe[name="f7cf688a5cacf44a6"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
