# WCAG Violations Report for Dagbladet AS

**Timestamp:** 2026-01-04T00:41:17.204Z
**URL:** [https://www.dagbladet.no/#](https://www.dagbladet.no/#)
**Total Violations:** 3

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.has-row-header.color_mobile_bg-black.grid-align-stretch:nth-child(2) > .row_header_text.align-center.mobile_text_align_align-center`
- `.has-row-header.color_mobile_bg-black.grid-align-stretch:nth-child(24) > .row_header_text.align-center.mobile_text_align_align-center`
- `.has-row-header.color_mobile_bg-black.grid-align-stretch:nth-child(38) > .row_header_text.align-center.mobile_text_align_align-center`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.jkuUMO`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#am-branding > p`
