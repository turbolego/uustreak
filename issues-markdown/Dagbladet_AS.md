# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-10-11T04:45:19.899Z
**URL:** [https://www.dagbladet.no/](https://www.dagbladet.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `.hasTextColor > .kicker-content`
- `.kicker-content > .text-red.color_mobile_text-red[data-lab-text_color_desktop="text-red"]`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 2

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644, iframe, #\32 00_287_express_html_inpage_0\.if`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644, iframe, #\32 00_287_express_html_inpage_0\.if, img[src$="bg.jpg"]`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644, iframe, #\32 00_287_express_html_inpage_0\.if, .n`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644, iframe, #\32 00_287_express_html_inpage_0\.if, .logo`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `._topnav_88ip5_45`
- `#google_ads_iframe_\/8578\/dagbladet\.no\/forside_0, #adn-sup-0\.6833700898210644, iframe, #\32 00_287_express_html_inpage_0\.if, footer`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#am-branding > p`
