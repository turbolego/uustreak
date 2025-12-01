# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2025-12-01T00:54:11.393Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 6

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > .fa.f9.bv > .bl.bz.c4 > .fj.fk.fn > .fs.eo.fr > .fv.fu.fw`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `div:nth-child(18) > .fa.f9.bv > .bl.bz.c4 > .a7.a5[data-scope-link="true"]:nth-child(1) > .gf.fc.fb > .fe.ff.el`
- `div:nth-child(21) > .fa.f9.bv > .bl.bz.c4 > .a7.a5.a6:nth-child(1) > .gj.fc.fb > .fe.ff.el`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 24

#### Affected Elements:

- `img[alt="Se alle produkter"]`
- `img[alt="Sengesett 50%"]`
- `img[alt="Dyner og puter 50%"]`
- `img[alt="Putevar 50%"]`
- `img[alt="Flanell 199,-"]`
- `img[alt="Laken 50%"]`
- `img[alt="Sengetepper 50%"]`
- `img[alt="Hodepute 50%"]`
- `img[alt="Madrassbeskyttere 50%"]`
- `img[alt="Alt til badet 50%"]`
- `img[alt="Morgenkåper 50%"]`
- `img[alt="Håndklær 50%"]`
- `img[alt="Loungewear 50%"]`
- `img[alt="Therapi-serien 50%"]`
- `img[alt="Såper og kremer 50%"]`
- `div:nth-child(16) > .g6.bv.bw > .g7.g8 > .bz.dd > .g9.ao.da > .gb.ga.b > .gc.gd.g9:nth-child(7) > div > .ca.s.c9 > .ge.da.bz > .en.ga.a3`
- `img[alt="AVA velværeserie 50%"]`
- `img[alt="Baderomstilbehør 50%"]`
- `a[href$="skjonnhetstilbehor"] > .ge.da.bz > .en.ga.a3`
- `img[alt="Julegavetips til henne"]`
- `img[alt="Gavetips under 100,-"]`
- `img[alt="Gavetips under 200,-"]`
- `img[alt="Gavetips under 500,-"]`
- `img[alt="Gavetips som varmer"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `div:nth-child(18) > .fa.f9.bv > .bl.bz.c4 > .a7.a5[data-scope-link="true"]:nth-child(1)`
- `div:nth-child(18) > .fa.f9.bv > .bl.bz.c4 > .ca.s.c9`
- `div:nth-child(21) > .fa.f9.bv > .bl.bz.c4 > .a7.a5.a6:nth-child(1)`
- `div:nth-child(21) > .fa.f9.bv > .bl.bz.c4 > .ca.s.c9`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.ag`
- `a[aria-label="Gå til startside"]`
- `input`
- `.a > div:nth-child(5)`
