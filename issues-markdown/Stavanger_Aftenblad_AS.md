# WCAG Violations Report for Stavanger Aftenblad AS

**Timestamp:** 2026-08-28T10:10:09.179Z
**URL:** [https://www.aftenbladet.no/](https://www.aftenbladet.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 2

#### Affected Elements:

- `time[datetime="2026-08-28T09:58:47.000Z"] > span[data-nosnippet="true"]`
- `iframe[title="Tips oss"], .headline`

### Frames must have an accessible name

- **Impact:** serious
- **Description:** Ensure <iframe> and <frame> elements have an accessible name
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/frame-title?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i, TTv5, TT12.d, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-2.1.1
- **Count:** 1

#### Affected Elements:

- `smart-frame:nth-child(1) > iframe[allowfullscreen=""][allowtransparency=""][scrolling="no"]`

### Links must be distinguishable without relying on color

- **Impact:** serious
- **Description:** Ensure links are distinguished from surrounding text in a way that does not rely on color
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/link-in-text-block?application=playwright
- **Tags:** cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1, RGAAv4, RGAA-10.6.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__read-more`

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

- `track-element[data-track-id="teaser:113341"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_13j6p_59._small_13j6p_81[vendor="sa"]`
- `track-element[data-track-id="teaser:113324"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_13j6p_59._small_13j6p_81[vendor="sa"]`
- `track-element[data-track-id="teaser:113318"] > ._podcast_9yiwy_1 > ._meta_9yiwy_48 > ._root_13j6p_59._small_13j6p_81[vendor="sa"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`
