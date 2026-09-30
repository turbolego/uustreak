# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-09-30T05:11:47.746Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole](https://web.trondelagfylke.no/steinkjer-videregaende-skole)
**Total Violations:** 8

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

- `iframe[name="f699c6804e9ac4ab5"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f699c6804e9ac4ab5"], div[role="feed"]`

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
- **Count:** 10

#### Affected Elements:

- `iframe[name="f699c6804e9ac4ab5"], #u_0_1_3j`
- `iframe[name="f699c6804e9ac4ab5"], .lfloat._3-8_`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_a_d5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_a_d5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_8_Bo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_9_\/y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_5_nK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f699c6804e9ac4ab5"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_6_jj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_6_jj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f699c6804e9ac4ab5"], .scaledImageFitWidth`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 40

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f699c6804e9ac4ab5"], ._2lqh`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_a_d5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f699c6804e9ac4ab5"], #id_6abc9a0b5a4755a26411297 > p:nth-child(1)`
- `iframe[name="f699c6804e9ac4ab5"], #id_6abc9a0b5a4755a26411297 > p:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], p:nth-child(3)`
- `iframe[name="f699c6804e9ac4ab5"], #id_6abc9a0b5a4755a26411297 > .text_exposed_hide`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_l_Sf > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_l_Sf > table > tbody > tr > ._51mw`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_8_Bo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_8_Bo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_8_Bo > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_i_DL > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_i_DL > table > tbody > tr > ._51mw`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_9_\/y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_9_\/y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_z_LS > .uiScaledImageContainer`
- `iframe[name="f699c6804e9ac4ab5"], ._46-h`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_t_PE > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_t_PE > table > tbody > tr > ._51mw`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_5_nK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_5_nK > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx.userContent._3576`
- `iframe[name="f699c6804e9ac4ab5"], ._1nb_`
- `iframe[name="f699c6804e9ac4ab5"], ._1atc`
- `iframe[name="f699c6804e9ac4ab5"], .z_c3pyo1brp`
- `iframe[name="f699c6804e9ac4ab5"], ._5pco`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_f_KG > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_f_KG > table > tbody > tr > ._51mw`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_6_jj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_6_jj > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx.userContent._3576`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_o_MW > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_o_MW > table > tbody > tr > ._51mw`
- `iframe[name="f699c6804e9ac4ab5"], #u_1_13_gu`
- `iframe[name="f699c6804e9ac4ab5"], ._1_lj`
- `.card-grid__item:nth-child(3)`
