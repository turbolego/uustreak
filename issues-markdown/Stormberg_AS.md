# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-10-07T19:34:58.953Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 7

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- `.c2.c3.c4:nth-child(1)`
- `.c2.c3.c4:nth-child(2)`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 32

#### Affected Elements:

- `.h2.e0.e1 > div > div`
- `.h4.am[href$="stormdager"]`
- `a[aria-label="Nordtoppen vattert vest"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Nordtoppen vattert vest"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Nordtoppen parkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Nordtoppen parkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Trolltunga skalljakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Trolltunga skalljakke"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Regndag regnbukse unisex"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Bodø lettvekts regnbukse"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Bodø lettvekts regnjakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Harstad skallponcho"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Lofoten fôret regnvott"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(7) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(7) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Regnsky regnsett barn 8-14"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Regnsky regnsett barn 8-14"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Regnsky regnsett barn 1-7"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Regnsky regnsett barn 1-7"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `li:nth-child(4) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `li:nth-child(4) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `li:nth-child(5) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `li:nth-child(5) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
- `a[aria-label="Vinterberg vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
- `a[aria-label="Harstad skallanorakk"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(5) > h4`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- `div:nth-child(1) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(2) > .aq.am.ao > .au.as[width="11"]`
- `div:nth-child(3) > .aq.am.ao > .au.as[width="11"]`
- `.a6[href$="stormdager"][data-scope-link="true"] > .hs.ht.hu > .hx.hw.au`
- `a[href$="prisras-sko"] > .jw.ht.hu > .hx.a2.hw`
- `a[href$="tilbehor"] > .jw.ht.hu > .hx.a2.hw`
- `.bl.bj.bk:nth-child(4) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
- `a[href$="fleece"] > .jw.ht.hu > .hx.a2.hw`
- `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
- `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
- `.hs.ht.hu > .hx.a2.hw`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- `.a6[href$="stormdager"][data-scope-link="true"]`
- `a[href$="prisras-sko"]`
- `a[href$="tilbehor"]`
- `.bl.bj.bk:nth-child(4) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="fleece"]`
- `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="max-499"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- `.ae`
- `.gy`
- `.h9`
- `#onetrust-banner-sdk`
