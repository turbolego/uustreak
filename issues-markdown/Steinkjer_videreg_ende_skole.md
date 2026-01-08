# WCAG Violations Report for Steinkjer videregående skole

**Timestamp:** 2026-01-08T00:29:26.267Z
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

- `iframe[name="f2749ffddddbd7e7c"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f2749ffddddbd7e7c"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="f2749ffddddbd7e7c"], abbr[data-utime="1767705855"] > .timestampContent`
- `iframe[name="f2749ffddddbd7e7c"], ._1atc > .fcg`

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

- `iframe[name="f2749ffddddbd7e7c"], #u_0_1_YD`
- `iframe[name="f2749ffddddbd7e7c"], .lfloat._3-8_[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_6_5p > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], .mts > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_n_Ng > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], ._2p_a > div[data-ft="{\"tn\":\"H\"}"] > .mtm > ._2l7q > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_5_I6 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_m_34 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a[target="_blank"]`

### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 1

#### Affected Elements:

- `iframe[name="f2749ffddddbd7e7c"], img[height="181"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 39

#### Affected Elements:

- `.hero-image`
- `section`
- `.card-grid.card-grid--equal-height:nth-child(3)`
- `.card-grid.card-grid--equal-height:nth-child(4)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(1)`
- `.card-grid.card-grid--equal-height:nth-child(5) > .card-grid__item:nth-child(2) > .card.card-grid--equal-height > .card__tag`
- `iframe[name="f2749ffddddbd7e7c"], ._2lqh`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_6_5p > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f2749ffddddbd7e7c"], ._1nb_`
- `iframe[name="f2749ffddddbd7e7c"], ._1atc`
- `iframe[name="f2749ffddddbd7e7c"], ._5pcq[target="_blank"]`
- `iframe[name="f2749ffddddbd7e7c"], ._20y0`
- `iframe[name="f2749ffddddbd7e7c"], #id_695efa5f286ec0c79847578 > p:nth-child(1)`
- `iframe[name="f2749ffddddbd7e7c"], #id_695efa5f286ec0c79847578 > p:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_h_RR > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_h_RR > table > tbody > tr > ._51mw`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_n_Ng > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_n_Ng > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_q_XZ > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_q_XZ > table > tbody > tr > ._51mw`
- `iframe[name="f2749ffddddbd7e7c"], div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_b_22 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_b_22 > table > tbody > tr > ._51mw`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_5_I6 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f2749ffddddbd7e7c"], #id_695efa5f292849a26264486 > p`
- `iframe[name="f2749ffddddbd7e7c"], #id_695efa5f292849a26264486 > .text_exposed_hide:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #id_695efa5f292849a26264486 > .text_exposed_hide:nth-child(4)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_5_I6 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._3x-2[data-ft="{\"tn\":\"H\"}"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_e_Re > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_e_Re > table > tbody > tr > ._51mw`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_m_34 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._3dp._29k`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_m_34 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > ._5pbx._3576[data-testid="post_message"]`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_10_el > .uiScaledImageContainer`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_11_V4 > .uiScaledImageContainer`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_t_z8 > table > tbody > tr > ._435r:nth-child(2)`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_t_z8 > table > tbody > tr > ._51mw`
- `iframe[name="f2749ffddddbd7e7c"], #u_1_14_8D`
- `iframe[name="f2749ffddddbd7e7c"], ._1_lj`
- `.card-grid__item:nth-child(3)`
