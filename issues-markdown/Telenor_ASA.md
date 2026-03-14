# WCAG Violations Report for Telenor ASA

**Timestamp:** 2026-03-14T20:54:30.520Z
**URL:** [https://www.telenor.no/privat/](https://www.telenor.no/privat/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 3

#### Affected Elements:

- `.card-wrap.medium.has-bg:nth-child(1) > .shadow-m.card-vertical[to=""] > .content[data-v-7673d778=""] > .margin-bottom-s.small-title.title-s`
- `.dropdown-category.footer.dark:nth-child(1) > .dropdown-link[data-v-9b029b67=""] > .dropdown-header.hidden-mobile[data-v-9b029b67=""] > h6`
- `h4`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#d6916e04-dbad-4e0d-a9df-a765e49cc44e > .heroBannerCarousel[data-v-627f96fb=""] > .carousel.is-ltr.is-effect-slide`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 4

#### Affected Elements:

- `.border.margin-bottom-2xs[ondragstart="return false"]:nth-child(1) > .main-stock.stock[size="14px"]`
- `.border.margin-bottom-2xs[ondragstart="return false"]:nth-child(2) > .main-stock.stock[size="14px"]`
- `.border.margin-bottom-2xs[ondragstart="return false"]:nth-child(3) > .main-stock.stock[size="14px"]`
- `.border.margin-bottom-2xs[ondragstart="return false"]:nth-child(4) > .main-stock.stock[size="14px"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `#privacy_prompt_text`
- `#privacy_prompt_text2`
- `#freetext-top > .two-buttons`
- `.showConsentPreferences`
- `#privacy_prompt_bottom`
