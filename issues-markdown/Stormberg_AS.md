# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-08-03T01:01:18.588Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 8

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.c2.c3.c4:nth-child(1)`
- `.c2.c3.c4:nth-child(2)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 29

#### Affected Elements:

- `.h2.e0.e1 > div > div`
- `.h4.am.ap`
- `li:nth-child(1) > .ia.ib[aria-label="Trolltunga skalljakke"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `li:nth-child(1) > .ia.ib[aria-label="Trolltunga skalljakke"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `li:nth-child(2) > .ia.ib[aria-label="Trolltunga skalljakke"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `li:nth-child(2) > .ia.ib[aria-label="Trolltunga skalljakke"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Stormflod regnbukse barn 8-14"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Stormflod regnbukse barn 8-14"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Fauskånebba skalljakke"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Fauskånebba skalljakke"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `div:nth-child(3) > .i7.bl.bj > .i8.i9 > li:nth-child(5) > .ia.ib.ic > .if.bc.bd > .im.ik.y > .gz.in.io`
- `div:nth-child(3) > .i7.bl.bj > .i8.i9 > li:nth-child(5) > .ia.ib.ic > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Bodø lettvekts regnbukse"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `li:nth-child(1) > .ia.ib[aria-label="Dovre 2-i-1 ryggsekk 35 L"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `li:nth-child(1) > .ia.ib[aria-label="Dovre 2-i-1 ryggsekk 35 L"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Vosso reisesekk 20 L"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Vosso reisesekk 20 L"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `li:nth-child(3) > .ia.ib[aria-label="Dovre 2-i-1 ryggsekk 35 L"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `li:nth-child(3) > .ia.ib[aria-label="Dovre 2-i-1 ryggsekk 35 L"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Svolvær lang skallparkas"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Svolvær lang skallparkas"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Lista 2-i-1 ryggsekk 15 L"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Lista 2-i-1 ryggsekk 15 L"] > .c0.c1.hx > div > .h3 > .jb.hy.bd`
- `a[aria-label="Vika urban ryggsekk 35 L"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Nordkinn skallbukse barn 8-14"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Skomvær skalljakke barn 8-14"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Regndag regnbukse unisex"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `a[aria-label="Bergen regnselebukse barn 1-7"] > .if.bc.bd > .im.ik.y > .gz.in.io`
- `#onetrust-accept-btn-handler`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(5) > h4`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 14

#### Affected Elements:

- `div:nth-child(1) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(2) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(3) > .aq.am.ao > .au.as[width="11"]`
- `a[href$="mid-season-sale"] > .hq.hr.hs > .hv.hu.au`
- `.jh.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `.jh.fm.be:nth-child(2) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `.jj.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `.a6[href$="barnehagestart"][data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `a[href$="regntoy"] > .ji.hr.hs > .hv.a2.hu`
- `a[href$="stovler-tursko"] > .ji.hr.hs > .hv.a2.hu`
- `.hq.hr.hs > .hv.a2.hu`
- `.jl.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`
- `.a6[href$="baerekraft"][data-scope-link="true"] > .ji.hr.hs > .hv.a2.hu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 11

#### Affected Elements:

- `a[href$="mid-season-sale"]`
- `.jh.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.jh.fm.be:nth-child(2) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.ho.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `.jj.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.a6[href$="barnehagestart"][data-scope-link="true"]`
- `a[href$="regntoy"]`
- `a[href$="stovler-tursko"]`
- `a[href$="max-499"]`
- `.jl.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.a6[href$="baerekraft"][data-scope-link="true"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.ae`
- `.gy`
- `.h9`
