# WCAG Violations Report for Direktoratet for medisinske produkter

**Timestamp:** 2026-11-18T12:41:59.532Z
**URL:** [https://www.dmp.no/](https://www.dmp.no/)
**Total Violations:** 3

## Violation Details

### ARIA input fields must have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA input field has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- `#autocomplete-list`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`
