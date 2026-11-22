# WCAG Violations Report for Lysna AS

**Timestamp:** 2026-11-22T06:35:54.029Z
**URL:** [https://lysna.no/](https://lysna.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `.left-list._12:nth-child(1) > p`
- `.left-list._12:nth-child(2) > p`
- `.left-list._12:nth-child(3) > p`

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 4

#### Affected Elements:

- `.header-btn:nth-child(4)`
- `.article-card._s6._l4:nth-child(1) > .article-card-in`
- `.article-card._s6._l4:nth-child(2) > .article-card-in`
- `.article-card._s6._l4:nth-child(3) > .article-card-in`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `div[data-cm-view="default"] > .cm__content:nth-child(1)`
- `div[data-cm-view="default"] > .cm__content:nth-child(2)`
