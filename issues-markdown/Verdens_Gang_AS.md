# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-06-27T01:37:47.196Z
**URL:** [https://www.vg.no/#](https://www.vg.no/#)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `._mastheadSearch_1x8em_144 > ._container_xqf44_5._fillTertiary_xqf44_16[action="https://www.vg.no/sok"] > input`

### Table header text should not be empty

- **Impact:** minor
- **Description:** Ensure table headers have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `vg-vm-front-top,thead > tr > .td-team`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `aside`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 2

#### Affected Elements:

- `a[data-content-id="L4WXMV"] > ._figure_1s4m1_31 > ._badges_1s4m1_31 > ._vglive_1bk5j_45._badge_1bk5j_1 > svg[role="img"][viewBox="0 0 24 24"]`
- `a[data-content-id="n1mlyd"] > ._figure_1s4m1_31 > ._badges_1s4m1_31 > ._vglive_1bk5j_45._badge_1bk5j_1 > svg[role="img"][viewBox="0 0 24 24"]`
