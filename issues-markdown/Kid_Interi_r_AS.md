# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-06-14T01:54:02.280Z
**URL:** [https://www.kid.no/](https://www.kid.no/)
**Total Violations:** 8

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.bp.cr[href$="soverom"] > .b7.c.bj > .fn.fo.fr:nth-child(1)`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- `.ik > .gn.go.gp`
- `div:nth-child(5) > .j3.j1.j2 > .jp.gh.jq > .fy.bq > div > div > .jr.j5.jq > .jq.bq > .js.gj.gi > .iu.gn.go`
- `div:nth-child(14) > .j3.j1.j2 > .jp.gh.jq > .fy.bq > div > div > .jr.j5.jq > .jq.bq > .js.gj.gi > .iu.gn.go`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 5

#### Affected Elements:

- `img[alt="Morgenkåper 50%"]`
- `img[alt="Strandmadrasser 50%"]`
- `img[alt="Parasoller 50%"]`
- `img[alt="Kjølebager 50%"]`
- `img[alt="Kimonoer og pysjamaser 50%"]`

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
- `.hd > .al > .b[role="region"][aria-roledescription="carousel"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- `.bs[href$="salg"][data-scope-link="true"]:nth-child(1)`
- `.cr.br[href$="salg"]`
- `.f7.gf[href$="kjokkenutstyr"]`
- `.f7.gf[href$="borddekking"]`
- `.f7.gf[href$="belysning"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `#skip-to-main-content`
- `.b8.bc.b9`
- `.tf-header-slider`
- `.tf-sidebar`
