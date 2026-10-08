# WCAG Violations Report for Adresseavisen AS

**Timestamp:** 2026-10-08T10:07:11.345Z
**URL:** [https://www.adressa.no/](https://www.adressa.no/)
**Total Violations:** 10

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


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 22

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
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(5) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/fair_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(6) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/fair_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(7) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(8) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_night.svg" class="on">`
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
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/cloudy.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .off[src=""]`
  - **HTML:** `<img src="" class="off">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.center.no-padding.table-cell:nth-child(12) > .fade-image.icon > .on`
  - **HTML:** `<img src="https://spesial.adressa.no/weather/assets/partlycloudy_day.svg" class="on">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 101

#### Affected Elements:

- **Target:** `.gridfullsize.hot60.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Mann bekreftet omkommet etter ulykke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.Bundles:nth-child(1) > .OnePlusXTeasers.grid > .hot70.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>Rekordhøye strømutgifter: Fotballhall blir kraftverk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-c > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– For oss ble det en fiasko</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.tip > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Ferien spolert av togtrøbbel: - Lei meg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .is-hendelse-skin.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Brann i hall: - Én til legevakt </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Alleen er unik og fredet. Likevel får de felle trærne</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-blank-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.05;"><!----> <span>– Kvinnen dro frem telefonen og begynte å filme meg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(1) > .no-image.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tidligere fotballspiller dømt til fengsel</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .is-section-kultur-skin.is-skin.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>– Det er ufattelig trist at han er borte</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(4) > .is-section-sport-skin.life60.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det er ren idioti. Vi stjeler publikum fra hverandre</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .hot70.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette er veisatsingene i Trøndelag: - Ikke fornøyde</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .life20.gridspotlightside.hot50:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får 200.000 i året livet ut: – En viktig stemme</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .no-image.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Mistet lappen etter å ha kjørt 86 km/t i 60-sone</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(8) > .is-section-kultur-skin.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Lovforslag om aldersgrense for sosiale medier kommer i desember</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Jeg følte meg fanget i eget hjem</…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.gridfullsize-bundle > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette betyr forsvars­budsjettet for Trøndelag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.small-items.griddouble.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>- Det er beinhardt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.small-items.griddouble.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Dette er alt du må vite om statsbudsjettet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(10) > .hot40.is-section-kultur-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Alan Walker er forlovet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Direktør: – Vil være en sakte død</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .is-hendelse-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Evakuert etter røykutvikling i boligblokk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(12) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-kultur-skin.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span> Får ytterligere tre millioner: - Vi er fornøyd</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .is-section-sport-skin.gridspotlightside.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stortalentet til sykehus etter Europa-drama</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-rbk-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label tag RBK">RBK</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Røper overraskende tall</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(14) > .is-hendelse-skin.no-image.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Fikk melding om tagging - to gutter tatt til stasjonen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .gridspotlightside.life40.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Demningen har begynt å sprekke – nå frykter hun oversvømmelse</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .hot70.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>– Litt scrolling kan fort trekke ut</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(16) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Berit får toppjobb</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .is-section-mn24-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section MN24">MN24</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Tung tid i bransjen - ønsker toll på import</span> <!-…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .is-hendelse-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Scooter kolliderte med bil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(18) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Snart blir bilene flere titusener dyrere: - Vi er forberedt</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slik påvirker statsbudsjettet lommeboken din</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .gridspotlightside.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>– Dette går ikke rundt om ingen gidder å stille opp</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Krisemaksimering og svartmaling<…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(20) > .no-image.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Brann i personbil</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(21) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>- Det holder til et par kopper kaffe</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(22) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Dette får Trøndelag penger til</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.grade.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Staten kommer ikke godt fra Fosen-filmen</span> <div grade="4" class="grade"><div class="dice"><div></div><div></div><div></div><…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(22) > .no-image.life20.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>E6-tunnel stengt – må rydde oljesøl</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(22) > .gridspotlightside.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Drivstoffprisene øker: - Rett og slett for dårlig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.is-skin.gridtriple:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>– Vi kommer til å savne ham veldig mye</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Er dette egentlig en seier for Hel…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(25) > .is-section-trdby-skin.is-skin.gridtriple:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Unge med denne diagnosen kan få mindre penger</span>…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(26) > .gridtriple.life40.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kjell Otto og 400 andre kan miste jobbene</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(26) > .gridtriple.life40.hot50:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slik påvirker skattekuttene deg</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.no-image.life20.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Stanset kjøretøy på E6</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(28) > .is-section-sport-skin.is-skin.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Innrømmer utfordring: - Har tilpasset meg </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(28) > .is-section-mn24-skin.life20.is-skin > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(28) > .life20.gridtriple.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slottet: Ikke offisielt program for dronning Mette-Marit fram til neste sommer</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(29) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Dropper helikopter: – Jeg er veldig overrasket. Det er ikke bra</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-hendelse-skin.hot70.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Mann ble blåst på sjøen: – Tilstanden er kritisk</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .is-hendelse-skin.no-image.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.40;"><!----> <span>Person døde etter togpåkjørsel. Påvirket trafikken</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .is-section-kultur-skin.gridspotlightside.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får milliontilskudd: - Det ble den store gevinsten</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(30) > .life20.gridspotlightside.hot50:nth-child(4) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Hundemat tilbakekalles etter funn av metall</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(32) > .hot40.is-section-kultur-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>Dansetrøbbel for Martinus</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(33) > .gridtriple.life40.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Økonom med dårlig nytt for deg med egen bolig</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(33) > .opinion.is-section-meninger-skin.life20 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 0.95;"><!----> <span>De holder ut, dag etter dag, helt …`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(33) > .gridtriple.life40.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Ukrainsk rapport advarer om faren for angrep på mål i Midt-Norge</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(34) > .opinion.is-section-meninger-skin.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section Adressa_debatt">Adressa debatt</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Denne datoen forblir en hodepine</…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlightside.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Solgt langt under prisantydning</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(36) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Datasentre vil ha strøm tilsvarende hele Trøndelag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(36) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Håndhilste på elg: – For en snåling</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(37) > .life60.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>«Phubber» du kjæresten? Derfor kan det skade forholdet</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .gridtriple.life40.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Vi mener helt klart det er Trondheim sin tur</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .gridtriple.life40.hot50:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Ungdom tar på seg voldsoppdrag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(38) > .gridtriple.life40.hot50:nth-child(3) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Nå skal han satse alt på Trondheim</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(39) > .life60.gridtriple.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Hvor kommer strømmen fra?</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(40) > .gridspotlight.life60.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>– Det er et helt nabolag som lider under konstant støy</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.grade.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Som å se en god venn dø</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><div></div><div></…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-trdby-skin.gridspotlightside.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Får 60 millioner – frykter likevel høyere husleie</s…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(41) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Rush etter sjokk­resultatene: - Nå kommer det masse foreldre</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .gridspotlightside.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>– Mange har ventet lenge på dette</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(42) > .hot70.gridspotlight.card-size-large > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Tok med barna for å se stormen rase</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot40.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Plutselig ville kundene ha syltetøyglass</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .is-section-kultur-skin.hot60.is-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ser filmen for sjette gang: – Jeg tror jeg har grått hver gang jeg har sett den</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .hot60.gridtriple.life40:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kommentarfeltet raste etter at taggen forsvant</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(43) > .opinion.is-section-meninger-skin.hot60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-lightblue-skin > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>Satte sitt preg på hele fylket</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Strømkrisen: Mat foran datasentre</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(45) > .hot60.gridspotlightside.life40 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Trekker seg: - Ene og alene min egen beslutning</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(45) > .gridspotlightside.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Flere unge mistenkt etter kniv-hendelse</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(46) > .gridspotlightside.life40.hot50:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Enebolig i Øran solgt for 4,3 millioner kroner</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.is-section-sport-skin.hot70.gridspotlight > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.10;"><!----> <span>– Jeg er redd for at jeg får oppgaven neste år også</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `a[href$="slutter-i-nrk"] > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Slutter i NRK</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.grid:nth-child(47) > .is-section-sport-skin.is-skin.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.15;"><!----> <span>Ba om hjelp etter publikumssvikten </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(48) > .gridtriple.life40.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Dette er de klare stormrådene </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(48) > .grade.is-section-kultur-skin.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.30;"><!----> <span>De har holdt på lenge, men vil aldri dø</span> <div grade="5" class="grade"><div class="dice"><div></div><div></div><div></div><d…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.variant-a > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <div class="labels labels-top"><span class="label section TRDBY">TRDBY</span> </div> <!----> <!----> <h3 style="--font-size-override: 1.45;"><!----> <span>Reagerer på studentene: <mark>-</mark> Blir kvalm</s…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.AdWithTeaser.flipped.grid:nth-child(49) > .grade.is-section-kultur-skin.life60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(50) > .gridspotlight.card-size-large.hot60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Kviss: Hva kan du om Røros og andre tema? </span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.gridspotlightside.hot50:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Ble utfordret av NRK - sprengte skalaen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.OnePlusXTeasers.grid:nth-child(50) > .grade.is-section-kultur-skin.life60 > a > .t100`
  - **HTML:** `<main class="text t100">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .life60.gridspotlightside.hot50 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.00;"><!----> <span>Cookiesene barna vil ha igjen og igjen</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.flipped.OnePlusXTeasers.grid:nth-child(52) > .hot70.gridspotlight.life60 > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <h4 class="kicker"> <span>Tapte over én million:</span></h4> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Pengene ble ført ut av bankkontoen – og han så dem aldri igjen</span> <!----…`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot60.gridspotlightside > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.23;"><!----> <span>Så mye koster det å kjøre til hytta i høst­ferien</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.life60.hot60.gridtriple:nth-child(1) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.20;"><!----> <span>Blir beslag­lagt hver dag</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.ThreeTeasers.grid:nth-child(53) > .life60.hot60.gridtriple:nth-child(2) > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.35;"><!----> <span>Så lite fri får du i 2027</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.life60.gridtriple > a > .t100`
  - **HTML:** `<main class="text t100"><!----> <!----> <!----> <!----> <h3 style="--font-size-override: 1.26;"><!----> <span>Du tror du slapper av. Det gjør du ikke</span> <!----></h3> <!----></main>`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.

- **Target:** `.hot70.grade.is-section-kultur-skin > a > .t100`
  - **HTML:** `<main class="text t100">`
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


### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/link-in-text-block?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/page-has-heading-one?application=playwright
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

