# WCAG Violations Report for Fjord1 ASA

**Timestamp:** 2025-10-17T00:24:22.834Z
**URL:** [https://www.fjord1.no/#](https://www.fjord1.no/#)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 2

#### Affected Elements:

- `#CybotCookiebotDialogNavDeclaration`
- `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 7

#### Affected Elements:

- `.d-none`
- `h1`
- `label[for="ferry_selector__from"]`
- `label[for="ferry_selector__to"]`
- `.route-search-component__column:nth-child(3)`
- `.zone-main`
- `.zone-footer`
