# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-01-01T00:31:38.134Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 18

#### Affected Elements:

- `.gt.dr.ds > div > div`
- `.gv.an[href$="nyheter"]`
- `li:nth-child(1) > .i2.i3[aria-label="Ute resirkulert vinterdress"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(1) > .i2.i3[aria-label="Ute resirkulert vinterdress"] > .ir.is.hp > div > .gu > .j5.hq.bd`
- `div:nth-child(2) > .hz.bl.bj > .i0.i1 > li:nth-child(2) > .i2.i3.i4 > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(2) > .i2.i3.i4 > .ir.is.hp > div > .gu > .j5.hq.bd`
- `div:nth-child(2) > .hz.bl.bj > .i0.i1 > li:nth-child(3) > .i2.i3.i4 > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(3) > .i2.i3.i4 > .ir.is.hp > div > .gu > .j5.hq.bd`
- `li:nth-child(4) > .i2.i3[aria-label="Ute resirkulert vinterdress"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(4) > .i2.i3[aria-label="Ute resirkulert vinterdress"] > .ir.is.hp > div > .gu > .j5.hq.bd`
- `div:nth-child(2) > .hz.bl.bj > .i0.i1 > li:nth-child(5) > .i2.i3.i4 > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(5) > .i2.i3.i4 > .ir.is.hp > div > .gu > .j5.hq.bd`
- `a[aria-label="Trysil vinterjakke"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `a[aria-label="Hemsedal 2-lags ullsett"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(3) > .i2.i3[aria-label="Trysil vattert selebukse"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `div:nth-child(4) > .hz.bl.bj > .i0.i1 > li:nth-child(4) > .i2.i3.i4 > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
- `li:nth-child(5) > .i2.i3[aria-label="Trysil vattert selebukse"] > .i7.bc.bd > .ie.ic.y > .if.ig.ih`
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

- `div:nth-child(1) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(2) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(3) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(4) > .aq.an.am > .au.as[width="11"]`
- `.hj > .ho.hn.au`
- `a[href$="vinterjakker"] > .jc.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(3) > div > .j7.j8.j9 > .jb.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jc.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(3) > div > .j7.j8.j9 > .jb.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jc.hk.hl > .ho.a2.hn`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .jc.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(5) > div > .j7.j8.j9 > .jb.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jc.hk.hl > .ho.a2.hn`
- `a[href$="prisras-sko"] > .jc.hk.hl > .ho.a2.hn`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `.a6[href$="nyheter"][data-scope-link="true"]`
- `a[href$="vinterjakker"]`
- `.bl.bj.bk:nth-child(3) > div > .j7.j8.j9 > .jb.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`
- `.bl.bj.bk:nth-child(3) > div > .j7.j8.j9 > .jb.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`
- `.hh.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `.bl.bj.bk:nth-child(5) > div > .j7.j8.j9 > .jb.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="prisras-sko"]`

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

- `.ab`
- `.gp`
- `.h0`
