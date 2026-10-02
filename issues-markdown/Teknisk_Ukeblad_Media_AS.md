# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-10-02T17:26:11.193Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#sp_message_iframe_1517700, .acceptButton`
  - **HTML:** `<button title="Godta" aria-label="Godta" class="message-component me..." style="opacity: 1; padding:...">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.24 (foreground color: #ffffff, background color: #1890ff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `#sp_message_iframe_1517700, .rejectButton`
  - **HTML:** `<button title="Avvis alle" aria-label="Avvis alle" class="message-component me..." style="opacity: 1; padding:...">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.24 (foreground color: #ffffff, background color: #1890ff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1

- **Target:** `#sp_message_iframe_1517700, .customiseButton`
  - **HTML:** `<button title="Tilpass" aria-label="Tilpass" class="message-component me..." style="opacity: 1; padding:...">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.24 (foreground color: #ffffff, background color: #1890ff, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.border-side-bottom > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t38 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-bg-primary > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 font-weight-bold m-font-weight-bold "><span class="lab-row-header-title">Nitos visepresident trekker seg:­</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `img[itemprop="image"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="80"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TU-logo-RGB-gul.svg" width="80" height="56">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="128"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TUM-logo-RGB-hvit.svg" width="128" height="28">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.grid-vas-center`
  - **HTML:** `<nav class="navigation mainMenu dac-hidden-desktop-down grid-vas-center grid">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 157

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading">Teknisk Ukeblad - forsiden</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm38`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm38" style="">Utelukker ikke å sende datasentre bakerst i strømkøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > h2`
  - **HTML:** `<h2 itemprop="headline" class="headline " style="">Geely kommer med rekordrask lading </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t58`
  - **HTML:** `<h2 itemprop="headline" class="headline t58" style="">NVE varsler nei til dragekraftverk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142495"] > .t45`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Datasenterboomen gir milliardinntekter – men få nye arbeidsplasser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(4)`
  - **HTML:** `<div data-element-guid="edafa385-ed5d-418b-b9d7-73fe587afcd3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(5)`
  - **HTML:** `<div data-element-guid="7f6fec14-c58a-4a86-857e-d69c7087a56a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(7)`
  - **HTML:** `<div data-element-guid="76827d2f-113e-471b-a69c-f6e43b232918" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142727"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142777"]`
  - **HTML:** `<article data-element-guid="3777d14d-b014-4907-8c7c-4bc5ae66d625" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="digi" data-section="kommentar" data-tag="kommentar" data-instance="7142777" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm22`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm22" style="">Reaktordrevne skip kan komme til Norge lenge før kjernekraft på land </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(11) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(12)`
  - **HTML:** `<div data-element-guid="94239afd-e7bb-4e1b-beb9-7aa5db5accdb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(13)`
  - **HTML:** `<div data-element-guid="033d3d63-4a12-4008-959d-3e4b2faabfb8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142291"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t51`
  - **HTML:** `<h2 itemprop="headline" class="headline t51 tm33" style="">Avis: F-16-situasjonen i Ukraina er kritisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.adZone-parallax > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm20" style="">Ett av fem offentlige anbud får kun ett tilbud: – I praksis ingen konkurranse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm28`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm28" style="">Norsk fregatt testet ny missiltype </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm28`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm28" style="">Advarer: Selvkjørende biler kan gi oss lengre køer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .tm17.kicker.below`
  - **HTML:** `<div style="" class="kicker below tm17"> Android-skadevare: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm23`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm23" style="">Kan stjele bankdataene dine med KI </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142036"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm21.t30`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm21" style="">Dansk politi brukte plattform som knyttes til Russland </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142302"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm26`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm26" style="">Brua forskjøv seg 40 cm </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142239"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> 200.000 tonn årlig: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm31`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Nytt selskap skal lagre CO<sub>2</sub> i Nordsjøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141830"] > .tm17.kicker.below`
  - **HTML:** `<div style="" class="kicker below tm17"> Europas dyreste diesel, men: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm22`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm22" style="">Vi bruker langt mindre andel av inntekten vår </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="kommentar,arbeidsliv,nito"]`
  - **HTML:** `<article data-element-guid="14642fee-8f94-4c0d-8385-c07676ff7f09" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar,arbeidsliv,nito" data-instance="7141083" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Boeing: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm29`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm29" style="">Skal bygge nytt kampfly til den amerikanske marinen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(22) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7141950"]`
  - **HTML:** `<article data-element-guid="1ad5c3f3-0b7c-4c66-ab56-36a2d48e7c27" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="sirkulær økonomi,litium-ion-batterier,industri,faam,vianode"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t20`
  - **HTML:** `<div style="" class="kicker below t20"> Slakter Teknologirådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm23.t33`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Som å beskrive norsk oljepolitikk med data fra 1969 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,kunstig intelligens"]`
  - **HTML:** `<article data-element-guid="2b6f3c2b-770d-4889-b6f8-9de1869c09e5" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="debatt,kunstig intelligens" data-instance="7140962" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t17`
  - **HTML:** `<div style="" class="kicker below t17 tm17"> Davvi vindkraftverk: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm25`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm25" style="">Opphever NVEs avslag </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="klima,samferdsel"]`
  - **HTML:** `<article data-element-guid="eaac2f2a-63b8-4626-9f87-c68beaf4ffb8" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="klima,samferdsel" data-instance="5704052" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="eu,industri"]`
  - **HTML:** `<article data-element-guid="99c5bf78-0cf2-4576-9b21-34e5661c64c9" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="eu,industri" data-instance="7141305" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142185"]`
  - **HTML:** `<article data-element-guid="d6c2b445-37c8-4760-9d50-fc88351e8d73" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="industri" data-tag="gruvedrift,førdefjorden,nordic mining,industri" data-instan…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27`
  - **HTML:** `<h2 itemprop="headline" class="headline t27" style="">Mener hjemmekontor-grep er kjempeblemme: – Bør få styre selv </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.kicker.below`
  - **HTML:** `<div style="" class="kicker below t23"> Fersk rapport: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t52.tm29`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm29" style="">Alle må ha en exit-strategi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm25`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm25" style="">Nordic Mining-sjefen slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(28) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29)`
  - **HTML:** `<div data-element-guid="2ad6d0d6-3708-47d8-96fe-0180b44f306b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">Dette er Equinors omstridte oljeutbygginger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm27`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">Årsaken til F-16-styrt er klar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(31)`
  - **HTML:** `<div data-element-guid="e3c3d518-efbd-4027-bc58-9e0061f1deb3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="andøya,romfart"]`
  - **HTML:** `<article data-element-guid="c2bd7281-87d3-4cfb-92df-9b578345cd39" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="andøya,romfart" data-instance="7141870" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Digitalt massebedrageri: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">– Trolig den største saken hittil i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,it"]`
  - **HTML:** `<article data-element-guid="fc67d3c1-54e0-40a5-bcfb-cdd2cacfa5ed" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="it" data-tag="datasenter,it" data-instance="7141819" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="telenor,telekom"]`
  - **HTML:** `<article data-element-guid="24719db7-cbae-4007-85dc-98091575cef0" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="telenor,telekom" data-instance="7141748" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t26.kicker.below`
  - **HTML:** `<div style="" class="kicker below t26"> Nitos hovedstyre:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t62`
  - **HTML:** `<h2 itemprop="headline" class="headline t62 tm36" style="">Stiller seg bak Lein </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Nasa vil fly som med SR-71 Blackbird igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.kicker.below`
  - **HTML:** `<div style="" class="kicker below t25"> Varsler om tvangsmulkt til Nscale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm30" style="">– Brudd på energiloven </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm37" style="">Bruker 4 mill. i året på å komme seg til skytebanen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.kicker.below`
  - **HTML:** `<div style="" class="kicker below t18"> Nær alle datasentre eies av utlendinger: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t34`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm32" style="">&nbsp;– Utfordrer nasjonal sikkerhet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.kicker.below`
  - **HTML:** `<div style="" class="kicker below t19"> Corvus-sjef går på dagen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t32`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm32" style="">Finansdirektør på vei ut tar over </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Forbrukerrådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Advarer mot Meta Muse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t32`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm36" style="">Truet med å trekke seg fra Nito-ledelsen alt i juni </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.kicker.below`
  - **HTML:** `<div style="" class="kicker below t18"> <span data-lab-text_size_desktop="19" class="t19">IT-gigantene sto skolerett:</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">– Det finnes ingen quick fix </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi"]`
  - **HTML:** `<article data-element-guid="2d00a630-310f-458c-9c26-93e10d90de23" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="energi" data-instance="7141100" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141123"] > .t32.tm29`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm29" style="">400 millioner mer til E-tjenesten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.desktop-floatRight.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatRight mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705912"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Dansk e-tjeneste advarer: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm25`
  - **HTML:** `<h2 itemprop="headline" class="headline t23 tm25" style="">Tek-ledere og forsvars­topper er mål for Russland </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-side-bottom > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t38 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141430 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141431 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7141432 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `unite-player[muted=""], #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.kicker.below`
  - **HTML:** `<div style="" class="kicker below t30"> Batteristrid: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t86`
  - **HTML:** `<h2 itemprop="headline" class="headline t86" style="">– Kastet bort millioner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(42)`
  - **HTML:** `<div data-element-guid="3e998cd7-8c2c-4db0-9e11-3dded3fb14f3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.kicker.below`
  - **HTML:** `<div style="" class="kicker below t23"> Danmarkskabel: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t49`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm49" style="">Reparert og satt i drift igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140602"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Sotrasambandet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t32.tm22`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm22" style="">Rammen var 17 mrd. – nå har prislappen blitt nær 30 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.kicker.below`
  - **HTML:** `<div style="" class="kicker below t24"> Kongsberg Gruppen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55`
  - **HTML:** `<h2 itemprop="headline" class="headline t55" style="">Får rammeavtale på nær 4 milliarder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.kicker.below`
  - **HTML:** `<div style="" class="kicker below t21"> Etterforskningen av Telenor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm42`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm42" style="">– Det bør ta mye mer enn ett år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="ntb,forsvar,utenriks"]`
  - **HTML:** `<article data-element-guid="a7a2e2b8-03cc-498f-b25f-c7d102f93fd6" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="ntb,forsvar,utenriks" data-instance="7140806" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140762"] > .t37`
  - **HTML:** `<h2 itemprop="headline" class="headline t37" style="">Rivingen er i gang </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705935"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm27`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm27" style="">Google skal bygge kunstig intelligens i verdensrommet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5702936"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706021"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706021"] > .t30`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">USA godkjenner salg av flere Seahawk-helikoptre til Danmark </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t28.tm25`
  - **HTML:** `<h2 itemprop="headline" class="headline t28 tm25" style="">Kasserte telefoner og mobilmaster kan spore ulovlige droner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705849"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5705849"] > .t37`
  - **HTML:** `<h2 itemprop="headline" class="headline t37" style="">Her tar nytt jagerfly av for første gang </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-bg-primary > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 font-weight-bold m-font-weight-bold "><span class="lab-row-header-title">Nitos visepresident trekker seg:­</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710359"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm23 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">– Man lærer seg å merke når voksne menn opplever at man tar for mye plass </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711518"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Nito-presidenten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711518"] > .t34`
  - **HTML:** `<h2 itemprop="headline" class="headline t34" style="">– Uenighet om rolleforståelse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm16`
  - **HTML:** `<div style="" class="kicker below tm16"> Generalsekretæren: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5711211"] > .t33`
  - **HTML:** `<h2 itemprop="headline" class="headline t33" style="">&nbsp;– Trist og uheldig </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706087"] > .t38`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Norge har kjøpt nye bergings­panservogner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708027"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708027"] > h2`
  - **HTML:** `<h2 itemprop="headline" class="headline " style="">Alstom krever 260 millioner fra Bane Nor </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710099"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm17.kicker`
  - **HTML:** `<div style="" class="kicker below t23 tm17"> Fra toppstilling i Elkem til Fensfeltet-selskap: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t71`
  - **HTML:** `<h2 itemprop="headline" class="headline t71 tm40" style="">– Jeg rømmer ikke </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(52)`
  - **HTML:** `<div data-element-guid="bd328b70-9650-4b3a-9ba2-a7b0fc272508" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706114"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm19`
  - **HTML:** `<div style="" class="kicker below tm19"> Ekstraregning for KI: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm24.t36`
  - **HTML:** `<h2 itemprop="headline" class="headline t36 tm24" style="">– Det du kjøper, er priset kunstig lavt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710212"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710212"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Setter treningsfly på bakken: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm45`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm45" style="">Styrtet ved campingplass </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709650"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709650"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Ny samferdselsminister: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm29`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm29" style="">&nbsp;– Vi har sviktet jernbanen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707478"] > .kicker.below`
  - **HTML:** `<div style="" class="kicker below "> Kommunen satser: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707478"] > .t31`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">KI-verktøy halverte tiden på journalføring </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="5709799"]`
  - **HTML:** `<article data-element-guid="dbc16a91-ba18-4925-ab23-b335b77aaa46" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="artikler" data-tag="artikler" data-instance="5709799" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708221"] > .t21.kicker.below`
  - **HTML:** `<div style="" class="kicker below t21"> Har meldt inn enorme kjernekraftplaner: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm35`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm35" style="">– Kan løse mye av omdømme­­­­­­­problemet til datasentre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5708049"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(56)`
  - **HTML:** `<div data-element-guid="5e6e65db-271d-4436-8137-59f194e61e54" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706297"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5706297"] > .t19.kicker.below`
  - **HTML:** `<div style="" class="kicker below t19"> Datasenter-eufori i Fyresdal: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t40.tm36`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm36" style="">– Blir som hva Hydro var for Rjukan </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5707369"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t28.tm29`
  - **HTML:** `<h2 itemprop="headline" class="headline t28 tm29" style="">Metas første «KI-dings» </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5710238"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi,debatt,co2,industri"]`
  - **HTML:** `<article data-element-guid="b523b745-78ea-44fe-8267-0fc1f8f94586" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="energi,debatt,co2,industri" data-instance="5710641" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5709319"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t40.tm23`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm23" style="">Thoresens nærmeste vil ikke ha ham tilbake: – Veldig vanskelig </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.powered-by`
  - **HTML:** `<div class="powered-by "><a href="https://labradorcms.com/" target="_blank">Powered by Labrador CMS</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

