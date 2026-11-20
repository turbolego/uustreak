# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-11-20T06:33:36.388Z
**URL:** [https://www.tu.no/](https://www.tu.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- **Target:** `.has-row-header.row.large-12:nth-child(50) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Klimasøksmålet:</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(97) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t24 tm24 "><span class="lab-row-header-title">Sotrasambandet:</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(115) > h5`
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
- **Count:** 367

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading"> Teknisk Ukeblad – daglige teknologinyheter </h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t72`
  - **HTML:** `<h2 itemprop="headline" class="headline t72 tm35" style="">Nye tog har strømproblemer – må kanskje bygges om </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="eu,klima,energi"]`
  - **HTML:** `<article data-element-guid="ce3d18d2-cdb6-4462-8895-574fe53e7b2b" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="klima" data-tag="eu,klima,energi" data-instance="7186423" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t40.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm29" style="">Trodde de var skuls – nå slipper kunden regningen fra konsulenthuset </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183863"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Bulk Infrastructure: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183863"] > .t51.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t51" style="">Mener datasenterfrys kunne vært unngått </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7186345"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Raser etter ny jernbanerapport: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t71`
  - **HTML:** `<h2 itemprop="headline" class="headline t71" style="">– En skandale </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185375"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185375"] > .t35.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm26" style="">Norske Olivia nedover på listen over verdens kraftigste superdatamaskiner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185358"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Ife-rådgiver: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185358"] > .color_mobile_no_bg_color.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline color_mobile_no_bg_color" style="">Kan ikke utelukke atomulykke i Tsjernobyl-skala </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185997"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm14.t30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm14" style="">Flere tog ute av drift på Østlandet:&nbsp;Leverandør varslet om bremsefeil på flere av dem </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(7) > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(9)`
  - **HTML:** `<div data-element-guid="c8ef53b5-4a75-4d25-bbf7-4743502fe637" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7186089"]`
  - **HTML:** `<article data-element-guid="3078eefb-9426-4c26-add1-64805d1cf178" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,jernbane,innenriks,ntb" data-instance="7186089"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182506"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Fire år forsinket og flere mrd. dyrere: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182506"] > .tm37.t56.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm37" style="">– Vi får et anlegg i verdensklasse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm19" style="">Tusenvis av norske servere rammet av kritisk feil – NSM sender ut varsel </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143482"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Kinesisk batterigigant satser i Norge: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t54.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t54 tm19" style="">– Vi har arbeidet under radaren </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185907"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Samferdselsministeren:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185907"] > .t41.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm29" style="">Advarer mot nedleggelse av Jernbanedirektoratet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(14) > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t34.tm19.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm19" style="">Skygard-sjefen vil snu synet på bransjen: – Vi skal ikke bare være en forbruker </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t34.tm23.color_mobile_no_bg_color`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm23 color_mobile_no_bg_color" style="">Kranen holdt på å kollapse – nå er årsaken funnet&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185598"] > .color_mobile_no_bg_color.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline color_mobile_no_bg_color" style=""><span class="color_mobile_no_bg_color" data-lab-text_background_color_desktop="">Flere partier vil legge ned Jernbanedirektoratet</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.adZone-parallax > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(19)`
  - **HTML:** `<div data-element-guid="033d3d63-4a12-4008-959d-3e4b2faabfb8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180122"] > .t40.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t40" style="">Bygger programvare uten utviklere </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7185868"]`
  - **HTML:** `<article data-element-guid="f9aafc0f-e9a3-4926-a14d-86beb2a81db6" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="energi" data-tag="energi" data-instance="7185868" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185677"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> 13 års ventetid er over: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185677"] > .t32.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm24" style="">– Setter en helt ny standard for hva det er mulig å få til i spill </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7185953"]`
  - **HTML:** `<article data-element-guid="565588bd-2dec-417d-bce1-53a2efaa8204" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="digi" data-section="it-bransjen" data-tag="norad,it-bransjen,innenriks,dataangrep,ntb" data-instan…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(22) > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(23)`
  - **HTML:** `<div data-element-guid="0efef053-eb57-4e10-853e-0376f8f53e45" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185356"] > .t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Fornebubanen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37.t36.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t36 tm37" style="">– Det er ikke kontroll i det hele tatt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="luftfart,innenriks,ntb"]`
  - **HTML:** `<article data-element-guid="fe3be54c-5df9-4e30-9857-7c5cc4ac87e3" class="column small-12 large-5 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="luftfart" data-tag="luftfart,innenriks,ntb" data-instance="7185567" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(25) > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(26)`
  - **HTML:** `<div data-element-guid="7c5ebb82-8c63-42e2-a92d-c449e7e8aa07" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(27)`
  - **HTML:** `<div data-element-guid="29706c31-019e-42f6-8f70-5e06f5b54166" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7185360"]`
  - **HTML:** `<article data-element-guid="151e5ede-b50e-411a-bbcb-f20c305496ac" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,ntb,innenriks,fornebubanen" data-instance="7185…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184775"] > .t35.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm26" style="">Disse datasentrene rammes av Statnett-frysen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29) > .google-ad.display-label.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t58.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t58 tm30" style="">Microsoft: Kaskadefeil slo ut Outlook </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185269"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185269"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> USA: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185269"] > .t28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t28" style="">Kongsberg leverte systemer til tankskipet som krasjet i turistskip </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184923"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184923"] > .t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Krever 79 millioner fra Ruter: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184923"] > .t48.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm26" style="">Mener bussene har kjørt 100.000 timer uten betaling </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(32)`
  - **HTML:** `<div data-element-guid="ab0a4138-d81b-438a-8ad5-4885387a8811" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(33)`
  - **HTML:** `<div data-element-guid="256911b9-8178-4217-9c59-136e0d9a732d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="romfart"]`
  - **HTML:** `<article data-element-guid="9ddad457-83ef-440e-8f44-279f110bf668" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="romfart" data-instance="7185417" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184225"] > .t28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t28" style="">Her røk pendel-lageret på Strömsundsbron </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7185107"]`
  - **HTML:** `<article data-element-guid="629294a8-cf17-46ae-b2f0-da832cfc0d83" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="ntb,innenriks,samferdsel,tunnel" data-instance="7185107" i…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183972"] > .t25.below.kicker`
  - **HTML:** `<div style="" class="kicker below t25"> Skatteetaten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t36.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t36 tm20" style="">Må bremse store skyplaner grunnet sprengt Microsoft-kapasitet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7185176"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Statfjord A:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm17.t24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t24 tm17" style="">Denne delen av norsk energihistorie skal hogges opp der den ble bygget&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(36)`
  - **HTML:** `<div data-element-guid="54551631-64e8-4be5-8fa0-a4c94a508805" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185165"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7185165"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">Nye amerikanske KI-restriksjoner kan ramme norske datasentre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="datasenter,energi,ntb,utenriks"]`
  - **HTML:** `<article data-element-guid="1e3398a4-bd14-4989-8051-b624c8a07e15" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="datasenter,energi,ntb,utenriks" data-instance="7185122" itemsc…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(38)`
  - **HTML:** `<div data-element-guid="9ab2af03-822d-49c9-bb58-8ad3e0fc1c35" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm18.below`
  - **HTML:** `<div style="" class="kicker below t25 tm18"> Warmflake: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm23" style="">Staten vil ha 9,5 millioner tilbake etter Ukraina-kontrakt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183484"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Vil la KI være vaktbikkje: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183484"] > .tm27.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">– Målet er ikke å kjøpe oss sikkerhet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm19.t32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm19" style="">Vil 3D-printe levende celler – pengene bremser arbeidet&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t46.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t46 tm22" style="">Nye tog trolig forsinket igjen – kan gi kutt i togtilbudet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(41)`
  - **HTML:** `<div data-element-guid="7caf4e13-4807-4a21-b4a9-c5183bcc4b27" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7184671"]`
  - **HTML:** `<article data-element-guid="6bd484d8-b25c-4877-8e1c-265739696d99" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="innenriks,streik,samferdsel,posten,ntb" data-instance="718…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180787"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180787"] > .t29.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm29" style="">Trenger bare sjø og sol for å lage hydrogen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183602"] > .t29.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t29" style="">Mystisk frekvensdipp i strømnettet avslørt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184684"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7184684"] > .t41.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm29" style="">Enorm solcellegevinst viste seg å være regnefeil </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="samferdsel,tog,innenriks,ntb"]`
  - **HTML:** `<article data-element-guid="0b4f6d6b-49d9-4379-a378-6eb65503d1f3" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="samferdsel" data-tag="samferdsel,tog,innenriks,ntb" data-instance="7184710" item…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(44)`
  - **HTML:** `<div data-element-guid="dc752ec8-0db6-40e3-b903-1e1e2beea1ab" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183630"] > .t56.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t56" style="">Hacker forkledd som IT-gründer i&nbsp; jobbintervju </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183578"] > .t29.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm20" style="">Vibrerende madrasser ga oppsiktsvekkende Alzheimer-funn </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7182335"] > .t46.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t46" style="">Økende motstand&nbsp; mot datasentre i USA </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t40.hasTextPadding.mobile-hasTextPadding`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm25 tum-green-dark color_mobile_tum-green-dark hasTextPadding mobile-hasTextPadding" style="">Klarte å fange Space X-rakett etter romtur </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141034"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7184552"]`
  - **HTML:** `<article data-element-guid="a14e6cc1-fdbd-4b6e-94dc-9d1de68bcf6e" class="column small-12 large-12 small-abs-12 large-abs-12 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar,krigen i ukraina,starshield" data-instance="7184552…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(48)`
  - **HTML:** `<div data-element-guid="9f5375ff-611c-4a6c-9f51-5b0068619d5b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184424"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t58.tm17.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t58 tm17" style="">Microsoft-problemene kan skyldes at servere ikke bestod helsesjekk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header.row.large-12:nth-child(50) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Klimasøksmålet:</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm39`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm39" style="">– Norsk oljepolitikk er endret for alltid </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm45`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm45" style="">– Nei, norsk oljepolitikk står </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="microsoft,outlook,it-bransjen"]`
  - **HTML:** `<article data-element-guid="295a032e-6052-4375-8116-87d0abef8a83" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="digi" data-section="it-bransjen" data-tag="microsoft,outlook,it-bransjen" data-instance="7184158" …`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183585"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Datasenter-grep: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183585"] > .tm23.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Prosjektene kan finne veien til andre markeder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184214"] > .t56.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm28" style="">– Avhengigheten vår blir ekstremt eksponert </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179511"]`
  - **HTML:** `<article data-element-guid="4ce8ff9a-1e01-4e52-ac88-beb399d7cfc6" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="debatt" data-tag="debatt" data-instance="7179511" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t61`
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

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7184201"] > .t43.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm31" style="">Lysne får hasteoppdrag om KI-trusler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(56)`
  - **HTML:** `<div data-element-guid="de874b93-1f9e-431d-a437-be091e70fb2a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183686"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">Forvirret av datasenter-frysen? Dette avgjør hvem som må vente </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7183739"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(58)`
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

- **Target:** `.tm17.t23.below`
  - **HTML:** `<div style="" class="kicker below t23 tm17"> Britisk forsvars-KI-selskap: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t67`
  - **HTML:** `<h2 itemprop="headline" class="headline t67 tm22" style="">Storinvestering i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="debatt,klima,energi"]`
  - **HTML:** `<article data-element-guid="5883ce24-3baf-41cd-8542-5908431c13d3" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="debatt,klima,energi" data-instance="7179373" data-image-float=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183553"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183553"] > .t49.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm25" style="">Oppdaget alvorlig sikkerhets­feil på norske tog </h2>`
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

