# WCAG Violations Report for Studentsamskipnaden i Agder

**Timestamp:** 2026-02-05T00:36:34.758Z
**URL:** [https://www.sia.no/#](https://www.sia.no/#)
**Total Violations:** 10

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.two-col-cta__content > .richtext > p > .text-primary`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.item-list__title`

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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.large-image-cta__card__text > .richtext > p:nth-child(2) > a`

### <object> elements must have alternative text

- **Impact:** serious
- **Description:** Ensure <object> elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/object-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, EN-301-549, EN-9.1.1.1, RGAAv4, RGAA-1.1.6
- **Count:** 9

#### Affected Elements:

- `object[alt="Bolig Outlined"]`
- `object[alt="Helse Outlined"]`
- `object[alt="Barnehage Outlined"]`
- `object[alt="Studentliv Outlined"]`
- `object[alt="Mat Og Drikke Outlined"]`
- `object[alt="Bok Outlined"]`
- `object[alt="Trening Outlined"]`
- `a[aria-label="Go to /studentfordeler/"][href$="studentfordeler/"][title="Studentfordeler"] > .umb-img > object`
- `object[alt="Miljo Outlined"]`

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
