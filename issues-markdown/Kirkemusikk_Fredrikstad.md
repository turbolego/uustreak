# WCAG Violations Report for Kirkemusikk Fredrikstad

**Timestamp:** 2026-11-20T06:16:12.252Z
**URL:** [https://www.kirkemusikkfredrikstad.no/](https://www.kirkemusikkfredrikstad.no/)
**Total Violations:** 3

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 2

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.421622s;" data-rte-preserve-empty="true" class="preFade"></h4>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…

- **Target:** `.sqs-block-content.preFade > .sqs-text-block-container > .sqs-html-content[data-sqsp-text-block-content=""] > h3`
  - **HTML:** `<h3 style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.551351s;" data-rte-preserve-empty="true" class="preFade"></h3>`
  - **Failure summary:** Fix any of the following: Element does not have text that is visible to screen readers aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements t…


### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `h4`
  - **HTML:** `<h4 style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.421622s;" data-rte-preserve-empty="true" class="preFade"></h4>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html xmlns:og="http://opengraphprot..." xmlns:fb="http://www.facebook...." lang="no-NO" class="yui3-js-enabled js f..." style="--header-height: 189...">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

