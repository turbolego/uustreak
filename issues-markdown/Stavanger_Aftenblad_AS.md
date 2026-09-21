# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-09-21T19:35:22.961Z
**URL:** [https://www.aftenbladet.no/](https://www.aftenbladet.no/)
**Total Violations:** 3

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `iframe[title="Tips oss"], .headline`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `track-element[data-track-id="teaser:113506"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
- `track-element[data-track-id="teaser:113507"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`
- `track-element[data-track-id="teaser:113459"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="sa"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
