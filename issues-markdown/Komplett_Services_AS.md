# WCAG Violations Report for Komplett Services AS

**Timestamp:** 2025-11-11T00:42:23.052Z
**URL:** [https://www.komplett.no/#](https://www.komplett.no/#)
**Total Violations:** 8

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 13

#### Affected Elements:

- `a[aria-label="1 / 9"]`
- `a[aria-label="2 / 9"]`
- `.swiper-slide-prev`
- `a[aria-label="4 / 9"]`
- `.swiper-slide-next`
- `.swiper-slide-duplicate-prev`
- `a[aria-label="7 / 9"]`
- `a[aria-label="8 / 9"]`
- `a[aria-label="9 / 9"]`
- `a[title="Gjør gamiing Komplett!"]`
- `a[title="Innekos"]`
- `a[title="Komplett-PC Entry"]`
- `a[title="Bestselgere"]`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 5

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-h5,h5`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `komplett-thumbnail-navigation,img[alt="Komponenter"][title="Komponenter"]`
- `komplett-thumbnail-navigation,img[alt="Gaming"][title="Gaming"]`
- `komplett-thumbnail-navigation,img[alt="PC & tilbehør"][title="PC & tilbehør"]`
- `komplett-thumbnail-navigation,img[alt="Komplett-PC"]`
- `komplett-thumbnail-navigation,img[alt="Mobil, tablets & klokker"][title="Mobil, tablets & klokker"]`
- `komplett-thumbnail-navigation,img[alt="TV, lyd & bilde"][title="TV, lyd & bilde"]`
- `komplett-thumbnail-navigation,img[alt="Hjem & fritid"]`
- `komplett-thumbnail-navigation,img[alt="Hvitevarer"][title="Hvitevarer"]`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- `#cookie_cat_functional`
- `#cookie_cat_statistic`
- `#cookie_cat_marketing`

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
- **Count:** 4

#### Affected Elements:

- `a[href$="prismatch/"] > span:nth-child(1)`
- `.universal-selling-points--item:nth-child(2) > .universal-selling-points--link > span:nth-child(1)`
- `.universal-selling-points--item:nth-child(3) > .universal-selling-points--link > span:nth-child(1)`
- `.chat__menu-title`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 60

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[score="3"][reviewcount="2"],komplett-review-rating-stars[score="3"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="4"][score="4.5"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="1930"],komplett-review-rating-stars[score="4.4249"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="3"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="2"][score="4.5"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="18"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="152"][score="4.6645"],komplett-review-rating-stars[score="4.6645"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[score="4.7263"][reviewcount="190"],komplett-review-rating-stars[score="4.7263"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[score="4.7211"][reviewcount="190"],komplett-review-rating-stars[score="4.7211"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="295"][score="4.7966"],komplett-review-rating-stars[score="4.7966"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="295"][score="4.7966"],komplett-review-rating-stars[score="4.7966"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="3"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[score="4.25"][reviewcount="4"],komplett-review-rating-stars[score="4.25"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="152"][score="4.6645"],komplett-review-rating-stars[score="4.6645"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="31"],komplett-review-rating-stars[score="4.6129"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="30"],komplett-review-rating-stars[score="4.6333"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="11"][score="4.2727"],komplett-review-rating-stars[score="4.2727"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="8"],komplett-review-rating-stars[score="4.875"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="23"],komplett-review-rating-stars[score="4.6522"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(7) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(13),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(14),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(15),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(16),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(17),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(18),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(19),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(20),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(21),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(22),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(9) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(23),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-product-card-rating[reviewcount="13"],komplett-review-rating-stars[score="3.7692"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(2),komplett-product-card-rating[reviewcount="11"][score="4.2727"],komplett-review-rating-stars[score="4.2727"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(3),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(4),komplett-product-card-rating[reviewcount="37"],komplett-review-rating-stars[score="3.8649"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(5),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(6),komplett-product-card-rating[reviewcount="15"],komplett-review-rating-stars[score="4.8"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(7),komplett-product-card-rating[score="3"][reviewcount="2"],komplett-review-rating-stars[score="3"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(8),komplett-product-card-rating[reviewcount="12"],komplett-review-rating-stars[score="4.6667"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(9),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(10),komplett-product-card-rating[reviewcount="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(11),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(12),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
