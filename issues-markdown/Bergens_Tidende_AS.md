# WCAG Violations Report for Bergens Tidende AS

**Timestamp:** 2026-06-14T01:26:52.128Z
**URL:** [https://www.bt.no/](https://www.bt.no/)
**Total Violations:** 6

## Violation Details

### Elements must meet minimum color contrast ratio thresholds

- **Impact:** serious
- **Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- **Tags:** cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT, RGAAv4, RGAA-3.2.1
- **Count:** 3

#### Affected Elements:

- `a[data-content-id="xrQWOR"] > ._main_1me2i_119 > ._meta_1me2i_188 > ._label_1me2i_200._reviewLabel_1me2i_340.label-medium`
- `a[data-content-id="GxjgM9"] > ._main_1me2i_119 > ._meta_1me2i_188 > ._label_1me2i_200._reviewLabel_1me2i_340.label-medium`
- `span[aria-label="Se alle podkaster"] > span[aria-hidden="true"]`

### Aside should not be contained in another landmark

- **Impact:** moderate
- **Description:** Ensure the complementary landmark or aside is at top level
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `aside`

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `._logos_e3b6k_158 > a[href$="bt.no/"]`

### Interactive controls must not be nested

- **Impact:** serious
- **Description:** Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright
- **Tags:** cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 3

#### Affected Elements:

- `audio-play-button[title="Presset øker på Brann-sjefene"]`
- `track-element[data-track-id="teaser:126553"] > ._podcast_pgscv_1 > ._meta_pgscv_48 > ._root_pa3qf_54._small_pa3qf_72[vendor="bt"]`
- `track-element[data-track-id="teaser:126540"] > ._podcast_pgscv_1 > ._meta_pgscv_48 > ._root_pa3qf_54._small_pa3qf_72[vendor="bt"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 1

#### Affected Elements:

- `.sch-datacontroller__text`

### <svg> elements with an img role must have alternative text

- **Impact:** serious
- **Description:** Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.5
- **Count:** 3

#### Affected Elements:

- `a[data-content-id="q6kw8o"] > ._main_1me2i_119 > ._meta_1me2i_188 > ._hearts_4walc_1[width="99"][height="15"]`
- `a[data-content-id="xrQWOR"] > ._main_1me2i_119 > ._meta_1me2i_188 > ._hearts_4walc_1[width="99"][height="15"]`
- `a[data-content-id="GxjgM9"] > ._main_1me2i_119 > ._meta_1me2i_188 > ._hearts_4walc_1[width="99"][height="15"]`
