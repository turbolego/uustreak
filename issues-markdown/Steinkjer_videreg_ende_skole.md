# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-03-23T00:36:51.242Z
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

- `iframe[name="fb041b560f616d13c"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fb041b560f616d13c"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="fb041b560f616d13c"], abbr[data-utime="1774073052"] > .timestampContent`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_1548243213969924\:4\:0 > ._1atc.fsm.fwn > .fcg`

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
- **Count:** 8

#### Affected Elements:

- `iframe[name="fb041b560f616d13c"], #u_0_1_nd`
- `iframe[name="fb041b560f616d13c"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], #u_1_5_og > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], #u_1_6_Fk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], #u_1_f_P\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], #u_1_g_SL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], ._2l7q > a[target="_blank"]`
- `iframe[name="fb041b560f616d13c"], #u_1_h_cs > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 69

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fb041b560f616d13c"], ._2lqh`
- `iframe[name="fb041b560f616d13c"], #u_1_5_og > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb041b560f616d13c"], #u_1_w_7W > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_x_M3 > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_v_KV > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_y_gF > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_u_Mj > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_u_Mj > ._52d9`
- `iframe[name="fb041b560f616d13c"], #u_1_5_og > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_1548243213969924\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_1548243213969924\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aecda55904272114 > p:nth-child(1)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aecda55904272114 > p:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_c_wi > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_c_wi > table > tbody > tr > ._51mw`
- `iframe[name="fb041b560f616d13c"], #u_1_6_Fk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb041b560f616d13c"], #u_1_13_KJ > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_12_Hk > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_11_Iu > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_14_yK > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_15_pB > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_15_pB > ._52d9`
- `iframe[name="fb041b560f616d13c"], #u_1_6_Fk > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_929155543207543\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_929155543207543\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aedab63961390531 > p:nth-child(1)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aedab63961390531 > p:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_9_YH > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_9_YH > table > tbody > tr > ._51mw`
- `iframe[name="fb041b560f616d13c"], #u_1_f_P\+ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aee0b90c49903949 > p:nth-child(1)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aee0b90c49903949 > p:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aee0b90c49903949 > .text_exposed_hide`
- `iframe[name="fb041b560f616d13c"], #u_1_17_AI > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_18_lu > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_16_b2 > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_19_Hi > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_1d_zA > .uiScaledImageContainer`
- `iframe[name="fb041b560f616d13c"], #u_1_1d_zA > ._52d9`
- `iframe[name="fb041b560f616d13c"], #u_1_o_Da > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_o_Da > table > tbody > tr > ._51mw`
- `iframe[name="fb041b560f616d13c"], #u_1_g_SL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb041b560f616d13c"], #u_1_g_SL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fb041b560f616d13c"], #u_1_g_SL > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_1570425561369089\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb041b560f616d13c"], #feed_subtitle_1570425561369089\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aeedad7523501908 > p:nth-child(1)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aeedad7523501908 > p:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aeedad7523501908 > p:nth-child(3)`
- `iframe[name="fb041b560f616d13c"], #u_1_l_8P > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_l_8P > table > tbody > tr > ._51mw`
- `iframe[name="fb041b560f616d13c"], #u_1_h_cs > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aef5c64e59661459 > p:nth-child(1)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aef5c64e59661459 > p:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], .text_exposed_hide:nth-child(3)`
- `iframe[name="fb041b560f616d13c"], #id_69c08b1aef5c64e59661459 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fb041b560f616d13c"], #u_1_1b_6k > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_1a_pb > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_1c_Rg > ._46-h`
- `iframe[name="fb041b560f616d13c"], #u_1_r_J6 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb041b560f616d13c"], #u_1_r_J6 > table > tbody > tr > ._51mw`
- `iframe[name="fb041b560f616d13c"], #u_1_1i_km`
- `iframe[name="fb041b560f616d13c"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
