# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-08-03T00:59:02.378Z
**URL:** [https://www.aftenbladet.no/#](https://www.aftenbladet.no/#)
**Total Violations:** 3

## Violation Details

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 2

#### Affected Elements:

- `._logos_e3b6k_158 > a[href$="aftenbladet.no/"]`
- `._logos_e3b6k_158 > a[target="_blank"][data-astro-cid-5km4f4xx=""]`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `track-element[data-track-id="teaser:113188"] > ._podcast_d38gf_1 > ._meta_d38gf_48 > ._root_4b03h_54._small_4b03h_76[vendor="sa"]`
- `track-element[data-track-id="teaser:113169"] > ._podcast_d38gf_1 > ._meta_d38gf_48 > ._root_4b03h_54._small_4b03h_76[vendor="sa"]`
- `track-element[data-track-id="teaser:113161"] > ._podcast_d38gf_1 > ._meta_d38gf_48 > ._root_4b03h_54._small_4b03h_76[vendor="sa"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
