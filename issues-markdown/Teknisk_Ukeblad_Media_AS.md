# WCAG Violations Report for Teknisk Ukeblad Media AS

**Timestamp:** 2026-11-01T03:43:24.047Z
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


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from Annonser
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#google_ads_iframe_\/33423651\/tu_f_toppbanner_0, #celtra-external-content`
  - **HTML:** `<iframe id="celtra-external-content" src="about:blank" frameborder="0" scrolling="no" allowfullscreen="" width="1000px" height="300px" class="notranslate" style="position: relative; border: 0px; display: block; margin: 0px auto;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(101) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Attack-konferansen 2026</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.border-side-bottom > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 t44 "><span class="lab-row-header-title">TU forklarer</span></h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 9

#### Affected Elements:

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179783"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7177707"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147345"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146844"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=2812328&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144804"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
  - **HTML:** `<img itemprop="image" src="https://image.tu.no/?imageId=222933&amp;whRatio=1&amp;width=90&amp;height=90" pinger-seen="true">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144000"] > .bylines > .byline[itemtype="http://schema.org/Person"][itemscope=""] > .content > figure > img[itemprop="image"][pinger-seen="true"]`
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
- **Count:** 378

#### Affected Elements:

- **Target:** `h1`
  - **HTML:** `<h1 class="hidden-heading">Teknisk Ukeblad – daglige teknologinyheter</h1>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.placement-top > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.page-content > .row.large-12.small-12:nth-child(1)`
  - **HTML:** `<div data-element-guid="0245dc14-9f8c-400b-adce-9191b5577589" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179870"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t63.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t63 tm23" style="">Sotra: Entreprenør varsler mulig byggestans – frykter pengekrise </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7178796"] > .t53.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm28" style="">Bygget egen KI-modell for å avsløre hjertesvikt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm21" style="">Unikt samarbeid ga felttestene for CO2-lagring en ny dimensjon </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180366"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7180366"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Færre og kortere tog på Østlandet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t44.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t44 tm31" style="">Tar flere tog ut av trafikk etter brann i Lillestrøm </h2>`
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

- **Target:** `.row.large-12.small-12:nth-child(11)`
  - **HTML:** `<div data-element-guid="f95411df-b469-427d-a8f6-c4ea278dd663" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.lab-scrollbox-headline`
  - **HTML:** `<h2 itemprop="headline" class="headline lab-scrollbox-headline t26 font-weight-bold m-font-weight-bold font-Archivo" style="">Har du fått med deg disse?</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180320 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180319"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t26 font-weight-bold m-font-weight-bold" style="">Skal du se skrekkfilm i dag? </h2> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#markup_7180315 > .fullwidthTarget.content > unite-player, #status-container`
  - **HTML:** `<div class="container" id="status-container"> <div class="loading" id="status-message">Initialiserer...</div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7180311"] > .content > .floatingTextSubset.media > .floatingText`
  - **HTML:** `<div class="floatingText"> <h2 itemprop="headline" class="headline t26 font-weight-bold m-font-weight-bold" style="">Kutter støtten til Jenter og teknologi </h2> </div>`
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

