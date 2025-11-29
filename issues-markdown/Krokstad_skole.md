# WCAG Violations Report for Krokstad skole

**Timestamp:** 2025-11-29T00:36:33.700Z
**URL:** [https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/#](https://www.drammen.kommune.no/tjenester/skole/skolene-i-drammen/krokstad-skole/#)
**Total Violations:** 10

## Violation Details

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ff3ff6b4c96b57f8a"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="ff3ff6b4c96b57f8a"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `iframe[name="ff3ff6b4c96b57f8a"], ._4v3m:nth-child(2) > ._eg_[role="button"] > ._eh3`
- `iframe[name="ff3ff6b4c96b57f8a"], ._4v3m._51mw > ._eg_[role="button"] > ._eh3`
- `iframe[name="ff3ff6b4c96b57f8a"], abbr[data-utime="1764165696"] > .timestampContent`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_e_Ac > ._2165._2pi4[title="Liker"]`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_f_j4 > ._50sk._2pi4[title="Del"]`
- `iframe[name="ff3ff6b4c96b57f8a"], abbr[data-utime="1763913685"] > .timestampContent`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- `#cookie_cat_functional`
- `#cookie_cat_statistic`
- `#cookie_cat_marketing`

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
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 3

#### Affected Elements:

- `iframe[name="ff3ff6b4c96b57f8a"], .profileLink:nth-child(3)`
- `iframe[name="ff3ff6b4c96b57f8a"], .profileLink:nth-child(4)`
- `iframe[name="ff3ff6b4c96b57f8a"], .profileLink:nth-child(5)`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `iframe[name="ff3ff6b4c96b57f8a"], #u_0_1_bk`
- `iframe[name="ff3ff6b4c96b57f8a"], .lfloat._3-8_`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_5_t2 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_l_t3 > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_1h_ZU > ._302 > span > a`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_7_DT > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="ff3ff6b4c96b57f8a"], ._2l7q > a`
- `iframe[name="ff3ff6b4c96b57f8a"], #u_1_6_lA > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(2) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.mainMenuTrigger`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.skipLink`