- **Target:** `.t32.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm23" style="">Vinterdekk på nye elbusser – mener liv kan gå tapt&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t53.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm36" style="">Mener bedriftene sløser bort tokens </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm22.headline`
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

- **Target:** `.row.large-12.small-12:nth-child(70)`
  - **HTML:** `<div data-element-guid="7a04225e-9250-4c4d-bf7c-34a1529f871b" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181460"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Her kjøles et gammelt radarsystem ned: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181460"] > .t39.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t39" style="">Nå fremskynder USA utfasingen av disketter&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="innenriks,ntb,forsvar"]`
  - **HTML:** `<article data-element-guid="5e93ccbc-8132-4ccf-9d48-4c2911a5f8b8" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="innenriks,ntb,forsvar" data-instance="7183382" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(72)`
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
  - **HTML:** `<article data-element-guid="f64f4337-3000-4fdc-a690-f760eafc09b0" class="column small-12 large-3 small-abs-12 large-abs-3 " data-site-alias="digi" data-section="it-bransjen" data-tag="it-bransjen,ntb,utenriks,nvidia" data-instance="7183294…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7183098"] > .t42.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t42" style="">Veien raste ut: Nå er det avdekket kvikkleire </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181064"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181064"] > .tm20.t30.headline`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182874"] > .tm18.t26.headline`
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

