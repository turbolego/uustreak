# WCAG Violations Report for Nordic Choice Hotels

**Timestamp:** 2025-10-23T00:23:41.303Z
**URL:** [https://www.strawberry.no/](https://www.strawberry.no/)
**Total Violations:** 4

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 17

#### Affected Elements:

- `#horizontal-scroll-info-cards-0 > .sds-c-info-cards.css-18rum0n[data-length="2"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(1)`
- `#horizontal-scroll-info-cards-0 > .sds-c-info-cards.css-18rum0n[data-length="2"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(2)`
- `a[href$="superdeal/"]`
- `.css-1pzvwcy-label-spacing-override[href$="partnere/"][role="listitem"]`
- `.css-1pzvwcy-label-spacing-override[href$="restaurant/"][role="listitem"]`
- `.css-1pzvwcy-label-spacing-override[href$="spa/"][role="listitem"]`
- `.css-1pzvwcy-label-spacing-override[href$="eventer/"][role="listitem"]`
- `a[href$="oslo/"]`
- `a[href$="stockholm/"]`
- `a[href$="kobenhavn/"]`
- `.css-1pzvwcy-label-spacing-override[href="/hotell/?resetDestination=true"][role="listitem"]`
- `#horizontal-scroll-info-cards-4 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(1)`
- `#horizontal-scroll-info-cards-4 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(2)`
- `#horizontal-scroll-info-cards-4 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(3)`
- `#horizontal-scroll-info-cards-6 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(1)`
- `#horizontal-scroll-info-cards-6 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(2)`
- `#horizontal-scroll-info-cards-6 > .sds-c-info-cards.css-18rum0n[data-length="3"] > .css-1pzvwcy-label-spacing-override.sds-c-info-card[role="listitem"]:nth-child(3)`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.css-11pmdn9`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.css-11pmdn9`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `body > ul`
- `.css-p61xkx-maintenanceMessage-container`
