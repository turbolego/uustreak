# WCAG Violations Report for Kunst i offentlige rom KORO

**Timestamp:** 2026-11-20T06:18:03.456Z
**URL:** [https://koro.no/](https://koro.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.tag-offentlig-kunst > .t2-post-link.wp-block-t2-post-link > .t2-post-inner-content.wp-block-group-is-layout-flow.wp-block-group > h3`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `#wp-skip-link`
- `.nwsbtn-items > a[href$="koros-nyhetsbrev/"]`
