# WCAG Violations Report for Kunst i offentlige rom KORO

**Timestamp:** 2026-11-19T06:47:39.303Z
**URL:** [https://koro.no/](https://koro.no/)
**Total Violations:** 2

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.tag-offentlig-kunst > .t2-post-link.wp-block-t2-post-link > .t2-post-inner-content.wp-block-group-is-layout-flow.wp-block-group > h3`
  - **HTML:** `<h3 class="t2-post-title wp-block-t2-post-title">Nytt regjeringskvartal</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `#wp-skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" id="wp-skip-link" href="#wp--skip-link--target">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.nwsbtn-items > a[href$="koros-nyhetsbrev/"]`
  - **HTML:** `<a target="_blank" href="/koros-nyhetsbrev/"> <div class="nwsbtn-item news-item__link"> <span class="nwsbtn-link"> Få nyhetsbrev </span> </div> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

