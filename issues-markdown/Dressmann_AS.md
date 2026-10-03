# WCAG Violations Report for Dressmann AS

**Timestamp:** 2026-10-03T04:09:19.049Z
**URL:** [https://dressmann.com/no/](https://dressmann.com/no/)
**Total Violations:** 3

## Violation Details

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.css-smxovs-StyledCssSliderWrapper`
  - **HTML:** `<nav class="css-smxovs-StyledCssSliderWrapper e14mgep41">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.e1gatcwn2`
  - **HTML:** `<ul class="MuiList-root MuiList-padding e1gatcwn2 css-gtkfqk-StyledPaymentAndShippingIconBox">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: h1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Embedded code from Zendesk
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#zendesk-widget`
  - **HTML:** `<div id="zendesk-widget"><h1>Something went wrong.</h1></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

