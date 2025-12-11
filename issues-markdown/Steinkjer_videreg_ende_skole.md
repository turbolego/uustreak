# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-12-11T00:49:08.779Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 7

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

- `iframe[name="f9775328acff42061"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f9775328acff42061"], div[role="feed"]`

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

- `iframe[name="f9775328acff42061"], #u_0_1_O6`
- `iframe[name="f9775328acff42061"], .lfloat._3-8_`
- `iframe[name="f9775328acff42061"], #u_1_l_XM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f9775328acff42061"], #u_1_6_Ez > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f9775328acff42061"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f9775328acff42061"], #u_1_5_s3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f9775328acff42061"], #u_1_7_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 41

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f9775328acff42061"], ._2lqh`
- `iframe[name="f9775328acff42061"], #u_1_l_XM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f9775328acff42061"], #u_1_l_XM > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f9775328acff42061"], #u_1_n_qs > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f9775328acff42061"], #u_1_n_qs > table > tbody > tr > ._51mw`
- `iframe[name="f9775328acff42061"], #u_1_6_Ez > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f9775328acff42061"], #u_1_1e_zI > ._46-h`
- `iframe[name="f9775328acff42061"], #u_1_1f_Vz > ._46-h`
- `iframe[name="f9775328acff42061"], #u_1_1c_jG > ._46-h`
- `iframe[name="f9775328acff42061"], #u_1_1d_\/A > ._46-h`
- `iframe[name="f9775328acff42061"], #u_1_1b_cW > ._46-h`
- `iframe[name="f9775328acff42061"], ._1nb_`
- `iframe[name="f9775328acff42061"], ._1atc`
- `iframe[name="f9775328acff42061"], .z_c3pyo1brp`
- `iframe[name="f9775328acff42061"], ._5pco`
- `iframe[name="f9775328acff42061"], #u_1_b_2U > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f9775328acff42061"], #u_1_b_2U > table > tbody > tr > ._51mw`
- `iframe[name="f9775328acff42061"], #u_1_y_rO`
- `iframe[name="f9775328acff42061"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f9775328acff42061"], div:nth-child(2) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="f9775328acff42061"], #u_1_r_TF > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f9775328acff42061"], #u_1_r_TF > table > tbody > tr > ._51mw`
- `iframe[name="f9775328acff42061"], #u_1_5_s3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f9775328acff42061"], div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="f9775328acff42061"], .uiScaledImageContainer`
- `iframe[name="f9775328acff42061"], #u_1_19_Fy > ._46-h`
- `iframe[name="f9775328acff42061"], #u_1_h_Hk > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f9775328acff42061"], #u_1_h_Hk > table > tbody > tr > ._51mw`
- `iframe[name="f9775328acff42061"], #u_1_7_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f9775328acff42061"], #u_1_7_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f9775328acff42061"], #u_1_e_lT > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f9775328acff42061"], #u_1_e_lT > table > tbody > tr > ._51mw`
- `iframe[name="f9775328acff42061"], #u_1_1i_0\/`
- `iframe[name="f9775328acff42061"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
