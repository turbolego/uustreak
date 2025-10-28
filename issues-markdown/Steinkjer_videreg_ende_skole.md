# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2025-10-28T12:51:08.904Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 9

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

- `iframe[name="f20d2abef91322292"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f20d2abef91322292"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f20d2abef91322292"], abbr[data-utime="1761333828"] > .timestampContent`

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

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f20d2abef91322292"], a[title="Øyna Kulturlandskapshotell"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 8

#### Affected Elements:

- `iframe[name="f20d2abef91322292"], #u_0_1_mb`
- `iframe[name="f20d2abef91322292"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f20d2abef91322292"], #u_1_7_9t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f20d2abef91322292"], #u_1_9_Mp > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f20d2abef91322292"], #u_1_5_2Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f20d2abef91322292"], #u_1_d_z9 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f20d2abef91322292"], #u_1_6_Jl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f20d2abef91322292"], ._2l7q > a[target="_blank"]`

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
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f20d2abef91322292"], ._2lqh`
- `iframe[name="f20d2abef91322292"], #u_1_7_9t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f20d2abef91322292"], #u_1_u_XH > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_x_kN > .uiScaledImageContainer`
- `iframe[name="f20d2abef91322292"], #u_1_y_wE > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_v_M0 > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_w_Gt > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_w_Gt > ._52d9`
- `iframe[name="f20d2abef91322292"], #u_1_7_9t > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1420961806698066\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1420961806698066\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f20d2abef91322292"], #id_6900bc3462aa82d41351583 > p`
- `iframe[name="f20d2abef91322292"], #u_1_h_X\/ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_h_X\/ > table > tbody > tr > ._51mw`
- `iframe[name="f20d2abef91322292"], #u_1_9_Mp > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f20d2abef91322292"], #u_1_15_EZ > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_14_WZ > .uiScaledImageContainer`
- `iframe[name="f20d2abef91322292"], #u_1_13_SU > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_12_Jj > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_11_sZ > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_11_sZ > ._52d9`
- `iframe[name="f20d2abef91322292"], #u_1_9_Mp > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1320235053234418\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1320235053234418\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1320235053234418\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f20d2abef91322292"], #u_1_9_Mp > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f20d2abef91322292"], #u_1_k_Eo > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_k_Eo > table > tbody > tr > ._51mw`
- `iframe[name="f20d2abef91322292"], #u_1_5_2Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f20d2abef91322292"], #u_1_19_6L > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_1e_Tr > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_1b_82 > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_1a_bf > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_18_d1 > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_18_d1 > ._52d9`
- `iframe[name="f20d2abef91322292"], #u_1_5_2Y > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1242128054610618\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1242128054610618\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f20d2abef91322292"], #id_6900bc346399b1896209193 > p`
- `iframe[name="f20d2abef91322292"], #u_1_o_CZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_o_CZ > table > tbody > tr > ._51mw`
- `iframe[name="f20d2abef91322292"], #u_1_d_z9 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f20d2abef91322292"], #u_1_10_Lp > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_z_rr > ._46-h`
- `iframe[name="f20d2abef91322292"], #u_1_d_z9 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1318694203388503\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1318694203388503\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(1)`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_1318694203388503\:4\:0 > .z_c3pyo1brp > .fsm.fwn.fcg > ._5pcq[target="_blank"]:nth-child(3)`
- `iframe[name="f20d2abef91322292"], #u_1_d_z9 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="f20d2abef91322292"], #u_1_r_iY > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_r_iY > table > tbody > tr > ._51mw`
- `iframe[name="f20d2abef91322292"], #u_1_6_Jl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f20d2abef91322292"], #u_1_6_Jl > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_122102820441069860\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f20d2abef91322292"], #feed_subtitle_122102820441069860\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f20d2abef91322292"], #id_6900bc34643610d20316166 > p:nth-child(1)`
- `iframe[name="f20d2abef91322292"], #id_6900bc34643610d20316166 > p:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_e_A6 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f20d2abef91322292"], #u_1_e_A6 > table > tbody > tr > ._51mw`
- `iframe[name="f20d2abef91322292"], #u_1_1h_kQ`
- `iframe[name="f20d2abef91322292"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
