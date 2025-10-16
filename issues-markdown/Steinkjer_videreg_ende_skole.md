# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-16T00:25:46.206Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fdc148ef515400f77"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fdc148ef515400f77"], div[role="feed"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 10

#### Affected Elements:

- `iframe[name="fdc148ef515400f77"], #u_0_1_8s`
- `iframe[name="fdc148ef515400f77"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_5_dR > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_5_dR > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_7_1e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_6_dt > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_8_Kx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_9_h3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fdc148ef515400f77"], #u_1_9_h3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 56

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fdc148ef515400f77"], ._2lqh`
- `iframe[name="fdc148ef515400f77"], #u_1_5_dR > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fdc148ef515400f77"], #u_1_5_dR > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fdc148ef515400f77"], #u_1_q_cQ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #u_1_q_cQ > table > tbody > tr > ._51mw`
- `iframe[name="fdc148ef515400f77"], #u_1_7_1e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fdc148ef515400f77"], #u_1_7_1e > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_122186197256068132\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_122186197256068132\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812b81f5087249649 > p:nth-child(1)`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812b81f5087249649 > p:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812b81f5087249649 > p:nth-child(3)`
- `iframe[name="fdc148ef515400f77"], #u_1_g_QE > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #u_1_g_QE > table > tbody > tr > ._51mw`
- `iframe[name="fdc148ef515400f77"], #u_1_6_dt > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fdc148ef515400f77"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fdc148ef515400f77"], #u_1_13_h6 > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_10_xX > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_15_iR > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_12_bY > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_14_0q > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_6_dt > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_1212509087579941\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_1212509087579941\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fdc148ef515400f77"], #u_1_6_dt > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fdc148ef515400f77"], #u_1_n_c3 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #u_1_n_c3 > table > tbody > tr > ._51mw`
- `iframe[name="fdc148ef515400f77"], #u_1_8_Kx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fdc148ef515400f77"], #u_1_v_DS > .uiScaledImageContainer`
- `iframe[name="fdc148ef515400f77"], #u_1_y_Km > .uiScaledImageContainer`
- `iframe[name="fdc148ef515400f77"], #u_1_z_Fu > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_w_v3 > ._46-h`
- `iframe[name="fdc148ef515400f77"], #u_1_x_dk > ._46-h`
- `iframe[name="fdc148ef515400f77"], ._52d9`
- `iframe[name="fdc148ef515400f77"], #u_1_8_Kx > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_1400058018788445\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fdc148ef515400f77"], #feed_subtitle_1400058018788445\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812c0439745314802 > p`
- `iframe[name="fdc148ef515400f77"], #u_1_d_dl > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #u_1_d_dl > table > tbody > tr > ._51mw`
- `iframe[name="fdc148ef515400f77"], #u_1_9_h3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812c3a63b39558236 > p:nth-child(1)`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812c3a63b39558236 > p:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812c3a63b39558236 > .text_exposed_hide:nth-child(3)`
- `iframe[name="fdc148ef515400f77"], #id_68f03b812c3a63b39558236 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fdc148ef515400f77"], #u_1_j_gA > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fdc148ef515400f77"], #u_1_j_gA > table > tbody > tr > ._51mw`
- `iframe[name="fdc148ef515400f77"], #u_1_18_nR`
- `iframe[name="fdc148ef515400f77"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
