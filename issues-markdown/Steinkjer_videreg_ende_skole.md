# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-15T00:24:45.755Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 8

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

- `iframe[name="fa80bc5cc8f5e032e"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fa80bc5cc8f5e032e"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fa80bc5cc8f5e032e"], abbr[data-utime="1760422273"] > .timestampContent`

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
- **Count:** 9

#### Affected Elements:

- `iframe[name="fa80bc5cc8f5e032e"], #u_0_1_Pl`
- `iframe[name="fa80bc5cc8f5e032e"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_8_8g > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_p_SZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_6_de > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_5_gy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 65

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fa80bc5cc8f5e032e"], ._2lqh`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_8_8g > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_8_8g > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_122186197256068132\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_122186197256068132\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45b42f6d78177103 > p:nth-child(1)`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45b42f6d78177103 > p:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45b42f6d78177103 > p:nth-child(3)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_g_nr > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_g_nr > table > tbody > tr > ._51mw`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_p_SZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa80bc5cc8f5e032e"], div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_18_Yq > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_17_UU > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_1b_Xe > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_19_ic > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_1a_gh > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_p_SZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1212509087579941\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1212509087579941\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_p_SZ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_s_xC > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_s_xC > table > tbody > tr > ._51mw`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_6_de > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_13_UC > .uiScaledImageContainer`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_y_yQ > .uiScaledImageContainer`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_x_Yb > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_v_xz > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_w_Oo > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_w_Oo > ._52d9`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_6_de > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1400058018788445\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1400058018788445\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45bed27c79032598 > p`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_j_Ke > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_j_Ke > table > tbody > tr > ._51mw`
- `iframe[name="fa80bc5cc8f5e032e"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45c4119c02298787 > p:nth-child(1)`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45c4119c02298787 > p:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45c4119c02298787 > .text_exposed_hide:nth-child(3)`
- `iframe[name="fa80bc5cc8f5e032e"], #id_68eee9c45c4119c02298787 > .text_exposed_hide:nth-child(5)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_c_eH > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_c_eH > table > tbody > tr > ._51mw`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_5_gy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_z_1C > .uiScaledImageContainer`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_11_nn > .uiScaledImageContainer`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_12_ag > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_14_Mc > .uiScaledImageContainer`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_10_O8 > ._46-h`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_10_O8 > ._52d9`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_5_gy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1298032712121319\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa80bc5cc8f5e032e"], #feed_subtitle_1298032712121319\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_5_gy > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_m_9m > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_m_9m > table > tbody > tr > ._51mw`
- `iframe[name="fa80bc5cc8f5e032e"], #u_1_1e_ay`
- `iframe[name="fa80bc5cc8f5e032e"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
