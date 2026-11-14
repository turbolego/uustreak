# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-11-14T08:52:40.702Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 7

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #808080, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `.has-row-header.row.large-12:nth-child(3) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Klimasøksmålet:</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(67) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t24 tm24 "><span class="lab-row-header-title">Sotrasambandet:</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(116) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Attack-konferansen 2026</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-style-solid > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t44 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182870"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179783"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146844"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141083"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="80"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TU-logo-RGB-gul.svg" width="80" height="56">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `img[width="128"]`
  - **HTML:** `<img src="https://beta.tu.no/files/2026/09/01/TUM-logo-RGB-hvit.svg" width="128" height="28">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb-NO" dir="ltr" class="resp_fonts" data-hostpath="index" style="--lab-scrollbar-width: 0px;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `iframe[title="Tekjobb carousel"], html`
  - **HTML:** `<html><head></head><body></body></html>`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 368

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading"> Teknisk Ukeblad – daglige teknologinyheter </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t51.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t51 tm19" style="">Proppen i en av verdens travleste strekninger skal bort – Det har sin pris&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184424"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t58`
  - **HTML:** `<h2 itemprop="headline" class="headline t58 tm17" style="">Microsoft-problemene kan skyldes at servere ikke bestod helsesjekk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header.row.large-12:nth-child(3) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Klimasøksmålet:</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm39`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm39" style="">– Norsk oljepolitikk er endret for alltid </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm45`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm45" style="">– Nei, norsk oljepolitikk står </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="microsoft,it-bransjen,outlook"]`
  - **HTML:** `<article data-element-guid="295a032e-6052-4375-8116-87d0abef8a83" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="digi" data-section="it-bransjen" data-tag="microsoft,it-bransjen,outlook" data-instance="7184158" …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183585"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Datasenter-grep: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183585"] > .t33.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Prosjektene kan finne veien til andre markeder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184214"] > .t56.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm28" style="">– Avhengigheten vår blir ekstremt eksponert </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179511"]`
  - **HTML:** `<article data-element-guid="4ce8ff9a-1e01-4e52-ac88-beb399d7cfc6" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="debatt" data-tag="debatt" data-instance="7179511" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148606"] > .t61.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t61 tm21" style="">Ble beordret til «innflytningsklar» leir – der fant de ingenting </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183224"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t54.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t54 tm20" style="">Nå kan prisen for å kjøre med piggdekk bli endret </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184256"] > .tm19.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline tm19" style="">Fjernet Forsvarsbygg-sjef vil anke </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm31" style="">Lysne får hasteoppdrag om KI-trusler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(13)`
  - **HTML:** `<div data-element-guid="de874b93-1f9e-431d-a437-be091e70fb2a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183686"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">Forvirret av datasenter-frysen? Dette avgjør hvem som må vente </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183739"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(16)`
  - **HTML:** `<div data-element-guid="033d3d63-4a12-4008-959d-3e4b2faabfb8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.adZone-parallax > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(19)`
  - **HTML:** `<div data-element-guid="11a526cf-4135-4b77-be40-00b5bbceed1f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183380"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Britene kjøper norske fartøy: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm47`
  - **HTML:** `<h2 itemprop="headline" class="headline t45 tm47" style="">– Vil være gode for Royal Navy </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="it-bransjen,nvidia"]`
  - **HTML:** `<article data-element-guid="4c102314-fef9-42a5-a860-680d513b7a69" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="it-bransjen" data-tag="it-bransjen,nvidia" data-instance="7184031" itemscope="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179601"] > .t25.below.kicker`
  - **HTML:** `<div style="" class="kicker below t25"> Sjekk selv: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t42.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t42 tm22" style="">Du ligger i «feil» fil – kommer du raskere fram hvis du bytter? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183753"] > .t31.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm23" style="">Dette får Russland til å steile </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm19" style="">Dropper flere datasenter­planer i Norge: – Ble for lenge å vente på strøm </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183954"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t47.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t47 tm19" style="">Omstridt gruvekjøp – MDG vil trekke i nødbremsen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm17.below`
  - **HTML:** `<div style="" class="kicker below t23 tm17"> Britisk forsvars-KI-selskap: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t67`
  - **HTML:** `<h2 itemprop="headline" class="headline t67 tm22" style="">Storinvestering i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,energi,klima"]`
  - **HTML:** `<article data-element-guid="5883ce24-3baf-41cd-8542-5908431c13d3" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="debatt,energi,klima" data-instance="7179373" data-image-float=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183553"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183553"] > .t49.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm25" style="">Oppdaget alvorlig sikkerhets­feil på norske tog </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(28)`
  - **HTML:** `<div data-element-guid="99567bb1-c0e9-4998-b810-79dc4d47a313" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm22.below`
  - **HTML:** `<div style="" class="kicker below t25 tm22"> Britisk minister om fregattavtale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t92`
  - **HTML:** `<h2 itemprop="headline" class="headline t92 tm53" style="">Vil ha mer fart </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183513"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183513"] > .t32.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm23" style="">Vinterdekk på nye elbusser – mener liv kan gå tapt&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t53.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm36" style="">Mener bedriftene sløser bort tokens </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183730"] > .t37.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm22" style="">Strømstøtte for over en halv milliard gikk til bedrifter </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183222"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183222"] > .t34.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t34" style="">Nå flyter trafikken på veien som var kronglete å bygge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183173"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183173"] > .t33.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t33" style="">Slik er radiomastene på de nye fregattene </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm29.t26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm29" style="">Utroskapsskandalen kan koste ham toppjobben </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183320"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Datasenter-stopp:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183320"] > .t31.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm23" style="">Advokatene ringes ned: – Mye å fordøye for aktørene på en gang&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7182870"]`
  - **HTML:** `<article data-element-guid="ed61fab2-9464-42c9-9d2f-5726748d3878" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7182870" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(35)`
  - **HTML:** `<div data-element-guid="7a04225e-9250-4c4d-bf7c-34a1529f871b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181460"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Her kjøles et gammelt radarsystem ned: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181460"] > .t39.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t39" style="">Nå fremskynder USA utfasingen av disketter&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="forsvar,ntb,innenriks"]`
  - **HTML:** `<article data-element-guid="5e93ccbc-8132-4ccf-9d48-4c2911a5f8b8" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar,ntb,innenriks" data-instance="7183382" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(37)`
  - **HTML:** `<div data-element-guid="1d9d3c97-1a42-421d-a30a-a3d19b5d2f48" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183145"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183145"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Finansavisen:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t24.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t24 tm22" style="">Fornebubanen kan sprekke med ytterligere fire milliarder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t21.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t21 tm27" style="">Statsforvalteren stanser datasenter i Sirdal </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7183294"]`
  - **HTML:** `<article data-element-guid="f64f4337-3000-4fdc-a690-f760eafc09b0" class="column small-12 large-3 small-abs-12 large-abs-3 " data-site-alias="digi" data-section="it-bransjen" data-tag="nvidia,ntb,it-bransjen,utenriks" data-instance="7183294…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183098"] > .t42.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t42" style="">Veien raste ut: Nå er det avdekket kvikkleire </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181064"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181064"] > .t30.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm20" style="">Utsatte pilotfabrikken i fjor – nå skal den bygges på Ulefoss </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183147"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183147"] > .tm16.t23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t23 tm16" style="">Programvareoppdatering stanset Gjøvikbanen i ti dager – Nå er feilen funnet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182874"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nye datasenterkrav:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182874"] > .t26.tm18.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm18" style="">– Endring av rammevilkår vil vel kanskje være det som er mest skummelt&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm18.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm18" style="">Ubemannet og basert på fiskebåt – dette kan bli fremtidens ubåtjeger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182985"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm26" style="">Klage betyr utsatt byggestart for gigantprosjekt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182785"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nye datasenterkrav:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182785"] > .t40.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm31" style="">– Situasjonen er ikke bærekraftig uten tiltak </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7182852"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Regjeringen:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7182852"] > .t27.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t27" style="">Åpner for inngrep i etablerte datasentre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,ntb,innenriks"]`
  - **HTML:** `<article data-element-guid="ee950c8a-c3e4-491e-a317-bb19d9482bd3" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="datasenter" data-tag="datasenter,ntb,innenriks" data-instance="7182837" itemsc…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182755"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Statnett: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm32" style="">Midlertidig stans for nye datasentre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180616"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180616"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Politiet la bort million-hack: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37.t56.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm37" style="">– Vi er ikke klare for en digital verden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180590"] > .headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline " style=""> Der asfalten skriker etter trafikk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7182738"]`
  - **HTML:** `<article data-element-guid="53e46b1b-857f-499c-872d-fce06e2447bb" class="column small-12 large-5 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="energi" data-tag="datasenter,energi" data-instance="7182738" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179560"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(47)`
  - **HTML:** `<div data-element-guid="48ad79a5-8cde-4bc4-99c3-dbe4266bd603" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="klima,klimatoppmøte"]`
  - **HTML:** `<article data-element-guid="c2d328e4-fc4a-4b36-b81c-39b580ee28de" class="column small-12 large-5 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="klima" data-tag="klima,klimatoppmøte" data-instance="7182670" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179450"] > .t43.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t43" style="">Bruker fritiden til å tette tomrom på verdenskartet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180740"] > .t42.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t42" style="">Fra lansering til europeisk seier på fire måneder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(50)`
  - **HTML:** `<div data-element-guid="6f8f2136-94f6-47f6-b918-136259477229" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="cyberangrep,it,cybersikkerhet"]`
  - **HTML:** `<article data-element-guid="7b2e3964-5644-4ba1-bcda-c0ba2577d237" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="it" data-tag="cyberangrep,it,cybersikkerhet" data-instance="7182311" itemscope="…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181262"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181262"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Norsk satsing: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181262"] > .t32.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t32" style="">Grønt lys til å bygge datasenter og batterifabrikk i Orkanger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182117"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Eksperter om fjernvarmlekkasjen:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm40.t35.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm40" style="">– Har aldri sett noe lignende </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182421"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nytt forslag: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t34.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm26" style="">Vil kunne overstyre kommunalt nei til vindkraft </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm33.t41.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm33" style="">Slik fant vi usikrede kjøleanlegg på nett: – Toppen av isfjellet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7182096"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Kjøleanlegg-leverandør: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm17.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm17" style="">Uklart hvem som har ansvaret for sikkerheten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180631"] > .t24.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t24" style="">Fagforening frykter lokale aktører vrakes når Google bygger videre i Skien </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181747"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181747"] > .t29.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm20" style="">Oppdaterte signalsystemet – dagen etter oppsto problemene </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181555"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181970"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t22.tm17.below`
  - **HTML:** `<div style="" class="kicker below t22 tm17"> Eksplosjon og stein-regn i Oslo sentrum: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181970"] > .t40.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm31" style="">– Vi skal i gang med å undersøke dette nå </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7182247"]`
  - **HTML:** `<article data-element-guid="cc6e7906-bbd7-4ceb-9f69-084e129b2942" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="energi,datasenter,ntb,innenriks" data-instance="7182247" items…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182303"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182303"] > .t43.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t43" style="">Motvind frykter svekket vindkraft-veto </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7182010"]`
  - **HTML:** `<article data-element-guid="79593e86-58b2-44b2-8d0f-974af70716f1" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="digi" data-section="kommentar" data-tag="kommentar" data-instance="7182010" data-image-float="floa…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181388"] > .t30.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm20" style="">Halvparten av nettetterspørselen siden 2021 kom i år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181751"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181751"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Vil ta igjen vedlikeholdsetterslepet:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181751"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">MDG vil gi 1,8 milliarder ekstra til jernbanen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181749"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t21.tm17.below`
  - **HTML:** `<div style="" class="kicker below t21 tm17"> Ny Nussir-eier: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm18.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm18" style="">Har toppsjef med russisk bakgrunn og tidligere CIA-sjef i styret </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181952"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181952"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Norge langt unna egne klimamål:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm26" style="">Støre: Skal nås med kvoter og EU-samarbeid&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="klima,debatt"]`
  - **HTML:** `<article data-element-guid="92d85310-19e8-4b5d-8f05-094cda113d45" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="debatt" data-tag="klima,debatt" data-instance="7180790" data-image-float="floatL…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="utenriks,telekom,ntb,satellitt"]`
  - **HTML:** `<article data-element-guid="3480859c-2471-4839-9fb2-7351975dca6a" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="utenriks,telekom,ntb,satellitt" data-instance="7181896" ite…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="automatisering,debatt"]`
  - **HTML:** `<article data-element-guid="951dae13-fc2c-4770-ad9f-a390691b79a7" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="automatisering,debatt" data-instance="7179623" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181251"] > .t19.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t19 tm19" style="">Luftforsvaret har oppgradert Nasams-batteri: – Et viktig løft </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181671"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t78`
  - **HTML:** `<h2 itemprop="headline" class="headline t78 tm26" style="">Har avverget flere angrep mot norske kjøleanlegg </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181336"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181551"] > .t19.below.kicker`
  - **HTML:** `<div style="" class="kicker below t19"> Fryserangrepet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t48.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm26" style="">&nbsp;– Helt surrealistisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t14`
  - **HTML:** `<div style="" class="kicker below t14 tm18"> <span data-lab-text_size_desktop="20" class="t20">Starlink-avtalen:&nbsp;</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm17.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm17" style="">Kaller forsvarsministeren inn på teppet: – Det er skremmende </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm22.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm22" style="">Microsoft sliter med kapasiteten i Norge – får beskjed om å flytte tjenester til Sverige </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181185"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Frykter datasenterfrys: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181185"] > .t43.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t43" style="">– Vil ramme arbeidsplasser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(66)`
  - **HTML:** `<div data-element-guid="9daed558-de5d-4fc0-924b-8a9e9bef99d8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(67) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t24 tm24 "><span class="lab-row-header-title">Sotrasambandet:</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm26.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm26" style="">Krever at statsråden griper inn i pengekonflikten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm29" style="">– Omfanget av forsinkelsene er fremdeles uavklart </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178977"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Satellittkontrakt verdt 450 millioner:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm36" style="">Skal gi Starlink til Forsvaret og Politiet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm25" style="">Mener krav om norske skrog kan forsinke nye militærfartøy </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="kraft,ntb,innenriks,energi"]`
  - **HTML:** `<article data-element-guid="0f65e492-e5a8-4ae1-96f2-cac66ec1ff50" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="kraft,ntb,innenriks,energi" data-instance="7181426" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181503"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Støre etter mellomvalget i USA:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181503"] > .t33.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Lettere å innføre tollsatser enn å avvikle dem </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180175"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Militære bøter:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t48.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm25" style="">Vil dra inn halv million på sex, alkohol og vådeskudd </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181015"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181015"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Punktlighet i Oslo-rushet:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t48.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm24" style="">I oktober bommet Bane Nor på målet 19 av 22 dager </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181132"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Tapte mot Telenor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181132"] > .t32.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm23" style="">Mente de ble lurt inn i Norges største bredbåndsavtale </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7181446"]`
  - **HTML:** `<article data-element-guid="ff179418-8fbe-4b53-b894-e5a8cf032f4d" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="industri" data-tag="innenriks,industri,nordic mining,ntb" data-instance="7181446…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181098"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Ekspert om fryserhackingen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181098"] > .t51.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t51" style="">Avslører et oversett sikkerhetsproblem </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181025"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm25" style="">Skal renovere en av landets viktigste bruer over to år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180664"]`
  - **HTML:** `<article data-element-guid="2b468481-3a1f-41ef-90c4-65d0b009e724" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="debatt" data-tag="debatt" data-instance="7180664" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179629"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm24" style="">– Et raskt og pålitelig alternativ til Starlink finnes ikke ennå </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7178857"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181210"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm23" style="">Han kan bli ny visepresident i Nito </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t50.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t50 tm20" style="">Utplasserer luftovervåking i Finnmark </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(78)`
  - **HTML:** `<div data-element-guid="511abec3-5b51-4949-954c-243408cb3137" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181077"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t21.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t21 tm23" style="">Prøver ut automatisk salting på 260 meter motorvei </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="oljefondet,klima"]`
  - **HTML:** `<article data-element-guid="5bba1c1d-d9c5-461b-bc21-5fd71acdebc8" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="klima" data-tag="oljefondet,klima" data-instance="7180892" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t18.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t18 tm21" style="">Mener datasentre må plasseres der varmen kan utnyttes </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t56.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm20" style="">Fabrikken står klar – sjeldne jordarter å bearbeide lar vente på seg </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179281"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179281"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> <span data-lab-text_size_desktop="20" class="t20">Tross </span><span data-lab-text_size_desktop="20" class="t20">rekordresultat</span>:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm23" style="">Equinor vil ikke ha flere raffinerier </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179706"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Ingeniørutdanning-forslag: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm41.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm41" style="">Oljebransjen ser kun ulemper </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180555"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180555"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Open AI-sjefen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180555"] > .t27.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t27" style="">«Forferdelig» at RAM brukes i private PC-er </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,innenriks,ntb"]`
  - **HTML:** `<article data-element-guid="e1c95b82-22fd-44ea-b1bd-4413e279b130" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="datasenter" data-tag="datasenter,innenriks,ntb" data-instance="7180620" itemsc…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7179962"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Økt cyberrisiko: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm29" style="">Svært mange kommuner klarer ikke dette alene </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180635"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Hacket Coop-frysere: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t64`
  - **HTML:** `<h2 itemprop="headline" class="headline t64" style="">Skrudde opp til 50 plussgrader </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179870"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm20" style="">Sotra: Entreprenør varsler mulig byggestans – frykter pengekrise </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(85)`
  - **HTML:** `<div data-element-guid="6131005d-1f19-4ed8-a245-e8df83dc6a92" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(86)`
  - **HTML:** `<div data-element-guid="7bf12cec-0693-41fa-9133-90801d2c9fe7" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179760"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="samferdsel,fra forskning"]`
  - **HTML:** `<article data-element-guid="6f5ea872-1d02-4dbe-b17f-3d25417278ea" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,fra forskning" data-instance="7149635" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178237"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Skal sende denne boksen ut i rommet:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t47.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t47 tm25" style="">&nbsp;– Vært med på norsk historie </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="romfart,universet"]`
  - **HTML:** `<article data-element-guid="eecf262d-7b77-4b4f-b1f2-c28c3d4db005" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="romfart,universet" data-instance="7148958" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t26 font-weight-bold m-font-weight-bold font-Archivo" style="">Har du fått med deg disse?</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7181130 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7181131"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline font-weight-bold m-font-weight-bold" style="">Norsk løsning lar KI jakte sårbarheter døgnet rundt </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7181124 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7181125"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t22 font-weight-bold m-font-weight-bold" style="">Militære bøter: Sex, alkohol og vådeskudd </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180320 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180319"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t22 font-weight-bold m-font-weight-bold" style="">Så du skrekkfilm på Halloween? </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180612 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180613"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline font-weight-bold m-font-weight-bold" style="">Kutter støtten til Jenter og teknologi </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180322 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180323"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t26 font-weight-bold m-font-weight-bold" style="">Hvor redde er ekspertene for KI? </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180327 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180326"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t26 font-weight-bold m-font-weight-bold" style="">Justervesenet vil endre sekundet </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7178796"] > .t53.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm28" style="">Bygget egen KI-modell for å avsløre hjertesvikt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm21" style="">Unikt samarbeid ga felttestene for CO2-lagring en ny dimensjon </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180366"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Færre og kortere tog på Østlandet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t40.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm31" style="">Tar flere tog ut av trafikk etter brann i Lillestrøm </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t53.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm25" style="">Mister 200 millioner til hydrogenanlegg </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180106"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm14`
  - **HTML:** `<div style="" class="kicker below t23 tm14"> Etterspørsel hos Statnett:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t38.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm36" style="">Datasentre står for 70 prosent </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180028"] > .t34.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t34" style="">Nå skal de teste <span data-lab-italic_desktop="italic" class="italic m-italic">skikkelig</span> store turbiner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(94)`
  - **HTML:** `<div data-element-guid="f95411df-b469-427d-a8f6-c4ea278dd663" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(95)`
  - **HTML:** `<div data-element-guid="1e6d9b0d-e670-47be-9479-03aaf940827a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(96)`
  - **HTML:** `<div data-element-guid="aae1735e-4ba4-4938-939b-a93f46600a2d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm27" style="">Uklart om BankID hadde stått på eksamen: – Stort forbedringspotensial </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7148212"]`
  - **HTML:** `<article data-element-guid="731d4f72-1958-4585-8..." class="column small-12 larg..." data-site-alias="tu" data-section="forsvar" data-tag="sjøforsvaret,standar..." data-instance="7148212" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148327"] > .tm27.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm27" style="">Statens vegvesen dropper klimakrav – frykter at nye prosjekter legges på is </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147784"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm25" style="">Hangarskip med kampfly på vei til Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi,utenriks,ntb"]`
  - **HTML:** `<article data-element-guid="21e0abf0-4502-42fd-b146-26f177cf1e71" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="energi,utenriks,ntb" data-instance="7148445" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146982"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm30.t40.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm30" style="">Trodde de hadde avtalt fastpris på 5,8 milliarder – nå møtes de i retten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm21" style="">Krever at Norge legger toll på kinesiske elbiler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(101)`
  - **HTML:** `<div data-element-guid="53bcc1ec-d44c-4702-b8c9-ee548fe48235" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147902"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">EU vil bremse Kina, men Norge kjøper stadig mer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147816"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147816"] > .t61.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t61 tm21" style="">Statnett: Norge kan gå mot kraftunderskudd </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148007"] > .t40.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t40" style="">Starlink solgte bredbånd for 800 millioner i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm35`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm35" style="">Kutter støtten til Jenter og teknologi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7147364"]`
  - **HTML:** `<article data-element-guid="6dbba5aa-6348-49ea-a068-a41e5640bbe4" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="naval strike missile,danmark,forsvar" data-instance="7147364"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144916"] > .t37.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm22" style="">Erstatter helikopter med droneoperasjon fra kontorstolen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7147040"] > .t28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t28" style="">– Big techs forsprang øker i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7147566"]`
  - **HTML:** `<article data-element-guid="9f45142d-72f3-43ef-a2a3-3e423a74d3a7" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="debatt" data-tag="debatt" data-instance="7147566" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(106)`
  - **HTML:** `<div data-element-guid="9792392b-46d4-49ab-8d1d-9cb5f2dbd960" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-tum-green`
  - **HTML:** `<div data-element-guid="073f11a5-c0fe-4aaf-be96-42b29cc9f0eb" class="row small-12 large-12 color_mobile_no_bg_color border-tum-green mobile_border-tum-green border-style-no_border_style border-style-mobile_no_border_style hasBorder mobile-…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(108)`
  - **HTML:** `<div data-element-guid="69692274-8637-4f96-8a7b-c28608b15189" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146728"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146728"] > .t26.tm18.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm18" style="">– KI-modeller kan snart kopiere seg selv i smartovner og TV-bokser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7146844"]`
  - **HTML:** `<article data-element-guid="d89075b1-3626-4a06-8057-23d0770940fd" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7146844" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(110)`
  - **HTML:** `<div data-element-guid="65a9dd55-e032-41a1-9371-ab0fc1a62731" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143400"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(111) > .columns.large-4.large-abs-4`
  - **HTML:** `<div data-element-guid="d7e69af4-a3b1-4bfe-aa04-9b8d7db5cede" class="columns small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(112)`
  - **HTML:** `<div data-element-guid="2bd1abc4-ef4a-4a9a-a5b3-8f61b8b83911" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm30" style="">Norsk selskap har startet stridsvognbygging </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147360"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147360"] > .t31.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm23" style="">NVE nedprioriterer miljøsaker for å få fart på kraftutbyggingen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7147154"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm24" style="">Zuckerbergs gullgutt overvåker europeiske IT-arbeidere </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7143934"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> – Betyr mye, sier anbudslederen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.t40`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm21 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">Liten utfordrer danket ut Dustin, Atea og Komplett </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(116) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Attack-konferansen 2026</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t22.tm18.below`
  - **HTML:** `<div style="" class="kicker below t22 tm18"> Kina-biler filmet soldater: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm28" style="">– Alle moderne biler har den muligheten</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.tm30`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm30 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">Støre om Nato-topps «knuse en fiende»-utspill: – En viktig tale </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146087"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Håndterer «potensiell hendelse»: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm26.t33.color_mobile_no_bg_color`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm26 color_mobile_no_bg_color" style="">Telenor peker på kritiske sårbarheter i Citrix Netscaler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="pfas,miljø,klima,helse"]`
  - **HTML:** `<article data-element-guid="35240bb6-2117-454a-808d-5f1f2bf5c326" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="klima" data-tag="pfas,miljø,klima,helse" data-instance="7146306" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146151"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t23.tm20.below`
  - **HTML:** `<div style="" class="kicker below t23 tm20"> Rema 1000: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t53.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm31" style="">Sjekker fryserne etter «enestående» angrep </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145088"] > .t32.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm25" style="">Gigantisk vindturbin på høyde med Berlins TV-tårn – men effekten er beskjeden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t21.tm18.below`
  - **HTML:** `<div style="" class="kicker below t21 tm18"> Én ble skadet i Romeriksporten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t51.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t51 tm26" style="">&nbsp;– Rakk ikke å stoppe i tide </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mobile_no_border_color.mobile_no_border_side.color_mobile_no_bg_color > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text_singleline`
  - **HTML:** `<div data-element-guid="42f8d894-4d29-438d-b8a2-29eaa783e148" class="column text_singleline small-12 large-12 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7145966"]`
  - **HTML:** `<article data-element-guid="0224827c-ae01-485a-95ec-27fcca9c6d88" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar" data-instance="7145966" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145919"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t26.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm26" style="">Svindlet til seg nesten 80 mill. med KI-musikk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,vindkraft,energi"]`
  - **HTML:** `<article data-element-guid="88bb4dba-3bd4-4167-9f74-75c85a2016fb" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="datasenter,vindkraft,energi" data-instance="7145930" itemscope…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t53.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm27" style="">Har aldri nådd makspuls – det skal vi være glad for </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(120) > .columns.large-4.large-abs-4`
  - **HTML:** `<div data-element-guid="a6eada87-f928-48fe-9db8-186045985efb" class="columns small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142746"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144423"] > .t36.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t36" style="">Reagerer på kutt av over en halv mrd. til energitiltak i boliger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145539"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm31.t27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Skinner sprekker – lite togtrafikk får skylden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,kunstig intelligens"]`
  - **HTML:** `<article data-element-guid="0ec23284-2df1-4293-9f8d-bd866dce187c" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="debatt" data-tag="debatt,kunstig intelligens" data-instance="7143617" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi,vannkraft"]`
  - **HTML:** `<article data-element-guid="793986f2-3715-4289-9e91-0b930a4eb260" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="energi,vannkraft" data-instance="7145631" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Tidstjeneste får drahjelp: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144018"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">– Vi må ta kontroll over vår egen tid </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144014"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Norgespris: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t45.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t45 tm22" style="">Folk velger bort varmepumpe </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142874"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Stor økning til E-tjenesten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm29" style="">&nbsp;– Behovet for etterretning har blitt vesentlig større </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="ntb,utenriks,equinor,energi"]`
  - **HTML:** `<article data-element-guid="e7e337c6-6983-4fb5-83be-5b64861ab09b" class="column small-12 large-12 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="energi" data-tag="ntb,utenriks,equinor,energi" data-instance="7144142" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7144043"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm27" style="">Regjeringens millioner gir mobildekning i tre tunneler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t39.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm22" style="">Reaktordrevne skip kan komme til Norge lenge før kjernekraft på land </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm20" style="">Ett av fem offentlige anbud får kun ett tilbud: – I praksis ingen konkurranse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm28.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm28" style="">Norsk fregatt testet ny missiltype </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm28" style="">Advarer: Selvkjørende biler kan gi oss lengre køer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="arbeidsliv,kommentar,nito"]`
  - **HTML:** `<article data-element-guid="14642fee-8f94-4c0d-8385-c07676ff7f09" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="arbeidsliv,kommentar,nito" data-instance="7141083" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Boeing: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm29.t38.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm29" style="">Skal bygge nytt kampfly til den amerikanske marinen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7141950"]`
  - **HTML:** `<article data-element-guid="1ad5c3f3-0b7c-4c66-ab56-36a2d48e7c27" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="vianode,litium-ion-batterier,industri,faam,sirkulær økonomi"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Slakter Teknologirådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t33.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Som å beskrive norsk oljepolitikk med data fra 1969 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="kunstig intelligens,debatt"]`
  - **HTML:** `<article data-element-guid="2b6f3c2b-770d-4889-b6f8-9de1869c09e5" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="kunstig intelligens,debatt" data-instance="7140962" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141917"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t17`
  - **HTML:** `<div style="" class="kicker below t17 tm17"> Davvi vindkraftverk: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm25" style="">Opphever NVEs avslag </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="samferdsel,klima"]`
  - **HTML:** `<article data-element-guid="eaac2f2a-63b8-4626-9f87-c68beaf4ffb8" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,klima" data-instance="5704052" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="eu,industri"]`
  - **HTML:** `<article data-element-guid="99c5bf78-0cf2-4576-9b21-34e5661c64c9" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="eu,industri" data-instance="7141305" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142185"]`
  - **HTML:** `<article data-element-guid="d6c2b445-37c8-4760-9d50-fc88351e8d73" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="industri" data-tag="førdefjorden,industri,nordic mining,gruvedrift" data-instan…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705943"] > .t27.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t27" style="">Mener hjemmekontor-grep er kjempeblemme: – Bør få styre selv </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141598"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Fersk rapport: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t52.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm29" style="">Alle må ha en exit-strategi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm25" style="">Nordic Mining-sjefen slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(132)`
  - **HTML:** `<div data-element-guid="2ad6d0d6-3708-47d8-96fe-0180b44f306b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5704819"] > .t39.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">Dette er Equinors omstridte oljeutbygginger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141196"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm27.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">Årsaken til F-16-styrt er klar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(134)`
  - **HTML:** `<div data-element-guid="e3c3d518-efbd-4027-bc58-9e0061f1deb3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="andøya,romfart"]`
  - **HTML:** `<article data-element-guid="c2bd7281-87d3-4cfb-92df-9b578345cd39" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="andøya,romfart" data-instance="7141870" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Digitalt massebedrageri: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">– Trolig den største saken hittil i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,it"]`
  - **HTML:** `<article data-element-guid="fc67d3c1-54e0-40a5-bcfb-cdd2cacfa5ed" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="it" data-tag="datasenter,it" data-instance="7141819" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="telenor,telekom"]`
  - **HTML:** `<article data-element-guid="24719db7-cbae-4007-85dc-98091575cef0" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="telenor,telekom" data-instance="7141748" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Nitos hovedstyre:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t62.tm36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t62 tm36" style="">Stiller seg bak Lein </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Nasa vil fly som med SR-71 Blackbird igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141373"] > .t25.below.kicker`
  - **HTML:** `<div style="" class="kicker below t25"> Varsler om tvangsmulkt til Nscale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm30" style="">– Brudd på energiloven </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37.t52.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm37" style="">Bruker 4 mill. i året på å komme seg til skytebanen</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141342"] > .t18.below.kicker`
  - **HTML:** `<div style="" class="kicker below t18"> Nær alle datasentre eies av utlendinger: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t34.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm32" style="">&nbsp;– Utfordrer nasjonal sikkerhet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141395"] > .t19.below.kicker`
  - **HTML:** `<div style="" class="kicker below t19"> Corvus-sjef går på dagen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm32.t32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm32" style="">Finansdirektør på vei ut tar over </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Forbrukerrådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704754"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">Advarer mot Meta Muse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm36" style="">Truet med å trekke seg fra Nito-ledelsen alt i juni</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t18.below.kicker`
  - **HTML:** `<div style="" class="kicker below t18"> <span data-lab-text_size_desktop="19" class="t19">IT-gigantene sto skolerett:</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5704080"] > .t39.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm28" style="">– Det finnes ingen quick fix </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-style-solid > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t44 "><span class="lab-row-header-title">TU forklarer</span></h5>`
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

