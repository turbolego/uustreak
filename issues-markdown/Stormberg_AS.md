# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-01-07T00:37:58.941Z
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
- `.gv.an[href$="januarsalg"]`
- `a[aria-label="Ute resirkulert vinterdress"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `a[aria-label="Ute resirkulert vinterdress"] > .is.it.hq > div > .gu > .j6.hr.bd`
- `div:nth-child(3) > .i0.bl.bj > .i1.i2 > li:nth-child(2) > .i3.i4.i5 > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `li:nth-child(2) > .i3.i4.i5 > .is.it.hq > div > .gu > .j6.hr.bd`
- `a[aria-label="Setesdal 2-lags ullongs"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `a[aria-label="Setesdal 2-lags ullongs"] > .is.it.hq > div > .gu > .j6.hr.bd`
- `a[aria-label="Setesdal 2-lags ulltrøye"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `a[aria-label="Setesdal 2-lags ulltrøye"] > .is.it.hq > div > .gu > .j6.hr.bd`
- `div:nth-child(3) > .i0.bl.bj > .i1.i2 > li:nth-child(5) > .i3.i4.i5 > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `li:nth-child(5) > .i3.i4.i5 > .is.it.hq > div > .gu > .j6.hr.bd`
- `li:nth-child(1) > .i3.i4[aria-label="Istind piggsko"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `li:nth-child(2) > .i3.i4[aria-label="Istind piggsko"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `a[aria-label="Hemsedal 2-lags ullsett"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `a[aria-label="Voss 2-lags ulltrøye"] > .i8.bc.bd > .if.id.y > .ik.ig.ih`
- `div:nth-child(5) > .i0.bl.bj > .i1.i2 > li:nth-child(5) > .i3.i4.i5 > .i8.bc.bd > .if.id.y > .ik.ig.ih`
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
- `a[href$="prisras-sko"] > .jd.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(4) > div > .j8.j9.ja > .jc.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jd.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(4) > div > .j8.j9.ja > .jc.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jd.hk.hl > .ho.a2.hn`
- `a[href$="jakker-og-parkas"] > .jd.hk.hl > .ho.a2.hn`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .jd.hk.hl > .ho.a2.hn`
- `.bl.bj.bk:nth-child(6) > div > .j8.j9.ja > .jc.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"] > .jd.hk.hl > .ho.a2.hn`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `.a6[href$="januarsalg"][data-scope-link="true"]`
- `a[href$="prisras-sko"]`
- `.bl.bj.bk:nth-child(4) > div > .j8.j9.ja > .jc.fd.be:nth-child(2) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`
- `.bl.bj.bk:nth-child(4) > div > .j8.j9.ja > .jc.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="jakker-og-parkas"]`
- `.hh.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `.bl.bj.bk:nth-child(6) > div > .j8.j9.ja > .jc.fd.be:nth-child(3) > div > .bj.bk.ar > .hh.bv.ay > .a6[data-scope-link="true"]`

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