- **Target:** `.row.large-12.small-12:nth-child(14) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(15)`
  - **HTML:** `<div data-element-guid="1e6d9b0d-e670-47be-9479-03aaf940827a" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(16)`
  - **HTML:** `<div data-element-guid="033d3d63-4a12-4008-959d-3e4b2faabfb8" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.adZone-parallax > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(19)`
  - **HTML:** `<div data-element-guid="aae1735e-4ba4-4938-939b-a93f46600a2d" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179901"]`
  - **HTML:** `<article data-element-guid="3983df3a-c954-455b-be2a-faca421fb236" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="forsvaret,ntb,innenriks,forsvar" data-instance="7179901" item…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179306"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Har hjulpet Ukraina siden 2022: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t54.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t54 tm29" style="">Mener Norden kan bygge sitt eget satellittforsvar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm19.t23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t23 tm19" style="">Enova gir 3,9 milliarder til to flytende havvindanlegg </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t22.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t22 tm24" style="">Teknisk Ukeblad brøt god presseskikk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179655"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Legger frem Morrow-planer:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179655"] > .t28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t28" style="">– Kan ikke investere før vi har krafttilgang </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(23)`
  - **HTML:** `<div data-element-guid="78219445-15e2-464c-aabe-c8b1208ea200" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179945"] > .t32.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t32" style="">Nå etablerer Forsvarsmateriell seg i Østerdalen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="ntb,innenriks,havvind,energi"]`
  - **HTML:** `<article data-element-guid="84455c62-c12d-4c4a-a7da-d6b08855e2cd" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="ntb,innenriks,havvind,energi" data-instance="7179911" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(25) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147356"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Presset kapasitet på Luftkrigsskolen: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm42.t40.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm42" style="">&nbsp;– Bygget for noe annet enn dette </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7178623"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7178623"] > .t31.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm25" style="">Kaprer KI-modeller – utfører 100.000 steg helt uten mennesker </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7177674"] > .t53.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm27" style="">Drikkevann-bråk: «Mister strøm til 1300 boliger»</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179682"]`
  - **HTML:** `<article data-element-guid="10b67df8-c46a-405d-99fd-7fb1deb0e646" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="digitalisering og offentlig it" data-tag="innenriks,datasenter,ntb,digitalise…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm15.t18.below`
  - **HTML:** `<div style="" class="kicker below t18 tm15"> Økt støtte til datasenter-frys: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm20" style="">Rødt vil ha avklaring neste uke </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179385"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> NVE i ny analyse: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm28" style="">Kan bli 55 prosent høyere kraftpriser i 2035 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179497"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179497"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Energiministeren:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm29.t41.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm29" style="">&nbsp;– Må hindre at det skjer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(29) > .display-label.google-ad.disable-initial-load > .ad-label`
  - **HTML:** `<span class="ad-label">Annonse</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t52.tm17.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t52 tm17" style="">Bane Nor: – Har lav terskel for å stanse trafikken når det kan være utrygt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t47.bg-secondary.color_mobile_bg-secondary`
  - **HTML:** `<h2 itemprop="headline" class="headline t47 tm20 bg-secondary color_mobile_bg-secondary hasTextPadding mobile-hasTextPadding" style="">– Vi befinner oss i et Covid-øyeblikk for cybersikkerhet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179428"]`
  - **HTML:** `<article data-element-guid="ff9b1144-e07d-49e6-a5fc-9e10be3f63d5" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="energi,innenriks,norgespris,ntb" data-instance="7179428" items…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179458"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179458"] > .tm14.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm14"> Vegvesenets største kontrakt i år:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179458"] > .t34.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm24" style="">Å fjerne flaskehals i Finnmark </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179398"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Equinor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm20" style="">Gassfunn i Nordsjøen kan være dobbelt så stort som antatt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7177904"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Frykter at ingeniørgraden mister verdi:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm23" style="">– Kan få alvorlige konsekvenser </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179395"]`
  - **HTML:** `<article data-element-guid="be2db536-aebf-4e30-9026-50d5233dc153" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="innenriks,energi,datasenter,ntb" data-instance="7179395" items…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179198"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm15.t20.color_mobile_no_bg_color`
  - **HTML:** `<div style="" class="kicker below t20 tm15 color_mobile_no_bg_color"> Laveste nivå i gasslagre på 15 år: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.bg-secondary.color_mobile_bg-secondary.t35`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm20 bg-secondary color_mobile_bg-secondary hasTextPadding mobile-hasTextPadding" style="">Equinor-sjefen: – Følg med på værmeldingen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7179150"]`
  - **HTML:** `<article data-element-guid="905895f3-20e9-4d13-935f-ddff54b1e4a0" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="samferdsel" data-tag="ntb,utenriks,togulykke,samferdsel" data-instance="7179150"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179132"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7179132"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Trump har sagt «stopp» to ganger:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t41.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm27" style="">Nå er Equinors havvindpark 80 prosent ferdig&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(36)`
  - **HTML:** `<div data-element-guid="6e9fe28d-d7e8-4b5b-83a3-83746e887e49" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148991"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> KI i ingeniørfaget:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148991"] > .tm31.t41.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm31" style="">&nbsp;– Endrer ikke behovet for ingeniørkompetanse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178967"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178967"] > .t41.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t41" style="">Morrow-kjøper ber om å få snike i nettkøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t47.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t47 tm27" style="">Saksøker Tieto etter krangel rundt stor avtale </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(39)`
  - **HTML:** `<div data-element-guid="15c79bca-da0e-4f68-ae75-2449d4c2ee83" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(40)`
  - **HTML:** `<div data-element-guid="531f9620-04fa-4aed-a38c-8c2b941ae02e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178837"] > .t23.tm20.below`
  - **HTML:** `<div style="" class="kicker below t23 tm20"> Brannrisiko i tunneler: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm41.t53.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm41" style="">FrP krever svar etter TU-avsløring </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178703"] > .t39.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm25" style="">Omfattende norsk-ukrainsk samarbeid </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178697"] > .tm25.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline tm25" style="">Norge gir 500 mill. for å sikre Ukraina varme </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178683"] > .t21.tm18.below`
  - **HTML:** `<div style="" class="kicker below t21 tm18"> TU i Ukraina med NVE-sjefen:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178683"] > .t53.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm27" style="">– Du klarer ikke ta ut norsk kraftforsyning ved å ta ut noen få anlegg </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148290"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148290"] > .t21.below.kicker`
  - **HTML:** `<div style="" class="kicker below t21"> Bane Nor risikerer dagbøter på 40.000 kr: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148290"] > .tm31.t41.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm31" style="">Har&nbsp;kjent til brannrisiko i tunneler i ni år&nbsp; – men ikke gjort nok </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="innenriks,klima,ntb,bellona"]`
  - **HTML:** `<article data-element-guid="67e4c1cd-9e9d-4234-ac8c-79a81b5ee3e8" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="klima" data-tag="innenriks,klima,ntb,bellona" data-instance="7178721" itemscope=…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm25" style="">Teknologi større enn olje i Norge: – Jeg ble overrasket </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7177910"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm21" style="">Stortinget ba om droneforslag. Det kom ikke: – Uprofesjonelt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t18.tm17.below`
  - **HTML:** `<div style="" class="kicker below t18 tm17"> Første siden 2022: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm16.t25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm16" style="">Forsvarsmateriell-topp har fått karantene i et halvt år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7177707"]`
  - **HTML:** `<article data-element-guid="e4ff88ac-7387-4877-8852-ea2b179ecad1" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="kommentar" data-tag="kommentar" data-instance="7177707" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7178229"]`
  - **HTML:** `<article data-element-guid="cf19fa26-ee39-4ed2-9055-f4938689d1e4" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="klima" data-tag="innenriks,ntb,klima,nordic mining" data-instance="7178229" item…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7149044"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7178138"]`
  - **HTML:** `<article data-element-guid="a857bc5a-f2fc-4b84-aa9f-ee3b0079ebdd" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="starlink,forsvar,satellittkommunikasjon" data-instance="71781…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(47)`
  - **HTML:** `<div data-element-guid="97e46205-7154-4496-a0ad-eec304339c8f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7178204"]`
  - **HTML:** `<article data-element-guid="64d92f8b-9023-4812-9c31-3537c3a25ecf" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="it" data-tag="it,innenriks,telekom,dsb,beredskap,ntb" data-instance="7178204" it…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7178717"] > .t29.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t29" style="">Aasland: Datasentre kan måtte bygge ut mer fornybar kraft </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148783"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148783"] > .t51.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t51" style="">Utvikler fikk lakserettigheter etter mye om og men – saksøker likevel staten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.t24`
  - **HTML:** `<div style="" class="kicker below t24 align-left mobile_text_align_align-left"> Fensfeltet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t50.align-left.mobile_text_align_align-left`
  - **HTML:** `<h2 itemprop="headline" class="headline t50 tm26 align-left mobile_text_align_align-left" style="">Sjeldne mineraler kan gi nytt liv til gammel vannvei </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148562"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t32.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm21" style="">Nazi-Tyskland var ikke i nærheten av å lage en atombombe </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148964"] > .t30.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t30" style="">Norske butikker åpner for humanoide roboter </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(51)`
  - **HTML:** `<div data-element-guid="54e0fe77-aa04-4228-8901-5901035ce96e" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148398"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5703042"] > .t57.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t57 tm29" style="">Fjernet Forsvarsbygg-sjef tapte mot staten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148989"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148989"] > .t32.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t32" style="">Militære droneplaner for 2027 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148388"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t64.tm32.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t64 tm32" style="">Nå kommer krav om ladebokser «ingen» biler kan snakke med </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148550"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t57.tm33.color_mobile_no_bg_color`
  - **HTML:** `<h2 itemprop="headline" class="headline t57 tm33 color_mobile_no_bg_color" style="">Jorden blir både mer og mindre rund </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148841"] > .t45.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Warmflake møter staten i retten neste år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="droner,forsvar"]`
  - **HTML:** `<article data-element-guid="d84e1a36-5dfc-418f-9ebe-a708037f3615" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="droner,forsvar" data-instance="7178053" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148741"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm17.t33.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm17" style="">Prøvde å stramme låsen på Trondheims-brua – det gjorde vondt verre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7177748"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7147345"]`
  - **HTML:** `<article data-element-guid="e7e39876-9145-4174-8933-404ae11c491a" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7147345" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7177840"] > .t21.tm18.below`
  - **HTML:** `<div style="" class="kicker below t21 tm18"> Cheap Energy: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7177840"] > .t37.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm22" style="">Rammet av datainnbrudd – ventet over to uker med å varsle kunder </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148059"] > .t43.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t43" style="">Flytende Nscale-brakke får slippe ut avløpsvann rett i sjøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7177924"]`
  - **HTML:** `<article data-element-guid="9a8b6b50-04c6-4e36-b7ad-f614ca9d270a" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar" data-instance="7177924" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7177780"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Saksøker Nscale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t49.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm27" style="">Fikk fyken og ble kastet ut klokken 23 på kvelden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(62)`
  - **HTML:** `<div data-element-guid="c2c2d313-936e-4adc-b188-7519b67b305c" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(63)`
  - **HTML:** `<div data-element-guid="1055d408-8f31-46c5-9f29-9b1d0818c2c2" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm21" style="">Norske nettverk overvåket gjennom annonser: – Svært alvorlig </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147358"] > .t33.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm24" style="">&nbsp;Vil snu ingeniørrollen på hodet med KI: – Helt enormt potensial </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm19.t22.below`
  - **HTML:** `<div style="" class="kicker below t22 tm19"> Rapport: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148370"] > .t41.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm21" style="">Tross sanksjoner er Norges eksport til Russland omtrent lik</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148999"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148999"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Ny analyse: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 tm23" style="">Staten kan spare 28 milliarder på å bygge Hordfast </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7149025"]`
  - **HTML:** `<article data-element-guid="8b7f1cf7-4121-4129-8f6c-11363f3314e4" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="bygg" data-tag="bygg" data-instance="7149025" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148966"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Nå angripes PHP-sårbarhetene: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148966"] > .t50.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t50 tm26" style="">– Svært kort vei til at dette også kan ramme Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7149080"] > .tm28.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline tm28" style="">Vegvesenet droppet klimakrav etter instruks fra depart­ementet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148721"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148721"] > .t24.below.kicker`
  - **HTML:** `<div style="" class="kicker below t24"> Telenor Norge-sjefen overrasket: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t37.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm28" style="">– Alle virksomheter bør ha beredskap for mobilutfall – også Bane Nor </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148697"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm23" style="">Togtrafikken gjennom Femern-tunnelen kan bli flere år forsinket </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t24.tm20.below`
  - **HTML:** `<div style="" class="kicker below t24 tm20"> Staten vil endre ingeniørutdanningene:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t54.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t54 tm26" style="">– Ødelegger profesjonen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm26" style="">«Tåkepistol» skal beskytte datasentre mot brann </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148751"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148751"] > .tm18.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm18"> Første gang på ni år:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t45.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t45 tm24" style="">Grønt lys til nytt vindkraftverk&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(71)`
  - **HTML:** `<div data-element-guid="d59fe8b0-1663-41b3-939e-03b409aedfa9" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148351"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t49.tm20.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t49 tm20" style="">Flyet trenger bare 50 meter for å lande og ta av </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147065"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147065"] > .t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Kjernekraft-fremtiden: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147065"] > .t57.tm29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t57 tm29" style="">Energibyråtopp avviser betydelig rolle for Norges nasjonalgrunnstoff&nbsp; </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148615"] > .desktop-floatLeft.mobile-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148615"] > .tm26.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline tm26" style="">Fransk kampfly har styrtet – én omkommet </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7147696"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm30.t41.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm30" style="">Pentagon vurderer å avsløre løgnere med KI </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7148678"]`
  - **HTML:** `<article data-element-guid="f0745705-0e52-4f82-ac2c-c6111403475b" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="energi,olje og gass" data-instance="7148678" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147921"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(77)`
  - **HTML:** `<div data-element-guid="defd0f9f-b4ef-4fd1-85c9-c033eca531d9" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148026"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm21" style="">Nettleser vil at du skal stresse mindre </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147915"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147915"] > .t51.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t51" style="">Ukrainske F-16-fly får snart avløsning </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148253"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t26.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm22" style="">Norsk sjøkabel kan gjøre Canada uavhengig av USA </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t57.tm24.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t57 tm24" style="">Godkjenner gassfeltet til Equinor-selskap –&nbsp;&nbsp;trosser miljøvernere </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144835"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144835"] > .t35.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm28" style="">Idealistisk energiekspert med solceller: – Jeg er prinsipielt imot norgespris </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm17.t29.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm17" style="">Refser staten for arbeidet med energieffektivisering </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm27" style="">Uklart om BankID hadde stått på eksamen: – Stort forbedringspotensial </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7148212"]`
  - **HTML:** `<article data-element-guid="731d4f72-1958-4585-8..." class="column small-12 larg..." data-site-alias="tu" data-section="forsvar" data-tag="sjøforsvaret,forsvar..." data-instance="7148212" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7148327"] > .t37.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm27" style="">Statens vegvesen dropper klimakrav – frykter at nye prosjekter legges på is </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147784"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147784"] > .t39.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm25" style="">Hangarskip med kampfly på vei til Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi,ntb,utenriks"]`
  - **HTML:** `<article data-element-guid="21e0abf0-4502-42fd-b146-26f177cf1e71" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="energi,ntb,utenriks" data-instance="7148445" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146982"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t40.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t40 tm30" style="">Trodde de hadde avtalt fastpris på 5,8 milliarder – nå møtes de i retten </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t35.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t35 tm21" style="">Krever at Norge legger toll på kinesiske elbiler </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(85)`
  - **HTML:** `<div data-element-guid="53bcc1ec-d44c-4702-b8c9-ee548fe48235" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147902"] > .t38.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t38" style="">EU vil bremse Kina, men Norge kjøper stadig mer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147816"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t61`
  - **HTML:** `<h2 itemprop="headline" class="headline t61 tm21" style="">Statnett: Norge kan gå mot kraftunderskudd </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7148007"] > .t40.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t40" style="">Starlink solgte bredbånd for 800 millioner i Norge </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm35`
  - **HTML:** `<h2 itemprop="headline" class="headline t48 tm35" style="">Kutter støtten til Jenter og teknologi </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7147364"]`
  - **HTML:** `<article data-element-guid="6dbba5aa-6348-49ea-a068-a41e5640bbe4" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="forsvar,naval strike missile,danmark" data-instance="7147364"…`
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

