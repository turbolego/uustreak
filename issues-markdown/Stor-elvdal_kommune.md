# WCAG Violations Report for Stor-elvdal kommune

**Timestamp:** 2026-11-19T07:07:03.631Z
**URL:** [https://www.stor-elvdal.kommune.no/](https://www.stor-elvdal.kommune.no/)
**Total Violations:** 7

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Source:** Embedded code from detskjer.sekalender.no
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- **Target:** `iframe`
  - **HTML:** `<iframe width="100%" height="600" src="https://detskjer.sekalender.no/widgets/zsJMDzDag0yGKygYhQ6PTg/carousel" frameborder="0" allowfullscreen=""> </iframe>`
  - **Failure summary:** Fix any of the following: Element has no title attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element's defaul…


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.logo`
  - **HTML:** `<img class="logo" src="/design/SATE/Stor-Elvdal/v2025/assets/images/logo-Stor-Elvdal.svg" alt="Stor-Elvdal kommune">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Document should have one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has a main landmark
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #4C6E7E; --bc-primary-color-400: #5D7C8A; --bc-primary-color-300: #7D96A1; --bc-primary-color-200: #A4B5BD; --bc-primary-color-100: #C8D2D7;">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark

- **Target:** `iframe, html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Document does not have a main landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header`
  - **HTML:** `<header class="header">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- **Target:** `a[data-id="234"]`
  - **HTML:** `<a href="https://www.facebook.com/stor.elvdal.kommune" target="_blank" data-id="234" class="external-link external"><span><span class="img"></span><span class="text">Facebook</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…

- **Target:** `a[data-id="235"]`
  - **HTML:** `<a href="https://www.youtube.com/channel/UCEpUySqLNQqdDHC9cDscqsA" target="_blank" data-id="235" class="external-link external"><span><span class="img"></span><span class="text">YouTube</span></span></a>`
  - **Failure summary:** Fix all of the following: Element is in tab order and does not have accessible text Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attr…


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" style="--bc-primary-color-500: #4C6E7E; --bc-primary-color-400: #5D7C8A; --bc-primary-color-300: #7D96A1; --bc-primary-color-200: #A4B5BD; --bc-primary-color-100: #C8D2D7;">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

- **Target:** `iframe, html`
  - **HTML:** `<html lang="no">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 28

#### Affected Elements:

- **Target:** `.ac-banner-field--search-box > .ac-banner-field-header`
  - **HTML:** `<div class="ac-banner-field-header"><h2 class="ac-banner-field-title"><span class="ac-banner-field-title-text">Tjenester, tilbud og opplevelser</span></h2></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.ac-banner-field--search-box > .ac-banner-field-footer`
  - **HTML:** `<div class="ac-banner-field-footer">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-top`
  - **HTML:** `<div class="section frontpage-top">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.frontpage-focus-field`
  - **HTML:** `<div class="section frontpage-focus-field">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartTittel`
  - **HTML:** `<h2 class="webPartTittel"> <span>Aktuelt</span> </h2>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container > ul`
  - **HTML:** `<ul>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.webPartBunnLink`
  - **HTML:** `<div class="webPartBunnLink"> <a id="ctl00_ctl00_ctl00_innhold_MidtSone_ctl03_WebpartId_522_WebpartId_522_rptItems_ctl01_ucDisplayControl_hlLinkAlle" class="MargLink" href="/aktuelt/">Se alle aktuelle saker</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(4) > div > div:nth-child(1) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Quiz i Storstua</span><div class="sc-92d550d1-7 dpwVBp"><strong>Fredag 4. desember, kl. 18:30</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(1) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
  - **HTML:** `<img alt="Bildet er uten bilde..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(2) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Dansefest med Contrazt Duo</span><div class="sc-92d550d1-7 dpwVBp"><strong>Søndag 27. desember, kl. 19:30</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(2) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
  - **HTML:** `<img alt="Bildet er uten bilde..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(3) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Julefest med KILTS med QUIZ attått</span><div class="sc-92d550d1-7 dpwVBp"><strong>Tirsdag 29. desember, kl. 18:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(3) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[alt="Bildet er uten bildeforklaring"][loading="lazy"][width="400"]`
  - **HTML:** `<img alt="Bildet er uten bilde..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(4) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Teater Innlandet - Markens Grøde</span><div class="sc-92d550d1-7 dpwVBp"><strong>Torsdag 18. februar, kl. 19:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(4) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-2.dSiEdz > img[loading="lazy"][width="400"][height="250"]`
  - **HTML:** `<img alt="Promobilde for fores..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, div:nth-child(5) > .sc-92d550d1-0.cvszcc > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Juletoner - Lucianatt</span><div class="sc-92d550d1-7 dpwVBp"><strong>Lørdag 12. desember, kl. 19:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, img[alt="konsertpromo"]`
  - **HTML:** `<img alt="konsertpromo" loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, .sc-ffbea1fe-0 > .sc-92d550d1-0.cvszcc:nth-child(1) > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Frivilligfrisk- sosialtreff og veiledet trening</span><div class="sc-92d550d1-7 dpwVBp"><strong>Torsdag 19. november, kl. 09:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, .sc-ffbea1fe-0 > .sc-92d550d1-0.cvszcc:nth-child(1) > .sc-92d550d1-2.dSiEdz > img[loading="lazy"][width="400"][height="250"]`
  - **HTML:** `<img alt="Illustrasjon for fri..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, .sc-92d550d1-0.cvszcc:nth-child(2) > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Strikkekaffe på Aktivitetshuset</span><div class="sc-92d550d1-7 dpwVBp"><strong>Torsdag 19. november, kl. 12:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, img[alt="Illustrasjon strikkekaffe"]`
  - **HTML:** `<img alt="Illustrasjon strikke..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, .sc-92d550d1-0.cvszcc:nth-child(3) > .sc-92d550d1-1.kIMNTn`
  - **HTML:** `<div class="sc-92d550d1-1 kIMNTn"><span class="sc-92d550d1-6 YIriK">Datahjelp på biblioteket</span><div class="sc-92d550d1-7 dpwVBp"><strong>Torsdag 19. november, kl. 14:00</strong></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `iframe, img[alt="Illustrasjon datahjelp"]`
  - **HTML:** `<img alt="Illustrasjon datahje..." loading="lazy" width="400" height="250" decoding="async" data-nimg="1" srcset="/_next/image?url=htt..." src="/_next/image?url=htt..." style="color: transparent;">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-id="55"]`
  - **HTML:** `<div class="emnekart-client-content-widget" data-id="55">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-id="56"]`
  - **HTML:** `<div class="emnekart-client-content-widget" data-id="56">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-id="21"]`
  - **HTML:** `<div class="emnekart-client-content-widget" data-id="21">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `div[data-id="20"]`
  - **HTML:** `<div class="emnekart-client-content-widget" data-id="20">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.container-floating-notifications`
  - **HTML:** `<div class="container-floating-notifications" style="background: url("/images/1px_Black_Opacity_75.png");">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

