# WCAG Violations Report for Lipro kompetanse AS

**Timestamp:** 2026-11-23T06:24:26.428Z
**URL:** [https://www.lipro.no/](https://www.lipro.no/)
**Total Violations:** 11

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 30

#### Affected Elements:

- `a[href$="nyttig-a-vite-for-nav/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-cta__description.elementor-cta__content-item[data-cya11y-org-font-size="27"]`
- `a[href$="for-jobbsoker/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > h3`
- `a[href$="for-jobbsoker/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-cta__description.elementor-cta__content-item[data-cya11y-org-font-size="27"]`
- `p[data-cya11y-org-font-size="24"]:nth-child(1) > i`
- `p[data-cya11y-org-font-size="24"]:nth-child(2) > i:nth-child(1)`
- `p[data-cya11y-org-font-size="24"]:nth-child(2) > i:nth-child(2)`
- `p[data-cya11y-org-font-size="24"]:nth-child(3) > i:nth-child(1)`
- `p[data-cya11y-org-font-size="24"]:nth-child(3) > i:nth-child(2)`
- `p[data-cya11y-org-font-size="24"]:nth-child(3) > i:nth-child(3)`
- `p[data-cya11y-org-font-size="24"]:nth-child(4) > i:nth-child(1)`
- `p[data-cya11y-org-font-size="24"]:nth-child(4) > i:nth-child(2)`
- `p[data-cya11y-org-font-size="24"]:nth-child(4) > i:nth-child(3)`
- `i:nth-child(4)`
- `p[data-cya11y-org-font-size="24"]:nth-child(5) > i`
- `p[data-cya11y-org-font-size="24"]:nth-child(6) > em`
- `p[data-cya11y-org-font-size="24"]:nth-child(7) > em`
- `.elementor-element-5d56686 > .elementor-widget-container[data-cya11y-org-font-size="14"] > .elementor-cta > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `a[href$="behov-for-arbeidskraft/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `a[href$="horsterscatering.no"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `a[href$="snekkerverksted/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `.elementor-element-e87f040 > .elementor-widget-container[data-cya11y-org-font-size="14"] > .elementor-cta > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `a[href$="avdeling-ombruk/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > .elementor-animated-item--grow.elementor-cta__title`
- `.elementor-element-605447e > .elementor-widget-container[data-cya11y-org-font-size="14"] > .elementor-heading-title.elementor-size-default[data-cya11y-org-font-size="20"]`
- `.elementor-element-82fbd30 > .elementor-widget-container[data-cya11y-org-font-size="14"] > p:nth-child(1)`
- `p:nth-child(1) > strong`
- `.elementor-icon-list-item:nth-child(1) > a[target="_blank"] > .elementor-icon-list-text`
- `.elementor-icon-list-item:nth-child(2) > a[target="_blank"] > .elementor-icon-list-text`
- `.elementor-icon-list-item:nth-child(3) > a[target="_blank"] > .elementor-icon-list-text`
- `.elementor-icon-list-item:nth-child(4) > a[target="_blank"] > .elementor-icon-list-text`
- `.elementor-element-bf6ac31 > .elementor-widget-container[data-cya11y-org-font-size="14"] > .elementor-heading-title.elementor-size-default`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `a[href$="nyttig-a-vite-for-nav/"] > .elementor-cta__content[data-cya11y-org-font-size="14"] > h3`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.elementor-1202`

### Contentinfo landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the contentinfo landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.elementor-element-28dc698f`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#site-header`

### Document should not have more than one contentinfo landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one contentinfo landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.elementor-1216`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#site-header`
- `.elementor-1216`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `iframe[name="ffe31fdb9e9ad280e"], #u_0_1_pL`
- `iframe[name="ffe31fdb9e9ad280e"], .lfloat._3-8_`

### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `html`
- `iframe[name="ffe31fdb9e9ad280e"], #facebook`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.skip-link`
- `#top-bar-wrap`
