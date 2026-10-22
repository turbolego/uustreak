# WCAG Violations Report for BKK AS

**Timestamp:** 2026-10-22T03:38:07.225Z
**URL:** [https://www.bkk.no/](https://www.bkk.no/)
**Total Violations:** 5

## Violation Details

### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 12

#### Affected Elements:

- **Target:** `a[aria-label="Se kart over strømstans"]`
  - **HTML:** `<a aria-label="Se kart over strømstans" href="/alt-om-strombrudd" class="css-1d7fnve">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(1)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/bkk-reduserer-nettleien-fra-1-januar-2026" aria-label="Les mer om BKK reduserer nettleien fra 1. januar 2026" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="ekstremvaeret-amy"]`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/ekstremvaeret-amy" aria-label="Les mer om Ekstremværet Amy: Kompensasjon ved langvarig strømbrudd " text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(3)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/gront-skifte-med-omtanke-for-naturen" aria-label="Les mer om Grønt skifte med omtanke for naturen" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(4)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/reduksjon-i-elavgiften-fra-1-oktober-" aria-label="Les mer om Reduksjon i elavgiften (forbruksavgiften) fra 1. oktober " text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="na-kommer-studentene"]`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/na-kommer-studentene" aria-label="Les mer om Er utleieboligen trygg og elsikker?" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(6)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/bkk-reduserer-nettleien-1-september" aria-label="Les mer om BKK reduserer nettleien " text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(7)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/jon-fredrik-baksaas-er-ny-styreleder-i-bkk-as" aria-label="Les mer om Jon Fredrik Baksaas blir ny styreleder i BKK " text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(8)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/arets-kraftkvinne-anne-marte-mehammer" aria-label="Les mer om Kåret til Årets Kraftkvinne" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(9)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/bkk-etablerer-en-energikoordinator-enhet" aria-label="Les mer om BKK tar grep for å få industri – og næringskunder raskere på nett " text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(10)`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/maleravlesning-for-deg-som-ikke-har-automatisk-maler" aria-label="Les mer om Måleravlesning for deg som ikke har automatisk måler" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `a[href$="maalerbytte"]`
  - **HTML:** `<a class="rc_link-card rc_link-card--nyhet css-tf5rs8" href="/nyheter/maalerbytte" aria-label="Les mer om Alle målere av eldre type må byttes" text="">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `#switch-cookie_cat_functional-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Funksjonelle" name="cookie_cat_functional" id="switch-cookie_cat_functional-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#switch-cookie_cat_statistic-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Statistiske" name="cookie_cat_statistic" id="switch-cookie_cat_statistic-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie_ca…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…

- **Target:** `#switch-cookie_cat_marketing-slider`
  - **HTML:** `<input type="checkbox" class="coi-consent-banner__switch-checkbox" aria-labelledby="switch-Markedsføring" name="cookie_cat_marketing" id="switch-cookie_cat_marketing-slider" onclick="CookieInformation.changeCategoryConsentDecision('cookie_…`
  - **Failure summary:** Fix any of the following: Element does not have an implicit (wrapped) <label> Element does not have an explicit <label> aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do n…


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiConsentBanner`
  - **HTML:** `<div id="coiConsentBanner" role="banner" aria-describedby="coiBannerHeadline" aria-labelledby="cookie_summary" class="coi-consent-banner BannerBottom BannerLeft" lang="nb" dir="ltr" aria-hidden="false" style="display: block;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Elements marked as presentational should be consistently ignored

- **Impact:** minor
- **Description:** Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=playwright
- **Tags:** cat.aria, best-practice, ACT
- **Count:** 6

#### Affected Elements:

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(1) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(4) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `a[href$="na-kommer-studentene"] > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(6) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(8) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute

- **Target:** `.rc_link-card.rc_link-card--nyhet.css-tf5rs8:nth-child(10) > .rc_link-card__content > .rc_link-card__image.rc_link-card__image--photo > img[aria-hidden="false"][height="800"][width="800"]`
  - **HTML:** `<img aria-hidden="false" alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1" src="https://cdn.sanity.i..." style="color: transparent; ...">`
  - **Failure summary:** Fix all of the following: Element does not have global ARIA attribute


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#skip-to-content`
  - **HTML:** `<div id="skip-to-content" class="css-1372ars"><div><a href="#main" class="css-1d4ws8o">Hopp til innhold</a></div></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

