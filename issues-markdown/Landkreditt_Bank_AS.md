# WCAG Violations Report for Landkreditt Bank AS

**Timestamp:** 2025-10-13T00:41:32.950Z
**URL:** [https://www.landkredittbank.no/#](https://www.landkredittbank.no/#)
**Total Violations:** 7

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 4

#### Affected Elements:

- `#declineButton`
- `.swiper-slide-active`
- `.swiper-slide-next`
- `li[aria-label="3 / 3"]`

### Buttons must have discernible text

- **Impact:** critical
- **Description:** Ensure buttons have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/button-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 6

#### Affected Elements:

- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(1) > .slider-input[data-input-size="large"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(1) > .slider-input[data-input-size="large"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`
- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(2) > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .row:nth-child(2) > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`
- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .panel-calc-slider-last.row > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-minus.btn-haptic[data-bind="click: decrementValue"]`
- `#calculator-5cdd9bcb-b86d-4bae-af4f-986be71992a4 > .container-responsive.container-fluid > .row > .col-sm-6.col-md-5:nth-child(1) > .panel-calc > .panel-calc-slider-last.row > .slider-input[data-input-size="small"] > .col-sm-12:nth-child(2) > .col-inner > .slider-control > .btn-plus.btn-haptic[data-bind="click: incrementValue"]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 5

#### Affected Elements:

- `img[alt="Hvor mye kan jeg låne?"]`
- `img[alt="Se flere nyheter"]`
- `img[alt="Facebook"]`
- `img[alt="Instagram"]`
- `img[alt="LinkedIn"]`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT
- **Count:** 1

#### Affected Elements:

- `#searchText`

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
- **Count:** 2

#### Affected Elements:

- `#coiOverlay`
- `#nav`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `#swiper-wrapper-e5b46e332a2aa23d`
