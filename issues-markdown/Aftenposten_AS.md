# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-09-25T03:45:27.851Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 2

#### Affected Elements:

- `._link_1676t_34[data-content-id="d4Kd7J"][data-content-newsroom="ap"] > ._figure_1676t_58 > ._overlay_1676t_483._badges_1676t_478._small_1676t_541 > ._logo_1676t_536[viewBox="0 0 21 18"][role="img"]`
- `._link_1676t_34[data-content-id="oErVKB"][data-content-newsroom="ap"] > ._figure_1676t_58 > ._overlay_1676t_483._badges_1676t_478._small_1676t_541 > ._logo_1676t_536[viewBox="0 0 21 18"][role="img"]`
