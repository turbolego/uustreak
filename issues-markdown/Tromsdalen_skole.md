# WCAG Violations Report for Tromsdalen skole

**Timestamp:** 2025-11-28T00:43:22.129Z
**URL:** [https://tromsdalen.tromsoskolen.no/#](https://tromsdalen.tromsoskolen.no/#)
**Total Violations:** 6

## Violation Details

### ARIA progressbar nodes must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA progressbar node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f5c0cc9dad3921670"], ._55yn`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `iframe[name="f5c0cc9dad3921670"], div[role="feed"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 16

#### Affected Elements:

- `.dropdown:nth-child(2) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `a[href="index.php?pageID=263"]`
- `.dropdown:nth-child(4) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(5) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(6) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(7) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(8) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(9) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(10) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `a[href="index.php?pageID=312"]`
- `.text-center > a`
- `td > a[href$="login"]`
- `tr:nth-child(3) > td > a[target="linkwindow1692"]`
- `tr:nth-child(5) > td > a[target="linkwindow1692"]`
- `tr:nth-child(7) > td > a[target="linkwindow1692"]`
- `iframe[name="f5c0cc9dad3921670"], abbr[data-utime="1760362895"] > .timestampContent`

### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe[allow="autoplay; encrypted-media"], html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#kommunevaapen > img`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 26

#### Affected Elements:

- `a[href="/index.php?pageID=293"]`
- `tr:nth-child(1) > td:nth-child(2) > a`
- `a[href="/index.php?pageID=312"]`
- `#articleID_406 > .boxTextBody > p > a:nth-child(3)`
- `#articleID_406 > .boxTextBody > p > a:nth-child(5)`
- `a[href="intranett.tromso.kommune.no"]`
- `a:nth-child(11)`
- `a[href$="kartleggeren.no/"]`
- `a[target="_blank"]:nth-child(15)`
- `a[href$="app.mpluss.no/"]`
- `a[href$="bibliotek.info/"]`
- `a[target="_blank"]:nth-child(20)`
- `a[href$="dkstromso.no/"]`
- `#articleID_324 > .boxTextBody > p:nth-child(2) > a[target="_blank"]`
- `p:nth-child(3) > a[target="_blank"]:nth-child(1)`
- `p:nth-child(3) > a:nth-child(3)`
- `p:nth-child(3) > a:nth-child(5)`
- `p:nth-child(3) > a:nth-child(7)`
- `p:nth-child(3) > a[target="_blank"]:nth-child(9)`
- `iframe[name="f5c0cc9dad3921670"], #u_0_1_Li`
- `iframe[name="f5c0cc9dad3921670"], .lfloat:nth-child(1)`
- `iframe[name="f5c0cc9dad3921670"], #u_1_5_aJ > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5c0cc9dad3921670"], #u_1_6_9K > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5c0cc9dad3921670"], #u_1_8_1T > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5c0cc9dad3921670"], #u_1_9_ip > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
- `iframe[name="f5c0cc9dad3921670"], #u_1_7_1W > ._5pcr.userContentWrapper[data-ft="{\"tn\":\"-R\"}"] > ._1dwg._1w_m._q7o > div:nth-child(3) > .l_c3pyo2v0u._5eit._4d-l > ._302 > span > a`
