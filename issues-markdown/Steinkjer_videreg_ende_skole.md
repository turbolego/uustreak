# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-08-20T05:37:46.458Z
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

- `iframe[name="f873c8c24b76ad11d"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f873c8c24b76ad11d"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f873c8c24b76ad11d"], abbr[data-utime="1787058481"] > .timestampContent`
- `iframe[name="f873c8c24b76ad11d"], #feed_subtitle_1114314518216811\:4\:0 > ._1atc.fsm.fwn > .fcg`

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

- `iframe[name="f873c8c24b76ad11d"], #u_0_1_X2`
- `iframe[name="f873c8c24b76ad11d"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], #u_1_5_Tg > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], #u_1_i_U7 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], #u_1_8_9w > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], #u_1_7_Sd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f873c8c24b76ad11d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f873c8c24b76ad11d"], .scaledImageFitWidth`

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
- `iframe[name="f873c8c24b76ad11d"], ._2lqh`
- `iframe[name="f873c8c24b76ad11d"], #u_1_5_Tg > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f873c8c24b76ad11d"], #u_1_5_Tg > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f873c8c24b76ad11d"], #feed_subtitle_1114314518216811\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f873c8c24b76ad11d"], #feed_subtitle_1114314518216811\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a167cf19b15582352 > p`
- `iframe[name="f873c8c24b76ad11d"], #u_1_b_wB > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_b_wB > table > tbody > tr > ._51mw`
- `iframe[name="f873c8c24b76ad11d"], #u_1_i_U7 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f873c8c24b76ad11d"], #u_1_i_U7 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f873c8c24b76ad11d"], #u_1_i_U7 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f873c8c24b76ad11d"], #u_1_s_\/8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_s_\/8 > table > tbody > tr > ._51mw`
- `iframe[name="f873c8c24b76ad11d"], #u_1_8_9w > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f873c8c24b76ad11d"], #u_1_y_Oz > ._46-h`
- `iframe[name="f873c8c24b76ad11d"], #u_1_x_l\/ > ._46-h`
- `iframe[name="f873c8c24b76ad11d"], #u_1_8_9w > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"] > div:nth-child(2) > ._5r69._sds._1hvl > .mts > ._5pcm.mtm > ._1nb_[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="f873c8c24b76ad11d"], #feed_subtitle_1759908052807763\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="f873c8c24b76ad11d"], #feed_subtitle_1759908052807763\:4\:0 > .z_c3pyo1brp`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a16816d8456954204 > p:nth-child(1)`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a16816d8456954204 > p:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_e_zE > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_e_zE > table > tbody > tr > ._51mw`
- `iframe[name="f873c8c24b76ad11d"], #u_1_7_Sd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f873c8c24b76ad11d"], #u_1_7_Sd > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576.userContent`
- `iframe[name="f873c8c24b76ad11d"], #u_1_z_tj > ._46-h`
- `iframe[name="f873c8c24b76ad11d"], #u_1_10_h\+ > ._46-h`
- `iframe[name="f873c8c24b76ad11d"], #u_1_11_1T > .uiScaledImageContainer`
- `iframe[name="f873c8c24b76ad11d"], #u_1_p_sQ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_p_sQ > table > tbody > tr > ._51mw`
- `iframe[name="f873c8c24b76ad11d"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a1684312c70933188 > p:nth-child(1)`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a1684312c70933188 > p:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a1684312c70933188 > p:nth-child(3)`
- `iframe[name="f873c8c24b76ad11d"], #id_6a8692a1684312c70933188 > .text_exposed_hide:nth-child(4)`
- `iframe[name="f873c8c24b76ad11d"], .text_exposed_hide:nth-child(6)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_m_sv > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f873c8c24b76ad11d"], #u_1_m_sv > table > tbody > tr > ._51mw`
- `iframe[name="f873c8c24b76ad11d"], #u_1_17_k2`
- `iframe[name="f873c8c24b76ad11d"], ._1_lj`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(3)`