- **Target:** `.row.large-12.small-12:nth-child(90)`
  - **HTML:** `<div data-element-guid="9792392b-46d4-49ab-8d1d-9cb5f2dbd960" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.border-tum-green`
  - **HTML:** `<div data-element-guid="073f11a5-c0fe-4aaf-be96-42b29cc9f0eb" class="row small-12 large-12 color_mobile_no_bg_color border-tum-green mobile_border-tum-green border-style-no_border_style border-style-mobile_no_border_style hasBorder mobile-…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(92)`
  - **HTML:** `<div data-element-guid="69692274-8637-4f96-8a7b-c28608b15189" class="row small-12 large-12" style="">`
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

- **Target:** `.row.large-12.small-12:nth-child(94)`
  - **HTML:** `<div data-element-guid="65a9dd55-e032-41a1-9371-ab0fc1a62731" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143400"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(95) > .columns.large-4.large-abs-4`
  - **HTML:** `<div data-element-guid="d7e69af4-a3b1-4bfe-aa04-9b8d7db5cede" class="columns small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(96)`
  - **HTML:** `<div data-element-guid="2bd1abc4-ef4a-4a9a-a5b3-8f61b8b83911" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm30" style="">Norsk selskap har startet stridsvognbygging </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7147360"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t31.tm23.headline`
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

