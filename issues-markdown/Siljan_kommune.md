# WCAG Violations Report for Siljan kommune

**Timestamp:** 2026-11-23T06:34:39.132Z
**URL:** [https://siljan.kommune.no/](https://siljan.kommune.no/)
**Total Violations:** 6

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- `.front-search > .container > .row > .col-md-offset-3.col-md-6 > .input-group > .input-group-btn > button`

### Documents must have <title> element to aid in navigation

- **Impact:** serious
- **Description:** Ensure each HTML document contains a non-empty <title> element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/document-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag242, TTv5, TT12.a, EN-301-549, EN-9.2.4.2, ACT, RGAAv4, RGAA-8.5.1
- **Count:** 1

#### Affected Elements:

- `html`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

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
- **Count:** 14

#### Affected Elements:

- `.front-header-container > .container`
- `.tab1`
- `.tab3`
- `.tab2`
- `.tab4`
- `.tab5`
- `.tab6`
- `#front-menu-sub > .first.row`
- `#front-menu-sub > .show-all-container`
- `.front-search > .container > .row > .col-md-offset-3.col-md-6 > .input-group > input`
- `body > div:nth-child(4)`
- `.aktuelt`
- `.leaflet-bottom.leaflet-right`
- `.map-functions`

### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `select`
