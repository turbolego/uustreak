# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-11-22T06:07:32.140Z
**URL:** [https://www.stormberg.com/no](https://www.stormberg.com/no)
**Total Violations:** 7

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
- **Count:** 32

#### Affected Elements:

- **Target:** `.h2.e0.e1 > div > div`
  - **HTML:** `<div>DAGSKUPP + BLACK WEEK SALG! Se utvalget <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/black-november/dk-bn">HER!</a></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.h4.an.am`
  - **HTML:** `<a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/black-november/dk-bn">HER!</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Longyearbyen lang dunparkas"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">57%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Longyearbyen lang dunparkas"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">1 299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Rauland 2-lags ullongs"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">50%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Rauland 2-lags ullongs"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svalbard dunparkas"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">48%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svalbard dunparkas"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">1 299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > li:nth-child(4) > .ij.ik.il > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">60%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > li:nth-child(4) > .ij.ik.il > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Rauland 2-lags ulltrøye"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">50%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Rauland 2-lags ulltrøye"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(2) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(2) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(4) > .ij.ik[aria-label="Istind piggsko"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(4) > .ij.ik[aria-label="Istind piggsko"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Snøheim høy ullfôret tursko"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Snøheim høy ullfôret tursko"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">699,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Istind piggsko"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">56%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Istind piggsko"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Grefsen vanntett vinterstøvel"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">62%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Grefsen vanntett vinterstøvel"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">499,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(8) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">53%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(8) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">699,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordisen vanntett høy piggsko"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">47%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Nordisen vanntett høy piggsko"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(5) > .ij.ik[aria-label="Istind piggsko"] > .io.bc.bd > .j1.it.y > .gz.j2.j3`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">56%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(5) > .ij.ik[aria-label="Istind piggsko"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">399,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `div:nth-child(5) > h4`
  - **HTML:** `<h4 class="i8 de f9"></h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 11

#### Affected Elements:

- **Target:** `div:nth-child(1) > .aq.an.am > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(2) > .aq.an.am > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(3) > .aq.an.am > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-herre.jpg?ref=6D452A5825&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dame.jpg?ref=CFEAE785D6&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-vinterjakker.jpg?ref=27E16737BE&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-turutstyr.jpg?ref=7F890114B2&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-fleece.jpg?ref=7AE6648569&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-ull.jpg?ref=E975C3B4AF&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[href$="julegavetips"] > .jp.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.jo.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jp.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 16

#### Affected Elements:

- **Target:** `button[title="Tom handlekurv"]`
  - **HTML:** `<button title="Tom handlekurv" data-test-id="minicart-button" tabindex="0" aria-expanded="false" aria-label="Kundvagn" type="button" class="f h i k l m n s t u v w co bz ai ah cp c8 c9 af ay cq cr cs ct cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Longyearbyen lang dunparkas"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Longyearbyen lang dunparkas" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/parkas/longyearbyen-lang-dunparkas-10971590001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Rauland 2-lags ullongs"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Rauland 2-lags ullongs" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/undertoy/ullundertoy/rauland-2-lags-ullongs-10360880102">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Svalbard dunparkas"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Svalbard dunparkas" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/jakker/dunjakker/dunparkas/svalbard-dunparkas-11368090001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > li:nth-child(4) > .ij.ik.il`
  - **HTML:** `<a data-test-id="product-link" aria-label="Isnes ullfôret vanntett vinterstøvel" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/sko/vintersko/isnes-ullforet-vanntett-vinterstovel-114…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Rauland 2-lags ulltrøye"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Rauland 2-lags ulltrøye" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/undertoy/ullundertoy/rauland-2-lags-ulltroye-10360780102">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hemsedal 2-lags ullsett" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/undertoy/ullundertoy/ulltroye/hemsedal-2-lags-ullsett-11539759…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(2) > .ij.ik[aria-label="Hemsedal 2-lags ullsett"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hemsedal 2-lags ullsett" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/undertoy/ullundertoy/ulltroye/hemsedal-2-lags-ullsett-1153987…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hemsedal 2-lags ullsett barn 1-7" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/barn/undertoy/ullundertoy/ulltroye/hemsedal-2-lags-ullsett…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(4) > .ij.ik[aria-label="Istind piggsko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Istind piggsko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/sko/piggsko/istind-piggsko-11317940211">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Snøheim høy ullfôret tursko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Snøheim høy ullfôret tursko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/sko/vintersko/snoheim-hoy-ullforet-tursko-11646070398">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(1) > .ij.ik[aria-label="Istind piggsko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Istind piggsko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/sko/piggsko/istind-piggsko-11317990093">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Grefsen vanntett vinterstøvel"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Grefsen vanntett vinterstøvel" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/sko/vintersko/grefsen-vanntett-vinterstovel-11421290093">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(8) > .ig.bl.bj > .ih.ii > li:nth-child(3) > .ij.ik.il`
  - **HTML:** `<a data-test-id="product-link" aria-label="Grefsen vanntett høy vinterstøvel" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/sko/vintersko/grefsen-vanntett-hoy-vinterstovel-115433900…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Nordisen vanntett høy piggsko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Nordisen vanntett høy piggsko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/sko/piggsko/nordisen-vanntett-hoy-piggsko-11649290001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(5) > .ij.ik[aria-label="Istind piggsko"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Istind piggsko" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/sko/piggsko/istind-piggsko-11318090093">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/herre"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-herre.jpg?ref=6D452A5825…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/dame"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dame.jpg?ref=CFEAE785D6&a…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/vinterjakker"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-vinterjakker.jpg?…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/turutstyr"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-turutstyr.jpg?ref=7F…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/fleece"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-fleece.jpg?ref=7AE66485…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/ullundertoy"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-ull.jpg?ref=E975C3…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[href$="julegavetips"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/julegavetips"><div class="di e3 hr jp ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.jo.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/outlet-produkter/outletfunn"><div class="di e3 hr jp ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
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
  - **HTML:** `<div class="gy gz">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.h9`
  - **HTML:** `<div class="h9 b di bv ha at c9">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otFloatingRoundedCorner ot-bottom-left vertical-align-content ot-buttons-fw ot-fade-in" tabindex="0" aria-label="<div><br></div>Dine data, ditt valg. " aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

