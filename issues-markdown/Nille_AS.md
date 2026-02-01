# WCAG Violations Report for Nille AS

**Timestamp:** 2026-02-01T00:34:55.751Z
**URL:** [https://www.nille.no/#](https://www.nille.no/#)
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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 8

#### Affected Elements:

- `a[target="_self"]:nth-child(1) > img[width="93px"]`
- `a[target="_self"]:nth-child(2) > img[width="93px"]`
- `a[target="_self"]:nth-child(3) > img[width="93px"]`
- `a[target="_self"]:nth-child(4) > img[width="93px"]`
- `a[target="_self"]:nth-child(5) > img[width="93px"]`
- `a[target="_self"]:nth-child(6) > img[width="93px"]`
- `a[target="_self"]:nth-child(7) > img[width="93px"]`
- `a[target="_self"]:nth-child(8) > img[width="93px"]`

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
- **Count:** 11

#### Affected Elements:

- `a[target="_self"]:nth-child(1)`
- `a[target="_self"]:nth-child(2)`
- `a[target="_self"]:nth-child(3)`
- `a[target="_self"]:nth-child(4)`
- `a[target="_self"]:nth-child(5)`
- `a[target="_self"]:nth-child(6)`
- `a[target="_self"]:nth-child(7)`
- `a[target="_self"]:nth-child(8)`
- `.swiper-slide-prev > a[href$="lys/"]`
- `div[data-swiper-slide-index="1"] > a[aria-label=""][title=""][data-discover="true"]`
- `div[data-swiper-slide-index="2"] > a[aria-label=""][title=""][data-discover="true"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 2

#### Affected Elements:

- `.topBar--hOWYROG`
- `.htmlDrawerWrapper--rQ6eisE`
