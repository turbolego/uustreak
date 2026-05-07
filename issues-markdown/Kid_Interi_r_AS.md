# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-05-07T20:34:13.183Z
**URL:** [https://www.kid.no/#](https://www.kid.no/#)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- `div:nth-child(10) > .ke.ja.jb > .kn.f6.km > .kq.kr.ko`
- `div:nth-child(17) > .ke.ja.jb > .kn.f6.km > .kq.kr.ko`

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

- `div:nth-child(4) > .jc.ja.jb > .k1.ge.k2 > .fx.bx > div > div > .k3.jg.k2 > .k2.bx > .k4.gg.gf > .k5.gk.gl`
- `div:nth-child(9) > .jc.ja.jb > .k1.ge.k2 > .fx.bx > div > div > .k3.jg.k2 > .k2.bx > .k4.gg.gf > .k5.gk.gl`
- `div:nth-child(11) > .jc.ja.jb > .k1.ge.k2 > .fx.bx > div > div > .k3.jg.k2 > .k2.bx > .k4.gg.gf > .k5.gk.gl`

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
- **Count:** 6

#### Affected Elements:

- `div:nth-child(12) > .me.kn.jf > .mf:nth-child(1) > .bx > .mj.mk.km > .f4.f.gc`
- `div:nth-child(12) > .me.kn.jf > .mf:nth-child(2) > .bx > .mj.mk.km > .f4.f.gc`
- `div:nth-child(12) > .me.kn.jf > .mf:nth-child(3) > .bx > .mj.mk.km > .f4.f.gc`
- `.f4.f[href$="palermo"]`
- `.f4.f[href$="capri"]`
- `.f4.f[href$="hageputer"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `#skip-to-main-content`
- `#usp-rotator-instructions`
- `.bo > div:nth-child(2)`
- `.tf-header-slider`
- `.tf-sidebar`
