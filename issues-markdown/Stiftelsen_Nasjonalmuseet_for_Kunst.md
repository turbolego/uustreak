# WCAG Violations Report for Stiftelsen Nasjonalmuseet for Kunst

**Timestamp:** 2026-05-04T01:09:59.280Z
**URL:** [https://www.nasjonalmuseet.no/#](https://www.nasjonalmuseet.no/#)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 16

#### Affected Elements:

- `#declineButton`
- `li[aria-label="1 av 11"]`
- `li[aria-label="2 av 11"]`
- `li[aria-label="3 av 11"]`
- `li[aria-label="4 av 11"]`
- `li[aria-label="5 av 11"]`
- `li[aria-label="6 av 11"]`
- `li[aria-label="7 av 11"]`
- `li[aria-label="8 av 11"]`
- `li[aria-label="9 av 11"]`
- `li[aria-label="10 av 11"]`
- `li[aria-label="11 av 11"]`
- `li[aria-label="1 av 4"]`
- `li[aria-label="2 av 4"]`
- `li[aria-label="3 av 4"]`
- `li[aria-label="4 av 4"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- `div[title="Utstillinger"] > .ulc-carousel__track`
- `div[title="Utvalgte arrangementer"] > .ulc-carousel__track`
