# WCAG Violations Report for Stormberg AS

**Timestamp:** 2025-10-30T11:52:32.357Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 30

#### Affected Elements:

- `.gt.dr.ds > div > div`
- `.gv.am[href$="nyheter"]`
- `li:nth-child(1) > .i3.i4[aria-label="Nordlys resirkulert termodress"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `li:nth-child(1) > .i3.i4[aria-label="Nordlys resirkulert termodress"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `div:nth-child(3) > .i0.bl.bj > .i1.i2 > li:nth-child(2) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `div:nth-child(3) > .i0.bl.bj > .i1.i2 > li:nth-child(3) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `div:nth-child(3) > .i0.bl.bj > .i1.i2 > li:nth-child(3) > .i3.i4.i5 > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `li:nth-child(4) > .i3.i4[aria-label="Nordlys resirkulert termodress"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `li:nth-child(4) > .i3.i4[aria-label="Nordlys resirkulert termodress"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `a[aria-label="Nordtoppen parkas"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `a[aria-label="Nordtoppen parkas"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `a[aria-label="Østisen vattert parkas"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `a[aria-label="Østisen vattert parkas"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `li:nth-child(2) > .i3.i4[aria-label="Nordtoppen vinterjakke"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `li:nth-child(2) > .i3.i4[aria-label="Nordtoppen vinterjakke"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `div:nth-child(5) > .i0.bl.bj > .i1.i2 > li:nth-child(3) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `div:nth-child(5) > .i0.bl.bj > .i1.i2 > li:nth-child(4) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `li:nth-child(5) > .i3.i4[aria-label="Nordtoppen vinterjakke"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `li:nth-child(5) > .i3.i4[aria-label="Nordtoppen vinterjakke"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `a[aria-label="Stormflod regnjakke"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `a[aria-label="Stormflod regnjakke"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `div:nth-child(7) > .i0.bl.bj > .i1.i2 > li:nth-child(2) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `div:nth-child(7) > .i0.bl.bj > .i1.i2 > li:nth-child(2) > .i3.i4.i5 > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `a[aria-label="Stave resirkulert hybridjakke"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `a[aria-label="Stave resirkulert hybridjakke"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `div:nth-child(7) > .i0.bl.bj > .i1.i2 > li:nth-child(4) > .i3.i4.i5 > .i8.bc.bd > .im.id.y > .gq.in.if`
- `div:nth-child(7) > .i0.bl.bj > .i1.i2 > li:nth-child(4) > .i3.i4.i5 > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `a[aria-label="Haukeliseter skalljakke"] > .i8.bc.bd > .im.id.y > .gq.in.if`
- `a[aria-label="Haukeliseter skalljakke"] > .iu.iv.hq > div > .gu > .j8.hr.bd`
- `#onetrust-accept-btn-handler`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(5) > h4`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `div:nth-child(1) > h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 11

#### Affected Elements:

- `div:nth-child(1) > .aq.am.an > .au.as[width="11"]`
- `div:nth-child(2) > .aq.am.an > .au.as[width="11"]`
- `div:nth-child(3) > .aq.am.an > .au.as[width="11"]`
- `div:nth-child(4) > .aq.am.an > .au.as[width="11"]`
- `.hi > .hn.hm.au`
- `a[href$="ullfavoritter"] > .jg.jh.ji > .hn.a2.hm`
- `a[href$="vinterjakker"] > .jg.jh.ji > .hn.a2.hm`
- `a[href$="prisras-sko"] > .jg.jh.ji > .hn.a2.hm`
- `a[href$="regntoy"] > .jg.jh.ji > .hn.a2.hm`
- `.a6[href$="turutstyr"][data-scope-link="true"] > .jg.jh.ji > .hn.a2.hm`
- `.a6[href$="barn"][data-scope-link="true"] > .jg.jh.ji > .hn.a2.hm`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 7

#### Affected Elements:

- `a[href$="stormdager"]`
- `a[href$="ullfavoritter"]`
- `a[href$="vinterjakker"]`
- `a[href$="prisras-sko"]`
- `a[href$="regntoy"]`
- `.hg.bv.ay > .a6[href$="turutstyr"][data-scope-link="true"]`
- `.a6[href$="barn"][data-scope-link="true"]`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 3

#### Affected Elements:

- `.ab`
- `.gp`
- `.h0`
