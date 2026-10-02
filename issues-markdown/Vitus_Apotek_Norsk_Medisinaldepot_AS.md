# WCAG Violations Report for Vitus Apotek Norsk Medisinaldepot AS

**Timestamp:** 2026-10-02T17:28:04.944Z
**URL:** [https://www.vitusapotek.no/](https://www.vitusapotek.no/)
**Total Violations:** 5

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4>Ved kjøp av 3 stk eller flere varer. Plukk &amp; miks</h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.cms-recomendations:nth-child(6) > section > div > .carousel[aria-roledescription="carousel"][role="region"]`
  - **HTML:** `<div class="carousel" role="region" aria-roledescription="carousel">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/list?application=playwright
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 4

#### Affected Elements:

- **Target:** `.header__skip-link`
  - **HTML:** `<a href="#main__content" class="header__skip-link">Hopp til hovedinnhold</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.announcement-bar`
  - **HTML:** `<div class="announcement-bar" style="--announcement-bar-bg-color:#edf3e2;--announcement-bar-txt-color:#005B2D">`
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
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/scrollable-region-focusable?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag211, wcag213, TTv5, TT4.a, EN-301-549, EN-9.2.1.1, EN-9.2.1.3, RGAAv4, RGAA-7.3.2
- **Count:** 5

#### Affected Elements:

- **Target:** `.cms-recomendations:nth-child(6) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(8) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(9) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(10) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

- **Target:** `.cms-recomendations:nth-child(11) > section > div > .carousel[aria-roledescription="carousel"][role="region"] > .carousel__wrapper > .carousel__container > .carousel__slides`
  - **HTML:** `<ul class="carousel__slides">`
  - **Failure summary:** Fix any of the following: Element should have focusable content Element should be focusable

