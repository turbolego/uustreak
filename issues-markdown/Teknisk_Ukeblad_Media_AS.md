# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2025-10-27T00:29:56.831Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 2

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 3

#### Affected Elements:

- `.peer`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(1)`
- `.gap-4.flex > .bg-transparent.hover\:bg-site-brand-darker.dark\:text-white:nth-child(2)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 3

#### Affected Elements:

- `#sp_message_iframe_1303444, .acceptButton`
- `#sp_message_iframe_1303444, .rejectButton`
- `#sp_message_iframe_1303444, .customiseButton`
