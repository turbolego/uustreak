# WCAG Violations Report for Komplett Services AS

**Timestamp:** 2026-04-18T09:25:09.620Z
**URL:** [https://www.komplett.no/#](https://www.komplett.no/#)
**Total Violations:** 9

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 10

#### Affected Elements:

- `a[aria-label="1 / 6"]`
- `.swiper-slide-prev`
- `a[aria-label="3 / 6"]`
- `.swiper-slide-next`
- `a[aria-label="5 / 6"]`
- `a[aria-label="6 / 6"]`
- `a[title="Uklar skjerm?"]`
- `a[title="Bestselgere"][data-placement-name="home_page.frontban1"][aria-label="1 / 1"]`
- `a[title="Gjør hagearbeidet enkelt!"][data-placement-name="home_page.frontban3"][aria-label="1 / 1"]`
- `a[title="Støv"]`

### ARIA dialog and alertdialog nodes should have an accessible name

- **Impact:** serious
- **Description:** Ensure every ARIA dialog and alertdialog node has an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `komplett-newsletter,#newsletter-gdpr-modal`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-h5,h5`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-h5,h5`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 9

#### Affected Elements:

- `komplett-thumbnail-navigation,img[title="Ukens tilbud"][alt="Ukens tilbud"][width="96"]`
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
- **Count:** 59

#### Affected Elements:

- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="43"],komplett-review-rating-stars[score="4.9535"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="2763"],komplett-review-rating-stars[score="4.5168"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="26"],komplett-review-rating-stars[score="4.7692"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="18"],komplett-review-rating-stars[score="3.7778"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="22"],komplett-review-rating-stars[score="4.6818"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="237"],komplett-review-rating-stars[score="4.73"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(5) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="29"],komplett-review-rating-stars[score="4.7241"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(2),komplett-product-card-rating[score="4"][reviewcount="1"],komplett-review-rating-stars[score="4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="124"],komplett-review-rating-stars[score="4.4919"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="9"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="14"],komplett-review-rating-stars[score="4.6429"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="10"][score="4.5"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="88"],komplett-review-rating-stars[score="4.6023"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="167"],komplett-review-rating-stars[score="4.6228"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(13),komplett-product-card-rating[reviewcount="137"],komplett-review-rating-stars[score="4.3723"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(14),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(15),komplett-product-card-rating[reviewcount="328"],komplett-review-rating-stars[score="4.0671"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(16),komplett-product-card-rating[reviewcount="32"],komplett-review-rating-stars[score="4.4375"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(17),komplett-product-card-rating[reviewcount="10"][score="4.8"],komplett-review-rating-stars[score="4.8"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(18),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(19),komplett-product-card-rating[reviewcount="15"],komplett-review-rating-stars[score="4.4"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(20),komplett-product-card-rating[reviewcount="7"][score="4.7143"],komplett-review-rating-stars[score="4.7143"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(21),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(22),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(23),komplett-product-card-rating[reviewcount="2"][score="4.5"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(24),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(25),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(26),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(27),komplett-product-card-rating[reviewcount="1"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(28),komplett-product-card-rating[reviewcount="8"][score="4.5"],komplett-review-rating-stars[score="4.5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(29),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(30),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(31),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(32),komplett-product-card-rating[reviewcount="2"][score="5"],komplett-review-rating-stars[score="5"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(33),komplett-product-card-rating[score="4.8333"][reviewcount="6"],komplett-review-rating-stars[score="4.8333"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(34),komplett-product-card-rating[reviewcount="7"][score="4.7143"],komplett-review-rating-stars[score="4.7143"]`
- `.row[data-bind="visible: rowVisible"]:nth-child(8) > .col-xs-12 > komplett-product-card-container,komplett-product-card:nth-child(35),komplett-product-card-rating[reviewcount="50"],komplett-review-rating-stars[score="4.36"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(1),komplett-product-card-rating[score="4.875"][reviewcount="8"],komplett-review-rating-stars[score="4.875"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(2),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(3),komplett-product-card-rating[reviewcount="3"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(4),komplett-product-card-rating[reviewcount="12"],komplett-review-rating-stars[score="4.1667"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(5),komplett-product-card-rating[reviewcount="13"],komplett-review-rating-stars[score="4.9231"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(6),komplett-product-card-rating[reviewcount="10"][score="4.8"],komplett-review-rating-stars[score="4.8"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(7),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(8),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(9),komplett-product-card-rating[reviewcount="4"],komplett-review-rating-stars[score="4.5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(10),komplett-product-card-rating[reviewcount="129"],komplett-review-rating-stars[score="4.3256"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(11),komplett-product-card-rating[reviewcount="6"][score="5"],komplett-review-rating-stars[score="5"]`
- `komplett-algonomy-product-cards,komplett-product-card-container,komplett-product-card[isflexonly=""]:nth-child(12),komplett-product-card-rating[reviewcount="17"],komplett-review-rating-stars[score="4.8235"]`
