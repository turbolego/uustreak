# WCAG Violations Report for Stiftelsen Norlandsmuseet

**Timestamp:** 2025-10-16T00:27:50.955Z
**URL:** [https://www.nordlandsmuseet.no/hjem/](https://www.nordlandsmuseet.no/hjem/)
**Total Violations:** 5

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Certain ARIA roles must contain particular children

- **Impact:** critical
- **Description:** Ensure elements with an ARIA role that require child roles contain them
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=playwright
- **Tags:** cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1
- **Count:** 1

#### Affected Elements:

- `.header-display-desktop > .header-actions.header-actions--right > .language-picker-desktop[aria-controls="language-picker-menu"][aria-label="language picker"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT
- **Count:** 15

#### Affected Elements:

- `#yui_3_17_2_1_1760574461670_472 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_474 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_476 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="bodo-laget-det"]`
- `#yui_3_17_2_1_1760574461670_480 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_482 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_484 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_486 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="leiv-kreyberg"]`
- `#yui_3_17_2_1_1760574461670_490 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_492 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `.summary-thumbnail-container.sqs-gallery-image-container[href$="ntw"]`
- `#yui_3_17_2_1_1760574461670_496 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_498 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
- `#yui_3_17_2_1_1760574461670_500 > .summary-thumbnail-outer-container > .summary-thumbnail-container.sqs-gallery-image-container[data-description=""]`