- **Target:** `article[data-tag="ntb,datasenter,innenriks"]`
  - **HTML:** `<article data-element-guid="ee950c8a-c3e4-491e-a317-bb19d9482bd3" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="datasenter" data-tag="ntb,datasenter,innenriks" data-instance="7182837" itemsc…`
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

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180616"] > .tm37.t56.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t56 tm37" style="">– Vi er ikke klare for en digital verden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180590"] > .headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline " style=""> Der asfalten skriker etter trafikk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7182738"]`
  - **HTML:** `<article data-element-guid="53e46b1b-857f-499c-872d-fce06e2447bb" class="column small-12 large-5 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="energi" data-tag="datasenter,energi" data-instance="7182738" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm15`
  - **HTML:** `<div style="" class="kicker below tm15"> Etter oppsigelsen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm23" style="">–&nbsp;Om jeg kan bli president i Nito? Det er et godt spørsmål </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7180740"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">Fra lansering til europeisk seier på fire måneder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(82)`
  - **HTML:** `<div data-element-guid="6f8f2136-94f6-47f6-b918-136259477229" class="row small-12 large-12" style="">`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7182421"] > .t34.tm26.headline`
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

- **Target:** `article[data-instance="7182247"]`
  - **HTML:** `<article data-element-guid="cc6e7906-bbd7-4ceb-9f69-084e129b2942" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="datasenter,energi,ntb,innenriks" data-instance="7182247" items…`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7181388"] > .tm20.t30.headline`
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

