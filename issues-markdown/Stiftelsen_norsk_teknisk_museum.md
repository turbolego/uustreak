# WCAG Violations Report for Stiftelsen norsk teknisk museum

**Timestamp:** 2026-08-27T07:57:20.738Z
**URL:** [https://www.tekniskmuseum.no/](https://www.tekniskmuseum.no/)
**Total Violations:** 5

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `button[data-cky-tag="accept-button"]`
- `input[aria-owns="awesomplete_list_2"]`
- `#module-165 > .linguise_switcher.linguise_switcher_not_menu.linguise_switcher_popup > .linguise_lang_name`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `.cky-title`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.cky-consent-container`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 7

#### Affected Elements:

- `.fs-teaser-item-1`
- `.fs-teaser-item-2`
- `.fs-teaser-item-3`
- `.uk-first-column.el-item > .uk-icon-button.el-link`
- `.el-item:nth-child(2) > .uk-icon-button.el-link`
- `.el-item:nth-child(3) > .uk-icon-button.el-link`
- `.uk-margin > .el-link[href$="miljofyrtarn"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 22

#### Affected Elements:

- `.uk-hidden-visually`
- `.uk-grid-medium.uk-child-width-auto[uk-grid="margin: uk-margin-small-top"] > div:nth-child(2)`
- `.uk-width-2-5\@m`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > h3`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(1)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(2)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(3)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(4)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(2) > .uk-list > .el-item:nth-child(5) > .uk-link-toggle[target="_blank"] > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(3) > h3`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(3) > .uk-list:nth-child(2)`
- `.el-item > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > h3`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(1)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(2)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(3)`
- `.uk-width-1-3\@s.uk-width-1-5\@m:nth-child(4) > .uk-list > .el-item:nth-child(4)`
- `a[href$="www.tekniskvenner.no"] > .uk-flex-nowrap.uk-grid-small.uk-child-width-expand > div:nth-child(2)`
- `.uk-width-3-5\@m > h3`
- `.uk-child-width-1-1.uk-grid-margin.tm-grid-expand:nth-child(4)`
- `.uk-width-4-5`
- `.uk-flex-first`
