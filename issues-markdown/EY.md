# WCAG Violations Report for EY

**Timestamp:** 2026-05-11T01:15:15.129Z
**URL:** [https://www.ey.com/no_no/#](https://www.ey.com/no_no/#)
**Total Violations:** 4

## Violation Details

### Documents must have <title> element to aid in navigation

- **Impact:** serious
- **Description:** Ensure each HTML document contains a non-empty <title> element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag242, TTv5, TT12.a, EN-301-549, EN-9.2.4.2, ACT, RGAAv4, RGAA-8.5.1
- **Count:** 1

#### Affected Elements:

- `html`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#root`
