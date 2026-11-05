# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-11-05T08:56:39.946Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 8

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.left`
  - **HTML:** `<button class="button left svelte-3viewi disabled"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.right`
  - **HTML:** `<button class="button right svelte-3viewi"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.Abobutton`
  - **HTML:** `<button class="Abobutton removePlussForApp"> BLI ABONNENT </button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.64 (foreground color: #ffffff, background color: #28aae2, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .variant-a.gridspotlight.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Håver inn bompenger: <mark>–</mark> Forstår at det er kjempe­frustrerende</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .breakingvarsel.is-hendelse-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Trafikkulykke mellom sykkel og personbil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .is-section-mn24-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mener bransjen senker Trøndelag: - Bråstopp</span> <!-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .life20.hot50.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Har avhørt vitner etter dødsulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Gjør stadig nye funn i barnehagen: – Foreldrene er bekymret</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .hot50.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><span class="prefix">Siste: </span> <span>Ut mot Listhaug: – Jeg hadde null tro</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot60.gridtriple.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>– Vi blir gjeldsslaver hele gjengen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Butikkåpning trolig utsatt etter konkurs: – Vet ikke når åpningen kan skje</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .life60.hot70.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trønderen krysser USA-grensen ukentlig: – Jeg er så drittlei av å høre om ham</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .variant-a.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>De får lønn under utdanning og garantert jobb etterpå:<mark> </mark>– Et bra opplegg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hun har gjort klar soveposen på kontoret før forhandlingene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mistet jobben: - Det blir en hard jul for de fleste av oss</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Kvinne i 20-årene kjørte 92 km/t i 60-sone</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Her ødelegges gode bomiljø</span> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.85;"><!----> <span>Måtte stenge drikke­vannet etter konflikt: «Fra og med i dag vil alle pumper bli skrudd av»</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-section-kultur-skin.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Stengte dodører skal ha skapt fullt kaos:<mark> </mark>– Blodsøl og sprøytespisser</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .no-image.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Brann i trafostasjon ved E39</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .is-section-sport-skin.opinion.hot70 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .is-hendelse-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Flere kritisk skadd i ulykke på E18 ved Larvik</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life20.gridtriple.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Rød-Larsen og Juuls Oslo-arkiv offentlig­gjøres i dag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>– Noen kommer med svære matpakker</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .is-section-sport-skin.hot60.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Varsler million­under­skudd: – Kan bli høyere</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .is-rbk-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.65;"><!----> <span>Jaktes i flere land</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.tip.breakingvarsel.is-hendelse-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kornbil mistet lasten. Motorsykkel veltet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vant pris: – Det er et kvalitetsstempel. Og de som vet, de vet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vektere og renholdere bør slippe å…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.hot40.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Åpnet julemarked:<mark> </mark>– Folk tar seg fri fra jobb</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.hot60.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– For mange blir dette den eneste gaven de får</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Rektoren ble kalt jihadist av MAGA-topp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.life20.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Rykket ut til Torvet: – Kan skape utrygghet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.hot50:nth-child(4) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Skilt ligger i veien på E6</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(21) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>En bekymring ingen ungdom burde må…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(22) > .no-image.is-hendelse-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fant tarmbakterier i drikkevannet - har sendt ut kokevarsel</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(22) > .is-section-sport-skin.hot60.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Tre trøndere på landslaget</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Dette er ikke greit. Ansatte bør slippe å oppleve dette på jobb</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .no-image.is-hendelse-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Trondheim:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politi tok med seg mann som skal ha kastet sykler på vindu</span> <!----></h3> <!----></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Har søkt over 30 jobber: – Føler at jeg faller mellom to stoler</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .hot50.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Frykter bru over E6 skal kollapse – skal rives</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(24) > .life20.hot50.gridspotlightside:nth-child(4) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Her står bilen bom fast ved kjøpesenteret</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>– Jeg frykter at USA kommer til å svikte Ukraina</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-section-mn24-skin.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Banktopp: <mark>–</mark> Sannsynlig med flere konkurse…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(25) > .tip.is-hendelse-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.85;"><!----> <span>Søker personer og ber om tips etter voldsepisode i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Kutter opptil 40 årsverk i Trondheim</span> <!----></h…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-hendelse-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Funn av granat i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-section-sport-skin.opinion.hot70 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(28) > .is-section-kultur-skin.grade.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Imponerende</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><div></div><div></div></div></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>UP: – Noen av de farligste bilførerne vi har på veiene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Da de kom hjem var ytterdøra skrudd fast: – Virker målrettet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(29) > .is-section-mn24-skin.hot40.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Hun får den nye toppjobben i Trøndelag</span> <!----><…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(31) > .life20.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.70;"><!----> <span>Lang kø før åpningen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(32) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Jubler etter hetsing: – Det viktigste valget i USAs historie</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.customSkin-podcast > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>– Det var kaos</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(32) > .is-section-mn24-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Trondheim skiller seg ut: Så lang tid tok det å selge …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(32) > .no-image.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mann pågrepet etter telefontrussel</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(33) > .is-section-mn24-skin.hot40.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Blir parkeringssjef i Trondheim</span> <!----></h3> <!…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .is-hendelse-skin.gridtriple.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Flere evakuert etter lekkasje: – Det lukter i området</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>– Det er nesten umulig å få tak i lapskaus. Det er stort sett burger, pizza og alt det tjafset</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .hot60.gridtriple.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Lahlum er mer urolig for et annet land enn USA i årene som kommer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(36) > .hot60.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Vi trenger flere gründere med hårete ambisjoner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(37) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det kommer til å bli en verdenssensasjon</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(37) > .is-section-meninger-skin.opinion.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(37) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Butikken åpner dørene i nye lokaler</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(38) > .life60.hot70.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Akkurat nå er dette et «dødt» område i byen. Det kan vi gjøre noe med</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .variant-a.gridspotlight.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>De <em>hater</em> virkelig hverandre, de to politiske fløyene i Texas. Adressa dro for å finne ut hvorfor</span> <!----></h3> <!-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlightside.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Berørt Støre delte ut ny minnepris i Levanger</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(39) > .hot50.gridspotlightside.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fikk beskjed om å fjerne flagget: – Mangelfull begrunnelse </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(40) > .is-section-mn24-skin.is-skin.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Næringslivs­profil kjøpte hus av RBK-spilleren</span> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.grade.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(41) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Andrea (19) hadde dårlige odds. Så kom 3T-gründerens penger</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(41) > .hot40.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Seks leger starter nytt legesenter</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Som å svelge piggtråd og helle brennevin i åpne sår</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span> – Om de hadde lyktes, ville det vært helt uaktuelt for oss å påta oss nye oppdrag for selskapet</span> <!----></h3> <!----></mai…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Tilbudet sparer meg for mye tid og penger</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(43) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>De ansatte fikk konkurs­beskjed på Teams</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .gridspotlight.hot70.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Foreslår store endringer for Helse-Norge:</span></h4> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>– Jeg tror det er noe for enhver å bli sint for</span> <!…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .hot50.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Jeg skjønner at dere er bekymra, og jeg vil ikke si «Ikke bekymre dere»</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Kontroversiell artist kommer til Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.life60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Han har forsket på hermetikk – dette velger han selv til lageret</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(45) > .hot40.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Jeg var på gråten da jeg nærmet meg bilen etterpå</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(45) > .grade.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her levnes den trønderske pioneren liten ære</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></d…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(46) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Åpnet ny butikk: – Brukt flere hundre tusen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(47) > .hot50.gridspotlightside.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Direktør slutter i Helse­plattformen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.life60.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>Står opp 06.30 for å trene sønnen før skolen: – Aldri opplevd at de ikke vil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(47) > .no-image.is-hendelse-skin.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.55;"><!----> <span>Mann i 20-årene skutt i jaktulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(47) > .is-section-kultur-skin.is-skin.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.65;"><!----> <span>Går av som direktør</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(48) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette er Ruta-saken</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(49) > .life60.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Da Per-Einar krasjet med en lyktestolpe, skjønte han at han måtte ha hjelp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>🎧</span></h4> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>- Vi ble rørt til tårer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(49) > .hot50.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Krystallklar Iversen: - Ikke dra i januar</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="vaniljeboller"] > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bollene som smelter på tungen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(51) > .is-section-kultur-skin.grade.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Noen hadde sitt livs kveld</span> <div grade="4" class="grade"><div class="dice"><div></div><div></div><div></div><div></div></di…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(51) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hva kan du om land og språk?</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .hot50.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Reporteren fikk streng beskjed fra Ragde</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nå lyser Trondheim opp – derfor betyr det mer enn pynt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.customSkin-podkast > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ane Høsflot Klæbo løp maraton på ny rekord i Berlin </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="farfarhuset"] > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>– De ville helst ikke forlate huset. De kjempet til siste slutt for å få bo her</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot30 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Karna Sødahl: – Det er litt skuffende</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot70.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Kun en halvtime fra Trondheim, dukket boligdrømmen opp</span> <!----></h3> <!----></main>`
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


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a:nth-child(5)`
  - **HTML:** `<a href="https://adresseavisen.e-pages.pub/">eAdressa</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `section:nth-child(4) > div > div > .Tips > dl > dd > a[href="tel:46407200"]`
  - **HTML:** `<a href="tel:46407200">464 07200</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `div > div > p > a:nth-child(1)`
  - **HTML:** `<a href="https://presse.no/pfu/etiske-regler/vaer-varsom-plakaten/">Vær Varsom-plakatens</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `p > a:nth-child(2)`
  - **HTML:** `<a href="https://www.redaktor.no/ressurser/etiske-og-juridiske-rammeverk/redaktorplakaten">Redaktøransvar</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `a[href$="medietilsynet.no/"]`
  - **HTML:** `<a href="https://www.medietilsynet.no/">Medietilsynet</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …

- **Target:** `p > a:nth-child(4)`
  - **HTML:** `<a href="https://www.adressa.no/nyheter/i/lVOBge/adresseavisens-rettigheter">Adresseavisens rettigheter.</a>`
  - **Failure summary:** Fix any of the following: The link has insufficient color contrast of 2.49:1 with the surrounding text. (Minimum contrast is 3:1, link text: #005379, surrounding text: #010101) The link has no styling (such as underline) to distinguish it …


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html class="front section_frontp..." lang="nb" data-darkmode="off" data-n-head="%7B%22class%22:%7B%2..." style="--header-calc-height...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


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

