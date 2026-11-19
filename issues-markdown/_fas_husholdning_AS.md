# WCAG Violations Report for Øfas husholdning AS

**Timestamp:** 2026-11-19T06:54:11.423Z
**URL:** [https://www.ofas.no/](https://www.ofas.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 6

#### Affected Elements:

- **Target:** `#CybotCookiebotDialogNavDeclaration`
  - **HTML:** `<a id="CybotCookiebotDialogNavDeclaration" class="CybotCookiebotDialogNavItemLink CybotCookiebotDialogActive" href="#" data-target="CybotCookiebotDialogBody" tabindex="0" role="tab" aria-selected="true" aria-controls="CybotCookiebotDialogB…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.58 (foreground color: #009c4e, background color: #ffffff, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`
  - **HTML:** `<button id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" tabindex="0" lang="nb">Tillat alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.58 (foreground color: #ffffff, background color: #009c4e, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `p:nth-child(1) > strong`
  - **HTML:** `<strong>ØFAS håndterer ditt avfall med kvalitets- og miljøbevisste løsninger.</strong>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.47 (foreground color: #ffffff, background color: #8bac9b, font size: 28.4pt (37.8683px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `em > strong`
  - **HTML:** `<strong>– vår erfaring, din trygghet</strong>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 2.47 (foreground color: #ffffff, background color: #8bac9b, font size: 28.4pt (37.8683px), font weight: normal). Expected contrast ratio of 3:1

- **Target:** `.col-sm-6.col-md-12:nth-child(1) > .light.button[role="button"]`
  - **HTML:** `<a target="_blank" href="https://login.avonov..." class="button light" role="button">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.28 (foreground color: #ffffff, background color: #008d46, font size: 12.0pt (15.9446px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.col-sm-6.col-md-12:nth-child(2) > .light.button[role="button"]`
  - **HTML:** `<a target="_blank" href="https://login.micros..." class="button light" role="button">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.28 (foreground color: #ffffff, background color: #008d46, font size: 12.0pt (15.9446px), font weight: normal). Expected contrast ratio of 4.5:1


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 9

#### Affected Elements:

- **Target:** `img[alt="Metaller"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Metallemballasje-e1584527372360.jpg" alt="Metaller">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Tekstiler"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2026/03/tekstil-e1778226315548.png" alt="Tekstiler">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Papp & Papir"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Papp-e1584527494468.jpg" alt="Papp &amp; Papir">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Farlig avfall"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Farlig-avfall-1-e1584544987651.jpg" alt="Farlig avfall">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="EE-avfall"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Elektronikk-1-300x300-1.jpg" alt="EE-avfall">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Restavfall"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Restavfall-1.jpg" alt="Restavfall">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Plast"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Plastemballasje-e1584527486386.jpg" alt="Plast">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Matavfall"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Matavfall-e1584527522301.jpg" alt="Matavfall">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Deponiavfall"]`
  - **HTML:** `<img src="https://www.ofas.no/wp-content/uploads/2020/05/Ikke-brennbar-rest-e1584625823828.jpg" alt="Deponiavfall">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- **Target:** `meta[name="viewport"]`
  - **HTML:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`
  - **Failure summary:** Fix any of the following: maximum-scale=1.0 on <meta> tag disables zooming on mobile devices


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.sr-only`
  - **HTML:** `<a class="sr-only" href="#main" tabindex="1">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.front-bot`
  - **HTML:** `<div class="container-fluid gray front-bot">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `.sr-only`
  - **HTML:** `<a class="sr-only" href="#main" tabindex="1">Hopp til innhold</a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

- **Target:** `.navbar-brand`
  - **HTML:** `<a class="navbar-brand" href="/" tabindex="2"><h1 class="logo"><img src="https://www.ofas.no/wp-content/themes/ofas/assets/images/svg/ofas_logo_web.svg" alt="Øst-Finnmark Avfallsselskap"></h1></a>`
  - **Failure summary:** Fix any of the following: Element has a tabindex greater than 0

