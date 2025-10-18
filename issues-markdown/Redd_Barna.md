# WCAG Violations Report for Redd Barna

**Timestamp:** 2025-10-18T00:29:05.883Z
**URL:** [https://www.reddbarna.no/#](https://www.reddbarna.no/#)
**Total Violations:** 3

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `.skip-link`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

### Elements should not have tabindex greater than zero

- **Impact:** serious
- **Description:** Ensure tabindex attribute values are not greater than 0
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/tabindex?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 8

#### Affected Elements:

- `#give-amount`
- `.give-btn-level-0`
- `.give-btn-level-1`
- `.give-btn-level-2`
- `.give-btn-level-custom`
- `#frequency-single`
- `#frequency-recurring`
- `.give-step-one-buttons > .give-submit.advance-btn.give-btn`
