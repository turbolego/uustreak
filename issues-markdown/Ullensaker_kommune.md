# WCAG Violations Report for Ullensaker kommune

**Timestamp:** 2026-11-19T07:05:48.874Z
**URL:** [https://www.ullensaker.kommune.no/](https://www.ullensaker.kommune.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- `.item:nth-child(1) > a > time`
- `.item:nth-child(2) > a > time`
- `.item:nth-child(3) > a > time`
- `a[href$="ras-i-travbanevegen/"] > time`
- `.item:nth-child(5) > a > time`
- `.item:nth-child(6) > a > time`
- `#accept-all`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- `a[href$="#oppvekst-og-utdanning"]`
- `a[href$="#helse-omsorg-og-velferd"]`
- `.col-sm-2.col-xs-4.menutab:nth-child(4) > a`
- `a[href$="#kultur-idrett-og-fritid"]`
- `.last > a`
- `#front-menu-sub`
- `.white-blocks > .row:nth-child(1)`
- `.row:nth-child(2) > .col-md-6:nth-child(1)`
- `.row:nth-child(2) > .col-md-6:nth-child(2)`
- `.fp-calendar`
- `.col-md-12 > div > div:nth-child(2)`
- `.cc-header-container`
- `.cc-text`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `select`
