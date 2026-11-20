# WCAG Violations Report for Finansdepartementet

**Timestamp:** 2026-11-20T06:09:02.448Z
**URL:** [https://finanspolitikkutvalget.no/](https://finanspolitikkutvalget.no/)
**Total Violations:** 1

## Violation Details

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.is-style-list-image`
  - **HTML:** `<ul class="is-style-list-image wp-block-dss-simple-posts">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: div

