# WCAG Violations Report for Tromsdalen skole

**Timestamp:** 2026-10-23T05:42:46.641Z
**URL:** [https://tromsdalen.tromsoskolen.no/](https://tromsdalen.tromsoskolen.no/)
**Total Violations:** 9

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[allow="autoplay; encrypted-media"], .ytmVideoInfoVideoTitle`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[allow="autoplay; encrypted-media"], #movie_player`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `iframe[allow="autoplay; encrypted-media"], .ytmVideoInfoChannelAvatar`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 15

#### Affected Elements:

- `.dropdown:nth-child(2) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(3) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(4) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(5) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(6) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(7) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(8) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `.dropdown:nth-child(9) > .dropdown-toggle[data-toggle="dropdown"][href="#"]`
- `a[href="index.php?pageID=312"]`
- `.text-center > a`
- `#bl1776 > .panel-body > .row > .tablefix1.table.table-striped > tbody > tr > td > a`
- `a[href$="arcade.makecode.com/"]`
- `td > a[href$="login"]`
- `tr:nth-child(5) > td > a[target="linkwindow1692"]`
- `tr:nth-child(7) > td > a[target="linkwindow1692"]`

### Frames with focusable content must not have tabindex=-1

- **Impact:** serious
- **Description:** Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- `iframe[allow="autoplay; encrypted-media"], html`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `#kommunevaapen > img`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 7

#### Affected Elements:

- `a[href="index.php?artID=3126&navB=1"]`
- `a[href="index.php?artID=3122&navB=1"]`
- `a[href="index.php?artID=3112&navB=1"]`
- `a[href="index.php?artID=3110&navB=1"]`
- `a[href="index.php?artID=3105&navB=1"]`
- `a[href="index.php?artID=3089&navB=1"]`
- `a[href="index.php?artID=3087&navB=1"]`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `div:nth-child(2) > a:nth-child(15)`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 16

#### Affected Elements:

- `#articleID_406 > .boxTextBody > p > a[href$="tromso"]`
- `a[href="intranett.tromso.kommune.no"]`
- `#articleID_406 > .boxTextBody > p > a:nth-child(9)`
- `a[href$="kartleggeren.no/"]`
- `a[href$="app.mpluss.no/"]`
- `a[href$="bibliotek.info/"]`
- `a[target="_blank"]:nth-child(17)`
- `a[href$="dkstromso.no/"]`
- `#articleID_324 > .boxTextBody > p:nth-child(2) > a[target="_blank"]`
- `a[href$="tromso"][target="_blank"]`
- `p:nth-child(3) > a:nth-child(3)`
- `p:nth-child(3) > a:nth-child(5)`
- `a:nth-child(7)`
- `a[target="_blank"]:nth-child(9)`
- `iframe[name="f2d477c38e9859d2c"], #u_0_1_yn`
- `iframe[name="f2d477c38e9859d2c"], .lfloat._3-8_`
