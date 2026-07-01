# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-07-01T11:19:36.027Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 6

## Violation Details

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

- `div:nth-child(4) > .jn.jo.jp > .kc.gp.kd > .fu.br > div > div > .ke.jt.kd > .kd.br > .kf.gq.gr > .kg.gt.gv`
- `.kn:nth-child(2) > .ko.kp.kq > .br > div > div > .ch.cg.et > .i2.gq.gr > .gt.gv.gw`
- `div:nth-child(7) > .jn.jo.jp > .kc.gp.kd > .fu.br > div > div > .ke.jt.kd > .kd.br > .kf.gq.gr > .kg.gt.gv`

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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- `.kn:nth-child(1) > .br > .ks.kv.kw > .f8.f.cs`
- `.kn:nth-child(2) > .br > .ks.kv.kw > .f8.f.cs`
- `.ks.kv.kw > .f8.f[href$="sommerdyner"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `#skip-to-main-content`
- `.b8.bc.bd`
- `.tf-header-slider`
- `.tf-sidebar`
