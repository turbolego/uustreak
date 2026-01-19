# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-01-19T00:26:40.248Z
**URL:** [https://web.trondelagfylke.no/steinkjer-videregaende-skole/#](https://web.trondelagfylke.no/steinkjer-videregaende-skole/#)
**Total Violations:** 9

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

- `iframe[name="fb5fe2862de45cb74"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fb5fe2862de45cb74"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `iframe[name="fb5fe2862de45cb74"], abbr[data-utime="1768585719"] > .timestampContent`
- `iframe[name="fb5fe2862de45cb74"], #u_1_t_CI > ._2165._2pi4[title="Like"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_u_Wv > ._50sk._2pi4[title="Share"]`
- `iframe[name="fb5fe2862de45cb74"], abbr[data-utime="1768568376"] > .timestampContent`

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

- `iframe[name="fb5fe2862de45cb74"], #u_0_1_pg`
- `iframe[name="fb5fe2862de45cb74"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_l_2s > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_5_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_6_BH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_k_XE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fb5fe2862de45cb74"], img[width="158"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 51

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="fb5fe2862de45cb74"], ._2lqh`
- `iframe[name="fb5fe2862de45cb74"], #u_1_l_2s > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb5fe2862de45cb74"], #u_1_l_2s > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fb5fe2862de45cb74"], #u_1_l_2s > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fb5fe2862de45cb74"], #u_1_s_bp > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_s_bp > table > tbody > tr > ._51mw`
- `iframe[name="fb5fe2862de45cb74"], #u_1_5_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb5fe2862de45cb74"], #u_1_x_dG > .uiScaledImageContainer`
- `iframe[name="fb5fe2862de45cb74"], #u_1_y_f8 > .uiScaledImageContainer`
- `iframe[name="fb5fe2862de45cb74"], #u_1_w_4a > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_z_D3 > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_18_gh > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], ._52d9`
- `iframe[name="fb5fe2862de45cb74"], #u_1_5_wa > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb5fe2862de45cb74"], #feed_subtitle_1491884432939136\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb5fe2862de45cb74"], #feed_subtitle_1491884432939136\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386ee263f06168642 > p`
- `iframe[name="fb5fe2862de45cb74"], #u_1_a_\+N > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_a_\+N > table > tbody > tr > ._51mw`
- `iframe[name="fb5fe2862de45cb74"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb5fe2862de45cb74"], div:nth-child(2) > ._5pbx._3576.userContent`
- `iframe[name="fb5fe2862de45cb74"], #u_1_g_sw > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_g_sw > table > tbody > tr > ._51mw`
- `iframe[name="fb5fe2862de45cb74"], #u_1_6_BH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386f2651f66999808 > p:nth-child(1)`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386f2651f66999808 > p:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386f2651f66999808 > .text_exposed_hide`
- `iframe[name="fb5fe2862de45cb74"], #u_1_6_BH > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fb5fe2862de45cb74"], #feed_subtitle_1488419586618954\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fb5fe2862de45cb74"], #feed_subtitle_1488419586618954\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386f4e10960495618 > p:nth-child(1)`
- `iframe[name="fb5fe2862de45cb74"], #id_696d7a386f4e10960495618 > p:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_d_lx > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_d_lx > table > tbody > tr > ._51mw`
- `iframe[name="fb5fe2862de45cb74"], #u_1_k_XE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fb5fe2862de45cb74"], #u_1_k_XE > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="fb5fe2862de45cb74"], #u_1_11_GT > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_13_nI > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_12_as > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_14_w2 > ._46-h`
- `iframe[name="fb5fe2862de45cb74"], #u_1_p_1\+ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fb5fe2862de45cb74"], #u_1_p_1\+ > table > tbody > tr > ._51mw`
- `iframe[name="fb5fe2862de45cb74"], #u_1_1b_D3`
- `iframe[name="fb5fe2862de45cb74"], ._1_lj`
- `.card-grid__item:nth-child(3)`
