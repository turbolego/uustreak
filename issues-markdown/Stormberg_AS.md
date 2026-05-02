# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-05-02T01:10:42.398Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 8

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.c2.c3.c4:nth-child(1)`
- `.c2.c3.c4:nth-child(2)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 28

#### Affected Elements:

- `.h2.e0.e1 > div > div`
- `.h4.am[href$="nyheter"]`
- `a[aria-label="Bygland foldekniv 18cm"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Bygland foldekniv 18cm"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Fonnabu myggnetting"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Fonnabu myggnetting"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Holden stretchbelte"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Holden stretchbelte"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Rendalen filterflaske 650 ml"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Rendalen filterflaske 650 ml"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Henningsvær skallparkas"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Henningsvær skallparkas"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `li:nth-child(1) > .ib.ic[aria-label="Lindum sneaker"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `li:nth-child(1) > .ib.ic[aria-label="Lindum sneaker"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `li:nth-child(2) > .ib.ic[aria-label="Lindum sneaker"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `li:nth-child(2) > .ib.ic[aria-label="Lindum sneaker"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `div:nth-child(4) > .i8.bl.bj > .i9.ia > li:nth-child(3) > .ib.ic.id > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `div:nth-child(4) > .i8.bl.bj > .i9.ia > li:nth-child(3) > .ib.ic.id > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Brattli vanntett tursko barn"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Brattli vanntett tursko barn"] > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `div:nth-child(4) > .i8.bl.bj > .i9.ia > li:nth-child(5) > .ib.ic.id > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `div:nth-child(4) > .i8.bl.bj > .i9.ia > li:nth-child(5) > .ib.ic.id > .c0.c1.hy > div > .h3 > .jc.hz.bd`
- `a[aria-label="Sogndal skalljakke"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Harstad skalljakke"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Hinnstein fritidsbukse"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Bergen bambus t-skjorte 2-pack"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `a[aria-label="Porsanger sherpavest"] > .ig.bc.bd > .in.il.y > .gz.io.ip`
- `#onetrust-accept-btn-handler`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(5) > h4`

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
- **Count:** 11

#### Affected Elements:

- `div:nth-child(1) > .aq.am.an > .au.as[width="11"]`
- `div:nth-child(2) > .aq.am.an > .au.as[width="11"]`
- `div:nth-child(3) > .aq.am.an > .au.as[width="11"]`
- `.hs > .hx.hw.au`
- `.ju.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
- `a[href$="t-skjorter"] > .jv.ht.hu > .hx.a2.hw`
- `.ju.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
- `.a6[href$="baerekraft"][data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
- `a[href$="turbukser"] > .jv.ht.hu > .hx.a2.hw`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
- `a[href$="vest-fleece"] > .jv.ht.hu > .hx.a2.hw`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `.hq.bv.ay > .a6[href$="nyheter"][data-scope-link="true"]`
- `.ju.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="t-skjorter"]`
- `.ju.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `.a6[href$="baerekraft"][data-scope-link="true"]`
- `a[href$="turbukser"]`
- `.hq.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `a[href$="vest-fleece"]`

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
- **Count:** 3

#### Affected Elements:

- `.ae`
- `.gy`
- `.h9`
