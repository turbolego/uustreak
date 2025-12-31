# WCAG Violations Report for Skatteetaten

**Timestamp:** 2025-12-31T00:38:12.188Z
**URL:** [https://www.skatteetaten.no/person/](https://www.skatteetaten.no/person/)
**Total Violations:** 3

## Violation Details

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.scroll-to-top-container`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#cookie-banner`

### lang attribute must have a valid value

- **Impact:** serious
- **Description:** Ensure lang attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/valid-lang?application=playwright
- **Tags:** cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2, ACT, RGAAv4, RGAA-8.7.1
- **Count:** 1

#### Affected Elements:

- `.topBanner`
