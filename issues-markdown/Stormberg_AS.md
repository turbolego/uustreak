# WCAG Violations Report for Stormberg AS

**Timestamp:** 2025-12-02T00:51:48.728Z
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
- `a[aria-label="Hardanger 2-lags ulltrøye"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Hardanger 2-lags ulltrøye"] > .iz.j0.hv > div > .gu > .jd.hw.bd`
- `li:nth-child(2) > .i9.ia[aria-label="Hafjell vattert selebukse"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `li:nth-child(2) > .i9.ia[aria-label="Hafjell vattert selebukse"] > .iz.j0.hv > div > .gu > .jd.hw.bd`
- `a[aria-label="Hardanger 2-lags ullongs"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Hardanger 2-lags ullongs"] > .iz.j0.hv > div > .gu > .jd.hw.bd`
- `li:nth-child(4) > .i9.ia[aria-label="Hafjell vattert selebukse"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `li:nth-child(4) > .i9.ia[aria-label="Hafjell vattert selebukse"] > .iz.j0.hv > div > .gu > .jd.hw.bd`
- `a[aria-label="Vaberg ullgenser"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Vaberg ullgenser"] > .iz.j0.hv > div > .gu > .jd.hw.bd`
- `a[aria-label="Hovden vinterdress"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `div:nth-child(8) > .i5.bl.bj > .i6.i7 > li:nth-child(2) > .i9.ia.ib > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Lofoten fôret regnvott"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Voss 2-lags ulltrøye"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
- `a[aria-label="Hardanger Half Zip ullgenser"] > .ie.bc.bd > .il.ij.y > .gq.iq.im`
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
- **Count:** 14

#### Affected Elements:

- `div:nth-child(1) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(2) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(3) > .aq.an.am > .au.as[width="11"]`
- `div:nth-child(4) > .aq.an.am > .au.as[width="11"]`
- `a[href$="julegavetips"] > .hh.hi.hj > .hm.hl.au`
- `a[href$="vinterjakker"] > .hu.hi.hj > .hm.hl.au`
- `.ht.be.hs:nth-child(2) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"] > .hu.hi.hj > .hm.hl.au`
- `.ht.be.hs:nth-child(3) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"] > .hu.hi.hj > .hm.hl.au`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .hu.hi.hj > .hm.a2.hl`
- `a[href$="tilbehor"] > .hu.hi.hj > .hm.a2.hl`
- `.a6[href$="nyheter"][data-scope-link="true"] > .hu.hi.hj > .hm.a2.hl`
- `.jf.be.hs:nth-child(1) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"] > .hu.hi.hj > .hm.a2.hl`
- `.jf.be.hs:nth-child(2) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"] > .hu.hi.hj > .hm.a2.hl`
- `.hh.hi.hj > .hm.a2.hl`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 10

#### Affected Elements:

- `a[href$="julegavetips"]`
- `a[href$="vinterjakker"]`
- `.ht.be.hs:nth-child(2) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"]`
- `.ht.be.hs:nth-child(3) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"]`
- `.hf.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `a[href$="tilbehor"]`
- `.hf.bv.ay > .a6[href$="nyheter"][data-scope-link="true"]`
- `.jf.be.hs:nth-child(1) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"]`
- `.jf.be.hs:nth-child(2) > div > .bj.bk.ar > .hf.bv.ay > .a6[data-scope-link="true"]`
- `a[href$="julekalender"]`

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