- **Target:** `article[data-tag="maritim,forsvar"]`
  - **HTML:** `<article data-element-guid="5778c5a7-eead-4463-8c8a-f84152d0aefd" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="forsvar" data-tag="maritim,forsvar" data-instance="7146350" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146362"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146362"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nytt olje- og gassfunn for Equinor: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t42.tm30.color_mobile_no_bg_color`
  - **HTML:** `<h2 itemprop="headline" class="headline t42 tm30 color_mobile_no_bg_color" style="">– Produksjon innen tre år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.has-row-header.color_mobile_no_bg_color.row:nth-child(101) > h5`
  - **HTML:** `<h5 class="row_header_text large-12 small-12 "><span class="lab-row-header-title">Attack-konferansen 2026</span></h5>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t22.tm18.below`
  - **HTML:** `<div style="" class="kicker below t22 tm18"> Kina-biler filmet soldater: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7146055"] > .t35.tm28.headline`
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

- **Target:** `article[data-tag="klima,helse,miljø,pfas"]`
  - **HTML:** `<article data-element-guid="35240bb6-2117-454a-808d-5f1f2bf5c326" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="klima" data-tag="klima,helse,miljø,pfas" data-instance="7146306" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146151"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7146151"] > .t23.tm20.below`
  - **HTML:** `<div style="" class="kicker below t23 tm20"> Rema 1000: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm31.t53.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm31" style="">Sjekker fryserne etter «enestående» angrep </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(103)`
  - **HTML:** `<div data-element-guid="5fb3a5ac-bbc3-406b-9875-8de8dfb9304f" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145088"] > .t32.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm25" style="">Gigantisk vindturbin på høyde med Berlins TV-tårn – men effekten er beskjeden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145583"] > .t21.tm18.below`
  - **HTML:** `<div style="" class="kicker below t21 tm18"> Én ble skadet i Romeriksporten: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t51.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t51 tm26" style="">&nbsp;– Rakk ikke å stoppe i tide </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.mobile_no_border_side.mobile_no_border_color.color_mobile_no_bg_color > unite-player, #status-container`
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

