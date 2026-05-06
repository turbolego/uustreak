# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-05-06T01:08:44.884Z
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
- `.h4.am[href$="maisalg"]`
- `li:nth-child(1) > .ic.id[aria-label="Henningsvær kort teknisk cape"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `li:nth-child(1) > .ic.id[aria-label="Henningsvær kort teknisk cape"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `li:nth-child(2) > .ic.id[aria-label="Henningsvær kort teknisk cape"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `li:nth-child(2) > .ic.id[aria-label="Henningsvær kort teknisk cape"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Bris lettvekts turbukse"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Bris lettvekts turbukse"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Valvik matboks 1650 ml"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Valvik matboks 1650 ml"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Lindum sneaker"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Lindum sneaker"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Lofotregn skallponcho"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Lofotregn skallponcho"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Brattli vanntett tursko junior"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Brattli vanntett tursko junior"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Skomvær skalljakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Harstad skalljakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Notodden cord cargoshorts"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(7) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Lærdal fôret skalljakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
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
- `.jj.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jk.ht.hu > .hx.a2.hw`
- `a[href$="t-skjorter"] > .jk.ht.hu > .hx.a2.hw`
- `.jj.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jk.ht.hu > .hx.a2.hw`
- `.a6[href$="baerekraft"][data-scope-link="true"] > .jk.ht.hu > .hx.a2.hw`
- `a[href$="turbukser"] > .jk.ht.hu > .hx.a2.hw`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .jk.ht.hu > .hx.a2.hw`
- `a[href$="vest-fleece"] > .jk.ht.hu > .hx.a2.hw`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `.a6[href$="maisalg"][data-scope-link="true"]`
- `.jj.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="t-skjorter"]`
- `.jj.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
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
