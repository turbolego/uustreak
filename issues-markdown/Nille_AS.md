# WCAG Violations Report for Nille AS

**Timestamp:** 2025-10-12T00:22:58.163Z
**URL:** [https://www.nille.no/#](https://www.nille.no/#)
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
- **Count:** 8

#### Affected Elements:

- `.row:nth-child(1) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide[data-swiper-slide-index="0"] > a[href$="halloween/"][aria-label=""][title=""]`
- `.row:nth-child(1) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-prev.swiper-slide[data-swiper-slide-index="1"] > a[href$="kostymer/"][aria-label=""][title=""]`
- `.row:nth-child(1) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-active.swiper-slide[data-swiper-slide-index="2"] > a[href$="soverom/"][aria-label=""][title=""]`
- `.row:nth-child(1) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-next.swiper-slide[data-swiper-slide-index="3"] > a[aria-label=""][title=""]`
- `.row:nth-child(2) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide[data-swiper-slide-index="0"] > a[href$="halloween/"][aria-label=""][title=""]`
- `.row:nth-child(2) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-prev.swiper-slide[data-swiper-slide-index="1"] > a[href$="kostymer/"][aria-label=""][title=""]`
- `.row:nth-child(2) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-active.swiper-slide[data-swiper-slide-index="2"] > a[href$="soverom/"][aria-label=""][title=""]`
- `.row:nth-child(2) > .slider-block > .wrapper--qt5MxQo > .slider--MghjpMP.swiper.swiper-initialized > .swiper-wrapper > .swiper-slide-next.swiper-slide[data-swiper-slide-index="3"] > a[aria-label=""][title=""]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 2

#### Affected Elements:

- `.topBar--hOWYROG`
- `.content--QC6mDoR`
