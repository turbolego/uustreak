# WCAG Violations Report for Sunnmørsposten AS

**Timestamp:** 2026-11-22T06:09:52.197Z
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
- **Count:** 99

#### Affected Elements:

- **Target:** `.hot50.gridfullsize.breakingvarsel > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gjør knallsuksess på børs</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Dette er berre trist</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin-prefix-red > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Alvorlig skadd i ulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.small-items.griddouble.no-image > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bot på 54.750 kroner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Forbanna over inkassovarsel og gebyr</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil spare 440.000 i året på å flytte barnehage sju kilometer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Forventer opprydding</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Beinhard jobb for å nå verdenstoppen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot60.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hvem bør bli «Årets sunnmøring»? Stem her!</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.breakingvarsel.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>20 dyre minutt – måtte punge ut 60.000 kroner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-dark-skin.hot70 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Søk i døds­annonsene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breaking.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Varslar kulde i lang tid</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(3) > .no-image.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kvinna får ikkje ta barnet med seg ut av landet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Skapte kø</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Megler innrømmer feil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .no-image.breakingvarsel.is-aske-skin:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bil med fire personer køyrde i grøfta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(4) > .no-image.breakingvarsel.is-aske-skin:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Snurra rundt, var på taket og landa på hjula</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .no-image.hot60.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ras inne i tunnel – fleire bilar køyrde inn i steinar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.hot70.breakingvarsel > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fant sexscener på barnets skole-iPad</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot60.life40.gridspotlightside:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sesongopning</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(7) > .hot30.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Storkontroll i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har levert 100 000 produkter til over 16 land</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(9) > .is-aske-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Politiet om elsparkesyklar:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hadde toppfart på 60-80 km/t</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tente meir enn nokon gong</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Konkurs: – Kom brått og uventet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .no-image.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ulykke på Ellingsøya</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(10) > .life40.gridspotlightside.hot40:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Er dette Norges styggaste bygg?</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life40.gridspotlightside.hot40:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Norges mest sexy dialekt!</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(12) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Spiller på kongekonserten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.hot30.life40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Leder">Leder</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Verdensmestre på bortebane</span> <!----></h3> <!---…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .breakingvarsel.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil bruke over en halv milliard </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Selskap konkurs etter mystisk melding</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(13) > .hot30.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ble bortvist og endte i arresten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(14) > .breakingvarsel.hot60.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her gjekk det gale på glatta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(14) > .breakingvarsel.life40.gridtriple:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Utsetter vedtak om barneavdelinga</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(14) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kostet staten nesten 300 millioner kroner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(16) > .hot50.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Håpar på byggestart i 2028</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fikk møte kongen og helseministeren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vurderer å kutte akuttfunksjoner i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot50.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fleire innstilte fly </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .gridspotlight.card-size-large.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nødnummer-svikt: Vil gi ansvaret til flere selskaper</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .hot60.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Går ut fra at de blir blant kandidatene </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Går mot strømmen – og rett i pluss</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(19) > .breakingvarsel.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Vant pris:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Han gjør det lille ekstra</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(19) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tre kvinner på topp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(20) > .life40.gridtriple.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nytt teater</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>5.000 bør sperre kortet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(22) > .life40.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har fått inntil seks nye år med arbeid</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Startar hotell­bygging i januar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .breakingvarsel.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slik blir vêret i helga</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sikta for grove lovbrot – saka henlagt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(23) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjå oversikta: Dette er listetoppane i Sula</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil ha fortgang i bygginga</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Åpner i helga</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Enighet i oppgjøret – ingen flystreik</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(26) > .is-dark-skin.is-skin.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Ikke la barn spille</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Over halvparten av jobbene kan forsvinne</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(27) > .hot60.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mange kan få dette til jul</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(27) > .no-image.hot60.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Rykket ut til skole – tok førerkort</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(27) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Må åpne pengesekken</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot30.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fleire utfor på glatta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ålesund: – Blir storslagent</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .no-image.breakingvarsel.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bil har sklidd inn i hus</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-aske-skin.is-skin.gridspotlightside:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Kunne lett ført til alvorleg ulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(30) > .gridtriple.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjå oversikta: Dette er listetoppane i Stranda</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(31) > .gridtriple.hot40.life20:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjå oversikta: Dette er listetoppane i Haram</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(31) > .breakingvarsel.hot60.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Skal ha forsynt seg av FAU-pengar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(31) > .gridtriple.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Krever at norske bu­tikker støtter </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjå oversikta: Dette er listetoppane i Ålesund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.gridspotlightside.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nybygg: – Folk kjem til å få hakeslepp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(32) > .hot50.no-image.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>UP slo til – unge sjåførar stoppa</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.gridspotlightside.life20:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny kjede flyttar inn i tomme lokale</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vil øke avgift for datasentre</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(34) > .gridspotlight.card-size-large.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>IEA: Verden vil aldri mer bli den samme etter Iran-krigen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.no-image.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ålesund: Tatt i 165 km/t</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot50.is-aske-skin.is-skin:nth-child(4) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her smalt det</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .hot60.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Moa: Måtte tilkalle politiet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Ho sa ja med ein gong</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .hot30.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Privatfly-rekord</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.opinion.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Kommentar">Kommentar</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Full strid mellom verftene</span> <!----></h…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(38) > .hot30.gridspotlightside.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Steinsprang: – Truleg på grunn av vêret</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(38) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Blir ny programleder</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(39) > .hot60.life40.gridtriple > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gjekk frå pluss til minus</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life40.gridspotlightside > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Til salgs: Slik ser det ut på innsiden </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot50.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Karrieren starta i Ålesund:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Han var jo den tidas lokale Silvio Berlusconi</span> <!----></h3> <!-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(40) > .hot60.is-aske-skin.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>No kjem snøen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-prefix-red-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Selger som «hakka møkk»: Nå er hyllene er tomme </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.hot30.is-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Russisk missil skal ha falt ned i Polen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(42) > .hot50.gridtriple.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny kontrakt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(43) > .breakingvarsel.hot60.is-aske-skin > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Slik kan ein verkeleg ikkje leggje ut på vegen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breaking.gridspotlight.card-size-large > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Ei slik veke kjem ikkje meir enn éin gong i året!</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot40.life20:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fann dette i matavfallet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlightside.hot40.life20:nth-child(3) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Høg temperatur og eld</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fryktet høye nabohus: – Derfor kjøpte jeg tomta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.hot40.life20 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Melder seg ut i protest </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlight.card-size-large.hot60 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Meteorologene: Slik blir vinteren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(46) > .life40.gridspotlightside.hot40 > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Formues­skatte­sak får to dagar i retten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.card-size-medium.griddouble.life40:nth-child(1) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Haakon (20) betalte 7.000 kroner for spillet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.card-size-medium.griddouble.life40:nth-child(2) > a > .text.t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det er heilt meiningslaust det som er sett opp no</span> <!----></h3> <!----></main>`
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
  - **HTML:** `<article data-height-extensions-measure="" data-fetch-key="BreakingStripe:0" class="breaking-stripe"><a href="/nyheter/n/GPGbG6/varslar-kulde-i-lang-tid"><h3><span></span>Varslar kulde i lang tid</h3></a></article>`
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

