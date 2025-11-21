# WCAG Violations Report for Stiftelsen Norlandsmuseet

**Timestamp:** 2025-11-21T00:25:22.549Z
**URL:** [https://www.nordlandsmuseet.no/hjem/](https://www.nordlandsmuseet.no/hjem/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 1

#### Affected Elements:

- `.header-display-desktop > .header-actions.header-actions--right > .language-picker-desktop[aria-controls="language-picker-menu"][aria-label="language picker"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#header`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 15

#### Affected Elements:

- `.summary-thumbnail-container.sqs-gallery-image-container[href$="madeinbodo"]`
- `#yui_3_17_2_1_1763684713486_394 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_396 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_398 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="bodo-laget-det"]`
- `#yui_3_17_2_1_1763684713486_402 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_404 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_406 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_408 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="leiv-kreyberg"]`
- `#yui_3_17_2_1_1763684713486_412 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_414 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="ntw"]`
- `#yui_3_17_2_1_1763684713486_418 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1763684713486_420 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
