# WCAG Violations Report for Agder kommunerevisjon IKS

**Timestamp:** 2026-11-23T06:04:02.933Z
**URL:** [https://agderkomrev.no/](https://agderkomrev.no/)
**Total Violations:** 5

## Violation Details

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#socket`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#pojo-a11y-skip-content`

### The skip-link target should exist and be focusable

- **Impact:** moderate
- **Description:** Ensure all skip links have a focusable target
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/skip-link?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-12.7.1
- **Count:** 1

#### Affected Elements:

- `#pojo-a11y-skip-content`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `#pojo-a11y-skip-content`
