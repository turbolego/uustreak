# WCAG Violations Report for Eiendomsmelger Krogsveen AS

**Timestamp:** 2026-10-08T10:25:10.129Z
**URL:** [https://www.krogsveen.no/](https://www.krogsveen.no/)
**Total Violations:** 2

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#button-header-verdivurdering > .text-body-sm[data-text="true"]`
  - **HTML:** `<span data-text="true" class="text-body-sm">Verdivurdering</span>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.91 (foreground color: #ba5b3e, background color: #edf0e7, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 38

#### Affected Elements:

- **Target:** `.css-zkxncz`
  - **HTML:** `<div class="css-zkxncz">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="kjope"]`
  - **HTML:** `<a class="text-body-sm css-16qbr8x" href="/kjope">Kjøpe</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-16qbr8x.text-body-sm[href$="selge"]`
  - **HTML:** `<a class="text-body-sm css-16qbr8x" href="/selge">Selge</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="utleie"]`
  - **HTML:** `<a class="text-body-sm css-16qbr8x" href="/utleie">Utleie</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-16qbr8x.text-body-sm[href$="eiendomsmegler"]`
  - **HTML:** `<a class="text-body-sm css-16qbr8x" href="/eiendomsmegler">Finn eiendomsmegler</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-17s4se2`
  - **HTML:** `<div class="css-17s4se2" data-dropdown="true">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#button-header-verdivurdering`
  - **HTML:** `<a class="css-d8mt2w" data-ui-component="button-link-route" id="button-header-verdivurdering" href="/verdivurdering"><span data-text="true" class="text-body-sm">Verdivurdering</span></a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-12um54u`
  - **HTML:** `<div data-component="front-page-cover" class="css-12um54u">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1fmkdzz > .css-1gjxcwl[data-component="page-grid"]:nth-child(2)`
  - **HTML:** `<div class="css-1gjxcwl" data-component="page-grid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1qs1wvn > .text-kicker`
  - **HTML:** `<span style="margin-bottom:8px" class="text-kicker">De beste folkene</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.false.text-h2`
  - **HTML:** `<h2 class="false text-h2">Din egen rådgiver</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.rich-text`
  - **HTML:** `<div class="rich-text false text-body css-1cmxauv" style="margin-top:20px">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-body[data-has-icon="true"][data-ui-component="link-route"] > span[data-link-text="true"]`
  - **HTML:** `<span data-link-text="true">Din egen rådgiver på boligmarkedet</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-zg9qiq > .css-1d9lbrd`
  - **HTML:** `<div class="css-1d9lbrd"><span class="text-kicker" style="margin-bottom:4px;display:block">Verktøy</span><h2 class="text-h2">Sjekk din boligverdi!</h2></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1nl5mao > .text-body`
  - **HTML:** `<p class="text-body">Bare tast inn adressen din og få svaret med en gang! Enkelt, raskt og helt gratis.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `input`
  - **HTML:** `<input placeholder="Finn din adresse" aria-invalid="false" class="text-body css-12dl20l" value="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1gjxcwl[data-component="page-grid"]:nth-child(5)`
  - **HTML:** `<div class="css-1gjxcwl" data-component="page-grid">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1k0pgnc > .text-kicker`
  - **HTML:** `<span class="text-kicker" style="margin-bottom:4px;display:block;opacity:1">Tilleggstjenester</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1k0pgnc > h3`
  - **HTML:** `<h3 class="text-h2 text--banner">Vi fikser flyttingen for deg</h3>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1k0pgnc > .text-body-lg`
  - **HTML:** `<p class="text-body-lg" style="margin:20px 0">La oss fikse vask, pakking, lagring og transport. Vi har også håndverkere hvis du har behov for det. </p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[data-ui-component="link-href"][href$="flytte"][data-has-icon="true"] > span[data-link-text="true"]`
  - **HTML:** `<span data-link-text="true">Finn ut mer</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="magasin"][data-has-icon="true"][data-ui-component="link-route"] > span[data-link-text="true"]`
  - **HTML:** `<span data-link-text="true">Mer fra magasinet</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-18ikxop`
  - **HTML:** `<div class="css-18ikxop">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(1) > .css-2ljws1 > .text-body-lg`
  - **HTML:** `<h2 class="text-body-lg">Kjøpe</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(1) > .css-1d9lbrd`
  - **HTML:** `<div class="css-1d9lbrd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(2) > .css-2ljws1 > .text-body-lg`
  - **HTML:** `<h2 class="text-body-lg">Selge</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(2) > .css-1d9lbrd`
  - **HTML:** `<div class="css-1d9lbrd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(3) > .css-2ljws1 > .text-body-lg`
  - **HTML:** `<h2 class="text-body-lg">Utleie</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(3) > .css-1d9lbrd`
  - **HTML:** `<div class="css-1d9lbrd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(4) > .css-2ljws1 > .text-body-lg`
  - **HTML:** `<h2 class="text-body-lg">Annet</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-19nr1ow:nth-child(4) > .css-1d9lbrd`
  - **HTML:** `<div class="css-1d9lbrd">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-1y1ma0n > div:nth-child(1)`
  - **HTML:** `<div>© <!-- -->2026<!-- --> Krogsveen</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="personopplysninger"]`
  - **HTML:** `<a class="css-11945xh" href="/personvern/personopplysninger">Personvern</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-11945xh[href$="cookies"]`
  - **HTML:** `<a class="css-11945xh" href="/personvern/cookies">Informasjonskaplser</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.css-157jlni:nth-child(3)`
  - **HTML:** `<div class="css-157jlni"><a class="css-11945xh" href="https://www.facebook.com/Krogsveen/">Facebook</a><a class="css-11945xh" href="/nyhetsbrev">Nyhetsbrev</a></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text--center.text-h2.text--banner`
  - **HTML:** `<h2 class="text-h2 text--banner text--center" style="margin-top: 110px;">Velkommen til Krogsveen</h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text--center.text-body`
  - **HTML:** `<p class="text-body text--center" style="margin-top: 12px; margin-bottom: 20px;">Vi bruker informasjonskapsler for å gi deg en god brukeropplevelse, relevante annonser og statistikk for å bli bedre.</p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text--center[data-ui-component="link-href"][href$="cookies"]`
  - **HTML:** `<a data-ui-component="link-href" data-underline="true" data-has-icon="false" class="text-body-sm text--center css-r5da3j" href="/personvern/cookies" style="margin: 0px auto; text-align: center; display: block;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

