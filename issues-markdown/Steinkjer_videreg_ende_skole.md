# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-08-19T01:29:21.301Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
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

- `iframe[name="fcdb8147e8296ac6d"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fcdb8147e8296ac6d"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="fcdb8147e8296ac6d"], abbr[data-utime="1787058481"] > .timestampContent`
- `iframe[name="fcdb8147e8296ac6d"], #feed_subtitle_1114314518216811\:4\:0 > ._1atc.fsm.fwn > .fcg`

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
- **Count:** 9

#### Affected Elements:

- `iframe[name="fcdb8147e8296ac6d"], #u_0_1_p\+`
- `iframe[name="fcdb8147e8296ac6d"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_6_Ll > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_9_\+B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_5_2n > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_7_o5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fcdb8147e8296ac6d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fcdb8147e8296ac6d"], .scaledImageFitWidth`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 46

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fcdb8147e8296ac6d"], ._2lqh`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_6_Ll > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_6_Ll > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fcdb8147e8296ac6d"], #feed_subtitle_1114314518216811\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fcdb8147e8296ac6d"], #feed_subtitle_1114314518216811\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86bf3c9860959023 > p`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_e_MZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_e_MZ > table > tbody > tr > ._51mw`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_9_\+B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_9_\+B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_9_\+B > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_k_WK > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_k_WK > table > tbody > tr > ._51mw`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_5_2n > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_w_oO > ._46-h`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_x_xQ > ._46-h`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_5_2n > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fcdb8147e8296ac6d"], #feed_subtitle_1759908052807763\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fcdb8147e8296ac6d"], #feed_subtitle_1759908052807763\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c4920d55291695 > p:nth-child(1)`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c4920d55291695 > p:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_h_sU > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_h_sU > table > tbody > tr > ._51mw`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_7_o5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_7_o5 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_y_jX > ._46-h`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_z_zA > ._46-h`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_14_ya > .uiScaledImageContainer`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_p_7A > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_p_7A > table > tbody > tr > ._51mw`
- `iframe[name="fcdb8147e8296ac6d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c7f84077406187 > p:nth-child(1)`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c7f84077406187 > p:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c7f84077406187 > p:nth-child(3)`
- `iframe[name="fcdb8147e8296ac6d"], #id_6a8506e86c7f84077406187 > .text_exposed_hide:nth-child(4)`
- `iframe[name="fcdb8147e8296ac6d"], .text_exposed_hide:nth-child(6)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_s_3v > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_s_3v > table > tbody > tr > ._51mw`
- `iframe[name="fcdb8147e8296ac6d"], #u_1_17_Ug`
- `iframe[name="fcdb8147e8296ac6d"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
