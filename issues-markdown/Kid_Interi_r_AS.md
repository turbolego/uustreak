# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-03-29T01:22:00.720Z
**URL:** [https://www.kid.no/](https://www.kid.no/)
**Total Violations:** 5

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.i5.is-selected.fj:nth-child(1) > .c.bz.c4 > .ca.ao[data-test-id="product-link"] > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.g0 > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 14

#### Affected Elements:

- `a[href$="hotel-selection"] > .gp.da.dd > .en.gl.a3`
- `img[alt="Toalettmapper 50%"]`
- `img[alt="Morgenkåper 50%"]`
- `img[alt="AVA velværeserie 40%"]`
- `img[alt="Loungewear 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `img[alt="Håraccessories 50%"]`
- `img[alt="Therapie velværeserie 40%"]`
- `img[alt="Otto gardin"]`
- `img[alt="Petra dyne- og putepakke"]`
- `img[alt="Ullpledd"]`
- `img[alt="Helårsdyne"]`
- `img[alt="Lammeskinn"]`
- `img[alt="Sitteunderlag"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `a[href$="soverom"]`
- `.a7[href$="paske"][data-scope-link="true"]:nth-child(1)`
- `.ca.c8[href$="paske"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 6

#### Affected Elements:

- `.ag`
- `a[aria-label="Gå til startside"]`
- `.e7`
- `.a > div:nth-child(5)`
- `.tf-header-slider`
- `.tf-sidebar`
