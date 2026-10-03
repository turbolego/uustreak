# WCAG Violations Report for Læringsverkstedet AS

**Timestamp:** 2026-10-03T04:15:22.272Z
**URL:** [https://laringsverkstedet.no/](https://laringsverkstedet.no/)
**Total Violations:** 8

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.mr-3.js-searchToggle.dropdown-toggle`
  - **HTML:** `<a class="nav-link dropdown-toggle mr-3 js-searchToggle" type="button" aria-haspopup="true" aria-expanded="false">`
  - **Failure summary:** Fix all of the following: ARIA attribute is not allowed: aria-expanded="false"


### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#play-pause`
  - **HTML:** `<button type="button" id="play-pause" class="btn btn-sm" aria-controls="play/pause" tabindex="2">Pause</button>`
  - **Failure summary:** Fix all of the following: Invalid ARIA attribute value: aria-controls="play/pause"


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 22

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogBodyEdgeMoreDetailsLink`
  - **HTML:** `<a id="CybotCookiebotDialogBodyEdgeMoreDetailsLink" href="#" class="">Show details</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.42 (foreground color: #2f991e, background color: #f8f7ee, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(1) > p:nth-child(3)`
  - **HTML:** `<p>Postboks 215<br>2051 Jessheim</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `p:nth-child(6)`
  - **HTML:** `<p>Aktivitetsvegen 2<br>2069 Jessheim</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a:nth-child(8)`
  - **HTML:** `<a class="" href="mailto:kontor@laringsverkstedet.no">kontor@laringsverkstedet.no</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href="tel:639 46 250"]`
  - **HTML:** `<a class="" href="tel:639 46 250">639 46 250</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="kontakt"]`
  - **HTML:** `<a class="" href="/kontakt">Kontakt</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(2) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss/mat">Et Godt Måltid</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(3) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/barnehage">Søk barnehageplass</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(4) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss-2/samfunnsansvar">Samfunnsansvar</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(5) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss/styret">Styret</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(6) > a`
  - **HTML:** `<a class="" href="https://www.dibber.com/dibber-data-protection-statement">Personvernerklæring</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.pb-3.pb-lg-0.col-lg-4:nth-child(2) > .mt-0 > li:nth-child(7) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss/rapporter">Rapporter</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(8) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/rammebetingelser">Rammebetingelser</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `li:nth-child(9) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/blogg/juridisk-og-bærekraft">Juridisk og bærekraft</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(1) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/barnehage">Finn din barnehage</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(2) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss">Om oss</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(3) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/om-oss/mat">Et Godt Måltid</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(4) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/konseptbarnehager">Konseptbarnehager</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(5) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/foreldretips">Foreldretips</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(6) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/nyheter">Nyheter</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-lg-4.col-12:nth-child(3) > .mt-0 > li:nth-child(7) > a`
  - **HTML:** `<a class="" href="https://laringsverkstedet.no/jobb-hos-læringsverkstedet">Jobb med oss</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.mt-4.col-12 > p`
  - **HTML:** `<p>Vi har hjerte for deg</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.14 (foreground color: #ffffff, background color: #6da000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.container:nth-child(3) > .mb-5.justify-content-center.row > .col-md-4.my-3.col-lg-4:nth-child(1) > .card.w-100 > .card-body > .card-title > a > h5`
  - **HTML:** `<h5> Tips og råd om barnehageplass </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.container:nth-child(5) > .mb-5.justify-content-center.row > .col-md-4.my-3.col-lg-4:nth-child(1) > .card.w-100 > .card-body > .card-title > a > h5`
  - **HTML:** `<h5> Jobb hos oss </h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#mainMenu`
  - **HTML:** `<nav id="mainMenu" class="d-flex justify-content-between menu menu-- menu--" style="--headerBackgroundColor: #6da000; --headerTextColor: #ffffff">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.navbar-brand`
  - **HTML:** `<a class="navbar-brand mr-0 pb-0" href="https://laringsverkstedet.no/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `p:nth-child(3) > a`
  - **HTML:** `<a href="https://laringsverkstedet.no/jobb-hos-læringsverkstedet"><br></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.mt-5 > a[href$="laringsverkstedet.no/"]`
  - **HTML:** `<a href="https://laringsverkstedet.no/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.mt-3.col-12 > a[target="_BLANK"]:nth-child(1)`
  - **HTML:** `<a href="https://www.facebook.com/laringsverkstedet" target="_BLANK">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.mt-3.col-12 > a[target="_BLANK"]:nth-child(2)`
  - **HTML:** `<a href="https://www.instagram.com/explore/tags/læringsverkstedet/" target="_BLANK">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#skipnavigation`
  - **HTML:** `<a class="scroll" id="skipnavigation" href="#content">Gå til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#play-pause`
  - **HTML:** `<button type="button" id="play-pause" class="btn btn-sm" aria-controls="play/pause" tabindex="2">Pause</button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

