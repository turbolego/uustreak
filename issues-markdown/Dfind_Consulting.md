# WCAG Violations Report for Dfind Consulting

**Timestamp:** 2025-12-11T01:02:27.018Z
**URL:** [https://www.randstad.no/digital/kunde/](https://www.randstad.no/digital/kunde/)
**Total Violations:** 2

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 5

#### Affected Elements:

- `.teaser.teaser--small.cards__item--carousel:nth-child(1)`
- `li[data-href$="cybersikkerhet/"]`
- `.teaser.teaser--small.cards__item--carousel:nth-child(3)`
- `li[data-href$="ux-design/"]`
- `.teaser.teaser--small.cards__item--carousel:nth-child(5)`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.cards__list`
