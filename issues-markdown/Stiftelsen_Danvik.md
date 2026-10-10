# WCAG Violations Report for Stiftelsen Danvik

**Timestamp:** 2026-10-10T08:21:07.362Z
**URL:** [https://www.danvik.no/](https://www.danvik.no/)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 5

#### Affected Elements:

- **Target:** `#block-yui_3_17_2_1_1773847368871_5274 > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3:nth-child(1)`
  - **HTML:** `<h3 style="text-align: center; ; white-space:pre-wrap;" data-rte-preserve-empty="true"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#block-yui_3_17_2_1_1773847368871_5274 > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3:nth-child(2)`
  - **HTML:** `<h3 style="text-align: center; ; white-space:pre-wrap;" data-rte-preserve-empty="true"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#yui_3_17_2_1_1773847368871_4550`
  - **HTML:** `<h3 style="text-align: center; ; white-space:pre-wrap;" data-rte-preserve-empty="true" id="yui_3_17_2_1_1773847368871_4550"><br class="ProseMirror-trailingBreak"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#yui_3_17_2_1_1773847368871_4552`
  - **HTML:** `<h4 style="text-align: center; ; white-space:pre-wrap;" data-rte-preserve-empty="true" id="yui_3_17_2_1_1773847368871_4552"><br><br class="ProseMirror-trailingBreak"></h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `#block-cfbb468cda4135245bdb > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 data-rte-preserve-empty="true" style="white-space:pre-wrap;"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `#block-yui_3_17_2_1_1648026520772_12895 > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 style="text-align: center; ; white-space:pre-wrap;" data-rte-preserve-empty="true"><span class="sqsrte-text-color--custom" style="color: #164515;"><strong>God mat, god stemning </strong></span></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid

- **Target:** `#block-cfbb468cda4135245bdb > .sqs-block-content > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 data-rte-preserve-empty="true" style="white-space:pre-wrap;"></h3>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list`
  - **HTML:** `<nav class="header-nav-list">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

