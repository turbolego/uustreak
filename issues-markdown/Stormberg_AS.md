# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-10-08T10:38:45.172Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 7

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.c2.c3.c4:nth-child(1)`
  - **HTML:** `<div aria-selected="true" class="bz ai ah c0 c1 c2 c3 t x c4 c5 c6 bi">Privat</div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-selected="true"

- **Target:** `.c2.c3.c4:nth-child(2)`
  - **HTML:** `<div aria-selected="false" class="bz ai ah c0 c1 c2 c3 t x c4 c5 c6 ab">Bedrift</div>`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-selected="false"


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 33

#### Affected Elements:

- **Target:** `.h2.e0.e1 > div > div`
  - **HTML:** `<div>Opptil 50% på Stormdager!🔥 Se salget <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/stormdager">HER!</a></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.h4.am[href$="stormdager"]`
  - **HTML:** `<a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/stormdager">HER!</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordtoppen vattert vest"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">50%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordtoppen vattert vest"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordtoppen parkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">53%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordtoppen parkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">699,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Trolltunga skalljakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">60%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Trolltunga skalljakke"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">999,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">60%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">54%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">599,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Bodø lettvekts regnjakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Bodø lettvekts regnbukse"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Voieåsen vattert poncho"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">20%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Voieåsen vattert poncho"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Harstad skallponcho"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Lofoten fôret regnvott"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 8-14"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 8-14"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(3) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(3) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">599,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 1-7"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 1-7"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(5) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(5) > .ic.id[aria-label="Vesthav vattert regnparkas"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">599,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Vinterberg vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hemsedal 2-lags ullsett"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Frostli vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regndag regnbukse unisex"] > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.ip.iq`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(5) > h4`
  - **HTML:** `<h4 class="i1 de f9"></h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(1) > h4`
  - **HTML:** `<h4 class="i1 de f9">INFORMASJON</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- **Target:** `div:nth-child(1) > .aq.am.an > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(2) > .aq.am.an > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(3) > .aq.am.an > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.a6[href$="stormdager"][data-scope-link="true"] > .hs.ht.hu > .hx.hw.au`
  - **HTML:** `<img src="/globalassets/2026/forside/stormdager/1400x500-stormdager-forside.jpg?ref=FBDD2C32E6&amp;w=1920&amp;scale=both" class="ar as at au y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="prisras-sko"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="tilbehor"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="fleece"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jw.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.hs.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.a6[href$="stormdager"][data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/stormdager"><div class="di e3 hr hs ay ht hu"><img src="/globalassets/2026/forside/stormdager/1400x500-stormdager-forside.jpg?ref=FBDD2C32E6&amp;w=1920&amp;scale=both" class="ar…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="prisras-sko"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/prisras-sko"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="tilbehor"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/tilbehor"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/outlet-produkter/outletfunn"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="fleece"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/fleece"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/ull-og-superundertoy"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(6) > div > .jr.js.jt > .jv.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/ukens-deals/jakker"><div class="di e3 hr jw ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="max-499"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/max-499"><div class="di e3 hr hs ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.ae`
  - **HTML:** `<div class="x ab b ac ae af ag ah ai aj ak al">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gy`
  - **HTML:** `<div class="gy gz"><div><div class="di h0 h1"><div class="bj bk bl h2 da e0 e1 dc dd de bh f9 b h3 ah"><div><div>Opptil 50% på Stormdager!🔥 Se salget <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/stormdager">HER!<…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.h9`
  - **HTML:** `<div class="h9 b di bv ha at c9">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otFloatingRoundedCorner ot-bottom-left vertical-align-content ot-buttons-fw ot-fade-in" tabindex="0" aria-label="<div><br></div>Dine data, ditt valg. " aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