- **Target:** `.tm17.t21.below`
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

- **Target:** `article[data-tag="debatt,klima"]`
  - **HTML:** `<article data-element-guid="92d85310-19e8-4b5d-8f05-094cda113d45" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="debatt" data-tag="debatt,klima" data-instance="7180790" data-image-float="floatL…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="satellitt,ntb,telekom,utenriks"]`
  - **HTML:** `<article data-element-guid="3480859c-2471-4839-9fb2-7351975dca6a" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="satellitt,ntb,telekom,utenriks" data-instance="7181896" ite…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="automatisering,debatt"]`
  - **HTML:** `<article data-element-guid="951dae13-fc2c-4770-ad9f-a390691b79a7" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="automatisering,debatt" data-instance="7179623" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t19.tm19.headline`
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

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7181551"] > .t48.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm26" style="">&nbsp;– Helt surrealistisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t14`
  - **HTML:** `<div style="" class="kicker below t14 tm18"> <span data-lab-text_size_desktop="20" class="t20">Starlink-avtalen:&nbsp;</span> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm17.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm17" style="">Kaller forsvarsministeren inn på teppet: – Det er skremmende </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm22.headline`
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

- **Target:** `.row.large-12.small-12:nth-child(96)`
  - **HTML:** `<div data-element-guid="9daed558-de5d-4fc0-924b-8a9e9bef99d8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-side-bottom.mobile_border-side-bottom.has-row-header:nth-child(97) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t24 tm24 "><span class="lab-row-header-title">Sotrasambandet:</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm26" style="">Krever at statsråden griper inn i pengekonflikten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm29" style="">– Omfanget av forsinkelsene er fremdeles uavklart </h2>`
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

- **Target:** `.tm21.t30.headline`
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

- **Target:** `.tm14.t23.below`
  - **HTML:** `<div style="" class="kicker below t23 tm14"> Etterspørsel hos Statnett:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm36.t38.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm36" style="">Datasentre står for 70 prosent </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180028"] > .t34.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t34" style="">Nå skal de teste <span data-lab-italic_desktop="italic" class="italic m-italic">skikkelig</span> store turbiner </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(103)`
  - **HTML:** `<div data-element-guid="f95411df-b469-427d-a8f6-c4ea278dd663" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(104)`
  - **HTML:** `<div data-element-guid="1e6d9b0d-e670-47be-9479-03aaf940827a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(105)`
  - **HTML:** `<div data-element-guid="aae1735e-4ba4-4938-939b-a93f46600a2d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm27" style="">Uklart om BankID hadde stått på eksamen: – Stort forbedringspotensial </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7148212"]`
  - **HTML:** `<article data-element-guid="731d4f72-1958-4585-8..." class="column small-12 larg..." data-site-alias="tu" data-section="forsvar" data-tag="forsvarsmateriell,st..." data-instance="7148212" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm27" style="">Statens vegvesen dropper klimakrav – frykter at nye prosjekter legges på is </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(108)`
  - **HTML:** `<div data-element-guid="9792392b-46d4-49ab-8d1d-9cb5f2dbd960" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-tum-green`
  - **HTML:** `<div data-element-guid="073f11a5-c0fe-4aaf-be96-42b29cc9f0eb" class="row small-12 large-12 color_mobile_no_bg_color border-tum-green mobile_border-tum-green border-style-no_border_style border-style-mobile_no_border_style hasBorder mobile-…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146728"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146728"] > .tm18.t26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm18" style="">– KI-modeller kan snart kopiere seg selv i smartovner og TV-bokser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7146844"]`
  - **HTML:** `<article data-element-guid="d89075b1-3626-4a06-8057-23d0770940fd" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7146844" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(111)`
  - **HTML:** `<div data-element-guid="2bd1abc4-ef4a-4a9a-a5b3-8f61b8b83911" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm30.t55.headline`
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

