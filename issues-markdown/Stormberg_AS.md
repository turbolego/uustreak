# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-09-01T04:07:23.601Z
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
- **Count:** 32

#### Affected Elements:

- `.h2.e0.e1 > div > div`
- `.h4.am[href$="max-499"]`
- `a[aria-label="Harstad skallponcho"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `div:nth-child(2) > .i6.bl.bj > .i7.i8 > li:nth-child(2) > .i9.ia.ib > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `div:nth-child(2) > .i6.bl.bj > .i7.i8 > li:nth-child(2) > .i9.ia.ib > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `li:nth-child(3) > .i9.ia[aria-label="Ute vinterdress"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `li:nth-child(3) > .i9.ia[aria-label="Ute vinterdress"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `div:nth-child(2) > .i6.bl.bj > .i7.i8 > li:nth-child(4) > .i9.ia.ib > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `div:nth-child(2) > .i6.bl.bj > .i7.i8 > li:nth-child(4) > .i9.ia.ib > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `a[aria-label="Regnklar regndress"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Regnklar regndress"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `a[aria-label="Lofoten regnvott"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Hemsedal vattert skallponcho"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Bergen regnselebukse barn 1-7"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Regndag regnbukse barn 8-14"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Vestfossen lettvekts regnbukse"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Beredo nødradio m/ Bluetooth"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Beredo nødradio m/ Bluetooth"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `li:nth-child(2) > .i9.ia[aria-label="Ute vinterdress"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `li:nth-child(2) > .i9.ia[aria-label="Ute vinterdress"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `a[aria-label="Ute vinterdress m/korte ben"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Ute vinterdress m/korte ben"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `li:nth-child(4) > .i9.ia[aria-label="Hoppeskog vott barn 1-7"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `li:nth-child(4) > .i9.ia[aria-label="Hoppeskog vott barn 1-7"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `li:nth-child(5) > .i9.ia[aria-label="Hoppeskog vott barn 1-7"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `li:nth-child(5) > .i9.ia[aria-label="Hoppeskog vott barn 1-7"] > .c0.c1.hw > div > .h3 > .ja.hx.bd`
- `a[aria-label="Harstad skallanorakk"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Regndag regnbukse unisex"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Bodø lettvekts regnbukse"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Bodø lettvekts regnjakke"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
- `a[aria-label="Fana skallbukse"] > .ie.bc.bd > .il.ij.y > .gz.im.in`
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
- **Count:** 7

#### Affected Elements:

- `div:nth-child(1) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(2) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(3) > .aq.am.ao > .au.as[width="11"]`
- `.hq > .hv.hu.au`
- `.jg.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .jh.hr.hs > .hv.a2.hu`
- `.jg.fm.be:nth-child(2) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .jh.hr.hs > .hv.a2.hu`
- `.jg.fm.be:nth-child(3) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"] > .jh.hr.hs > .hv.a2.hu`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `.a6[href$="max-499"][data-scope-link="true"]`
- `.jg.fm.be:nth-child(1) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.jg.fm.be:nth-child(2) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`
- `.jg.fm.be:nth-child(3) > div > .bj.bk.ar > .ho.bv.ay > .a6[data-scope-link="true"]`

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
