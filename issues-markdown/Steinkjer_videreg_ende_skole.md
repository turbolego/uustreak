# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-08-29T06:16:42.483Z
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

- `iframe[name="fcf82547a6291cd19"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fcf82547a6291cd19"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `iframe[name="fcf82547a6291cd19"], abbr[data-utime="1787934913"] > .timestampContent`
- `iframe[name="fcf82547a6291cd19"], #u_1_i_N\+ > table > tbody > tr > ._435r:nth-child(2) > ._29bd[target="_blank"] > ._1p4p._2pi4[title="Comment"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_k_Jr > ._50sk._2pi4[title="Share"]`

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

- `iframe[name="fcf82547a6291cd19"], #u_0_1_aN`
- `iframe[name="fcf82547a6291cd19"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_d_qn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_b_tG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_b_tG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_c_oy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > ._2p_a._3x-2[data-ft="{\"tn\":\"H\"}"] > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_c_oy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_5_Hb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_a_Cn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 2

#### Affected Elements:

- `iframe[name="fcf82547a6291cd19"], a[aria-describedby="u_1_y_lD"] > ._6l-.__c_ > .uiScaledImageContainer.fbStoryAttachmentImage > .scaledImageFitWidth[width="158"][height="158"]`
- `iframe[name="fcf82547a6291cd19"], a[aria-describedby="u_1_z_t3"] > ._6l-.__c_ > .uiScaledImageContainer.fbStoryAttachmentImage > .scaledImageFitWidth[width="158"][height="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 39

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fcf82547a6291cd19"], ._2lqh`
- `iframe[name="fcf82547a6291cd19"], #u_1_d_qn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcf82547a6291cd19"], #u_1_d_qn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcf82547a6291cd19"], #u_1_d_qn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_i_N\+ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #u_1_i_N\+ > table > tbody > tr > ._51mw`
- `iframe[name="fcf82547a6291cd19"], #u_1_b_tG > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcf82547a6291cd19"], #id_6a9279421c8380871674490 > p:nth-child(1)`
- `iframe[name="fcf82547a6291cd19"], #id_6a9279421c8380871674490 > p:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #id_6a9279421c8380871674490 > p:nth-child(3)`
- `iframe[name="fcf82547a6291cd19"], .text_exposed_hide:nth-child(4)`
- `iframe[name="fcf82547a6291cd19"], .text_exposed_hide:nth-child(6)`
- `iframe[name="fcf82547a6291cd19"], #u_1_q_C8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #u_1_q_C8 > table > tbody > tr > ._51mw`
- `iframe[name="fcf82547a6291cd19"], #u_1_c_oy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcf82547a6291cd19"], #u_1_c_oy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fcf82547a6291cd19"], #u_1_t_P2 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #u_1_t_P2 > table > tbody > tr > ._51mw`
- `iframe[name="fcf82547a6291cd19"], #u_1_5_Hb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcf82547a6291cd19"], ._1nb_`
- `iframe[name="fcf82547a6291cd19"], ._1atc`
- `iframe[name="fcf82547a6291cd19"], .z_c3pyo1brp`
- `iframe[name="fcf82547a6291cd19"], #id_6a9279421f4754997653931 > p`
- `iframe[name="fcf82547a6291cd19"], #u_1_7_fI > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #u_1_7_fI > table > tbody > tr > ._51mw`
- `iframe[name="fcf82547a6291cd19"], #u_1_a_Cn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcf82547a6291cd19"], #u_1_a_Cn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcf82547a6291cd19"], #u_1_a_Cn > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcf82547a6291cd19"], #u_1_n_ew > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcf82547a6291cd19"], #u_1_n_ew > table > tbody > tr > ._51mw`
- `iframe[name="fcf82547a6291cd19"], #u_1_14_sx`
- `iframe[name="fcf82547a6291cd19"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
