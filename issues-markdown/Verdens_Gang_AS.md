# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-10-09T05:16:15.104Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- **Target:** `._mastheadSearch_1jvjx_142 > ._container_lzmb9_5._fillTertiary_lzmb9_16[action="https://www.vg.no/sok"] > input`
  - **HTML:** `<input aria-label="Søk" auto-complete="off" class="_input_lzmb9_20 button-label-large" name="q" placeholder="Søk" type="search">`
  - **Failure summary:** Fix any of the following: Element has insufficient color contrast of 3.83 (foreground color: #f1bfbf, background color: #c50000, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1


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

- **Target:** `svg[viewBox="0 0 90 45"]`
  - **HTML:** `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 45" style="flex-shrink:0;height:var(--graphic-size, var(--space-l));width:auto" role="img">`
  - **Failure summary:** Fix any of the following: Element has no child that is a title aria-label attribute does not exist or is empty aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty Element ha…

