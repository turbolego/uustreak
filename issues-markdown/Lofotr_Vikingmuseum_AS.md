# WCAG Violations Report for Lofotr Vikingmuseum AS

**Timestamp:** 2026-10-22T03:52:09.875Z
**URL:** [https://www.museumnord.no/vare-museer/lofotr-vikingmuseum/](https://www.museumnord.no/vare-museer/lofotr-vikingmuseum/)
**Total Violations:** 7

## Violation Details

### ARIA attributes must conform to valid names

- **Impact:** critical
- **Description:** Ensure attributes that begin with aria- are valid ARIA attributes
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.col-12.col-md-4.my-3:nth-child(1) > .card.has-light-blue-background-color.h-100 > .card-footer.aligncenter.wp-block-buttons > .has-blue-primary-background-color.wp-block-button__link`
  - **HTML:** `<a href="https://www.museumnord.no/historier/tradenes-hemmelighet-skjoldehamndrakten/" title="Trådenes hemmelighet: Skjoldehamndrakten" class="wp-block-button__link has-blue-primary-background-color" aria-link="Les mer om Trådenes hemmelig…`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-link

- **Target:** `a[title="Fiske og sjøfangst i vikingtid"]`
  - **HTML:** `<a href="https://www.museumnord.no/historier/fiske-og-sjofangst/" title="Fiske og sjøfangst i vikingtid" class="wp-block-button__link has-blue-primary-background-color" aria-link="Les mer om Fiske og sjøfangst i vikingtid">Les mer</a>`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-link

- **Target:** `a[title="Oppdagelsen av Borg"]`
  - **HTML:** `<a href="https://www.museumnord.no/historier/oppdagelsen-av-borg/" title="Oppdagelsen av Borg" class="wp-block-button__link has-blue-primary-background-color" aria-link="Les mer om Oppdagelsen av Borg">Les mer</a>`
  - **Failure summary:** Fix any of the following: Invalid ARIA attribute name: aria-link


### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.9.1
- **Count:** 1

#### Affected Elements:

- **Target:** `#header-menu-toggle`
  - **HTML:** `<button class="menu-toggle" id="header-menu-toggle" aria-controls="primary-menu" aria-expanded="false"> <span class="hamburger"></span> </button>`
  - **Failure summary:** Fix any of the following: Element does not have inner text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elem…


### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Embedded code from Complianz
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.cmplz-blocked-content-notice`
  - **HTML:** `<button class="cmplz-blocked-content-notice cmplz-accept-category cmplz-accept-marketing" data-service="youtube" data-category="marketing" aria-label="Click to accept marketing cookies and enable this content">Click to accept marketing coo…`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #ffffff, background color: #808080, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1


### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_6107c6976e88fa409e44a824f4315235 > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`
  - **HTML:** `<h2 class="has-dark-color"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_f0ca8964f0333460927f39af7148f4d7 > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`
  - **HTML:** `<h2 class="has-dark-color"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_9acea6078be8ef4a544def0eec16911e > .wp-block-group__inner-container.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__header > h2`
  - **HTML:** `<h2 class="has-dark-color"></h2>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 6

#### Affected Elements:

- **Target:** `#primary > h3`
  - **HTML:** `<h3 class="wp-block-heading has-text-align-center">Tre inn i vikingtiden midt i hjertet av Lofoten</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.wp-block-pooka-venue-details__address > h5`
  - **HTML:** `<h5 class="has-dark-color">Adresse</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_6107c6976e88fa409e44a824f4315235 > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
  - **HTML:** `<h5 class="has-dark-color">Ny Utstilling På Lofotr</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_f0ca8964f0333460927f39af7148f4d7 > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
  - **HTML:** `<h5 class="has-dark-color">Mat og drikke</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_9acea6078be8ef4a544def0eec16911e > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"] > .wp-block-pooka-experiences-exhibitions-carousel__carousel > .wp-block-pooka-experiences-exhibitions-carousel__carousel-slide[data-index="0"] > .wp-block-pooka-experiences-exhibitions-carousel__slide-content > .card-exhibition.has-light-grey-background-color > .card-exhibition__content > h5`
  - **HTML:** `<h5 class="has-dark-color">Praktisk informasjon</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `.my-5:nth-child(1) > h5`
  - **HTML:** `<h5>Historier</h5>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#block-museumnord-featured-exhibits-carouselblock_6107c6976e88fa409e44a824f4315235 > .wp-block-pooka-experiences-exhibitions-carousel__full-width-wrapper.alignwide > .wp-block-pooka-experiences-exhibitions-carousel__carousel-container[role="region"][aria-label="Exhibits carousel"]`
  - **HTML:** `<div class="wp-block-pooka-experiences-exhibitions-carousel__carousel-container" tabindex="0" role="region" aria-label="Exhibits carousel">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.skip-link`
  - **HTML:** `<a class="skip-link screen-reader-text" href="#primary">Skip to content</a>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

