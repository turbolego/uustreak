# WCAG Violations Report for Komplett Services AS

**Timestamp:** 2025-10-26T00:39:29.298Z
**URL:** [https://www.komplett.no/#](https://www.komplett.no/#)
**Total Violations:** 7

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 4

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-h5,h5`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 8

#### Affected Elements:

- `komplett-thumbnail-navigation,img[alt="Datautstyr"]`
- `komplett-thumbnail-navigation,img[alt="Gaming"]`
- `komplett-thumbnail-navigation,img[alt="PC & tilbehør"]`
- `komplett-thumbnail-navigation,img[alt="Komplett-PC"]`
- `komplett-thumbnail-navigation,img[alt="Mobil, tablets & klokker"]`
- `komplett-thumbnail-navigation,img[alt="TV, lyd & bilde"]`
- `komplett-thumbnail-navigation,img[alt="Hjem & fritid"]`
- `komplett-thumbnail-navigation,img[alt="Hvitevarer"]`

### Form elements should have a visible label

- **Impact:** serious
- **Description:** Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/label-title-only?application=playwright
- **Tags:** cat.forms, best-practice
- **Count:** 3

#### Affected Elements:

- `#cookie_cat_functional`
- `#cookie_cat_statistic`
- `#cookie_cat_marketing`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 4

#### Affected Elements:

- `a[href$="prismatch/"] > span:nth-child(1)`
- `.universal-selling-points--item:nth-child(2) > .universal-selling-points--link > span:nth-child(1)`
- `.universal-selling-points--item:nth-child(3) > .universal-selling-points--link > span:nth-child(1)`
- `.chat__menu-title`

### [role="img"] elements must have an alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 58

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="22"][score="2.7727"],komplett-review-rating-stars[score="2.7727"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="360"],komplett-review-rating-stars[score="4.4361"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="72"],komplett-review-rating-stars[score="4.8889"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[score="3.6667"][reviewcount="3"],komplett-review-rating-stars[score="3.6667"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="6"],komplett-review-rating-stars[score="4.1667"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[score="3.3333"][reviewcount="3"],komplett-review-rating-stars[score="3.3333"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="52"],komplett-review-rating-stars[score="4.0192"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="106"],komplett-review-rating-stars[score="4.3585"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[score="4.5"][reviewcount="4"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="3"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="4"][score="4"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="1"][score="4"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[score="3.9"][reviewcount="10"],komplett-review-rating-stars[score="3.9"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="1"][score="4"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="1"][score="4"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(6) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="1"][score="4"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(13),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(14),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(15),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(16),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(17),komplett-product-card-rating[score="4.8"][reviewcount="10"],komplett-review-rating-stars[score="4.8"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(18),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(19),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(20),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(21),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(22),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(23),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(24),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-product-card-rating[reviewcount="68"],komplett-review-rating-stars[score="4.3529"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(2),komplett-product-card-rating[reviewcount="13"],komplett-review-rating-stars[score="4.6923"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(3),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(4),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(5),komplett-product-card-rating[reviewcount="1"][score="4"],komplett-review-rating-stars[score="4"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(6),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(7),komplett-product-card-rating[reviewcount="22"][score="2.7727"],komplett-review-rating-stars[score="2.7727"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(8),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(9),komplett-product-card-rating[reviewcount="28"],komplett-review-rating-stars[score="4.7143"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(10),komplett-product-card-rating[reviewcount="23"],komplett-review-rating-stars[score="4.6087"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(11),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(12),komplett-product-card-rating[reviewcount="0"],komplett-review-rating-stars`
