# WCAG Violations Report for Vest-agder-museet IKS

**Timestamp:** 2026-11-19T06:04:07.486Z
**URL:** [https://www.vestagdermuseet.no/](https://www.vestagdermuseet.no/)
**Total Violations:** 4

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `#btn-show-search`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 8

#### Affected Elements:

- `.goog-te-gadget`
- `.VIpgJd-ZVi9od-l4eHX-hSRGPd`
- `time[datetime="18-11-2026 11:00"] > .event-list-item-day`
- `time[datetime="18-11-2026 11:00"] > .event-list-item-month`
- `a[title="D/S Hestmanden"] > p`
- `a[title="Mandal museum"] > p`
- `a[title="Setesdalsbanen"] > p`
- `a[title="Sjølingstad Uldvarefabrik"] > p`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.textwidget.custom-html-widget > h4`
- `.widget-title`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.skip-link`
- `#media_image-2`
- `#vam_museums_list-2`
- `#custom_html-3 > .textwidget.custom-html-widget > p:nth-child(1)`
- `.textwidget.custom-html-widget > p:nth-child(2)`
- `.textwidget.custom-html-widget > p:nth-child(3)`
- `.textwidget.custom-html-widget > p:nth-child(5)`
- `#block-5`
