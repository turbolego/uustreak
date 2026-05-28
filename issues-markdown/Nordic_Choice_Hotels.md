# WCAG Violations Report for Nordic Choice Hotels

**Timestamp:** 2026-05-28T00:54:44.125Z
**URL:** [https://www.strawberry.no/](https://www.strawberry.no/)
**Total Violations:** 3

## Violation Details

### Banner landmark should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the banner landmark is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.css-2ycpjl-maintenanceMessage-container[role="region"][aria-labelledby="maintenance-message-title"]:nth-child(5) > .css-1emrax > .css-subzsb-maintenanceMessage-wrap > div > .css-cmbk8s`
- `.css-2ycpjl-maintenanceMessage-container[role="region"][aria-labelledby="maintenance-message-title"]:nth-child(6) > .css-1emrax > .css-subzsb-maintenanceMessage-wrap > div > .css-cmbk8s`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.css-2ycpjl-maintenanceMessage-container[role="region"][aria-labelledby="maintenance-message-title"]:nth-child(5)`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `#skip-to-main-content`
