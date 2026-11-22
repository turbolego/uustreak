# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-11-22T05:48:32.032Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 8

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #cbb`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.text-red > .kicker-content`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.row_header_text`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .img`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx1`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx2`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx3`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx4a`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .tx4b`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .imgLoop`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, .logo`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `._topnav_hsgxc_45`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `._skiplink_hsgxc_13`
- `#am-branding > p`