- **Target:** `.tm26.t26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t26 tm26" style="">Svindlet til seg nesten 80 mill. med KI-musikk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="vindkraft,energi,datasenter"]`
  - **HTML:** `<article data-element-guid="88bb4dba-3bd4-4167-9f74-75c85a2016fb" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="vindkraft,energi,datasenter" data-instance="7145930" itemscope…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141629"] > .t53.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t53 tm27" style="">Har aldri nådd makspuls – det skal vi være glad for </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(106) > .columns.large-4.large-abs-4`
  - **HTML:** `<div data-element-guid="a6eada87-f928-48fe-9db8-186045985efb" class="columns small-12 large-4 small-abs-12 large-abs-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142746"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144423"] > .t36.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t36" style="">Reagerer på kutt av over en halv mrd. til energitiltak i boliger </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145105"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7141554"]`
  - **HTML:** `<article data-element-guid="859d0750-0e98-4059-993f-3a39892434a2" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="debatt" data-tag="energi,debatt" data-instance="7141554" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145539"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7145539"] > .t27.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Skinner sprekker – lite togtrafikk får skylden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7143617"]`
  - **HTML:** `<article data-element-guid="0ec23284-2df1-4293-9f8d-bd866dce187c" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="debatt" data-tag="kunstig intelligens,debatt" data-instance="7143617" itemscop…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="vannkraft,energi"]`
  - **HTML:** `<article data-element-guid="793986f2-3715-4289-9e91-0b930a4eb260" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="vannkraft,energi" data-instance="7145631" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="6058960"]`
  - **HTML:** `<article data-element-guid="78137ecd-0806-47a5-8adc-ed64595739f2" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="energi" data-tag="energi,olje og gass" data-instance="6058960" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145468"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145468"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Kilder avslører KI-kjempene: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7145468"] > .t32.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t32" style="">Mener «katastrofal» hendelse kan skje om et halvår </h2>`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144272"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144272"] > .t50.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t50" style="">Droneforsvaret skal styrkes </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143860"] > .t22.below.kicker`
  - **HTML:** `<div style="" class="kicker below t22"> Nye fregatter: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.t37`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 align-left mobile_text_align_align-left" style="">– Ikke enkelt å bli klok på hva regjeringen faktisk skriver </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t38.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t38 color_mobile_no_bg_color" style="">Vil bruke 192 milliarder på forsvar i 2027 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144301"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144301"] > .t34.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 color_mobile_no_bg_color" style="">Regjeringen åpner for å bygge nye jernbaner uten ERTMS </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Nye milliardprosjekter må vente:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144410"] > .t34.color_mobile_no_bg_color.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 color_mobile_no_bg_color" style="">– Må ta bedre vare på det vi har </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7144000"]`
  - **HTML:** `<article data-element-guid="d80f12c5-6587-4ce2-8d02-c3140aded7aa" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="kommentar" data-instance="7144000" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.align-left.mobile_text_align_align-left.t41`
  - **HTML:** `<h2 itemprop="headline" class="headline t41 tm25 color_mobile_no_bg_color align-left mobile_text_align_align-left" style="">Ny milliardsprekk for Melkøya-elektrifisering </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143946"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Endring i momsfritak gir elbilrush: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143946"] > .t48.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t48" style="">– Det går mot rekord i år også </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144242"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7144242"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Sjefen i Norske Tog:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t67`
  - **HTML:** `<h2 itemprop="headline" class="headline t67 tm40" style="">Slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(116)`
  - **HTML:** `<div data-element-guid="3995e50d-a098-4359-a74c-3fe848c9853a" class="row small-12 large-12" style="">`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> To studier gir svar: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143512"] > .t52.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t52" style="">Lønner solceller seg mest med eller uten et batteri? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="energi,eu,gass"]`
  - **HTML:** `<article data-element-guid="1753861a-c0c1-4f9e-b3e8-5f1d704f2f04" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="energi" data-tag="energi,eu,gass" data-instance="7143974" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143261"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> Miljøaktivister:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7143261"] > .t29.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t29" style="">– Nye aksjonister har stanset gruvedrift ved Førdefjorden </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="innenriks,jernbane,samferdsel"]`
  - **HTML:** `<article data-element-guid="5ec1c46c-0811-489e-b43c-226883db9011" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="samferdsel" data-tag="innenriks,jernbane,samferdsel" data-instance="7143284" ite…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm38`
  - **HTML:** `<h2 itemprop="headline" class="headline t32 tm38" style="">Utelukker ikke å sende datasentre bakerst i strømkøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142612"] > .headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline " style="">Geely kommer med rekordrask lading </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142777"]`
  - **HTML:** `<article data-element-guid="3777d14d-b014-4907-8c7c-4bc5ae66d625" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="digi" data-section="kommentar" data-tag="kommentar" data-instance="7142777" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(121)`
  - **HTML:** `<div data-element-guid="edafa385-ed5d-418b-b9d7-73fe587afcd3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(122)`
  - **HTML:** `<div data-element-guid="76827d2f-113e-471b-a69c-f6e43b232918" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142727"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142291"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm33.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm33" style="">Avis: F-16-situasjonen i Ukraina er kritisk </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140996"] > .desktop-floatLeft.media`
  - **HTML:** `<div class="media desktop-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140996"] > .t39.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t39 tm22" style="">Reaktordrevne skip kan komme til Norge lenge før kjernekraft på land </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(125)`
  - **HTML:** `<div data-element-guid="94239afd-e7bb-4e1b-beb9-7aa5db5accdb" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm20.t37.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t37 tm20" style="">Ett av fem offentlige anbud får kun ett tilbud: – I praksis ingen konkurranse </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm28" style="">Norsk fregatt testet ny missiltype </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445917"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445917"] > .t25.tm28.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t25 tm28" style="">Advarer: Selvkjørende biler kan gi oss lengre køer </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141726"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Android-skadevare: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t29.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t29 tm23" style="">Kan stjele bankdataene dine med KI </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7142036"] > .mobile-floatLeft.media`
  - **HTML:** `<div class="media mobile-floatLeft">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t30.tm21.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm21" style="">Dansk politi brukte plattform som knyttes til Russland </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142302"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t55.tm26.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t55 tm26" style="">Brua forskjøv seg 40 cm </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142239"] > .below.kicker`
  - **HTML:** `<div style="" class="kicker below "> 200.000 tonn årlig: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142239"] > .t27.tm31.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t27 tm31" style="">Nytt selskap skal lagre CO<sub>2</sub> i Nordsjøen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141830"] > .tm17.below.kicker`
  - **HTML:** `<div style="" class="kicker below tm17"> Europas dyreste diesel, men: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141830"] > .t30.tm22.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t30 tm22" style="">Vi bruker langt mindre andel av inntekten vår </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="nito,kommentar,arbeidsliv"]`
  - **HTML:** `<article data-element-guid="14642fee-8f94-4c0d-8385-c07676ff7f09" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="kommentar" data-tag="nito,kommentar,arbeidsliv" data-instance="7141083" itemscop…`
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
  - **HTML:** `<article data-element-guid="1ad5c3f3-0b7c-4c66-ab56-36a2d48e7c27" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="industri,litium-ion-batterier,vianode,sirkulær økonomi,faam"…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.digi.no/a/7141845"] > .t20.below.kicker`
  - **HTML:** `<div style="" class="kicker below t20"> Slakter Teknologirådet: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t33.tm23.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm23" style="">– Som å beskrive norsk oljepolitikk med data fra 1969 </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7140962"]`
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

