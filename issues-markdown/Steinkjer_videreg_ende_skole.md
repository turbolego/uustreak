# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-05-06T01:05:06.841Z
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

- `iframe[name="fb6b29bf0ae4fb894"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fb6b29bf0ae4fb894"], div[role="feed"]`

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

- `iframe[name="fb6b29bf0ae4fb894"], #u_0_1_o\/`
- `iframe[name="fb6b29bf0ae4fb894"], .lfloat._3-8_`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_6_VO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_6_VO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_5_KL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_r_d8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_8_0d > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_8_0d > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_7_eK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fb6b29bf0ae4fb894"], .scaledImageFitWidth`

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
- `iframe[name="fb6b29bf0ae4fb894"], ._2lqh`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_6_VO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_6_VO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_m_mz > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_m_mz > table > tbody > tr > ._51mw`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_5_KL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb6b29bf0ae4fb894"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_5_KL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_c_dC > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_c_dC > table > tbody > tr > ._51mw`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_r_d8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_15_kA > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_13_U3 > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_16_F0 > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_14_gj > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_r_d8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb6b29bf0ae4fb894"], #feed_subtitle_1468852695039319\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb6b29bf0ae4fb894"], #feed_subtitle_1468852695039319\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq:nth-child(1)`
- `iframe[name="fb6b29bf0ae4fb894"], ._5pcq:nth-child(3)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_r_d8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_t_BI > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_t_BI > table > tbody > tr > ._51mw`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_8_0d > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb6b29bf0ae4fb894"], #id_69fa93bb7080a7035567446 > p:nth-child(1)`
- `iframe[name="fb6b29bf0ae4fb894"], #id_69fa93bb7080a7035567446 > p:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], p:nth-child(3)`
- `iframe[name="fb6b29bf0ae4fb894"], .text_exposed_hide:nth-child(4)`
- `iframe[name="fb6b29bf0ae4fb894"], .text_exposed_hide:nth-child(6)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_j_j2 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_j_j2 > table > tbody > tr > ._51mw`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_7_eK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_10_Ku > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_11_Lj > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_12_EZ > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_y_xD > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_z_7R > ._46-h`
- `iframe[name="fb6b29bf0ae4fb894"], ._52d9`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_7_eK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb6b29bf0ae4fb894"], #feed_subtitle_1580845544052681\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb6b29bf0ae4fb894"], #feed_subtitle_1580845544052681\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_7_eK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_f_K3 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_f_K3 > table > tbody > tr > ._51mw`
- `iframe[name="fb6b29bf0ae4fb894"], #u_1_1a_dd`
- `iframe[name="fb6b29bf0ae4fb894"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
