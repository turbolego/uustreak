# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-09-01T03:52:12.314Z
**URL:** [https://www.bt.no/](https://www.bt.no/)
**Total Violations:** 4

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 1

#### Affected Elements:

- `.weatherTemperature`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `._logos_e3b6k_158 > a[href$="bt.no/"]`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `track-element[data-track-id="teaser:127477"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
- `track-element[data-track-id="teaser:127469"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`
- `track-element[data-track-id="teaser:127431"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_me3cj_65._small_me3cj_88[vendor="bt"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
