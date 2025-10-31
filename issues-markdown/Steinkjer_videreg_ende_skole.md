# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-31T00:22:22.146Z
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

- `iframe[name="f24ba06dcd13301aa"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f24ba06dcd13301aa"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 2

#### Affected Elements:

- `iframe[name="f24ba06dcd13301aa"], abbr[data-utime="1761839117"] > .timestampContent`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1325533046037952\:4\:0 > ._1atc.fsm.fwn > .fcg`

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
- **Count:** 8

#### Affected Elements:

- `iframe[name="f24ba06dcd13301aa"], #u_0_1_Jd`
- `iframe[name="f24ba06dcd13301aa"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_8_9Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_p_ls > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_7_\+8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], ._2l7q > a[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_6_wC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_5_Wb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 68

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f24ba06dcd13301aa"], ._2lqh`
- `iframe[name="f24ba06dcd13301aa"], #u_1_8_9Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1f_dP > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_18_Hz > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1g_Av > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1e_Zb > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_19_H\/ > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_19_H\/ > ._52d9`
- `iframe[name="f24ba06dcd13301aa"], #u_1_8_9Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1325533046037952\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1325533046037952\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1325533046037952\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f24ba06dcd13301aa"], #id_6904013604c963556393847 > p`
- `iframe[name="f24ba06dcd13301aa"], #u_1_d_wQ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_d_wQ > table > tbody > tr > ._51mw`
- `iframe[name="f24ba06dcd13301aa"], #u_1_p_ls > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f24ba06dcd13301aa"], ._5pbx`
- `iframe[name="f24ba06dcd13301aa"], #u_1_12_wJ > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_15_ra > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_14_KE > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_13_t6 > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_11_Rr > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_11_Rr > ._52d9`
- `iframe[name="f24ba06dcd13301aa"], #u_1_s_3m > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_s_3m > table > tbody > tr > ._51mw`
- `iframe[name="f24ba06dcd13301aa"], #u_1_7_\+8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f24ba06dcd13301aa"], #u_1_7_\+8 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_122104964703069860\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_122104964703069860\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f24ba06dcd13301aa"], #id_69040136050b58934090913 > p:nth-child(1)`
- `iframe[name="f24ba06dcd13301aa"], #id_69040136050b58934090913 > p:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_g_Yx > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_g_Yx > table > tbody > tr > ._51mw`
- `iframe[name="f24ba06dcd13301aa"], #u_1_6_wC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f24ba06dcd13301aa"], #u_1_y_Nx > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_x_Nv > .uiScaledImageContainer`
- `iframe[name="f24ba06dcd13301aa"], #u_1_z_lG > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_v_oe > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_w_cI > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_w_cI > ._52d9`
- `iframe[name="f24ba06dcd13301aa"], #u_1_6_wC > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1420961806698066\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1420961806698066\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f24ba06dcd13301aa"], #id_69040136054960542680581 > p`
- `iframe[name="f24ba06dcd13301aa"], #u_1_j_IM > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_j_IM > table > tbody > tr > ._51mw`
- `iframe[name="f24ba06dcd13301aa"], #u_1_5_Wb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1b_5o > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_17_Lq > .uiScaledImageContainer`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1c_Ov > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1d_0E > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1a_\+W > ._46-h`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1a_\+W > ._52d9`
- `iframe[name="f24ba06dcd13301aa"], #u_1_5_Wb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1320235053234418\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1320235053234418\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f24ba06dcd13301aa"], #feed_subtitle_1320235053234418\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_5_Wb > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f24ba06dcd13301aa"], #u_1_m_z1 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f24ba06dcd13301aa"], #u_1_m_z1 > table > tbody > tr > ._51mw`
- `iframe[name="f24ba06dcd13301aa"], #u_1_1k_\/F`
- `iframe[name="f24ba06dcd13301aa"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(4) > .card-grid__item:nth-child(3)`
