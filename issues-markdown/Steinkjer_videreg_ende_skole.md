# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-10-02T17:21:57.368Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f1390adb47b75ddde"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f1390adb47b75ddde"], div[role="feed"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `.top-menu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 10

#### Affected Elements:

- `iframe[name="f1390adb47b75ddde"], #u_0_1_MG`
- `iframe[name="f1390adb47b75ddde"], .lfloat._3-8_`
- `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_d_ZM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f1390adb47b75ddde"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 7

#### Affected Elements:

- `iframe[name="f1390adb47b75ddde"], #u_0_3_op > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f1390adb47b75ddde"], #u_1_u_FB > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f1390adb47b75ddde"], #u_1_w_mw > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f1390adb47b75ddde"], #u_1_15_01 > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f1390adb47b75ddde"], .scaledImageFitWidth`
- `iframe[name="f1390adb47b75ddde"], #u_1_12_\+A > ._38vo > div > ._s0._4ooo._6y97`
- `iframe[name="f1390adb47b75ddde"], #u_1_y_Dm > ._38vo > div > ._s0._4ooo._6y97`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 37

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f1390adb47b75ddde"], ._2lqh`
- `iframe[name="f1390adb47b75ddde"], #u_1_a_Pk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
- `iframe[name="f1390adb47b75ddde"], #u_1_l_2O > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], #u_1_l_2O > table > tbody > tr > ._51mw`
- `iframe[name="f1390adb47b75ddde"], #u_1_c_Jc > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > p:nth-child(1)`
- `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > p:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], p:nth-child(3)`
- `iframe[name="f1390adb47b75ddde"], #id_6abfe82cdb9267665122825 > .text_exposed_hide`
- `iframe[name="f1390adb47b75ddde"], #u_1_o_KC > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], #u_1_o_KC > table > tbody > tr > ._51mw`
- `iframe[name="f1390adb47b75ddde"], #u_1_d_ZM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o`
- `iframe[name="f1390adb47b75ddde"], #u_1_g_AZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], #u_1_g_AZ > table > tbody > tr > ._51mw`
- `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f1390adb47b75ddde"], #u_1_b_vl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
- `iframe[name="f1390adb47b75ddde"], #u_1_11_Tl > .uiScaledImageContainer`
- `iframe[name="f1390adb47b75ddde"], ._46-h`
- `iframe[name="f1390adb47b75ddde"], #u_1_r_BJ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], #u_1_r_BJ > table > tbody > tr > ._51mw`
- `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l`
- `iframe[name="f1390adb47b75ddde"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
- `iframe[name="f1390adb47b75ddde"], ._1nb_`
- `iframe[name="f1390adb47b75ddde"], ._1atc`
- `iframe[name="f1390adb47b75ddde"], .z_c3pyo1brp`
- `iframe[name="f1390adb47b75ddde"], ._5pco`
- `iframe[name="f1390adb47b75ddde"], #u_1_7_sU > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f1390adb47b75ddde"], #u_1_7_sU > table > tbody > tr > ._51mw`
- `iframe[name="f1390adb47b75ddde"], #u_1_18_\/8`
- `iframe[name="f1390adb47b75ddde"], ._1_lj`
- `.card-grid__item:nth-child(3)`
