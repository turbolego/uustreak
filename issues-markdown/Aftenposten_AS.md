# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-07-06T03:09:35.892Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
**Total Violations:** 4

## Violation Details

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `iframe[allowfullscreen=""]`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `aside`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 3

#### Affected Elements:

- `a[data-content-id="zOxLRv"] > ._main_1re19_175 > ._meta_1re19_254 > ._inline_1re19_502._badges_1re19_475._small_1re19_538 > ._logo_1re19_533[viewBox="0 0 21 18"][role="img"]`
- `._link_1re19_34[data-content-id="Wv8LjG"][data-content-newsroom="ap"] > ._figure_1re19_59 > ._overlay_1re19_480._badges_1re19_475._small_1re19_538 > ._logo_1re19_533[viewBox="0 0 21 18"][role="img"]`
- `a[data-content-id="n10gAn"] > ._figure_1re19_59 > ._overlay_1re19_480._badges_1re19_475._small_1re19_538 > ._logo_1re19_533[viewBox="0 0 21 18"][role="img"]`
