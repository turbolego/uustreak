# WCAG Violations Report for Midtre namdal avfallsselskap IKS

**Timestamp:** 2026-11-23T06:26:46.716Z
**URL:** [https://mna.no/](https://mna.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.other-language`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 12

#### Affected Elements:

- `.logo.navbar-brand.col-12 > .tile-content > a[href$="mna.no/"] > .sr-only`
- `.slick-initialized`
- `#placeholder-content-4`
- `#placeholder-content-5`
- `.logo.navbar-brand.col-sm-6 > .tile-content > a[href$="mna.no/"] > .sr-only`
- `.stripped-design`
- `.secondary-design`
- `h4`
- `.facebook_link > .sr-only`
- `.youtube_link > .sr-only`
- `.instagram_link > .sr-only`
- `#coretrek-footer`
