# WCAG Violations Report for Vest-agder-museet IKS

**Timestamp:** 2026-11-22T06:25:18.734Z
**URL:** [https://www.vestagdermuseet.no/](https://www.vestagdermuseet.no/)
**Total Violations:** 4

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#btn-show-search`
  - **HTML:** `<button id="btn-show-search" class="btn" type="button"> <i class="fa fa-search"></i> </button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.goog-te-gadget`
  - **HTML:** `<div class="skiptranslate goog-te-gadget" dir="ltr" style="">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3 (foreground color: #666666, background color: #111c24, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.VIpgJd-ZVi9od-l4eHX-hSRGPd`
  - **HTML:** `<a class="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" a…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 1.77 (foreground color: #444444, background color: #111c24, font size: 9.0pt (12px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `time[datetime="20-11-2026 11:00"] > .event-list-item-day`
  - **HTML:** `<span class="event-list-item-day">20</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.96 (foreground color: #111c24, background color: #a84069, font size: 15.0pt (20px), font weight: bold). Expected contrast ratio of 3:1

- **Target:** `time[datetime="20-11-2026 11:00"] > .event-list-item-month`
  - **HTML:** `<span class="event-list-item-month">nov</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.96 (foreground color: #111c24, background color: #a84069, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `a[title="D/S Hestmanden"] > p`
  - **HTML:** `<p>- et seilende kulturminne og Norsk krigsseilermuseum</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.35 (foreground color: #111c24, background color: #0071bb, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[title="Mandal museum"] > p`
  - **HTML:** `<p> - by- sjøfart og industrihistorie, kunstsamlinger og barndomshjemmet til Gustav og Emanuel Vigeland</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.45 (foreground color: #111c24, background color: #0088ce, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[title="Setesdalsbanen"] > p`
  - **HTML:** `<p>- smalsporet jernbane som fremdeles kjører med damplokomotiv og gamle trevogner</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.09 (foreground color: #111c24, background color: #ed2939, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[title="Sjølingstad Uldvarefabrik"] > p`
  - **HTML:** `<p>- den levende museumsfabrikken med produksjon av garn og ullvarer på gamle maskiner</p>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.96 (foreground color: #111c24, background color: #a84069, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.textwidget.custom-html-widget > h4`
  - **HTML:** `<h4 style=" text-transform: uppercase; letter-spacing: 0.3em; display: inline-block; margin: 0; padding: 0.5rem 0 0;"> Vi forteller din historie</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.widget-title`
  - **HTML:** `<h4 class="widget-title widget-title--gray">Dette skjer i museet</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text sr-only" href="#content">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#media_image-2`
  - **HTML:** `<div id="media_image-2" class="footer-widget col-md-4 col-lg-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vam_museums_list-2`
  - **HTML:** `<div id="vam_museums_list-2" class="footer-widget col-md-4 col-lg-3">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#custom_html-3 > .textwidget.custom-html-widget > p:nth-child(1)`
  - **HTML:** `<p> <b>Vest-Agder-museet</b> ble opprettet i 2006 ved en interkommunal sammenslåing av kulturhistoriske museer i fylket.<br> <a href="/forsiden/om-museet/" title="Om VAM">Les om VAM her &gt;</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.textwidget.custom-html-widget > p:nth-child(2)`
  - **HTML:** `<p> <b>Museets administrasjon</b> <br> Odderøyveien 21, 4610 Kristiansand <br> Tlf: +47 38 12 03 50 <br> Org nr: NO 989 072 048 MVA<br> E-post: <a href="mailto:post@vestagdermuseet.no">post@vestagdermuseet.no</a> </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.textwidget.custom-html-widget > p:nth-child(3)`
  - **HTML:** `<p> Ansvarlig redaktør: <a href="mailto:j.olsen@vestagdermuseet.no">Direktør John Olsen</a> <br> Webansvarlig: <a href="mailto:erik.engenes@vestagdermuseet.no">Erik Engenes</a> <br> <a href="/forsiden/kontakt-oss/" title="Kontakt oss">Full…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.textwidget.custom-html-widget > p:nth-child(5)`
  - **HTML:** `<p style="margin: 15px 0;"> <a href="https://www.vestagdermuseet.no/informasjonskapsler-cookies/">Informasjonskapsler (cookies)</a> <a href="https://uustatus.no/nb/erklaringer/publisert/8b52cc6f-35c2-4481-849b-848ad8777fd8">Tilgjengelighet…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#block-5`
  - **HTML:** `<div id="block-5" class="footer-widget col-md-4 col-lg-3"><p><strong>Meld deg på vårt nyhetsbrev</strong></p><div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="background-color:#8a8a8a !important;" href=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

