# WCAG Violations Report for Hotel Alexandra AS

**Timestamp:** 2026-10-10T08:30:18.003Z
**URL:** [https://www.alexandra.no/no/framside.aspx](https://www.alexandra.no/no/framside.aspx)
**Total Violations:** 10

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.big-booking-box_form_ext-button`
  - **HTML:** `<a role="button" href="https://ibe.smarthotel.nl/?id=69b94cf4-e953-498e-a1a7-315dd52ed0a3&amp;language=nn-NO" class="big-booking-box_form_ext-button"> Bestill rom her </a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #a29060, font size: 16.5pt (22px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `input[value="Abonner"]`
  - **HTML:** `<input type="submit" value="Abonner" name="subscribe" id="mc-embedded-subscribe" class="button">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.25 (foreground color: #f6f6f6, background color: #99875b, font size: 16.5pt (22px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.map-box_content > a[target="_blank"]`
  - **HTML:** `<a target="_blank" href="https://www.google.com/maps/dir/Current+Location/61.872814,6.846338,12">Lag reiserute i Google Maps</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #a29060, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `button`
  - **HTML:** `<button type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button">Abonner</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.25 (foreground color: #f6f6f6, background color: #99875b, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="mailto:alex@alexandra.no"]`
  - **HTML:** `<a href="mailto:alex@alexandra.no">alex@alexandra.no</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.96 (foreground color: #a29060, background color: #343434, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.col-md-first.col-sm-first.col-xs-first:nth-child(2) > .article-box.grid-item > .article-box_content > .article-box_title`
  - **HTML:** `<h3 class="article-box_title"> Tilbod og pakkar </h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### <html> element must have a lang attribute

- **Impact:** serious
- **Description:** Ensure every HTML document has a lang attribute
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/html-has-lang?application=playwright
- **Tags:** cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1, ACT, RGAAv4, RGAA-8.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html xmlns:umbraco="http://umbraco.org" class="noie no wf-opensans-...">`
  - **Failure summary:** Fix any of the following: The <html> element does not have a lang attribute


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- **Target:** `.submit-placeholder`
  - **HTML:** `<img class="submit-placeholder submit-placeholder-js" src="/css/img/icons/icon-search-2x.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-first.col-sm-first.col-xs-first:nth-child(2) > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/198711/dji_0354-matt-macsemniuk_hotel-alexandra_2500.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-sm-last.col-xs-last.col-xs-6:nth-child(3) > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/197855/_bd_8951.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-first.col-sm-last.col-xs-last > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/198197/large-alexandra-hotel-ch_-visitnorwaycom-5.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-sm-first.col-xs-first.col-xs-6:nth-child(6) > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/198235/_bd_2639-2.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-last.col-sm-last.col-xs-last > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/196550/111.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-first.col-sm-first.col-xs-first:nth-child(8) > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/198247/_bd_6739_2500.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.col-md-last.col-sm-first.col-xs-first:nth-child(10) > .article-box.grid-item > .article-box_image > img`
  - **HTML:** `<img src="/media/198637/_bd_8183.jpg?w=600&amp;h=300&amp;mode=crop&amp;anchor=middlecenter">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.footer_logo--secondary-logo`
  - **HTML:** `<img class="footer_logo--secondary-logo" src="/css/img/Miljofyrtarn_Sertifisert-virksomhet_Hvit-horisontal_Liten.png">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Image buttons must have alternative text

- **Impact:** critical
- **Description:** Ensure <input type="image"> elements have alternative text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/input-image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, wcag412, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, EN-9.4.1.2, ACT, RGAAv4, RGAA-1.1.3
- **Count:** 1

#### Affected Elements:

- **Target:** `input[src$="btn-search.png"]`
  - **HTML:** `<input type="image" class="submit" src="/css/img/btn-search.png">`
  - **Failure summary:** Fix any of the following: Element has no alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element has no tit…


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.search-bar-js`
  - **HTML:** `<input id="site-search" class="search-bar search-bar-js" name="search" type="search" placeholder="">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `form[action="/no/search.aspx"] > .search-bar[name="search"][type="search"]`
  - **HTML:** `<input id="site-search" class="search-bar" name="search" type="search">`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html xmlns:umbraco="http://umbraco.org" class="noie no wf-opensans-...">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 5

#### Affected Elements:

- **Target:** `.navigation_logo`
  - **HTML:** `<a href="https://www.alexandra.no/no/framside.aspx" class="navigation_logo"> </a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.footer_logo > a`
  - **HTML:** `<a href="https://www.alexandra.no/no.aspx"></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(1)`
  - **HTML:** `<a target="_blank" href="http://www.tripadvisor.com/Hotel_Review-g939035-d455513-Reviews-Hotel_Alexandra-Stryn_Stryn_Municipality_Sogn_og_Fjordane_Western_Norway.html"><i class="icon icon-tripadvisor"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[target="_blank"]:nth-child(2)`
  - **HTML:** `<a target="_blank" href="https://www.instagram.com/alexandraloen/"><i class="icon icon-instagram"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.sosial-box > a:nth-child(3)`
  - **HTML:** `<a href="https://www.facebook.com/hotelalexandraloen/"><i class="icon icon-facebook"></i></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, maximum-scale=1.0">`
  - **Failure summary:** Fix any of the following: maximum-scale on <meta> tag disables zooming on mobile devices


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- **Target:** `.desktop`
  - **HTML:** `<div class="js-banner banner banner-- desktop" style="background-image: url('/media/198636/32.jpg?w=1440&h=520&mode=crop&anchor=middlecenter')">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-first.col-sm-first.col-xs-first:nth-child(2)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-md-first col-sm-first col-xs-first ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-last.col-xs-last.col-xs-6:nth-child(3)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-sm-last col-xs-last ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.newsletter-heading`
  - **HTML:** `<h3 class="newsletter-heading">Nyhetsbrev</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.newsletter-box > p`
  - **HTML:** `<p>Meld deg på nyheitsbrevet vårt </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.newsletter-box > div > .validate.newsletter-form[name="mc-embedded-subscribe-form"] > div > .mc-field-group`
  - **HTML:** `<div class="mc-field-group"> <label for="mce-EMAIL"></label> <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Di e-postadresse"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-first.col-sm-last.col-xs-last`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-md-first col-sm-last col-xs-last ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-first.col-xs-first.col-xs-6:nth-child(6)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-sm-first col-xs-first ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-last.col-sm-last.col-xs-last`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-md-last col-sm-last col-xs-last ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-first.col-sm-first.col-xs-first:nth-child(8)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-md-first col-sm-first col-xs-first ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-last.col-xs-last.col-xs-6:nth-child(9)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-sm-last col-xs-last ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-last.col-sm-first.col-xs-first:nth-child(10)`
  - **HTML:** `<div class="col-xs-6 col-sm-6 col-md-4 column col-md-last col-sm-first col-xs-first ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.map-box_content`
  - **HTML:** `<div class="map-box_content">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer_logo`
  - **HTML:** `<div class="footer_logo"> <a href="https://www.alexandra.no/no.aspx"></a> <img class="footer_logo--secondary-logo" src="/css/img/Miljofyrtarn_Sertifisert-virksomhet_Hvit-horisontal_Liten.png"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer_item:nth-child(1)`
  - **HTML:** `<div class="footer_item"> <span class="footer_item_title">Tlf:</span> <div class="footer_item_content"> <span>+47 57 87 50 00</span> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer_item:nth-child(2)`
  - **HTML:** `<div class="footer_item"> <span class="footer_item_title">Adresse</span> <div class="footer_item_content"> <p>Hotel Alexandra</p> <p>Lodalsvegen 22, 6789 Loen</p> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.search-item > .footer_item_title`
  - **HTML:** `<span class="footer_item_title">Søk</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `form[action="/no/search.aspx"] > .search-bar[name="search"][type="search"]`
  - **HTML:** `<input id="site-search" class="search-bar" name="search" type="search">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer-newsletter > .footer_item_title`
  - **HTML:** `<span class="footer_item_title">Meld deg på nyheitsbrevet vårt</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer-newsletter > div > .validate.newsletter-form[name="mc-embedded-subscribe-form"] > div > .mc-field-group`
  - **HTML:** `<div class="mc-field-group"> <label for="mce-EMAIL"></label> <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Di e-postadresse"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer_item:nth-child(5)`
  - **HTML:** `<div class="footer_item"> <span class="footer_item_title">E-postadresse</span> <div class="footer_item_content"> <a href="mailto:alex@alexandra.no">alex@alexandra.no</a> </div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.social-button-wrapper`
  - **HTML:** `<div class="footer_item social-button-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

