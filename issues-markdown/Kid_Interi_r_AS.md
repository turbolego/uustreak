# WCAG Violations Report for Kid Interiør AS

**Timestamp:** 2026-04-27T08:19:58.304Z
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
- **Count:** 2

#### Affected Elements:

- `div:nth-child(7) > .mf.mg.mh > .n1.n2.ge > .fx.bx > div > div > .n3.ml.n2 > .n2.bx > .n4.gg.gf > .k0.gj.gk`
- `div:nth-child(10) > .mf.mg.mh > .n1.n2.ge > .fx.bx > div > div > .n3.ml.n2 > .n2.bx > .n4.gg.gf > .k0.gj.gk`

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
- `.js.jt.bd:nth-child(1) > .bk.c.b > .bv.bn.ep > .k4.di[role="region"]`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 6

#### Affected Elements:

- `div:nth-child(8) > .n5.n6.me > .n7:nth-child(1) > .bx > .hq.m5.m6 > .f4.f.cf`
- `div:nth-child(8) > .n5.n6.me > .n7:nth-child(2) > .bx > .hq.m5.m6 > .f4.f.cf`
- `div:nth-child(8) > .n5.n6.me > .n7:nth-child(3) > .bx > .hq.m5.m6 > .f4.f.cf`
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
- `.bp > div:nth-child(2)`
- `.tf-header-slider`
- `.tf-sidebar`
