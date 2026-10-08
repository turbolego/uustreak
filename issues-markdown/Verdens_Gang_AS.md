# WCAG Violations Report for Verdens Gang AS

**Timestamp:** 2026-10-08T10:49:50.330Z
**URL:** [https://www.vg.no/](https://www.vg.no/)
**Total Violations:** 2

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
- **Count:** 2

#### Affected Elements:

- **Target:** `.sch-datacontroller__text`
  - **HTML:** `<span class="sch-datacontroller__text">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `push-banner, a[href$="fFpxm"]`
  - **HTML:** `<a href="https://r.vg.no/fFpxm">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