- **Target:** `.align-left.mobile_text_align_align-left.tm21`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm21 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">Liten utfordrer danket ut Dustin, Atea og Komplett </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(115) > h5`
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

- **Target:** `.t33.tm26.color_mobile_no_bg_color`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm26 color_mobile_no_bg_color" style="">Telenor peker på kritiske sårbarheter i Citrix Netscaler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="pfas,miljø,klima,helse"]`
  - **HTML:** `<article data-element-guid="35240bb6-2117-454a-808d-5f1f2bf5c326" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="klima" data-tag="pfas,miljø,klima,helse" data-instance="7146306" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146151"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20.t23.below`
  - **HTML:** `<div style="" class="kicker below t23 tm20"> Rema 1000: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t53.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm31" style="">Sjekker fryserne etter «enestående» angrep </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t32.tm25.headline`
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

- **Target:** `article[data-tag="vindkraft,energi,datasenter"]`
  - **HTML:** `<article data-element-guid="88bb4dba-3bd4-4167-9f74-75c85a2016fb" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="vindkraft,energi,datasenter" data-instance="7145930" itemscope…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t53.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm27" style="">Har aldri nådd makspuls – det skal vi være glad for </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(119) > .columns.large-4.large-abs-4`
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

- **Target:** `.t27.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Skinner sprekker – lite togtrafikk får skylden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7143617"]`
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

- **Target:** `article[data-tag="equinor,energi,ntb,utenriks"]`
  - **HTML:** `<article data-element-guid="e7e337c6-6983-4fb5-83be-5b64861ab09b" class="column small-12 large-12 small-abs-12 large-abs-5 " data-site-alias="tu" data-section="energi" data-tag="equinor,energi,ntb,utenriks" data-instance="7144142" itemscop…`
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

- **Target:** `article[data-tag="nito,arbeidsliv,kommentar"]`
  - **HTML:** `<article data-element-guid="14642fee-8f94-4c0d-8385-c07676ff7f09" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="nito,arbeidsliv,kommentar" data-instance="7141083" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141633"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Boeing: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm29" style="">Skal bygge nytt kampfly til den amerikanske marinen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7141950"]`
  - **HTML:** `<article data-element-guid="1ad5c3f3-0b7c-4c66-ab56-36a2d48e7c27" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="industri,faam,vianode,sirkulær økonomi,litium-ion-batterier"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Slakter Teknologirådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .tm23.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Som å beskrive norsk oljepolitikk med data fra 1969 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7140962"]`
  - **HTML:** `<article data-element-guid="2b6f3c2b-770d-4889-b6f8-9de1869c09e5" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="debatt,kunstig intelligens" data-instance="7140962" itemscope=…`
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
  - **HTML:** `<article data-element-guid="d6c2b445-37c8-4760-9d50-fc88351e8d73" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="industri" data-tag="industri,gruvedrift,førdefjorden,nordic mining" data-instan…`
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

- **Target:** `.row.large-12.small-12:nth-child(131)`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141196"] > .tm27.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">Årsaken til F-16-styrt er klar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(133)`
  - **HTML:** `<div data-element-guid="e3c3d518-efbd-4027-bc58-9e0061f1deb3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="romfart,andøya"]`
  - **HTML:** `<article data-element-guid="c2bd7281-87d3-4cfb-92df-9b578345cd39" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="romfart" data-tag="romfart,andøya" data-instance="7141870" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Digitalt massebedrageri: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141732"] > .t31.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t31" style="">– Trolig den største saken hittil i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="it,datasenter"]`
  - **HTML:** `<article data-element-guid="fc67d3c1-54e0-40a5-bcfb-cdd2cacfa5ed" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="it" data-tag="it,datasenter" data-instance="7141819" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="telekom,telenor"]`
  - **HTML:** `<article data-element-guid="24719db7-cbae-4007-85dc-98091575cef0" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="telekom,telenor" data-instance="7141748" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t26.below.kicker`
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

- **Target:** `.tm30.t43.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm30" style="">– Brudd på energiloven </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t52.tm37.headline`
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

- **Target:** `.row.large-12.small-12:nth-child(143)`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140602"] > .t32.tm22.headline`
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

- **Target:** `.tm42.t34.headline`
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

