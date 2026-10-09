# WCAG Violations Report for Utlendingsdirektoratet

**Timestamp:** 2026-10-09T05:15:55.764Z
**URL:** [https://www.udi.no/](https://www.udi.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#login-link`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 1

#### Affected Elements:

- `#search`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### lang attribute must have a valid value

- **Impact:** serious
- **Description:** Ensure lang attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/valid-lang?application=playwright
- **Tags:** cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2, ACT, RGAAv4, RGAA-8.8.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(1) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
- `div:nth-child(2) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
- `div:nth-child(3) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
- `div:nth-child(4) > .nav-tile-wrapper.grid[lang="System.Func`1[System.String]"]`
