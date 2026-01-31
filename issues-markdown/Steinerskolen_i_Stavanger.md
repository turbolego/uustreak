# WCAG Violations Report for Steinerskolen i Stavanger

**Timestamp:** 2026-01-31T00:31:25.686Z
**URL:** [https://www.steinerskolen-stavanger.no/#](https://www.steinerskolen-stavanger.no/#)
**Total Violations:** 4

## Violation Details

### Headings should not be empty

- **Impact:** minor
- **Description:** Ensure headings have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright
- **Tags:** cat.name-role-value, best-practice
- **Count:** 1

#### Affected Elements:

- `h2`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.pp-menu-default > nav`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 4

#### Affected Elements:

- `#fl-icon-text-8w7hzopxga04 > .fl-icon-text-link.fl-icon-text-wrap[href="http://986%2055%20321"]`
- `p > .fl-icon-text-link.fl-icon-text-wrap[href="http://986%2055%20321"]`
- `.pp-social-icon[itemscope=""]:nth-child(1) > a[title=""][aria-label=""][itemprop="sameAs"]`
- `.pp-social-icon[itemscope=""]:nth-child(2) > a[title=""][aria-label=""][itemprop="sameAs"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 3

#### Affected Elements:

- `.cky-title`
- `.cky-notice-des`
- `.fl-screen-reader-text`
