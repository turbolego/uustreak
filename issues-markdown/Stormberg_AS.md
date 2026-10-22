# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-10-22T04:02:22.311Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 8

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 33

#### Affected Elements:

- **Target:** `.h2.e0.e1 > div > div`
  - **HTML:** `<div>Nyheter til intropris!✨ Sjekk tilbudene <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/intropriser-nyheter">HER!</a></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.h4.am.an`
  - **HTML:** `<a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/intropriser-nyheter">HER!</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">56%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(2) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">56%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(2) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">68%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Trolltunga skalljakke"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">60%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Trolltunga skalljakke"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">999,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">60%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">199,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 8-14"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regnsky regnsett barn 8-14"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Finnskogen vanntett tursko"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Finnskogen vanntett tursko"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Lofoten fôret regnvott"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regndag regnbukse unisex"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">17%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Regndag regnbukse unisex"] > .c0.c1.hz > div > .h3 > .jd.i0.bd`
  - **HTML:** `<span class="jd i0 bd">249,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hemsedal vattert skallponcho"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Bodø lettvekts regnjakke"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Bodø lettvekts regnbukse"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ic.id[aria-label="Vinterberg vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Frostli vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(3) > .ic.id[aria-label="Vinterberg vinterjakke"] > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie > .ih.bc.bd > .io.im.y > .gz.iu.ip`
  - **HTML:** `<div class="ip bc bd aj ak ac iq ir is bf ey it gz iu">LAVPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 12

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

- **Target:** `a[href$="stormdager"] > .hs.ht.hu > .hx.hw.au`
  - **HTML:** `<img src="/globalassets/2026/forside/stormdager/1400x500-stormdager-forside.jpg?ref=FBDD2C32E6&amp;w=1920&amp;scale=both" class="ar as at au y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="oktoberkupp"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="prisras-sko"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="tilbehor"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ju.fm.be:nth-child(4) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="fleece"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.k2.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.k2.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jv.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.hs.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 21

#### Affected Elements:

- **Target:** `button[title="Tom handlekurv"]`
  - **HTML:** `<button title="Tom handlekurv" data-test-id="minicart-button" tabindex="0" aria-expanded="false" aria-label="Kundvagn" type="button" class="f h i k l m n s t u v w co bz ai ah cp c8 c9 af ay cq cr cs ct cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(1) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Jessheim vanntett vinterstøvel" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/vintersko/jessheim-vanntett-vinterstovel-11435370046">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(2) > .ic.id[aria-label="Jessheim vanntett vinterstøvel"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Jessheim vanntett vinterstøvel" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/vintersko/jessheim-vanntett-vinterstovel-11435359355">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterhei parkas med dun og fjær" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/parkas/vinterhei-parkas-med-dun-og-fjar-114101…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Trolltunga skalljakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Trolltunga skalljakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/skalljakker/trolltunga-skalljakke-11326290001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(3) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Sognefjord teknisk boxer 5-pack" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/herre/undertoy/boxere/sognefjord-teknisk-boxer-5-pack-11599…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(1) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterpote vanntett ullfôret vintersko barn" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/vintersko/vinterpote-vanntett-ullforet-vint…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(2) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Henningsvær vanntett trenchcoat" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/parkas/henningsvar-vanntett-trenchcoat-11613490…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(5) > .i9.bl.bj > .ia.ib > li:nth-child(3) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterpote vanntett ullfôret vintersko barn" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/vintersko/vinterpote-vanntett-ullforet-vint…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Regnsky regnsett barn 8-14"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Regnsky regnsett barn 8-14" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/barn/bukser/regnbukser/regnsky-regnsett-barn-8-14-11665160013">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Finnskogen vanntett tursko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Finnskogen vanntett tursko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/tursko/lave-tursko/finnskogen-vanntett-tursko-11625185091">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Lofoten fôret regnvott"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Lofoten fôret regnvott" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/hansker-og-votter/lofoten-foret-regnvott-11531090001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Regndag regnbukse unisex"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Regndag regnbukse unisex" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/regntoy/regndag-regnbukse-unisex-10289190001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Hemsedal vattert skallponcho"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hemsedal vattert skallponcho" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/skalljakker/hemsedal-vattert-skallponcho-115320900…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Bodø lettvekts regnjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Bodø lettvekts regnjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/regnjakker/bodo-lettvekts-regnjakke-11478960013">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Bodø lettvekts regnbukse"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Bodø lettvekts regnbukse" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/regntoy/bodo-lettvekts-regnbukse-11479160013">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(1) > .ic.id[aria-label="Vinterberg vinterjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterberg vinterjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/vinterjakker/vinterberg-vinterjakke-11523090001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Frostli vinterjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Frostli vinterjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/dame/jakker/vinterjakker/frostli-vinterjakke-11392590001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(3) > .ic.id[aria-label="Vinterberg vinterjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterberg vinterjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/herre/jakker/vinterjakker/vinterberg-vinterjakke-11523990001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(4) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Vinterberg vinterjakke barn 8-14" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/barn/jakker/vinterjakker/vinterberg-vinterjakke-barn-8-14-…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(9) > .i9.bl.bj > .ia.ib > li:nth-child(5) > .ic.id.ie`
  - **HTML:** `<a data-test-id="product-link" aria-label="Snefjord ullfôret lettvekts termostøvel barn" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ic id ie if ig" data-scope-link="true" href="/no/sko/gummistovler/snefjord-ullforet-lettvekts-t…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 9

#### Affected Elements:

- **Target:** `a[href$="stormdager"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/stormdager"><div class="di e3 hr hs ay ht hu"><img src="/globalassets/2026/forside/stormdager/1400x500-stormdager-forside.jpg?ref=FBDD2C32E6&amp;w=1920&amp;scale=both" class="ar…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="oktoberkupp"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/oktoberkupp"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="prisras-sko"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/prisras-sko"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="tilbehor"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/tilbehor"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ju.fm.be:nth-child(4) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/outlet-produkter/outletfunn"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="fleece"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/fleece"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.k2.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/ull-og-superundertoy"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.k2.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/ukens-deals/jakker"><div class="di e3 hr jv ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="max-499"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/max-499"><div class="di e3 hr hs ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.ae`
  - **HTML:** `<div class="x ab b ac ae af ag ah ai aj ak al">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.gy`
  - **HTML:** `<div class="gy gz"><div><div class="di h0 h1"><div class="bj bk bl h2 da e0 e1 dc dd de bh f9 b h3 ah"><div><div>Nyheter til intropris!✨ Sjekk tilbudene <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/intropriser-nyh…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.h9`
  - **HTML:** `<div class="h9 b di bv ha at c9">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otFloatingRoundedCorner ot-bottom-left vertical-align-content ot-buttons-fw ot-fade-in" tabindex="0" aria-label="<div><br></div>Dine data, ditt valg. " aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

