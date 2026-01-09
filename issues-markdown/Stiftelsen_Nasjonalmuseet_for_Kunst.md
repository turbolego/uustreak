# WCAG Violations Report for Stiftelsen Nasjonalmuseet for Kunst

**Timestamp:** 2026-01-09T00:27:04.757Z
**URL:** [https://www.nasjonalmuseet.no/#](https://www.nasjonalmuseet.no/#)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 4

#### Affected Elements:

- `div[title="Utstillinger"] > section > .ulc-carousel__buttons > .ulc-carousel__button--prev.ulc-carousel__button`
- `div[title="Utstillinger"] > section > .ulc-carousel__buttons > .ulc-carousel__button--next.ulc-carousel__button`
- `div[title="Utvalgte arrangementer "] > section > .ulc-carousel__buttons > .ulc-carousel__button--prev.ulc-carousel__button`
- `div[title="Utvalgte arrangementer "] > section > .ulc-carousel__buttons > .ulc-carousel__button--next.ulc-carousel__button`

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
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `div[title="Utstillinger"] > section`
