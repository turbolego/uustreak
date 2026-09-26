# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-09-26T03:49:50.006Z
**URL:** [https://www.bt.no/](https://www.bt.no/)
**Total Violations:** 2

## Violation Details

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `track-element[data-track-id="teaser:127763"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
- `track-element[data-track-id="teaser:127719"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
- `track-element[data-track-id="teaser:127690"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
