# WCAG Violations Report for Eiendomsmegler Vest AS

**Timestamp:** 2025-12-26T00:39:02.262Z
**URL:** [https://www.eiendomsmeglernorge.no/](https://www.eiendomsmeglernorge.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `#menu-item-1064875 > .suki-menu-item-link > .suki-menu-item-title`
- `#menu-item-1064874 > .suki-menu-item-link > .suki-menu-item-title`
- `#menu-item-1064876 > .suki-menu-item-link > .suki-menu-item-title`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `h6`

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
- **Count:** 5

#### Affected Elements:

- `.suki-header-logo > .site-title.h1.menu-item > .suki-menu-item-link[rel="home"]`
- `.image-top-side.sm-2col:nth-child(1) > .sm-2col-image-wrapper > a`
- `.image-top-side.sm-2col:nth-child(2) > .sm-2col-image-wrapper > a`
- `.image-top-side.sm-2col:nth-child(3) > .sm-2col-image-wrapper > a`
- `.image-top-side.sm-2col:nth-child(4) > .sm-2col-image-wrapper > a`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 8

#### Affected Elements:

- `.skip-link`
- `#boligreise`
- `#boliglan`
- `#mer-om-bolig`
- `h6`
- `#boligsok > .sm-section > h2`
- `#vi-gjor-boligen-din-synlig`
- `.footer-disclaimer`
