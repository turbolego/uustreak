# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-08-22T03:17:18.313Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 3

## Violation Details

### ARIA commands must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA button, link and menuitem has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-command-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #cbb`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 4

#### Affected Elements:

- `.peer`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(1)`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(2)`
- `.inset-x-0 > .hover\:bg-site-brand-darker.dark\:text-white.h-11`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 3

#### Affected Elements:

- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_287_express_html_inpage_0\.if`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #\32 00_287_express_html_inpage_0\.if, #banner`
- `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, iframe[sandbox="allow-scripts"]`
