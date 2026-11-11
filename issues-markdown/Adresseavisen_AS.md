# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-11-11T04:58:12.529Z
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
- **Count:** 2

#### Affected Elements:

- **Target:** `.Abobutton`
  - **HTML:** `<button class="Abobutton removePlussForApp"> BLI ABONNENT </button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.64 (foreground color: #ffffff, background color: #28aae2, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#dakapo_postopbar, a`
  - **HTML:** `<a class="topbar-btn button pulse" href="https://minside.adressa.no/under" target="_parent">Få tilgang</a>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.13 (foreground color: #ffffff, background color: #1da750, font size: 12.6pt (16.8px), font weight: bold). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#dakapo_postopbar`
  - **HTML:** `<iframe rel="nofollow" id="dakapo_postopbar" name="0" width="100%" src="https://www.adressa.no/dakapo/banner/?pubname=adressa&amp;shortcode=ADR&amp;pos=topbar" class="campaign" style="height: 104px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.variant-a.is-section-mn24-skin.gridspotlightside > a > .t100 > h3`
  - **HTML:** `<h3 style="--font-size-override: 1.55;"><!----> <span>Gir seg: <mark>–</mark> Stor sorg</span> <!----></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 100

#### Affected Elements:

- **Target:** `.variant-a.is-section-kultur-skin.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Avlyser konserter etter klager: <mark>–</mark> Skikkelig lei meg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Store mengder kumøkk på veien – kan ikke spyle</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-b > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Kamp om strandområde:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Vi har brukt betydelige ressurser</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlightside.life20.hot50:nth-child(4) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Snø i Trondheim – ber folk være forberedt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-section-mn24-skin.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.55;"><!----> <span>Gir seg: <mark>–</mark> Stor sorg</span> <!----></h3> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>Kjente Martin (29) siden han var liten: – Et evig sjokk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.hot70.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Hylles av Riise: - Det største talentet jeg har sett</span> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.is-hendelse-skin.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ber innbyggere i Latvia søke tilflukt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.hot70.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Rødt lys for Nordstrand: <mark>–</mark> Jeg registrerer vedtaket</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.opinion.hot70 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-mn24-skin.hot60.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>To uker etter storsalget var de konkurs</span> <!---->…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Inviterer kongen hit: <mark>–</mark> Regner med det var derfor han valgte den helga</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.small-items > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><span class="prefix">Har satt datoen: </span> <span>Signes i Nidarosdomen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .gridspotlightside.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Blir stappfullt: – Kan sitte så lenge du vil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Usexy sosialister</span> <!----></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.hot60.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Se RBK på adressa.no: – Har en barriere å bryte</span> <!---…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(10) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hvorfor bygger vi ikke skikkelige …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(10) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.50;"><!----> <span>– Husker ikke å ha skrevet det</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(12) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Victoria (16): – Flere jenter tør ikke å snakke høyt om det</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(12) > .gridspotlightside.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Amerikansk soldat pågrepet i Storbritannia – mistenker samarbeid med Russland</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.variant-a.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Forbereder kriseplan i Trondheim: <mark>–</mark> Stort valg må tas</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .gridspotlightside.life20.hot50:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Merker nedgang etter lokkmangel: – Vært sånn siden slutten av sommeren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .is-section-mn24-skin.gridspotlightside.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nvidia-verdien har falt med 4000 milliarder kroner</sp…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(16) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Når går strømprisen i Midt-Norge rett til værs</span> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(16) > .hot60.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Legger ned populær rute fra Værnes</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(16) > .is-rbk-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Vil skrive kontrakt med to profiler</span> <!----></h3> <!--…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-section-mn24-skin.gridspotlightside.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjekk minstelønna i ti norske bransjer</span> <!----><…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Vi fikk en mail om oppsigelsen, og etter det har vi ikke snakket med ham</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-hendelse-skin.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Skadeverk på restaurant: <mark>–</mark> Knust glass og møbler strødd utover </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(18) > .no-image.gridspotlightside.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>To personer påkjørt - tatt med til lege</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .variant-a.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Vi testkjørte nye E6: <mark>-</mark> Halverer reisetiden</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .is-section-kultur-skin.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Får ikke fortsette i jobben: - Jeg ønsket å fortsette</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.hot50.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Varsler mulig avgang og slutt for utestedet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .no-image.gridspotlightside.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vogntog har stanset i Okstadbakken</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trondheims­bedrift vant pris: – Betyr utrolig mye</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(22) > .no-image.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Traktorulykke i Orkland - person til sykehus</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(22) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Kvinnen krasjet tre ganger: <mark>–</mark> Hadde kjærlighetssorg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(24) > .gridtriple.hot50.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>På få år har Trondheim lagt seg opp milliarder på bok: - Det er ikke en Rema-butikk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(24) > .is-section-kultur-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Her blir det fest - disse artistene er klare</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(24) > .no-image.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mann tatt for ruskjøring i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(25) > .life60.is-section-kultur-skin.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Denne norske sideren får 5’er</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(25) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Da barnas venner flyttet, skjønte de at noe måtte gjøres</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-dark-skin.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Arne Bakken er død: – Viktig for hele landet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-hendelse-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Vei var stengt i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-section-meninger-skin.opinion.life20 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(27) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Meglertopp har kjøpt bolig til 17,5 millioner i Trondh…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(28) > .is-hendelse-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Her sto bussene i kø i morgenrushet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(29) > .life20.gridtriple.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ukraina-møtene i Abu Dhabi er i gang</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(29) > .is-section-mn24-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Sjeføkonom om prisveksten: – Gode nyheter for folks lo…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(29) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stor økning i antall barn som får oppfølging for autisme</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(31) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>– Det er med tungt hjerte vi selger gården ut av slekta</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .is-section-mn24-skin.life20.gridtriple:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Prisene steg med 3,6 prosent fra oktober i fjor til ok…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .is-section-mn24-skin.life20.gridtriple:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Matprisene falt 0,4 prosent fra september til oktober<…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Trøndersk butikkjede rammet - kunder berørt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(33) > .is-rbk-skin.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Tatt ut på U21-landslaget likevel</span> <!----></h3> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .is-section-meninger-skin.opinion.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .is-section-kultur-skin.grade.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gråten går raskt over til en protest</span> <div grade="4" class="grade"><div class="dice"><div></div><div></div><div></div><div>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(35) > .is-hendelse-skin.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Til St. Olav etter å ha kjørt i bergvegg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.h-low > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Nå er restauranten fire prikker unna skjenkestopp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(37) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Meteorologen: – Følg med og vær obs</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(37) > .is-section-meninger-skin.opinion.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Du må ansette for å beholde ansatt…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(37) > .is-section-mn24-skin.gridspotlightside.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dagen etter visning slo et ungt par til: – Mange spenn…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(38) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Rekordmange møtte opp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det er trolig mange, både leger og pasienter, som ikke er klare over dette</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(39) > .is-section-sport-skin.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.85;"><!----> <span>Her håndhilser han med Putin. Nå kan han komme til Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(39) > .hot60.gridspotlightside.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Skal bygge datasenter i Trøndelag – slik reagerer de på strømstansen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(40) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Trondheim:</span></h4> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Sperrer av område: – Kan føre til skader</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(41) > .is-rbk-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Forlot RBK. Nå har han solgt huset i Trondheim</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(41) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>– Vi har ikke tillit til henne som leder</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(41) > .hot60.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>– Er det under 100 her en dag, er det dårlig besøk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(42) > .is-hendelse-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Etterlyser vitner etter hendelse på gravlund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot30 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nav og Helsenorge hadde problemer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridtriple.hot50.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Her klynker hundene i den glovarme bilen: – Situasjonen var akutt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(43) > .is-hendelse-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Til St. Olav etter å ha fått denne over seg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mener faren ikke kan ha visst om endringen: <mark>–</mark> Jeg blir bitter når jeg tenker på det</span> <!----></h3> <!----></mai…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Jan Egeland går av som leder for Flyktninghjelpen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(44) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Katten forsvant sporløst fra Trondheim - dukket opp 260 kilometer unna</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.85;"><!----> <span>Her blir det 55 meter mer kai</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Her har han spolert drømme­runden for RBK</span> <!----></h3…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Eks-RBK-spiller med på historisk triumf</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(46) > .is-section-kultur-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Han skal spille Jahn Teigen: - En kjempeovergang</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(47) > .is-section-sport-skin.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.55;"><!----> <span>Ny smell for Utleira</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(47) > .gridtriple.hot50.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kjemper for rødgrønt flertall</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(47) > .grade.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nordmannen imponerer som narkoman jazzlegende</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(48) > .gridtriple.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Den nye løsningen kan redusere behovet for saltbil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 2.10;"><!----> <span>– Dette går til helvete</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-hendelse-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.50;"><!----> <span>Knyttes til milliontyveri </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ser utfordring for RBK: – Kan ikke belage oss på dem</span> …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-section-sport-skin.gridtriple:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trønderske løpere imponerte i Sverige</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(51) > .life60.is-section-kultur-skin.grade > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.50;"><!----> <span>Gåsehuden melder seg</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><div></div><div></div…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-section-sport-skin.gridtriple:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kun tre norske kvinner har løpt raskere</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .is-section-kultur-skin.grade.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hun inngikk en pakt med djevelen – og betalte straffen</span> <div grade="3" class="grade"><div class="dice"><div></div><div></di…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .life60.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>I starten lurte folk på hvem hun var: – Jeg syntes det var skummelt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>– Jeg anbefaler ingen å strekke det så langt som jeg gjør</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-section-kultur-skin.grade:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><span class="prefix">Iverspod: </span> <span>– Målet var aldri færre enn 14 000</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.is-section-kultur-skin.grade:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><span class="prefix">Quiz: </span> <span>Hvor godt kjent er du i Trondheim?</span> <!----></h3> <!----></main>`
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

