# WCAG Violations Report for Vinje kommune

**Timestamp:** 2026-11-19T06:09:30.076Z
**URL:** [https://www.vinje.kommune.no/](https://www.vinje.kommune.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- `.eventItem:nth-child(1) > .datetimeWrap > .env-ui-text-overline`
- `.eventItem:nth-child(2) > .datetimeWrap > .env-ui-text-overline`
- `.eventItem:nth-child(3) > .datetimeWrap > .env-ui-text-overline`
- `.eventItem:nth-child(4) > .datetimeWrap > .env-ui-text-overline`
- `.eventItem:nth-child(5) > .datetimeWrap > .env-ui-text-overline`
- `.eventItem:nth-child(6) > .datetimeWrap > .env-ui-text-overline`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `#vFact_audioFrame, #vfact_testaudio`
- `#vFact_audioFrame, h1`
