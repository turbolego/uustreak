# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-11-05T09:19:12.021Z
**URL:** [https://www.smp.no/](https://www.smp.no/)
**Total Violations:** 7

## Violation Details

### <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements

- **Impact:** serious
- **Description:** Ensure <dl> elements are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/definition-list?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 96

#### Affected Elements:

- **Target:** `.breakingvarsel.gridfullsize.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vedgår feil: – Uheldig formu­lering</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gav toppleiar lønsauke – krev moderasjon for andre</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .no-image.hot50.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Etter ulykka:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gutt måtte opereres flere ganger</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nytt signal om renta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.hot60.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Prisantydningen var 14,5 millioner kroner – nå er boligen solgt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.gridspotlightside.payed:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sendt til sjukehus etter trafikkuhell</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-b > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Langer ut mot Listhaug</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3><!----> <span>Ut med 150.000 kroner til hytteprosjekt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-dark-skin.hot70 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Søk i døds­annonsene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(3) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Butikk-kjede kjem tilbake</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(3) > .hot60.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Advarer: – Kan gi nerveskader</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nektes å handle på Kiwi</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breaking.no-image.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Flytrøbbel: Denne avgangen er kansellert</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .hot60.gridspotlightside.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Kan være en fordel for AaFK</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlightside.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Setter inn nye tog</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>I hardt vær – skyhøy gjeld</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Google-grep i skolen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får storfint besøk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.is-aske-skin.hot60 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Konkurs i byggfirma</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.hot50.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>To hackergrupper tar på seg skylden</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Amilia (9) kom aldri mer hjem</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.is-skin.gridtriple:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Eg er pisselei</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.is-aske-skin.gridspotlight > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ulykke: Frakta til St. Olavs</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politiet stod klare med laseren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har signert nye kontraktar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(12) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Blir avdelingsleiar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kjøper opp fleire butikkar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sette kaffien i vrangstrupa då ho las i avisa</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot30.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Frigir dokumenter</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>23-åring med drømmejobb: – Uvirkelig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.hot60.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Amerikaner i Ålesund:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– De er slitne og trenger endring</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(14) > .is-primary-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Planlegg investering til nesten 25 millionar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .hot60.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Behov for flere ansatte</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sender ut kokevarsel</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(17) > .opinion.hot30.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leserinnlegg">Leserinnlegg</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stortinget har bestemt. Departementet …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(19) > .is-aske-skin.is-skin.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sender ut nabovarsel </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nå sender de snart container nummer 25.000</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(19) > .gridspotlightside.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>E136</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny runde med kolonnekjøring – men ingen informasjon</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(20) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ved krig eller krise: – Vil måtte prioritere hardt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(20) > .hot50.gridtriple.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ålesund: Vurderer fritak</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.gridtriple.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette kan skje med renta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(21) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Mange seier at dei sluttar om det blir aktuelt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(23) > .breaking.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil hente inn 34 milliarder mer fra de rike</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Sjekk lista:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span><strong>De mest populære Stikk ut-postene</strong></span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.payed:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nå faller boligprisene her</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-primary-skin.hot50.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Valget i USA:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Storeslem for Demokratene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>I dag: Stengjer veg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlightside.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Solbakken om Nyland: – Ørjan er på et mye bedre sted nå</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(26) > .opinion.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Kronikk">Kronikk</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>«Kvifor står du stille på Snapkartet?</span> <!-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>På plass i ny jobb</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(26) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Melder om rekord</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(27) > .hot50.gridtriple.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>No blir kyrkjelyden god</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Aktuell med ny bok</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(28) > .breakingvarsel.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Dette vet jeg vil gi stor gevinst for pasientene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(28) > .no-image.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>La kvinne i bakken</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(28) > .gridspotlightside.hot40.payed:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fekk trykke på knappen: – Ei stor glede</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Mer vindkraft på land</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(30) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Milepæl for lukka anlegg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.is-aske-skin.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stoppa av politiet etter båtkøyring</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-aske-skin.hot50.is-skin:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>UP slo til flere steder </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(31) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dyrest i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .gridtriple.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>USA-valget:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Et tydelig budskap</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .hot30.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kan ha rammet over 20.000 brukere</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .hot30.gridtriple.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Flere dataangrep mot norske kjøleanlegg avverget</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot50 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mona skapte sin eigen jobb – butikken rundar tre år</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breaking.hot30.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Solbakken vraket Thorstvedt – se endringene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin-prefix-red > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Blei konfrontert med videoar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.hot30.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tatt i fartskontroll</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.hot30.gridspotlightside:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leserinnlegg">Leserinnlegg</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil regjeringen ha en sterk norsk skip…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(35) > .gridspotlight.card-size-large.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Eg er oppteken av at folk skal sleppe å reise på Moa</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(35) > .opinion.hot30.gridspotlightside:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(36) > .hot50.gridtriple.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Skammelig at kommunen må bruke ressurser på dette</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(36) > .opinion.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leserinnlegg">Leserinnlegg</span> </div> <h4 class="kicker"> <span>Helsereform:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot30.gridtriple.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Først ut i en rekke av konserter</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .gridspotlight.card-size-large.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Fleire prosjekt må skyvast på</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlightside.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Her sperrer de av:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Konsekvensene vil kunne bli katastrofale</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .breakingvarsel.hot60.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Ti personar fekk jobb på dagen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.breakingvarsel.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Barn påkjørt – mister lappen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(40) > .hot30.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ekspert: – En total slakt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(41) > .gridspotlightside.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Investerer millionbeløp før skisesongen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="bil-i-brann"] > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Det kom kraftig røyk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politiet ber om tips etter nytt sjokkfunn</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .gridtriple.hot40.payed:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny leiar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tre biler i smell</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(44) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>To mista førarkortet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nå er de dypt bekymra</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life40.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fikk drømmejobben i Molde</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(45) > .hot30.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Russland anklager Norge</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(46) > .opinion.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Kronikk">Kronikk</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hva koster det å la være å hjelpe?</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(47) > .opinion.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leder">Leder</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>«Den raude knappen er utløyst»</span> <!----></h3> <…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-primary-skin.hot60.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Så skuffende at det er vanskelig å sette ord på det</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot40.payed > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Spesiell sak: Nekter i retten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>I grøfta: – 30 passasjerar om bord</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(48) > .hot30.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mulig hackerangrep mot norsk varehus</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(48) > .is-aske-skin.hot60.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slakter maten: – Veldig dårlig kvalitet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.breaking-stripe`
  - **HTML:** `<article data-height-extensions-measure="" data-fetch-key="BreakingStripe:0" class="breaking-stripe"><a href="/nyheter/n/lKpj7y/erna-solberg-i-ny-bok-aksjesaken-ble-den-stoerste-krisen-i-vaart-ekteskap"><h3><span></span>« Den største krise…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.user`
  - **HTML:** `<button tabindex="1" aria-controls="usermenu" aria-expanded="false" aria-label="Brukermeny" class="user menu-icon"><span class="user-initials"></span> <span class="notification-count" style="display:none;">0</span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.main`
  - **HTML:** `<button tabindex="1" aria-controls="submenu" aria-expanded="false" aria-label="Åpne- og lukkeknapp for meny" class="menu-icon main"><span></span></button>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

