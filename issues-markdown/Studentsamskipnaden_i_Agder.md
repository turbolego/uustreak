# WCAG Violations Report for Studentsamskipnaden i Agder

**Timestamp:** 2026-01-04T00:35:07.317Z
**URL:** [https://www.sia.no/#](https://www.sia.no/#)
**Total Violations:** 6

## Violation Details

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `footer`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `main`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `ion-content`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `ion-content`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 11

#### Affected Elements:

- `svg[width="29"]`
- `svg[viewBox="0 0 43.253 49.218"]`
- `svg[viewBox="0 0 59.37 55.312"]`
- `svg[viewBox="0 0 49.718 48.068"]`
- `svg[viewBox="0 0 66.26 37.374"]`
- `svg[viewBox="0 0 45.668 47.245"]`
- `svg[viewBox="0 0 31.5 47.5"]`
- `svg[viewBox="0 0 49.203 49.203"]`
- `#Layer_1`
- `svg[width="40.603"]`
- `svg[width="60.118"]`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 5

#### Affected Elements:

- `.desktop-navbar__logo`
- `#react-select-2-input`
- `#react-select-3-input`
- `.desktop-navbar__search-btn`
- `.desktop-navbar__hamburger`
