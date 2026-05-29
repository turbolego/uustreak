# WCAG Violations Report for Vy Buss AS

**Timestamp:** 2026-05-29T01:36:37.020Z
**URL:** [https://www.vybuss.no/#!/](https://www.vybuss.no/#!/)
**Total Violations:** 4

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 4

#### Affected Elements:

- `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`

### Form elements must have labels

- **Impact:** critical
- **Description:** Ensure every form element has a label
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright
- **Tags:** cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT, RGAAv4, RGAA-11.1.1
- **Count:** 2

#### Affected Elements:

- `#Origin > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
- `#Destination > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`

### Zooming and scaling must not be disabled

- **Impact:** moderate
- **Description:** Ensure <meta name="viewport"> does not disable text scaling and zooming
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright
- **Tags:** cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4, ACT, RGAAv4, RGAA-10.4.2
- **Count:** 1

#### Affected Elements:

- `meta[name="viewport"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 16

#### Affected Elements:

- `label[for="Origin"]`
- `#Origin > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
- `label[for="Destination"]`
- `#Destination > .angucomplete-holder > .form__input[ng-model="searchStr"][ng-disabled="disableInput"]`
- `#DatesDesktop`
- `.searchjourney__travelers > .searchjourney__item > .searchjourney__group`
- `.slick-current`
- `div[data-slick-index="1"]`
- `div[data-slick-index="2"]`
- `.block__wrapper:nth-child(3) > .block__header`
- `.expand-block__container:nth-child(1) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(2) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(3) > .expand-block__header[data-toggle="expand"]`
- `.expand-block__container:nth-child(4) > .expand-block__header[data-toggle="expand"]`
- `.js-group-block.block__wrapper:nth-child(4)`
- `.js-group-block.block__wrapper:nth-child(5)`