- **Target:** `.t30.below.kicker`
  - **HTML:** `<div style="" class="kicker below t30"> Batteristrid: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t86`
  - **HTML:** `<h2 itemprop="headline" class="headline t86" style="">– Kastet bort millioner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(144)`
  - **HTML:** `<div data-element-guid="3e998cd7-8c2c-4db0-9e11-3dded3fb14f3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Danmarkskabel: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm49`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm49" style="">Reparert og satt i drift igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140602"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Sotrasambandet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t32.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm22" style="">Rammen var 17 mrd. – nå har prislappen blitt nær 30 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Kongsberg Gruppen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140752"] > .t55.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t55" style="">Får rammeavtale på nær 4 milliarder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/5705812"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Etterforskningen av Telenor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm42`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm42" style="">– Det bør ta mye mer enn ett år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="forsvar,ntb,utenriks"]`
  - **HTML:** `<article data-element-guid="a7a2e2b8-03cc-498f-b25f-c7d102f93fd6" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar,ntb,utenriks" data-instance="7140806" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.powered-by`
  - **HTML:** `<div class="powered-by "><a href="https://labradorcms.com/" target="_blank">Powered by Labrador CMS</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 1

#### Affected Elements:

- **Target:** `.scroll-container`
  - **HTML:** `<ul class="scroll-container swipehelper snap-container-x snap-element-start">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

