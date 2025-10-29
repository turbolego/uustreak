# WCAG Violations Report for Jysk AS

**Timestamp:** 2025-10-29T00:38:43.581Z
**URL:** [https://jysk.no/#](https://jysk.no/#)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 4

#### Affected Elements:

- `.jysk-promo-primary > span[data-backgroundcolor="undefined"][data-color="#FFFFFF"][data-fontsize="undefined"]`
- `span[data-backgroundcolor="undefined"][data-color="#FFFFFF"][data-fontsize="undefined"] > strong`
- `.jysk-promo-secondary:nth-child(3) > span[data-backgroundcolor="undefined"][data-color="#FFFFFF"][data-fontsize="undefined"]`
- `p:nth-child(4) > span[data-backgroundcolor="undefined"][data-color="#FFFFFF"][data-fontsize="undefined"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#notification`
