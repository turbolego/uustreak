# WCAG Violations Report for Kulturfabrikken sortland KF

**Timestamp:** 2026-11-23T06:22:45.261Z
**URL:** [https://kulturfabrikkensortland.no/](https://kulturfabrikkensortland.no/)
**Total Violations:** 5

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.btn-outline-secondary`
  - **HTML:** `<button class="btn btn-outline-secondary" type="button" value="search"><i class="fas fa-search"></i></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > .date > b`
  - **HTML:** `<b>Torsdag 03. desember kl. 19.00</b>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > p`
  - **HTML:** `<p>Stageway og All Things Live</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(4)`
  - **HTML:** `<div><b>Arena:</b> Møysalen</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(4) > b`
  - **HTML:** `<b>Arena:</b>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(5)`
  - **HTML:** `<div><b>Pris:</b> Ordinær 680,-</div>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > div:nth-child(5) > b`
  - **HTML:** `<b>Pris:</b>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.carousel-caption.d-xs-block.text-left > .btn-block.btn-default[href$="ylvis-og-calle/"]`
  - **HTML:** `<a class="btn btn-default btn-block" href="/program/ylvis-og-calle/">Les mer</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.33 (foreground color: #ffffff, background color: #918c86, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.carousel-item-left.active.carousel-item > .carousel-caption.d-xs-block.text-left > h5`
  - **HTML:** `<h5></h5>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.carousel-item-next > .carousel-caption.d-xs-block.text-left > h5`
  - **HTML:** `<h5></h5>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `a[rel="noopener"][target="_blank"]:nth-child(4)`
  - **HTML:** `<a rel="noopener" href="https://uustatus.no/nb/erklaringer/publisert/33446861-dfff-46c9-95c1-f8830689dd14" target="_blank"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 30

#### Affected Elements:

- **Target:** `.carousel-item-left.active.carousel-item`
  - **HTML:** `<div class="carousel-item active carousel-item-left">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.carousel-item-next`
  - **HTML:** `<div class="carousel-item carousel-item-next carousel-item-left">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.main-page-navigation`
  - **HTML:** `<ul class="nav main-page-navigation">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 491.item.\35 441:nth-child(1) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 491.item.\35 441:nth-child(1) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 494.\35 491.item:nth-child(2) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 494.\35 491.item:nth-child(2) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 491.item.\35 441:nth-child(5) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 491.item.\35 441:nth-child(5) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\31 091.\35 569.item:nth-child(8) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\31 091.\35 569.item:nth-child(8) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 492.\35 570.\31 090 > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 492.\35 570.\31 090 > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 569.item.\35 441:nth-child(10) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 569.item.\35 441:nth-child(10) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 493.item.\35 441:nth-child(12) > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 493.item.\35 441:nth-child(12) > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 495.\31 090.item > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 495.\31 090.item > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 578.\35 569.item > .image-wrapper`
  - **HTML:** `<div class="image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.\35 578.\35 569.item > .item-link`
  - **HTML:** `<div class="item-link">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#grid > .see-all[onclick="ShowAllPrograms(event, this);"][href="#"]`
  - **HTML:** `<a href="#" class="see-all" onclick="ShowAllPrograms(event, this);"> <h3>+ Vis flere arrangementer</h3> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bottom-section > .container`
  - **HTML:** `<div class="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.order-item.col-sm-6.col-12:nth-child(1) > .order-title`
  - **HTML:** `<div class="order-title">Bestill møterom</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.order-item.col-sm-6.col-12:nth-child(1) > .order-item-body`
  - **HTML:** `<div class="order-item-body"> Trenger du rom til møter, kurs og konferanse? </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.order-item.col-sm-6.col-12:nth-child(2) > .order-title`
  - **HTML:** `<div class="order-title">Book kulturarrangement</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.order-item.col-sm-6.col-12:nth-child(2) > .order-item-body`
  - **HTML:** `<div class="order-item-body"> Vil du arrangere noe på Kulturfabrikken? </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.news-section`
  - **HTML:** `<div class="news-section text-center">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer > .container`
  - **HTML:** `<div class="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cookie-popup-inner`
  - **HTML:** `<div class="cookie-popup-inner">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

