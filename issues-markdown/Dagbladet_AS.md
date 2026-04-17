# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-04-17T03:32:17.156Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 5

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, #cmnfvb8i701pk1kas32fhz8h6, .play`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, #cmnfvb8i701pk1kas32fhz8h6, .audio`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #\32 00_287_express_html_inpage_0\.if, #cmnfvb8i701pk1kas32fhz8h6`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.jkuUMO`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#am-branding > p`
