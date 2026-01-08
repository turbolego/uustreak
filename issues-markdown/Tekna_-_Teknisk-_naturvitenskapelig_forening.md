# WCAG Violations Report for Tekna - Teknisk- naturvitenskapelig forening

**Timestamp:** 2026-01-08T00:35:30.473Z
**URL:** [https://www.tekna.no/#](https://www.tekna.no/#)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.lightblue-promotion-block.promoblock > .promotion-body > .promotion-body__text > h3`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.item__image-0`
- `.t-article-card:nth-child(2) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- `div:nth-child(14)`
- `.heroblock`
- `.arrow-link-list-underline`
- `.d-sm-flex`
- `.block:nth-child(4)`
- `.yellow-promotion-block > .promotion-body`
- `.contentareablock.col-lg-12.col-md-12:nth-child(5) > .content-area-block.content-area-block--no-header > .flex-gap-small.row > .col-lg-8.displaymode-two-thirds.promotionblock`
- `.text-image-block__header.d-lg-block.mb-0`
- `.text-image-block__text`
- `.item__image-0`
- `.block-spacing-small.col-12`
- `a[href$="ny-generalsekretar/"] > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
- `a[href$="ny-generalsekretar/"] > .t-article-card__content`
- `.t-article-card:nth-child(2) > .t-article-card__image > .t-article-card__image-wrapper > .t-article-card__img`
- `.t-article-card:nth-child(2) > .t-article-card__content`
- `.rss-feed`
