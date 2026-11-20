# WCAG Violations Report for Ullensaker kommune

**Timestamp:** 2026-11-20T06:36:47.917Z
**URL:** [https://www.ullensaker.kommune.no/](https://www.ullensaker.kommune.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.item:nth-child(1) > a > time`
  - **HTML:** `<time> 19.11.2026 13:44:40 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="restaurerer-myr/"] > time`
  - **HTML:** `<time> 19.11.2026 09:24:46 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.item:nth-child(3) > a > time`
  - **HTML:** `<time> 18.11.2026 07:00:00 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.item:nth-child(4) > a > time`
  - **HTML:** `<time> 12.11.2026 09:09:50 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `.item:nth-child(5) > a > time`
  - **HTML:** `<time> 28.10.2026 11:19:25 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `a[href$="ras-i-travbanevegen/"] > time`
  - **HTML:** `<time> 23.10.2026 16:06:39 </time>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #787878, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

- **Target:** `#accept-all`
  - **HTML:** `<button class="cc-okagree" id="accept-all" role="button">Godta alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.53 (foreground color: #ffffff, background color: #139d46, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 13

#### Affected Elements:

- **Target:** `a[href$="#oppvekst-og-utdanning"]`
  - **HTML:** `<a href="#oppvekst-og-utdanning" title="Oppvekst og utdanning"> <h2>Oppvekst og utdanning</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="#helse-omsorg-og-velferd"]`
  - **HTML:** `<a href="#helse-omsorg-og-velferd" title="Helse, omsorg og velferd"> <h2>Helse, omsorg og velferd</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-2.col-xs-4.menutab:nth-child(4) > a`
  - **HTML:** `<a href="#teknisk-naring-eiendom-og-miljo" title="Teknisk, næring, eiendom og miljø"> <h2>Teknisk, næring, eiendom og miljø</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="#kultur-idrett-og-fritid"]`
  - **HTML:** `<a href="#kultur-idrett-og-fritid" title="Kultur, idrett og fritid"> <h2>Kultur, idrett og fritid</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.last > a`
  - **HTML:** `<a href="#politikk-okonomi-og-organisasjon" title="Politikk, økonomi og organisasjon"> <h2>Politikk, økonomi og organisasjon</h2> </a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#front-menu-sub`
  - **HTML:** `<div id="front-menu-sub" class="col-md-12" data-hash="#snarveier">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.white-blocks > .row:nth-child(1)`
  - **HTML:** `<div class="row">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row:nth-child(2) > .col-md-6:nth-child(1)`
  - **HTML:** `<div class="col-md-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.row:nth-child(2) > .col-md-6:nth-child(2)`
  - **HTML:** `<div class="col-md-6">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.fp-calendar`
  - **HTML:** `<div class="whitebox fp-calendar">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-md-12 > div > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-header-container`
  - **HTML:** `<div class="cc-header-container"> <p class="cc-title">Vi bruker informasjonskapsler</p> <div class="language-dropdown"><select><option value="no">Norsk</option><option value="en">English</option></select></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-text`
  - **HTML:** `<p class="cc-text">Våre nettsider benytter informasjonskapsler (cookies). Dette hjelper oss med å forbedre brukeropplevelsen og tjenestene på nettstedet. Du kan lese mer om hvilke vi bruker og hvordan vi administrerer dem i personvernerklæ…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Select element must have an accessible name

- **Impact:** critical
- **Description:** Ensure select element has an accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/select-name?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `select`
  - **HTML:** `<select><option value="no">Norsk</option><option value="en">English</option></select>`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

