# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2026-10-15T05:15:48.203Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
**Total Violations:** 2

## Violation Details

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `.sch-datacontroller__text`
  - **HTML:** `<span class="sch-datacontroller__text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks


### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- **Target:** `._overlay_1676t_483 > ._logo_1676t_536[viewBox="0 0 21 18"][role="img"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18" role="img" class="_logo_1676t_536" style="flex-shrink: 0; height: var(--graphic-size, var(--space-l)); width: auto;">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

