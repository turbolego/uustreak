# WCAG Violations Report for Top Temp AS

**Timestamp:** 2025-11-05T18:43:27.037Z
**URL:** [https://www.toptemp.no/#](https://www.toptemp.no/#)
**Total Violations:** 6

## Violation Details

### ARIA role should be appropriate for the element

- **Impact:** minor
- **Description:** Ensure role attribute has an appropriate value for the element
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright
- **Tags:** cat.aria, best-practice
- **Count:** 1

#### Affected Elements:

- `#declineButton`

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `#hs_cos_wrapper_module_16847581314182_ > h3`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `#coiOverlay`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `.menu--desktop > .menu__wrapper.no-list > .menu__item--depth-1.menu__item.hs-skip-lang-url-rewrite:nth-child(1) > .menu__link[href=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 19

#### Affected Elements:

- `.row-number-1`
- `.hs-cta-embed-117543557091 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .interactive-button-wrapper`
- `.hs-cta-embed-118207266247 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .interactive-button-wrapper`
- `.cell_17288948801924-vertical-alignment`
- `.row-number-9`
- `.hs-cta-embed-118246171351 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.hs-cta-embed-118357267693 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.hs-cta-embed-118357267939 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.hs-cta-embed-118358485483 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.hs-cta-embed-118359585984 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.hs-cta-embed-118359552209 > .go812842568[aria-label="Embedded CTA"][title="Embedded CTA"], .body-wrapper`
- `.row-number-18`
- `.simple-heading`
- `.row-number-22`
- `.row-number-23`
- `.cell_1684744938200-vertical-alignment`
- `.row-number-27`
- `.row-number-29`
- `.row-number-32`
