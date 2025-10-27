# WCAG Violations Report for Stiftelsen norsk teknisk museum

**Timestamp:** 2025-10-27T00:26:48.140Z
**URL:** [https://www.tekniskmuseum.no/#](https://www.tekniskmuseum.no/#)
**Total Violations:** 11

## Violation Details

### Elements must only use supported ARIA attributes

- **Impact:** critical
- **Description:** Ensure an element's role supports its ARIA attributes
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.uk-disabled, .OverlayBase_module_overlayWrapper__42ef25fe`

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `#search-131 > .uk-search-icon[uk-search-icon=""][aria-label="søkefelt"]`

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT
- **Count:** 2

#### Affected Elements:

- `button[data-cky-tag="accept-button"]`
- `#module-165 > .linguise_switcher.linguise_switcher_not_menu.linguise_switcher_popup > .linguise_lang_name`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.cky-title`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.uk-disabled`

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.tm-header`

### Main landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the main landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#tm-main`

### Document should not have more than one main landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one main landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.tm-page`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.cky-consent-container`
- `.tm-page`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 7

#### Affected Elements:

- `.fs-teaser-item-1`
- `.fs-teaser-item-2`
- `.fs-teaser-item-3`
- `.uk-first-column.el-item > .uk-icon-button.el-link[rel="noreferrer"]`
- `.el-item:nth-child(2) > .uk-icon-button.el-link[rel="noreferrer"]`
- `.el-item:nth-child(3) > .uk-icon-button.el-link[rel="noreferrer"]`
- `.uk-margin > .el-link[href$="miljofyrtarn"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 1

#### Affected Elements:

- `.uk-hidden-visually`
