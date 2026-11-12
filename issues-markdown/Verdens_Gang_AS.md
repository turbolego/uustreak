# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-11-12T06:26:56.358Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 9

#### Affected Elements:

- `vg-sprengkulde-front,#kommune-5612 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5610 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5520 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5524 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5628 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5512 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5518 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5605 > .td-temp.td.svelte-1584jvt`
- `vg-sprengkulde-front,#kommune-5522 > .td-temp.td.svelte-1584jvt`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img or image role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 1

#### Affected Elements:

- `svg[viewBox="0 0 90 45"]`
