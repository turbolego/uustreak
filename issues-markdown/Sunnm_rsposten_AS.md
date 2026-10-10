# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-10-10T08:25:00.906Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/definition-list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.3
- **Count:** 2

#### Affected Elements:

- **Target:** `.Credits:nth-child(2) > dl:nth-child(3)`
  - **HTML:** `<dl><!----> <!----> <dd><a href="mailto:annonse@smp.no">annonse@smp.no</a></dd></dl>`
  - **Failure summary:** Fix all of the following: When not empty, element does not have at least one <dt> element followed by at least one <dd> element

- **Target:** `.Credits:nth-child(2) > dl:nth-child(4)`
  - **HTML:** `<dl><!----> <!----> <dd><a href="mailto:redaksjon@smp.no">redaksjon@smp.no</a></dd></dl>`
  - **Failure summary:** Fix all of the following: When not empty, element does not have at least one <dt> element followed by at least one <dd> element


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 98

#### Affected Elements:

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bekymret for Ålesund: – Ekstra skummelt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Jan Rune blei redda – no kan ordninga bli fjerna</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life60.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Sterk lagkjensle er ein del av suksessoppskrifta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-primary-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kokte over etter kampen – to så rødt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.opinion.gridspotlight > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leder">Leder</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Snur ryggen til krisa</span> <!----></h3> <!----></m…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.gridspotlightside.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Åpner på Digerneset</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Tok elsparkesykkel:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politiet: – Toppfart på 77 km/t</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har åpnet i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.hot70.life60 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Søk i døds­annonsene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(3) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her er det kome snø</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(5) > .hot70.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vart valdteken og grovt mishandla</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.is-aske-skin.is-skin:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Small rett i fjellveggen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot90 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny abonnent? 1 krone ut året!</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-prefix-red-skin.hot60.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>La til kai midt i sentrum</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trump kaller fredsprisvalget skammelig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .life60.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nå er huset solgt - sjekk de siste boligsalgene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breaking > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tre mista førerkortet i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(8) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Årets dyreste bolig tok over ett år å selge</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stort politioppbud i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(9) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>En overgang å flytte hit: – Mye å sette seg inn i</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette ble dramatisk for Bjarte</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life60.gridspotlight > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kjedeleg bråstopp </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.is-skin.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ordføraren i Vestnes er død</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .hot60.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Telenor-kollapsen:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span> – Selvsagt svært uheldig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Melder seg ut etter langvarig konflikt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot50.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her går trafikken igjen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tilbakekalles</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(15) > .opinion.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leder">Leder</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ein smekk over fingrane til verdas mektigaste</span>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(15) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Opnar butikk på Moa</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(15) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Eldre mann tatt i 130 km/t</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Vi hadde veldig lyst til å starte noko eige</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Ålesund i helga:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Frister med gratis utstilling</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .no-image.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Betongbil fikk trøbbel </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .gridspotlightside.hot40.life20:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sikra seg ny kontrakt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(18) > .gridtriple.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her dukka stjerneregissøren opp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.griddouble.no-image.hot30 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Snø på fjellovergang – to trafikkulykker på kort tid</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.TwoTeasers.grid:nth-child(19) > .griddouble.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politiet reagerte på dette</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(20) > .opinion.hot30.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(20) > .life40.gridtriple.hot40:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Per Bjarte fortvilar: – Kor er den blitt av?</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .no-image.hot30.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tatt av politiet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Over tusen var uten strøm</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tilbakekalles etter funn av plantevernmidler</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tiltalt for grovt underslag og bedrageri – møtte ikke i retten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.hot50.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hjelper ikke på krisa i fylket</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Advarer: Kan komme 15 cm snø </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(25) > .opinion.hot30.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(25) > .hot30.gridspotlightside.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hun får fredsprisen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.hot30.gridtriple:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>149 km/t på speedometeret – så stod UP der</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.hot30.gridtriple:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leserinnlegg">Leserinnlegg</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Forby import av pels</span> <!----></h…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin-prefix-red.life40.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fjellturen tok ei dramatisk vending</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlightside.hot40.life20:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Av dei første i sitt slag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.hot50.gridspotlight > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Søker om nytt hotellbygg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kraftige reaksjoner på kutt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .breakingvarsel.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mista lappen etter trafikkulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Frykta at alt skulle verte like grått</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fiskedød ved fleire anlegg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .life40.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Stor interesse for disse boligene i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin-prefix-red.no-image.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fengsla i fire veker</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Utlover dusør</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Listhaug lei av «raser» og «tordner»: – Rolig og balansert person</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-prefix-red-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><span class="prefix">Ålesund: </span> <span>Buss og bil kolliderte</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(33) > .no-image.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Melder om straumbrot</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.liveblog > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Nytt om navn:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Går inn i lederstilling etter 30 år i bransjen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(33) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Derfor gikk det galt for sjåføren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(33) > .life40.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>20 bedrifter gjekk saman – no er filmen klar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span> Her er tallene for cruiseåret i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.TwoTeasers.grid:nth-child(37) > .griddouble.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mange tatt i kontroll på E39</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.TwoTeasers.grid:nth-child(37) > .griddouble.no-image.hot40:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stoppa av politiet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.griddouble.breakingvarsel.no-image > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Svingte ut på vegen – så smalt det</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.TwoTeasers.grid:nth-child(40) > .griddouble.no-image.is-aske-skin:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Blir fengsla i institusjon</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(41) > .hot30.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Historisk høyt på ny måling</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(42) > .life40.gridtriple.hot40:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mener fjorden tømmes for fisk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(42) > .gridtriple.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har passert millionen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(42) > .life40.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Slår tilbake:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Som en gjeng 5-åringer i en godtebutikk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(43) > .life40.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Retten på befaring hos milliardbedriften</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nekta å gi opp – no er millionen på plass</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.hot30.is-aske-skin:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Telenor: Problemene er løst</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .no-image.hot30.is-aske-skin:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Telenor: Ikke indikasjoner hacking eller angrep på gang</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.life40.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Storprosjekt ryker</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hun topper lønnslisten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(45) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hadde GPS-sporing på bilen til kvinne</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(45) > .life60.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Store sko å fylle</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(45) > .no-image.hot30.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Seks fekk bot i fartskontroll på E39</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Nytt om navn:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får ny rolle lokalt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(46) > .hot30.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nominert til nasjonal pris</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(46) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny sjef i Sula</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(47) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kjører i motsatt kjøreretning</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(47) > .hot30.gridspotlightside.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trenger flere: – Håper folk melder seg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(47) > .no-image.hot30.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Var for hard på gassen i 30-sona</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(47) > .opinion.hot30.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leserinnlegg">Leserinnlegg</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Snu i tide om ambulansane!</span> <!--…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(48) > .opinion.hot30.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(48) > .opinion.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Kommentar">Kommentar</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hun inviterer ikke til fest</span> <!----></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stiller ut i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin-prefix-red.life60.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Rita og Ole kjempa for livet i bølgene:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Eg såg for meg at det var slik liva våre skulle ende</spa…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(49) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trappar ned – dottera er klar til å ta over</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(49) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Oppvask etter byggetabbe</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.Layout`
  - **HTML:** `<main class="Layout">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.top`
  - **HTML:** `<aside class="gdpr-wrapper top">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

- **Target:** `.Layout`
  - **HTML:** `<main class="Layout">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="front section_frontp..." lang="nb" data-darkmode="auto" data-n-head="%7B%22class%22:%7B%2..." style="--header-calc-height...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.breaking-stripe`
  - **HTML:** `<article data-height-extensions-measure="" data-fetch-key="BreakingStripe:0" class="breaking-stripe paid"><a href="https://www.smp.no/nyheter/i/g61r6a/nyhetsstudio?pinnedEntry=753470"><h3><span></span>Tre mista førerkortet i Ålesund</h3></…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.user`
  - **HTML:** `<button tabindex="1" aria-controls="usermenu" aria-expanded="false" aria-label="Brukermeny" class="user menu-icon"><span class="user-initials"></span> <span class="notification-count" style="display:none;">0</span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.main`
  - **HTML:** `<button tabindex="1" aria-controls="submenu" aria-expanded="false" aria-label="Åpne- og lukkeknapp for meny" class="menu-icon main"><span></span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

