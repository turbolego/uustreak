# WCAG Violations Report for Stormberg AS

**Timestamp:** 2026-11-01T03:40:09.755Z
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
- **Count:** 22

#### Affected Elements:

- **Target:** `.h2.e0.e1 > div > div`
  - **HTML:** `<div>BLACK NOVEMBER er i gang!✨ Se produktene <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/black-november">HER!</a></div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.h4.an[href$="black-november"]`
  - **HTML:** `<a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/black-november">HER!</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svalbard lang dunparkas"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">57%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svalbard lang dunparkas"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">1 299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ute vinterdress m/korte ben"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">35%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Ute vinterdress m/korte ben"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">1 299,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Beredo nødradio m/ Bluetooth"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">30%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Beredo nødradio m/ Bluetooth"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">699,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vattert selebukse"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">65%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vattert selebukse"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">699,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > .c:nth-child(5) > .ij.ik.il > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">53%</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > .c:nth-child(5) > .ij.ik.il > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">899,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > .c:nth-child(1) > .ij.ik.il > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > .c:nth-child(1) > .ij.ik.il > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vinterjakke"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vinterjakke"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vattert jakke"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Hafjell vattert jakke"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svolvær isolerende skallparkas"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Svolvær isolerende skallparkas"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">799,-</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ff0099, background color: #ffffff, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Gjesvær vinterjakke"] > .io.bc.bd > .j1.it.y > .gz.j3.iv`
  - **HTML:** `<div class="iv bc bd aj ak ac iw ix iy bf ey j2 gz j3">INTROPRIS</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #ff0099, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[aria-label="Gjesvær vinterjakke"] > .c0.c1.i6 > div > .h3 > .jm.i7.bd`
  - **HTML:** `<span class="jm i7 bd">699,-</span>`
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

- **Target:** `div:nth-child(1) > .aq.an.ap > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(2) > .aq.an.ap > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `div:nth-child(3) > .aq.an.ap > .au.as[width="11"]`
  - **HTML:** `<img width="11" class="ar as at au" src="/contentassets/7a69847315af4a2a9490bb7184004777/mediamodifier-design.svg?ref=21C3EEBBD2">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-herre.jpg?ref=4E22E0953D&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dame.jpg?ref=EA82CC2936&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-vinterjakker.jpg?ref=A2711DD62A&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-ull.jpg?ref=EAF6A25261&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .i5.ht.hu > .hx.hw.au`
  - **HTML:** `<img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dresser.jpg?ref=89A5407250&amp;w=640&amp;scale=both">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jx.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[href$="nyheter"][data-scope-link="true"] > .jx.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"] > .jx.ht.hu > .hx.a2.hw`
  - **HTML:** `<img class="ar as at au a2 y bv hv hw hx">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 11

#### Affected Elements:

- **Target:** `button[title="Tom handlekurv"]`
  - **HTML:** `<button title="Tom handlekurv" data-test-id="minicart-button" tabindex="0" aria-expanded="false" aria-label="Kundvagn" type="button" class="f h i k l m n s t u v w co bz ai ah cp c8 c9 af ay cq cr cs ct cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Svalbard lang dunparkas"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Svalbard lang dunparkas" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/dunjakker/svalbard-lang-dunparkas-10961090001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Ute vinterdress m/korte ben"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Ute vinterdress m/korte ben" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/kjeledresser/ute-vinterdress-mkorte-ben-10965990001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Beredo nødradio m/ Bluetooth"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Beredo nødradio m/ Bluetooth" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/turutstyr/tilbehor/beredo-nodradio-m-bluetooth-11702260013">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Hafjell vattert selebukse"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hafjell vattert selebukse" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/bukser/selebukser/hafjell-vattert-selebukse-11412090001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(5) > .ig.bl.bj > .ih.ii > .c:nth-child(5) > .ij.ik.il`
  - **HTML:** `<a data-test-id="product-link" aria-label="Svolvær lang vattert skallparkas" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/parkas/svolvar-lang-vattert-skallparkas-115506…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `div:nth-child(7) > .ig.bl.bj > .ih.ii > .c:nth-child(1) > .ij.ik.il`
  - **HTML:** `<a data-test-id="product-link" aria-label="Henningsvær vanntett trenchcoat" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/parkas/henningsvar-vanntett-trenchcoat-11613490…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Hafjell vinterjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hafjell vinterjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/vinterjakker/hafjell-vinterjakke-11411890001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Hafjell vattert jakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Hafjell vattert jakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/jakker/vinterjakker/hafjell-vattert-jakke-11411790001">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Svolvær isolerende skallparkas"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Svolvær isolerende skallparkas" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/dame/jakker/parkas/svolvar-isolerende-skallparkas-1160818509…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gjesvær vinterjakke"]`
  - **HTML:** `<a data-test-id="product-link" aria-label="Gjesvær vinterjakke" class="an ao ap fr a4 a5 a6 fy fx fs ft bv d b c f1 dd ij ik il im in" data-scope-link="true" href="/no/herre/jakker/vinterjakker/gjesvar-vinterjakke-11634190001">`
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
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/herre"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-herre.jpg?ref=4E22E0953D…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/dame"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dame.jpg?ref=EA82CC2936&a…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.ho.hp.bl > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/vinterjakker"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-vinterjakker.jpg?…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/ullundertoy"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-ull.jpg?ref=EAF6A2…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(4) > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/black-november/kjeledresser"><div class="di e3 hr i5 ay ht hu"><img class="ar as at au y bv hv hw hx" src="/globalassets/2026/black-november/portalside/800x500-dresser.jpg?ref=8…`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(6) > div > .i0.i1.i2 > .i4.fm.be:nth-child(1) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/intropriser-nyheter"><div class="di e3 hr jx ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.i4.fm.be:nth-child(2) > div > .bj.bk.ar > .hq.bv.ay > .a6[href$="nyheter"][data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/kampanje/nyheter"><div class="di e3 hr jx ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.bl.bj.bk:nth-child(6) > div > .i0.i1.i2 > .i4.fm.be:nth-child(3) > div > .bj.bk.ar > .hq.bv.ay > .a6[data-scope-link="true"]`
  - **HTML:** `<a class="a4 a5 a6" data-scope-link="true" href="/no/outlet-produkter/outletfunn"><div class="di e3 hr jx ay ht hu"><img class="ar as at au a2 y bv hv hw hx"></div></a>`
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
  - **HTML:** `<div class="gy gz"><div><div class="di h0 h1"><div class="bj bk bl h2 da e0 e1 dc dd de bh f9 b h3 ah"><div><div>BLACK NOVEMBER er i gang!✨ Se produktene <a class="a4 a5 am an h4 ap" data-scope-link="true" href="/no/kampanje/black-november…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.h9`
  - **HTML:** `<div class="h9 b di bv ha at c9">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#onetrust-banner-sdk`
  - **HTML:** `<div id="onetrust-banner-sdk" class="otFloatingRoundedCorner ot-bottom-left vertical-align-content ot-buttons-fw ot-fade-in" tabindex="0" aria-label="<div><br></div>Dine data, ditt valg. " aria-describedby="onetrust-policy-text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

