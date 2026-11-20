# WCAG Violations Report for Lier kommune

**Timestamp:** 2026-11-20T06:19:49.516Z
**URL:** [https://www.lier.kommune.no/?spama](https://www.lier.kommune.no/?spama)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#accept-all`
  - **HTML:** `<button class="cc-okagree" id="accept-all" role="button">Godta alle</button>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.53 (foreground color: #ffffff, background color: #139d46, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.col-xs-12.col-md-3:nth-child(4) > h3:nth-child(5)`
  - **HTML:** `<h3>&nbsp;</h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Embedded code from Innhold i iframe
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#portalframe1, a[data-itemid="40277"] > .custom-event-info.col-xs-10 > h4`
  - **HTML:** `<h4>Førjulsmarked Lier Husflidslag</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 11

#### Affected Elements:

- **Target:** `.col-sm-4 > .ssp__header`
  - **HTML:** `<h2 class="ssp__header"> Hva skjer i Lier? </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-4 > div:nth-child(2)`
  - **HTML:** `<div class=""> <a class="ssp__arrow-anchor mb-60 mb-sm-0" href="/aktivitetskalender/"> <!--Se hele kalenderen--> Se kalender og opprett arrangement </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#portalframe1, #container`
  - **HTML:** `<div id="container">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-8 > .ssp__header`
  - **HTML:** `<h2 class="ssp__header"> Aktuelt </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-sm-8 > div:nth-child(2)`
  - **HTML:** `<div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.pull-right`
  - **HTML:** `<div class="pull-right hidden-xs"> <a class="ssp__arrow-anchor" href="/aktuelt/"> Se alle saker </a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-header-container`
  - **HTML:** `<div class="cc-header-container"> <p class="cc-title">Vi bruker informasjonskapsler</p> <div class="language-dropdown"><select><option value="no">Norsk</option><option value="en">English</option></select></div> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.cc-text`
  - **HTML:** `<p class="cc-text">Våre nettsider benytter informasjonskapsler (cookies). Dette hjelper oss med å forbedre brukeropplevelsen og tjenestene på nettstedet. Du kan lese mer om hvilke vi bruker og hvordan vi administrerer dem i personvernerklæ…`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#stcpDiv`
  - **HTML:** `<div id="stcpDiv" style="position: absolute; top: -1999px; left: -1988px;">ShareThis Copy and Paste</div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, #vfact_testaudio`
  - **HTML:** `<audio id="vfact_testaudio" controls=""> not supported</audio>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#vFact_audioFrame, h1`
  - **HTML:** `<h1>Her er framen</h1>`
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

