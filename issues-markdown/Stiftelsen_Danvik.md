# WCAG Violations Report for Stiftelsen Danvik

**Timestamp:** 2025-12-29T00:27:21.675Z
**URL:** [https://www.danvik.no/#](https://www.danvik.no/#)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 3

#### Affected Elements:

- `h4:nth-child(6)`
- `h4:nth-child(7)`
- `#block-cfbb468cda4135245bdb > .sqs-block-content > .sqs-html-content[data-sqsp-text-block-content=""] > h3`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `#block-yui_3_17_2_1_1648026520772_12895 > .sqs-block-content > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
- `#block-cfbb468cda4135245bdb > .sqs-block-content > .sqs-html-content[data-sqsp-text-block-content=""] > h3`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list`
