# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-10-15T05:15:43.322Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 9

## Violation Details

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.disabled`
  - **HTML:** `<button class="button left svelte-3viewi disabled"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…

- **Target:** `.right`
  - **HTML:** `<button class="button right svelte-3viewi"></button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.Abobutton`
  - **HTML:** `<button class="Abobutton removePlussForApp"> BLI ABONNENT </button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.64 (foreground color: #ffffff, background color: #28aae2, font size: 9.6pt (12.8px), font weight: normal). Expected contrast ratio of 4.5:1


### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#dakapo_postopbar`
  - **HTML:** `<iframe rel="nofollow" id="dakapo_postopbar" name="0" width="100%" src="https://www.adressa.no/dakapo/banner/?pubname=adressa&amp;shortcode=ADR&amp;pos=topbar" class="campaign" style="height: 188px;"></iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .opinion.is-section-meninger-skin.life20 > a > .t100 > h3`
  - **HTML:** `<h3 style="--font-size-override: 1.00;"><!----> <span>Fjern norgespris</span> <!----></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 26

#### Affected Elements:

- **Target:** `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(2) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/cloudy.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(3) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/cloudy.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(4) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/rain.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/rain.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/rain.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/cloudy.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/fair_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(9) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(10) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(11) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/fair_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(13) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/fair_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(14) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Vil bygge 140 boliger på boretts­lagets parkerings­plasser</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid > .is-hendelse-skin.life20.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><span class="prefix">I natt: </span> <span>Mann med kniv stjal sykkel i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .life20.hot60.gridspotlightside:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Har gått til sak mot restaurant i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fjern norgespris</span> <!----></h…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Da det brant i to korntørkere samtidig, blusset teoriene opp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.griddouble.small-items.opinion > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.griddouble.small-items.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Kan få dramatiske konsekvenser</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det er helt uaktuelt å stå i en jobb der jeg nesten ikke får sett barna mine</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="frekke-banker"] > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>«Joar» klaget på gressklipping sist søndag. Så ble han knivstukket</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.life60.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Trebarnsmor Silje:<mark> </mark>– Målet var 100 prosent uføretrygd </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .grade.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Jeg tviler på at Hamsun ville likt denne filmversjonen</span> <div grade="3" class="grade"><div class="dice"><div></div><div></di…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .hot60.gridspotlightside.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mangel på utesteder: - Fikk oss til å se en gigantisk mulighet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Åpner restaurant i lokalet i Søndre gate</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.80;"><!----> <span>– Jeg er sint</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Eksperten advarer: – Kan gjøre deg syk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .life20.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gigantkontrakt delt ut - her blir det snart bygging</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .is-section-sport-skin.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trondhjemmer sikret Glimt-seier over Dortmund</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-mn24-skin.hot70.life20:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>Må møte i retten i boligkrangel – krever millionbeløp<…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-mn24-skin.hot70.life20:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.50;"><span class="prefix">Siste: </span> <span> Kutter 130 ansatte</span>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle.opinion.is-section-meninger-skin > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.h-low > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><span class="prefix">Adresseavisen inviterer: </span> <span>Hvor mange timer dugnad kan man forvente at folk skal stille opp på?</span> <!---->…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.is-hendelse-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Turbuss fikk trøbbel i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Scoret like før slutt – sikret uavgjort</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .no-image.variant-a.is-hendelse-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>To sjåfører mistet førerkortet:<mark> </mark>- Ikke utenkelig at politiet vil komme tilbake</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Freyr: - Jeg burde ha stoppet Ole</span> <!----></h3> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ny morsmelk­studie: – Helt klart motiverende</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Denne trenden beriker livet: – I ferd med å ta av</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .no-image.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ett kjørefelt var stengt på E6</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .is-hendelse-skin.life20.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bil havnet på kant - politiet oppretter sak mot sjåføren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Jeg skylder byen og partiet å stille opp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .hot40.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Selger seg ut av trøndersk selskap</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle.is-hendelse-skin.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Kjedekollisjon på E6 - politiet med oppfordring</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.griddouble.small-items > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Lastebil traff skilt på jernbanebru - tog skal teste brua</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.griddouble.small-items.is-hendelse-skin:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Utforkjøring: – Sjåfør skal ha fått blackout</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-mn24-skin.hot40.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>RBK-spiller sikret seg denne hytta - dette ble prisen<…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="takk-for-turen"] > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Hyllet på Lerkendal: <mark>–</mark> En nådeløs sykdom</span>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .no-image.variant-a.is-hendelse-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hest skal ha løpt inn i bil:<mark> </mark>– Rytteren oppsøker legevakt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(21) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Hvor ble det av mennene?</span> <!…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-kultur-skin.life60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Huset fyller ti år - her er bildene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Mattilsynet reagerte:<mark> </mark>– Ikke planer for renhold</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(22) > .life20.gridspotlightside.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Her ligger søppelet strødd på veien</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.breakingvarsel.no-image.is-hendelse-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fikk melding om mann i «baris»: – Kastet planker etter biler</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Jeg skulle bli advokat som morfar.…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .no-image.is-hendelse-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Buss kjørte inn i bil i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .is-hendelse-skin.life20.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><span class="prefix">I natt: </span> <span>Gjester på utested i Trondheim fikk uvanlig «strippeshow»</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(26) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Har koblet inn Kripos: – Det er en veldig alvorlig hendelse</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(26) > .is-section-sport-skin.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>– Det var kjipt. Man blir mye alene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(26) > .life20.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Jobben vår er givende. Men vi får fort dårlig samvittighet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>«Helt Texas» i Texas:</span></h4> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ville påstander om innleggelse på sinnssykehus</span> <!----></h3> <!----></m…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(28) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>Kjørte rundt med Porsche i Trondheims gater: – Har ikke penger og bankkonto</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(28) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Må ta eksamen med penn og papir: – Frustrerende</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.no-image.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Politiet varsler om synlige flammer i Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-section-kultur-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Legger ned restaurant:<mark> </mark>– Det er skikkelig vemodig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(30) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Saksøker trøndersk konkurrent - krever nesten 40 millioner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(30) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Jeg har veldig troa på dette. Jeg skal heie på dere hver eneste dag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(32) > .hot60.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>– Ser med vantro på hvordan byen styres for tida</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Legen mener dette er rett alder å bli forelder: – Få som får barn så tidlig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(33) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Unnskyld, Marian</span> <!----></h…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(33) > .gridspotlightside.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ba lederne gå etter kjærlighetsforhold. Midlertidig leder på plass</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(34) > .hot50.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tok vare på øltørst katt – nå etterlyser de eieren</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span> «Breaking Bad»-skuespiller er død, 34 år gammel</sp…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>– Å få en slik telefon ...man mister fotfestet rett og slett</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(36) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-mn24-skin.hot40.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hytteeiere i Østerdalen advarer mot flytting av Fosen-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .hot70.gridtriple.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Flere elbiler ødelagt ved ladestasjon</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .is-section-kultur-skin.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Døde før han fikk arrangert julekonsert nummer 40. Nå tar venner over ansvaret</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.hot40.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Bruker hemmelige opptak i ny Diana-serie</span> <!--…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.card-size-large.hot70 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>Flere tar dette mobilgrepet. Eksperten kommer med en tydelig advarsel</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(40) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Saksøker Trondheim kommune for flere millioner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(41) > .is-section-kultur-skin.hot60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kom inn på eliteskole – det ble startskuddet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Vil innføre ny type førerkort: – Satte en støkk i meg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Nabo skal ha sagt fra om bråk – senere på dagen ble han knivstukket</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Ny sjef på St. Olav: - Vil prege utviklingen på sykehuset</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.life60.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Talentet fikk svaret han fryktet. – Har vært fryktelig uheldig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .hot50.gridtriple.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Norge og Polen signerte erklæring om strategisk partnerskap</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>NVE avdekket alvorlige avvik ved Statkrafts demninger – truer med tvangsmulkt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(44) > .grade.hot50.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>For første gang på 70 minutter klapper publikum</span> <div grade="4" class="grade"><div class="dice"><div></div><div></div><div>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.life40:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Gard Steiro slutter som sjefredaktør i VG</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(45) > .life60.hot70.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ingen sa fra da Hege gikk opp i vekt igjen: - Jeg blir litt irritert </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(45) > .hot50.gridtriple.life40:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Testet nytt konsept i Trondheim: Drømmer om 500 neste år</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(46) > .is-section-kultur-skin.grade.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Folk hyler av latter i salen</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><div></div><d…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot80 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Presten sto i stua da Marcus kom inn. Da husket han på meldinga han sendte</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.grade.life60.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får meg til å kvekke til av latter</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><div></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a.is-section-kultur-skin.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Arve fyller 90: <mark>–</mark> Ikke alle dager er like lyse</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(48) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(48) > .gridspotlightside.hot50.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><span class="prefix">Quiz: </span> <span>Viktigst av det som er uviktig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(48) > .life60.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>«Phubber» du kjæresten? Derfor kan det skade forholdet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(49) > .life60.hot50.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Høstens beste gulrotkake</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.customSkin-podcast > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Håper nye vitner kan dukke opp: - Det er så mye som ikke stemmer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(50) > .life60.hot50.gridtriple:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Klesstilen er en snakkis. Nå åpner han dørene til huset på Bakklandet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(50) > .life60.hot50.gridtriple:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Unngå vanlig bil-problem: - Rydd garasjen og parker der</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.hot50.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kristine (21) spør ChatGPT om helseråd</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(52) > .is-section-kultur-skin.grade.life60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(52) > .life60.hot50.gridtriple:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Cookiesene barna vil ha igjen og igjen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(53) > .life60.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Hvor kommer strømmen fra?</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(53) > .is-section-kultur-skin.grade.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Så mye koster det å kjøre til hytta i høst­ferien</span> <!----></h3> <!----></main>`
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

