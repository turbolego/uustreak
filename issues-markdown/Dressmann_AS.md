# WCAG Violations Report for Dressmann AS

**Timestamp:** 2026-11-20T06:07:44.801Z
**URL:** [https://dressmann.com/no/](https://dressmann.com/no/)
**Total Violations:** 1

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#react_a56b9526-6502-4ee4-9413-072354fc8790 > .css-1ljaiw5-StyledProductListBlock.ey9rwho0 > .css-1dlfasc-StyledProductListSlider.e12nlr8e5[aria-label="Glidebryter med produkter"]`
  - **HTML:** `<section class="css-1dlfasc-StyledProductListSlider e12nlr8e5" aria-label="Glidebryter med produkter">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.css-smxovs-StyledCssSliderWrapper`
  - **HTML:** `<nav class="css-smxovs-StyledCssSliderWrapper e14mgep41">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

