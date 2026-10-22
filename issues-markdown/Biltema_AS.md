# WCAG Violations Report for Biltema AS

**Timestamp:** 2026-10-22T03:37:00.617Z
**URL:** [https://www.biltema.no/](https://www.biltema.no/)
**Total Violations:** 11

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.OEYB7GsXVFgbeSLN0Yrb1Q\=\=`
  - **HTML:** `<label class="OEYB7GsXVFgbeSLN0Yrb1Q==" for="licensePlateSearch">Skriv in ditt reg.nr.</label>`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 4.41 (foreground color: #0071b9, background color: #ededed, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.block__editorial > .block--inner > .maxwidth--66.center.block__content > .block__title`
  - **HTML:** `<h2 class="block__title"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 6

#### Affected Elements:

- **Target:** `a[href$="multix18v/"] > .lazy__container > .lazy > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a > .lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(1) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(2) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.teaser__item:nth-child(3) > div > .lazy--with-padding.lazy__container > .lazy[data-alt=""] > .block__img--teaser`
  - **HTML:** `<img class="block__img--teaser">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 20

#### Affected Elements:

- **Target:** `#headerMyBiltemaButton`
  - **HTML:** `<button id="headerMyBiltemaButton" class="button" type="button" onclick="javascript:window.toggleMyBiltemaOverview(true);" aria-label="Åpne Miyy Biltema-menyen" aria-haspopup="dialog" aria-expanded="false">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(11) > a[href$="kundeservice/"]`
  - **HTML:** `<a href="/om-biltema/kundeservice/" aria-label="Kontakt Biltemas kundeservice - informasjon og vanlige spørsmål"> Kundesenter </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gå til: Reflekser"]`
  - **HTML:** `<a href="/fritid/fritidsklar/reflekser/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Reflekser"> Se utvalget </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gå til: Bil - MC"]`
  - **HTML:** `<a href="/bil---mc/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Bil - MC"> Se utvalget </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.content__grid--reverse > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black[aria-label="Gå til: Digitale kundeaviser"]`
  - **HTML:** `<a href="/om-biltema/kundeservice/tjenester-og-service/kundeaviser/?id=_71nyqM3" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Digitale kundeaviser"> Les mer i vår brosjyre </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.content__grid > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black[aria-label="Gå til: Digitale kundeaviser"]`
  - **HTML:** `<a href="/om-biltema/kundeservice/tjenester-og-service/kundeaviser/?id=dotrkUyh" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Digitale kundeaviser"> Les mer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gå til: Takrennesystem"]`
  - **HTML:** `<a href="/bygg/tak/takrennesystem/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Takrennesystem"> Se utvalget </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gå til: Presenninger"]`
  - **HTML:** `<a href="/fritid/hage/presenninger/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Presenninger"> Se utvalget </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.block__grid.block:nth-child(16) > .block--100.content > .content__grid--reverse > .content__block.content__block--grey.content__grid--2 > .content__block--info.align--center > .button__m.button__transparent--black.button`
  - **HTML:** `<a href="/nytt-og-nyttig/inspirasjon/beredskapslager--sa-enkelt-lager-du-et-beredskapslager/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Beredskapslager – så enkelt lager du et beredskapslager">…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.button__m.button__transparent--black[href$="kommende-produktnyheter/"]`
  - **HTML:** `<a href="/kommende-produktnyheter/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Kommende produktnyheter"> Se mer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Gå til: Hage"]`
  - **HTML:** `<a href="/fritid/hage/" class="button button__rounded button__transparent--black button__m" aria-label="Gå til: Hage"> Se utvalget </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Les mer om vår konsept"]`
  - **HTML:** `<a href="/om-biltema/var-forretningside-og-konsept/" aria-label="Les mer om vår konsept"> Vårt konsept </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.inner > .footer__links > li:nth-child(6) > a`
  - **HTML:** `<a href="/om-biltema/biltema-foundation/" aria-label="Les mer om Biltema Foundations prosjekter"> Biltema Foundation </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="bruksanvisninger/"]`
  - **HTML:** `<a href="/bruksanvisninger/" aria-label="Søk etter dokumenter"> Dokumentsøk </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(1) > a[href$="jobbe-pa-biltema/"]`
  - **HTML:** `<a href="/om-biltema/jobbe-pa-biltema/" aria-label="Les mer om jobbmuligheter hos Biltema"> Jobb </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[aria-label="Se Biltemas siste kundeaviser"]`
  - **HTML:** `<a href="~/link/f30c36dcd5384a758650e0a39906f25a.aspx" aria-label="Se Biltemas siste kundeaviser"> Brosjyrer </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.col.s__show--on-tablet--large--up:nth-child(2) > .footer__links > li:nth-child(7) > a`
  - **HTML:** `<a href="/om-biltema/kundeservice/produktinformasjon/tilbakekalling/" aria-label="Se oversikt over tilbakekalte produkter"> Tilbakekallinger </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="press/"]`
  - **HTML:** `<a href="/Recycle-Bin/press/" aria-label="Se pressemeldinger fra Biltema"> Presse </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.col.s__show--on-tablet--large--up:nth-child(2) > .footer__links > li:nth-child(9) > a`
  - **HTML:** `<a href="/om-biltema/kundeservice/brukervilkar-og-betingelser/personvernerklaring/" aria-label="Les mer om personvernerklæringen"> Personvernerklæring </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `li:nth-child(12) > a[href$="nyheter/"]`
  - **HTML:** `<a href="/nytt-og-nyttig/nyheter/" aria-label="Følg de siste nyhetene fra Biltema"> Nyheter </a>`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `main[role="main"]`
  - **HTML:** `<main role="main">`
  - **Failure summary:** Fix any of the following: The main landmark is contained in another landmark.


### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#react__maincontent`
  - **HTML:** `<main id="react__maincontent" tabindex="-1">`
  - **Failure summary:** Fix any of the following: Document has more than one main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#react__maincontent`
  - **HTML:** `<main id="react__maincontent" tabindex="-1">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(1) > a[href$="multix18v/"]`
  - **HTML:** `<a href="/aktuelt/multix18v/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(2) > a`
  - **HTML:** `<a href="/nytt-og-nyttig/inspirasjon/gjor-jobben-selv---spar-tusenlapper/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `.content__grid--3.content__grid--3-2.align--center:nth-child(3) > a`
  - **HTML:** `<a href="/om-biltema/jobbe-pa-biltema/ledige-stillinger/">`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 2

#### Affected Elements:

- **Target:** `.editorial__grid > li:nth-child(1)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".

- **Target:** `.editorial__grid > li:nth-child(2)`
  - **HTML:** `<li>`
  - **Failure summary:** Fix any of the following: List item does not have a <ul> or <ol> parent element. Ensure the <li> is a direct child of a <ul> or <ol>, or that the parent has role="list".


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- **Target:** `.header__info__item.link--black:nth-child(1) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Kjøp &amp; Hent</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(1) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Kjøp på nett og hent i varehuset.</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(2) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Biltema Appen</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(2) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- 19000 produkter rett i lomma!</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(3) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Mitt Biltema</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(3) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Få kvitteringene dine digitalt</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(4) > .font__myriad--semibold`
  - **HTML:** `<span class="font__myriad--semibold">Biltema Bedrift</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.header__info__item.link--black:nth-child(4) > span:nth-child(3)`
  - **HTML:** `<span>&nbsp;- Logg inn</span>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