- **Target:** `article[data-tag="industri,eu"]`
  - **HTML:** `<article data-element-guid="99c5bf78-0cf2-4576-9b21-34e5661c64c9" class="column small-12 large-8 small-abs-12 large-abs-8 " data-site-alias="tu" data-section="industri" data-tag="industri,eu" data-instance="7141305" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-instance="7142185"]`
  - **HTML:** `<article data-element-guid="d6c2b445-37c8-4760-9d50-fc88351e8d73" class="column small-12 large-12 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="industri" data-tag="nordic mining,industri,gruvedrift,førdefjorden" data-instan…`
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

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7142188"] > .t31.tm25.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t31 tm25" style="">Nordic Mining-sjefen slutter på dagen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(134)`
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

- **Target:** `.t33.tm27.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t33 tm27" style="">Årsaken til F-16-styrt er klar </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row.large-12.small-12:nth-child(136)`
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

- **Target:** `article[data-tag="it,datasenter"]`
  - **HTML:** `<article data-element-guid="fc67d3c1-54e0-40a5-bcfb-cdd2cacfa5ed" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="tu" data-section="it" data-tag="it,datasenter" data-instance="7141819" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="telenor,telekom"]`
  - **HTML:** `<article data-element-guid="24719db7-cbae-4007-85dc-98091575cef0" class="column small-12 large-4 small-abs-12 large-abs-4 " data-site-alias="digi" data-section="telekom" data-tag="telenor,telekom" data-instance="7141748" itemscope="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7141244"] > .t26.below.kicker`
  - **HTML:** `<div style="" class="kicker below t26"> Nitos hovedstyre:&nbsp; </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t62`
  - **HTML:** `<h2 itemprop="headline" class="headline t62 tm36" style="">Stiller seg bak Lein </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/5706079"] > .t45.headline[itemprop="headline"]`
  - **HTML:** `<h2 itemprop="headline" class="headline t45" style="">Nasa vil fly som med SR-71 Blackbird igjen </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t25.below.kicker`
  - **HTML:** `<div style="" class="kicker below t25"> Varsler om tvangsmulkt til Nscale: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t43.tm30.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t43 tm30" style="">– Brudd på energiloven </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/6445883"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm37`
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

- **Target:** `.border-side-bottom > h5`
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

- **Target:** `.row.large-12.small-12:nth-child(146)`
  - **HTML:** `<div data-element-guid="3e998cd7-8c2c-4db0-9e11-3dded3fb14f3" class="row small-12 large-12" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .media`
  - **HTML:** `<div class="media ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-k5a-url="https://www.tu.no/a/7140700"] > .t23.below.kicker`
  - **HTML:** `<div style="" class="kicker below t23"> Danmarkskabel: </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.tm49.t49.headline`
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

- **Target:** `.tm42.t34.headline`
  - **HTML:** `<h2 itemprop="headline" class="headline t34 tm42" style="">– Det bør ta mye mer enn ett år </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `article[data-tag="utenriks,ntb,forsvar"]`
  - **HTML:** `<article data-element-guid="a7a2e2b8-03cc-498f-b25f-c7d102f93fd6" class="column small-12 large-6 small-abs-12 large-abs-6 " data-site-alias="tu" data-section="forsvar" data-tag="utenriks,ntb,forsvar" data-instance="7140806" itemscope="">`
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

