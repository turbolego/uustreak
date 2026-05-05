# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-05-05T20:22:28.313Z
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

- `iframe[name="f5da10e1e464ec510"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f5da10e1e464ec510"], div[role="feed"]`

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

- `iframe[name="f5da10e1e464ec510"], #u_0_1_YE`
- `iframe[name="f5da10e1e464ec510"], .lfloat._3-8_`
- `iframe[name="f5da10e1e464ec510"], #u_1_5_HJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_5_HJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_7_5j > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_p_UU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_8_zk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_8_zk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5da10e1e464ec510"], #u_1_6_ck > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f5da10e1e464ec510"], .scaledImageFitWidth`

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
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f5da10e1e464ec510"], ._2lqh`
- `iframe[name="f5da10e1e464ec510"], #u_1_5_HJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5da10e1e464ec510"], #u_1_5_HJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f5da10e1e464ec510"], #u_1_m_XZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], #u_1_m_XZ > table > tbody > tr > ._51mw`
- `iframe[name="f5da10e1e464ec510"], #u_1_7_5j > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5da10e1e464ec510"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f5da10e1e464ec510"], #u_1_7_5j > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f5da10e1e464ec510"], #u_1_d_pj > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], #u_1_d_pj > table > tbody > tr > ._51mw`
- `iframe[name="f5da10e1e464ec510"], #u_1_p_UU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5da10e1e464ec510"], #u_1_17_UR > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_16_\/g > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_14_CK > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_15_9i > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_p_UU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f5da10e1e464ec510"], #feed_subtitle_1468852695039319\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f5da10e1e464ec510"], #feed_subtitle_1468852695039319\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq:nth-child(1)`
- `iframe[name="f5da10e1e464ec510"], ._5pcq:nth-child(3)`
- `iframe[name="f5da10e1e464ec510"], #u_1_p_UU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f5da10e1e464ec510"], #u_1_r_Q\/ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], #u_1_r_Q\/ > table > tbody > tr > ._51mw`
- `iframe[name="f5da10e1e464ec510"], #u_1_8_zk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5da10e1e464ec510"], #id_69fa517c7ef3e5a49578158 > p:nth-child(1)`
- `iframe[name="f5da10e1e464ec510"], #id_69fa517c7ef3e5a49578158 > p:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], p:nth-child(3)`
- `iframe[name="f5da10e1e464ec510"], .text_exposed_hide:nth-child(4)`
- `iframe[name="f5da10e1e464ec510"], .text_exposed_hide:nth-child(6)`
- `iframe[name="f5da10e1e464ec510"], #u_1_j_rD > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], #u_1_j_rD > table > tbody > tr > ._51mw`
- `iframe[name="f5da10e1e464ec510"], #u_1_6_ck > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f5da10e1e464ec510"], #u_1_y_P5 > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_12_Sh > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_10_2k > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_z_rK > ._46-h`
- `iframe[name="f5da10e1e464ec510"], #u_1_11_7g > ._46-h`
- `iframe[name="f5da10e1e464ec510"], ._52d9`
- `iframe[name="f5da10e1e464ec510"], #u_1_6_ck > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f5da10e1e464ec510"], #feed_subtitle_1580845544052681\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f5da10e1e464ec510"], #feed_subtitle_1580845544052681\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f5da10e1e464ec510"], #u_1_6_ck > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f5da10e1e464ec510"], #u_1_g_W0 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f5da10e1e464ec510"], #u_1_g_W0 > table > tbody > tr > ._51mw`
- `iframe[name="f5da10e1e464ec510"], #u_1_1a_qn`
- `iframe[name="f5da10e1e464ec510"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
