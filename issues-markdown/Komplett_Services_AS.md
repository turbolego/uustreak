# WCAG Violations Report for Komplett Services AS

**Timestamp:** 2025-11-19T02:22:28.902Z
**URL:** [https://www.komplett.no/#](https://www.komplett.no/#)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(1),komplett-h5,h5`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 9

#### Affected Elements:

- `komplett-thumbnail-navigation,img[alt="Gaming"]`
- `komplett-thumbnail-navigation,img[alt="Komplett-PC"][title="Komplett-PC"][width="96"]`
- `komplett-thumbnail-navigation,img[alt="PC & tilbehør"]`
- `komplett-thumbnail-navigation,img[alt="Mobil, Tablets & klokker"]`
- `komplett-thumbnail-navigation,img[alt="TV & bilde"]`
- `komplett-thumbnail-navigation,img[alt="Lyd"]`
- `komplett-thumbnail-navigation,img[alt="Hjem & velvære"]`
- `komplett-thumbnail-navigation,img[alt="Hage, lys & sesong"]`
- `komplett-thumbnail-navigation,img[alt="Hvitevarer"]`

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
- **Count:** 26

#### Affected Elements:

- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(1),komplett-product-card-rating[score="4.8889"][reviewcount="9"],komplett-review-rating-stars[score="4.8889"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="8"],komplett-review-rating-stars[score="5"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="129"],komplett-review-rating-stars[score="4.8682"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(4),komplett-product-card-rating[score="4.0274"][reviewcount="73"],komplett-review-rating-stars[score="4.0274"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="213"],komplett-review-rating-stars[score="4.3005"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(6),komplett-product-card-rating[reviewcount="20821"],komplett-review-rating-stars[score="4.906"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(7),komplett-product-card-rating[score="4.5556"][reviewcount="9"],komplett-review-rating-stars[score="4.5556"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="203"],komplett-review-rating-stars[score="4.8621"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="6"],komplett-review-rating-stars[score="3.8333"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="102"],komplett-review-rating-stars[score="4.2353"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-product-card-container:nth-child(2),komplett-product-card:nth-child(13),komplett-product-card-rating[reviewcount="33"],komplett-review-rating-stars[score="4.4242"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(1),komplett-product-card-rating[reviewcount="1"],komplett-review-rating-stars[score="5"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(2),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(3),komplett-product-card-rating[reviewcount="338"],komplett-review-rating-stars[score="4.4349"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(4),komplett-product-card-rating[reviewcount="9901"],komplett-review-rating-stars[score="4.8401"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(5),komplett-product-card-rating[reviewcount="85"],komplett-review-rating-stars[score="4.4588"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(6),komplett-product-card-rating[score="3.9589"][reviewcount="73"],komplett-review-rating-stars[score="3.9589"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(7),komplett-product-card-rating[reviewcount="591"],komplett-review-rating-stars[score="4.8528"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(8),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(9),komplett-product-card-rating[reviewcount="2"],komplett-review-rating-stars[score="3.5"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(10),komplett-product-card-rating[reviewcount="29"],komplett-review-rating-stars[score="4.9655"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(11),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(12),komplett-product-card-rating[reviewcount="51"],komplett-review-rating-stars[score="4.7451"]`
- `komplett-product-card-container:nth-child(3),komplett-product-card:nth-child(13),komplett-product-card-rating[reviewcount="0"][score="0"],komplett-review-rating-stars[score="0"]`
