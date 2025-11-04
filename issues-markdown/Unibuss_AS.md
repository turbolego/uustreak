# WCAG Violations Report for Unibuss AS

**Timestamp:** 2025-11-04T00:31:50.833Z
**URL:** [https://www.unibuss.no/#](https://www.unibuss.no/#)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 4

#### Affected Elements:

- `.wp-container-core-group-is-layout-3 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
- `.wp-container-core-group-is-layout-4 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
- `.wp-container-core-group-is-layout-5 > .wp-block-buttons.wp-block-buttons-is-layout-flex.is-layout-flex > .has-custom-width.wp-block-button__width-100.is-style-fill > .has-contrast-3-background-color.has-border-color.has-contrast-3-border-color`
- `.modal-cacsp-btn-accept`

### <ul> and <ol> must only directly contain <li>, <script> or <template> elements

- **Impact:** serious
- **Description:** Ensure that lists are structured correctly
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/list?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 5

#### Affected Elements:

- `.wp-container-core-navigation-is-layout-2 > .wp-block-navigation__container.is-vertical`
- `.wp-container-core-navigation-is-layout-3 > .wp-block-navigation__container.is-vertical`
- `.wp-container-core-navigation-is-layout-4 > .wp-block-navigation__container.is-vertical`
- `.wp-container-core-navigation-is-layout-5 > .wp-block-navigation__container.is-vertical`
- `.wp-container-core-navigation-is-layout-6 > .wp-block-navigation__container.is-vertical:nth-child(1)`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `html`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.modal-cacsp-box-info > .modal-cacsp-box-content`
- `.modal-cacsp-box-info > .modal-cacsp-btns`
- `.modal-cacsp-box-settings > .modal-cacsp-box-header`
- `.modal-cacsp-box-settings > .modal-cacsp-box-content`
- `.modal-cacsp-box-settings-list > ul > li:nth-child(1)`
- `.modal-cacsp-box-settings-list > ul > li:nth-child(3)`
- `.modal-cacsp-box-settings-list > ul > li:nth-child(4)`
- `.modal-cacsp-box-settings > .modal-cacsp-btns`
