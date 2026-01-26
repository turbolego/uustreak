# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-01-26T00:28:49.504Z
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

- `iframe[name="fa3315eaf66ee378a"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fa3315eaf66ee378a"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="fa3315eaf66ee378a"], abbr[data-utime="1769147198"] > .timestampContent`

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

- `iframe[name="fa3315eaf66ee378a"], #u_0_1_oF`
- `iframe[name="fa3315eaf66ee378a"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_g_6m > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_h_mU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_6_w0 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], ._2l7q > a[target="_blank"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_f_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="fa3315eaf66ee378a"], ._tzw`

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
- `iframe[name="fa3315eaf66ee378a"], ._2lqh`
- `iframe[name="fa3315eaf66ee378a"], #u_1_g_6m > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa3315eaf66ee378a"], ._5pbx`
- `iframe[name="fa3315eaf66ee378a"], #u_1_11_Yr > ._46-h`
- `iframe[name="fa3315eaf66ee378a"], #u_1_z_I7 > ._46-h`
- `iframe[name="fa3315eaf66ee378a"], #u_1_10_Yk > ._46-h`
- `iframe[name="fa3315eaf66ee378a"], #u_1_r_2m > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_r_2m > table > tbody > tr > ._51mw`
- `iframe[name="fa3315eaf66ee378a"], #u_1_h_mU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa3315eaf66ee378a"], #u_1_h_mU > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_o_IG > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_o_IG > table > tbody > tr > ._51mw`
- `iframe[name="fa3315eaf66ee378a"], #u_1_5_ql > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa3315eaf66ee378a"], a[title="Restaurant og Matfag Steinkjer"] > ._38vo > div`
- `iframe[name="fa3315eaf66ee378a"], .mbs[data-ft="{\"tn\":\"C\"}"]`
- `iframe[name="fa3315eaf66ee378a"], #feed_subtitle_1495093619284884\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa3315eaf66ee378a"], #feed_subtitle_1495093619284884\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa3315eaf66ee378a"], #id_6976b53b7cec80b33316419 > p:nth-child(1)`
- `iframe[name="fa3315eaf66ee378a"], #id_6976b53b7cec80b33316419 > p:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_9_dz > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_9_dz > table > tbody > tr > ._51mw`
- `iframe[name="fa3315eaf66ee378a"], #u_1_6_w0 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa3315eaf66ee378a"], ._1nb_`
- `iframe[name="fa3315eaf66ee378a"], #feed_subtitle_1488265526644017\:4\:0 > ._1atc.fsm.fwn`
- `iframe[name="fa3315eaf66ee378a"], #feed_subtitle_1488265526644017\:4\:0 > .z_c3pyo1brp`
- `iframe[name="fa3315eaf66ee378a"], ._5pcm > ._5pco[data-testid="post_message"][data-ft="{\"tn\":\"K\"}"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_c_hW > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_c_hW > table > tbody > tr > ._51mw`
- `iframe[name="fa3315eaf66ee378a"], #u_1_f_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="fa3315eaf66ee378a"], #u_1_f_RO > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="fa3315eaf66ee378a"], #u_1_l_x8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="fa3315eaf66ee378a"], #u_1_l_x8 > table > tbody > tr > ._51mw`
- `iframe[name="fa3315eaf66ee378a"], #u_1_15_jD`
- `iframe[name="fa3315eaf66ee378a"], ._1_lj`
- `.card-grid__item:nth-child(3)`
