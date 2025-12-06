# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-12-06T09:34:30.267Z
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

- `iframe[name="f197fc6448057118b"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f197fc6448057118b"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f197fc6448057118b"], abbr[data-utime="1764946869"] > .timestampContent`

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

- `iframe[name="f197fc6448057118b"], #u_0_1_vw`
- `iframe[name="f197fc6448057118b"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f197fc6448057118b"], #u_1_5_Mu > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], #u_1_b_YV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], #u_1_8_JI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], #u_1_6_pP > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f197fc6448057118b"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 55

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f197fc6448057118b"], ._2lqh`
- `iframe[name="f197fc6448057118b"], #u_1_5_Mu > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f197fc6448057118b"], #u_1_5_Mu > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f197fc6448057118b"], #u_1_13_jQ > .uiScaledImageContainer`
- `iframe[name="f197fc6448057118b"], #u_1_18_zv > .uiScaledImageContainer`
- `iframe[name="f197fc6448057118b"], #u_1_1a_Yq > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_19_ac > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_17_Hf > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_17_Hf > ._52d9`
- `iframe[name="f197fc6448057118b"], #u_1_e_Lq > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f197fc6448057118b"], #u_1_e_Lq > table > tbody > tr > ._51mw`
- `iframe[name="f197fc6448057118b"], #u_1_b_YV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f197fc6448057118b"], #u_1_b_YV > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f197fc6448057118b"], #u_1_16_qW > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_12_Vu > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_15_bV > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_14_\/I > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_11_Sj > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_11_Sj > ._52d9`
- `iframe[name="f197fc6448057118b"], #u_1_k_Gb > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f197fc6448057118b"], #u_1_k_Gb > table > tbody > tr > ._51mw`
- `iframe[name="f197fc6448057118b"], #u_1_8_JI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f197fc6448057118b"], #u_1_v_dr > .uiScaledImageContainer`
- `iframe[name="f197fc6448057118b"], #u_1_u_z9 > .uiScaledImageContainer`
- `iframe[name="f197fc6448057118b"], #u_1_y_ka > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_x_dC > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_w_DJ > ._46-h`
- `iframe[name="f197fc6448057118b"], #u_1_w_DJ > ._52d9`
- `iframe[name="f197fc6448057118b"], #u_1_8_JI > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f197fc6448057118b"], #feed_subtitle_1458682132926033\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f197fc6448057118b"], #feed_subtitle_1458682132926033\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f197fc6448057118b"], #id_6933f89ddaa3b9d91134814 > p`
- `iframe[name="f197fc6448057118b"], #u_1_h_c8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f197fc6448057118b"], #u_1_h_c8 > table > tbody > tr > ._51mw`
- `iframe[name="f197fc6448057118b"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f197fc6448057118b"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="f197fc6448057118b"], #u_1_n_fl > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f197fc6448057118b"], #u_1_n_fl > table > tbody > tr > ._51mw`
- `iframe[name="f197fc6448057118b"], #u_1_6_pP > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f197fc6448057118b"], #u_1_6_pP > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f197fc6448057118b"], #feed_subtitle_1353441169913806\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f197fc6448057118b"], #feed_subtitle_1353441169913806\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f197fc6448057118b"], ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f197fc6448057118b"], #u_1_6_pP > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f197fc6448057118b"], #u_1_r_Yk > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f197fc6448057118b"], #u_1_r_Yk > table > tbody > tr > ._51mw`
- `iframe[name="f197fc6448057118b"], #u_1_1e_5O`
- `iframe[name="f197fc6448057118b"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
