# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-10-22T04:09:21.045Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 7

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4></h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Elements must have their visible text as part of their accessible name

- **Impact:** serious
- **Description:** Ensure that elements labelled through their content must have their visible text as part of their accessible name
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=playwright
- **Tags:** cat.semantics, wcag21a, wcag253, EN-301-549, EN-9.2.5.3, RGAAv4, RGAA-6.1.5
- **Count:** 7

#### Affected Elements:

- **Target:** `a[href$="cart"]`
  - **HTML:** `<a class="header-control" aria-label="Handlekurven din inneholder 0 elementer" href="/cart">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner--left.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper`
  - **HTML:** `<a href="https://www.vitusapo..." class="campaign-banner__con..." aria-label="Se utvalget - Nyhete...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner--left.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper`
  - **HTML:** `<a class="campaign-banner__content-wrapper banner__content-wrapper" aria-label="Kjøp her - Nyhet fra FLUX 10,- per solgte produkt doneres Rosa sløyfe." href="/munn-og-tann/munnskyllevann/flux-ultra-protection-03naf-fluorskyll-500-ml-934424…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner--left.campaign-banner.banner:nth-child(3) > .campaign-banner__content-wrapper.banner__content-wrapper`
  - **HTML:** `<a href="https://www.vitusapotek.no/kampanjetilbud/utvalgt-hudpleie-w41-2026?filters=%28%27brands_name%27%3A%27NUXE%27%29" class="campaign-banner__content-wrapper banner__content-wrapper" aria-label="Se utvalget - 30% på utvalgt NUXE 10,- …`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner--centered.campaign-banner.banner:nth-child(1) > .campaign-banner__content-wrapper.banner__content-wrapper`
  - **HTML:** `<a href="https://www.vitusapo..." class="campaign-banner__con..." aria-label="Se utvalget - 2 for ...">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner--centered.campaign-banner.banner:nth-child(2) > .campaign-banner__content-wrapper.banner__content-wrapper`
  - **HTML:** `<a href="https://www.vitusapotek.no/kampanjetilbud/vi-fast-medlemstilbud-pa-ogx-og-ayumi-w1-2026" class="campaign-banner__content-wrapper banner__content-wrapper" aria-label="Se utvalget - 2 for 30% på alt fra OGX og Ayumi Gjelder ved kjøp…`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name

- **Target:** `.campaign-banner__content-wrapper.banner__content-wrapper[href$="intimpleie"]`
  - **HTML:** `<a class="campaign-banner__content-wrapper banner__content-wrapper" aria-label="Se utvalget - 2 for 30% på nesten all intimpleie Gjelder ved kjøp av 2 eller flere. Plukk & miks, Medlemstilbud." href="/intimpleie">`
  - **Failure summary:** Fix any of the following: Text inside the element is not included in the accessible name


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cms-recomendations:nth-child(8) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`
  - **HTML:** `<div class="carousel" role="region" aria-roledescription="carousel">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.nav-desktop__list`
  - **HTML:** `<ul class="nav-desktop__list">`
  - **Failure summary:** Fix all of the following: List element has direct children that are not allowed: [role=none]


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.header__skip-link`
  - **HTML:** `<a href="#main__content" class="header__skip-link">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer-banner > .banner__image-wrapper`
  - **HTML:** `<div class="banner__image-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.footer-banner > .banner__content-wrapper`
  - **HTML:** `<div class="banner__content-wrapper">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### Scrollable region must have keyboard access

- **Impact:** serious
- **Description:** Ensure elements that have scrollable content are accessible by keyboard in Safari
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 3

#### Affected Elements:

- **Target:** `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(11) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(14) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

