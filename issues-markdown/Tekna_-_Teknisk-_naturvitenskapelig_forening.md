# WCAG Violations Report for Tekna - Teknisk- naturvitenskapelig forening

**Timestamp:** 2026-10-10T08:26:14.327Z
**URL:** [https://www.tekna.no/](https://www.tekna.no/)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#declineButton`
  - **HTML:** `<button tabindex="0" onclick="CookieInformation.declineAllCategories()" aria-label="Bare nødvendige cookies" id="declineButton" class="coi-banner__accept" role="alert" aria-atomic="true" style="display: flex;"> Bare nødvendige cookies </bu…`
  - **Failure summary:** Fix any of the following: ARIA role alert is not allowed for given element


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.promotion-block__text.cms-block__body > h3`
  - **HTML:** `<h3>Noen ganger er det lettere å skrive enn å si det høyt&nbsp;</h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 3

#### Affected Elements:

- **Target:** `.item__image-0`
  - **HTML:** `<img src="/contentassets/a3912d6361b040eab9b952d4cd38ad9d/dsc01580.jpg?width=990&amp;height=885&amp;mode=crop" class="item__image-0" style="z-index: 0; opacity: 1;">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.t-article-card:nth-child(1) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
  - **HTML:** `<img src="/link/1ebe1f5cfbdb46bfacb0911d4518e964.aspx?width=640&amp;mode=crop&amp;heightratio=0.75&amp;quality=80" class="t-article-card__img" style="">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …

- **Target:** `.t-article-card:nth-child(2) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
  - **HTML:** `<img src="/link/448a9bd40ee64affa02d549004f2659e.aspx?width=640&amp;mode=crop&amp;heightratio=0.75&amp;quality=80" class="t-article-card__img" style="">`
  - **Failure summary:** Fix any of the following: Element does not have an alt attribute aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element …


### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: Document has more than one banner landmark


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Embedded code from Cookie Information
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `#coiOverlay`
  - **HTML:** `<div id="coiOverlay" role="banner" aria-hidden="false" style="display: flex;">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- **Target:** `div:nth-child(8)`
  - **HTML:** `<div> <a class="hidden-skip-link" href="#content">Hopp til innhold</a> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.heroblock`
  - **HTML:** `<div class="block heroblock col-lg-12 col-md-12 col-sm-12 col-xs-12">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.promoted-link-list`
  - **HTML:** `<div class="block promoted-link-list promoted-link-list--underline">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.contentareablock.col-lg-12.col-sm-12:nth-child(3)`
  - **HTML:** `<div class="block contentareablock col-lg-12 col-md-12 col-sm-12 col-xs-12">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.block:nth-child(4)`
  - **HTML:** `<div class="block">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.promotion-block--yellow > .promotion-block__body`
  - **HTML:** `<div class="promotion-block__body">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.col-lg-8`
  - **HTML:** `<div class="block promotionblock col-lg-8 col-md-6 col-sm-12 col-xs-12 displaymode-two-thirds">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.d-none`
  - **HTML:** `<div class="col-12 text-image-block__header mb-md-6 mb-0 d-none d-lg-block ">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-image-block__text`
  - **HTML:** `<div class="text-image-block__text pl-lg-0 pl-lg-9 pl-sm-0 mt-lg-0 mt-4">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.text-image-block__image:nth-child(1)`
  - **HTML:** `<div class="text-image-block__image"> <img src="/contentassets/a3912d6361b040eab9b952d4cd38ad9d/dsc01580.jpg?width=990&amp;height=885&amp;mode=crop" class="item__image-0" style="z-index: 0; opacity: 1;"> </div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.block-spacing-small.col-12`
  - **HTML:** `<div class="col-12 block-spacing-small"><h2>Aktuelt fra Tekna</h2> <!----></div>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t-article-card:nth-child(1) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
  - **HTML:** `<img src="/link/1ebe1f5cfbdb46bfacb0911d4518e964.aspx?width=640&amp;mode=crop&amp;heightratio=0.75&amp;quality=80" class="t-article-card__img" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t-article-card:nth-child(1) > .t-article-card__content`
  - **HTML:** `<div class="t-article-card__content">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t-article-card:nth-child(2) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
  - **HTML:** `<img src="/link/448a9bd40ee64affa02d549004f2659e.aspx?width=640&amp;mode=crop&amp;heightratio=0.75&amp;quality=80" class="t-article-card__img" style="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.t-article-card:nth-child(2) > .t-article-card__content`
  - **HTML:** `<div class="t-article-card__content">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.rss-feed`
  - **HTML:** `<div class="rss-feed t-article-card">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

