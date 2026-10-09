# WCAG Violations Report for Bergen Røde Kors Sykehjem AS

**Timestamp:** 2026-10-09T04:54:12.586Z
**URL:** [https://brks.no/](https://brks.no/)
**Total Violations:** 1

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.has-border-color`
  - **HTML:** `<a class="wp-block-button__lin..." href="http://brks.no/kafe-..." style="border-color:#73cee3...">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.95 (foreground color: #eb4034, background color: #ffffff, font size: 14.4pt (19.2px), font weight: normal). Expected contrast ratio of 4.5:1

