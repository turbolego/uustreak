# WCAG Violations Report for Cubus AS

**Timestamp:** 2026-10-11T04:22:21.537Z
**URL:** [https://cubus.com/no/](https://cubus.com/no/)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#react_53b7ca56-515e-46b4-add1-9d7c6345c65e > .css-1ljaiw5-StyledProductListBlock.ey9rwho0 > .css-1dlfasc-StyledProductListSlider.e12nlr8e5[aria-label="Glidebryter med produkter"]`
- `.css-smxovs-StyledCssSliderWrapper`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.e1gatcwn2`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#zendesk-widget`
